"use server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * 1. Saare blogs ki list mangwane ke liye
 */
export async function getBlogs() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
      headers: { 
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      },
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
    // FIX: Using capital 'S' for Slug and populate everything
    const query = `filters[Slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
    const url = `${STRAPI_URL}/api/blogs?${query}`;
    
    const res = await fetch(url, {
      headers: { 
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json"
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    const post = data.data?.[0]; // Strapi v5 returns object directly in data array

    return post || null;
  } catch (error) {
    console.error("Single blog fetch error:", error);
    return null;
  }
}