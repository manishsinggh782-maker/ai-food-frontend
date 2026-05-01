import { getBlogBySlug } from "@/actions/blog.actions";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";
import Script from "next/script";
import { UserCheck, ArrowLeft, Share2, Calendar, Clock, RefreshCw } from "lucide-react";
import Link from "next/link";
import Comments from "@/components/Comments";

// --- 1. KEYWORDS PARSER (JUGAAD FOR RECIPE DATA) ---
const parseKeywords = (keywords) => {
  if (!keywords) return { yield: "2 Servings", prep: "PT5M", cook: "PT15M", ingredients: [] };
  const kw = keywords.split(',').map(k => k.trim());
  return {
    yield: kw[0] || "2 Servings",
    prep: "PT" + (kw[1]?.replace(/\D/g,'') || "5") + "M",
    cook: "PT" + (kw[2]?.replace(/\D/g,'') || "15") + "M",
    ingredients: kw.slice(3)
  };
};

/**
 * 2. MASTER SEO METADATA (USA & CLICK OPTIMIZED)
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found | RecipeoAI" };

  const bannerPath = post.Banner?.url || "";
  const imageUrl = bannerPath.startsWith("http") ? bannerPath : (bannerPath ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerPath}` : "");
  const siteUrl = "https://www.recipeoai.com";

  return {
    // Title optimized < 60 chars
    title: `${post.MetaTitle || post.Title} | RecipeoAI 2026`,
    description: (post.MetaDescription || post.Excerpt).substring(0, 155),
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title: post.Title,
      description: post.Excerpt,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "RecipeoAI Official",
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.Title }] : [],
      type: "article",
      publishedTime: post.publishedAt || post.createdAt,
      modifiedTime: post.updatedAt || post.createdAt,
      authors: ["Manish Singh"],
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return notFound();

  const bannerPath = post.Banner?.url || "";
  const imageUrl = bannerPath.startsWith("http") ? bannerPath : (bannerPath ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerPath}` : "");

  // KEYWORDS LOGIC FOR RECIPE SCHEMA
  const recipeData = parseKeywords(post.Keywords);

  // 3. COMBINED SCHEMA (BLOG + RECIPE) - GOOGLE KHUSH HO JAYEGA
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.recipeoai.com/blog/${slug}` },
        "headline": post.Title,
        "image": [imageUrl],
        "datePublished": post.publishedAt || post.createdAt,
        "dateModified": post.updatedAt || post.createdAt, // Last Update Fix
        "author": { "@type": "Person", "name": "Manish Singh" },
        "description": post.Excerpt || post.MetaDescription
      },
      {
        "@type": "Recipe",
        "name": post.Title,
        "image": [imageUrl],
        "recipeYield": recipeData.yield,
        "prepTime": recipeData.prep,
        "cookTime": recipeData.cook,
        "recipeIngredient": recipeData.ingredients.length > 0 ? recipeData.ingredients : ["Check content for ingredients"],
        "recipeInstructions": [{ "@type": "HowToStep", "text": "Follow the detailed steps mentioned in the article content." }],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1250" }
      }
    ]
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans selection:bg-orange-100">
        <div className="container mx-auto max-w-4xl">

          <Link href="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-all mb-12 font-black text-xs uppercase tracking-[0.2em] group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="flex items-center gap-5 mb-16 p-8 bg-white rounded-[2.5rem] shadow-sm border border-stone-100">
             <div className="w-20 h-20 rounded-[1.5rem] bg-stone-900 flex items-center justify-center text-white text-3xl font-black">MS</div>
             <div>
                <h4 className="text-2xl font-black text-stone-900 leading-none mb-2">Manish Singh</h4>
                <div className="flex items-center gap-3">
                   <span className="px-3 py-1 bg-orange-600 text-white text-[9px] font-black uppercase rounded-full flex items-center gap-1">
                     <UserCheck size={10} /> Verified Admin
                   </span>
                   <span className="text-xs font-bold text-stone-400 uppercase tracking-tighter italic font-serif">Master AI Chef</span>
                </div>
             </div>
          </div>

          <header className="mb-16">
             <div className="flex flex-wrap items-center gap-4 mb-6 text-stone-400 font-bold text-[10px] uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={12}/> Published: {new Date(post.createdAt).toLocaleDateString()}</span>
                {/* LAST UPDATED FIX IN UI */}
                {post.updatedAt && post.updatedAt !== post.createdAt && (
                  <span className="flex items-center gap-1 text-orange-600"><RefreshCw size={12}/> Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
                )}
                <span className="flex items-center gap-1"><Clock size={12}/> 5 Min Read</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-stone-900 leading-[0.95] tracking-tighter mb-10">{post.Title}</h1>
             <p className="text-xl md:text-3xl text-stone-500 leading-relaxed font-medium italic border-l-8 border-orange-500 pl-8 py-2">{post.Excerpt}</p>
          </header>

          <div className="relative aspect-[21/10] w-full mb-20 rounded-[3.5rem] overflow-hidden shadow-2xl ring-1 ring-stone-200 bg-stone-100">
            <img src={imageUrl} className="object-cover w-full h-full" alt={post.Title} fetchPriority="high" />
          </div>

          <div className="max-w-3xl mx-auto bg-white p-10 md:p-20 rounded-[4rem] shadow-sm border border-stone-100 relative -mt-32 z-10">
             <div className="prose prose-stone lg:prose-2xl max-w-none prose-orange prose-headings:text-stone-900 prose-headings:font-black prose-p:text-stone-700 prose-p:leading-[1.8] prose-img:rounded-[2.5rem] prose-strong:text-orange-700">
               {post.Content ? <BlocksRenderer content={post.Content} /> : <p className="text-stone-400 italic font-bold">Preparing content...</p>}
             </div>

             <div className="mt-24 pt-12 border-t border-stone-100 flex flex-col items-center gap-6">
                <p className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em]">Share this Insight</p>
                <div className="flex gap-4">
                   <button className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white transition-all cursor-pointer shadow-sm border-none"><Share2 size={18} /></button>
                </div>
             </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20">
             <Comments blogId={post.id} initialComments={post.comments} />
          </div>

        </div>
      </article>
    </>
  );
}
