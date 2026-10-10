
import React from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ShieldAlert,
  HeartPulse,
  Scale,
  ExternalLink,
  ChevronRight,
  Mail,
  Cookie,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Disclaimer | RecipeoAI",
  description:
    "Read the RecipeoAI disclaimer covering recipe suggestions, food safety, allergies, nutrition information, cooking articles, advertising, external links, and limitations of liability.",
};

const lastUpdated = "October 10, 2026";
const CONTACT_EMAIL = "privacy@recipeoai.com";

type CardProps = {
  icon: LucideIcon;
  title: string;
  tone?: "orange" | "red" | "blue" | "stone";
  children: ReactNode;
};

function Card({
  icon: Icon,
  title,
  tone = "orange",
  children,
}: CardProps) {
  const tones = {
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-500",
    blue: "bg-blue-50 text-blue-600",
    stone: "bg-stone-100 text-stone-700",
  };

  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${tones[tone]}`}
        >
          <Icon className="w-6 h-6" />
        </div>

        <h2 className="text-xl md:text-2xl font-black tracking-tight">
          {title}
        </h2>
      </div>

      <div className="space-y-4 text-base text-stone-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-50/60 to-transparent -z-10" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 px-4 max-w-5xl mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400"
      >
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>

        <ChevronRight className="w-3 h-3" />

        <span className="text-stone-900">Disclaimer</span>
      </nav>

      {/* Hero */}
      <header className="pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-6 uppercase tracking-widest text-orange-600">
            <ShieldAlert className="w-3.5 h-3.5" />
            Important notice
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.95]">
            Disclaimer
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between border-t border-stone-200 pt-6">
            <p className="text-lg text-stone-500 font-medium max-w-2xl leading-relaxed">
              Please read this disclaimer before using RecipeoAI. It
              explains the intended use and limitations of our recipe
              suggestions, cooking articles, and other website features.
            </p>

            <div className="flex flex-col shrink-0">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Last Updated
              </span>
              <span className="text-lg font-black text-stone-900">
                {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Recipe suggestions */}
          <Card icon={AlertTriangle} title="1. Recipe Suggestions and AI">
            <p>
              RecipeoAI provides a recipe generator that uses artificial
              intelligence to suggest recipes based on ingredients and
              other information supplied by users. These suggestions are
              intended to provide cooking inspiration and general
              information.
            </p>

            <p>
              AI-generated suggestions can contain mistakes, including
              inaccurate ingredient quantities, preparation steps,
              cooking times, temperatures, or food-safety information.
              A suggested recipe may also need adjustments to suit your
              ingredients, equipment, or preferences.
            </p>

            <div className="p-5 bg-orange-50 border border-orange-200 rounded-2xl text-stone-800">
              <p className="font-black text-xs uppercase tracking-widest text-orange-600 mb-2">
                Before you cook
              </p>

              <p>
                Check the ingredients, preparation instructions, cooking
                temperatures, and food-safety guidance before following
                a recipe. Use reliable food-safety information whenever
                you are unsure.
              </p>
            </div>
          </Card>

          {/* 2. Health, allergies and nutrition */}
          <Card
            icon={HeartPulse}
            title="2. Health, Allergies and Nutrition"
            tone="red"
          >
            <p>
              RecipeoAI is not a medical provider, dietitian, or
              nutritionist. The information on this website is provided
              for general informational purposes and is not a substitute
              for personalised medical, dietary, or nutritional advice.
            </p>

            <p>
              Any nutrition information, including calories, protein,
              carbohydrates, fat, or other nutrient estimates, may be
              approximate or incomplete. Actual nutritional values can
              vary according to ingredients, brands, portion sizes, and
              preparation methods.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-2 text-sm">
                  Food allergies
                </h3>

                <p className="text-sm">
                  Always check ingredient lists and food labels for
                  allergens and possible cross-contact. Do not rely
                  solely on an AI-generated recipe to determine whether
                  a dish is safe for you.
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <h3 className="font-bold text-stone-900 mb-2 text-sm">
                  Dietary labels
                </h3>

                <p className="text-sm">
                  Labels such as vegan, vegetarian, keto, or gluten-free
                  may be inaccurate if ingredients or substitutions are
                  misunderstood. Verify the ingredients and relevant
                  product labels yourself.
                </p>
              </div>
            </div>

            <p>
              If you have a medical condition, food allergy, special
              dietary requirement, or other health concern, consult an
              appropriately qualified healthcare professional when
              necessary.
            </p>
          </Card>

          {/* 3. Pantry Scan and articles */}
          <Card
            icon={BookOpen}
            title="3. Pantry Scan and Cooking Articles"
            tone="blue"
          >
            <p>
              Pantry Scan uses image-recognition technology to suggest
              which food items may be visible in a submitted photo.
              It may misidentify items, overlook ingredients, or
              produce incomplete results. Always check the actual
              items in your kitchen.
            </p>

            <p>
              Food and cooking articles on RecipeoAI are written by
              Manish Singh. They are intended to share cooking
              information, practical guidance, and ideas that readers
              can use in their everyday kitchens.
            </p>

            <p>
              Cooking methods, ingredient availability, equipment,
              and individual circumstances can differ. Readers should
              use their judgement and verify important food-safety
              information where appropriate. If you notice an error
              in an article, please contact us so it can be reviewed.
            </p>
          </Card>

          {/* 4. Advertising and cookies */}
          <Card
            icon={Cookie}
            title="4. Advertising and Cookies"
            tone="stone"
          >
            <p>
              RecipeoAI may display advertisements, including
              advertisements served by Google AdSense when enabled.
              Third-party advertising providers may use cookies or
              similar technologies in accordance with their policies
              and applicable settings.
            </p>

            <p>
              The presence of an advertisement does not mean that
              RecipeoAI endorses or independently verifies the
              advertised product, service, or claim. Visitors should
              review relevant information before making purchasing
              decisions.
            </p>

            <p>
              For details about cookies, advertising, and available
              privacy choices, please read our{" "}
              <Link
                href="/privacy"
                className="text-orange-600 underline font-semibold hover:text-orange-700"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/cookie-policy"
                className="text-orange-600 underline font-semibold hover:text-orange-700"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Card>

          {/* 5. External links */}
          <Card
            icon={ExternalLink}
            title="5. External Links and Third-Party Services"
            tone="blue"
          >
            <p>
              Our website may link to external websites, services,
              or resources. We may also use third-party services
              for website functionality, image resources, account
              management, or other features.
            </p>

            <p>
              External websites and services operate independently
              and may have their own terms, privacy practices, and
              content. We do not control every aspect of those
              services. Check their relevant policies before using
              them or sharing information with them.
            </p>
          </Card>

          {/* 6. Website availability and liability */}
          <Card
            icon={Scale}
            title="6. Website Use and Limitation of Liability"
            tone="stone"
          >
            <p>
              RecipeoAI is provided for general informational and
              cooking-related purposes. Although we aim to keep the
              website useful and reliable, we do not guarantee that
              all content will always be complete, accurate,
              uninterrupted, or suitable for every individual
              purpose.
            </p>

            <p>
              To the extent permitted by applicable law, RecipeoAI
              and its owner, Manish Singh, disclaim liability for
              losses or damages arising from reliance on website
              content or the use of its features. This includes
              reliance on recipe suggestions, nutrition estimates,
              and general cooking information.
            </p>

            <p>
              Nothing in this disclaimer excludes or limits any
              rights, warranties, or liabilities that cannot legally
              be excluded or limited under applicable law.
            </p>
          </Card>

          {/* 7. Changes */}
          <Card
            icon={AlertTriangle}
            title="7. Changes to This Disclaimer"
            tone="orange"
          >
            <p>
              We may update this disclaimer to reflect changes to
              RecipeoAI, its features, or applicable requirements.
              When changes are made, the revised version will be
              published on this page with an updated date.
            </p>
            <p>
              We encourage visitors to review this page periodically.
            </p>
          </Card>

          {/* Contact */}
          <section className="text-center pt-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-stone-200">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">
              Questions or corrections?
            </h2>

            <p className="text-stone-600 mb-6 max-w-md mx-auto">
              Have feedback about a recipe, cooking article, or
              website feature? Contact us and explain the issue.
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
                href="/terms"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                href="/privacy"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 text-center text-xs text-stone-400 px-4">
        © {new Date().getFullYear()} RecipeoAI. All rights reserved.
      </footer>
    </div>
  );
}
