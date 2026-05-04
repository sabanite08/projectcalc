import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The pavers are the part you see — the gravel base and sand bed
      under them are the part that decides whether your patio is still
      flat in three years. The math for both is simple, but the depths
      change with what&apos;s rolling over the patio. Here&apos;s how to
      size the base, the bedding, and the joint sand without
      overpaying or coming up short.
    </p>

    <h2>The base formula</h2>
    <p>
      All paver-base material — gravel, sand, anything sold by the
      yard — uses the same volume math:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      cubic yards = (area_ft² × depth_in) ÷ 324
    </p>
    <p>
      The 324 converts inch-feet to yards (12 in × 27 ft³ per yd³).
      It&apos;s the same divisor for any landscape material sold by the
      yard.
    </p>
    <p>
      <strong>Example:</strong> a 120 ft² patio with a 4 in compacted
      gravel base. (120 × 4) ÷ 324 = 1.48 yd³ of base. Plus a 1 in
      sand bed: (120 × 1) ÷ 324 = 0.37 yd³. Total order: about
      1.85 yd³ — but order 2 yd³ to cover compaction loss and edges.
    </p>
    <p>
      The <Link href="/paver-sand-calculator">paver base & sand
      calculator</Link> does this for you and adjusts depth by project
      type.
    </p>

    <h2>How deep should the gravel base be?</h2>
    <p>
      Base depth scales with what&apos;s rolling on top:
    </p>
    <ul>
      <li><strong>Patio (foot traffic only):</strong> 4 in compacted gravel</li>
      <li><strong>Walkway (foot traffic, occasional wheelbarrow):</strong> 4 in</li>
      <li><strong>Light driveway (passenger vehicles):</strong> 8 in</li>
      <li><strong>Heavy driveway (trucks, RVs):</strong> 10-12 in</li>
    </ul>
    <p>
      The numbers come from ICPI residential install guidelines. The
      jump from patio to driveway is large because vehicle weight cycles
      the base material — every pass squeezes air out and the surface
      drops. Underbuilt driveway bases dip into ruts within two years.
    </p>
    <p>
      Frost-heave climates (anywhere with freezing winters) push these
      numbers higher. In Minnesota or Vermont, add 2 in to every depth
      above. The Frost Action chapter of any state DOT spec book has
      the depth-per-zone table if you want the local number.
    </p>

    <h2>Compaction — the step DIYers skip</h2>
    <p>
      Loose gravel poured 4 in deep compacts to about 3 in. If you
      don&apos;t compact, the patio settles unevenly under foot traffic
      and rocks visibly within a season. The fix:
    </p>
    <ul>
      <li>Lay the gravel in <strong>2 in lifts</strong> (passes), not all at once</li>
      <li>Compact each lift with a <strong>plate compactor</strong> (rentable for $40-60/day)</li>
      <li>3-4 passes per lift, perpendicular directions</li>
      <li>Wet the gravel lightly before compacting — water lubricates the angular pieces into place</li>
    </ul>
    <p>
      Order an extra 15-20% of base gravel beyond the calculator number
      to cover the compaction loss. The math returns finished volume,
      not loose-load volume.
    </p>

    <h2>Bedding sand vs joint sand — they&apos;re not the same</h2>
    <p>
      <strong>Bedding sand</strong> is the 1 in screed layer that the
      pavers sit on. Use clean, sharp <strong>concrete sand</strong>
      (ASTM C-33) or stone dust. Avoid mason sand or play sand —
      they&apos;re too fine and pump out from under the pavers when
      saturated.
    </p>
    <p>
      <strong>Joint sand</strong> is what fills the gaps between pavers
      after they&apos;re laid. Two choices:
    </p>
    <ul>
      <li><strong>Plain mason sand:</strong> $5-8 per 50 lb bag. Washes out in heavy rain. Weeds germinate in it within a year.</li>
      <li><strong>Polymeric joint sand:</strong> $25-35 per 50 lb bag. Has polymer binders that activate when wetted and set up like soft mortar. Resists washout, weeds, and ant colonization for 5-10 years.</li>
    </ul>
    <p>
      Polymeric coverage is roughly 75 ft² per 50 lb bag for typical
      3/8 in joints with standard pavers. For tight 1/8 in joints with
      slabs, coverage doubles to ~150 ft²/bag. Manufacturer charts on
      the bag label give the exact number for your paver size.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Order base in bulk, not bags.</strong> A yard of gravel
      from a landscape supply yard is $30-50 delivered. The same volume
      in 60 lb bags from a home center is $200+ and 30 trips to the
      car. Bulk delivery requires somewhere to dump it — driveway works.
    </p>
    <p>
      <strong>Buy bedding sand and base gravel from the same yard.</strong>
      {' '}They deliver together, and the yard rounds up to the nearest
      half-yard at no extra charge. Splitting orders across home center
      and yard adds shipping each time.
    </p>
    <p>
      <strong>Tarp the polymeric sand.</strong> One unexpected rain on
      an unswept polymeric job locks the sand into a hard crust on
      the paver faces that takes pressure-washing to remove. Tarp the
      patio for 24 hours after sweeping in the sand and before the
      activation watering.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>Can I use sand instead of gravel for the base?</strong>
      {' '}No. Sand doesn&apos;t compact into a stable structure under
      load — it just shifts. Gravel base, sand bedding. Always.
    </p>
    <p>
      <strong>How much does a yard of gravel weigh?</strong> About
      2,400-2,800 lb. A standard pickup bed legally hauls about half a
      yard. Get it delivered.
    </p>
    <p>
      <strong>Polymeric sand on a slope?</strong> Yes — it&apos;s
      actually better than plain sand on slopes because it doesn&apos;t
      wash downhill in the first heavy rain.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Get the paver count in the same trip.</strong> Use the{' '}
      <Link href="/paver-calculator" style={{ color: 'var(--hi-vis)' }}>paver calculator</Link>{' '}
      to size the pavers themselves so you can pick up everything from
      the supply yard in one delivery.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'paver-base-and-sand-yards',
  title: 'Paver Base and Sand — How Much to Order',
  metaTitle: 'Paver Base & Sand Calculator Math — Yards and Bags | ProjectCalc',
  metaDesc: 'How to size the gravel base, bedding sand, and polymeric joint sand for a paver patio. Depths by use, compaction, and what to skip.',
  excerpt: 'The pavers are what you see. The gravel base and sand bed under them decide whether the patio is still flat in three years. Here is how to size both — without overpaying or coming up short.',
  date: '2026-05-03',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['paver-sand-calculator', 'paver-calculator', 'retaining-wall-calculator'],
  Body,
};

export default post;
