import type { Metadata } from 'next';
import Link from 'next/link';
import { shedPlans, shedRelatedCalcSlugs, SHED_PRICE } from '@/lib/shed-plans';
import { calculators } from '@/lib/calculators';
import { author } from '@/lib/author';

export const metadata: Metadata = {
  title: 'Permit-Ready Shed Plans — Drawn & Checked by a Building Official',
  description:
    '12 permit-ready shed plan sets from 8×8 to 12×20, gable and lean-to. Every 9-sheet ' +
    'construction set is drawn and checked by an ICC-Certified Building Official, cites the ' +
    '2021 IRC on each sheet, and includes a complete materials list. Instant PDF download.',
  alternates: { canonical: 'https://projectcalc.app/shed-plans' },
  openGraph: {
    title: 'Permit-Ready Shed Plans — Drawn by a Building Official',
    description:
      '12 code-cited shed plan sets (8×8–12×20, gable + lean-to) with full materials lists. Instant PDF download.',
    url: 'https://projectcalc.app/shed-plans',
    type: 'website',
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Are these shed plans really permit-ready?',
    a: 'Every sheet cites the 2021 IRC section it satisfies, with the design criteria (30 psf ground snow, 115 mph ultimate wind) on the cover, closed dimension strings, a true wall section, and a materials takeoff that matches the drawings. They are drawn and checked by an ICC-Certified Building Official — the same kind of official who reviews permit applications. Always confirm local amendments (frost depth, wind and snow loads) with your building department.',
  },
  {
    q: 'What do I get, and in what format?',
    a: 'A 9-sheet 11×17 PDF construction set: cover and design criteria, floor plan, two approved foundation options (timber skid and concrete slab), exterior elevations, roof framing, a typical wall section, wall framing with opening details, general notes and code schedules, and a complete materials list. It is an instant download after purchase and prints at 11×17 or letter.',
  },
  {
    q: 'Will I need a building permit?',
    a: 'It depends on your jurisdiction. Many exempt accessory structures under 200 sq ft, but the rules vary and larger sheds (200 sq ft and up) usually require a permit. These plans are drawn to be handed to a building department when one is required — verify the threshold and any local amendments with your city or county.',
  },
  {
    q: 'Gable or lean-to — which roof should I pick?',
    a: 'A gable (the classic peaked roof) gives more headroom and room for a loft or overhead storage. A lean-to (single-slope) roof sits lower and tucks neatly against a fence, garage, or house wall, and reads more modern. Both are offered fully permit-ready; pick by where the shed sits and how much height you want.',
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
    { '@type': 'ListItem', position: 2, name: 'Shed Plans' },
  ],
};

const itemListLd = {
  '@type': 'ItemList',
  name: 'Permit-Ready Shed Plans',
  itemListElement: shedPlans.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: `${p.size} ${p.roof} Shed Plans (permit-ready)`,
      category: 'Building Plans',
      brand: { '@type': 'Brand', name: 'ProjectCalc' },
      offers: {
        '@type': 'Offer',
        price: SHED_PRICE.replace('$', ''),
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

export default function ShedPlansHub() {
  const related = shedRelatedCalcSlugs
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
          <span>Shed Plans</span>
        </nav>

        <div className="calc-header">
          <div>
            <div className="calc-formula">PERMIT-READY · DRAWN BY A BUILDING OFFICIAL</div>
            <h1 className="calc-title">SHED PLANS</h1>
          </div>
        </div>

        <div className="seo-block" style={{ maxWidth: 820 }}>
          <p>
            Twelve permit-ready shed plan sets, from a compact 8×8 up to a 12×20 — ten
            gable and two lean-to. Every set is a 9-sheet, 11×17 construction package
            <strong> drawn and checked by an ICC-Certified Building Official</strong> (and
            former home builder), with the 2021 IRC section cited at every structural
            decision, a real wall section, and a complete materials takeoff.
          </p>
          <p>
            Most shed plans online are pretty renders with thin details that stall the
            first time a plans examiner opens them. These are drawn the way an examiner
            wants to see a set: design criteria on the cover, closed dimension strings,
            code citations you can check, and a bill of materials that actually matches
            the drawings. Pick a size below and the link opens that plan set on Etsy for
            an instant PDF download.
          </p>
        </div>

        <div className="shed-table-wrap" role="region" aria-label="Compare shed plans">
          <table className="shed-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Sq&nbsp;ft</th>
                <th>Roof</th>
                <th>Door</th>
                <th>Windows</th>
                <th>Price</th>
                <th aria-label="Link" />
              </tr>
            </thead>
            <tbody>
              {shedPlans.map(p => (
                <tr key={p.id}>
                  <td data-label="Plan">
                    <span className="shed-size">{p.size}</span>
                  </td>
                  <td data-label="Sq ft">{p.sqft}</td>
                  <td data-label="Roof">
                    <span className={p.roof === 'Lean-To' ? 'shed-tag lean' : 'shed-tag'}>
                      {p.roof} · {p.pitch}
                    </span>
                  </td>
                  <td data-label="Door">{p.door}</td>
                  <td data-label="Windows">{p.windows}</td>
                  <td data-label="Price">{SHED_PRICE}</td>
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
          downloads — $19 each. Links open in a new tab.
        </p>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 44 }}>
          <h2>What&rsquo;s in every set (9 sheets)</h2>
          <ul>
            <li><strong>S0 — Cover:</strong> design criteria (snow, wind, seismic, soil) and plan notes</li>
            <li><strong>S1 — Floor Plan:</strong> fully dimensioned, walls lettered and keyed to the schedules</li>
            <li><strong>S2 — Foundation:</strong> two approved options — timber skid <em>and</em> concrete slab with a thickened edge, rebar detail, vapor retarder</li>
            <li><strong>S3 — Exterior Elevations:</strong> all four sides with heights and materials</li>
            <li><strong>S4 — Roof Framing:</strong> rafter layout (plus the ceiling-joist / rafter-tie plan on gables)</li>
            <li><strong>S5 — Typical Wall Section:</strong> the real eave assembly — subfascia, fascia, vented soffit, drip edge, birdsmouth</li>
            <li><strong>S6 — Wall Framing:</strong> king / jack studs, headers, cripples, opening details (and the rake-wall stud schedule on lean-tos)</li>
            <li><strong>S7 — Notes &amp; Schedules:</strong> general notes, header schedule, 2021 IRC fastening schedule</li>
            <li><strong>S8 — Materials List:</strong> every board, sheet, bundle, and bolt with quantities</li>
          </ul>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>Which size do I need?</h2>
          <p>
            Size a shed by what goes in it, then add room to walk around it. Quick guide:
          </p>
          <ul>
            <li><strong>8×8 to 8×12</strong> — mowers, trimmers, bikes, and garden tools; a tidy backyard storage shed.</li>
            <li><strong>10×10 to 10×16</strong> — a riding mower plus a workbench, or a small workshop with a window for light.</li>
            <li><strong>12×12 to 12×20</strong> — ATVs, a full workshop, lawn tractor with attachments, or a she-shed / studio. The 12×20 clears 240 sq ft, so plan on a permit in most places.</li>
          </ul>
          <p>
            Every door 4 ft and wider is drawn as a <strong>double (pair) door</strong> — a
            single site-built leaf over about 3 ft racks and sags, so wide openings are
            framed correctly as two leaves.
          </p>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>Gable vs. lean-to</h2>
          <p>
            <strong>Gable</strong> is the classic peaked roof — more headroom down the
            center, room for a loft, and the look most people picture when they say
            &ldquo;shed.&rdquo; All ten gable plans are drawn at a 6:12 pitch.
          </p>
          <p>
            <strong>Lean-to</strong> is a single-slope roof that sits lower and drains to
            one side — ideal against a fence, garage, or house wall, and a cleaner, more
            modern profile. The two lean-to sets (8×12 and 10×12) use a 2:12 mono-pitch
            with 2×8 rafters bearing on both walls, so no ceiling ties are required, and
            they include a dimensioned rake-wall stud cut schedule.
          </p>
        </div>

        <div className="seo-block" style={{ maxWidth: 820, marginTop: 32 }}>
          <h2>Plan the build with our free calculators</h2>
          <p>
            Building it yourself? These free ProjectCalc tools cover the estimating math
            for a shed foundation, framing, and roof:
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
          <h2>Shed plan FAQ</h2>
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
            Need something bigger? See our{' '}
            <Link href="/garage-plans">permit-ready garage plans</Link> (1-car to 4-car).
          </p>
        </div>
      </section>
    </main>
  );
}
