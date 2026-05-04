import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      A 20-ft long, 2-ft tall retaining wall is one of the most
      satisfying weekend projects in the landscape — it solves a
      drainage problem and looks finished the same day. The math for
      block count is simple. The math for whether you need an engineer
      is more important. Here&apos;s both.
    </p>

    <p style={{ padding: 12, background: 'rgba(255, 100, 100, 0.08)', borderLeft: '2px solid #c44', fontSize: 13 }}>
      <strong>Estimate only.</strong> This guide and the calculator
      cover unreinforced gravity walls under 4 ft of exposed face.
      Anything taller, anything holding back a slope steeper than 1:3,
      or anything supporting a structure above needs engineered design
      and likely a permit. Verify your local code before building.
    </p>

    <h2>The block count formula</h2>
    <p>
      Block walls are stacked in courses (rows). The math is:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      blocks_per_course = wall_length_in ÷ block_length_in{'\n'}
      courses = wall_height_in ÷ block_height_in{'\n'}
      total_blocks = blocks_per_course × courses
    </p>
    <p>
      <strong>Example:</strong> a 20 ft long × 2 ft tall wall using
      standard 16×6×10 in retaining wall blocks. (20 × 12) ÷ 16 = 15
      blocks per course. (2 × 12) ÷ 6 = 4 courses. 15 × 4 = 60 blocks
      total. Plus 15 cap blocks for the top course finish. Round up to
      a full pallet from the supplier.
    </p>
    <p>
      The <Link href="/retaining-wall-calculator">retaining wall
      calculator</Link> handles three common block sizes and adds the
      cap count and base gravel automatically.
    </p>

    <h2>Block sizes — what your home center actually stocks</h2>
    <p>
      Retaining wall blocks come in three rough size classes. Heavier
      blocks build taller stable walls but each one is a wheelbarrow
      trip:
    </p>
    <ul>
      <li>
        <strong>Small landscape (12×4×8 in, ~25 lb):</strong> Pavestone
        Anchor Highland Stone and similar. Good for walls up to ~2 ft.
        Easy to handle solo. Uses more pieces per ft of wall.
      </li>
      <li>
        <strong>Standard (16×6×10 in, ~60 lb):</strong> Allan Block,
        Anchor Diamond, and most home-center generic SKUs. Good for
        walls up to 4 ft. Two-handed lift.
      </li>
      <li>
        <strong>Large (18×6×12 in, ~85 lb):</strong> Built for engineered
        walls 4-8 ft with geogrid reinforcement. One block per
        wheelbarrow trip. Order delivered to the site, not to the
        garage.
      </li>
    </ul>
    <p>
      Cap blocks are a separate SKU at every size — typically 4 in tall
      with a flat top. Don&apos;t skip them: they finish the wall
      visually and shed water away from the joint between the top two
      courses.
    </p>

    <h2>Why 4 ft is the magic number</h2>
    <p>
      The IRC (International Residential Code) section R404.5 lets
      homeowners build retaining walls up to 4 ft of exposed face
      without an engineer or permit in most jurisdictions. Above 4 ft,
      three things change:
    </p>
    <ul>
      <li>The lateral earth pressure at the base roughly doubles vs a 2 ft wall — gravity blocks alone won&apos;t hold</li>
      <li>You need geogrid soil reinforcement extending back into the slope (typically 6-8 ft of geogrid for an 8 ft wall)</li>
      <li>A licensed engineer needs to size the geogrid layout and stamp the design</li>
    </ul>
    <p>
      Some jurisdictions (California, parts of New England) drop the
      threshold to 3 ft or even 2 ft. <strong>Call your local building
      department before you buy a single block.</strong> The fee for a
      permit is $150-400. The fee for tearing out an unpermitted wall
      after a code complaint is the cost of the wall plus the
      engineering you should have done.
    </p>

    <h2>Base prep — the step that prevents the wall from leaning</h2>
    <p>
      A retaining wall that leans isn&apos;t failing at the blocks —
      it&apos;s failing at the base. The standard build:
    </p>
    <ol>
      <li><strong>Dig a trench</strong> 6 in deep × 12 in wider than the block (so 22 in wide for a 10 in deep block)</li>
      <li><strong>Add 6 in of compacted gravel</strong> (3/4 in minus or paver base) — compact in 2 in lifts</li>
      <li><strong>Bury the first course</strong> at least 1 in below grade — every additional ft of wall height adds another inch buried</li>
      <li><strong>Backfill the back of each course</strong> with drainage gravel (3/4 in clean stone), not the original soil</li>
      <li><strong>Run a drain pipe</strong> at the base behind the bottom course on any wall over 2 ft — perforated 4 in PVC daylit at one end</li>
    </ol>
    <p>
      Skipping the buried first course is the #1 reason DIY walls lean
      forward. The wall has to push back against the soil below grade
      to resist the soil pushing forward above grade. Without that
      buried anchor, the only thing holding it up is friction between
      the blocks.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Order 5% extra blocks.</strong> Block edges chip in
      transit and during install. A 5% pad covers the ones you have
      to flip or set aside. Most yards take returns on full pallets
      only — order one extra pallet if you&apos;re close.
    </p>
    <p>
      <strong>Use a string line, not a level, for the long axis.</strong>
      {' '}A 4-ft level on a 20 ft wall accumulates error. Drive stakes
      at each end, run mason&apos;s string at the top course height, and
      check every block against the string.
    </p>
    <p>
      <strong>Sweep concrete adhesive between caps.</strong> Caps are
      heavy enough to stay put under foot traffic but kids and
      lawnmowers will knock them off. A bead of polyurethane construction
      adhesive between the cap and the top course locks them in.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>Do I need to set the blocks back as I go up?</strong>
      {' '}Most modern segmental blocks have a built-in setback lip on
      the back face — the wall self-batters about 1 in per course.
      That&apos;s why they hold a slope better than vertical brick walls.
    </p>
    <p>
      <strong>Can I use mortar between courses?</strong> No. Gravity
      retaining wall blocks are designed to flex slightly — mortar
      cracks under the same loads the dry-stack joints absorb. Caps
      get adhesive, not mortar.
    </p>
    <p>
      <strong>How long does a wall like this last?</strong> Properly
      built with a compacted gravel base and back drainage,
      30-50 years. Failures are almost always traced back to
      base prep or missing drainage, not the blocks themselves.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only — not engineered design.</strong> The{' '}
      <Link href="/retaining-wall-calculator" style={{ color: 'var(--hi-vis)' }}>retaining wall calculator</Link>{' '}
      handles unreinforced gravity walls under 4 ft. For taller walls,
      walls supporting structures, or walls in soft/expansive soil,
      get a licensed engineer to design the reinforcement and stamp
      the plan.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'retaining-wall-block-count',
  title: 'Retaining Wall Block Math (and When You Need an Engineer)',
  metaTitle: 'Retaining Wall Block Calculator — Counts, Caps, and Base | ProjectCalc',
  metaDesc: 'How to estimate retaining wall blocks, caps, and base gravel. The 4-ft rule, base prep, and what makes DIY walls lean.',
  excerpt: 'A 20-ft long, 2-ft tall retaining wall is one of the most satisfying weekend builds. The block math is simple — the math on whether you need an engineer is more important. Here is both.',
  date: '2026-05-03',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['retaining-wall-calculator', 'paver-calculator', 'paver-sand-calculator'],
  Body,
};

export default post;
