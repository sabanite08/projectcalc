import type { Metadata } from 'next';
import Link from 'next/link';
import { garagePlans, garageRelatedCalcSlugs, GARAGE_PRICE } from '@/lib/garage-plans';
import { calculators } from '@/lib/calculators';
import { author } from '@/lib/author';

export const metadata: Metadata = {
  title: 'Permit-Ready Garage Plans — Drawn & Checked by a Building Official',
  description:
    'Permit-ready detached garage plan sets, from a 1-car to a 4-car Craftsman. Every 9-sheet ' +
    'construction set is drawn and checked by an ICC-Certified Building Official, cites the 2021 ' +
    'IRC on each sheet, details the CS-PF portal frame at the door wall, and includes a complete ' +
    'materials list. Instant PDF download.',
  alternates: { canonical: 'https://projectcalc.app/garage-plans' },
  openGraph: {
    title: 'Permit-Ready Garage Plans — Drawn by a Building Official',
    description:
      'Detached garage plan sets (1-car to 4-car) with code-cited framing, a CS-PF portal door wall, and full materials lists. Instant PDF download.',
    url: 'https://projectcalc.app/garage-plans',
    type: 'website',
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Are these garage plans really permit-ready?',
    a: 'Every sheet cites the 2021 IRC section it satisfies, with the design criteria (30 psf ground snow, 115 mph ultimate wind) on the cover, closed dimension strings, a true wall section, the braced-wall portal detail at the door opening, and a materials takeoff that matches the drawings. They are drawn and checked by an ICC-Certified Building Official — the same kind of official who reviews permit applications. Always confirm local amendments (frost depth, wind and snow loads) with your building department.',
  },
  {
    q: 'What do I get, and in what format?',
    a: 'A 9-sheet 11×17 PDF construction set: cover and design criteria, floor plan, a monolithic slab-on-grade foundation with a frost turndown, exterior elevations, roof framing (with a rafter cut template on the stick-framed sizes), a typical wall section, the door-wall and opening framing (including the CS-PF portal frame), general notes and code schedules, and a complete materials list. It is an instant download after purchase and prints at 11×17 or letter.',
  },
  {
    q: 'Will I need a building permit for a garage?',
    a: 'Almost always, yes. Unlike a small shed, a detached garage is a substantial structure and nearly every jurisdiction requires a permit — for the slab, the framing, and often the electrical. These plans are drawn to be handed straight to a building department: verify the submittal requirements and any local amendments with your city or county.',
  },
  {
    q: 'How is the wide overhead-door wall braced?',
    a: 'The door wall uses a CS-PF portal frame (2021 IRC Figure R602.10.6.4) — a continuous wood-structural-panel panel each side of the opening, sheathed in a 3-inch nailing grid with a header-to-jack-stud tension strap and the correct anchor bolts and plate washers. That is the detail most online garage plans skip, and it is exactly what lets a wide door opening pass a plans review. Every set draws and schedules it.',
  },
  {
    q: 'Detached or attached — which are these?',
    a: 'These are DETACHED garage plans. A free-standing detached garage does not require a fire separation from the house unless it sits within 3 feet of the dwelling or a lot line (R302.1 / R302.6). If you plan to attach the garage to your home, the fire-separation and door requirements change — check with your building department before you build.',
  },
  {
    q: 'What codes and loads are these designed to?',
    a: 'The 2021 International Residential Code, at 30 psf ground snow, 115 mph ultimate wind (Exposure B), and 1500 psf presumptive soil. If your local snow or wind loads are higher, verify with your building department before you build — the plans tell you exactly which tables govern so an examiner can check the numbers.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Because these are instant digital downloads, all sales are final. But message me through Etsy with any question before or after your purchase and I will make it right.',
  },
];

const breadcrumbLd = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ProjectCalc', item: 'https://projectcalc.app' },
    { '@type': 'ListItem', position: 2, name: 'Garage Plans' },
  ],
};

const itemListLd = {
  '@type': 'ItemList',
  name: 'Permit-Ready Garage Plans',
  itemListElement: garagePlans.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `${p.size} ${p.cars} ${p.style} Garage Plans (permit-ready)`,
      category: 'Building Plans',
      brand: { '@type': 'Brand', name: 'ProjectCalc' },
      offers: {
        '@type': 'Offer',
        price: GARAGE_PRICE.replace('$', ''),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: p.url,
      },
    },
  })),
};

const faqLd = {
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [breadcrumbLd, itemListLd, faqLd],
};

export default function GaragePlansHub() {
  const related = garageRelatedCalcSlugs
    .map(slug => calculators.find(c => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <main>
      <section className="calc-wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>Garage Plans</span>
        </nav>

        <div className="calc-header">
          <div>
            <div className="calc-formula">PERMIT-READY · DRAWN BY A BUILDING OFFICIAL</div>
            <h1 className="calc-title">GARAGE PLANS</h1>
          </div>
        </div>

        <div className="seo-block" style={{ maxWidth: 820 }}>
          <p>
            Permit-ready detached garage plan sets, from a compact 1-car up to a 4-car
            Craftsman. Every set is a 9-sheet, 11×17 construction package
            <strong> drawn and checked by an ICC-Certified Building Official</strong> (and
            former home builder), with the 2021 IRC section cited at every structural
            decision, a real wall section, the braced-wall portal detail at the door
            opening, and a complete materials takeoff.
          </p>
          <p>
            Most garage plans online are pretty renders with thin details that stall the
            first time a plans examiner opens them — especially at the wide overhead-door
            wall, where the bracing has to be a real portal frame. These are drawn the way
            an examiner wants to see a set: design criteria on the cover, closed dimension
            strings, the CS-PF portal detailed and scheduled, code citations you can check,
            and a bill of materials that matches the drawings. Pick a size below and the
            link opens that plan set on Etsy for an instant PDF download.
          </p>
        </div>

        <div className="shed-table-wrap" role="region" aria-label="Compare garage plans">
          <table className="shed-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Sq&nbsp;ft</th>
                <th>Bays</th>
                <th>Style</th>
                <th>Overhead&nbsp;doors</th>
                <th>Price</th>
                <th aria-label="Link" />
              </tr>
            </thead>
            <tbody>
              {garagePlans.map(p => (
                <tr key={p.id}>
                  <td data-label="Plan">
                    <span className="shed-size">{p.size}</span>
                  </td>
                  <td data-label="Sq ft">{p.sqft.toLocaleString()}</td>
                  <td data-label="Bays">{p.cars}</td>
                  <td data-label="Style">
                    <span className={p.style === 'Craftsman' ? 'shed-tag lean' : 'shed-tag'}>
                      {p.style}
                    </span>
                  </td>
                  <td data-label="Overhead doors">{p.doors}</td>
                  <td data-label="Price">{GARAGE_PRICE}</td>
                  <td data-label="">
                    <a className="shed-buy" href={p.url} target="_blank" rel="noopener noreferrer">
                      View plans →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="affiliate-note" style={{ marginTop: 14 }}>
          Plans are sold through our Etsy shop (ProjectCalcShop) as instant digital
          downloads — {GARAGE_PRICE} each. More sizes (2-car and 3-car) are being added.
          Links open in a new tab.
        </p>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 44 }}>
          <h2>What&rsquo;s in every set (9 sheets)</h2>
          <ul>
            <li><strong>G0 — Cover:</strong> design criteria (snow, wind, seismic, soil) and plan notes</li>
            <li><strong>G1 — Floor Plan:</strong> fully dimensioned, with the slab slope to the door and interior clear dimensions</li>
            <li><strong>G2 — Foundation:</strong> monolithic slab-on-grade with a thickened frost turndown, rebar, vapor retarder, and anchor-bolt layout</li>
            <li><strong>G3 — Exterior Elevations:</strong> all four sides with heights and materials</li>
            <li><strong>G4 — Roof Framing:</strong> rafter or truss layout (with a full-size rafter cut template on the stick-framed sizes)</li>
            <li><strong>G5 — Typical Wall Section:</strong> the real eave assembly — subfascia, fascia, vented soffit, drip edge, and the rafter or truss bearing</li>
            <li><strong>G6 — Door-Wall &amp; Opening Framing:</strong> the CS-PF portal frame at the overhead door, LVL header, hold-downs, plus the man-door and gable-end details</li>
            <li><strong>G7 — Notes &amp; Schedules:</strong> general notes, header schedule, the portal-frame spec, and the 2021 IRC fastening schedule</li>
            <li><strong>G8 — Materials List:</strong> every board, sheet, bundle, and bolt with quantities</li>
          </ul>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>How many bays do I need?</h2>
          <p>
            Size a garage by how many vehicles park in it, then add room to open doors and
            walk around them. Quick guide:
          </p>
          <ul>
            <li><strong>1-Car (14–16′ wide)</strong> — one vehicle plus a workbench, mower, and wall storage; a single 9–10′ overhead door.</li>
            <li><strong>2-Car (20–28′ wide)</strong> — two vehicles side by side, with either one wide 16′ door or a pair of single doors and a center pier.</li>
            <li><strong>3-Car (32–36′ wide)</strong> — three bays, or two bays plus a shop / boat-and-trailer bay.</li>
            <li><strong>4-Car (40–48′ wide)</strong> — a full four-bay garage or workshop; the 48×28 Craftsman uses twin projected cross-gable bays so the long front wall does not read as one flat box.</li>
          </ul>
          <p>
            Every overhead-door wall is braced with a <strong>CS-PF portal frame</strong>,
            not a plain sheathed wall — the code method that actually holds a wide opening
            against wind. The bays and pier widths are tuned so each braced panel meets its
            minimum length; the arithmetic is on the sheets.
          </p>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>Gable vs. Craftsman</h2>
          <p>
            <strong>Gable</strong> is the classic detached-garage look — a clean peaked
            roof with a board-and-batten gable end and a carriage-style overhead door.
            The 8:12 pitch reads premium and gives full attic space overhead.
          </p>
          <p>
            <strong>Craftsman</strong> is the eave-front, wider line: the ridge runs
            parallel to the street and the front wall steps out into projected cross-gable
            bays over the doors, with gooseneck barn lights, carriage doors, and cornice
            returns. It is the upgrade look for a 3- or 4-car garage that faces the road.
          </p>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>Plan the build with our free calculators</h2>
          <p>
            Building it yourself? These free ProjectCalc tools cover the estimating math
            for a garage slab, framing, and roof:
          </p>
        </div>
        <div className="trade-grid" style={{ marginTop: 16 }}>
          {related.map(c => (
            <Link key={c.slug} href={`/${c.slug}`} className="trade-tile">
              <div className="cat-name">{c.name}</div>
              <div className="cat-desc">Free calculator</div>
            </Link>
          ))}
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 44 }}>
          <h2>Garage plan FAQ</h2>
          {FAQ.map((f, i) => (
            <div key={i} style={{ marginTop: i ? 20 : 8 }}>
              <h3 style={{ fontSize: '1.02rem', margin: '0 0 6px' }}>{f.q}</h3>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 40 }}>
          <p className="affiliate-note">
            Plans drawn and reviewed by {author.name}, an ICC-Certified Building Official.
            Not a sealed engineering document — verify local amendments, frost depth, and
            wind / snow loads with your building department.
          </p>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 24 }}>
          <p>
            Looking for something smaller? See our{' '}
            <Link href="/shed-plans">permit-ready shed plans</Link> (8×8 to 12×20).
          </p>
        </div>
      </section>
    </main>
  );
}
