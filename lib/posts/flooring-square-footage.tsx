import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Flooring is sold by the square foot but installed in
      patterns that waste material at different rates. Buy the
      bare floor area and you'll come up short by the second day.
      Buy too generous and you've got a few unreturnable boxes
      stacked in the garage. Here's the right way to size the
      order.
    </p>

    <h2>Floor area + waste factor</h2>
    <p>
      The base number is room length × width. From there the
      waste factor depends on the install pattern:
    </p>
    <ul>
      <li><strong>Straight install — 10%.</strong> Planks running
        the long dimension of the room, no offset pattern. Cuts
        only at start, end, and around obstacles.</li>
      <li><strong>Offset plank — 12%.</strong> Standard staggered
        pattern (most LVP, hardwood, laminate). The half-plank
        offsets at row starts add cuts that increase waste.</li>
      <li><strong>Diagonal or herringbone — 15%.</strong> Every
        end is an angled cut, and the pattern lays out at 45° so
        every row has more waste at the walls. Highest material
        consumption pattern.</li>
    </ul>
    <p>
      The{' '}
      <Link href="/flooring-calculator">flooring calculator</Link>
      {' '}applies the right waste factor based on the pattern
      you select.
    </p>

    <h2>Boxes vs square feet</h2>
    <p>
      Flooring is sold by the box, not by the square foot. Most
      LVP, laminate, and engineered hardwood boxes cover roughly
      <strong> 20 ft²</strong> — close enough for a planning
      estimate. The actual coverage prints on the box (usually
      18-24 ft² depending on plank length and width). When buying:
    </p>
    <ul>
      <li>Round box count <strong>up</strong> — never down. You
        can't buy half a box.</li>
      <li>Buy from the same dye lot. Boxes manufactured weeks or
        months apart can vary subtly in color even with identical
        SKUs.</li>
      <li>Order one extra box beyond the calculator's count if
        the lot is closing out. Same-lot replacement boxes are
        impossible to find later.</li>
    </ul>

    <h2>What the floor area number doesn't include</h2>
    <p>
      Three things eat material that nobody plans for:
    </p>
    <ul>
      <li><strong>Underlayment.</strong> Foam underlayment is sold
        in 100 ft² rolls; cork in 200 ft² rolls. Match coverage to
        the floor area without waste — underlayment laps don't
        waste like flooring cuts do.</li>
      <li><strong>Transitions, T-molding, reducers, stair nosings.
        </strong> Sold by the linear foot in matched colors.
        Measure all doorways and stair edges separately.</li>
      <li><strong>Quarter-round or shoe molding.</strong> Wraps
        the perimeter where the floor meets the wall. Measure
        the room perimeter minus doorways and add 10%.</li>
    </ul>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting closets.</strong> A 12×14 bedroom with a
      4×6 closet adds 24 ft² (15% of the room) that doesn't show
      up on the room dimensions. Walk every closet and add its
      area separately.
    </p>
    <p>
      <strong>Using the wrong waste factor.</strong> The
      installer's waste factor depends on whether they're using
      every offcut as a row-start (lower waste, takes more time)
      or just trashing offcuts under 6 inches (higher waste,
      faster). Pros run lower waste; first-timers should plan for
      the high end.
    </p>
    <p>
      <strong>Skipping the box-coverage check.</strong> Long
      planks (60-72 inches) cover more square feet per box than
      short planks (36 inches) of the same width. Two boxes of
      "20 ft²" flooring can actually be 18 and 22 ft². Read the
      label.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much flooring do I need for a 12x12 room?
      </strong> 144 ft² × 1.10 (straight install) = 159 ft² to
      buy, which is 8 boxes at 20 ft² average coverage.
    </p>
    <p>
      <strong>Should I buy extra for repairs?</strong> Yes — keep
      one full box of every flooring product in storage. Boards
      that get damaged years later are nearly impossible to match
      from a different lot.
    </p>
    <p>
      <strong>Can I return unopened boxes?</strong> Big-box stores
      generally accept unopened boxes within 90 days with
      receipt. Specialty flooring stores often charge a 15-25%
      restocking fee. Buy from a place with a generous return
      policy if you're cutting it close.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/flooring-calculator" style={{ color: 'var(--hi-vis)' }}>flooring calculator</Link>{' '}
      uses standard waste factors and an average box coverage of
      20 ft². Real coverage varies by product — read the box
      label and confirm the dye lot before buying.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'flooring-square-footage',
  title: 'Flooring — Square Footage and Waste',
  metaTitle: 'How Much Flooring Do You Need — Square Footage Math | ProjectCalc',
  metaDesc: 'How to size a flooring order: room area + waste factor (10/12/15% by pattern), box math, transitions, dye lots. The boxes nobody plans for.',
  excerpt: 'Flooring sells by the square foot but installs in patterns that waste material at different rates. Here is the right way to size the order — including the boxes nobody plans for.',
  date: '2026-04-27',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['flooring-calculator', 'tile-calculator', 'drywall-calculator'],
  Body,
};

export default post;
