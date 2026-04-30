import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Sheet vinyl is the cheapest, most water-resistant flooring
      per square foot you can buy — the reason it covers half the
      kitchens, baths, and laundry rooms in the country. It rolls
      out in one piece, glues or tapes down, and shrugs off
      spills. The catch is that the math is per linear foot of
      roll, not per square foot of floor, and the roll width
      decides whether you need a seam. Here is how to size a
      sheet vinyl order.
    </p>

    <h2>Linear feet, not square feet</h2>
    <p>
      Sheet vinyl ships from the manufacturer in long rolls. The
      home center cuts your purchase off the roll by the linear
      foot — so the price quote is &quot;$3.50/lin ft&quot; on a
      12-ft-wide roll, which works out to about $0.29/ft² before
      waste. The number you actually buy is linear feet, not
      square feet.
    </p>
    <p>
      Common roll widths:
    </p>
    <ul>
      <li><strong>12 ft (standard residential).</strong> Covers
        most rooms in a single piece. Default for kitchens,
        baths, and bedrooms.</li>
      <li><strong>6 ft (narrow).</strong> Cheaper per linear foot
        but only useful for halls, small baths, and powder
        rooms. Wider rooms need seams.</li>
      <li><strong>13&apos;2&quot; (European wide).</strong> Rare
        in the US — special-order. Useful for large rooms where
        12 ft would force a seam.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/vinyl-calculator">vinyl calculator</Link>
      {' '}returns linear feet of roll plus the matching square
      yards and total square footage purchased.
    </p>

    <h2>The seam decision</h2>
    <p>
      The shorter dimension of your room versus the roll width
      tells you whether you need a seam:
    </p>
    <ul>
      <li><strong>Shorter side ≤ roll width:</strong> covers
        seamlessly. Buy linear feet equal to the longer side
        plus 10% trim waste.</li>
      <li><strong>Shorter side &gt; roll width:</strong> need
        more than one strip and at least one seam. Sealed with
        chemical seam sealer (a solvent that fuses the edges).</li>
    </ul>
    <p>
      In a 14×10 ft kitchen with a 12-ft roll, the short side is
      10 ft — under 12 ft, so no seam, and you buy 14 lin ft × 1.10
      = ~16 lin ft. In a 14×16 ft living room, the short side is
      14 ft — over 12 ft, so you need two strips of 16 lin ft
      each, plus a seam.
    </p>

    <h2>Felt-back vs fiberglass-back</h2>
    <p>
      Two construction types dominate the market and they
      install differently.
    </p>
    <ul>
      <li><strong>Felt-back vinyl ($0.80-1.50/ft²):</strong>{' '}
        gets fully glued to the subfloor. Permanent install —
        harder to remove later but the most durable bond.
        Susceptible to moisture damage at the felt layer if water
        gets under it.</li>
      <li><strong>Fiberglass-back / loose-lay ($1.50-3.00/ft²):
        </strong> only needs perimeter adhesive or double-sided
        tape, sometimes free-floating in small rooms. Easier
        DIY, easier to replace later, dimensionally stable.
        Standard for new residential installs.</li>
    </ul>

    <h2>Pattern repeat eats more material</h2>
    <p>
      Solid-color or random-textured vinyl wastes about 10% on
      cuts and trim. Printed sheet vinyl with a tile pattern,
      wood-plank graphic, or geometric repeat needs 15% — the
      pattern has to align across cuts, and at any seam.
    </p>
    <p>
      The repeat distance prints on the spec sheet (typically
      36-72 inches depending on the design). For a printed
      pattern with a 60-inch repeat in a room with seams, you
      lose up to 5 ft per strip just to the alignment shuffle.
      The calculator&apos;s pattern toggle bumps the waste
      factor to cover this.
    </p>

    <h2>Subfloor prep</h2>
    <p>
      Sheet vinyl reads every flaw in the substrate. The thinner
      the vinyl, the more it telegraphs.
    </p>
    <ul>
      <li>Drag a 6-foot straightedge across the subfloor — high
        spots get sanded, low spots get filled with floor
        leveler.</li>
      <li>Patch nail heads, screw heads, and any protrusions
        flush.</li>
      <li>Over concrete: moisture-test the slab. Vinyl traps
        moisture, and trapped moisture lifts the adhesive bond.</li>
      <li>Over plywood: 1/4-inch luan underlayment is the
        traditional substrate. Modern luan-free vinyls relax that
        requirement, but a smooth substrate always reads
        better.</li>
    </ul>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting the toilet flange and pipes.</strong>{' '}
      In a bathroom install, you cut around the toilet flange
      and any vertical pipes. Add 6 inches per pipe to the
      linear-feet order — you&apos;ll cut a slit to slide the
      vinyl past, then patch from the offcut. Skip this and
      you&apos;ll come up an inch short at the awkward time.
    </p>
    <p>
      <strong>Underestimating closets.</strong> A 4×6 walk-in
      adds 24 ft² that doesn&apos;t show up on the room
      dimensions. Walk every closet and add its area separately
      before ordering.
    </p>
    <p>
      <strong>Buying yardage instead of linear feet.</strong>{' '}
      Some retailers quote $/yd² (carpet-style pricing) on sheet
      vinyl. To convert: yd² × 9 ÷ roll width = linear feet. A
      20-yd² order on a 12-ft roll is 15 linear feet — short for
      a room over 13 feet long. Always confirm the unit before
      paying.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much sheet vinyl for a 10×12 kitchen?</strong>
      {' '}One strip of 12-ft roll, 12 lin ft long × 1.10 = 13-14
      lin ft. About 156 ft² of vinyl purchased to cover 120 ft²
      of floor — the extra is trim waste.
    </p>
    <p>
      <strong>Is sheet vinyl waterproof?</strong> The vinyl
      itself is waterproof. The seams and the perimeter are not
      — water that gets under the sheet through a bad seam, an
      un-caulked toilet base, or a missed expansion gap can lift
      the adhesive. Caulk all penetrations.
    </p>
    <p>
      <strong>How long does sheet vinyl last?</strong>{' '}
      Builder-grade: 8-12 years. Mid-grade fiberglass-back: 15-20
      years. Premium printed-and-protective-layer vinyl: 25+
      years before it shows wear at high-traffic spots.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/vinyl-calculator" style={{ color: 'var(--hi-vis)' }}>vinyl calculator</Link>{' '}
      uses standard 10% trim waste (15% for patterns) and assumes
      strips run the long room dimension. Real waste depends on
      pattern repeat distance and irregular room shapes —
      confirm with the install specs before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'sheet-vinyl-flooring-guide',
  title: 'Sheet Vinyl Flooring — Linear Feet, Seams, and Waste',
  metaTitle: 'How Much Sheet Vinyl Flooring Do You Need — Linear Foot Math | ProjectCalc',
  metaDesc: 'Sheet vinyl flooring math: linear feet off the roll, when you need a seam, felt-back vs fiberglass-back, and the subfloor prep that makes the install last.',
  excerpt: 'Sheet vinyl is the cheapest waterproof flooring you can buy — but the math is per linear foot of roll, and the roll width decides whether you need a seam. Here is how to size the order.',
  date: '2026-04-29',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['vinyl-calculator', 'hardwood-calculator', 'carpet-calculator'],
  Body,
};

export default post;
