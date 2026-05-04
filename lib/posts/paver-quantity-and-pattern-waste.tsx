import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Paver math looks simple — patio area divided by paver area, done.
      But the laying pattern can swing your order by 15-20%, and that's
      the difference between finishing on a Sunday and a second trip to
      the supply yard on Monday morning. Here's the actual math, the
      pattern tax nobody mentions on the bag, and what to round up to.
    </p>

    <h2>The base formula</h2>
    <p>
      Pavers are sold individually or by the pallet, and each one
      covers a known area. The math is:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      pavers = (length × width) ÷ paver_ft² × waste_factor
    </p>
    <p>
      <strong>Example:</strong> a 12×10 ft patio with 6×9 in standard
      pavers in a straight bond. Patio area = 120 ft². A 6×9 paver is
      54 in² = 0.375 ft². 120 ÷ 0.375 = 320 pavers before waste. At 5%
      straight-bond waste, you order 336. Round up to the nearest
      bundle from your supplier.
    </p>
    <p>
      The <Link href="/paver-calculator">paver calculator</Link> handles
      all seven common sizes and three pattern waste factors so you
      don&apos;t have to memorize coverage charts.
    </p>

    <h2>Common paver sizes — what they actually cover</h2>
    <p>
      Home centers stock more sizes than they used to. Coverage per ft²
      drives both the price and the labor:
    </p>
    <ul>
      <li><strong>4×8 in (brick format):</strong> 4.5/ft² — classic look, slowest to lay, most cuts</li>
      <li><strong>6×6 in:</strong> 4/ft² — square modular, easy borders</li>
      <li><strong>6×9 in (standard):</strong> 2.67/ft² — most common patio paver, good speed</li>
      <li><strong>8×8 in:</strong> 2.25/ft² — square, fewer pieces, larger joints visible</li>
      <li><strong>12×12 in (slab):</strong> 1/ft² — fastest install, modern look, heavier per piece</li>
      <li><strong>12×24 in (large slab):</strong> 0.5/ft² — fewest pieces, needs a perfectly flat base</li>
    </ul>
    <p>
      Larger pavers go faster but punish a bad base. A 1/4 in dip under
      a 4×8 paver settles unnoticed; the same dip under a 12×24 slab
      rocks every time someone steps on it.
    </p>

    <h2>The pattern tax — what costs the most in cuts</h2>
    <p>
      Waste factor is the line item nobody talks about until they
      run short. It&apos;s driven entirely by how the perimeter pieces
      have to be cut.
    </p>
    <p><strong>Straight bond (running bond):</strong> 5% waste.</p>
    <ul>
      <li>Pavers run in clean rows, perpendicular to the edges</li>
      <li>Only the perimeter row needs cutting — and only on two sides if your patio is rectangular</li>
      <li>Default for any homeowner doing their first paver job</li>
    </ul>
    <p><strong>45° diagonal:</strong> 15% waste.</p>
    <ul>
      <li>Every perimeter piece is a triangle cut</li>
      <li>Looks more upscale, hides slight wall-out-of-square issues</li>
      <li>Triple the cut time vs straight bond</li>
    </ul>
    <p><strong>Herringbone:</strong> 20% waste.</p>
    <ul>
      <li>Strongest pattern for driveways — the interlock resists tire scuff</li>
      <li>Every edge piece is a custom triangle cut</li>
      <li>Pros use it on high-traffic areas; DIYers should rent a wet saw before committing</li>
    </ul>
    <p>
      The 15-20% numbers come from ICPI (Interlocking Concrete Pavement
      Institute) install guides and match what landscape contractors
      actually order on real jobs.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Order by the pallet, not the piece.</strong> Pavers ship in
      pallets of 100-144 ft² depending on size. Loose pavers cost more
      per piece and are usually overstock from broken pallets. Order
      one extra pallet if you&apos;re close to the line — the supplier will
      take it back unopened, and a return trip costs more than the
      restocking fee.
    </p>
    <p>
      <strong>Match the dye lot.</strong> Concrete pavers vary slightly
      in color across production batches. Pros take all their pavers
      from the same lot number printed on the pallet wrap. If you have
      to mix lots, blend pavers from different pallets as you lay them
      so the variation looks intentional.
    </p>
    <p>
      <strong>Cut last, lay full pieces first.</strong> Lay all the full
      pavers in the field, then come back and cut perimeter pieces in
      one wet-saw session. Saves blade wear and gives you a clean
      reference line for every cut.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many pavers in a pallet?</strong> Depends on size — a
      pallet of 6×9 standard pavers covers about 100 ft² (267 pavers).
      A pallet of 12×12 slabs covers about 120 ft² (120 pavers).
    </p>
    <p>
      <strong>Do I need to subtract for the joint width?</strong> No —
      manufacturer ft²/paver figures already account for a standard
      1/8 in joint. Sand-set installations don&apos;t add measurable area
      to the joints.
    </p>
    <p>
      <strong>Can I just buy 5% extra and skip the pattern math?</strong>
      {' '}For straight bond, yes. For diagonal or herringbone, no —
      you&apos;ll be 10-15% short and that&apos;s the worst place to be at
      4 PM on Sunday.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Don&apos;t forget the base.</strong> Pavers are only as flat
      as what&apos;s under them. Use the{' '}
      <Link href="/paver-sand-calculator" style={{ color: 'var(--hi-vis)' }}>paver base & sand calculator</Link>{' '}
      to size your gravel base and bedding sand for the same project.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'paver-quantity-and-pattern-waste',
  title: 'How Many Pavers — and the Pattern Tax Nobody Mentions',
  metaTitle: 'How Many Pavers Do I Need? Pattern Waste Math | ProjectCalc',
  metaDesc: 'Paver count math plus the 15-20% pattern waste nobody mentions on the bag. Sizes, formulas, and what pros do differently.',
  excerpt: 'Patio area divided by paver area looks simple — but the laying pattern can swing your order by 20%. Here is the actual math, the pattern tax, and what to round up to.',
  date: '2026-05-03',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['paver-calculator', 'paver-sand-calculator', 'retaining-wall-calculator'],
  Body,
};

export default post;
