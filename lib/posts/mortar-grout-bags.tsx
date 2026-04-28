import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Mortar and grout are the two cement-based mixes that hold a
      masonry job together — but they're not interchangeable, and
      the bag math is different for each. Here's the practical
      version, with the numbers actual masons use at the supply
      house.
    </p>

    <h2>Mortar vs grout — what's the difference</h2>
    <p>
      <strong>Mortar</strong> is the bedding material between
      bricks, blocks, or stone. It's mixed thick enough to hold a
      shape on the trowel and supports the structural load above.
      Type N is the all-purpose mix above grade (750 psi). Type S
      is for load-bearing or below-grade work (1,800 psi). Type M
      is the heaviest, used for foundations and chimneys (2,500
      psi).
    </p>
    <p>
      <strong>Grout</strong> is the thinner mix that fills tile
      joints or pumps into hollow CMU cells around rebar. Tile
      grout in particular is what most homeowners are buying when
      they say "grout" — sanded for joints 1/8 in and wider,
      unsanded for tighter joints on polished or scratch-prone
      tile.
    </p>

    <h2>Brick mortar — the 7-bag rule</h2>
    <p>
      The standard estimate is <strong>7 bags of 80-lb mortar
      per 1,000 modular brick</strong> at a 3/8 in joint. That
      maps to roughly 30 brick per bag once you account for tooling
      loss and partial bags at the end of the day. The rule moves
      with joint thickness:
    </p>
    <ul>
      <li>1/4 in joint → ~9 bags per 1,000 brick</li>
      <li>3/8 in joint → 7 bags per 1,000 brick (standard)</li>
      <li>1/2 in joint → ~5 bags per 1,000 brick</li>
    </ul>
    <p>
      Counterintuitive at first — wider joints use less mortar per
      brick because each brick takes up more wall area, so you
      lay fewer bricks per square foot. A 1/2 in joint reduces
      brick count from 6.86/ft² to about 6.4/ft².
    </p>
    <p>
      Run the count on the{' '}
      <Link href="/mortar-grout-calculator">mortar and grout
      calculator</Link> — it pairs with the{' '}
      <Link href="/brick-calculator">brick calculator</Link> so
      you get bricks and mortar in one trip to the yard.
    </p>

    <h2>Tile grout — joint volume drives the bag count</h2>
    <p>
      Grout coverage is more sensitive to joint size than most
      people realize. The volume of grout per square foot of
      tile is:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      grout per ft² = (tile_w + tile_l) ÷ (tile_w × tile_l)
      × 144 × joint_w × joint_d
    </p>
    <p>
      Larger tiles use less grout per area because the joint
      length per square foot drops. A 12×12 floor at a 1/8 in
      joint (1/4 in deep) needs about 0.75 in³ of grout per ft².
      The same wall in 4×4 mosaic at a 1/4 in joint burns 4.5
      in³/ft² — six times the grout for the same square footage.
    </p>

    <h2>Sanded vs unsanded</h2>
    <p>
      <strong>Sanded grout</strong> is the default for floor and
      most field tile. It uses fine silica sand to bulk up the
      mix, resist shrinkage cracks at wider joints, and survive
      foot traffic. Joints from 1/8 in up to 1/2 in.
    </p>
    <p>
      <strong>Unsanded grout</strong> is what you use on tight
      rectified-edge porcelain (1/16 in joints), polished marble,
      and glass. The sand particles in regular grout would
      scratch the tile face. Coverage is the same calculation,
      different bag.
    </p>
    <p>
      <strong>Epoxy grout</strong> is its own category — sealed,
      stain-proof, used in commercial kitchens and shower pans.
      Coverage drops by half because epoxy is denser, and the
      mix is mixed in 1-quart kits, not 25-lb bags.
    </p>

    <h2>Common mistakes</h2>
    <p>
      <strong>Buying the wrong grout for the joint width.</strong>
      {' '}Putting unsanded grout in a 1/4 in joint cracks and
      shrinks within weeks because there's not enough body to
      bridge the gap. Putting sanded grout on polished marble
      scratches the surface during float work.
    </p>
    <p>
      <strong>Underestimating mortar for tall walls.</strong> A
      story-pole brick wall over 8 ft tall has more head joints
      per square foot of face than a short wall, and waste goes
      up because mortar boards stand farther from the work.
      Bump waste to 15% on anything over a single story.
    </p>
    <p>
      <strong>Forgetting the manufacturer's coverage chart.</strong>
      {' '}Bag yields vary by 20-30% across brands. Custom
      Building Products and Mapei publish coverage charts on every
      product page — cross-check the calculator's estimate against
      the chart for the SKU you're buying.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many 80-lb bags of mortar per 1,000 bricks?
      </strong> About 7 at a 3/8 in joint — the calculator scales
      this to your wall area.
    </p>
    <p>
      <strong>Sanded or unsanded for shower walls?</strong>
      {' '}Sanded for any joint 1/8 in or wider. Unsanded for
      rectified subway tile with hairline joints.
    </p>
    <p>
      <strong>How long does mixed mortar stay workable?</strong>
      {' '}90 minutes max in cool weather, 60 in heat.
      Re-tempering with water past that point weakens the bond
      enough to fail code in some jurisdictions.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/mortar-grout-calculator" style={{ color: 'var(--hi-vis)' }}>mortar and grout calculator</Link>{' '}
      uses standard industry yields. Real coverage varies by
      product, mix design, joint tooling style, and substrate
      absorption. Verify with the manufacturer's published
      coverage chart for the specific bag SKU before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'mortar-grout-bags',
  title: 'Mortar &amp; Grout — How Many Bags',
  metaTitle: 'Mortar and Grout Bag Math — Brick and Tile | ProjectCalc',
  metaDesc: 'How many bags of mortar for brick, and how many bags of grout for tile. The 7-bag rule, joint volume math, sanded vs unsanded.',
  excerpt: 'Mortar holds bricks and blocks together; grout fills tile joints. They are not the same product and the bag math is different. Here is the practical version with the numbers masons use at the yard.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['mortar-grout-calculator', 'brick-calculator', 'tile-calculator'],
  Body,
};

export default post;
