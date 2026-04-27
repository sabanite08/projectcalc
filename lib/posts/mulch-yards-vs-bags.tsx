import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Bagged mulch is convenient. Bulk by the yard is dramatically cheaper.
      The crossover where bulk wins isn&apos;t obvious — it depends on how much
      you need, how far you have to haul it, and whether you have a way to
      move it from a driveway pile to the beds. Here&apos;s the actual breakeven
      math plus how deep you should lay it.
    </p>

    <h2>The math: bags vs yards</h2>
    <p>
      One cubic yard of mulch = 13.5 bags of 2 ft³ (the standard bag size at
      home centers).
    </p>
    <p>
      <strong>Cost comparison in 2026:</strong>
    </p>
    <ul>
      <li>Bagged mulch at Home Depot/Lowe&apos;s: $3.50–5.00 per 2 ft³ bag → <strong>$47–67 per yard</strong></li>
      <li>Bulk delivered from landscape supplier: $25–45 per yard + delivery fee</li>
      <li>Bulk picked up at landscape yard (you haul): $20–35 per yard</li>
    </ul>
    <p>
      For a small bed needing ½ yard, bagged is barely more expensive ($25 vs
      $15 in material) and avoids the delivery fee. Above 1 yard, bulk
      becomes obviously cheaper.
    </p>
    <p>
      <strong>Practical breakeven:</strong> if you need 2+ cubic yards, get
      bulk delivered. If you need under 1 yard, just buy bags. The 1–2 yard
      range is a judgment call based on whether you can pick up bulk yourself.
    </p>

    <h2>How deep should mulch be?</h2>
    <p>
      Depth matters more than most people realize. Too shallow and weeds
      come through; too deep and you suffocate roots.
    </p>
    <ul>
      <li><strong>2–3 inches:</strong> Standard depth for established beds with shrubs and perennials. The sweet spot.</li>
      <li><strong>3 inches:</strong> Around trees. <em>Never pile against the trunk</em> — keep a 3-inch gap between mulch and bark to prevent rot ("mulch volcano" disease).</li>
      <li><strong>1 inch:</strong> New gardens with annuals or seedlings. Heavier mulch crushes young plants.</li>
      <li><strong>4–6 inches:</strong> Pine straw only. It compresses and breaks down faster, so it needs more depth to start.</li>
    </ul>
    <p>
      Use the <Link href="/mulch-calculator">mulch calculator</Link> to figure
      cubic yards based on bed area and depth.
    </p>

    <h2>Which mulch type?</h2>
    <p>
      They all suppress weeds and hold moisture. The differences are
      aesthetic, longevity, and acidity.
    </p>
    <ul>
      <li><strong>Hardwood (shredded):</strong> Most common, breaks down in 1–2 years, neutral pH. Default choice.</li>
      <li><strong>Cedar/cypress:</strong> Lasts 2–3 years, repels some insects, more expensive. Good for beds you don&apos;t want to redo every year.</li>
      <li><strong>Pine bark nuggets:</strong> Lasts 3–4 years, stays in place better on slopes. Floats during heavy rain — bad for steep beds.</li>
      <li><strong>Pine straw:</strong> Cheap, lightweight, common in the South. Tilted aesthetic — looks great around acid-loving plants (azaleas, blueberries) and weird around boxwoods.</li>
      <li><strong>Dyed mulch (black, brown, red):</strong> Color holds longer than natural. Made from chipped pallets and construction wood, often with low-quality dye. Works visually but breaks down to dust faster.</li>
      <li><strong>Rubber mulch:</strong> Doesn&apos;t break down, expensive, debate around chemical leaching. Skip for garden beds; fine for playgrounds.</li>
    </ul>

    <h2>How much do you actually need?</h2>
    <p>
      Quick reference at 3 inches depth:
    </p>
    <ul>
      <li>100 ft² (10×10 bed) → 1 cubic yard / 13–14 bags</li>
      <li>250 ft² → 2.3 yd³ / 31 bags</li>
      <li>500 ft² → 4.6 yd³ / 62 bags</li>
      <li>1,000 ft² → 9.3 yd³ / 125 bags (definitely bulk delivery)</li>
    </ul>
    <p>
      For comparison: an average suburban front yard has 200–400 ft² of beds.
      A heavily landscaped property can easily hit 1,500+ ft² of bed area.
    </p>

    <h2>When to mulch (and when not to)</h2>
    <p>
      Best time: early spring, before plants leaf out, after the last hard
      freeze. The mulch insulates roots as the ground warms. Avoid mulching
      while the ground is still frozen — you&apos;ll trap cold in.
    </p>
    <p>
      Mid-summer is fine for refreshing thinning beds, but plants are stressed
      and you have to be careful not to bury low foliage. Fall mulching is
      controversial — some experts say it insulates roots; others say it
      provides hiding spots for rodents to chew bark over winter.
    </p>

    <h2>Refresh, don&apos;t replace</h2>
    <p>
      Common mistake: completely removing old mulch each spring before adding
      new. The old layer is decomposing and feeding your soil — leaving it is
      good. Just rake it loose to break up matted spots, then top up with
      fresh to maintain 2–3 inches total depth.
    </p>
    <p>
      If old mulch has crusted into a hard mat that water beads off of, break
      it up with a rake first so water can penetrate. If it&apos;s growing thick
      mold or fungus, remove and replace — but that&apos;s rare in healthy beds.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many bags of mulch in a yard?</strong> 13.5 bags of 2 ft³,
      so most stores will tell you 14. If buying by the bag, you&apos;ll pay
      roughly 1.5–2× what bulk delivery costs.
    </p>
    <p>
      <strong>What does a yard of mulch weigh?</strong> 400–800 lbs depending
      on moisture content. Wet hardwood mulch can hit 1,000+ lbs. Most pickup
      trucks can legally haul 1 yard.
    </p>
    <p>
      <strong>Is bulk delivery worth it?</strong> Above 2 yards, yes. Below
      that, the delivery fee ($50–100) often eats the savings.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/mulch-calculator" style={{ color: 'var(--hi-vis)' }}>mulch calculator</Link>{' '}
      converts bed area + depth to cubic yards plus the equivalent bag count.
      Need gravel or topsoil instead? The{' '}
      <Link href="/gravel-calculator" style={{ color: 'var(--hi-vis)' }}>gravel calculator</Link>{' '}
      handles those.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'mulch-yards-vs-bags',
  title: 'Mulch by the Yard or by the Bag? When Each Wins',
  metaTitle: 'Mulch by the Yard or Bag — Cost, Depth & When to Switch | ProjectCalc',
  metaDesc: 'When bulk mulch beats bagged: real 2026 prices, depth rules, mulch types compared, and the breakeven point where delivery makes sense.',
  excerpt: 'Bagged mulch is convenient. Bulk by the yard is dramatically cheaper. The crossover where bulk wins isn\'t obvious — it depends on volume, hauling, and depth. Here\'s the breakeven math.',
  date: '2026-04-26',
  readTime: 5,
  category: 'home',
  relatedCalcs: ['mulch-calculator', 'gravel-calculator', 'sod-calculator'],
  Body,
};

export default post;
