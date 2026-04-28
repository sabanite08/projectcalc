import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Tile is the project where almost everyone underbuys. The 10% waste
      factor that works for drywall and paint is way too low for tile, the
      box quantities don&apos;t map to your room size, and certain layouts
      double your waste before the first cut. Here&apos;s how to estimate
      tile for a bathroom (or anything else) without ending up two boxes
      short on day three of the install.
    </p>

    <h2>The basic formula</h2>
    <p>
      Tile is sold in boxes that cover a fixed square footage. The math:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      boxes = (area to cover × waste factor) ÷ ft² per box
    </p>
    <p>
      Always round <em>up</em>. You can&apos;t buy 7.3 boxes of tile.
    </p>
    <p>
      <strong>Example:</strong> a 5×8 ft bathroom floor (40 ft²) with 12×24
      porcelain tile sold in 15.5 ft² boxes, plus 15% waste. 40 × 1.15 =
      46 ft². 46 ÷ 15.5 = 2.97 boxes → buy 3 boxes (46.5 ft² total). The{' '}
      <Link href="/tile-calculator">tile calculator</Link> handles the box-
      rounding for any tile and room size.
    </p>

    <h2>Floor tile math</h2>
    <p>
      Floor tile is the simpler case. Measure room length × width, subtract
      anything not getting tiled (toilet flange? that gets tiled around but
      counted; vanity footprint? subtract it).
    </p>
    <p>
      Common bathroom floor sizes and tile needs at 15% waste:
    </p>
    <ul>
      <li><strong>5×8 (40 ft²):</strong> 46 ft² of tile</li>
      <li><strong>6×10 (60 ft²):</strong> 69 ft² of tile</li>
      <li><strong>8×10 (80 ft²):</strong> 92 ft² of tile</li>
      <li><strong>10×12 master bath (120 ft²):</strong> 138 ft² of tile</li>
    </ul>
    <p>
      Subtract the vanity if it&apos;s a built-in cabinet that won&apos;t
      have tile under it (you can — pros usually do — but some designs skip
      it for cost reasons).
    </p>

    <h2>Wall tile math</h2>
    <p>
      Wall tile is where people make the biggest measurement errors. The
      surfaces you&apos;re tiling around a tub/shower:
    </p>
    <ul>
      <li>Tub surround: 3 walls × 60&quot; tall × tub width = three rectangles</li>
      <li>Shower walls: ceiling-height on three or four walls</li>
      <li>Backsplash behind vanity: 4&quot;–18&quot; depending on style</li>
      <li>Wainscot or full wall in a powder room</li>
    </ul>
    <p>
      For a standard alcove tub surround (5 ft long, 60&quot; tile height
      above the tub deck):
    </p>
    <ul>
      <li>Long wall above tub: 60 × 60 = 3,600 in² = 25 ft²</li>
      <li>Two end walls: 30 × 60 each = 25 ft² total</li>
      <li>Three-wall surround total: 50 ft²</li>
      <li>Plus 15% waste = 58 ft²</li>
    </ul>
    <p>
      A walk-in shower with full-height tile on three walls (5×3 ft enclosure,
      8 ft ceiling) runs around 88 ft² of wall tile. Add the floor and a
      shower curb if applicable.
    </p>

    <h2>Why 15% waste, not 10%</h2>
    <p>
      Tile waste runs higher than other materials because:
    </p>
    <ul>
      <li><strong>Cuts at every edge.</strong> Floors and walls have perimeter cuts that produce unusable scrap. The longer/skinnier the tile, the more waste from cutting to fit.</li>
      <li><strong>Cuts around obstacles.</strong> Toilet flanges, drains, faucet stem-outs, switches. Each one wastes part of a tile.</li>
      <li><strong>Box variation.</strong> Tile is fired in lots — you want at least one extra box from the same lot for repairs over the next decade. Color matching across lots is unreliable.</li>
      <li><strong>Breakage.</strong> Porcelain breaks. Even careful pros lose 2–3% to handling damage.</li>
    </ul>
    <p>
      <strong>Use these waste factors:</strong>
    </p>
    <ul>
      <li>Standard square or subway tile, simple layout: 10–12%</li>
      <li>Large format (12×24 or bigger): 15%</li>
      <li>Irregular shapes (hex, fish-scale, picket): 15–20%</li>
      <li>Diagonal layout (45° rotation): 15–20%</li>
      <li>Herringbone, basketweave, or chevron pattern: 20–25%</li>
      <li>Mosaic tile sold by the sheet: 10% (cuts are cleaner)</li>
    </ul>

    <h2>Standard tile sizes and where each fits</h2>
    <p>
      Modern porcelain comes in a huge range. Practical considerations:
    </p>
    <ul>
      <li><strong>2×2 mosaic on mesh:</strong> small bathrooms, shower floors (slope to drain), backsplashes. Easy to install, pricier per ft².</li>
      <li><strong>3×6 subway:</strong> walls and backsplashes. Classic look, low cost ($2–5/ft²), forgiving install. Bad on floors (too small).</li>
      <li><strong>6×6 ceramic:</strong> the budget bathroom default. Plain, cheap ($1–3/ft²), but small enough that grout lines dominate the look.</li>
      <li><strong>12×12:</strong> the residential standard. Easy to handle, every store stocks it, $3–8/ft².</li>
      <li><strong>12×24:</strong> the modern look. Bigger format = fewer grout lines = looks more upscale. $4–10/ft². Requires a flatter substrate (3/16&quot; tolerance).</li>
      <li><strong>24×48 large format:</strong> high-end residential and commercial. Two-person install, $8–15/ft². Often paired with thinner grout lines for a continuous look.</li>
    </ul>

    <h2>Calculating boxes vs square feet</h2>
    <p>
      Tile boxes don&apos;t come in round square footage. Common box sizes:
    </p>
    <ul>
      <li>12×12: usually 11 tiles per box = 11 ft²</li>
      <li>12×24: usually 8 tiles per box = 16 ft²</li>
      <li>3×6 subway: usually 80 tiles per box = 10 ft²</li>
      <li>2×2 mosaic on 12×12 mesh: 1 ft² per sheet, 5 sheets per box = 5 ft²</li>
    </ul>
    <p>
      The actual ft² per box is printed on every box — read it before
      buying. A &ldquo;box of tile&rdquo; can mean anything from 5 to 25 ft².
    </p>

    <h2>Pattern impact: when waste doubles</h2>
    <p>
      Layout choices have real waste consequences:
    </p>
    <p>
      <strong>Straight stack (grid) or running bond (50% offset):</strong>
      Standard waste factors apply (10–15%).
    </p>
    <p>
      <strong>Diagonal (45° rotation):</strong> Add 5–7% to waste. Every
      perimeter cut is a triangle and the cuts are bigger.
    </p>
    <p>
      <strong>Herringbone:</strong> Add 10% to waste. Each tile must be cut
      to fit a 45° pattern at every wall, and the layout produces dozens of
      small triangular offcuts that mostly can&apos;t be reused.
    </p>
    <p>
      <strong>Penny round, hex, fish-scale:</strong> Sold by the sheet but
      sheets must be cut to fit edges. 15–20% waste typical.
    </p>

    <h2>What tile actually costs in 2026</h2>
    <p>
      Materials per square foot, contractor-grade not specialty:
    </p>
    <ul>
      <li>Builder-grade ceramic 12×12: $1.50–3.00</li>
      <li>Mid-range porcelain 12×24: $4–8</li>
      <li>Premium porcelain (large format, wood-look planks): $7–15</li>
      <li>Natural stone (marble, travertine): $10–25</li>
      <li>Glass mosaic backsplash sheets: $15–35</li>
    </ul>
    <p>
      Plus consumables: thinset mortar ($30/50-lb bag covers ~75 ft²),
      grout ($25/25-lb bag), grout sealer ($15), spacers, leveling clips,
      and a wet saw rental ($60/day) if you don&apos;t own one. Budget
      $150–250 in supplies for a typical bathroom on top of the tile.
    </p>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Buying tile from two different lots.</strong> Color won&apos;t match exactly. Always buy enough from the same lot to finish + leave 5% as attic spare.</li>
      <li><strong>Ignoring the box quantity.</strong> Buying &ldquo;exactly 50 ft²&rdquo; means three boxes if the tile is 16 ft² each — that&apos;s 48 ft², not 50. Round to whole boxes.</li>
      <li><strong>Skipping the schluter / edge profile.</strong> Where tile meets non-tile (carpet, drywall, tub edge), you need a metal or PVC trim piece for a clean edge. Pros plan this in advance.</li>
      <li><strong>Underbuying for repairs.</strong> Stash one extra box in the attic. Tile lots are discontinued constantly — five years from now when one cracks, you&apos;ll be glad you have a match.</li>
      <li><strong>Calculating wall tile by floor footprint.</strong> Wall tile is wall area, not floor area. Measure each wall surface separately.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much tile do I need for a 5x8 bathroom?</strong> About 46
      ft² for the floor (with 15% waste). For a tub surround, add another
      58 ft² of wall tile.
    </p>
    <p>
      <strong>How long does it take to tile a bathroom?</strong> A pro
      tiler does a typical bathroom floor in one day, walls in two, plus a
      day for grouting after the thinset cures. DIY: triple all of those.
    </p>
    <p>
      <strong>Should I tile under the vanity?</strong> Pros tile the whole
      floor and set the vanity on top. It costs more in tile but means you
      can swap the vanity later without retiling. Builder-grade jobs skip
      under the vanity to save material.
    </p>
    <p>
      <strong>Do I need backer board under tile?</strong> Yes for floors
      (cement board or uncoupling membrane like Schluter Ditra) and yes for
      wet walls (cement board, never green drywall in a shower). Standard
      drywall is acceptable behind a backsplash.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/tile-calculator" style={{ color: 'var(--hi-vis)' }}>tile calculator</Link>{' '}
      gives box count for any tile size and room dimensions, with a
      configurable waste factor for layouts and patterns.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'how-much-tile-for-a-bathroom',
  title: 'How Much Tile for a Bathroom? Floor and Wall Math',
  metaTitle: 'How Much Tile Do I Need for a Bathroom? Floor + Wall Math | ProjectCalc',
  metaDesc: 'Calculate bathroom tile needs without underbuying. Floor and wall math, real waste factors by layout, common bathroom sizes, and box-rounding rules.',
  excerpt: 'Tile is where almost everyone underbuys — the 10% waste rule from drywall is too low, and box quantities don\'t map to your room size. Here\'s how to estimate without coming up short.',
  date: '2026-04-27',
  readTime: 8,
  category: 'home',
  relatedCalcs: ['tile-calculator', 'drywall-calculator'],
  Body,
};

export default post;
