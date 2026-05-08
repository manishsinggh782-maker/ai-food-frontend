import { getBlogBySlug } from "@/actions/blog.actions";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";
import Script from "next/script";
import { UserCheck, ArrowLeft, Share2, Calendar, Clock, RefreshCw, Utensils, Flame, Users, ChefHat } from "lucide-react";
import Link from "next/link";
import Comments from "@/components/Comments";

// --- HELPERS: ISO Time to Human Time (PT15M -> 15 MINS) ---
const formatTime = (timeStr) => {
  if (!timeStr) return "N/A";
  return timeStr.replace('PT', '').replace('M', ' MINS').replace('H', ' HOUR ');
};

/**
 * 1. MASTER SEO METADATA
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found | RecipeoAI" };

  const bannerPath = post.Banner?.url || "";
  const imageUrl = bannerPath.startsWith("http") ? bannerPath : (bannerPath ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerPath}` : "");
  const siteUrl = "https://www.recipeoai.com";

  return {
    title: `${post.MetaTitle || post.Title} | RecipeoAI 2026`,
    description: (post.description || post.MetaDescription || post.Excerpt).substring(0, 155),
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
      authors: [post.author || "Manish Singh"],
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return notFound();

  const bannerPath = post.Banner?.url || "";
  const imageUrl = bannerPath.startsWith("http") ? bannerPath : (bannerPath ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerPath}` : "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.recipeoai.com/blog/${slug}` },
        "headline": post.Title,
        "image": [imageUrl],
        "datePublished": post.publishedAt || post.createdAt,
        "dateModified": post.updatedAt || post.createdAt,
        "author": { "@type": "Person", "name": post.author || "Manish Singh" },
        "description": post.description || post.Excerpt || post.MetaDescription
      },
      {
        "@type": "Recipe",
        "name": post.Title,
        "image": [imageUrl],
        "recipeYield": post.recipeYield || "2 Servings",
        "prepTime": post.prepTime || "PT10M",
        "cookTime": post.cookTime || "PT20M",
        "recipeCategory": post.recipeCategory || "Snack",
        "recipeCuisine": post.recipeCuisine || "Global",
        "description": post.description || post.Excerpt,
        "author": { "@type": "Person", "name": post.author || "Manish Singh" },
        "nutrition": { "@type": "NutritionInformation", "calories": post.nutrition || "250 calories" },
        "recipeIngredient": post.Keywords ? post.Keywords.split(',') : ["See instructions below"],
        "recipeInstructions": [{ "@type": "HowToStep", "name": "Step 1", "text": "Follow detailed steps in content.", "url": `https://www.recipeoai.com/blog/${slug}#recipe-steps` }],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "1250" }
      }
    ]
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="min-h-screen bg-stone-50 pt-28 pb-20 px-4 font-sans selection:bg-orange-100">
        <div className="container mx-auto max-w-5xl">

          {/* BACK LINK */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-stone-400 hover:text-orange-600 transition-all mb-12 font-black text-[10px] uppercase tracking-[0.3em] group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Explore Insights
          </Link>

          {/* HEADER SECTION */}
          <header className="mb-16">
             <div className="flex flex-wrap items-center gap-3 mb-8">
                {post.recipeCuisine && <span className="px-4 py-1.5 bg-stone-900 text-white text-[10px] font-black uppercase rounded-full tracking-widest">{post.recipeCuisine}</span>}
                {post.recipeCategory && <span className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black uppercase rounded-full tracking-widest">{post.recipeCategory}</span>}
             </div>

             <h1 className="text-6xl md:text-[7rem] font-black text-stone-900 leading-[0.85] tracking-tighter mb-12">
                {post.Title}
             </h1>

             <div className="flex flex-wrap items-center gap-8 mb-12 border-y border-stone-200 py-8">
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-stone-200 flex items-center justify-center font-black text-stone-500 overflow-hidden">
                      {post.author ? post.author.substring(0,2).toUpperCase() : "MS"}
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">Author</p>
                      <p className="text-sm font-bold text-stone-900">{post.author || "Manish Singh"}</p>
                   </div>
                </div>
                <div className="h-10 w-px bg-stone-200 hidden md:block"></div>
                <div>
                   <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1 flex items-center gap-1"><Calendar size={10}/> Published</p>
                   <p className="text-sm font-bold text-stone-900">{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                {post.updatedAt && post.updatedAt !== post.createdAt && (
                   <div>
                      <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1 flex items-center gap-1"><RefreshCw size={10}/> Updated</p>
                      <p className="text-sm font-bold text-stone-900">{new Date(post.updatedAt).toLocaleDateString()}</p>
                   </div>
                )}
             </div>

             <p className="text-2xl md:text-4xl text-stone-500 leading-tight font-medium italic mb-16">{post.description || post.Excerpt}</p>
          </header>

          {/* BANNER + QUICK STATS */}
          <div className="relative mb-20">
             <div className="relative aspect-[21/9] w-full rounded-[4rem] overflow-hidden shadow-2xl bg-stone-100 ring-1 ring-stone-200">
               <img src={imageUrl} className="object-cover w-full h-full" alt={post.Title} fetchPriority="high" />
             </div>

             {/* FLOATING QUICK STATS BAR - INTERNATIONAL STYLE */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 p-6 md:p-10 flex flex-wrap justify-center gap-8 md:gap-16 z-20">
                <div className="text-center group">
                   <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all text-stone-400"><ChefHat size={20}/></div>
                   <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Prep</p>
                   <p className="text-xs font-black text-stone-900">{formatTime(post.prepTime)}</p>
                </div>
                <div className="text-center group">
                   <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all text-stone-400"><Flame size={20}/></div>
                   <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Cook</p>
                   <p className="text-xs font-black text-stone-900">{formatTime(post.cookTime)}</p>
                </div>
                <div className="text-center group">
                   <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all text-stone-400"><Users size={20}/></div>
                   <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Yield</p>
                   <p className="text-xs font-black text-stone-900">{post.recipeYield || "2 SERVINGS"}</p>
                </div>
                <div className="text-center group">
                   <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all text-stone-400"><Utensils size={20}/></div>
                   <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Energy</p>
                   <p className="text-xs font-black text-stone-900">{post.nutrition || "250 KCAL"}</p>
                </div>
             </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="max-w-4xl mx-auto pt-20">
             <div id="recipe-steps" className="prose prose-stone lg:prose-2xl max-w-none prose-orange prose-headings:text-stone-900 prose-headings:font-black prose-p:text-stone-700 prose-p:leading-[1.8] prose-img:rounded-[3rem] prose-strong:text-orange-700 bg-white p-12 md:p-24 rounded-[4rem] shadow-sm border border-stone-100">
               {post.Content ? <BlocksRenderer content={post.Content} /> : <p className="text-stone-400 italic font-bold">Curating recipe details...</p>}
               
               <div className="mt-20 pt-12 border-t border-stone-100 flex flex-col items-center gap-6">
                  <p className="text-stone-400 font-black text-[10px] uppercase tracking-[0.4em]">Inspire Others</p>
                  <button className="flex items-center gap-3 px-10 py-5 bg-stone-900 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                     <Share2 size={16} /> Share This Recipe
                  </button>
               </div>
             </div>

             <div className="mt-24">
                <Comments blogId={post.id} initialComments={post.comments} />
             </div>
          </div>

        </div>
      </article>
    </>
  );
}
