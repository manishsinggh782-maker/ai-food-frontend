import { cache } from "react";
import { getBlogBySlug, getRecentBlogs } from "@/actions/blog.actions";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";
import { UserCheck, ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Comments from "@/components/Comments";

const SITE_URL = (process.env.SITE_URL || "https://www.recipeoai.com").replace(
  /\/$/,
  ""
);
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1495195129352-aec325a55b65?w=1600&q=80";
const BRAND = "Manish Singh AI Chef";

// Ek hi request me post sirf ek baar fetch hoga (metadata + page dono me)
const getPost = cache(getBlogBySlug);

/* ---------- Helpers ---------- */
function getBanner(post) {
  const b = post.Banner;
  const path = b?.url || "";
  const url = path.startsWith("http")
    ? path
    : path
    ? `${STRAPI_URL}${path}`
    : FALLBACK_IMG;
  return {
    url,
    alt: b?.alternativeText || post.Title,
    caption: b?.caption || "",
  };
}

function blockText(block) {
  return (block.children || [])
    .map((c) => (typeof c.text === "string" ? c.text : blockText(c)))
    .join("");
}

function getWordCount(blocks = []) {
  const text = blocks.map(blockText).join(" ").trim();
  return text ? text.split(/\s+/).length : 0;
}

// "## FAQs" ke neeche ke ### headings = sawal, uske baad ka text = jawab
function getFaqs(blocks = []) {
  const faqs = [];
  let inFaq = false;
  let current = null;

  for (const b of blocks) {
    if (b.type === "heading") {
      const text = blockText(b).trim();
      if (b.level === 2) {
        inFaq = /faq|frequently asked/i.test(text);
        current = null;
        continue;
      }
      if (inFaq && b.level >= 3) {
        current = { q: text, a: "" };
        faqs.push(current);
        continue;
      }
    } else if (inFaq && current) {
      const t = blockText(b).trim();
      if (t) current.a += (current.a ? " " : "") + t;
    }
  }
  return faqs.filter((f) => f.q && f.a);
}

function safeJson(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

/* ---------- 1. SEO METADATA ---------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Article Not Found", robots: { index: false } };
  }

  const banner = getBanner(post);
  const pageUrl = `${SITE_URL}/blog/${slug}`;
  const baseTitle = post.MetaTitle || post.Title;
  const fullTitle =
    baseTitle.length + BRAND.length + 3 <= 65
      ? `${baseTitle} | ${BRAND}`
      : baseTitle;
  const description = post.MetaDescription || post.Excerpt || "";

  return {
    title: { absolute: fullTitle },
    description,
    keywords: post.Keywords || undefined,
    alternates: { canonical: pageUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: { "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: post.Title,
      description: post.Excerpt || description,
      url: pageUrl,
      siteName: BRAND,
      images: [{ url: banner.url, width: 1200, height: 630, alt: banner.alt }],
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: ["Manish Singh"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.Title,
      description: post.Excerpt || description,
      images: [banner.url],
    },
  };
}

/* ---------- 2. PAGE ---------- */
export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  const banner = getBanner(post);
  const pageUrl = `${SITE_URL}/blog/${slug}`;
  const words = getWordCount(post.Content);
  const readMins = Math.max(1, Math.ceil(words / 200));
  const faqs = getFaqs(post.Content);
  const dateObj = new Date(post.publishedAt || post.createdAt);

  const recent = await getRecentBlogs(6);
  const latest = recent.filter((b) => b.Slug && b.Slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: post.Title,
    image: [banner.url],
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    wordCount: words || undefined,
    keywords: post.Keywords || undefined,
    author: {
      "@type": "Person",
      name: "Manish Singh",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    description: post.Excerpt || post.MetaDescription,
  };

  const faqLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(post.Title);
  const shareBtn =
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-50 text-stone-500 text-xs font-black uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-sm";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(faqLd) }}
        />
      )}

      <article className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans selection:bg-orange-100">
        <div className="container mx-auto max-w-4xl">
          {/* Back Navigation */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-all mb-12 font-black text-xs uppercase tracking-[0.2em] group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Insights
          </Link>

          {/* ADMIN BRANDING SECTION */}
          <div className="flex items-center gap-5 mb-16 p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100">
            <div className="w-20 h-20 rounded-[1.5rem] bg-stone-900 flex items-center justify-center text-white text-3xl font-black">
              MS
            </div>
            <div>
              <h4 className="text-2xl font-black text-stone-900 leading-none mb-2">
                Manish Singh
              </h4>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase rounded-full flex items-center gap-1">
                  <UserCheck size={10} /> Verified Admin
                </span>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter italic font-serif">
                  Master AI Chef
                </span>
              </div>
            </div>
          </div>

          {/* ARTICLE HEADER */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6 text-stone-400 font-bold text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                <time dateTime={dateObj.toISOString()}>
                  {dateObj.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {readMins} Min Read
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-stone-900 leading-[0.95] tracking-tighter mb-10">
              {post.Title}
            </h1>
            {post.Excerpt && (
              <p className="text-xl md:text-3xl text-stone-500 leading-relaxed font-medium italic border-l-8 border-orange-500 pl-8 py-2">
                {post.Excerpt}
              </p>
            )}
          </header>

          {/* BANNER IMAGE */}
          <figure className="mb-20">
            <div className="relative aspect-[21/10] w-full rounded-[3.5rem] overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-100">
              <img
                src={banner.url}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                alt={banner.alt}
                width={1600}
                height={760}
                fetchPriority="high"
              />
            </div>
            {banner.caption && (
              <figcaption className="mt-4 text-center text-[11px] text-stone-400 font-bold uppercase tracking-widest">
                {banner.caption}
              </figcaption>
            )}
          </figure>

          {/* MAIN ARTICLE BODY */}
          <div className="max-w-3xl mx-auto bg-white p-10 md:p-20 rounded-[4rem] shadow-sm border border-stone-100 relative -mt-32 z-10">
            <div
              className="prose prose-stone lg:prose-2xl max-w-none prose-orange 
               prose-headings:text-stone-900 prose-headings:font-black 
               prose-p:text-stone-700 prose-p:leading-[1.8] 
               prose-img:rounded-[2.5rem] prose-img:shadow-lg prose-strong:text-orange-700"
            >
              {post.Content ? (
                <BlocksRenderer content={post.Content} />
              ) : (
                <p className="text-stone-400 italic font-bold">
                  The chef is preparing the content...
                </p>
              )}
            </div>

            {/* CTA: recipe generator */}
            <div className="mt-16 p-8 rounded-[2rem] bg-orange-50 border border-orange-100 text-center">
              <p className="text-stone-800 font-black text-xl mb-3">
                Want a custom recipe for any dish?
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-2xl bg-orange-600 text-white text-xs font-black uppercase tracking-widest hover:bg-stone-900 transition-all"
              >
                Try our AI Recipe Generator
              </Link>
            </div>

            {/* SHARE */}
            <div className="mt-16 pt-12 border-t border-stone-100 flex flex-col items-center gap-6">
              <p className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em]">
                Share this Insight
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shareBtn}
                >
                  <Share2 size={14} /> WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shareBtn}
                >
                  <Share2 size={14} /> Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shareBtn}
                >
                  <Share2 size={14} /> X
                </a>
              </div>
            </div>
          </div>

          {/* LATEST ARTICLES (internal linking) */}
          {latest.length > 0 && (
            <section className="max-w-3xl mx-auto mt-20">
              <h2 className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
                Latest Articles
              </h2>
              <ul className="grid gap-4">
                {latest.map((b) => (
                  <li key={b.id}>
                    <Link
                      href={`/blog/${b.Slug}`}
                      className="block p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:border-orange-300 hover:shadow-md transition-all"
                    >
                      <span className="block text-lg font-black text-stone-900 mb-1">
                        {b.Title}
                      </span>
                      {b.Excerpt && (
                        <span className="block text-sm text-stone-500 line-clamp-2">
                          {b.Excerpt}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* COMMENTS */}
          <div className="max-w-3xl mx-auto mt-20">
            <Comments blogId={post.id} initialComments={post.comments} />
          </div>
        </div>
      </article>
    </>
  );
}