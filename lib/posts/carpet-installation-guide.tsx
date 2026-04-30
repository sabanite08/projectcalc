import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Carpet sells by the square yard from rolls 12 or 15 feet
      wide, and the roll width determines whether your room
      covers seamlessly or needs a seam. Get the math wrong and
      you either pay for unusable carpet or end up with a seam
      running across your living room. Here is the right way to
      size a carpet order.
    </p>

    <h2>Square yards, not square feet</h2>
    <p>
      Carpet pricing is almost always per yd² at retail —
      $2-8/yd² for builder-grade, $8-25/yd² for premium nylon and
      wool. Warehouse and remnant outlets sometimes quote per ft²
      to look cheaper, so always convert before comparing:
    </p>
    <ul>
      <li><strong>1 yd² = 9 ft².</strong> A 12×15 ft room (180
        ft²) is 20 yd² before waste.</li>
      <li><strong>10% waste minimum</strong> for cuts, pattern
        matching, and seam allowance.</li>
      <li><strong>Add 15% for patterned carpet</strong> — the
        repeat has to align across seams.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/carpet-calculator">carpet calculator</Link>
      {' '}gives both yd² and ft² and applies the 10% waste
      automatically.
    </p>

    <h2>Roll width and seams</h2>
    <p>
      Standard residential carpet ships in <strong>12-ft
      rolls</strong> — wide enough to cover most bedrooms with no
      seam. <strong>15-ft rolls</strong> exist for large rooms
      but cost more per yard and are stocked in fewer styles.
      Commercial broadloom is often 6 ft. The rule is simple:
    </p>
    <ul>
      <li>If your shorter room dimension is at or under the roll
        width, you cover seamlessly.</li>
      <li>If it&apos;s over the roll width, you need at least one
        seam — and you pay $1-3/lin ft for the installer to seam
        it.</li>
    </ul>
    <p>
      For a 14×16 ft living room with 12-ft carpet, you need an
      extra 2-ft strip of carpet plus a seam along the long
      direction. The calculator flags whether your room needs a
      seam based on dimensions and roll width.
    </p>

    <h2>Where seams should fall</h2>
    <p>
      Seams are unavoidable in larger rooms. Where they go
      matters more than whether they exist.
    </p>
    <ul>
      <li><strong>Out of sight lines.</strong> Run seams
        perpendicular to the main door so you walk along them,
        not across them.</li>
      <li><strong>Under furniture or low traffic.</strong>{' '}
        Plan the layout so seams fall under sofas, beds, or
        against the longest wall.</li>
      <li><strong>Pile direction matters.</strong> Both pieces of
        a seam must have the pile running the same way or the
        seam will read as a stripe in raking light.</li>
      <li><strong>Cut-pile hides seams; loop pile shows them.
        </strong> Berber seams are visible for the life of the
        carpet. Plush, frieze, and Saxony hide seams much better.</li>
    </ul>

    <h2>Pad — required, not optional</h2>
    <p>
      Carpet pad doubles the life of the carpet by absorbing
      footfall impact, adds insulation (R-value 1.5-2.0), and is
      required by virtually every carpet warranty. Pad spec
      depends on use:
    </p>
    <ul>
      <li><strong>Bedrooms:</strong> 7/16" thick, 6 lb density —
        the residential standard rebond pad.</li>
      <li><strong>Living rooms and stairs:</strong> 3/8" thick,
        8 lb density — firmer, holds up to high traffic and
        prevents pad compression on stair nosings.</li>
      <li><strong>Basements over concrete:</strong> moisture
        barrier pad with a sealed plastic film on the slab side.
        Skip this and you&apos;ll get mold under the carpet
        within two seasons.</li>
    </ul>
    <p>
      Pad is sold in the same yardage as the carpet — match the
      carpet square yardage and you&apos;ll have enough.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting closets.</strong> Closet floors get
      carpeted as part of the bedroom install, but the dimensions
      rarely show up on the room measure. A 4×6 walk-in adds 24
      ft² (about 2.7 yd²) that the calculator misses unless you
      add it.
    </p>
    <p>
      <strong>Skipping the diagram.</strong> Sketch the room with
      door locations and roll layout before ordering. Some rooms
      cover with no seam if the carpet runs north-south but need
      a seam east-west — the orientation can save a strip of
      carpet.
    </p>
    <p>
      <strong>Buying based on the showroom sample.</strong>{' '}
      Showroom samples are 18×18 inches; the carpet looks
      different at scale. Bring a 2×3 ft sample home and put it
      on the floor in the actual room before ordering 30 yards
      of it.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many yards of carpet for a 12×15 room?</strong>
      {' '}180 ft² × 1.10 (waste) = 198 ft², or 22 yd². With
      12-ft carpet, no seam needed.
    </p>
    <p>
      <strong>Should I install carpet myself?</strong> Bedrooms
      with no seam — possibly. Living rooms with seams or stairs
      — no. Power-stretching carpet correctly takes a kicker, a
      power stretcher, and practice. Bad stretches show up as
      ripples within a year.
    </p>
    <p>
      <strong>How long does carpet last?</strong> Builder-grade
      polyester: 5-8 years. Mid-grade nylon: 10-15 years.
      Premium wool: 20-30 years. The pad usually outlasts the
      carpet by one full replacement cycle.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/carpet-calculator" style={{ color: 'var(--hi-vis)' }}>carpet calculator</Link>{' '}
      uses a standard 10% waste factor and a single-seam
      assumption. Real seam count depends on room shape and roll
      orientation — confirm with the installer before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'carpet-installation-guide',
  title: 'Carpet — Square Yards, Pad, and Seams',
  metaTitle: 'How Much Carpet Do You Need — Yards, Seams, Pad | ProjectCalc',
  metaDesc: 'How to size a carpet order: square yards, roll widths, where seams fall, pad spec by room. Avoid the seam running across your living room.',
  excerpt: 'Carpet sells by the square yard from rolls 12 or 15 feet wide, and the roll width decides whether your room needs a seam. Here is the right way to size the order.',
  date: '2026-04-29',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['carpet-calculator', 'hardwood-calculator', 'vinyl-calculator'],
  Body,
};

export default post;
