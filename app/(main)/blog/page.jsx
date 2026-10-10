import { getBlogsPage } from "@/actions/blog.actions";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  UserCheck,
  Star,
} from "lucide-react";

const DOMAIN = (process.env.SITE_URL || "https://www.recipeoai.com").replace(
  /\/$/,
  ""
);
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const PAGE_SIZE = 12;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ---------- Helpers ---------- */
function getPageNumber(sp) {
  const n = parseInt(sp?.page, 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

function absolute(path) {
  if (!path) return "";
  return path.startsWith("http") ? path : `${STRAPI_URL}${path}`;
}

// Card ke liye chhota thumbnail (small -> medium -> original)
function getThumb(post) {
  const b = post.Banner;
  const path = b?.formats?.small?.url || b?.formats?.medium?.url || b?.url || "";
  return {
    url: absolute(path) || "/placeholder.jpg",
    alt: b?.alternativeText || post.Title || "Blog Post",
  };
}

function safeJson(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

/* ---------- SEO METADATA ---------- */
export async function generateMetadata({ searchParams }) {
  const page = getPageNumber(await searchParams);
  const canonical = page > 1 ? `${DOMAIN}/blog?page=${page}` : `${DOMAIN}/blog`;
  const suffix = page > 1 ? ` - Page ${page}` : "";

  return {
    title: `Manish Singh Official Blog | AI Cooking, Recipes & Tech Insights${suffix}`,
    description:
      "Explore advanced culinary stories, AI-driven recipe secrets, and professional cooking tips by Master AI Chef Manish Singh.",
    keywords: [
      "AI Recipes",
      "Manish Singh",
      "Cooking Blog",
      "AI Chef",
      "RecipeoAI",
      "Culinary Technology",
    ],
    alternates: { canonical },
    openGraph: {
      title: "Manish Singh Official Blog | AI Cooking Insights",
      description: "Master the art of AI cooking with Manish Singh.",
      url: canonical,
      siteName: "RecipeoAI",
      images: [
        {
          url: `${DOMAIN}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Manish Singh Blog Banner",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

/* ---------- PAGE ---------- */
export default async function BlogPage({ searchParams }) {
  const page = getPageNumber(await searchParams);
  const { blogs, pageCount } = await getBlogsPage(page, PAGE_SIZE);

  // Galat page number (jaise ?page=999) par 404
  if (page > 1 && blogs.length === 0) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Manish Singh Official Blog",
    url: page > 1 ? `${DOMAIN}/blog?page=${page}` : `${DOMAIN}/blog`,
    description:
      "AI-driven recipe secrets and culinary tech insights by Manish Singh.",
    publisher: {
      "@type": "Organization",
      name: "RecipeoAI",
      logo: { "@type": "ImageObject", url: `${DOMAIN}/logo.png` },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs
        .filter((p) => p.Slug)
        .map((post, index) => ({
          "@type": "ListItem",
          position: (page - 1) * PAGE_SIZE + index + 1,
          url: `${DOMAIN}/blog/${post.Slug}`,
          name: post.Title,
        })),
    },
  };

  return (
    <div className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans selection:bg-orange-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }}
      />

      <div className="container mx-auto max-w-6xl">
        {/* --- HEADER --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase rounded-full mb-6 border border-orange-200">
            <UserCheck size={14} /> Manish Singh Official
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-6">
            COOKING <span className="text-orange-600 italic">STORIES.</span>
          </h1>
          <div className="flex items-center gap-2 text-orange-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-stone-400 text-xs font-bold ml-2">
              4.9/5 Rating by AI Enthusiasts
            </span>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        {blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogs.map((post, i) => {
                if (!post.Slug) return null;
                const thumb = getThumb(post);
                const date = new Date(post.publishedAt || post.createdAt);

                return (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-sm hover:-translate-y-3 transition-all duration-700 ring-1 ring-stone-100"
                  >
                    <Link
                      href={`/blog/${post.Slug}`}
                      className="block aspect-[16/10] relative overflow-hidden bg-stone-200"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <img
                        src={thumb.url}
                        alt={thumb.alt}
                        width={500}
                        height={312}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                        loading={i === 0 ? "eager" : "lazy"}
                        fetchPriority={i === 0 ? "high" : "auto"}
                      />
                    </Link>

                    <div className="p-10 flex flex-col flex-grow">
                      <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4 line-clamp-2">
                        <Link
                          href={`/blog/${post.Slug}`}
                          className="hover:text-orange-600 transition-colors"
                        >
                          {post.Title}
                        </Link>
                      </h2>
                      <p className="text-stone-500 line-clamp-3 mb-10 text-sm font-medium leading-relaxed">
                        {post.Excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-stone-50 pt-8">
                        <span className="flex items-center gap-2 text-stone-400 text-[10px] font-black uppercase">
                          <Calendar size={12} className="text-orange-500" />
                          <time dateTime={date.toISOString()}>
                            {date.toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                        </span>

                        <Link
                          href={`/blog/${post.Slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-[10px] font-black rounded-2xl hover:bg-orange-600 transition-all shadow-md active:scale-95"
                        >
                          READ FULL ARTICLE
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* --- PAGINATION --- */}
            {pageCount > 1 && (
              <nav
                aria-label="Blog pagination"
                className="mt-20 flex items-center justify-center gap-4"
              >
                {page > 1 ? (
                  <Link
                    href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-stone-900 text-[10px] font-black uppercase rounded-2xl ring-1 ring-stone-200 hover:bg-orange-600 hover:text-white transition-all"
                  >
                    <ArrowLeft size={14} /> Newer
                  </Link>
                ) : (
                  <span />
                )}

                <span className="text-stone-400 text-xs font-black uppercase tracking-widest">
                  Page {page} of {pageCount}
                </span>

                {page < pageCount ? (
                  <Link
                    href={`/blog?page=${page + 1}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-[10px] font-black uppercase rounded-2xl hover:bg-orange-600 transition-all"
                  >
                    Older <ArrowRight size={14} />
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            )}
          </>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-2xl font-black text-stone-300 italic">
              The chef is writing new stories...
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}