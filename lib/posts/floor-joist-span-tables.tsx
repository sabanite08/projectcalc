import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      &ldquo;How far can a 2×10 span?&rdquo; is one of the most googled
      framing questions, and the right answer depends on five things —
      lumber size, on-center spacing, live load, species, and grade.
      The IRC and the American Wood Council publish full tables that
      cover every combination. Here&apos;s the practical version for
      common residential framing, plus when the simple-span tables
      stop applying and you need an engineer.
    </p>

    <p style={{ padding: 12, background: 'rgba(255, 100, 100, 0.08)', borderLeft: '2px solid #c44', fontSize: 13 }}>
      <strong>Estimate only — structural framing.</strong> The spans
      below are simplified from the AWC Maximum Spans tables for #2
      grade lumber, L/360 deflection, 10 psf dead load. Cantilevers,
      concentrated loads, and unusual conditions are not covered. Get
      a licensed engineer or your local building department to verify
      the spec before framing.
    </p>

    <h2>The five inputs that matter</h2>
    <ol>
      <li><strong>Joist size</strong> — 2×6, 2×8, 2×10, or 2×12. Bigger lumber spans farther but costs more and reduces ceiling height below.</li>
      <li><strong>Spacing on center</strong> — 16 in OC is the residential standard. 24 in OC saves about 33% on framing lumber but cuts span 10-15%.</li>
      <li><strong>Live load</strong> — 30 psf for sleeping rooms, 40 psf for general living areas (kitchens, dining, halls, baths). Decks bump higher per IRC R301.5.</li>
      <li><strong>Species and grade</strong> — Doug Fir-Larch (DFL) is strongest among common framing. Spruce-Pine-Fir (SPF) is 5-10% weaker. Southern Pine (SP) matches DFL. #2 grade is the residential default.</li>
      <li><strong>Deflection limit</strong> — L/360 is residential standard (1 in deflection per 30 ft of span). Tile floors over joists need L/720 — half the span.</li>
    </ol>

    <h2>The simplified span table — Doug Fir-Larch #2</h2>
    <p>
      Maximum simple span at 16 in OC, L/360, 10 psf dead load:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      Joist     30 psf live    40 psf live{'\n'}
      2×6       10&apos;-9&quot;        9&apos;-9&quot;{'\n'}
      2×8       14&apos;-2&quot;        12&apos;-10&quot;{'\n'}
      2×10      18&apos;-0&quot;        16&apos;-3&quot;{'\n'}
      2×12      21&apos;-9&quot;        19&apos;-10&quot;
    </p>
    <p>
      For 24 in OC, drop each span by ~12-15%. For SPF #2, drop by
      ~5%. Southern Pine is essentially the same as DFL.
    </p>
    <p>
      The <Link href="/floor-joist-span-calculator">floor joist span
      calculator</Link> handles all combinations of size × spacing ×
      load × species so you don&apos;t have to interpolate.
    </p>

    <h2>Worked example — kitchen floor over a basement</h2>
    <p>
      You&apos;re framing a 14 ft wide kitchen floor over an unfinished
      basement, no interior bearing wall available. Live load is 40 psf
      (general living area), DFL #2 lumber, 16 in OC spacing.
    </p>
    <ul>
      <li>2×8 maxes at 12&apos;-10&quot; — too short for a 14 ft span</li>
      <li>2×10 maxes at 16&apos;-3&quot; — covers 14 ft with 2 ft to spare</li>
    </ul>
    <p>
      Frame with 2×10 DFL #2 at 16 in OC. If lumber is SPF, double
      check — 2×10 SPF #2 at 16 OC, 40 psf maxes at 15&apos;-7&quot;,
      still good for 14 ft but tight.
    </p>

    <h2>Why L/360 matters more than &ldquo;will it break?&rdquo;</h2>
    <p>
      Joists rarely fail by breaking. They fail by bouncing. L/360
      means the joist can deflect a maximum of (span ÷ 360) under
      live load — about 0.5 inch over a 14 ft span. That&apos;s the
      threshold where drywall ceilings below crack, plaster cracks,
      and you can feel the bounce when someone walks across the room.
    </p>
    <p>
      Tile floors are stricter at L/720 (0.25 in deflection over the
      same 14 ft) because grout cracks at smaller deflections. If
      you&apos;re tiling, halve every span in the table or use I-joists
      and engineered lumber rated for L/720.
    </p>

    <h2>When the simple-span tables don&apos;t apply</h2>
    <p>
      Stop and call an engineer if any of these are true:
    </p>
    <ul>
      <li><strong>Cantilever</strong> — joist extending past a bearing wall (porch, balcony). Cantilevers can&apos;t exceed 25% of back-span per IRC, and the live load on the cantilever counts double.</li>
      <li><strong>Point loads</strong> — a column, post, or chimney bearing on the joists between bearing walls. Joists need to be doubled or tripled and sized for the concentrated load.</li>
      <li><strong>Engineered lumber substitution</strong> — TJI joists, LVL, glulam. These have manufacturer-specific span tables, not AWC tables.</li>
      <li><strong>Heavy floor finishes</strong> — stone over 1 in thick, large aquariums, gun safes. Add up the dead load and consult an engineer.</li>
      <li><strong>Deck framing</strong> — uses different load combinations and connector requirements per IRC R507. Different tables.</li>
    </ul>

    <h2>What pros do differently</h2>
    <p>
      <strong>Round to the next standard length.</strong> Joists are
      sold in 2 ft increments (8&apos;, 10&apos;, 12&apos;, 14&apos;,
      16&apos;, 18&apos;, 20&apos;, 22&apos;, 24&apos;). Designing to
      a 14&apos;-3&quot; span means cutting 16 ft joists with 1&apos;-9&quot;
      of waste per joist. Adjust the bearing wall position to land at a
      standard length.
    </p>
    <p>
      <strong>Specify species at the lumber yard, not the species
      counter.</strong> Southern Pine and DFL ship looking nearly
      identical. Ask for the grade stamp on the truck — it shows the
      mill, species, and grade. The yard will substitute SPF if
      they&apos;re short on what you ordered, and your span calc no
      longer applies.
    </p>
    <p>
      <strong>Add blocking or X-bracing at mid-span on long joists.</strong>
      {' '}IRC requires blocking on joists deeper than 2×10 with a
      span over 12 ft. The blocking transfers point loads sideways
      and stiffens the floor measurably.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How far can a 2×10 span at 16 OC?</strong> About
      16&apos;-3&quot; for 40 psf living area in DFL #2, 18&apos; for
      30 psf bedroom load. Less if SPF or grades below #2.
    </p>
    <p>
      <strong>Can I use 2×6 floor joists in a house?</strong> Yes for
      short spans up to about 9&apos;-9&quot; at 16 OC, 40 psf in DFL #2.
      Most rooms exceed that, so 2×8 is the practical residential
      minimum.
    </p>
    <p>
      <strong>What grade is &ldquo;Stud&rdquo; or &ldquo;Construction&rdquo; lumber?</strong>
      {' '}Stud grade is below #2 for joist purposes. The span tables
      don&apos;t cover it. Use #2 or better for any joist you&apos;re
      counting on for span.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only — engineer review required.</strong> The{' '}
      <Link href="/floor-joist-span-calculator" style={{ color: 'var(--hi-vis)' }}>floor joist span calculator</Link>
      {' '}covers simple spans for #2 grade, L/360, 10 psf dead load.
      For cantilevers, point loads, engineered lumber, or anything
      outside standard residential framing, get a licensed engineer
      or your local building department to verify the spec.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'floor-joist-span-tables',
  title: 'Floor Joist Spans — How Far Can a 2×10 Reach',
  metaTitle: 'Floor Joist Span Tables — IRC + AWC for Residential | ProjectCalc',
  metaDesc: 'How far can a 2×10 floor joist span? The IRC R502.3 + AWC tables explained. Live load, deflection, species, and when to call an engineer.',
  excerpt: 'How far a joist can span depends on five things — size, spacing, live load, species, grade. The IRC and AWC publish the full tables. Here is the practical version for common residential framing.',
  date: '2026-05-03',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['floor-joist-span-calculator', 'header-size-calculator', 'beam-span-calculator'],
  Body,
};

export default post;
