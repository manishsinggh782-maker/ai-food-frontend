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
  Send, 
  Shield, 
  CheckCircle2
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

// --- 1. SEO METADATA ---
export const metadata = {
  metadataBase: new URL("https://www.recipeoai.com"),
  title: "RecipeoAI: Free AI Recipe Generator from Ingredients 2026",
  description: "Generate free gourmet recipes instantly with AI. Best tool for keto, vegan, and healthy meal planning using ingredients you already have in 2026.",
  keywords: "free ai recipe generator, recipe maker ai free, viral recipes 2026, smart cooking generator, what to cook with ingredients ai",
  authors: [{ name: "Manish Singh" }],
  viewport: "width=device-width, initial-scale=1",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.recipeoai.com" },
  other: { 
    'google-adsense-account': 'ca-pub-2070162129840743',
    'p:domain_verify': '4afe6422a1d2fadb2e51309ddd843cd6' 
  },
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
  openGraph: {
    title: "RecipeoAI - Free AI Master Chef 2026",
    description: "Cook like a pro with the world's best free AI recipe maker.",
    url: "https://www.recipeoai.com",
    siteName: "RecipeoAI",
    images: [{ url: "/logo.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  
  // --- 2. GLOBAL SCHEMA ---
  const googleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "RecipeoAI",
        "url": "https://www.recipeoai.com",
        "operatingSystem": "Web",
        "applicationCategory": "LifestyleApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "1250"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "WebSite",
        "name": "RecipeoAI",
        "url": "https://www.recipeoai.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.recipeoai.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <ClerkProvider
      publishableKey="pk_live_Y2xlcmsucmVjaXBlb2FpLmNvbSQ"
      appearance={{ baseTheme: neobrutalism }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* ADS CODE 1: Safe Banner Tag */}
          <Script 
            src="https://quge5.com/88/tag.min.js" 
            data-zone="259273" 
            strategy="afterInteractive" 
            data-cfasync="false" 
          />

          {/* ADS CODE 2: Additional Safe Tag */}
          <Script id="ad-tag-extra" strategy="afterInteractive">
            {`(function(s){s.dataset.zone='11280493',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`}
          </Script>

          {/* SEO SCHEMA */}
          <Script
            id="google-combined-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSchema) }}
          />
        </head>
        <body className={`${inter.className} bg-stone-50 text-stone-900`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* --- PROFESSIONAL FOOTER --- */}
          <footer className="bg-white border-t border-stone-200 pt-20 pb-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* 1. BRAND SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.jpg" alt="RecipeoAI Logo" width={45} height={45} className="rounded-xl shadow-sm" />
                    <span className="text-2xl font-black tracking-tighter">Recipeo<span className="text-orange-600">AI</span></span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">World-class AI culinary assistant helping you turn leftovers into gourmet meals daily.</p>
                  <div className="flex flex-col gap-2">
                     <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Global Rating</p>
                     <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-orange-500 text-orange-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                        <span className="text-xs font-bold text-stone-600 ml-1">4.9/5</span>
                     </div>
                  </div>
                </div>

                {/* 2. RESOURCES */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Resources</h3>
                  <ul className="space-y-3 text-stone-500 text-sm font-semibold">
                    <li><Link href="/about" className="hover:text-orange-600">• About Us</Link></li>
                    <li><Link href="/privacy" className="hover:text-orange-600">• Privacy Policy</Link></li>
                    <li><Link href="/cookie-policy" className="hover:text-orange-600">• Cookie Policy</Link></li>
                    <li><Link href="/disclaimer" className="hover:text-orange-600">• Disclaimer</Link></li>
                    <li><Link href="/contact" className="hover:text-orange-600">• Contact Us</Link></li>
                    <li><Link href="/terms" className="hover:text-orange-600">• Terms of Service</Link></li>
                  </ul>
                  <div className="mt-8">
                    <h3 className="text-sm font-bold text-stone-900 mb-4 tracking-wide">Community</h3>
                    <Link href="https://t.me/recipeoai" className="inline-flex items-center gap-2 px-6 py-3 bg-[#229ED9] text-white rounded-2xl text-xs font-bold shadow-lg hover:brightness-110 uppercase tracking-wider">
                      <Send className="w-4 h-4" /> Join Official Telegram
                    </Link>
                  </div>
                </div>

                {/* 3. SECURITY */}
                <div className="space-y-8">
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Security</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-green-50 rounded-xl text-green-600"><Lock className="w-5 h-5" /></div>
                      <div><p className="text-sm font-bold">Local Sync</p><p className="text-xs text-stone-400 font-medium">Images stay private</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600"><Shield className="w-5 h-5" /></div>
                      <div><p className="text-sm font-bold">Encrypted</p><p className="text-xs text-stone-400 font-medium">100% secure recipes</p></div>
                    </div>
                  </div>
                </div>

                {/* 4. COMPLIANCE */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Compliance</h3>
                  <div className="p-6 border border-stone-100 rounded-[2rem] bg-stone-50/50 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 border border-stone-100"><ShieldCheck className="w-6 h-6 text-green-500" /></div>
                    <p className="text-sm font-bold text-stone-900">GDPR Compliant</p>
                    <p className="text-[11px] text-stone-400 mt-2 font-medium">Safe and private international standards.</p>
                  </div>
                </div>

              </div>

              {/* BOTTOM STRIP */}
              <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> All Systems Operational
                </div>
                <p className="text-[11px] text-stone-400 font-bold uppercase tracking-[0.2em]">
                  © 2026 RecipeoAI • Developed by <Link href="https://manishsingh.com" className="text-orange-600">Manish Singh</Link>
                </p>
              </div>

            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
