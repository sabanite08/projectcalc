import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Rebar in a concrete slab does one job: hold the slab together
      after it cracks. Concrete cracks — that&apos;s a chemical
      certainty, not a quality issue — and the rebar grid stops the
      cracks from opening into trip hazards or structural failures.
      The math for ordering is simple. Spacing and bar size are the
      decisions that drive cost. Here&apos;s the practical version for
      driveways, patios, garage floors, and shed pads.
    </p>

    <h2>The grid math</h2>
    <p>
      Rebar in slabs runs in two directions, perpendicular to each
      other, forming a grid:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      bars_long  = ceil(width ÷ spacing) + 1{'\n'}
      bars_short = ceil(length ÷ spacing) + 1{'\n'}
      total_linft = (bars_long × length) + (bars_short × width)
    </p>
    <p>
      <strong>Example:</strong> a 20 × 12 ft patio with 18 in OC
      grid. Spacing in feet = 1.5. Bars long direction = ceil(12/1.5) + 1
      = 9 bars × 20 ft = 180 ft. Bars short direction = ceil(20/1.5) + 1
      = 15 bars × 12 ft = 180 ft. Total = 360 linear feet, or
      <strong> 18 sticks of 20 ft rebar</strong>.
    </p>
    <p>
      The <Link href="/rebar-calculator">rebar calculator</Link>
      {' '}does this and adds total weight by bar size so you can
      compare lumber-yard pricing.
    </p>

    <h2>Pick the bar size — #3, #4, or #5</h2>
    <p>
      Three sizes cover residential slab work. Each is named by the
      diameter in eighths of an inch:
    </p>
    <ul>
      <li><strong>#3 (3/8 in, 0.38 lb/ft):</strong> Sidewalks, light-duty slabs, ties for column cages. Cheapest. Bends by hand. Not strong enough for vehicle slabs.</li>
      <li><strong>#4 (1/2 in, 0.67 lb/ft):</strong> The residential default. Patios, garage floors, sheds, basement slabs. Bends with a manual bender or bar of pipe.</li>
      <li><strong>#5 (5/8 in, 1.04 lb/ft):</strong> Driveways, heavier garage slabs, slabs supporting masonry walls. Needs a hydraulic bender.</li>
    </ul>
    <p>
      For most homeowner slabs, <strong>#4 at 18 in OC</strong> is the
      right answer. Stepping up to #5 doubles the steel weight but
      barely improves crack control unless the slab is taking vehicle
      loads.
    </p>

    <h2>Pick the spacing — 12, 18, or 24 in OC</h2>
    <p>
      Spacing controls how tight the grid is and therefore how small
      the cracks stay when concrete shrinks:
    </p>
    <ul>
      <li><strong>12 in OC:</strong> Driveways, slabs supporting columns, slabs in expansive soil. Maximum crack control. Doubles material vs 24 OC.</li>
      <li><strong>18 in OC:</strong> Patios, garage floors, basement slabs. Standard residential. Good balance of cost and crack control.</li>
      <li><strong>24 in OC:</strong> Sidewalks, garden paths, decorative slabs without vehicle loads. Cheapest grid that still meets ACI 318 minimum reinforcement for crack control.</li>
    </ul>
    <p>
      Tighter than 12 in OC is rarely useful for residential — beyond
      that, you&apos;re adding cost without adding crack resistance.
      Looser than 24 in is also a problem: cracks can open wider than
      1/8 in before the bars engage.
    </p>

    <h2>Wire mesh vs rebar — when each works</h2>
    <p>
      <strong>Welded wire mesh</strong> (typically 6×6 W2.9 or 6×6
      W4.0) is the cheaper alternative for thin slabs (under 4 in)
      and light-duty applications like patios. It comes in flat sheets
      or rolls, ships pre-spaced, and saves the hour of tying rebar.
    </p>
    <p>
      Mesh fails because it&apos;s impossible to keep in the middle
      of the slab during the pour. Workers walk on it and push it to
      the bottom, where it does nothing. <strong>Rebar on chairs</strong>
      {' '}stays at the right height. For any slab over 4 in, take the
      extra time and use rebar.
    </p>
    <p>
      Fiber-reinforced concrete is a third option — synthetic or
      steel fibers mixed into the concrete itself. It controls
      micro-cracking better than mesh or rebar but doesn&apos;t replace
      rebar for structural reinforcement on driveways and load-bearing
      slabs.
    </p>

    <h2>Cover and chair use — the part that gets skipped</h2>
    <p>
      Rebar at the bottom of a slab does nothing — the bars must sit
      <strong> in the middle of the slab thickness</strong> (or 1/3
      down from the top for slabs that bend that direction). ACI 318
      cover minimums:
    </p>
    <ul>
      <li>3 in clear cover from the bottom (slab on grade, against earth)</li>
      <li>1.5 in clear cover from the top (finished surface)</li>
    </ul>
    <p>
      Use <strong>rebar chairs</strong> — small plastic or wire stands
      that hold the rebar at the right height while concrete is poured
      around it. Place chairs every 4 ft along each bar. Skipping
      chairs and assuming the workers will lift the bars during the
      pour is the #1 reason DIY slabs fail at 5 years.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Tie, don&apos;t weld.</strong> Welding rebar in the field
      damages the steel and creates stress concentrations that crack
      first. Use 16-gauge wire ties at every intersection — a tying
      gun ($150) makes this 10x faster than hand ties.
    </p>
    <p>
      <strong>Lap splices for long bars.</strong> Rebar comes in 20 ft
      sticks. For a slab longer than 20 ft, overlap two bars by 40
      bar diameters (20 in for #4, 25 in for #5). Tie the overlap. Don&apos;t
      butt-weld or short-lap.
    </p>
    <p>
      <strong>Bend on site, not at the yard.</strong> Yards charge a
      premium for pre-bent bars. A manual rebar bender from the home
      center is $30 and bends #3-#5 cleanly. Order straight 20 ft
      sticks and bend in the field.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much rebar for a 20 × 20 garage slab?</strong>
      {' '}At 18 in OC #4: 30 sticks of 20 ft rebar (600 linear feet,
      ~400 lb). Drop to 12 in OC for vehicle loads and that climbs
      to about 44 sticks.
    </p>
    <p>
      <strong>Do I need rebar in a 4 in patio?</strong> Technically
      not for structure if the soil is well-compacted, but yes for
      crack control. Mesh is acceptable; rebar is better.
    </p>
    <p>
      <strong>Can I just throw rebar in after pouring?</strong> No —
      &ldquo;throwing it in&rdquo; (pulling rebar up into wet
      concrete with a hook) almost always leaves the bars at random
      depths. Lay the grid on chairs first, then pour. There&apos;s
      no shortcut.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Order the concrete in the same trip.</strong> Use the{' '}
      <Link href="/concrete-calculator" style={{ color: 'var(--hi-vis)' }}>concrete calculator</Link>
      {' '}to size the cubic yards (or 80 lb bags) for the same slab
      so the truck and the rebar arrive together.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'rebar-for-concrete-slabs',
  title: 'Rebar for Concrete Slabs — Spacing, Size, and How Much',
  metaTitle: 'Rebar Calculator Math — Slab Grid, Sizes, and Spacing | ProjectCalc',
  metaDesc: 'Rebar for residential concrete slabs. Grid math, when to use #3 / #4 / #5 bars, 12 vs 18 vs 24 in OC spacing, and what beats wire mesh.',
  excerpt: 'Rebar in a slab does one job: hold the slab together after it cracks. The math for ordering is simple. Spacing and bar size are the decisions that drive cost.',
  date: '2026-05-03',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['rebar-calculator', 'concrete-calculator', 'cmu-block-calculator'],
  Body,
};

export default post;
