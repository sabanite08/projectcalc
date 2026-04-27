import Link from 'next/link';
import { calculators, getCategories } from '@/lib/calculators';

const categoryLabels: Record<string, string> = {
  construction: 'TRADES & CONSTRUCTION',
  home: 'HOME & DIY',
  finance: 'FINANCE',
  utility: 'UTILITY',
};

const categoryBlurbs: Record<string, string> = {
  construction:
    'Pro-grade calculators for the trades — voltage drop to NEC spec, board feet for lumber orders, BTU sizing for HVAC, brick counts with mortar bag estimates, siding squares for vinyl and fiber cement jobs, and pipe water capacity. Built for contractors, electricians, framers, and anyone bidding a job.',
  home:
    'Material calculators for any project around the house — concrete bags or yards for slabs, drywall sheets for a remodel, paint gallons by room, mulch and gravel by the yard, sod pallets, deck stain, fence posts, tile, and roofing shingles. Get the right amount the first time so you\'re not making a second trip to Home Depot.',
  finance:
    'Quick money math — mortgage payments with full amortization, car loan payments factoring in down payment and trade-in, personal loan payoff math, and restaurant tips with bill split. Skip the bank\'s overcomplicated calculator — these give you the real number in three inputs.',
};

export default function Home() {
  const categories = getCategories();

  // ItemList schema — tells Google this site is a directory of N calculators
  const ldJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'ProjectCalc',
        url: 'https://projectcalc.app',
        description: 'Free, fast calculators for construction, home improvement, and DIY projects.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://projectcalc.app/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ItemList',
        name: 'ProjectCalc Calculators',
        numberOfItems: calculators.length,
        itemListElement: calculators.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.metaTitle.split(' | ')[0],
          url: `https://projectcalc.app/${c.slug}`,
        })),
      },
    ],
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-tag">v0.2 — PROJECT CALCULATORS</div>
        <h1>Math for any<br /><span className="accent">project.</span></h1>
        <p>
          Fast, dead-simple calculators for what you actually buy and install — pro or DIY.
          No signup, no popups, works on a 4G phone with one bar.
        </p>
        <div className="scroll-cue">▼ PICK A CALCULATOR</div>
      </section>

      <section className="ticker">
        <div className="ticker-track">
          <span>BOARD FEET</span><span>BTU</span><span>VOLTAGE DROP</span><span>SQUARES</span>
          <span>WASTE FACTOR</span><span>PITCH</span><span>R-VALUE</span><span>BUNDLES</span>
          <span>CUBIC YARDS</span><span>CONCRETE</span><span>TILES</span><span>MORTGAGE</span>
          <span>BOARD FEET</span><span>BTU</span><span>VOLTAGE DROP</span><span>SQUARES</span>
          <span>WASTE FACTOR</span><span>PITCH</span><span>R-VALUE</span><span>BUNDLES</span>
          <span>CUBIC YARDS</span><span>CONCRETE</span><span>TILES</span><span>MORTGAGE</span>
        </div>
      </section>

      <section className="grid-section">
        {(['home', 'construction', 'finance'] as const).map(catKey => {
          const calcs = categories.get(catKey);
          if (!calcs) return null;
          return (
            <div key={catKey} id={catKey}>
              <div className="section-label">
                <span>{categoryLabels[catKey]}</span>
                <span className="count">{calcs.length} ACTIVE</span>
              </div>
              <p className="cat-blurb">{categoryBlurbs[catKey]}</p>
              <div className="cat-grid">
                {calcs.map((c, i) => (
                  <Link key={c.slug} href={`/${c.slug}`} className="cat-card">
                    <div className="cat-num">
                      {String(i + 1).padStart(2, '0')}/{String(calcs.length).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="cat-name">{c.name}</div>
                      <div className="cat-desc">{c.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid-section">
        <div className="seo-block">
          <h2>What is ProjectCalc?</h2>
          <p>
            ProjectCalc is a free collection of {calculators.length} calculators for
            construction, home improvement, and DIY projects. Whether you&apos;re a
            contractor sizing a job or a homeowner figuring out how much paint to buy,
            every calculator gives you the answer in one click — with the math shown
            so you can double-check.
          </p>
          <p>
            No signup, no popups, no email capture, no AI chatbot interrupting you.
            Just calculators that work, on any phone, on any connection. The
            calculators run entirely in your browser — your inputs never leave the page.
          </p>
          <h2 style={{ marginTop: 32 }}>Built for both pros and homeowners</h2>
          <p>
            Every calculator gives you the headline answer (sheets, bundles, gallons,
            yards, BTUs) plus the supporting math so you can sanity-check the result.
            Technical inputs include plain-English tooltips for things like roof pitch,
            wire gauge (AWG), and R-value — useful if it&apos;s your first time
            spec&apos;ing the job, ignored if you already know.
          </p>
          <p>
            Common questions per calculator answer the things people actually search
            for: how much things cost, how to measure correctly, what to buy at
            Home Depot vs the lumber yard, and the rules of thumb pros use.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </main>
  );
}
