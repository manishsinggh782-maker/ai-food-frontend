import { getAllBlogsForSitemap } from "@/actions/blog.actions";

export const revalidate = 3600;

export default async function sitemap() {
  const base = (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
  const blogs = await getAllBlogsForSitemap();

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...blogs
      .filter((b) => b.Slug)
      .map((b) => ({
        url: `${base}/blog/${b.Slug}`,
        lastModified: new Date(b.updatedAt || b.createdAt),
      })),
  ];
}