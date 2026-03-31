import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. CONFIG: Domain aur Backend URLs
  const baseUrl = 'https://www.recipeoai.com'
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://ai-recipe-backend-l00p.onrender.com'

  // 2. STATIC PAGES (Jo hamesha sitemap mein rahengi)
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/recipes',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  let dynamicPages: MetadataRoute.Sitemap = [];

  try {
    // 3. FETCH RECIPES (Using 'Slug' with capital S)
    // Hum fields[0]=Slug mangwa rahe hain taaki Strapi data bhej sake
    const recipesRes = await fetch(`${strapiUrl}/api/recipes?fields[0]=Slug&fields[1]=updatedAt`, {
      next: { revalidate: 60 } // Har 1 minute mein check karega naye post ke liye
    });
    const recipesData = await recipesRes.json();

    const recipePages = (recipesData.data || [])
      .map((recipe: any) => {
        const attr = recipe.attributes || recipe;
        const slug = attr.Slug || attr.slug; // Case-sensitivity check

        if (!slug) return null;

        return {
          url: `${baseUrl}/recipes/${slug}`,
          lastModified: new Date(attr.updatedAt || new Date()),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
      })
      .filter((p: any) => p !== null);

    // 4. FETCH BLOGS (Using 'Slug' with capital S)
    const blogsRes = await fetch(`${strapiUrl}/api/blogs?fields[0]=Slug&fields[1]=updatedAt`, {
      next: { revalidate: 60 }
    });
    const blogsData = await blogsRes.json();

    const blogPages = (blogsData.data || [])
      .map((post: any) => {
        const attr = post.attributes || post;
        const slug = attr.Slug || attr.slug; // Case-sensitivity check

        if (!slug) return null;

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(attr.updatedAt || new Date()),
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        };
      })
      .filter((p: any) => p !== null);

    dynamicPages = [...recipePages, ...blogPages];

  } catch (error) {
    console.error("Sitemap Fetch Error:", error);
  }

  // Final Merge: Static + Dynamic Links
  return [...staticPages, ...dynamicPages]
}