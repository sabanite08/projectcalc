import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ProjectCalc',
  description: 'ProjectCalc is a free collection of fast, accurate calculators for construction, home improvement, and DIY projects — built for contractors and homeowners.',
  alternates: { canonical: 'https://projectcalc.app/about' },
};

export default function About() {
  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>About</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">ABOUT</div>
            <h1 className="calc-title">WHAT IS PROJECTCALC?</h1>
          </div>
        </div>
        <div className="seo-block" style={{ maxWidth: 760 }}>
          <h2>Built for real projects</h2>
          <p>
            ProjectCalc is a free library of fast, accurate calculators for
            construction, home improvement, and DIY projects. Whether you&apos;re
            estimating drywall for a remodel, sizing a circuit breaker for a new
            subpanel, or calculating pipe slope for a drain run — the math is
            already here.
          </p>
          <p>
            Every calculator uses the same formulas and code references that
            professionals rely on: NEC for electrical, IPC for plumbing, ACCA for
            HVAC, IRC for structural. Results are meant for estimation and planning;
            always verify final specs with your local code and a licensed
            professional.
          </p>

          <h2 style={{ marginTop: 32 }}>Who it&apos;s for</h2>
          <p>
            Contractors doing quick field estimates. Homeowners planning a weekend
            project. Students learning the trades. Anyone who needs a number fast
            and accurate without digging through a code book or firing up a
            spreadsheet.
          </p>

          <h2 style={{ marginTop: 32 }}>What&apos;s here</h2>
          <p>
            Over 70 calculators across five trades — Carpentry, Masonry &amp; Siding,
            Electrical, Plumbing, and HVAC — plus home &amp; DIY categories
            (concrete, roofing, flooring, paint, insulation, and more) and basic
            finance tools. Each calculator page includes a plain-language FAQ and
            a link to the relevant code section where applicable.
          </p>
          <p>
            The{' '}
            <Link href="/blog" style={{ color: 'var(--hi-vis)' }}>
              blog
            </Link>{' '}
            publishes practical guides on the same topics — how to read a load
            calculation, what pipe slope means for drain performance, when to
            upsize a wire gauge.
          </p>

          <h2 style={{ marginTop: 32 }}>Pro Toolkits</h2>
          <p>
            For contractors who need a full estimating workflow, we sell Pro
            Toolkits on Etsy — trade-specific Excel workbooks covering takeoff,
            material pricing, and a client-ready quote sheet. Available for
            Roofing, HVAC, Plumbing, Framing, Electrical, and Concrete.
          </p>

          <h2 style={{ marginTop: 32 }}>Who runs it</h2>
          <p>
            ProjectCalc is an independent site run by a solo developer based in
            the United States. It is funded by affiliate commissions and
            advertising — no subscriptions, no paywalls, no account required.
          </p>

          <h2 style={{ marginTop: 32 }}>Contact</h2>
          <p>
            Feedback, corrections, or partnership inquiries — open an issue on the{' '}
            <a
              href="https://github.com/sabanite08/projectcalc"
              style={{ color: 'var(--hi-vis)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
