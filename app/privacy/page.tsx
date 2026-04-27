import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ProjectCalc privacy policy. We don\'t collect personal data, don\'t track users across the web, and don\'t sell anything.',
  alternates: { canonical: 'https://projectcalc.app/privacy' },
};

export default function Privacy() {
  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>Privacy</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">LEGAL</div>
            <h1 className="calc-title">PRIVACY POLICY</h1>
          </div>
          <div className="calc-formula">Last updated: April 26, 2026</div>
        </div>
        <div className="seo-block" style={{ maxWidth: 760 }}>
          <h2>The short version</h2>
          <p>
            ProjectCalc is a calculator site. The calculators run entirely in your
            browser. Your inputs never leave the page and are never sent to any
            server, including ours.
          </p>
          <p>
            We don&apos;t require an account, we don&apos;t collect email addresses,
            and we don&apos;t sell anything to anyone.
          </p>

          <h2 style={{ marginTop: 32 }}>What we collect</h2>
          <p>
            <strong>Anonymous traffic statistics.</strong> Vercel Analytics records
            anonymized page views (which calculator pages were visited, from which
            country, and on what type of device) so we can see what&apos;s being
            used. No cookies, no personal identifiers, no tracking across other
            websites.
          </p>
          <p>
            <strong>Server logs.</strong> Vercel automatically logs HTTP requests
            (IP address, user-agent, timestamp) for security and abuse prevention.
            These logs are retained for a short period and never combined with
            other data to identify individuals.
          </p>
          <p>
            <strong>Local storage on your device.</strong> Each calculator saves
            your last-used inputs in your browser&apos;s localStorage so you
            don&apos;t have to retype them. This data stays on your device. You can
            clear it anytime via your browser settings.
          </p>

          <h2 style={{ marginTop: 32 }}>What we don&apos;t collect</h2>
          <p>
            We don&apos;t use Google Analytics, Facebook Pixel, ad-tracking
            cookies, fingerprinting scripts, session recording, or any third-party
            analytics that follows you across the web.
          </p>

          <h2 style={{ marginTop: 32 }}>Future advertising</h2>
          <p>
            ProjectCalc may eventually display ads (such as Google AdSense) to
            cover hosting costs. If we do, we&apos;ll update this policy to
            describe what those ad partners collect and how to opt out. As of the
            last-updated date above, no ads are running.
          </p>

          <h2 style={{ marginTop: 32 }}>Affiliate links</h2>
          <p>
            We may include affiliate links to retailers like Home Depot, Lowe&apos;s,
            or Amazon for products mentioned in calculator FAQs. Clicking these
            doesn&apos;t cost you anything extra; we may earn a small commission
            if you buy something. Affiliate clicks pass standard tracking
            parameters to those retailers — their privacy policies apply once you
            leave our site.
          </p>

          <h2 style={{ marginTop: 32 }}>Your rights</h2>
          <p>
            Because we don&apos;t maintain user accounts or personal data, there
            isn&apos;t any data of yours for us to access, export, or delete.
            Local storage data is yours to manage in your browser.
          </p>

          <h2 style={{ marginTop: 32 }}>Contact</h2>
          <p>
            Questions about this policy: reach out via the email listed on our
            GitHub repository at{' '}
            <Link href="https://github.com/sabanite08/projectcalc" style={{ color: 'var(--hi-vis)' }}>
              github.com/sabanite08/projectcalc
            </Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
