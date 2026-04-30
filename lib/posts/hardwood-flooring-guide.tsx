import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Hardwood is sold by the box but installed plank by plank,
      and plank dimensions drive both the count you order and the
      look of the finished floor. A 100 ft² room takes 60 planks
      of 5"×48" wide-plank, or 200 planks of 2.25" strip oak —
      same square footage, very different jobs. Here is the right
      way to size a hardwood order.
    </p>

    <h2>Square footage + waste factor</h2>
    <p>
      The base number is room length × width. From there, the
      waste factor depends on the install pattern:
    </p>
    <ul>
      <li><strong>Straight install — 10%.</strong> Planks run the
        long dimension of the room with no offset. Cuts only at
        the start and end of each row.</li>
      <li><strong>Offset plank — 12%.</strong> The standard
        staggered look on most hardwood floors. Half-plank or
        third-plank offsets at row starts add cuts that increase
        waste.</li>
      <li><strong>Diagonal or herringbone — 15%.</strong> Every
        end is an angled cut and every row meets the wall at 45°.
        The highest-waste pattern by far.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/hardwood-calculator">hardwood calculator</Link>
      {' '}applies the right waste factor based on the pattern
      you select.
    </p>

    <h2>Plank width and length matter</h2>
    <p>
      Hardwood comes in nominal widths from 2.25" strip up to 7"
      extra-wide plank. Wider planks lay faster and read more
      modern, but they waste more material at room edges — a 7"
      plank ripped down to fit the last row produces 5-6 inches
      of waste; a 3.25" plank ripped to fit produces 1-2 inches.
    </p>
    <p>
      Plank length is usually random — boxes mix short and long
      pieces to encourage natural-looking offsets. Spec sheets
      give you the average length:
    </p>
    <ul>
      <li><strong>36" average:</strong> short random — common in
        budget and reclaimed boards. More end-joints in the
        finished floor.</li>
      <li><strong>48" average:</strong> the standard for most
        prefinished hardwood.</li>
      <li><strong>60-72" average:</strong> long-plank product,
        usually a premium upgrade. Quieter underfoot and fewer
        visible end-joints.</li>
    </ul>

    <h2>Boxes vs planks</h2>
    <p>
      Hardwood boxes typically cover <strong>18-25 ft²</strong>{' '}
      depending on plank size — read the actual box label. The
      calculator uses 22 ft²/box as a planning average. When
      buying:
    </p>
    <ul>
      <li>Round box count up — never down. You can&apos;t buy
        half a box.</li>
      <li>Buy from the same dye lot. Even prefinished hardwood
        from a major manufacturer varies subtly between
        production runs.</li>
      <li>Order one extra box beyond the calculator total for
        future repairs. Same-lot replacement is impossible to
        find a year later.</li>
    </ul>

    <h2>Solid vs engineered</h2>
    <p>
      Material count is the same — both ship by the box at
      similar coverages — but the install method differs and
      affects what subfloor you need.
    </p>
    <ul>
      <li><strong>Solid hardwood:</strong> 3/4" thick, nail-down
        only, requires a wood subfloor. Can be sanded and
        refinished 4-6 times over decades.</li>
      <li><strong>Engineered hardwood:</strong> 3/8"-5/8" thick
        with a real-wood top veneer over a plywood core. Floats,
        glues, or nails. Works over concrete and below-grade.
        Refinishable 1-2 times depending on top veneer
        thickness.</li>
    </ul>
    <p>
      The waste factors are identical for both. What changes is
      whether you need to add 6-mil poly vapor barrier over
      concrete (engineered, yes — solid, not applicable since you
      can&apos;t install over slab).
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting closets.</strong> A 12×14 bedroom with a
      4×6 closet adds 24 ft² (15% extra) that doesn&apos;t show
      up on the room dimensions. Walk and add every closet
      separately.
    </p>
    <p>
      <strong>Skipping the acclimation period.</strong> Hardwood
      needs 5-7 days in the room before install so it
      equilibrates to the home&apos;s humidity. Skip this and
      planks will gap in winter and cup in summer. Stack the
      sealed boxes in the install room — don&apos;t open them
      until install day.
    </p>
    <p>
      <strong>Underestimating transitions.</strong> T-moldings,
      reducers, stair nosings, and quarter-round all sell by the
      linear foot in matched colors. Measure all doorways, stair
      edges, and the room perimeter separately and order them
      with the flooring — color matches across orders are
      hit-or-miss.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much hardwood do I need for a 12×12 room?
      </strong> 144 ft² × 1.12 (offset install) = 162 ft² to buy,
      which is about 8 boxes at 22 ft² average coverage.
    </p>
    <p>
      <strong>Should I match plank width to room size?</strong>
      {' '}Wide-plank (5"+) suits rooms 12 ft and wider. In rooms
      under 10 ft, wide planks make the floor read like only 2-3
      boards across — strip or 3.25" looks more proportional.
    </p>
    <p>
      <strong>Can I install solid hardwood over concrete?</strong>
      {' '}No — solid hardwood needs a wood subfloor for nail
      holding power. Use engineered hardwood with floating or
      glue-down install over concrete instead.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/hardwood-calculator" style={{ color: 'var(--hi-vis)' }}>hardwood calculator</Link>{' '}
      uses standard waste factors and an average box coverage of
      22 ft². Real coverage varies by product — read the box
      label and confirm the dye lot before buying.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'hardwood-flooring-guide',
  title: 'Hardwood Flooring — Planks, Boxes, and Waste',
  metaTitle: 'How Much Hardwood Flooring Do You Need — Plank Math | ProjectCalc',
  metaDesc: 'How to size a hardwood order: square footage, plank dimensions, box coverage, waste factors. Solid vs engineered, dye lots, and the cuts nobody plans for.',
  excerpt: 'Hardwood is sold by the box but installed plank by plank, and plank width and length drive the count. Here is the right way to size a hardwood order — and the cuts nobody plans for.',
  date: '2026-04-29',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['hardwood-calculator', 'vinyl-calculator', 'carpet-calculator'],
  Body,
};

export default post;
