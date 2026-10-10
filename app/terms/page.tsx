import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  BookOpen,
  AlertCircle,
  ShieldCheck,
  Mail,
  Gavel,
  ChevronRight,
  Globe,
  CreditCard,
  Eye,
  UserCheck,
  Ban,
  Copyright,
  RefreshCcw,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service | RecipeoAI",
  description:
    "Read the RecipeoAI Terms of Service covering website use, AI-generated recipes, food safety, advertising, intellectual property, and liability.",
};

const lastUpdated = "October 10, 2026";
const CONTACT_EMAIL = "privacy@recipeoai.com";
const SITE_URL = "https://www.recipeoai.com";

// Set to true only if paid subscriptions and Stripe payments
// are actually available on RecipeoAI.
const HAS_PAYMENTS = false;

type TermsSection = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: ReactNode;
  highlight?: boolean;
};

export default function TermsPage() {
  const sections: TermsSection[] = [
    {
      id: "acceptance",
      icon: Globe,
      title: "Acceptance of Terms",
      body: (
        <p>
          By accessing or using RecipeoAI ({SITE_URL}), operated by{" "}
          <strong className="text-stone-900">Manish Singh</strong> ("we", "us",
          or "our"), you agree to these Terms of Service and our{" "}
          <Link
            href="/privacy"
            className="font-semibold text-orange-600 underline"
          >
            Privacy Policy
          </Link>
          . If you do not agree to these terms, please do not use the Service.
        </p>
      ),
    },
    {
      id: "eligibility",
      icon: UserCheck,
      title: "Eligibility and Accounts",
      body: (
        <>
          <p>
            You must be at least 13 years old to use RecipeoAI. If you are
            under the age of majority where you live, you should use the
            Service with permission and guidance from a parent or legal
            guardian.
          </p>
          <p>
            If an account is required for a feature, you are responsible for
            providing accurate information, keeping your sign-in details
            secure, and activity carried out through your account. Please
            contact us if you suspect unauthorised access.
          </p>
        </>
      ),
    },
    {
      id: "ai-output",
      icon: BookOpen,
      title: "AI-Generated Content and Food Safety",
      body: (
        <>
          <p>
            RecipeoAI may use artificial intelligence to generate recipes,
            ingredient-based suggestions, and other cooking-related results.
            AI-generated content can contain errors, omissions, or unsuitable
            suggestions. We do not guarantee that every result is accurate,
            complete, or appropriate for your needs.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-red-900">
                <AlertCircle className="h-4 w-4" />
                Food safety
              </h3>
              <p className="text-sm text-red-800">
                Check ingredient freshness, cooking temperatures, preparation
                methods, and storage guidance. Do not rely solely on an
                AI-generated recipe to determine whether food is safe to eat.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-blue-900">
                <BookOpen className="h-4 w-4" />
                Health and nutrition
              </h3>
              <p className="text-sm text-blue-800">
                RecipeoAI does not replace professional medical, dietary, or
                nutritional advice. If you have allergies, a medical condition,
                or special dietary requirements, consult a qualified
                professional and verify ingredients before eating.
              </p>
            </div>
          </div>

          <p>
            For more information, please read our{" "}
            <Link
              href="/disclaimer"
              className="font-semibold text-orange-600 underline"
            >
              Disclaimer
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      id: "acceptable-use",
      icon: Ban,
      title: "Acceptable Use",
      body: (
        <>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Use the Service for unlawful, fraudulent, abusive, or harmful
              activities.
            </li>
            <li>
              Scrape, copy, or collect website content or data through
              automated tools in a way that violates applicable law or our
              rights.
            </li>
            <li>
              Interfere with the website, overload its systems, attack its
              security, or attempt to bypass security measures.
            </li>
            <li>
              Submit content or images that you do not have the legal right to
              use, or that violate another person's rights.
            </li>
            <li>
              Republish our original articles or other protected content as
              your own, without permission where permission is required.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "advertising",
      icon: Eye,
      title: "Advertising and Third-Party Services",
      highlight: true,
      body: (
        <>
          <p>
            RecipeoAI may display advertisements, including ads provided by
            Google AdSense or other advertising partners, where enabled.
            Third-party advertising providers may use cookies or similar
            technologies as described in our Privacy Policy and subject to
            applicable consent requirements.
          </p>
          <p>
            Advertisements and links to third-party services are provided by
            those third parties. Their appearance on RecipeoAI does not
            necessarily mean that we endorse their products or services.
            Transactions with third parties are your responsibility.
          </p>
          <p>
            Learn more about cookies and advertising choices in our{" "}
            <Link
              href="/privacy#cookies-advertising"
              className="font-semibold underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </>
      ),
    },
    ...(HAS_PAYMENTS
      ? [
          {
            id: "payments",
            icon: CreditCard,
            title: "Paid Plans and Payments",
            body: (
              <>
                <p>
                  If a paid plan is offered, the applicable price, billing
                  period, and included features will be displayed before
                  purchase. Payments are processed by Stripe or the payment
                  provider identified at checkout. We do not intentionally
                  store your full payment card details on our own systems.
                </p>
                <p>
                  Subscription renewal, cancellation, and refund terms will be
                  presented with the applicable plan or at checkout. Please
                  review those terms before purchasing. Nothing in these Terms
                  removes any rights you have under applicable law.
                </p>
                <p>
                  If you have a payment question, contact us using the details
                  at the bottom of this page.
                </p>
              </>
            ),
          } satisfies TermsSection,
        ]
      : []),
    {
      id: "ip",
      icon: Copyright,
      title: "Intellectual Property and Submitted Content",
      body: (
        <>
          <p>
            Unless otherwise stated, the RecipeoAI name, logo, website design,
            code, and original articles are owned by or licensed to us and may
            be protected by copyright and other applicable laws. You may access
            the website and use its content for personal purposes, subject to
            these Terms and applicable law.
          </p>
          <p>
            You retain the rights you have in content you submit, such as
            ingredient lists or pantry photos. You give us permission to
            process that content as reasonably necessary to provide the
            feature you request, including sending it to a relevant service
            provider when needed to generate a result.
          </p>
          <p>
            Please do not submit content that you are not authorised to share.
            The handling of submitted content is also explained in our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-orange-600 underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            If you believe material on RecipeoAI infringes your copyright,
            email{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-orange-600 underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with the relevant page URL and details of the copyrighted work so
            that we can review your report.
          </p>
        </>
      ),
    },
    {
      id: "termination",
      icon: ShieldCheck,
      title: "Suspension and Termination",
      body: (
        <p>
          We may restrict or suspend access to the Service when reasonably
          necessary to address misuse, security risks, legal obligations, or
          violations of these Terms. You may stop using RecipeoAI at any time.
          If you have an account and want to request its deletion, contact us.
          Any applicable data-retention requirements are described in our
          Privacy Policy.
        </p>
      ),
    },
    {
      id: "liability",
      icon: Scale,
      title: "Disclaimer and Limitation of Liability",
      body: (
        <>
          <p>
            The Service and its content are provided on an "as is" and "as
            available" basis, to the extent permitted by applicable law. We do
            not guarantee uninterrupted availability or that all content,
            including AI-generated recipes, will be error-free or suitable for
            every user.
          </p>
          <p>
            To the extent permitted by applicable law, RecipeoAI and its
            operator are not responsible for indirect or consequential losses
            arising from use of the Service. You are responsible for checking
            ingredients, allergens, cooking instructions, and food-safety
            requirements before preparing or consuming a recipe.
          </p>
          <p>
            Nothing in these Terms excludes or limits any right, remedy, or
            liability that cannot lawfully be excluded or limited.
          </p>
        </>
      ),
    },
    {
      id: "law",
      icon: Landmark,
      title: "Governing Law",
      body: (
        <p>
          These Terms are intended to be interpreted in accordance with the
          laws of India, subject to any mandatory consumer-protection laws and
          other legal rights that apply to you. Any dispute will be handled by
          a court with appropriate jurisdiction under applicable law.
        </p>
      ),
    },
    {
      id: "changes",
      icon: RefreshCcw,
      title: "Changes to These Terms",
      body: (
        <p>
          We may update these Terms when our Service, practices, or legal
          requirements change. We will post the revised version on this page
          and update the "Last Updated" date. Please review this page from time
          to time to stay informed about the applicable terms.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 pb-20 text-stone-900 selection:bg-orange-100">
      <div className="absolute left-0 top-0 -z-10 h-[450px] w-full bg-gradient-to-b from-stone-200/40 to-transparent" />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto flex max-w-5xl items-center gap-2 px-4 pt-28 text-xs font-bold uppercase tracking-widest text-stone-400"
      >
        <Link href="/" className="transition-colors hover:text-orange-600">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" aria-hidden="true" />
        <span className="text-stone-900">Terms of Service</span>
      </nav>

      <header className="px-4 pb-14 pt-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-stone-50">
            <Gavel
              className="h-3.5 w-3.5 text-orange-500"
              aria-hidden="true"
            />
            User Agreement
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[0.95] tracking-tighter md:text-7xl">
            Terms of <span className="text-orange-600">Service</span>
          </h1>

          <div className="flex flex-col justify-between gap-6 border-t border-stone-200 pt-6 md:flex-row md:items-end">
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-stone-500">
              These terms explain the rules for using RecipeoAI. Please read
              them carefully.
            </p>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
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
        <div className="mx-auto max-w-4xl space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-24 rounded-3xl border p-6 shadow-sm md:p-10 ${
                  section.highlight
                    ? "border-orange-200 bg-orange-50"
                    : "border-stone-200 bg-white"
                }`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-stone-100 bg-white text-orange-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h2 className="text-xl font-black tracking-tight md:text-2xl">
                    {index + 1}. {section.title}
                  </h2>
                </div>

                <div className="space-y-4 text-base leading-relaxed text-stone-600">
                  {section.body}
                </div>
              </section>
            );
          })}

          <section className="pt-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm">
              <Mail
                className="h-6 w-6 text-orange-600"
                aria-hidden="true"
              />
            </div>

            <h2 className="mb-3 text-2xl font-black tracking-tight md:text-3xl">
              Questions about these Terms?
            </h2>

            <p className="mx-auto mb-6 max-w-md text-stone-600">
              Contact us if you have any questions about these Terms of
              Service.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-xl bg-stone-900 px-6 py-3 text-white transition-colors hover:bg-orange-600"
              >
                {CONTACT_EMAIL}
              </a>

              <Link
                href="/contact"
                className="rounded-xl border border-stone-300 bg-white px-6 py-3 transition-colors hover:border-orange-600 hover:text-orange-600"
              >
                Contact page
              </Link>

              <Link
                href="/privacy"
                className="rounded-xl border border-stone-300 bg-white px-6 py-3 transition-colors hover:border-orange-600 hover:text-orange-600"
              >
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 px-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} RecipeoAI. All rights reserved.
      </footer>
    </div>
  );
}
