import { GoogleGenerativeAI } from "@google/generative-ai";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Pehla model main hai, baaki fallback. 404 aaye to agle pe chala jayega.
// Naam badalne ho to code nahi, .env.local / Vercel me GEMINI_MODELS=a,b,c likho
const MODELS = (
  process.env.GEMINI_MODELS || "gemini-3.8-flash,gemini-3.5-flash-lite"
)
  .split(",")
  .map((m) => m.trim().replace(/^models\//, ""))
  .filter(Boolean);

const MAX_ATTEMPTS = 4;

const MIN_WORDS = 900; // is se kam ho to expand karwayenge
const HARD_MIN_WORDS = 800; // is se kam ho to publish nahi hoga

// Google ke hisaab se image sizes (16:9, 1200px+ wide)
const BANNER_SIZE = { w: 1600, h: 900 };
const INLINE_SIZE = { w: 1200, h: 675 };

const UTM = "utm_source=recipeoai&utm_medium=referral";

const JSON_CONFIG = {
  responseMimeType: "application/json",
  maxOutputTokens: 8192,
  temperature: 0.8,
};
const TEXT_CONFIG = { maxOutputTokens: 8192, temperature: 0.7 };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- Gemini call: retry + fallback model ---------- */
async function generate(prompt, config) {
  let lastErr;

  for (const name of MODELS) {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const model = genAI.getGenerativeModel({
          model: name,
          generationConfig: config,
        });
        const result = await model.generateContent(prompt);
        return result.response.text();
      } catch (err) {
        lastErr = err;
        const msg = String(err?.message || err);

        // Model available nahi -> agle model pe jao
        if (/\[404/.test(msg)) {
          console.warn(`Model ${name} not available, trying next...`);
          break;
        }

        // Key / request ki galti -> retry ka fayda nahi
        if (/\[(400|401|403)/.test(msg)) throw err;

        // Busy / temporary -> retry
        const retryable =
          /\[(500|502|503|504|429)/.test(msg) ||
          /high demand|overloaded|fetch failed|ECONNRESET|ETIMEDOUT/i.test(msg);
        if (!retryable) throw err;

        console.warn(`${name} busy (attempt ${attempt}/${MAX_ATTEMPTS}).`);
        if (attempt < MAX_ATTEMPTS) await sleep(attempt * 5000);
      }
    }
  }

  throw lastErr || new Error("Gemini failed on all models");
}

const generateJsonText = (prompt) => generate(prompt, JSON_CONFIG);
const generateText = (prompt) => generate(prompt, TEXT_CONFIG);

function stripFences(text) {
  return text
    .replace(/```json\n?/g, "")
    .replace(/```markdown\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();
}

function parseJson(text) {
  return JSON.parse(stripFences(text));
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function countWords(md = "") {
  return md
    .replace(/[#*_`>\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function todayLabel() {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  });
}

/* ---------- 1. Aaj ka topic (sirf food/recipe, US + Canada) ---------- */

// Alag alag themes, taaki har din alag angle mile
const SEED_THEMES = [
  "easy dinner recipes", "air fryer recipes", "healthy breakfast ideas",
  "instant pot recipes", "meal prep ideas", "vegetarian dinner recipes",
  "chicken dinner recipes", "pasta recipes", "soup recipes",
  "easy dessert recipes", "baking recipes", "quick lunch ideas",
  "sheet pan dinners", "snack ideas", "holiday recipes",
  "budget meals", "high protein meals", "breakfast casserole",
  "sandwich recipes", "salad recipes", "rice recipes",
  "ground beef recipes", "seafood dinner recipes", "cookie recipes",
  "crockpot recipes", "casserole recipes", "smoothie recipes",
  "potato recipes", "taco recipes", "bread recipes",
];

const TITLE_STOP = new Set([
  "easy", "best", "recipe", "recipes", "for", "the", "and", "with", "to",
  "of", "a", "in", "your", "how", "make", "quick", "ideas", "simple",
  "perfect", "delicious", "homemade", "top", "that", "you", "from", "no",
]);

// Purane titles me jo words baar baar aaye (jaise slow, cooker, fall)
function overusedWords(titles) {
  const counts = {};
  for (const t of titles) {
    for (const w of new Set(
      t.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/)
    )) {
      if (w.length > 2 && !TITLE_STOP.has(w)) counts[w] = (counts[w] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .filter(([, n]) => n >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([w]) => w);
}

// Google ke asli search suggestions (country ke hisaab se: "us" ya "ca")
async function googleSuggestions(query, country) {
  try {
    const res = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=${country}&q=${encodeURIComponent(
        query
      )}`,
      { signal: AbortSignal.timeout(6000) }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data?.[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

// Google Trends: aaj US / Canada me kya trend kar raha hai (feed me 10-20 items hote hain)
async function trendingToday(geo) {
  try {
    const res = await fetch(`https://trends.google.com/trending/rss?geo=${geo}`, {
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<title>(?:<!\[CDATA\[)?([^<\]]+)/g)]
      .map((m) => m[1].trim())
      .slice(1, 26); // pehla title feed ka naam hota hai
  } catch {
    return [];
  }
}

async function gatherTopicSignals() {
  const seeds = [...SEED_THEMES].sort(() => Math.random() - 0.5).slice(0, 4);

  const [usLists, caLists, trendsUS, trendsCA] = await Promise.all([
    Promise.all(seeds.map((s) => googleSuggestions(s, "us"))),
    Promise.all(seeds.map((s) => googleSuggestions(s, "ca"))),
    trendingToday("US"),
    trendingToday("CA"),
  ]);

  return {
    seeds,
    suggestionsUS: [...new Set(usLists.flat())].slice(0, 30),
    suggestionsCA: [...new Set(caLists.flat())].slice(0, 30),
    trends: [...new Set([...trendsUS, ...trendsCA])],
  };
}

export async function pickTopic(existingTitles) {
  const { seeds, suggestionsUS, suggestionsCA, trends } =
    await gatherTopicSignals();
  const banned = overusedWords(existingTitles);
  const list = (arr) => (arr.length ? arr.join(" | ") : "none available");

  const prompt = `
You are an SEO strategist for a recipe website. The audience is readers in the United States and Canada. Write everything in English.
Today's date is ${todayLabel()}.

Pick ONE blog topic about FOOD, RECIPES or COOKING only. No other subject is allowed.

REAL DATA (what people actually search on Google right now). Pick from these or a close variation:
Theme ideas for today: ${seeds.join(" | ")}
Google search suggestions, United States: ${list(suggestionsUS)}
Google search suggestions, Canada: ${list(suggestionsCA)}
Trending searches today in US and Canada (use ONLY if food related, ignore everything else): ${list(trends)}

Think about Google Discover too. Discover rewards fresh, visual, seasonal topics that people are about to want: dishes for holidays or events happening in the next 2-3 weeks, eye-catching finished dishes, and timely comfort or crowd-pleaser food. Prefer a topic that fits this AND matches the real search data above.

Rules:
- Choose a specific long-tail keyword a real person would type into Google.
- Prefer topics with high search interest that are NOT already covered below.
- Seasonality is a bonus only when it really fits. Do NOT force the season into every topic.
- VARY the topic: a different main ingredient, dish type, meal type (breakfast, lunch, dinner, dessert, snack) and cooking method than the recent articles.
${banned.length ? `- These words are overused in our recent titles, do NOT use them in the new topic: ${banned.join(", ")}` : ""}

Already published (do NOT repeat or closely overlap in dish, main ingredient or method):
${existingTitles.length ? existingTitles.map((t) => `- ${t}`).join("\n") : "- none yet"}

Return ONLY JSON: { "topic": "the topic as a search phrase", "isFoodOrRecipeTopic": true }
`;

  console.log("Signals:", {
    seeds,
    us: suggestionsUS.length,
    ca: suggestionsCA.length,
    trends: trends.length,
  });

  for (let i = 0; i < 3; i++) {
    try {
      const data = parseJson(await generateJsonText(prompt));
      if (data.topic && data.isFoodOrRecipeTopic === true) {
        const lower = String(data.topic).toLowerCase();
        if (banned.some((w) => lower.includes(w)) && i < 2) {
          console.warn("Topic uses overused words, retrying:", data.topic);
          continue;
        }
        console.log("Topic picked:", data.topic);
        return data.topic;
      }
      console.warn("Topic rejected (not food/recipe), retrying:", data.topic);
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn("Topic JSON invalid, retrying...");
        continue;
      }
      throw e;
    }
  }
  throw new Error("Could not get a food/recipe topic from Gemini");
}

/* ---------- 2. Article (min 900 words) ---------- */
async function expandArticle(topic, content) {
  const prompt = `
The article below about "${topic}" is too short. Rewrite and expand it to at least 1200 words, in English.
Keep the same Markdown structure (## and ### headings, lists) and keep the "## FAQs" section at the very end.
Add real value: practical tips, common mistakes, variations, substitutions, storage and reheating, serving ideas.
Stay strictly on food, recipes and cooking. Do NOT add an H1 title. Return ONLY the Markdown article, nothing else.

ARTICLE:
${content}
`;
  return stripFences(await generateText(prompt));
}

export async function generateArticle(topic) {
  const prompt = `
You are an expert food writer and SEO specialist writing for readers in the United States and Canada.
Write a helpful, original, human-sounding blog article about: "${topic}"

STRICT RULES:
- The article must be ONLY about food, recipes and cooking. No other subject.
- Write EVERYTHING in English (American English). No other language.

Return ONLY a valid JSON object:
{
  "title": "Catchy SEO title with the main keyword near the start, max 60 characters",
  "metaTitle": "SEO title, max 60 characters",
  "metaDescription": "Compelling meta description with the main keyword, 140-155 characters",
  "excerpt": "2-3 sentence summary for the blog listing",
  "keywords": "6-8 comma separated keywords",
  "bannerQuery": "2-4 word Unsplash search query for the banner photo (the finished dish, food only)",
  "bannerAlt": "Descriptive alt text for the banner image, 8-14 words, includes the main keyword naturally",
  "inlineQuery": "2-4 word Unsplash search query for a DIFFERENT photo (ingredients, cooking process or a serving shot, food only)",
  "inlineAlt": "Descriptive alt text for the in-article image, 8-14 words",
  "recipeCategory": "ONE of: Breakfast, Lunch, Dinner, Main Course, Appetizer, Snack, Dessert, Side Dish, Soup, Salad, Drink, Baking",
  "recipeCuisine": "Cuisine type in 1-2 words, for example American, Italian, Mexican, Indian",
  "description": "1-2 sentence description of the main dish or topic, max 200 characters",
  "prepTime": "Prep time as ISO 8601 duration, for example PT15M or PT1H. Empty string if the article is not about one single recipe",
  "cookTime": "Cook time as ISO 8601 duration, for example PT30M or PT8H. Empty string if not about one single recipe",
  "recipeYield": "For example 6 servings. Empty string if not about one single recipe",
  "nutrition": "Approximate per serving, for example 350 calories, 25g protein, 12g fat, 30g carbohydrates. Empty string if not about one single recipe",
  "content": "Full article in Markdown"
}

Rules for "content":
- MINIMUM 1100 words (mandatory, longer is better, up to 1500)
- Do NOT include the H1 title. Start with an engaging intro paragraph that uses the main keyword in the first 100 words
- Then a "## Key Takeaways" section with 4-5 bullet points
- Then 5-7 sections using ## headings (use the main keyword or close variations naturally in at least one heading), with ### sub sections where useful
- Use bullet lists and numbered lists where helpful
- Include practical tips, common mistakes, substitutions, storage and make-ahead advice
- Give measurements in US units (cups, oz, °F) and also metric (grams, ml, °C) in brackets so Canadian readers can use them
- Do not mention specific brand names
- Do not insert images or image links in the Markdown
- End with a "## FAQs" section containing exactly 4 questions as ### headings, each followed by a short answer paragraph
- Natural, friendly tone. No keyword stuffing, no fluff, no fake claims, no medical promises
`;

  // JSON kabhi kabhi toot jata hai, to 2 baar try
  let article;
  for (let i = 0; i < 2; i++) {
    try {
      article = parseJson(await generateJsonText(prompt));
      break;
    } catch (e) {
      if (!(e instanceof SyntaxError) || i === 1) throw e;
      console.warn("Article JSON invalid, retrying...");
    }
  }

  if (!article?.title || !article?.content) {
    throw new Error("Gemini returned an incomplete article");
  }

  // Word count check, chhota ho to expand
  let words = countWords(article.content);
  console.log("Initial word count:", words);

  for (let i = 0; i < 2 && words < MIN_WORDS; i++) {
    console.log(`Too short (${words} words). Expanding, attempt ${i + 1}...`);
    article.content = await expandArticle(topic, article.content);
    words = countWords(article.content);
    console.log("New word count:", words);
  }

  if (words < HARD_MIN_WORDS) {
    throw new Error(`Article too short (${words} words), not publishing`);
  }

  article.wordCount = words;
  article.keywords = Array.isArray(article.keywords)
    ? article.keywords.join(", ")
    : String(article.keywords || "");

  return article;
}

/* ---------- 3. Markdown -> Strapi Blocks ---------- */
function inline(text) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**") && part.endsWith("**") && part.length > 4
        ? { type: "text", text: part.slice(2, -2), bold: true }
        : { type: "text", text: part }
    );
}

export function markdownToBlocks(md) {
  const blocks = [];
  let list = null;
  const flush = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      flush();
      blocks.push({
        type: "heading",
        level: Math.max(h[1].length, 2),
        children: inline(h[2]),
      });
      continue;
    }

    const ul = line.match(/^[-*]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    if (ul || ol) {
      const format = ul ? "unordered" : "ordered";
      if (!list || list.format !== format) {
        flush();
        list = { type: "list", format, children: [] };
      }
      list.children.push({
        type: "list-item",
        children: inline((ul || ol)[1]),
      });
      continue;
    }

    flush();
    blocks.push({ type: "paragraph", children: inline(line) });
  }
  flush();
  return blocks;
}

/* ---------- 4. Unsplash photos ---------- */
async function searchUnsplash(query, excludeIds = []) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query
    )}&per_page=5&orientation=landscape&content_filter=high`,
    { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return (data.results || []).find((p) => !excludeIds.includes(p.id)) || null;
}

async function getPhoto(query, excludeIds = []) {
  if (!UNSPLASH_KEY) return null;
  try {
    let photo = await searchUnsplash(query, excludeIds);
    // Na mile to backup food photo
    if (!photo)
      photo = await searchUnsplash("delicious homemade food", excludeIds);
    if (!photo) return null;

    // Unsplash rule: download track karna zaroori hai
    fetch(photo.links.download_location, {
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    }).catch(() => {});

    return {
      id: photo.id,
      raw: photo.urls.raw,
      authorName: photo.user.name,
      authorUrl: `${photo.user.links.html}?${UTM}`,
      credit: `Photo by ${photo.user.name} on Unsplash`,
    };
  } catch (e) {
    console.error("Unsplash error:", e);
    return null;
  }
}

// Exact size me crop (Google ke liye 16:9)
function sized(raw, w, h) {
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}w=${w}&h=${h}&fit=crop&crop=entropy&q=80&fm=jpg`;
}

/* ---------- 5. Image Strapi me upload (poora file object wapas) ---------- */
async function uploadImage(url, fileName, alt, caption) {
  try {
    const imgRes = await fetch(url);
    if (!imgRes.ok) return null;
    const blob = await imgRes.blob();

    const form = new FormData();
    form.append("files", blob, `${fileName}.jpg`);
    form.append(
      "fileInfo",
      JSON.stringify({ name: fileName, alternativeText: alt, caption })
    );

    const res = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      body: form,
    });
    if (!res.ok) {
      console.error("Upload failed:", await res.text());
      return null;
    }
    const uploaded = await res.json();
    return uploaded[0] || null;
  } catch (e) {
    console.error("Upload error:", e);
    return null;
  }
}

// Banner + article ki image, dono alag photos
export async function prepareImages(article) {
  const base = slugify(article.title);

  const bannerPhoto = await getPhoto(article.bannerQuery || article.title);
  const inlinePhoto = await getPhoto(
    article.inlineQuery || "cooking ingredients kitchen",
    bannerPhoto ? [bannerPhoto.id] : []
  );

  const banner = bannerPhoto
    ? await uploadImage(
        sized(bannerPhoto.raw, BANNER_SIZE.w, BANNER_SIZE.h),
        base,
        article.bannerAlt || article.title,
        bannerPhoto.credit
      )
    : null;

  const inlineFile = inlinePhoto
    ? await uploadImage(
        sized(inlinePhoto.raw, INLINE_SIZE.w, INLINE_SIZE.h),
        `${base}-recipe-photo`,
        article.inlineAlt || article.title,
        inlinePhoto.credit
      )
    : null;

  return { banner, inline: inlineFile, inlinePhoto };
}

/* ---------- 6. Article ke andar image lagana ---------- */
function creditBlock(photo) {
  return {
    type: "paragraph",
    children: [
      { type: "text", text: "Photo by ", italic: true },
      {
        type: "link",
        url: photo.authorUrl,
        children: [{ type: "text", text: photo.authorName, italic: true }],
      },
      { type: "text", text: " on ", italic: true },
      {
        type: "link",
        url: `https://unsplash.com/?${UTM}`,
        children: [{ type: "text", text: "Unsplash", italic: true }],
      },
    ],
  };
}

function insertInlineImage(blocks, images) {
  const out = [...blocks];
  const headingIdx = out
    .map((b, i) => (b.type === "heading" ? i : -1))
    .filter((i) => i >= 0);

  // 2nd heading se pehle (Key Takeaways ke baad), warna shuru me
  const at = headingIdx.length >= 2 ? headingIdx[1] : Math.min(2, out.length);

  out.splice(
    at,
    0,
    {
      type: "image",
      image: images.inline,
      children: [{ type: "text", text: "" }],
    },
    creditBlock(images.inlinePhoto)
  );
  return out;
}

/* ---------- 7. Blog create + publish ---------- */
async function postBlog(data) {
  return fetch(`${STRAPI_URL}/api/blogs?status=published`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });
}

export async function createAndPublishBlog(article, images, existingSlugs) {
  let slug = slugify(article.title);
  if (existingSlugs.has(slug)) {
    slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
  }

  const plainBlocks = markdownToBlocks(article.content);
  const hasInline = Boolean(images?.inline && images?.inlinePhoto);

  const base = {
    Title: article.title.slice(0, 120),
    Slug: slug,
    Excerpt: article.excerpt,
    MetaTitle: (article.metaTitle || article.title).slice(0, 60),
    MetaDescription: (article.metaDescription || article.excerpt).slice(0, 155),
    Keywords: article.keywords,
  };
  if (images?.banner?.id) base.Banner = images.banner.id;

  // Recipe / SEO fields (khali ho to bhejte hi nahi)
  const recipeFields = {
    recipeCategory: article.recipeCategory,
    recipeCuisine: article.recipeCuisine,
    description: article.description,
    prepTime: article.prepTime,
    cookTime: article.cookTime,
    recipeYield: article.recipeYield,
    nutrition: article.nutrition,
  };
  for (const [key, value] of Object.entries(recipeFields)) {
    if (typeof value === "string" && value.trim()) {
      base[key] = value.trim();
    }
  }
  base.author = "Manish Singh"; // hamesha fix

  let inlineUsed = hasInline;
  let res = await postBlog({
    ...base,
    Content: hasInline ? insertInlineImage(plainBlocks, images) : plainBlocks,
  });

  // Agar Strapi image block reject kare to bina image ke publish karo
  if (!res.ok && hasInline) {
    console.error("Create with inline image failed:", await res.text());
    inlineUsed = false;
    res = await postBlog({ ...base, Content: plainBlocks });
  }

  if (!res.ok) {
    throw new Error(`Strapi create failed: ${await res.text()}`);
  }

  const json = await res.json();
  return {
    id: json.data?.id,
    slug,
    title: base.Title,
    words: article.wordCount,
    inlineImage: inlineUsed,
  };
}