import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'ProjectCalc terms of use. Calculators are provided as-is for estimation purposes. Always verify with local code and a licensed professional.',
  alternates: { canonical: 'https://projectcalc.app/terms' },
};

export default function Terms() {
  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>Terms</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">LEGAL</div>
            <h1 className="calc-title">TERMS OF USE</h1>
          </div>
          <div className="calc-formula">Last updated: April 26, 2026</div>
        </div>
        <div className="seo-block" style={{ maxWidth: 760 }}>
          <h2>Use at your own risk</h2>
          <p>
            ProjectCalc calculators are provided for estimation and educational
            purposes only. They use industry-standard formulas and rules of thumb.
            They are <strong>not</strong> a substitute for professional engineering,
            licensed contractor judgment, formal load calculations (Manual J for
            HVAC, structural engineering for load-bearing), or local building
            codes.
          </p>
          <p>
            Always verify final material quantities, electrical sizing, structural
            specs, and code requirements with a qualified licensed professional
            before purchasing materials or beginning work.
          </p>

          <h2 style={{ marginTop: 32 }}>No warranty</h2>
          <p>
            ProjectCalc is provided &quot;as is&quot; without warranty of any kind,
            express or implied. We make no guarantees about the accuracy,
            completeness, or fitness for a particular purpose of any calculator
            output. Material prices, code requirements, and product
            specifications change — verify current values with your supplier or
            local jurisdiction before relying on a result.
          </p>

          <h2 style={{ marginTop: 32 }}>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, ProjectCalc and its operators
            are not liable for any direct, indirect, incidental, consequential,
            or punitive damages arising out of your use of the calculators —
            including but not limited to over-purchasing, under-purchasing, code
            violations, structural failures, or any project outcome.
          </p>

          <h2 style={{ marginTop: 32 }}>Affiliate disclosure</h2>
          <p>
            Some links on ProjectCalc may be affiliate links to retailers
            (Home Depot, Lowe&apos;s, Amazon, etc.). When you click an affiliate
            link and make a purchase, we may earn a small commission at no extra
            cost to you. Our calculator outputs and FAQ content are not
            influenced by affiliate relationships.
          </p>

          <h2 style={{ marginTop: 32 }}>Intellectual property</h2>
          <p>
            The ProjectCalc name, logo, and site design are owned by their
            respective creators. The calculator formulas themselves are public
            domain (industry-standard math). You&apos;re welcome to use the
            calculators on this site freely. Do not scrape, mirror, or republish
            the site as your own.
          </p>

          <h2 style={{ marginTop: 32 }}>Changes to these terms</h2>
          <p>
            We may update these terms over time. The &quot;last updated&quot; date
            at the top reflects the most recent revision. Continued use of the
            site after changes constitutes acceptance.
          </p>

          <h2 style={{ marginTop: 32 }}>Contact</h2>
          <p>
            Reach out via the GitHub repository at{' '}
            <Link href="https://github.com/sabanite08/projectcalc" style={{ color: 'var(--hi-vis)' }}>
              github.com/sabanite08/projectcalc
            </Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
