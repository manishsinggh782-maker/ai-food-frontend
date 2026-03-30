import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import arcjet, { shield, detectBot } from "@arcjet/next";

const isProtectedRoute = createRouteMatcher([
  "/recipe(.*)",
  "/recipes(.*)",
  "/pantry(.*)",
  "/dashboard(.*)",
]);

// Arcjet setup (Sirf tabhi jab key ho)
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW"],
    }),
  ],
});

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  // --- 1. SEO: HTTPS & WWW REDIRECT (SAAF LOGIC) ---
  // Isse Netlify ke preview links crash nahi honge
  if (
    process.env.NODE_ENV === 'production' && 
    host === 'recipeoai.com' // Sirf asli domain ko redirect karo
  ) {
    return NextResponse.redirect(`https://www.recipeoai.com${url.pathname}${url.search}`, 301);
  }

  // --- 2. SECURITY: ARCJET PROTECTION (SAFE MODE) ---
  if (process.env.ARCJET_KEY) {
    try {
      const decision = await aj.protect(req);
      if (decision.isDenied()) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch (error) {
      console.error("Arcjet Error:", error);
    }
  }

  // --- 3. AUTH: CLERK AUTHENTICATION ---
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Next.js internals aur static files ko chhod kar sab pe chalega
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
