import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/recipe(.*)",
  "/recipes(.*)",
  "/pantry(.*)",
  "/dashboard(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  const url = req.nextUrl;
  const host = req.headers.get("host");

  // --------------------------------------------------
  // 1. CRON ROUTES
  // Vercel cron routes ko authentication se bypass karo.
  // Route ke andar CRON_SECRET se security check karna.
  // --------------------------------------------------
  if (url.pathname.startsWith("/api/cron/")) {
    return NextResponse.next();
  }

  // --------------------------------------------------
  // 2. HTTPS + WWW REDIRECT
  // recipeoai.com -> www.recipeoai.com
  // --------------------------------------------------
  if (
    process.env.NODE_ENV === "production" &&
    host === "recipeoai.com"
  ) {
    return NextResponse.redirect(
      new URL(
        `https://www.recipeoai.com${url.pathname}${url.search}`
      ),
      301
    );
  }

  // --------------------------------------------------
  // 3. PROTECTED ROUTES
  // --------------------------------------------------
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  // --------------------------------------------------
  // 4. PUBLIC ROUTES
  // --------------------------------------------------
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};