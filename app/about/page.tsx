import React from "react";
import { 
  Sparkles, 
  Cpu, 
  Globe, 
  Users, 
  Trophy, 
  ShieldCheck, 
  Code, 
  Zap, 
  ChevronRight,
  Target,
  Rocket
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | RecipeoAI - Pioneers in Generative Culinary Intelligence",
  description: "Learn about the mission, the technology (Next.js), and the vision behind RecipeoAI, the world's leading AI-powered culinary assistant developed by Manish Singh.",
};

export default function AboutPage() {
  const lastUpdated = "May 03, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-[20%] -left-20 w-[400px] h-[400px] bg-blue-100/20 blur-[120px] rounded-full -z-10" />

      {/* --- BREADCRUMB --- */}
      <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Our Identity</span>
      </nav>

      {/* --- HERO SECTION: THE VISION --- */}
      <section className="pt-10 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-orange-600">
            <Sparkles className="w-3.5 h-3.5" /> Established 2026
          </div>
          <h1 className="text-6xl md:text-[9rem] font-black mb-10 tracking-tighter leading-[0.85]">
            Future of <br /><span className="text-orange-600">Cooking.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-t border-stone-200 pt-12">
            <p className="text-2xl text-stone-500 font-medium leading-tight">
              RecipeoAI is not just a tool; it's a <span className="text-stone-900">Generative Culinary Intelligence</span> ecosystem designed to eliminate kitchen fatigue and food waste globally.
            </p>
            <div className="flex flex-col md:items-end">
               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Protocol Verified</span>
               <span className="text-lg font-black text-stone-900 italic">v4.0 Global Release</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE STATS GRID --- */}
      <section className="px-4 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: "Global Users", val: "500K+", icon: Users },
             { label: "AI Recipes", val: "1.2M+", icon: Zap },
             { label: "Countries", val: "140+", icon: Globe },
             { label: "User Rating", val: "4.9/5", icon: Trophy },
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col items-center text-center">
                <stat.icon className="w-6 h-6 text-orange-500 mb-4" />
                <span className="text-3xl font-black mb-1 tracking-tighter">{stat.val}</span>
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">{stat.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* --- TECHNOLOGY STACK: NEXT.JS FOCUS --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-stone-50">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Code className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-orange-500 mb-6 font-bold uppercase tracking-widest text-xs">
              <Cpu className="w-5 h-5" /> Engineering Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
              Built on <span className="text-orange-400 italic">Next.js Framework.</span>
            </h2>
            <p className="text-stone-400 text-xl leading-relaxed font-light mb-10">
              RecipeoAI is engineered using **Next.js 15+**, leveraging Server-Side Rendering (SSR) and Edge Computing to deliver instant, AI-generated recipes with zero latency. Our infrastructure is designed for high-concurrency international traffic, ensuring a seamless gourmet experience across all continents.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Vercel Optimized', 'React Server Components', 'Tailwind CSS', 'AI SDK Integration'].map((tech) => (
                <span key={tech} className="px-5 py-2 bg-stone-800 rounded-full text-xs font-bold border border-stone-700 tracking-wide uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE MISSION CARDS --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[3.5rem] border border-stone-200 shadow-sm">
            <Target className="w-12 h-12 text-blue-600 mb-8" />
            <h3 className="text-3xl font-black mb-6 tracking-tight">Our Mission</h3>
            <p className="text-lg text-stone-500 leading-relaxed font-medium">
              To democratize gourmet cooking. We believe that everyone, regardless of their skill level, should have access to world-class culinary guidance using only the ingredients they have in their fridge.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3.5rem] border border-stone-200 shadow-sm">
            <Rocket className="w-12 h-12 text-orange-600 mb-8" />
            <h3 className="text-3xl font-black mb-6 tracking-tight">The Vision</h3>
            <p className="text-lg text-stone-500 leading-relaxed font-medium">
              We are building the 'Digital Chef' of the future—an AI that understands personal taste, cultural nuances, and nutritional requirements better than any static cookbook ever could.
            </p>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP / FOUNDER --- */}
      <section className="px-4 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-10">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-stone-200 mx-auto">
               <Image src="/logo.jpg" alt="Founder" width={128} height={128} className="object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-orange-600 p-2 rounded-full text-white shadow-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-2">Manish Singh</h2>
          <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-8">Founder & Lead AI Architect</p>
          <p className="text-xl text-stone-500 font-light leading-relaxed italic">
            "RecipeoAI was born from a simple question: 'What if code could taste?' Today, we're helping millions of people cook smarter, live healthier, and enjoy the art of food through advanced machine learning."
          </p>
        </div>
      </section>

      {/* --- GLOBAL COMPLIANCE SECTION --- */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto p-12 bg-white rounded-[3.5rem] border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
             <h3 className="text-2xl font-black mb-4 tracking-tight">International Compliance</h3>
             <p className="text-stone-400 text-sm font-medium max-w-sm">
               We adhere to the highest international standards of data privacy and AI ethics, including GDPR and CCPA.
             </p>
          </div>
          <div className="flex gap-8 opacity-40">
             <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">GDPR Ready</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Globe className="w-8 h-8" />
                <span className="text-[10px] font-black uppercase">ISO Certified</span>
             </div>
          </div>
          <Link href="/contact" className="bg-stone-900 text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-stone-200 text-sm tracking-wide">
             Partner with Us
          </Link>
        </div>
      </section>

      {/* --- FOOTER TIMESTAMP --- */}
      <div className="mt-24 text-center">
        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.5em] mb-4 italic">
          Last Verified Update: {lastUpdated}
        </div>
        <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full" />
      </div>

    </div>
  );
}
