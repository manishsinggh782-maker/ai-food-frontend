
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  ShieldCheck,
  Globe,
  ChefHat,
  MessageCircle,
  BookOpen,
  Utensils,
  LockKeyhole,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Help Center & FAQ | RecipeoAI",
  description:
    "Find answers about RecipeoAI, recipe generation, ingredient suggestions, privacy, food safety, and using our cooking tools.",
  alternates: {
    canonical: "https://www.recipeoai.com/faq",
  },
};

const categories = [
  {
    id: "general",
    name: "Getting Started",
    icon: Globe,
    items: [
      {
        q: "What is RecipeoAI?",
        a: "RecipeoAI is a cooking website that helps users explore recipe ideas and prepare meals using available ingredients. Depending on the feature, it can provide AI-generated recipe suggestions and other cooking-related information.",
      },
      {
        q: "How does RecipeoAI help me find recipes?",
        a: "You can use the available recipe features to explore meal ideas based on ingredients or your cooking preferences. Results can vary, so review the suggested ingredients and instructions before preparing a dish.",
      },
      {
        q: "Does RecipeoAI support different cuisines?",
        a: "Recipe suggestions may include dishes from different cuisines, such as Indian, Italian, French, and Asian cooking. The results depend on the feature you use and the information you provide.",
      },
      {
        q: "Is RecipeoAI free to use?",
        a: "You can explore the features currently available on the website. If a feature has a usage restriction or payment requirement, check the relevant page for its current conditions.",
      },
    ],
  },
  {
    id: "tech",
    name: "AI & Privacy",
    icon: ShieldCheck,
    items: [
      {
        q: "Does RecipeoAI use artificial intelligence?",
        a: "Some RecipeoAI features use artificial intelligence to generate recipe ideas or cooking suggestions. AI-generated results may contain mistakes and should be reviewed before use.",
      },
      {
        q: "Is my information private?",
        a: "We explain how information is collected, used, and protected in our Privacy Policy. Please review that policy before submitting personal information, ingredient lists, or photos.",
      },
      {
        q: "Are my uploaded photos processed locally?",
        a: "The processing method can depend on the feature and the services it uses. Please consult our Privacy Policy and the relevant feature's information for details. Do not assume that every feature processes data entirely in your browser.",
      },
      {
        q: "Does RecipeoAI sell my personal information?",
        a: "Please refer to our Privacy Policy for our data practices and any applicable disclosures regarding personal information and third-party services.",
      },
    ],
  },
  {
    id: "recipes",
    name: "Recipes & Food Safety",
    icon: ChefHat,
    items: [
      {
        q: "Can I rely on every AI-generated recipe?",
        a: "No. AI-generated recipes can contain inaccurate quantities, incomplete steps, or unsuitable ingredient combinations. Check the recipe carefully and use your own judgement before cooking.",
      },
      {
        q: "Does RecipeoAI provide medical or nutritional advice?",
        a: "RecipeoAI is intended for general cooking and recipe information, not as a substitute for professional medical or dietary advice. If you have food allergies, medical conditions, or special dietary needs, consult a qualified professional.",
      },
      {
        q: "How can I check whether a recipe is safe?",
        a: "Check ingredient freshness, food-allergy risks, cooking temperatures, and safe storage guidance. Follow reliable food-safety recommendations rather than relying only on generated instructions.",
      },
      {
        q: "Where can I read more about recipe limitations?",
        a: (
          <>
            Please read our{" "}
            <Link
              href="/disclaimer"
              className="font-semibold text-orange-600 underline underline-offset-4"
            >
              Disclaimer
            </Link>{" "}
            for more information about recipe suggestions and their limitations.
          </>
        ),
      },
    ],
  },
  {
    id: "billing",
    name: "Accounts & Features",
    icon: Utensils,
    items: [
      {
        q: "Do I need an account to use RecipeoAI?",
        a: "Account requirements may vary by feature. Check the specific feature you want to use for its current access requirements.",
      },
      {
        q: "Does RecipeoAI offer a Pro subscription?",
        a: "Available plans and features may change. Please check the website for current plan information. Do not assume that a paid subscription or a particular Pro feature is available unless it is listed on the site.",
      },
      {
        q: "Can I cancel a subscription?",
        a: "If a subscription is available and you have purchased one, follow the cancellation instructions provided with that plan or payment service. If you need help, contact us using the details on our Contact page.",
      },
    ],
  },
  {
    id: "website",
    name: "Website & Support",
    icon: BookOpen,
    items: [
      {
        q: "Why might a recipe result be incorrect?",
        a: "AI systems can misunderstand ingredient details or produce incomplete instructions. Try entering clearer information, review the output, and make sensible adjustments before cooking.",
      },
      {
        q: "How can I contact RecipeoAI?",
        a: (
          <>
            Visit our{" "}
            <Link
              href="/contact"
              className="font-semibold text-orange-600 underline underline-offset-4"
            >
              Contact page
            </Link>{" "}
            for available contact options. You can also email{" "}
            <a
              href="mailto:support@recipeoai.com"
              className="font-semibold text-orange-600 underline underline-offset-4"
            >
              support@recipeoai.com
            </a>{" "}
            if this address is active and monitored.
          </>
        ),
      },
      {
        q: "Where can I find information about cookies?",
        a: (
          <>
            Read our{" "}
            <Link
              href="/cookie-policy"
              className="font-semibold text-orange-600 underline underline-offset-4"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-semibold text-orange-600 underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            to learn about cookies, advertising, and related privacy practices.
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900 selection:bg-orange-100">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white px-4 pb-16 pt-32 md:pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <Badge
            variant="outline"
            className="mb-6 border-orange-600 px-4 py-1 font-bold uppercase tracking-[0.2em] text-orange-600"
          >
            RecipeoAI Help Center
          </Badge>

          <h1 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl">
            How can we <span className="text-orange-600">help</span> you today?
          </h1>

          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-stone-500 md:text-xl">
            Find answers about recipes, AI-powered features, privacy, and using
            RecipeoAI.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">
          {/* Category navigation */}
          <aside className="h-fit space-y-4 lg:sticky lg:top-28">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-widest text-stone-400">
              FAQ Categories
            </h2>

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  <span className="rounded-lg bg-white p-2 shadow-sm transition-shadow group-hover:shadow-orange-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold">{category.name}</span>
                </a>
              );
            })}
          </aside>

          {/* Questions */}
          <div className="min-w-0 space-y-12 lg:col-span-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28 space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
                    <Icon
                      className="h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                    <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                      {category.name}
                    </h2>
                  </div>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                  >
                    {category.items.map((item, index) => (
                      <AccordionItem
                        key={`${category.id}-${index}`}
                        value={`${category.id}-${index}`}
                        className="rounded-2xl border border-stone-200 bg-white px-5 transition-all data-[state=open]:border-orange-200 data-[state=open]:shadow-lg md:px-6"
                      >
                        <AccordionTrigger className="py-5 text-left text-base font-bold hover:text-orange-600 hover:no-underline md:text-lg">
                          {item.q}
                        </AccordionTrigger>

                        <AccordionContent className="pb-6 text-base leading-relaxed text-stone-600">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-stone-200 bg-white px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-stone-900 p-8 text-center text-stone-50 md:rounded-[3rem] md:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-600/20 blur-[100px]"
          />

          <div className="relative">
            <HelpCircle className="mx-auto mb-6 h-12 w-12 text-orange-500" />

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Still have questions?
            </h2>

            <p className="mx-auto mb-8 max-w-xl font-light leading-relaxed text-stone-400 md:text-lg">
              Visit our Contact page or email us if you need help using
              RecipeoAI.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:support@recipeoai.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-bold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Email Support
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-700 px-7 py-4 font-bold text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful links */}
      <section className="px-4 pb-10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-stone-500">
          <Link href="/privacy" className="hover:text-orange-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-orange-600">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="hover:text-orange-600">
            Cookie Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-orange-600">
            Disclaimer
          </Link>
        </div>
      </section>
    </main>
  );
}
