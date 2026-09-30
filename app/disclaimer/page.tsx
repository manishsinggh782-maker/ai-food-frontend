Yesterday 7:09 PM
abe tune discelmer vala link daal deya hea na

Haan bhai 😅 agar tum “disclaimer wala link” se p:domain_verify wali line ki baat kar rahe ho, to woh AdSense ka link nahi hai. Woh Google domain verification token hai:

"p:domain_verify": "4afe6422a1d2fadb2e51309ddd843cd6",

Agar tum sirf AdSense ka code rakhna chahte ho aur ye verification line bhi hatani hai, to other ko simply ye kar do:

other: {
  "google-adsense-account": "ca-pub-8919274069653582",
},

Aur AdSense ka actual script ye rahe:

<Script
  id="google-adsense"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8919274069653582"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

Lekin ads.txt अलग रहेगा, क्योंकि Google के अनुसार ads.txt में google.com, pub-... वाली entry होती है; वह layout में नहीं डालनी होती। 

Agar tumhara मतलब footer mein koi “disclaimer” link hai, to screenshot/code mein mujhe disclaimer link दिखाई नहीं दे रहा—sirf About Us, Privacy Policy, Contact Us, Terms of Service hain.

Pasted text(1).txt
Document
abe madarchod tune footer me se ye vala link kyo hta diya hea re 

Haan bhai, meri galti thi 😅. Tumhara Legal Disclaimer page already bana hua hai, aur uska route /disclaimer hai. Tumhare uploaded Disclaimer page mein ye clearly “Legal Disclaimer” page hai.

Footer se mujhe Disclaimer link nahi हटाना चाहिए था.

Footer ke Resources section mein ye line wapas rakho:

<li>
  <Link
    href="/disclaimer"
    className="hover:text-orange-600"
  >
    • Legal Disclaimer
  </Link>
</li>

Toh Resources section exactly ye rahe:

<ul className="space-y-3 text-stone-500 text-sm font-semibold">
  <li>
    <Link
      href="/about"
      className="hover:text-orange-600"
    >
      • About Us
    </Link>
  </li>

  <li>
    <Link
      href="/privacy"
      className="hover:text-orange-600"
    >
      • Privacy Policy
    </Link>
  </li>

  <li>
    <Link
      href="/contact"
      className="hover:text-orange-600"
    >
      • Contact Us
    </Link>
  </li>

  <li>
    <Link
      href="/terms"
      className="hover:text-orange-600"
    >
      • Terms of Service
    </Link>
  </li>

  <li>
    <Link
      href="/disclaimer"
      className="hover:text-orange-600"
    >
      • Legal Disclaimer
    </Link>
  </li>
</ul>

AdSense code ko touch nahi karna hai, aur Disclaimer link bhi rehna hai.

Pasted text(2).txt
Document
le re sahi karke de poora code 

Haan bhai. Ab poora app/layout.jsx sahi karke de raha hoon. Is baar kuch nahi hata raha:

✅ New AdSense ID ca-pub-8919274069653582
✅ Google AdSense script
✅ ads.txt ka setup separate rahega
❌ Purana AdSense ID nahi
❌ Adsterra nahi
❌ Monetag nahi
✅ About Us
✅ Privacy Policy
✅ Contact Us
✅ Terms of Service
✅ Legal Disclaimer /disclaimer link bhi wapas
✅ Tumhara Google domain verification code bhi preserve kiya hai
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// --- SEO METADATA ---
export const metadata = {
  metadataBase: new URL("https://www.recipeoai.com"),

  title: "RecipeoAI: Free AI Recipe Generator from Ingredients 2026",

  description:
    "Generate free gourmet recipes instantly with AI. Best tool for keto, vegan, and healthy meal planning using ingredients you already have in 2026.",

  keywords:
    "free ai recipe generator, recipe maker ai free, viral recipes 2026, smart cooking generator, what to cook with ingredients ai",

  authors: [{ name: "Manish Singh" }],

  viewport: "width=device-width, initial-scale=1",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.recipeoai.com",
  },

  other: {
    "google-adsense-account": "ca-pub-8919274069653582",
    "p:domain_verify": "4afe6422a1d2fadb2e51309ddd843cd6",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "RecipeoAI - Free AI Master Chef 2026",
    description:
      "Cook like a pro with the world's best free AI recipe maker.",
    url: "https://www.recipeoai.com",
    siteName: "RecipeoAI",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const googleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "RecipeoAI",
        url: "https://www.recipeoai.com",
        operatingSystem: "Web",
        applicationCategory: "LifestyleApplication",

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1250",
        },

        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <ClerkProvider
      publishableKey="pk_live_Y2xlcmsucmVjaXBlb2FpLmNvbSQ"
      appearance={{ baseTheme: neobrutalism }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>

          {/* GOOGLE ADSENSE */}
          <Script
            id="google-adsense"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8919274069653582"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />

          {/* GOOGLE STRUCTURED DATA */}
          <Script
            id="google-combined-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(googleSchema),
            }}
          />

        </head>

        <body
          className={`${inter.className} bg-stone-50 text-stone-900`}
        >
          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          <Toaster richColors />

          {/* PROFESSIONAL FOOTER */}
          <footer className="bg-white border-t border-stone-200 pt-20 pb-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* BRAND SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">

                    <Image
                      src="/logo.jpg"
                      alt="RecipeoAI Logo"
                      width={45}
                      height={45}
                      className="rounded-xl shadow-sm"
                    />

                    <span className="text-2xl font-black tracking-tighter">
                      Recipeo
                      <span className="text-orange-600">
                        AI
                      </span>
                    </span>

                  </div>

                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">
                    World-class AI culinary assistant helping you turn
                    leftovers into gourmet meals daily.
                  </p>
                </div>

                {/* RESOURCES */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">
                    Resources
                  </h3>

                  <ul className="space-y-3 text-stone-500 text-sm font-semibold">

                    <li>
                      <Link
                        href="/about"
                        className="hover:text-orange-600"
                      >
                        • About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/privacy"
                        className="hover:text-orange-600"
                      >
                        • Privacy Policy
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-orange-600"
                      >
                        • Contact Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/terms"
                        className="hover:text-orange-600"
                      >
                        • Terms of Service
                      </Link>
                    </li>

                    {/* LEGAL DISCLAIMER */}
                    <li>
                      <Link
                        href="/disclaimer"
                        className="hover:text-orange-600"
                      >
                        • Legal Disclaimer
                      </Link>
                    </li>

                  </ul>
                </div>

                {/* SECURITY */}
                <div className="space-y-8">

                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">
                    Security
                  </h3>

                  <div className="flex gap-4 items-start">

                    <div className="p-2.5 bg-green-50 rounded-xl text-green-600">
                      <Lock className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Local Sync
                      </p>

                      <p className="text-xs text-stone-400 font-medium">
                        100% secure recipes
                      </p>
                    </div>

                  </div>
                </div>

                {/* COMPLIANCE */}
                <div>

                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">
                    Compliance
                  </h3>

                  <div className="p-6 border border-stone-100 rounded-[2rem] bg-stone-50/50 flex flex-col items-center text-center shadow-sm">

                    <ShieldCheck className="w-6 h-6 text-green-500 mb-4" />

                    <p className="text-sm font-bold text-stone-900">
                      GDPR Compliant
                    </p>

                  </div>
                </div>

              </div>

              {/* BOTTOM STRIP */}
              <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">

                  <CheckCircle2 className="w-4 h-4 text-green-500" />

                  All Systems Operational

                </div>

                <p className="text-[11px] text-stone-400 font-bold uppercase tracking-[0.2em]">

                  © 2026 RecipeoAI • Developed by{" "}

                  <Link
                    href="https://manishsingh.com"
                    className="text-orange-600"
                  >
                    Manish Singh
                  </Link>

                </p>

              </div>

            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}

बस इस code को app/layout.jsx में replace कर दो।

और public/ads.txt में सिर्फ:

google.com, pub-8919274069653582, DIRECT, f08c47fec0942fa0

रखना है। Legal Disclaimer page तुम्हारे project में मौजूद है और उसका route /disclaimer है।

Bluehost

Check VPS Plans & Pricing

Full root access, 99.9% uptime & 24/7 support. Join 5M+ on Bluehost.

Ad
More options

bhai kya bol raha hea be importing from GitHub
githubmanishsinggh782-maker/ai-food-frontend
svgmain

svg

Project "ai-food-frontend-8b7e" created. Review the recommended integrations below, then deploy.

Haan bhai, iska simple matlab hai:

Vercel tumhara GitHub repository import kar raha hai.

Tumhara GitHub repo:

manishsinggh782-maker/ai-food-frontend

Aur Vercel ne us repo se ek new project bana diya:

ai-food-frontend-8b7e

Abhi message “Review the recommended integrations below, then deploy” ka matlab hai ki Vercel tumhe kuch recommended integrations/settings dikha raha hai. Abhi website deploy nahi hui hai jab tak tum Deploy nahi karte.

Ab kya karna hai

Agar ye wahi RecipeoAI ka frontend hai:

GitHub repo sahi hai ✅
Project name ai-food-frontend-8b7e rakh sakte ho
Framework agar Next.js detect ho raha hai to sahi hai
Environment Variables hain to check karo
Phir Deploy दबाओ

Important: Jo humne AdSense wala layout code change kiya hai, woh GitHub repo mein commit/push hona chahiye. Vercel GitHub se code import karega; local computer ke unsaved changes automatically nahi lega.

Agar tum mujhe Vercel ke current page ka screenshot bhej do, main bata dunga exactly kis button/settings ko select karna hai.

abe isko mujhe fir se update karna hea fir ye nya deplay kre update nhi huva he akya kre bol keashe

Haan bhai, screenshot se clear hai 👍 latest update Vercel par deploy nahi hua hai. Abhi jo Production Deployment dikh raha hai woh purana commit f531c88 hai, aur neeche “Error · Update page.tsx” bhi dikh raha hai.

Ab ye kar bhai

1. Sabse pehle GitHub me apna latest code push kar

git add .
git commit -m "Update RecipeoAI"
git push origin main

2. Vercel me ja

Left side Deployments par click kar.
Wahan latest deployment check kar.
Agar latest commit nahi aaya hai, Redeploy kar.

3. Screenshot me jo ... menu khula hai usme
Redeploy option normally deployment ke andar milta hai. Agar current deployment ko hi dobara chalana hai, Redeploy select kar.

Lekin important ⚠️

Screenshot me:

🔴 Error · Update page.tsx

dikh raha hai.

Iska matlab latest deployment build/error ki wajah se fail ho sakta hai. Isliye sirf Redeploy karne se same error dobara aa sakta hai.

Pehle Deployments → latest failed deployment → View Logs karke error dekhna best hai.

Agar tu Deployments wala page ka screenshot bhej de, main tujhe exact bata dunga kis button par click karna hai aur kaunsa deployment redeploy karna hai.

Bluehost

Check VPS Plans & Pricing

Full root access, 99.9% uptime & 24/7 support. Join 5M+ on Bluehost.

Ad
More options

Sponsored options
Ad
Sponsored options
Ad

import React from "react";
import {
AlertTriangle,
ShieldAlert,
HeartPulse,
Info,
Scale,
ExternalLink,
ChevronRight,
Gavel,
Zap,
Globe
} from "lucide-react";
import Link from "next/link";

export const metadata = {
title: "Legal Disclaimer | RecipeoAI - High-Level AI Safety & Compliance",
description: "Official legal documentation for RecipeoAI. Important notices regarding AI recipe accuracy, nutritional safety, and international liability standards.",
};

export default function DisclaimerPage() {
const lastUpdated = "March 03, 2026";

return (
<div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">

  {/* --- PREMIUM DECORATIVE BACKGROUND ELEMENTS --- */}
  <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />
  <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-200/20 blur-[120px] rounded-full -z-10" />
  <div className="absolute top-[40%] -left-20 w-80 h-80 bg-blue-100/30 blur-[100px] rounded-full -z-10" />

  {/* --- BREADCRUMB (International Standard) --- */}
  <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
    <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
    <ChevronRight className="w-3 h-3" />
    <span className="text-stone-900">Legal Disclaimer</span>
  </nav>

  {/* --- HERO SECTION --- */}
  <section className="pt-10 pb-20 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-widest text-orange-600">
        <ShieldAlert className="w-3.5 h-3.5" /> Global Safety Protocol v2.0
      </div>
      <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
        Trust & <span className="text-orange-600">Transparency.</span>
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between border-t border-stone-200 pt-8">
        <p className="text-xl text-stone-500 font-medium max-w-2xl leading-relaxed">
          Our commitment to user safety and AI accountability. Please read these terms carefully before utilizing our culinary intelligence services.
        </p>
        <div className="flex flex-col">
           <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Last Revised</span>
           <span className="text-lg font-black text-stone-900">{lastUpdated}</span>
        </div>
      </div>
    </div>
  </section>

  {/* --- MAIN CONTENT GRID --- */}
  <section className="px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT SIDE: PRIMARY DISCLAIMERS */}
      <div className="lg:col-span-8 space-y-8">
        
        {/* 1. AI Content Disclaimer */}
        <div className="group bg-white p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap className="w-32 h-32 text-orange-600" />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">AI Accuracy Notice</h2>
          </div>
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
            <p>
              RecipeoAI uses state-of-the-art Large Language Models (LLMs) to generate culinary content. However, AI can "hallucinate" or generate technically incorrect data. 
            </p>
            <div className="p-8 bg-stone-900 rounded-[2rem] text-stone-50 border border-stone-800 shadow-inner">
              <p className="font-bold text-orange-400 mb-2 uppercase text-xs tracking-widest">User Responsibility Protocol:</p>
              "The user acknowledges that all recipes are experimental. You must independently verify cooking times, cross-contamination risks, and ingredient safety."
            </div>
          </div>
        </div>

        {/* 2. Health & Medical */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
              <HeartPulse className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-stone-900">Health & Allergies</h2>
          </div>
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
            <p>
              RecipeoAI is NOT a licensed medical professional, dietitian, or nutritionist. Nutritional estimates (calories, macros, vitamins) are calculated via algorithms and should be treated as <span className="text-stone-900 font-bold underline decoration-red-300 italic">rough estimates only.</span>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="font-bold text-stone-900 mb-2 text-sm">Allergy Alert</h4>
                <p className="text-sm">AI may suggest ingredients that conflict with your specific allergies. Always read labels.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="font-bold text-stone-900 mb-2 text-sm">Dietary Claims</h4>
                <p className="text-sm">"Keto", "Vegan", or "Gluten-Free" tags are AI-generated. Verify before consumption.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE: LEGAL SIDEBAR */}
      <div className="lg:col-span-4 space-y-8">
        
        {/* Liability Card */}
        <div className="bg-stone-900 p-10 rounded-[3rem] text-stone-50 shadow-2xl relative overflow-hidden h-full">
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 blur-[80px] rounded-full" />
          <Scale className="w-12 h-12 text-orange-500 mb-8" />
          <h3 className="text-2xl font-black mb-6 tracking-tight">Limitation of Liability</h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-8 font-medium">
            Under no legal theory shall RecipeoAI, Manish Singh, or its developers be liable for direct, indirect, incidental, or consequential damages resulting from food-borne illness, kitchen accidents, or health complications arising from the use of our AI suggestions.
          </p>
          <div className="pt-6 border-t border-stone-800">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-600">Jurisdiction</p>
            <p className="text-sm font-bold text-stone-200 mt-1">International Standard / Global Terms</p>
          </div>
        </div>

        {/* AdSense Compliance Section */}
        <div className="bg-white p-8 rounded-[3rem] border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-black tracking-tight">External Relations</h3>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed mb-4 font-bold">
            As per Google AdSense policies, we declare that:
          </p>
          <ul className="space-y-3">
            {['Third-party advertisements', 'Affiliate partnerships', 'Cookies for personalization'].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-xs font-bold text-stone-700">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* --- PROFESSIONAL INQUIRY SECTION --- */}
    <div className="max-w-4xl mx-auto mt-20 p-12 bg-white rounded-[4rem] border border-stone-200 shadow-sm text-center">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <Gavel className="w-10 h-10 text-orange-600" />
        </div>
        <h2 className="text-4xl font-black mb-4 tracking-tighter">Legal Inquiries</h2>
        <p className="text-stone-500 font-medium mb-10 max-w-md mx-auto">For formal documentation, DMCA notices, or compliance questions, please contact our legal desk.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:legal@recipeoai.com" 
            className="w-full sm:w-auto bg-stone-900 text-white px-12 py-5 rounded-2xl font-black hover:bg-stone-800 transition-all active:scale-95 shadow-xl shadow-stone-200"
          >
            legal@recipeoai.com
          </a>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto border-2 border-stone-100 px-12 py-5 rounded-2xl font-black hover:bg-stone-50 transition-all"
          >
            Support Desk
          </Link>
        </div>
    </div>
  </section>

  {/* --- INTERNATIONAL COMPLIANCE STRIP --- */}
  <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col items-center gap-6">
    <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Globe className="w-4 h-4" /> Global GDPR Compliance</div>
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Info className="w-4 h-4" /> AI Ethics Certified</div>
    </div>
    <div className="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 italic">
      © 2026 RecipeoAI • Engineered for the Future
    </div>
  </div>

</div>

);
}

Close
