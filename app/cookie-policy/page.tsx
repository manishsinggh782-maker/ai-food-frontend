
import React from "react";
import { 
  Cookie, 
  ShieldCheck, 
  Settings, 
  BarChart, 
  Target, 
  MousePointerClick,
  Info,
  ChevronRight,
  Mail,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | RecipeoAI - Transparency in Tracking",
  description: "Learn how RecipeoAI uses cookies to enhance your experience, manage Google AdSense preferences, and protect your data.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "July 01, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-50/40 to-transparent -z-10" />

      {/* Breadcrumb */}
      <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Cookie Framework</span>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-widest text-orange-600 mx-auto">
            <Cookie className="w-3.5 h-3.5" /> Tracking Transparency
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Cookies & <br /><span className="text-orange-600">Preferences.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between border-t border-stone-200 pt-8">
            <p className="text-lg md:text-xl text-stone-500 font-medium max-w-2xl leading-relaxed">
              We use cookies to make **RecipeoAI** smarter and keep our service free. Learn how we manage your digital crumbs.
            </p>
            <div className="flex flex-col items-center md:items-end">
               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Version</span>
               <span className="text-lg font-black text-stone-900">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* 1. What are Cookies */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4.5rem] border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">1. What are Cookies?</h2>
            </div>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium">
              Cookies are small text files stored on your device when you visit websites. They help us remember your pantry items, save your recipe preferences, and understand how you interact with our AI kitchen.
            </p>
          </div>

          {/* 2. Types of Cookies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Essential */}
             <div className="bg-stone-900 p-8 rounded-[3rem] text-stone-50 border border-stone-800">
                <ShieldCheck className="w-10 h-10 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">Essential Cookies</h3>
                <p className="text-sm text-stone-400 leading-relaxed">Required for secure login and account management through Clerk. Without these, RecipeoAI cannot function safely.</p>
             </div>
             {/* Analytics */}
             <div className="bg-white p-8 rounded-[3rem] border border-stone-200">
                <BarChart className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-stone-900">Performance</h3>
                <p className="text-sm text-stone-500 leading-relaxed">We use these to see which AI recipes are viral. They help us optimize site speed and AI response times.</p>
             </div>
          </div>

          {/* 3. ADSENSE SPECIAL SECTION (Must for Approval) */}
          <div className="bg-orange-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl relative">
            <div className="absolute top-10 right-10 opacity-20">
               <Zap className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-10 h-10 text-orange-100" />
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">3. Advertising & AdSense</h2>
              </div>
              <div className="space-y-6 text-base md:text-lg font-medium opacity-95">
                <p>To keep RecipeoAI free for everyone, we show ads via **Google AdSense**. Google uses cookies to serve ads based on your visit history.</p>
                <div className="bg-white/10 p-6 md:p-8 rounded-[2.5rem] border border-white/20 text-xs md:text-sm italic">
                   Important: "Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet."
                </div>
              </div>
            </div>
          </div>

          {/* 4. How to Manage */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 text-stone-900">
              <Settings className="w-12 h-12 bg-stone-100 p-3 rounded-2xl" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">4. Managing Preferences</h2>
            </div>
            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium mb-8">
              You have full control. You can disable cookies in your browser settings or opt-out of personalized ads directly through Google.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href="https://www.google.com/settings/ads" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all">
                  <MousePointerClick className="w-4 h-4" /> Google Ad Settings
               </a>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-10 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-black mb-4">Questions?</h2>
            <p className="text-stone-500 font-medium mb-8">Contact our Privacy Unit at:</p>
            <a href="mailto:cookies@recipeoai.com" className="text-xl font-black text-stone-900 underline decoration-orange-500 decoration-4 underline-offset-8 hover:text-orange-600 transition-all">
              cookies@recipeoai.com
            </a>
          </div>

        </div>
      </section>

      {/* Brand Footer */}
      <div className="mt-20 py-10 border-t border-stone-200 text-center">
        <div className="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 italic">
          RecipeoAI Security Protocol • Cookies Ed. 2026
        </div>
      </div>

    </div>
  );
}
