import Link from 'next/link';
import { calculators, getCategories } from '@/lib/calculators';

const categoryLabels: Record<string, string> = {
  construction: 'TRADES & CONSTRUCTION',
  home: 'HOME & DIY',
  finance: 'FINANCE',
  utility: 'UTILITY',
};

export default function Home() {
  const categories = getCategories();

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
            No signup, no popups, no email capture. Just calculators that work.
          </p>
        </div>
      </section>
    </main>
  );
}
