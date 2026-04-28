import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Concrete masonry units — blocks, in plain English — are
      sold by the count, not the square footage. Most homeowners
      and even a fair number of contractors miscount their first
      job because they confuse nominal size (the name on the
      pallet) with the actual face dimension. Here's the fix.
    </p>

    <h2>The 1.125 rule</h2>
    <p>
      Standard 8×8×16 CMU has a face dimension of 16 in × 8 in
      with a 3/8 in mortar joint baked in. That works out to
      0.889 ft² per block face, which means{' '}
      <strong>1.125 blocks per square foot of wall</strong>. So a
      wall 30 ft long × 8 ft tall = 240 ft² × 1.125 = 270 blocks.
      Add 5% waste for breakage and cuts and you order 284.
    </p>
    <p>
      The block depth (4, 6, 8, or 12 in) doesn't change the face
      math — only the wall thickness, the rebar spacing, and the
      block weight. A 4×8×16 partition block has the same 1.125
      ratio as an 8×8×16 structural block.
    </p>

    <h2>Mortar — 3 bags per 100 blocks</h2>
    <p>
      Standard estimate is <strong>three 80-lb bags of Type S
      mortar per 100 blocks</strong> at a 3/8 in joint. Type S is
      the spec for load-bearing CMU walls (1,800 psi compressive
      strength). For below-grade foundations or high-seismic
      zones, an engineer may upgrade to Type M (2,500 psi). Type
      N (750 psi) is too weak for structural CMU and should not
      be used.
    </p>
    <p>
      The{' '}
      <Link href="/cmu-block-calculator">CMU block calculator
      </Link>{' '}automatically returns mortar bags alongside
      block count.
    </p>

    <h2>Rebar — when and how much</h2>
    <p>
      Most jurisdictions require rebar in any CMU wall over 8 ft
      tall, every retaining wall, every basement wall, and every
      wall in seismic zones D1 or D2 (most of California, Oregon,
      Washington, parts of Utah and Nevada, and pockets of the
      East). Per IRC R606 and IBC Chapter 21, the typical
      non-engineered residential pattern is:
    </p>
    <ul>
      <li><strong>#4 (½ in) vertical rebar at 4 ft on center</strong>{' '}
        grouted into the cells, plus one extra at each corner and
        opening jamb</li>
      <li><strong>#4 horizontal in every fourth course bond
        beam</strong> (every 32 in vertically), tied to the
        verticals</li>
    </ul>
    <p>
      Cells around rebar must be grouted solid with masonry grout
      (not mortar — different mix, higher slump, pumpable). Plan
      on roughly 1 ft³ of grout per 8 vertical bars for an 8-ft
      wall.
    </p>

    <h2>Bond pattern affects the count</h2>
    <p>
      Running bond — the half-block offset every course — is the
      standard pattern and what the calculator assumes. Stack
      bond (every block aligned vertically) needs more horizontal
      reinforcement because there's no interlocking shear path
      between courses. Soldier courses, decorative caps, and
      sailor pieces usually take their counts in pairs and burn
      extra cuts.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting half-block at the ends.</strong> Every
      wall in running bond ends with half-blocks at every other
      course. If you don't count them as full blocks (which is
      what suppliers sell — you cut them on site), you'll come up
      short. The calculator's 5% waste covers this.
    </p>
    <p>
      <strong>Skipping the bond beam.</strong> A wall over 8 ft
      tall without horizontal reinforcement at the top course is
      a hazard during framing — the top can rack out of plumb
      under wind load before the slab or roof ties it down. Run a
      bond beam regardless of code minimums.
    </p>
    <p>
      <strong>Mixing mortar and grout.</strong> Both are cement
      products but they're not the same. Mortar bonds blocks
      together at the bed and head joints; masonry grout fills
      the cells around rebar. Grout has higher water content and
      a finer aggregate so it pumps and self-consolidates.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many CMU blocks per pallet?</strong> 90-108 for
      8×8×16 standard, depending on supplier. Pallets weigh
      ~3,500 lb each — order curb delivery with the truck's lift
      gate, not in your pickup.
    </p>
    <p>
      <strong>Can I dry-stack CMU?</strong> Surface bonding
      cement (parged on both faces) lets you dry-stack a non-
      structural wall, but every load-bearing or code-regulated
      wall needs traditional mortar joints.
    </p>
    <p>
      <strong>What's the difference between 8x8x16 and 8x16x16?
      </strong> 8x8x16 is the standard size; 8x16x16 (sometimes
      called "double-height") doubles the face height to 16 in,
      cuts your block count in half, and is used in bond beams
      and lintels. They're not interchangeable in pattern.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/cmu-block-calculator" style={{ color: 'var(--hi-vis)' }}>CMU block calculator</Link>{' '}
      uses standard non-engineered residential rules. Load-bearing
      walls, retaining walls over 4 ft, basement walls, and any
      design in a seismic zone need a structural engineer's stamp
      — verify before ordering or pouring.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'cmu-block-count',
  title: 'CMU Blocks — How Many Per Wall',
  metaTitle: 'CMU Block Count — Blocks, Mortar, Rebar | ProjectCalc',
  metaDesc: 'Concrete block count per wall using the 1.125-per-square-foot rule. Mortar bags, rebar pattern, common errors, code minimums.',
  excerpt: 'CMU is sold by the count, not the square foot. The 1.125-per-ft² rule, three-bags-per-100-blocks mortar math, and when rebar is required.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['cmu-block-calculator', 'mortar-grout-calculator', 'concrete-calculator'],
  Body,
};

export default post;
