import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Cookie, 
  Globe, 
  UserCheck, 
  Server, 
  FileText, 
  ChevronRight, 
  Mail,
  Zap,
  Info
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | RecipeoAI - Global Data Protection Standards",
  description: "Official Privacy Policy for RecipeoAI. Learn about our AI data handling, Google AdSense compliance, GDPR, and CCPA privacy standards.",
};

export default function PrivacyPage() {
  const lastUpdated = "May 03, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent -z-10" />

      {/* --- BREADCRUMB --- */}
      <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Privacy Protocol</span>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-10 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-widest text-orange-600">
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection v4.2
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Privacy & <br /><span className="text-orange-600">Integrity.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between border-t border-stone-200 pt-8">
            <p className="text-xl text-stone-500 font-medium max-w-2xl leading-relaxed">
              We take your privacy seriously. This document outlines how **Manish Singh** and the RecipeoAI team protect your global digital identity.
            </p>
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Effective Date</span>
               <span className="text-lg font-black text-stone-900">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 1. Commitment to Privacy */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">1. Our Commitment</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-medium">
              At RecipeoAI, we are committed to maintaining the trust of our global visitors. We do not sell, rent, or trade your personal information for marketing purposes. This policy describes how we collect data across our Next.js-powered ecosystem and how we use it to enhance your culinary experience.
            </p>
          </div>

          {/* 2. Information Collection (Deep Dive) */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 text-orange-600">
              <Eye className="w-12 h-12" />
              <h2 className="text-3xl font-black tracking-tight text-stone-900">2. Information We Collect</h2>
            </div>
            <div className="space-y-8">
               <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">A. AI Input & Vision Data</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    When you use our "Pantry Scan" feature, we process the images you upload using Advanced AI. We exclusively identify food items and ingredients. **Face Recognition is strictly prohibited** within our system; any non-food biometric data is instantly discarded at the edge.
                  </p>
               </div>
               <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">B. Identity & Account Data</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Account management is handled by **Clerk**, providing enterprise-grade security for your email, profile, and login credentials. We do not store your passwords on our primary servers.
                  </p>
               </div>
            </div>
          </div>

          {/* 3. ADSENSE & COOKIES (Critical for Approval) */}
          <div className="bg-orange-600 p-8 md:p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Cookie className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Zap className="w-10 h-10 text-orange-200" />
                <h2 className="text-3xl font-black tracking-tight leading-none">3. Google AdSense & Cookies</h2>
              </div>
              <div className="space-y-6 text-lg font-medium opacity-95 leading-relaxed">
                <p>
                  RecipeoAI uses cookies to enhance platform navigation and analyze traffic. To maintain our free global service, we partner with **Google AdSense** to serve advertisements.
                </p>
                <div className="p-8 bg-white/10 rounded-[2.5rem] border border-white/20 text-sm italic">
                  "Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DoubleClick DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy."
                </div>
                <p className="text-sm font-bold border-t border-white/20 pt-6">
                  You can manage your preferences or opt-out via your browser settings or Google's Official Ad Settings portal.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Infrastructure & Hosting */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">4. Backend & Storage</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-medium mb-8">
              Our data ecosystem is powered by **Strapi CMS** and hosted on **Render** high-availability servers. 
            </p>
            <div className="flex items-center gap-3 px-6 py-4 bg-blue-50 text-blue-700 rounded-2xl text-xs font-black uppercase tracking-widest">
               <ShieldCheck className="w-4 h-4" /> SSL-Encrypted Transmission Active
            </div>
          </div>

          {/* 5. GDPR & Global Rights */}
          <div className="bg-stone-900 p-8 md:p-12 rounded-[4rem] text-stone-50 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <Globe className="w-10 h-10 text-orange-500" />
              <h2 className="text-4xl font-black tracking-tight">5. Global Privacy Rights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.2em]">GDPR Compliance (EU)</h4>
                  <ul className="text-sm space-y-2 text-stone-400 font-medium">
                     <li className="flex gap-2"><span>•</span> Right to Access & Rectification</li>
                     <li className="flex gap-2"><span>•</span> Right to Erasure (The "Right to be Forgotten")</li>
                     <li className="flex gap-2"><span>•</span> Right to Data Portability</li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.2em]">CCPA Compliance (California)</h4>
                  <ul className="text-sm space-y-2 text-stone-400 font-medium">
                     <li className="flex gap-2"><span>•</span> Right to Know about personal info collected</li>
                     <li className="flex gap-2"><span>•</span> Right to Delete personal info</li>
                     <li className="flex gap-2"><span>•</span> Right to Opt-Out of the sale of info</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 6. Bodyguard AI Security */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">6. Data Defense</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-medium mb-8">
              RecipeoAI utilizes a custom **"Bodyguard AI"** security protocol. This system continuously monitors for unauthorized access attempts and ensures that your culinary data is stored with AES-256 bit encryption.
            </p>
            <div className="p-6 bg-stone-50 rounded-3xl border border-stone-100 flex items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 italic text-center">Bodyguard AI System Active</span>
               </div>
               <UserCheck className="w-6 h-6 text-stone-300" />
            </div>
          </div>

          {/* 7. Contact Section */}
          <div className="pt-20 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-stone-100">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Privacy Officer</h2>
            <p className="text-stone-500 font-medium mb-10 max-w-sm mx-auto italic text-center">For any data-related queries or to exercise your privacy rights, please reach out to us.</p>
            <a 
              href="mailto:privacy@recipeoai.com" 
              className="inline-block bg-stone-900 text-white px-12 py-5 rounded-2xl font-black hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-stone-200"
            >
              privacy@recipeoai.com
            </a>
          </div>

        </div>
      </section>

      {/* --- BRAND FOOTER --- */}
      <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 opacity-30 grayscale italic text-center">
           <span className="text-[10px] font-black uppercase tracking-widest">Global Privacy Framework</span>
           <span className="text-[10px] font-black uppercase tracking-widest">Secured by Bodyguard AI</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 italic text-center">
          RecipeoAI Privacy Enforcement Unit • Global Ed. 2026
        </div>
      </div>

    </div>
  );
}
