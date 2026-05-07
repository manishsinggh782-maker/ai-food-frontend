import { getBlogs } from "@/actions/blog.actions";
import Link from "next/link";
import { Calendar, ArrowRight, UserCheck, Star } from "lucide-react";
import Script from "next/script";

// --- 1. DYNAMIC CONFIG ---
export const dynamic = 'force-dynamic';

// --- 2. VIEWPORT CONFIG ---
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// --- 3. SEO METADATA (Optimized for Global Reach) ---
const DOMAIN = "https://www.recipeoai.com";

export const metadata = {
  title: "Official AI Recipe Blog | Manish Singh - Master AI Chef",
  description: "Discover the future of cooking with AI-driven recipes, global culinary insights, and professional kitchen secrets by Manish Singh.",
  keywords: ["AI Cooking", "Global Recipes", "Manish Singh Blog", "AI Chef Tips", "RecipeoAI Articles", "Future of Food"],
  alternates: {
    canonical: `${DOMAIN}/blog`,
  },
  openGraph: {
    title: "Manish Singh Official Blog | AI Cooking & Global Recipes",
    description: "Unlock professional AI cooking secrets and global recipes.",
    url: `${DOMAIN}/blog`,
    siteName: "RecipeoAI Official",
    images: [
      {
        url: `${DOMAIN}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Manish Singh Official Blog Banner"
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function BlogPage() {
  // Fetch blogs with error handling
  let blogs = [];
  try {
    blogs = await getBlogs() || [];
  } catch (error) {
    console.error("Blog fetch error:", error);
  }

  // Sorting: Latest first
  const sortedBlogs = blogs.length > 0 ? [...blogs].sort((a, b) => {
    const dateA = new Date(a.publishedAt || a.createdAt);
    const dateB = new Date(b.publishedAt || b.createdAt);
    return dateB - dateA;
  }) : [];

  // GOOGLE SCHEMA (JSON-LD) - ItemList for Recipe Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Manish Singh Official Blog",
    "url": `${DOMAIN}/blog`,
    "description": "Professional AI-driven recipe secrets and global culinary tech insights.",
    "publisher": {
      "@type": "Organization",
      "name": "RecipeoAI",
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/logo.png`
      }
    },
    "itemListElement": sortedBlogs.map((post, index) => {
      const bannerUrl = post.Banner?.url || "";
      const fullImg = bannerUrl.startsWith("http") ? bannerUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerUrl}`;
      return {
        "@type": "ListItem",
        "position": index + 1,
        "url": `${DOMAIN}/blog/${post.Slug || post.slug}`,
        "name": post.Title,
        "image": fullImg
      };
    })
  };

  return (
    <div className="min-h-screen bg-stone-50/50 pt-28 pb-20 px-4 font-sans selection:bg-orange-100">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 text-[10px] font-black uppercase rounded-full mb-6 border border-orange-200">
             <UserCheck size={14} /> Manish Singh Official
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 leading-[0.9] tracking-tighter mb-6">
            CULINARY <span className="text-orange-600 italic">INSIGHTS.</span>
          </h1>
          <div className="flex items-center gap-2 text-orange-500 mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
             <span className="text-stone-400 text-xs font-bold ml-2">Rated 4.9/5 by Global Foodies</span>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        {sortedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedBlogs.map((post) => {
              const bannerPath = post.Banner?.url || "";
              const fullImageUrl = bannerPath.startsWith('http') 
                ? bannerPath 
                : (bannerPath ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${bannerPath}` : "/placeholder.jpg");

              return (
                <div key={post.id} className="group flex flex-col bg-white rounded-[3rem] overflow-hidden shadow-sm hover:-translate-y-3 transition-all duration-700 ring-1 ring-stone-100">
                  <div className="aspect-[16/10] relative overflow-hidden bg-stone-200">
                    <img 
                      src={fullImageUrl} 
                      alt={post.Title || "Recipe Post"}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                      loading="lazy"
                    />
                    {/* Floating Badge for Category if exists */}
                    {post.recipeCategory && (
                       <span className="absolute top-6 left-6 px-4 py-1 bg-white/90 backdrop-blur-sm text-[9px] font-black uppercase rounded-full shadow-sm">
                          {post.recipeCategory}
                       </span>
                    )}
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4 line-clamp-2">
                      {post.Title}
                    </h2>
                    <p className="text-stone-500 line-clamp-3 mb-10 text-sm font-medium leading-relaxed">
                      {post.description || post.Excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-stone-50 pt-8">
                      <span className="flex items-center gap-2 text-stone-400 text-[10px] font-black uppercase">
                        <Calendar size={12} className="text-orange-500" /> 
                        {new Date(post.createdAt).toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>

                      <Link 
                        href={`/blog/${post.Slug || post.slug}`} 
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-[10px] font-black rounded-2xl hover:bg-orange-600 transition-all shadow-md active:scale-95"
                      >
                        VIEW RECIPE 
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-32">
            <h3 className="text-2xl font-black text-stone-300 italic">Chef Manish is preparing new AI recipes...</h3>
          </div>
        )}
      </div>
    </div>
  );
}
