import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Globe,
  ShieldCheck,
  Code,
  ChevronRight,
  Target,
  Camera,
  BookOpen,
  PenTool,
  Fingerprint,
  ChefHat,
  Mail,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "About Us | RecipeoAI",
  description:
    "Meet Manish Singh, the founder of RecipeoAI. Explore original food and cooking articles, practical kitchen tips, and recipe ideas to make everyday home cooking easier.",
};

const lastUpdated = "October 09, 2026";
const CONTACT_EMAIL = "privacy@recipeoai.com";

const features = [
  {
    title: "AI Recipe Generator",
    desc: "Enter the ingredients you have and discover recipe ideas for your next meal.",
    icon: ChefHat,
  },
  {
    title: "Pantry Scan",
    desc: "Upload a photo of your pantry or fridge to get AI-powered suggestions about visible food items.",
    icon: Camera,
  },
  {
    title: "Digital Cookbook",
    desc: "Save the recipes you like and return to them whenever you need inspiration.",
    icon: BookOpen,
  },
  {
    title: "Food & Cooking Articles",
    desc: "Explore original articles written by Manish Singh, including practical cooking tips, food guides, and everyday kitchen advice.",
    icon: PenTool,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 blur-[140px] rounded-full -z-10" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 px-4 max-w-6xl mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400"
      >
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">About Us</span>
      </nav>

      {/* Hero */}
      <header className="pt-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-8 uppercase tracking-widest text-orange-600">
            <Sparkles className="w-3.5 h-3.5" />
            About RecipeoAI
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">
            Cook more with <br />
            <span className="text-orange-600">
              what you already have.
            </span>
          </h1>

          <div className="border-t border-stone-200 pt-8 max-w-3xl">
            <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed">
              RecipeoAI is a recipe and cooking platform created by{" "}
              <strong className="text-stone-900">Manish Singh</strong>.
              Our goal is to help home cooks discover useful cooking
              information, find inspiration for everyday meals, and make
              better use of the ingredients they already have.
            </p>
          </div>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Story */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 text-orange-600">
                <Target className="w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900">
                  Why we built RecipeoAI
                </h2>
              </div>

              <div className="space-y-4 text-stone-600 leading-relaxed text-base md:text-lg">
                <p>
                  Deciding what to cook can be difficult when you have only
                  a few ingredients available. Many people also look for
                  practical answers to everyday questions about food,
                  cooking methods, and kitchen preparation.
                </p>

                <p>
                  RecipeoAI brings cooking articles, helpful food
                  information, and recipe ideas together in one place.
                  Our aim is to make cooking easier to understand and help
                  readers make informed decisions in their own kitchens.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-center">
              <Globe className="w-10 h-10 text-orange-600 mb-6" />

              <h3 className="text-2xl font-black mb-3">
                Made for home cooks
              </h3>

              <p className="text-stone-600 leading-relaxed">
                RecipeoAI shares cooking information and recipe
                inspiration for people who want to learn, explore, and
                enjoy cooking at home.
              </p>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-center text-3xl md:text-5xl font-black mb-12 tracking-tighter">
              What you can do here
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-5">
                    <f.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Article authorship and editorial approach */}
          <section className="bg-stone-100 rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow shrink-0">
              <PenTool className="w-7 h-7 text-orange-600" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                How our articles and recipes are created
              </h2>

              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                The food and cooking articles published on RecipeoAI are
                written by Manish Singh. They are created to share useful
                information, practical cooking guidance, and ideas that
                readers can apply in their everyday lives.
              </p>

              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                RecipeoAI also offers an AI-powered recipe generator that
                suggests recipes based on available ingredients. This
                recipe-generation feature is separate from our blog
                articles. We aim to make the information on our website
                clear, useful, and relevant to home cooks.
              </p>

              <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                We welcome reader feedback and corrections. If you notice
                an error or believe an article could be improved, please
                contact us so we can review your feedback.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Contact us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Safety notice */}
          <section className="bg-orange-50 border border-orange-200 rounded-3xl p-6 md:p-8 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0 mt-1" />

            <div>
              <h2 className="font-black text-lg mb-1">
                Please cook safely
              </h2>

              <p className="text-stone-700 leading-relaxed">
                Recipe suggestions and cooking articles are intended for
                general informational purposes. Always check ingredient
                labels for allergens, follow appropriate food-safety
                practices, and cook food thoroughly. For individual
                dietary or medical concerns, consult a qualified
                healthcare professional.
              </p>
            </div>
          </section>

          {/* Technology & Security */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Code className="w-9 h-9 text-orange-600 mb-5" />

              <h3 className="text-2xl font-black mb-3">
                Technology
              </h3>

              <p className="text-stone-600 leading-relaxed">
                RecipeoAI is built with Next.js for the website and
                Strapi as the content management system. Recipe
                suggestions and pantry photo recognition are powered
                by Google's Gemini AI. Food images may be sourced from
                Unsplash.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
              <Fingerprint className="w-9 h-9 text-blue-600 mb-5" />

              <h3 className="text-2xl font-black mb-3">
                Your account and security
              </h3>

              <p className="text-stone-600 leading-relaxed mb-4">
                Sign-in is handled by Clerk. We use security measures
                to help protect the website and reduce abusive
                activity. Please review our Privacy Policy to learn
                more about how information is handled.
              </p>

              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:underline"
              >
                <ShieldCheck className="w-4 h-4" />
                Read our Privacy Policy
              </Link>
            </div>
          </section>

          {/* Founder */}
          <section className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm text-center">
            <div
              className="w-20 h-20 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow"
              aria-hidden="true"
            >
              MS
            </div>

            <h2 className="font-black text-2xl">Manish Singh</h2>

            <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
              Founder & Developer
            </p>

            <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Manish Singh founded and developed RecipeoAI to make
              everyday cooking information and recipe discovery more
              accessible. He works on the website and writes its food
              and cooking articles to help readers find useful
              information for their kitchens.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-stone-200">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">
              Get in touch
            </h2>

            <p className="text-stone-600 mb-6">
              Have a question, suggestion, or correction? We would
              love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-6 py-3 bg-stone-900 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Contact page
              </Link>

              <Link
                href="/privacy"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 text-center text-xs text-stone-400 px-4">
        Last updated: {lastUpdated}
      </footer>
    </div>
  );
}
