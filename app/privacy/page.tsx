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
  Info,
  ShieldAlert, // New icon for children's privacy
  RefreshCcw // New icon for updates
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | RecipeoAI - Your Data Protection Rights",
  description: "Official Privacy Policy for RecipeoAI. Learn about our AI data handling, Google AdSense third-party cookie compliance, GDPR, and CCPA standards.",
};

export default function PrivacyPage() {
  const lastUpdated = "July 01, 2026"; // Current date updated

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
            <ShieldCheck className="w-3.5 h-3.5" /> AdSense Compliant v5.0
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Privacy & <br /><span className="text-orange-600">Integrity.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between border-t border-stone-200 pt-8">
            <p className="text-lg md:text-xl text-stone-500 font-medium max-w-2xl leading-relaxed">
              We take your privacy seriously. This document outlines how **Manish Singh** and the RecipeoAI team protect your global digital identity.
            </p>
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Last Updated</span>
               <span className="text-lg font-black text-stone-900">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 1. Commitment */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">1. Our Commitment</h2>
            </div>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium">
              At RecipeoAI, we maintain the highest standards of digital trust. We do not sell or trade your personal information. This policy describes how we collect data across our Next.js ecosystem to enhance your culinary experience.
            </p>
          </div>

          {/* 2. Collection */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 text-orange-600">
              <Eye className="w-12 h-12" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900">2. Information We Collect</h2>
            </div>
            <div className="space-y-6">
               <div className="p-6 md:p-8 bg-stone-50 rounded-3xl border border-stone-100">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4">A. AI Vision Data</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Our "Pantry Scan" identifies food items only. **Face recognition is strictly prohibited.** Non-food biometric data is instantly discarded.
                  </p>
               </div>
               <div className="p-6 md:p-8 bg-stone-50 rounded-3xl border border-stone-100">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4">B. Account Security</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Authentication is handled by **Clerk**. We do not store your passwords on our primary servers, ensuring enterprise-grade protection.
                  </p>
               </div>
            </div>
          </div>

          {/* 3. ADSENSE & COOKIES (OPTIMIZED FOR APPROVAL) */}
          <div className="bg-orange-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <Cookie className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Zap className="w-10 h-10 text-orange-200" />
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-none">3. Google AdSense & Cookies</h2>
              </div>
              <div className="space-y-6 text-base md:text-lg font-medium opacity-95 leading-relaxed">
                <p>
                  RecipeoAI uses cookies to personalize content and ads. We partner with **Google AdSense** and other third-party vendors to serve ads based on your prior visits.
                </p>
                <div className="p-6 md:p-8 bg-white/10 rounded-[2rem] border border-white/20 text-xs md:text-sm italic space-y-4">
                  <p>
                    • Google, as a third-party vendor, uses cookies to serve ads on RecipeoAI.
                  </p>
                  <p>
                    • Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
                  </p>
                  <p>
                    • Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="underline font-bold">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" className="underline font-bold">www.aboutads.info</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Children's Privacy (IMPORTANT FOR ADSENSE) */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 text-red-600">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900">4. Children's Privacy</h2>
            </div>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium">
              RecipeoAI does not knowingly collect any personally identifiable information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best to promptly remove such information from our records.
            </p>
          </div>

          {/* 5. GDPR & Global Rights */}
          <div className="bg-stone-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-stone-50 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <Globe className="w-10 h-10 text-orange-500" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">5. Global Privacy Rights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-4">
                  <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.2em]">GDPR (Europe)</h4>
                  <ul className="text-xs md:text-sm space-y-2 text-stone-400 font-medium">
                     <li className="flex gap-2"><span>•</span> Right to Access & Rectification</li>
                     <li className="flex gap-2"><span>•</span> Right to be Forgotten</li>
                     <li className="flex gap-2"><span>•</span> Right to Data Portability</li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h4 className="text-orange-500 font-black text-xs uppercase tracking-[0.2em]">CCPA (California)</h4>
                  <ul className="text-xs md:text-sm space-y-2 text-stone-400 font-medium">
                     <li className="flex gap-2"><span>•</span> Right to Know / Delete</li>
                     <li className="flex gap-2"><span>•</span> Right to Opt-Out of Sale</li>
                     <li className="flex gap-2"><span>•</span> Non-Discrimination Rights</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* 6. Policy Changes */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">6. Changes to This Policy</h2>
            </div>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* 7. Contact Section */}
          <div className="pt-10 md:pt-20 text-center px-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-stone-100">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter">Data Privacy Officer</h2>
            <p className="text-stone-500 font-medium mb-10 max-w-sm mx-auto italic text-center text-sm md:text-base">For any queries regarding your data, contact us at:</p>
            <a 
              href="mailto:privacy@recipeoai.com" 
              className="inline-block bg-stone-900 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-stone-200 text-sm md:text-base"
            >
              privacy@recipeoai.com
            </a>
          </div>

        </div>
      </section>

      {/* --- BRAND FOOTER --- */}
      <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col items-center gap-6 px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-30 grayscale italic text-center">
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Global Privacy Framework</span>
           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">AdSense Policy Compliance</span>
        </div>
        <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-stone-300 italic text-center">
          RecipeoAI Privacy Enforcement Unit • Ed. 2026
        </div>
      </div>

    </div>
  );
}
