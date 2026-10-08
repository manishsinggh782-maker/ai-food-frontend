import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getRecentBlogs } from "@/actions/blog.actions";
import {
  pickTopic,
  generateArticle,
  prepareImages,
  createAndPublishBlog,
} from "@/lib/blog-generator";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(request) {
  // Sirf wahi chala sake jiske paas secret ho
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const recent = await getRecentBlogs(60);
    const titles = recent.map((b) => b.Title).filter(Boolean);
    const slugs = new Set(recent.map((b) => b.Slug).filter(Boolean));

    const topic = await pickTopic(titles);
    const article = await generateArticle(topic);
    const images = await prepareImages(article);
    const post = await createAndPublishBlog(article, images, slugs);

    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      ok: true,
      topic,
      post,
      bannerUploaded: Boolean(images.banner),
      inlineImageUploaded: Boolean(images.inline),
    });
  } catch (error) {
    console.error("Daily blog cron error:", error);
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}