import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Eye,
  Cookie,
  Globe,
  UserCheck,
  Server,
  FileText,
  ChevronRight,
  Mail,
  Lock,
  ShieldAlert,
  RefreshCcw,
  Zap,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RecipeoAI",
  description:
    "Read how RecipeoAI collects, uses and protects your data, including cookies, Google AdSense advertising, AI processing, and your privacy rights under GDPR, CCPA and India's DPDP Act.",
};

const lastUpdated = "October 08, 2026";
const SITE_URL = "https://www.recipeoai.com";
const CONTACT_EMAIL = "privacy@recipeoai.com";

function Section({ id, icon: Icon, title, children }) {
  return (
    <section
      id={id}
      className="bg-white p-6 md:p-10 rounded-3xl border border-stone-200 shadow-sm scroll-mt-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-11 h-11 shrink-0 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-base text-stone-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-600 underline font-semibold hover:text-orange-700"
    >
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 pb-20 overflow-x-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-orange-50/60 to-transparent -z-10" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 px-4 max-w-5xl mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400"
      >
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-900">Privacy Policy</span>
      </nav>

      {/* Hero */}
      <header className="pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-stone-200 rounded-full text-[11px] font-black mb-6 uppercase tracking-widest text-orange-600">
            <ShieldCheck className="w-3.5 h-3.5" /> Your privacy matters
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.95]">
            Privacy <span className="text-orange-600">Policy</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between border-t border-stone-200 pt-6">
            <p className="text-lg text-stone-500 font-medium max-w-2xl leading-relaxed">
              This policy explains what information RecipeoAI collects, how we use it,
              who we share it with, and the choices you have. RecipeoAI is operated by{" "}
              <strong className="text-stone-800">Manish Singh</strong>.
            </p>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Last Updated
              </span>
              <span className="text-lg font-black text-stone-900">{lastUpdated}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1 */}
          <Section id="introduction" icon={FileText} title="1. Introduction">
            <p>
              Welcome to RecipeoAI ({SITE_URL}). RecipeoAI is an AI-powered recipe
              platform that helps you generate recipes from ingredients, scan your
              pantry, save recipes and read food and cooking articles. By using our
              website you agree to the practices described in this Privacy Policy. If
              you do not agree, please do not use the website.
            </p>
            <p>
              We do not sell your personal information. We collect only what we need to
              run the service, keep it secure, and show advertising that helps keep the
              site free.
            </p>
          </Section>

          {/* 2 */}
          <Section id="information-we-collect" icon={Eye} title="2. Information We Collect">
            <h3 className="font-black text-stone-900">a) Information you provide</h3>
            <List
              items={[
                "Account details such as your name, email address and profile picture when you sign up or sign in (handled by our authentication provider, Clerk).",
                "Ingredients, dietary preferences and prompts you type to generate recipes.",
                "Photos you choose to upload to the Pantry Scan feature.",
                "Recipes you save, and messages you send us by email.",
              ]}
            />
            <h3 className="font-black text-stone-900">b) Information collected automatically</h3>
            <List
              items={[
                "IP address, browser type, device type, operating system, language and referring page.",
                "Pages viewed, time spent, clicks and approximate location derived from IP address.",
                "Cookie and similar-technology identifiers (see Section 5).",
                "Security signals used to detect bots, abuse and automated attacks (provided by Arcjet).",
              ]}
            />
            <h3 className="font-black text-stone-900">c) Pantry Scan photos</h3>
            <p>
              Pantry Scan is designed only to identify food items. Please do not upload
              photos of people, children, documents or anything personal. We do not use
              Pantry Scan for face recognition and we do not intentionally collect
              biometric data.
            </p>
            <h3 className="font-black text-stone-900">d) Passwords</h3>
            <p>
              Sign-in is handled by Clerk. We do not store your password on our own
              servers.
            </p>
          </Section>

          {/* 3 */}
          <Section id="how-we-use" icon={Info} title="3. How We Use Your Information">
            <List
              items={[
                "To provide and improve recipe generation, pantry scanning, saved recipes and blog content.",
                "To create and manage your account and keep it secure.",
                "To understand how the site is used and fix errors or slow pages.",
                "To prevent fraud, spam, scraping and other abuse.",
                "To show advertising and measure its performance.",
                "To respond to your emails and comply with legal obligations.",
              ]}
            />
            <p>
              Where the GDPR applies, our legal bases are: performance of a contract
              (running your account and the service), legitimate interests (security,
              analytics and improving the site), consent (advertising and non-essential
              cookies) and legal obligation.
            </p>
          </Section>

          {/* 4 */}
          <Section id="third-parties" icon={Server} title="4. AI Processing and Third-Party Services">
            <p>
              We use trusted service providers to operate RecipeoAI. They process data
              only as needed to provide their service:
            </p>
            <List
              items={[
                "Google (Gemini API): your ingredient text, prompts and Pantry Scan images are sent to Google's AI service to generate recipes and identify food items.",
                "Unsplash: used to fetch food images for recipes and articles.",
                "Clerk: authentication and account management.",
                "Arcjet: bot detection and security protection.",
                "Vercel: website hosting and delivery.",
                "Google AdSense: advertising (see Section 5).",
              ]}
            />
            <p>
              AI-generated recipes are suggestions only. Please check ingredients for
              allergies and follow safe food-handling practices.
            </p>
            <p>
              We may also disclose information if required by law, to protect our rights
              and users, or in connection with a business transfer. We do not sell
              personal information.
            </p>
          </Section>

          {/* 5 */}
          <Section id="cookies-advertising" icon={Cookie} title="5. Cookies and Google AdSense Advertising">
            <p>
              Cookies are small files stored on your device. We use them for the
              following purposes:
            </p>
            <List
              items={[
                "Essential cookies: sign-in, security and basic site functions.",
                "Analytics and preference cookies: understand usage and remember your settings.",
                "Advertising cookies: show and measure ads, including personalized ads where permitted.",
              ]}
            />
            <div className="p-5 md:p-6 bg-orange-50 border border-orange-100 rounded-2xl space-y-3 text-stone-700">
              <div className="flex items-center gap-2 font-black text-stone-900">
                <Zap className="w-4 h-4 text-orange-600" /> Advertising partners
              </div>
              <p>
                We use Google AdSense to display ads. Google, as a third-party vendor,
                uses cookies to serve ads on RecipeoAI. Google's use of advertising
                cookies enables it and its partners to serve ads to you based on your
                visit to our site and/or other sites on the Internet.
              </p>
              <p>
                Other third-party vendors and ad networks may also use cookies, web
                beacons or similar technologies to serve and measure ads.
              </p>
            </div>
            <h3 className="font-black text-stone-900">Your advertising choices</h3>
            <List
              items={[
                <>
                  You can opt out of personalized advertising in{" "}
                  <ExtLink href="https://adssettings.google.com">Google Ads Settings</ExtLink>.
                </>,
                <>
                  You can opt out of some third-party vendors' use of cookies for
                  personalized advertising at{" "}
                  <ExtLink href="https://www.aboutads.info">www.aboutads.info</ExtLink>{" "}
                  (US),{" "}
                  <ExtLink href="https://www.youronlinechoices.com">youronlinechoices.com</ExtLink>{" "}
                  (EU/UK) or{" "}
                  <ExtLink href="https://optout.networkadvertising.org">the NAI opt-out page</ExtLink>.
                </>,
                <>
                  Learn how Google uses information from sites that use its services at{" "}
                  <ExtLink href="https://policies.google.com/technologies/partner-sites">
                    policies.google.com/technologies/partner-sites
                  </ExtLink>.
                </>,
                "You can block or delete cookies in your browser settings. Some features may stop working if you block essential cookies.",
              ]}
            />
            <p>
              Visitors in the European Economic Area, the United Kingdom and Switzerland
              will be asked for consent before personalized advertising cookies are
              used, and can change their choice at any time.
            </p>
          </Section>

          {/* 6 */}
          <Section id="retention-security" icon={Lock} title="6. Data Retention and Security">
            <p>
              We keep personal information only as long as needed to provide the service,
              meet legal obligations, resolve disputes and enforce our agreements. You can
              ask us to delete your account and associated data at any time.
            </p>
            <p>
              We use HTTPS encryption, access controls and security monitoring to protect
              your information. No method of transmission or storage is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </Section>

          {/* 7 */}
          <Section id="your-rights" icon={Globe} title="7. Your Privacy Rights">
            <p>Depending on where you live, you may have the following rights:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="font-black text-xs uppercase tracking-widest text-orange-600 mb-3">
                  GDPR / UK GDPR
                </h4>
                <ul className="text-sm space-y-1.5 list-disc pl-4">
                  <li>Access and rectification</li>
                  <li>Erasure ("right to be forgotten")</li>
                  <li>Restriction and objection</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                  <li>Complain to a supervisory authority</li>
                </ul>
              </div>
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="font-black text-xs uppercase tracking-widest text-orange-600 mb-3">
                  CCPA / CPRA (California)
                </h4>
                <ul className="text-sm space-y-1.5 list-disc pl-4">
                  <li>Right to know and access</li>
                  <li>Right to delete and correct</li>
                  <li>Right to opt out of sale or sharing</li>
                  <li>Non-discrimination</li>
                </ul>
              </div>
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <h4 className="font-black text-xs uppercase tracking-widest text-orange-600 mb-3">
                  India (DPDP Act, 2023)
                </h4>
                <ul className="text-sm space-y-1.5 list-disc pl-4">
                  <li>Access to your data</li>
                  <li>Correction and erasure</li>
                  <li>Grievance redressal</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>
            </div>
            <p>
              To exercise any right, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 underline font-semibold">
                {CONTACT_EMAIL}
              </a>
              . We may need to verify your identity and will respond within 30 days
              where possible.
            </p>
          </Section>

          {/* 8 */}
          <Section id="international" icon={UserCheck} title="8. International Data Transfers">
            <p>
              RecipeoAI uses service providers located in different countries, including
              the United States. Your information may therefore be processed outside your
              country of residence. Where required, we rely on appropriate safeguards
              such as standard contractual clauses used by our providers.
            </p>
          </Section>

          {/* 9 */}
          <Section id="children" icon={ShieldAlert} title="9. Children's Privacy">
            <p>
              RecipeoAI is not directed to children under 13, and we do not knowingly
              collect personal information from them. If you believe a child has given us
              personal information, please contact us and we will delete it promptly.
            </p>
          </Section>

          {/* 10 */}
          <Section id="external-links" icon={Globe} title="10. Links to Other Websites">
            <p>
              Our site may link to third-party websites. We are not responsible for their
              content or privacy practices, so please read their policies.
            </p>
          </Section>

          {/* 11 */}
          <Section id="changes" icon={RefreshCcw} title="11. Changes to This Policy">
            <p>
              We may update this policy from time to time. Changes are posted on this
              page with a new "Last Updated" date. Please review it periodically.
              Continued use of the site after changes means you accept the updated
              policy.
            </p>
          </Section>

          {/* 12 Contact */}
          <Section id="contact" icon={Mail} title="12. Contact Us">
            <p>
              Questions about this policy or your data? Contact the site operator, Manish
              Singh:
            </p>
            <List
              items={[
                <>
                  Email:{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 underline font-semibold">
                    {CONTACT_EMAIL}
                  </a>
                </>,
                <>Website: {SITE_URL}</>,
              ]}
            />
            <div className="flex flex-wrap gap-3 pt-2 text-sm font-bold">
              <Link href="/about" className="px-4 py-2 bg-stone-900 text-white rounded-xl hover:bg-orange-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-stone-900 text-white rounded-xl hover:bg-orange-600 transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="px-4 py-2 bg-stone-900 text-white rounded-xl hover:bg-orange-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </Section>
        </div>
      </main>

      <footer className="mt-16 pt-8 border-t border-stone-200 text-center text-xs text-stone-400 px-4">
        © {new Date().getFullYear()} RecipeoAI. All rights reserved.
      </footer>
    </div>
  );
}