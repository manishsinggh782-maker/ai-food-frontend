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
  const lastUpdated = "March 22, 2026";

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
