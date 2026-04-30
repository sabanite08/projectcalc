import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Luxury vinyl plank (LVP) and rigid-core SPC have taken over
      the residential flooring market by being cheaper than
      hardwood, more waterproof than laminate, and easier to
      install than tile. But the click-lock format and core
      construction mean the math is different from nail-down
      hardwood. Here is how to size a vinyl order.
    </p>

    <h2>Square footage + waste factor</h2>
    <p>
      Click-lock LVP and SPC waste less than nail-down hardwood
      because the offcut from the end of one row can start the
      next row — as long as the offcut is over 8 inches. Standard
      waste factors:
    </p>
    <ul>
      <li><strong>Straight install — 8%.</strong> Click-lock with
        minimal offset. Cuts at start and end of each row.</li>
      <li><strong>Offset plank — 10%.</strong> The default
        installer pattern with random or 1/3-plank offsets.</li>
      <li><strong>Diagonal or herringbone — 15%.</strong> Every
        end is angled and the pattern lays at 45° to the walls.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/vinyl-calculator">vinyl calculator</Link>
      {' '}applies the right waste factor based on the pattern
      you select.
    </p>

    <h2>LVP, SPC, WPC — what you&apos;re actually buying</h2>
    <p>
      All click-lock plank vinyl, but the cores differ and that
      affects price, durability, and subfloor tolerance.
    </p>
    <ul>
      <li><strong>LVP (flexible PVC core):</strong> the cheapest
        option, 4-6mm thick. Telegraphs every dip and bump in the
        subfloor — needs a near-perfect substrate. Best for
        budget bedroom installs over flat plywood.</li>
      <li><strong>WPC (wood-plastic composite):</strong> foam-like
        core, warm underfoot, 6-8mm thick. Quieter than LVP but
        dents under heavy furniture legs. Mid-tier price.</li>
      <li><strong>SPC (stone-plastic composite):</strong> rigid
        composite core, 4-7mm thick. Handles uneven subfloors,
        heavy traffic, and water exposure. Most new installs in
        2026 are SPC. Premium price but cheap insurance.</li>
    </ul>

    <h2>Plank width and length</h2>
    <p>
      LVP plank widths run 5"-9" and lengths 36"-60". Wider and
      longer reads more like real hardwood but is harder to
      install over uneven subfloors — a 9" wide plank shows the
      smallest hump in the subfloor as a visible high spot.
      Common sizes:
    </p>
    <ul>
      <li><strong>7" × 48":</strong> the standard LVP plank,
        ~2.33 ft²/plank.</li>
      <li><strong>9" × 60":</strong> wide-plank trend, ~3.75
        ft²/plank, fewer planks per box.</li>
      <li><strong>5" × 36":</strong> narrow strip look, ~1.25
        ft²/plank, more planks per box but slower install.</li>
    </ul>

    <h2>Boxes, underlayment, and subfloor prep</h2>
    <p>
      LVP boxes typically cover <strong>22-28 ft²</strong> — read
      the actual box label. The calculator uses 24 ft²/box as a
      planning average. Three things are not included in the
      square-foot count:
    </p>
    <ul>
      <li><strong>Underlayment.</strong> Most rigid-core SPC has
        attached IXPE foam or cork — adding more voids the
        warranty. Bare-back LVP needs separate 1mm foam
        underlayment, sold in 100 ft² rolls.</li>
      <li><strong>Vapor barrier.</strong> Required over concrete
        subfloors. 6-mil poly sheeting, taped at the seams.
        Skip this and you&apos;ll get cupping and mold within
        two seasons.</li>
      <li><strong>Transitions and quarter-round.</strong>{' '}
        T-moldings, reducers, and stair nosings sell by the
        linear foot in matched colors. Order with the flooring —
        color matches across orders are inconsistent.</li>
    </ul>

    <h2>The expansion gap nobody plans for</h2>
    <p>
      Floating click-lock floors expand and contract with
      humidity. Every install needs a <strong>1/4" to 3/8"
      expansion gap</strong> around the perimeter, at vertical
      pipes, and against any immovable object — door frames,
      cabinets, fireplace hearths. The gap hides under baseboards
      or quarter-round trim and is invisible after the install.
    </p>
    <p>
      Skip the expansion gap and the floor buckles in summer
      humidity. The fix at that point is pulling the floor and
      reinstalling — there is no patch.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Skipping subfloor flatness check.</strong> LVP and
      laminate spec a maximum 3/16" variation per 10-foot run.
      Drag a 10-foot straightedge across the subfloor; high spots
      get sanded, low spots get self-leveling compound. This is
      the single biggest difference between a smooth install and
      a clicky, springy floor.
    </p>
    <p>
      <strong>Mixing boxes from different lots.</strong> Even
      &quot;same color&quot; boxes from different production
      runs can vary subtly. Open all boxes before install and
      shuffle planks across boxes to randomize any color drift.
    </p>
    <p>
      <strong>Forgetting the door undercut.</strong> Floating
      floors raise the finish height by 1/4"-1/2"; doors that
      cleared the old floor will drag on the new one. Plan to
      undercut door jambs (use a flush-cut saw with a scrap of
      flooring as a height guide) and trim door bottoms before
      install day.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much LVP for a 12×15 room?</strong> 180 ft² ×
      1.10 (offset waste) = 198 ft² to buy, which is 9 boxes at
      24 ft²/box average.
    </p>
    <p>
      <strong>Can LVP go in a bathroom?</strong> Yes — SPC and
      most modern LVP are fully waterproof and rated for wet
      areas. Use 100% silicone caulk at tubs, toilets, and
      showers; standard caulk fails in standing water.
    </p>
    <p>
      <strong>Can I install LVP over existing tile?</strong>{' '}
      Yes if the tile is flat and well-bonded. Fill grout lines
      over 1/8" wide with leveling compound. SPC handles minor
      tile texture better than flexible LVP.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/vinyl-calculator" style={{ color: 'var(--hi-vis)' }}>vinyl calculator</Link>{' '}
      uses standard waste factors and an average box coverage of
      24 ft². Real coverage varies by product — read the box
      label and confirm subfloor flatness before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'vinyl-plank-flooring-guide',
  title: 'Vinyl Plank Flooring — LVP, SPC, and Waste',
  metaTitle: 'How Much Vinyl Plank Flooring Do You Need — LVP Math | ProjectCalc',
  metaDesc: 'Vinyl plank flooring math: square footage, waste factors, LVP vs SPC vs WPC, expansion gaps, and the subfloor prep that makes or breaks the install.',
  excerpt: 'LVP and SPC waste less than hardwood because the offcut starts the next row — as long as you plan the layout. Here is how to size a vinyl plank order.',
  date: '2026-04-29',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['vinyl-calculator', 'hardwood-calculator', 'carpet-calculator'],
  Body,
};

export default post;
