"use server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const headers = {
  Authorization: `Bearer ${STRAPI_TOKEN}`,
  "Content-Type": "application/json",
};

/**
 * 1. Saare blogs ki list mangwane ke liye
 */
export async function getBlogs() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Blog list fetch error:", error);
    return [];
  }
}

/**
 * 2. Ek single blog mangwane ke liye
 */
export async function getBlogBySlug(slug) {
  if (!slug || slug === "undefined") return null;

  try {
    const query = `filters[Slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
    const url = `${STRAPI_URL}/api/blogs?${query}`;

    const res = await fetch(url, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    const post = data.data?.[0];

    return post || null;
  } catch (error) {
    console.error("Single blog fetch error:", error);
    return null;
  }
}

/**
 * 3. Latest blogs (duplicate topic check + "Latest Articles" ke liye)
 */
export async function getRecentBlogs(limit = 50) {
  try {
    const url = `${STRAPI_URL}/api/blogs?sort=createdAt:desc&pagination[pageSize]=${limit}`;
    const res = await fetch(url, { headers, cache: "no-store" });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Recent blogs fetch error:", error);
    return [];
  }
}

/**
 * 4. Sitemap ke liye saare blogs (100-100 ke batch me)
 */
export async function getAllBlogsForSitemap() {
  const all = [];
  let page = 1;
  let pageCount = 1;

  try {
    do {
      const url = `${STRAPI_URL}/api/blogs?pagination[page]=${page}&pagination[pageSize]=100&sort=createdAt:desc`;
      const res = await fetch(url, { headers, cache: "no-store" });

      if (!res.ok) break;

      const json = await res.json();
      all.push(...(json.data || []));
      pageCount = json.meta?.pagination?.pageCount || 1;
      page++;
    } while (page <= pageCount);
  } catch (error) {
    console.error("Sitemap blogs fetch error:", error);
  }

  return all;
}

/**
 * 5. Blog list page ke liye (pagination + sorting + 5 min cache)
 */
export async function getBlogsPage(page = 1, pageSize = 12) {
  try {
    const url = `${STRAPI_URL}/api/blogs?populate=Banner&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    const res = await fetch(url, { headers, next: { revalidate: 300 } });

    if (!res.ok) return { blogs: [], pageCount: 1, total: 0 };

    const json = await res.json();
    return {
      blogs: json.data || [],
      pageCount: json.meta?.pagination?.pageCount || 1,
      total: json.meta?.pagination?.total || 0,
    };
  } catch (error) {
    console.error("Blog page fetch error:", error);
    return { blogs: [], pageCount: 1, total: 0 };
  }
}