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
  Rocket,
  Camera,
  BookOpen,
  PenTool,
  Fingerprint,
  Server
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Manish Singh & RecipeoAI | The Future of Culinary AI",
  description: "Discover how Manish Singh is revolutionizing cooking in India and globally using Next.js, Strapi, and Advanced AI to eliminate food waste.",
};

export default function AboutPage() {
  const lastUpdated = "May 03, 2026";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      
      {/* --- PREMIUM BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-[20%] -left-20 w-[400px] h-[400px] bg-blue-100/20 blur-[120px] rounded-full -z-10" />

      {/* --- BREADCRUMB --- */}
      <nav className="pt-32 px-4 max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Our Identity</span>
      </nav>

      {/* --- HERO SECTION: FOUNDER'S VISION --- */}
      <section className="pt-10 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-[0.3em] text-orange-600">
            <Sparkles className="w-3.5 h-3.5" /> Manish Singh's Innovation
          </div>
          <h1 className="text-5xl md:text-[8rem] font-black mb-10 tracking-tighter leading-[0.85]">
            Empowering <br /><span className="text-orange-600">Every Kitchen.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-t border-stone-200 pt-12">
            <p className="text-xl md:text-2xl text-stone-500 font-medium leading-tight">
              Developed by <span className="text-stone-900 font-bold">Manish Singh</span>, RecipeoAI is an advanced AI ecosystem dedicated to solving food waste in India and across the globe.
            </p>
            <div className="flex flex-col md:items-end">
               <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Core Philosophy</span>
               <span className="text-lg font-black text-stone-900 italic text-right">Zero Waste. Infinite Flavor.</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE POWERHOUSE TECH STACK (Next.js + Strapi) --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto bg-stone-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 relative overflow-hidden text-stone-50 shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <Server className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-orange-400 mb-8 font-bold uppercase tracking-[0.3em] text-xs">
              <Code className="w-5 h-5" /> The Engineering DNA
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                  Next.js + <span className="text-orange-500">Strapi CMS</span>
                </h2>
                <p className="text-stone-400 text-lg md:text-xl leading-relaxed font-light">
                  RecipeoAI is built on the cutting edge of web technology. Our frontend uses **Next.js 15** for lightning-fast SSR performance, while our robust backend is powered by **Strapi**, hosted on high-performance Render servers. This ensures your culinary data is always served fresh and instantly.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-stone-800 rounded-3xl border border-stone-700">
                    <Zap className="w-8 h-8 text-orange-500 mb-4" />
                    <h4 className="font-bold text-sm uppercase mb-2">High Speed</h4>
                    <p className="text-xs text-stone-500">Edge-based recipe generation.</p>
                 </div>
                 <div className="p-6 bg-stone-800 rounded-3xl border border-stone-700">
                    <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="font-bold text-sm uppercase mb-2">Secure API</h4>
                    <p className="text-xs text-stone-500">Protected backend nodes.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION FOR THE NATION --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-orange-600 p-12 md:p-20 rounded-[4rem] text-white">
              <Target className="w-12 h-12 mb-8 text-orange-200" />
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Mera Bharat, <br />Zero Waste.</h2>
              <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed">
                Manish Singh ka mukhya lakshya desh mein khane ki barbadi ko rokna hai. RecipeoAI har bhartiya rasoi ko ek smart assistant deta hai jo ghar mein bache hue saman se hi 'Five-Star' khana banane mein madad karta hai.
              </p>
           </div>
           <div className="bg-white p-12 rounded-[4rem] border border-stone-200 flex flex-col justify-center">
              <Globe className="w-12 h-12 text-blue-600 mb-8" />
              <h3 className="text-3xl font-black mb-4">Global Reach</h3>
              <p className="text-stone-500 font-medium">Currently serving over 140+ countries with localized AI intelligence.</p>
           </div>
        </div>
      </section>

      {/* --- KEY FEATURES: THE RECIPEO ADVANTAGE --- */}
      <section className="px-4 mb-32">
        <h2 className="text-center text-4xl md:text-6xl font-black mb-16 tracking-tighter">Smart Features.</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "AI Fridge Scan", desc: "Snap a photo of your pantry; our AI identifies ingredients instantly.", icon: Camera },
             { title: "Worldwide Cuisines", desc: "Explore 100+ global food cultures from your kitchen.", icon: Globe },
             { title: "Digital Cookbook", desc: "Save and organize your favorite AI creations forever.", icon: BookOpen },
             { title: "Instant Search", desc: "Filter by diet, time, or specific cravings with ease.", icon: Zap },
           ].map((f, i) => (
             <div key={i} className="bg-white p-10 rounded-[3rem] border border-stone-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* --- HUMAN-WRITTEN CONTENT INTEGRITY --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto bg-stone-100 rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0">
             <PenTool className="w-10 h-10 text-orange-600" />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tighter">100% Human-Verified Blogs</h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Main, **Manish Singh**, personally har article aur blog post ko verify karta hoon. RecipeoAI par milne wala gyan kisi bot ka nahi, balki ek asli insaan ka likha hua verified data hota hai. Hamari priority accuracy aur user trust hai.
            </p>
          </div>
        </div>
      </section>

      {/* --- ADVANCED SECURITY: CLERK & BODYGUARD --- */}
      <section className="px-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white p-12 rounded-[4rem] border border-stone-200 flex flex-col items-start shadow-sm">
              <Fingerprint className="w-12 h-12 text-blue-500 mb-8" />
              <h3 className="text-3xl font-black mb-4">Secure Authentication</h3>
              <p className="text-stone-500 mb-6 font-medium leading-relaxed">
                Hum **Clerk** ka istemal karte hain taaki aapka login aur personal data hamesha encrypted aur safe rahe. User privacy hamari sabse badi zimmedari hai.
              </p>
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Powered by Clerk</span>
           </div>
           <div className="bg-stone-900 p-12 rounded-[4rem] text-stone-50 flex flex-col items-start">
              <ShieldCheck className="w-12 h-12 text-green-500 mb-8" />
              <h3 className="text-3xl font-black mb-4 tracking-tight text-white">Bodyguard AI Security</h3>
              <p className="text-stone-400 mb-6 font-medium leading-relaxed">
                Humne RecipeoAI mein **Advanced "Bodyguard AI" Alert** system integrate kiya hai jo aapki recipes aur pantry data ko har tarah ke cyber threat se surakhshit rakhta hai.
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Active Protection System</span>
              </div>
           </div>
        </div>
      </section>

      {/* --- THE FINAL STATEMENT --- */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-stone-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 italic">Pioneering the Digital Kitchen Revolution</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">
          "Technology is at its best when it brings people together over a good meal."
        </h2>
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-stone-200 border-2 border-white shadow-xl overflow-hidden">
             <Image src="/logo.jpg" alt="Manish Singh" width={80} height={80} />
          </div>
          <div>
            <h4 className="font-black text-xl">Manish Singh</h4>
            <p className="text-orange-600 font-bold text-xs uppercase tracking-widest">Founder, RecipeoAI</p>
          </div>
        </div>
      </div>

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
