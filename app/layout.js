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
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
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
          {/* MONETAG ADS (SAFE) */}
          <Script 
            src="https://quge5.com/88/tag.min.js" 
            data-zone="259273" 
            strategy="afterInteractive" 
            data-cfasync="false" 
          />

          <Script id="google-combined-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(googleSchema) }} />
        </head>
        <body className={`${inter.className} bg-stone-50 text-stone-900`}>
          <Header />
          
          <main className="min-h-screen">
            {/* NEW ADSTERRA 160x600 - TOP SIDE (Optional: Isse Desktop par sidebar me laga sakte ho) */}
            <div className="flex justify-center my-6">
               <div id="ad-skyscraper-1">
                 <Script id="adsterra-sky-1" strategy="lazyOnload">
                   {`
                     atOptions = {
                       'key' : 'e0957aa3205ec50bf8a8c93a4c418636',
                       'format' : 'iframe',
                       'height' : 600,
                       'width' : 160,
                       'params' : {}
                     };
                     const script = document.createElement('script');
                     script.src = 'https://www.highperformanceformat.com/e0957aa3205ec50bf8a8c93a4c418636/invoke.js';
                     document.getElementById('ad-skyscraper-1').appendChild(script);
                   `}
                 </Script>
               </div>
            </div>

            {children}
            
            {/* ADSTERRA BANNER 1 (300x250 - Existing) */}
            <div className="flex justify-center my-10">
               <div id="ad-container-1">
                 <Script id="adsterra-1" strategy="lazyOnload">
                   {`
                     atOptions = {
                       'key' : '1304f7fe5dfffefce94569a5b502b60d',
                       'format' : 'iframe',
                       'height' : 250,
                       'width' : 300,
                       'params' : {}
                     };
                     const script = document.createElement('script');
                     script.src = 'https://www.highperformanceformat.com/1304f7fe5dfffefce94569a5b502b60d/invoke.js';
                     document.getElementById('ad-container-1').appendChild(script);
                   `}
                 </Script>
               </div>
            </div>

            {/* NEW ADSTERRA 160x600 - MIDDLE */}
            <div className="flex justify-center my-10">
               <div id="ad-skyscraper-2">
                 <Script id="adsterra-sky-2" strategy="lazyOnload">
                   {`
                     atOptions = {
                       'key' : 'e0957aa3205ec50bf8a8c93a4c418636',
                       'format' : 'iframe',
                       'height' : 600,
                       'width' : 160,
                       'params' : {}
                     };
                     const script = document.createElement('script');
                     script.src = 'https://www.highperformanceformat.com/e0957aa3205ec50bf8a8c93a4c418636/invoke.js';
                     document.getElementById('ad-skyscraper-2').appendChild(script);
                   `}
                 </Script>
               </div>
            </div>
          </main>

          <Toaster richColors />

          {/* --- PROFESSIONAL FOOTER --- */}
          <footer className="bg-white border-t border-stone-200 pt-20 pb-12 px-4 mt-20">
            <div className="max-w-7xl mx-auto">
              
              {/* ADSTERRA BANNER 2 (300x250 - Existing) */}
              <div className="flex justify-center mb-12">
                 <div id="ad-container-2">
                   <Script id="adsterra-2" strategy="lazyOnload">
                     {`
                       atOptions = {
                         'key' : '1304f7fe5dfffefce94569a5b502b60d',
                         'format' : 'iframe',
                         'height' : 250,
                         'width' : 300,
                         'params' : {}
                       };
                       const script = document.createElement('script');
                       script.src = 'https://www.highperformanceformat.com/1304f7fe5dfffefce94569a5b502b60d/invoke.js';
                       document.getElementById('ad-container-2').appendChild(script);
                     `}
                   </Script>
                 </div>
              </div>

              {/* NEW ADSTERRA 160x600 - FOOTER TOP */}
              <div className="flex justify-center mb-12">
                 <div id="ad-skyscraper-3">
                   <Script id="adsterra-sky-3" strategy="lazyOnload">
                     {`
                       atOptions = {
                         'key' : 'e0957aa3205ec50bf8a8c93a4c418636',
                         'format' : 'iframe',
                         'height' : 600,
                         'width' : 160,
                         'params' : {}
                       };
                       const script = document.createElement('script');
                       script.src = 'https://www.highperformanceformat.com/e0957aa3205ec50bf8a8c93a4c418636/invoke.js';
                       document.getElementById('ad-skyscraper-3').appendChild(script);
                     `}
                   </Script>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* 1. BRAND SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.jpg" alt="RecipeoAI Logo" width={45} height={45} className="rounded-xl shadow-sm" />
                    <span className="text-2xl font-black tracking-tighter">Recipeo<span className="text-orange-600">AI</span></span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-xs font-medium">World-class AI culinary assistant helping you turn leftovers into gourmet meals daily.</p>
                </div>

                {/* 2. RESOURCES */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Resources</h3>
                  <ul className="space-y-3 text-stone-500 text-sm font-semibold">
                    <li><Link href="/about" className="hover:text-orange-600">• About Us</Link></li>
                    <li><Link href="/privacy" className="hover:text-orange-600">• Privacy Policy</Link></li>
                    <li><Link href="/contact" className="hover:text-orange-600">• Contact Us</Link></li>
                    <li><Link href="/terms" className="hover:text-orange-600">• Terms of Service</Link></li>
                  </ul>
                </div>

                {/* 3. SECURITY */}
                <div className="space-y-8">
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Security</h3>
                  <div className="flex gap-4 items-start">
                    <div className="p-2.5 bg-green-50 rounded-xl text-green-600"><Lock className="w-5 h-5" /></div>
                    <div><p className="text-sm font-bold">Local Sync</p><p className="text-xs text-stone-400 font-medium">100% secure recipes</p></div>
                  </div>
                </div>

                {/* 4. COMPLIANCE */}
                <div>
                  <h3 className="text-sm font-bold text-stone-900 mb-6 tracking-wide">Compliance</h3>
                  <div className="p-6 border border-stone-100 rounded-[2rem] bg-stone-50/50 flex flex-col items-center text-center shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-green-500 mb-4" />
                    <p className="text-sm font-bold text-stone-900">GDPR Compliant</p>
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
