import type { Toolkit } from '@/lib/toolkits';

export default function BundlesSection({ bundles }: { bundles: Toolkit[] }) {
  if (!bundles.length) return null;

  return (
    <section className="bundles-section" id="bundles" aria-label="Pro toolkit bundles">
      <div className="section-label">
        <span>BUNDLES</span>
        <span className="count">{bundles.length} AVAILABLE</span>
      </div>
      <p className="cat-blurb">
        Built the calculators? Buy the bundles. Excel workbooks that take
        what you measured here and turn it into a full takeoff, parts list,
        and customer quote — or, for the Garage Ledger Vault, a complete
        project-car build tracker with dashboard and ROI math.
      </p>
      <div className="bundles-grid">
        {bundles.map(b => (
          <a
            key={b.id}
            href={b.url ?? '#'}
            className="bundle-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bundle-card-head">
              <span className="bundle-card-badge">BUNDLE</span>
              <span className="bundle-card-price">{b.price}</span>
            </div>
            <div className="bundle-card-name">{b.name}</div>
            <p className="bundle-card-pitch">{b.pitch}</p>
            <ul className="bundle-card-bullets">
              {b.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <span className="bundle-card-cta">Get the bundle →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
