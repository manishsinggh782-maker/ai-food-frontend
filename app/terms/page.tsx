import React from "react";
import { 
  Scale, 
  BookOpen, 
  AlertCircle, 
  Zap, 
  ShieldCheck, 
  Mail, 
  Gavel, 
  ChevronRight, 
  Globe, 
  DollarSign,
  Eye
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | RecipeoAI - Global User Agreement",
  description: "Official legal terms and conditions for RecipeoAI. Learn about our AI usage, advertising disclosures, and global service standards.",
};

export default function TermsPage() {
  const lastUpdated = "May 03, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-stone-200/30 to-transparent -z-10" />

      {/* --- BREADCRUMB --- */}
      <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Terms of Service</span>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-10 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-left md:text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-900 text-stone-50 rounded-full text-[10px] font-black mb-8 uppercase tracking-[0.3em]">
            <Gavel className="w-3.5 h-3.5 text-orange-500" /> International Governance
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            Terms of <span className="text-orange-600">Service.</span>
          </h1>
          <p className="text-xl text-stone-500 font-medium max-w-3xl mx-auto leading-relaxed">
            This Global User Agreement governs your access to RecipeoAI. By using our platform, you agree to these international standards of conduct and safety.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-white border border-stone-200 rounded-2xl shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest italic">Version 4.0.2 — Released: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* 1. Global Acceptance */}
          <div className="group bg-white p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">1. Global Acceptance</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-medium">
              By accessing RecipeoAI ("the Service"), operated by **Manish Singh**, you legally agree to be bound by these Terms. This agreement applies to all visitors, users, and others who access the Service worldwide. If you disagree with any part of the terms, you do not have permission to access the Service.
            </p>
          </div>

          {/* 2. AI & Data Disclaimer */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">2. AI-Generated Output</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-stone-600 leading-relaxed font-medium">
                Our recipes are generated using advanced Artificial Intelligence. While highly optimized, the output is provided "as is" without warranty.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-red-50 rounded-3xl border border-red-100">
                  <h4 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2"><AlertCircle className="w-4 h-4"/> Safety First</h4>
                  <p className="text-xs text-red-700 font-medium leading-relaxed">Always verify cooking temperatures and ingredient expiration. AI suggestions should never override food safety standards.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Not Professional Advice</h4>
                  <p className="text-xs text-blue-700 font-medium leading-relaxed">RecipeoAI does not provide medical or nutritional certifications. Consult a dietitian for health-specific diets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ADVERTISING DISCLOSURE (CRITICAL FOR ADSENSE) */}
          <div className="bg-orange-600 p-8 md:p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <DollarSign className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-10 h-10 text-orange-200" />
                <h2 className="text-3xl font-black tracking-tight">3. Advertising Disclosure</h2>
              </div>
              <p className="text-xl font-medium opacity-90 leading-relaxed">
                To keep our AI services free for the global community, RecipeoAI monetizes through **Google AdSense** and third-party advertising networks. We use cookies to personalize content and ads, analyze our traffic, and provide social media features. By using our platform, you acknowledge and agree to the presence of these advertisements.
              </p>
            </div>
          </div>

          {/* 4. Billing & Stripe */}
          <div className="bg-stone-900 p-8 md:p-12 rounded-[3rem] text-stone-50 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-10 h-10 text-orange-500" />
              <h2 className="text-3xl font-black tracking-tight">4. Payments & Billing</h2>
            </div>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Premium features (Head Chef Subscriptions) are processed through **Stripe**. We do not store your credit card information. All billing cycles are handled with enterprise-grade encryption.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-stone-800">
               <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Secure Protocol</span>
               <div className="h-px grow bg-stone-800" />
               <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">256-Bit SSL</span>
            </div>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-10 h-10 text-stone-400" />
              <h2 className="text-3xl font-black tracking-tight">5. Limitation of Liability</h2>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed font-medium">
              In no event shall **Manish Singh** or RecipeoAI be liable for any indirect, consequential, or incidental damages, including but not limited to health issues, kitchen accidents, or loss of data, arising out of your use or inability to use the Service. Use of AI recipes is entirely at your own risk.
            </p>
          </div>

          {/* 6. Contact & Legal Inquiry */}
          <div className="pt-20 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-stone-100">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tighter">Legal Inquiries</h2>
            <p className="text-stone-500 font-medium mb-10 max-w-sm mx-auto italic">If you have any questions about these Global Terms, please contact our legal desk.</p>
            <a 
              href="mailto:legal@recipeoai.com" 
              className="inline-block bg-stone-900 text-white px-12 py-5 rounded-2xl font-black hover:bg-stone-800 transition-all active:scale-95 shadow-xl shadow-stone-200"
            >
              legal@recipeoai.com
            </a>
          </div>

        </div>
      </section>

      {/* --- COMPLIANCE FOOTER --- */}
      <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col items-center">
        <div className="flex items-center gap-6 opacity-30 grayscale mb-6">
           <span className="text-[10px] font-black uppercase tracking-widest">GDPR COMPLIANT</span>
           <span className="text-[10px] font-black uppercase tracking-widest">CCPA READY</span>
           <span className="text-[10px] font-black uppercase tracking-widest">DMCA PROTECTED</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 italic">
          RecipeoAI Governance Framework • Global Standards 2026
        </div>
      </div>

    </div>
  );
}
