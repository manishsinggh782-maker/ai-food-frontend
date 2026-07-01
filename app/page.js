import React from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import Link from "next/link";
import Script from "next/script";

// --- 1. DYNAMIC SEO METADATA ---
export const metadata = {
  title: "RecipeoAI: Free AI Recipe Generator & Meal Ideas 2026",
  description: "Get free gourmet recipes instantly with AI. Best recipe generator for keto, vegan & healthy meal planning from ingredients you have in 2026.",
  keywords: "free ai recipe generator, ai recipe maker, what to cook with ingredients, smart recipe maker, keto ai recipes 2026",
  alternates: {
    canonical: "https://www.recipeoai.com",
  },
  openGraph: {
    title: "RecipeoAI - #1 Free AI Cooking Assistant 2026",
    description: "Generate professional recipes from your leftovers using AI.",
    url: "https://www.recipeoai.com",
    siteName: "RecipeoAI",
    images: [{ url: "/banner.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  // --- 2. GOOGLE STRUCTURED DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "RecipeoAI",
        "url": "https://www.recipeoai.com",
        "description": "RecipeoAI is the ultimate Free AI Cooking Assistant for 2026.",
        "applicationCategory": "Health/LifestyleApplication",
        "operatingSystem": "All",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden">
      <Script
        id="structured-data-combined"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-1 text-center md:text-left w-full">
              <Badge
                variant="outline"
                className="border-2 border-orange-600 text-orange-700 bg-orange-50 text-[10px] md:text-sm font-bold mb-4 md:mb-6 uppercase tracking-wide"
              >
                <Flame className="mr-1 w-3 h-3 md:w-4 md:h-4" />
                #1 Global AI Cooking Assistant
              </Badge>

              {/* Responsive Text Size: Mobile par 4xl, Desktop par 8xl */}
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-4 md:mb-6 leading-tight md:leading-[0.9] tracking-tight">
                Turn your{" "}
                <span className="italic underline decoration-4 decoration-orange-600">
                  leftovers
                </span>{" "}
                into <br className="hidden md:block" />
                masterpieces.
              </h1>

              <p className="text-lg md:text-2xl text-stone-600 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                Snap a photo of your fridge. Our Free AI recipe maker tells you what to cook.
                Save money and eat gourmet tonight.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto px-8 py-6 text-lg font-bold shadow-lg hover:shadow-orange-200 transition-all"
                  >
                    Start Cooking Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-xs md:text-sm text-stone-500 font-medium">
                <span className="font-bold text-stone-900 underline italic">12,450+ verified cooks</span>{" "}
                rated us 4.9/5 stars
              </p>
            </div>

            {/* Image Card Mobile Responsive Fix */}
            <div className="w-full max-w-md md:max-w-none md:flex-1">
              <Card className="relative aspect-square border-4 border-stone-900 bg-stone-200 overflow-hidden shadow-2xl">
                <Image
                  src="/banner.jpg"
                  alt="AI Generated Gourmet Pasta Dish - RecipeoAI"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                <Card className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm border-2 border-stone-900 shadow-xl">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex justify-between items-start mb-1 md:mb-2">
                      <div>
                        <h3 className="font-bold text-sm md:text-lg">
                          Rustic Tomato Basil Pasta
                        </h3>
                        <div className="flex gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />
                          ))}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-[10px] md:text-xs border-2 border-green-700 bg-green-50 text-green-700 font-bold">
                        98% MATCH
                      </Badge>
                    </div>
                    <div className="flex gap-3 text-[10px] md:text-xs text-stone-500 font-semibold">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 25 mins</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 2 servings</span>
                    </div>
                  </CardContent>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Responsive */}
      <section className="py-8 md:py-12 border-y-2 border-stone-900 bg-stone-900">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center px-4">
          {SITE_STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl md:text-5xl font-black mb-1 text-stone-50">{stat.val}</div>
              <div className="text-[10px] md:text-sm text-orange-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Responsive */}
      <section className="py-16 md:py-24 px-4 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-7xl font-black mb-4 tracking-tighter">
              Your Smart <span className="text-orange-600">AI Kitchen</span>
            </h2>
            <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl">
              Unlock the full potential of your ingredients with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {FEATURES.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-2 border-stone-200 hover:border-orange-600 transition-all">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <div className="border-2 border-stone-200 p-3 rounded-xl"><IconComponent className="w-6 h-6 text-orange-600" /></div>
                      <Badge className="text-[10px] bg-stone-900 text-white uppercase">{feature.limit}</Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-stone-500 text-sm md:text-lg font-medium">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Responsive */}
      <section className="py-16 md:py-24 px-4 bg-stone-900 text-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-8xl font-black mb-12 md:mb-16 tracking-tighter">
            Cook in <span className="text-orange-600 italic">3 Steps.</span>
          </h2>
          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((item, i) => (
              <div key={i}>
                <div className="flex gap-4 md:gap-8 items-start">
                  <div className="text-4xl md:text-7xl font-black text-orange-600/30 leading-none">{item.step}</div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm md:text-xl text-stone-400 font-light">{item.desc}</p>
                  </div>
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && <div className="h-px bg-stone-800 w-full mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
           <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4">Choose Your Plan</h2>
           <p className="text-stone-500 text-lg">Join thousands of cooks saving money today.</p>
        </div>
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>
    </div>
  );
}
