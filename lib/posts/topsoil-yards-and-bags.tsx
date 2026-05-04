import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Topsoil math is the same volume formula as mulch or gravel:
      area times depth, divided by 324 to get cubic yards. The
      decisions that matter are quality (what&apos;s actually in the
      soil), depth (different for raised beds vs lawn fill vs
      topdressing), and bulk vs bagged. Here&apos;s the practical
      version with what to check at the supply yard before they
      load the truck.
    </p>

    <h2>The volume formula</h2>
    <p>
      All soil and aggregate sold by the yard uses this:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      cubic yards = area_ft² × depth_in ÷ 324
    </p>
    <p>
      <strong>Example:</strong> a raised bed 8 ft × 4 ft, filled to
      6 in. (8 × 4 × 6) ÷ 324 = 192 ÷ 324 = 0.59 yd³. Round up to
      a yard for delivery (most yards have a 1-yard minimum) or
      buy <strong>22 bags of 40 lb topsoil</strong> at a home center
      (~0.75 ft³ per bag).
    </p>
    <p>
      The <Link href="/topsoil-calculator">topsoil calculator</Link>
      {' '}runs this and tells you when bulk delivery beats bags on
      cost.
    </p>

    <h2>Depth by use case</h2>
    <ul>
      <li><strong>Raised vegetable bed:</strong> 8-12 in deep — vegetables need root depth, especially carrots, parsnips, and tomatoes</li>
      <li><strong>Raised flower bed:</strong> 6-8 in is plenty for annuals and most perennials</li>
      <li><strong>New lawn over graded subsoil:</strong> 4-6 in of topsoil before seed or sod</li>
      <li><strong>Lawn fill (low spots, settling repairs):</strong> 2-4 in, then re-seed</li>
      <li><strong>Topdressing existing lawn:</strong> 0.25-0.5 in per pass — improves soil over time without smothering grass</li>
      <li><strong>Berms and grade changes:</strong> Whatever the design needs, but stop above the trunk flare on existing trees (suffocates roots)</li>
    </ul>
    <p>
      For raised beds specifically, the cheapest fill strategy is the
      &ldquo;hügelkultur&rdquo; layered approach: branches and logs at
      the bottom (free, decomposes over years), compost in the middle,
      premium topsoil only at the top 6-8 in where the roots actually
      grow. Cuts topsoil order in half.
    </p>

    <h2>What &ldquo;topsoil&rdquo; actually means at the yard</h2>
    <p>
      Topsoil isn&apos;t a regulated term. What you get varies wildly:
    </p>
    <ul>
      <li><strong>Screened topsoil:</strong> Run through a 1/2-inch screen to remove rocks, roots, debris. Most common bulk product. $25-40/yd³ delivered.</li>
      <li><strong>Pulverized topsoil:</strong> Screened plus mechanically ground for fine texture. $35-50/yd³. Better for seeding lawns.</li>
      <li><strong>Topsoil blend:</strong> Topsoil mixed with compost (30-50% organic). $45-70/yd³. Premium for raised beds.</li>
      <li><strong>Garden soil / planting mix:</strong> Heavily amended with compost, peat, sometimes fertilizer. $60-100/yd³. Best for vegetables.</li>
      <li><strong>Fill dirt:</strong> Subsoil or excavation spoil. NOT topsoil — no organic matter, won&apos;t grow grass. Cheapest at $15-25/yd³ but only useful for raising grade or filling holes.</li>
    </ul>
    <p>
      Ask before ordering: &ldquo;Is this screened topsoil or fill?&rdquo;
      A surprising amount of &ldquo;topsoil&rdquo; sold cheap is
      actually fill dirt with a different label. Eyeball the pile —
      good topsoil is dark brown to black, crumbly, and smells slightly
      earthy. Fill is gray or yellow-tan and packs hard.
    </p>

    <h2>Bulk vs bagged — the breakeven</h2>
    <p>
      The math heavily favors bulk past about 1 cubic yard:
    </p>
    <ul>
      <li><strong>Bagged 40 lb (0.75 ft³ each):</strong> $5-8 per bag at home centers. 1 yd³ = 36 bags = $180-290 plus 36 trips lifting bags.</li>
      <li><strong>Bulk delivered:</strong> $25-50 per yd³ delivered. Same 1 yd³ = $25-50, dumped wherever you can have a 5-yard pile.</li>
    </ul>
    <p>
      Bagged makes sense under 1 yd³ (about 36 bags) — when you
      can&apos;t justify a delivery fee, when the project is in a tight
      space without dump access, or when matching a premium amended
      mix the bulk yard doesn&apos;t carry. Past 1 yd³, bulk wins by
      4-6×.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Order 10-15% extra.</strong> Soil compacts during
      delivery and again as you spread it. A yard ordered loose
      becomes 0.85-0.9 yd³ once installed and watered. Round up.
    </p>
    <p>
      <strong>Stage the dump on a tarp.</strong> Topsoil dumped on
      grass kills the lawn under it within a day. Tarp the dump zone,
      pile the dirt on the tarp, drag the tarp away when finished.
      Saves resodding the dump area afterward.
    </p>
    <p>
      <strong>Time delivery to a dry day.</strong> Wet topsoil weighs
      30% more, compacts harder, and is impossible to spread evenly.
      Same yard of soil is half the work to install dry.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much does a yard of topsoil weigh?</strong> About
      1,800-2,400 lb depending on moisture and organic content. A
      pickup bed legally hauls about half a yard.
    </p>
    <p>
      <strong>How much topsoil for a 200 ft² raised bed at 10 in?</strong>
      {' '}(200 × 10) ÷ 324 = 6.2 yd³. Order 7 yd³ to allow for
      compaction.
    </p>
    <p>
      <strong>Is bagged topsoil sterilized?</strong> Some brands are
      heat-treated; most aren&apos;t. For seed-starting mixes, look
      for products labeled sterile. For raised beds and lawns, regular
      topsoil with weed-seed potential is fine — you&apos;ll be weeding
      anyway.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Mulch on top of the soil?</strong> Run the{' '}
      <Link href="/mulch-calculator" style={{ color: 'var(--hi-vis)' }}>mulch calculator</Link>
      {' '}for the same project — mulch goes on at 2-3 in over fresh
      topsoil to reduce weeds and water loss.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'topsoil-yards-and-bags',
  title: 'Topsoil — How Many Yards (or Bags) Do You Need',
  metaTitle: 'Topsoil Calculator Math — Yards, Bags, and What to Buy | ProjectCalc',
  metaDesc: 'How much topsoil for raised beds, lawn fill, and topdressing. Volume math, depth by use case, screened vs blend, bulk vs bagged breakeven.',
  excerpt: 'Topsoil math is volume — area times depth divided by 324. The decisions are quality, depth, and bulk vs bagged. Here is the practical version with what to check at the yard.',
  date: '2026-05-03',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['topsoil-calculator', 'mulch-calculator', 'gravel-calculator'],
  Body,
};

export default post;
