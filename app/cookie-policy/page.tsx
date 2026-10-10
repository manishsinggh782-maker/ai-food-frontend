import React from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Cookie,
  ShieldCheck,
  Settings,
  BarChart,
  Target,
  Info,
  ChevronRight,
  Mail,
  SlidersHorizontal,
} from "lucide-react";

export const metadata = {
  title: "Cookie Policy | RecipeoAI",
  description:
    "Read the RecipeoAI Cookie Policy to understand cookies, Google AdSense advertising, similar technologies, and the ways you can manage your cookie preferences.",
};

const lastUpdated = "October 09, 2026";
const CONTACT_EMAIL = "privacy@recipeoai.com";

type CookieCategory = {
  category: string;
  purpose: string;
  provider: string;
  duration: string;
};

const cookieTable: CookieCategory[] = [
  {
    category: "Essential",
    purpose:
      "Support functions such as sign-in, session management, security, and website operation where required.",
    provider: "RecipeoAI and relevant service providers",
    duration: "Varies by cookie or technology",
  },
  {
    category: "Preferences",
    purpose:
      "Remember settings or choices where these features are implemented.",
    provider: "RecipeoAI or relevant service providers",
    duration: "Varies by technology",
  },
  {
    category: "Analytics",
    purpose:
      "If analytics tools are enabled, help us understand website usage and performance so we can improve the experience.",
    provider: "RecipeoAI and any analytics providers in use",
    duration: "Depends on the tool and its settings",
  },
  {
    category: "Advertising",
    purpose:
      "Support ad delivery, frequency controls, measurement, and personalised advertising where permitted and applicable.",
    provider: "Google AdSense and relevant advertising partners",
    duration: "Depends on the cookie and provider",
  },
];

const browserLinks = [
  {
    name: "Chrome",
    href: "https://support.google.com/chrome/answer/95647",
  },
  {
    name: "Safari",
    href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
  },
  {
    name: "Firefox",
    href: "https://support.mozilla.org/kb/enable-and-disable-cookies-website-preferences",
  },
  {
    name: "Edge",
    href: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
];

function ExtLink({
  href,
  children,
  className = "text-orange-600 underline font-semibold hover:text-orange-700",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Card({
  icon: Icon,
  title,
  children,
  tone = "bg-orange-50 text-orange-600",
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  tone?: string;
}) {
  return (
    <section className="bg-white p-6 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${tone}`}
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

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[450px] bg-gradient-to-b from-orange-50/60 to-transparent -z-10" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 px-4 max-w-5xl mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400"
      >
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>

        <ChevronRight className="w-3 h-3" />

        <span className="text-stone-900">Cookie Policy</span>
      </nav>

      {/* Hero */}
      <header className="pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-6 uppercase tracking-widest text-orange-600">
            <Cookie className="w-3.5 h-3.5" />
            Cookies
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.95]">
            Cookie <span className="text-orange-600">Policy</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between border-t border-stone-200 pt-6">
            <p className="text-lg text-stone-500 font-medium max-w-2xl leading-relaxed">
              This policy explains how RecipeoAI may use cookies and similar
              technologies, why they may be used, and how you can manage
              available cookie settings.
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
          {/* 1. What are cookies? */}
          <Card icon={Info} title="1. What are cookies?">
            <p>
              Cookies are small text files that websites may store on your
              device. They can help a website remember information, maintain
              sessions, improve security, understand website usage, and
              support advertising.
            </p>

            <p>
              Similar technologies, such as local storage, pixels, and
              software development tools, may also be used for certain
              purposes. The technologies used depend on the features and
              third-party services enabled on the website.
            </p>
          </Card>

          {/* 2. Cookie categories */}
          <Card
            icon={SlidersHorizontal}
            title="2. Types of cookies and similar technologies"
            tone="bg-blue-50 text-blue-600"
          >
            <p>
              The following table describes the main categories of cookies
              that may be relevant to RecipeoAI. The actual cookies and
              technologies present can depend on the services enabled,
              your settings, and your location.
            </p>

            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-900">
                    <th scope="col" className="py-3 pr-4 font-black">
                      Category
                    </th>
                    <th scope="col" className="py-3 pr-4 font-black">
                      Purpose
                    </th>
                    <th scope="col" className="py-3 pr-4 font-black">
                      Provider
                    </th>
                    <th scope="col" className="py-3 font-black">
                      Duration
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cookieTable.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-stone-100 align-top"
                    >
                      <td className="py-3 pr-4 font-bold text-stone-900">
                        {row.category}
                      </td>
                      <td className="py-3 pr-4">{row.purpose}</td>
                      <td className="py-3 pr-4">{row.provider}</td>
                      <td className="py-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 font-black text-stone-900 mb-2">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  Essential technologies
                </div>

                <p className="text-sm">
                  Some technologies may be necessary for core website
                  functions, account access, or security. Blocking them may
                  prevent certain features from working correctly.
                </p>
              </div>

              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <div className="flex items-center gap-2 font-black text-stone-900 mb-2">
                  <BarChart className="w-4 h-4 text-blue-600" />
                  Analytics technologies
                </div>

                <p className="text-sm">
                  If analytics tools are enabled, they may help us understand
                  how visitors use the website, identify technical problems,
                  and improve website performance.
                </p>
              </div>
            </div>
          </Card>

          {/* 3. Advertising */}
          <section className="bg-orange-50 p-6 md:p-10 rounded-3xl border border-orange-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center text-orange-600 border border-orange-100">
                <Target className="w-6 h-6" />
              </div>

              <h2 className="text-xl md:text-2xl font-black tracking-tight">
                3. Advertising and Google AdSense
              </h2>
            </div>

            <div className="space-y-4 text-base text-stone-700 leading-relaxed">
              <p>
                RecipeoAI may display advertisements to help support the
                website. Where Google AdSense is enabled, Google and its
                advertising partners may use cookies or similar technologies
                to deliver and measure advertisements, control ad frequency,
                and provide personalised or non-personalised ads as
                applicable.
              </p>

              <p>
                Personalised advertising may use information about a
                visitor&apos;s activity on this website or other websites,
                subject to applicable settings, consent requirements, and
                advertising policies. Non-personalised ads may still use
                certain information for purposes such as ad delivery,
                frequency control, or measurement.
              </p>

              <p>
                Depending on your location and the applicable requirements,
                consent may be required before certain advertising cookies
                or other technologies are used. Where Google requires a
                certified consent management platform, the appropriate
                platform and configuration must be implemented on the
                website.
              </p>

              <p>
                You can learn more about how Google uses information from
                websites and apps that use its services at{" "}
                <ExtLink href="https://policies.google.com/technologies/partner-sites">
                  Google&apos;s partner-site information
                </ExtLink>
                .
              </p>

              <p>
                You can also review Google&apos;s{" "}
                <ExtLink href="https://policies.google.com/privacy">
                  Privacy Policy
                </ExtLink>{" "}
                and visit our{" "}
                <Link
                  href="/privacy"
                  className="text-orange-600 underline font-semibold hover:text-orange-700"
                >
                  Privacy Policy
                </Link>{" "}
                for additional information about privacy on RecipeoAI.
              </p>
            </div>
          </section>

          {/* 4. Manage cookies */}
          <Card
            icon={Settings}
            title="4. How to manage cookies"
            tone="bg-stone-100 text-stone-700"
          >
            <p>
              You may have several options for managing cookies and
              advertising preferences:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-stone-900">
                  Website consent settings:
                </strong>{" "}
                If a cookie consent interface is available, use it to manage
                the choices it offers. Available options depend on the
                website&apos;s configuration and your location.
              </li>

              <li>
                <strong className="text-stone-900">
                  Google Ads Settings:
                </strong>{" "}
                You can manage certain Google advertising preferences at{" "}
                <ExtLink href="https://adssettings.google.com">
                  adssettings.google.com
                </ExtLink>
                .
              </li>

              <li>
                <strong className="text-stone-900">
                  Industry opt-out tools:
                </strong>{" "}
                Depending on your location, you can explore{" "}
                <ExtLink href="https://www.aboutads.info">
                  AboutAds.info
                </ExtLink>
                ,{" "}
                <ExtLink href="https://www.youronlinechoices.com">
                  Your Online Choices
                </ExtLink>
                , and{" "}
                <ExtLink href="https://optout.networkadvertising.org">
                  the Network Advertising Initiative
                </ExtLink>
                .
              </li>

              <li>
                <strong className="text-stone-900">
                  Browser settings:
                </strong>{" "}
                Most browsers let you block, restrict, or delete cookies.
                Some website features, including sign-in, may not work
                correctly if certain cookies are blocked.
              </li>
            </ul>

            <p>
              Browser settings do not necessarily control every technology,
              and deleting cookies may not remove information already held
              by a service provider.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {browserLinks.map((browser) => (
                <ExtLink
                  key={browser.name}
                  href={browser.href}
                  className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-colors"
                >
                  {browser.name}
                </ExtLink>
              ))}
            </div>
          </Card>

          {/* 5. Third-party services */}
          <Card
            icon={ShieldCheck}
            title="5. Third-party services"
            tone="bg-blue-50 text-blue-600"
          >
            <p>
              RecipeoAI uses third-party services for certain website
              functions. Depending on the features you use, these providers
              may process information or use technologies subject to their
              own policies.
            </p>

            <p>
              For example, account authentication and security services may
              support sign-in and website protection, while advertising
              providers may support the display and measurement of ads.
              The specific technologies used depend on the services
              configured on the website.
            </p>

            <p>
              Third-party services operate under their own applicable
              privacy policies and terms. We encourage you to review those
              policies when you want to understand how a particular
              provider handles information.
            </p>
          </Card>

          {/* 6. Children's privacy */}
          <Card
            icon={Info}
            title="6. Children's privacy"
            tone="bg-stone-100 text-stone-700"
          >
            <p>
              RecipeoAI is a general cooking and food-information website.
              Our website and advertising practices must comply with
              applicable laws and platform policies relating to children.
              If you have a question about privacy or cookies, please
              contact us using the details below.
            </p>
          </Card>

          {/* 7. Policy changes */}
          <Card
            icon={Info}
            title="7. Changes to this policy"
            tone="bg-stone-100 text-stone-700"
          >
            <p>
              We may update this Cookie Policy when our website features,
              third-party services, or applicable requirements change.
              Updates will be published on this page with a revised
              &quot;Last Updated&quot; date.
            </p>
          </Card>

          {/* Contact */}
          <section className="text-center pt-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-stone-200">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>

            <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tight">
              Questions about cookies?
            </h2>

            <p className="text-stone-600 mb-6">
              If you have questions or concerns about this Cookie Policy,
              please contact us.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="px-6 py-3 bg-stone-900 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>

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

              <Link
                href="/contact"
                className="px-6 py-3 bg-white border border-stone-300 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Contact page
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
