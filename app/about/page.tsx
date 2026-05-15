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

          <h2 style={{ marginTop: 32 }}>Methodology &amp; sources</h2>
          <p>
            Calculator formulas come from current code editions and industry
            references, not blog posts:
          </p>
          <ul>
            <li>
              <strong>Electrical</strong> — National Electrical Code (NEC) for
              voltage drop (Hazen-Williams not applicable; we use the
              standard K=12.9 copper resistivity), conduit fill (NEC Chapter
              9), wire gauge ampacity (Table 310.16, 75°C terminations), panel
              load (NEC 220 Part III standard method), and circuit breaker
              sizing (NEC 240.6 + 210.20(A)).
            </li>
            <li>
              <strong>Plumbing</strong> — International Plumbing Code (IPC)
              for drain pipe sizing (Table 710.1), vent sizing (Table 906.1),
              trap sizing (Table 1002.1), and fixture units. Hazen-Williams
              for friction loss with material-specific C-factors.
            </li>
            <li>
              <strong>HVAC</strong> — ACCA Manual J approach for whole-home
              cooling/heating loads (with Heat Transfer Multipliers by IECC
              climate zone), CFM = BTU &divide; (1.08 &times; &Delta;T) for
              duct sizing, ASHRAE 62.2 for ventilation rates, EPA Section 608
              references for refrigerant.
            </li>
            <li>
              <strong>Carpentry</strong> — IRC R602.7 for header sizing
              (simplified residential ranges), AWC Maximum Spans for floor
              joists and rafters, NDS allowable stresses for built-up beams.
              ASCE 7 simplified for snow loads.
            </li>
            <li>
              <strong>Masonry</strong> — Brick Industry Association (BIA) for
              modular brick math (6.86 bricks/ft&sup2; with 3/8&quot; joint),
              ACI 318 for rebar cover requirements, manufacturer spec sheets
              for stone veneer and stucco coverage.
            </li>
            <li>
              <strong>Finance</strong> — Standard amortization formula
              (M = P&middot;r(1+r)<sup>n</sup> &divide; ((1+r)<sup>n</sup>&minus;1)) for
              mortgages, car loans, and personal loans. No proprietary
              modeling.
            </li>
          </ul>
          <p>
            Where formulas have multiple acceptable approaches (e.g., several
            slope reduction equations for snow load), we use the simplest
            approach that produces results within 10% of the more complex
            methods, and document any deviation in the calculator&apos;s notes
            section.
          </p>

          <h2 style={{ marginTop: 32 }}>Accuracy &amp; limits</h2>
          <p>
            All calculators are <strong>estimating tools</strong>, not
            substitutes for engineered drawings, code-stamped tables, or
            licensed professional sign-off. Code editions evolve and local
            jurisdictions amend them &mdash; the math here is good for
            planning, ordering, and sanity-checking. For permit submittal,
            structural design, code compliance, or anything where being wrong
            has real consequences, defer to your local building department,
            licensed electrician, plumber, HVAC contractor, or structural
            engineer.
          </p>
          <p>
            Structural and life-safety calculators (beam span, header size,
            stair stringer, snow load, panel load, etc.) carry an explicit
            &ldquo;estimate only&rdquo; disclaimer in the result row.
          </p>

          <h2 style={{ marginTop: 32 }}>Updates</h2>
          <p>
            Calculator math is reviewed annually against the latest code
            cycle. Major changes (e.g., the 2026 IRS mileage rate, NEC code
            cycle updates) trigger faster updates. The blog publishes new
            project guides on a regular cadence; calculator additions ship as
            new use cases come up.
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
            ProjectCalc is an independent site built and maintained by{' '}
            <strong>Brent J.</strong>, a solo developer based in the United
            States. It is funded by affiliate commissions — no subscriptions,
            no paywalls, no account required.
            Inputs to every calculator stay in your browser; nothing is sent
            to a server.
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
            </a>. Code corrections are especially welcome &mdash; if a calc
            disagrees with current code or a published source, file an issue
            with the citation and it gets fixed.
          </p>
        </div>
      </section>
    </main>
  );
}
