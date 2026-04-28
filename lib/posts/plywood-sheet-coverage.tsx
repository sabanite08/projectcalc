import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Plywood and OSB are sold in big rectangles that get cut
      down to fit irregular framing. The math is forgiving on
      paper and brutal in practice — every cut, scarf, and
      tongue lost to the perimeter is a sheet you have to drive
      back to the lumberyard for. Here is how to estimate
      sheets for the three jobs you actually use them on:
      subfloor, wall sheathing, and roof deck.
    </p>

    <h2>Sheet sizes and coverage</h2>
    <p>
      The standard sheet is 4 ft × 8 ft (32 ft²). Suppliers
      stock 4×9 (36 ft²) and 4×10 (40 ft²) in subfloor and roof-
      deck thicknesses for 9-ft ceilings and longer rafter runs;
      they reduce seams but cost more per square foot and have
      to be ordered specially in some markets.
    </p>
    <ul>
      <li>4×8 = <strong>32 ft²</strong> per sheet (default)</li>
      <li>4×9 = <strong>36 ft²</strong> per sheet</li>
      <li>4×10 = <strong>40 ft²</strong> per sheet</li>
    </ul>

    <h2>Waste factor by application</h2>
    <p>
      Waste is what gets thrown out as scrap, plus the small
      shavings lost to tongue-and-groove perimeter joints. A
      reasonable waste factor depends on the job:
    </p>
    <ul>
      <li><strong>Subfloor:</strong> 5–10% waste. Joists land on
        16" or 24" centers, and 4×8 sheets align cleanly with
        most floor layouts. Add at least one extra sheet for the
        ¼" lost on the perimeter T&amp;G tongue.</li>
      <li><strong>Wall sheathing:</strong> 10–12% waste. Walls
        have window and door openings that get cut out, and
        gable-end walls require a diagonal cut at the rake.</li>
      <li><strong>Roof deck:</strong> 12–15% waste on hip and
        cut-up roofs, 8% on simple gable roofs. Hip rafters
        force diagonal cuts on every plane.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/plywood-sheets-calculator">plywood sheets calculator</Link>{' '}
      lets you set the waste percentage directly so you can
      adjust it for the job in front of you.
    </p>

    <h2>What thickness for what job</h2>
    <p>
      <strong>Subfloor:</strong> 23/32" (3/4" nominal) tongue-
      and-groove plywood or OSB rated as Sturd-I-Floor 24 OC,
      glued and screwed to the joists. 19/32" works on 12" o.c.
      spacing. 1-1/8" T&amp;G is used on 24" o.c. engineered
      I-joists for stiffer floors.
    </p>
    <p>
      <strong>Wall sheathing:</strong> 7/16" or 1/2" OSB or
      plywood, depending on shear-wall requirements in your
      jurisdiction. Coastal and seismic zones often spec 15/32"
      or 1/2" plywood for shear capacity.
    </p>
    <p>
      <strong>Roof deck:</strong> 15/32" or 1/2" plywood / OSB on
      24" o.c. trusses. 5/8" on 24" o.c. rafters with cathedral
      ceilings. Always use H-clips at unsupported sheet edges.
    </p>

    <h2>Layout matters more than the math</h2>
    <p>
      The calculator gives you the right sheet count when sheets
      go down clean. In practice, a few layout decisions change
      what you actually need:
    </p>
    <ul>
      <li>
        <strong>Run sheets perpendicular to joists for
        subfloor.</strong> The long edge crosses joists, sheets
        lay in a brick pattern with seams staggered by 4 feet.
      </li>
      <li>
        <strong>Stagger end joints by at least one rafter or
        joist bay.</strong> All sheet ends in line is a hinge —
        bad for both strength and floor squeak.
      </li>
      <li>
        <strong>Snap a chalk line at every fastener row.</strong>
        Subfloor screws hit the joist 100% of the time; nails
        miss enough to matter when one in five backs out a year
        later.
      </li>
    </ul>

    <h2>Common estimating mistakes</h2>
    <p>
      <strong>Forgetting the perimeter.</strong> On a 24×16
      subfloor, the four perimeter sheets each lose ~1/4" of
      tongue. That isn&apos;t enough to need an extra sheet, but
      if you cut a sheet in half because the room is 8 ft 1 in
      wide, that 1-inch strip is probably scrap. Round generously.
    </p>
    <p>
      <strong>Underestimating cut-up roofs.</strong> A simple
      gable roof at 8% waste is realistic. A hip roof on a Z-
      shaped house plan can hit 18% — the diagonals on the hips
      eat sheets in pairs.
    </p>
    <p>
      <strong>Mixing OSB and plywood mid-job.</strong> Both
      meet code, but they expand differently with humidity. Pick
      one and stick with it across the whole deck.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many sheets of plywood for a 24×16 subfloor?</strong>
      384 ft² ÷ 32 ft² = 12 sheets exact. Add 10% waste = 13.2,
      round to 14 to cover T&amp;G perimeter loss.
    </p>
    <p>
      <strong>Can I use 4×9 plywood for a 9-ft wall?</strong> Yes,
      and it cuts the horizontal seam most walls have at 8 ft. It
      costs more and is heavier — a two-person carry.
    </p>
    <p>
      <strong>OSB or plywood — which lasts longer outside?</strong>
      Plywood handles repeated wetting better. OSB can swell at
      cut edges. For finished, covered work, both perform the
      same. For exposed decks or sheds without wrap, plywood is
      the safer bet.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/plywood-sheets-calculator" style={{ color: 'var(--hi-vis)' }}>plywood sheets calculator</Link>{' '}
      gives a planning quantity. Always cross-check against
      engineered framing plans for the rated thickness, span
      rating, and fastening pattern your inspector requires.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'plywood-sheet-coverage',
  title: 'Plywood Sheet Coverage — Subfloor, Walls, and Roof',
  metaTitle: 'Plywood Sheet Coverage — Subfloor & Sheathing | ProjectCalc',
  metaDesc: 'Plywood and OSB estimating for subfloor, wall sheathing, and roof deck. Sheet sizes, waste factors by application, and the layout rules that matter.',
  excerpt: 'Plywood is sold in big rectangles that get cut down to fit irregular framing. Forgiving on paper, brutal in practice. Here is how to estimate sheets for subfloor, walls, and roof deck without making three trips back to the lumberyard.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['plywood-sheets-calculator', 'lumber-calculator', 'roofing-calculator'],
  Body,
};

export default post;
