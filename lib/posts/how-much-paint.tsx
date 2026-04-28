import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The reason you usually buy too much paint (or worse, too little and have
      to color-match a second batch) is that paint cans don&apos;t cover what
      the label says. The label says 350 ft² per gallon. Reality says 200–325,
      depending on what you&apos;re painting and how. This guide walks through
      the actual math, where coverage gets eaten, and what to buy for common
      room sizes.
    </p>

    <h2>The basic formula</h2>
    <p>
      Paint is sold by the gallon, and one gallon covers about 350 ft² on a
      smooth, primed wall in a single coat. Almost no real surface meets all
      three conditions, so the working formula is:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      gallons = (wall area × coats) ÷ coverage per gallon
    </p>
    <p>
      <strong>Example:</strong> a 12×14 ft bedroom with 8 ft ceilings, two
      coats on smooth walls. Wall area = 2 × (12 + 14) × 8 = 416 ft². 416 × 2
      coats = 832 ft² to cover. 832 ÷ 350 = 2.4 gallons. Round up to 3 gallons,
      or buy two 1-gallon cans plus one quart for touch-ups.
    </p>
    <p>
      The <Link href="/paint-calculator">paint calculator</Link> does this
      automatically and lets you toggle smooth vs textured surfaces.
    </p>

    <h2>Coverage by surface</h2>
    <p>
      The 350 ft² number assumes smooth, primed drywall and one coat with a
      roller. Real coverage is lower for almost everything else:
    </p>
    <ul>
      <li><strong>Smooth painted drywall:</strong> 350 ft²/gal</li>
      <li><strong>Lightly textured drywall (orange peel):</strong> 300 ft²/gal</li>
      <li><strong>Knockdown texture:</strong> 275 ft²/gal</li>
      <li><strong>Popcorn ceiling:</strong> 200 ft²/gal (and you should probably remove it instead)</li>
      <li><strong>Brick or stucco:</strong> 175–225 ft²/gal — porous surfaces drink paint</li>
      <li><strong>Bare drywall (unprimed):</strong> 200 ft²/gal — the gypsum sucks paint in. Always prime first.</li>
      <li><strong>Smooth wood (cabinets, doors):</strong> 400 ft²/gal — paint flows easily</li>
      <li><strong>Bare wood:</strong> 200 ft²/gal first coat, 350 ft²/gal subsequent — wood drinks finish too</li>
    </ul>
    <p>
      The right move on bare drywall or wood is to use a <em>primer</em> as
      the first coat, then your finish paint. Primer is cheaper, designed to
      seal, and means your finish coats actually cover at the rated rate.
    </p>

    <h2>One coat vs two coats</h2>
    <p>
      Paint manufacturers love to advertise &ldquo;one-coat coverage&rdquo;
      and it&apos;s almost never true at production speed. You&apos;ll get one
      coat to look acceptable in three situations:
    </p>
    <ul>
      <li>The new color is the same color or darker than the existing wall</li>
      <li>You&apos;re using a high-quality paint+primer hybrid (Behr Marquee, Sherwin-Williams Emerald)</li>
      <li>The painter is a slow, careful pro applying paint thick enough to be one-coat</li>
    </ul>
    <p>
      Plan two coats by default. Going from a dark color to a light color or
      covering anything red, orange, or yellow may need three coats — those
      pigments are weak and bleed through. White over a previously red wall
      sometimes needs a tinted primer first to kill the color, then two finish
      coats over that.
    </p>

    <h2>Trim, doors, and ceilings</h2>
    <p>
      Trim usually doesn&apos;t need a separate calculation — a quart covers
      the trim in a typical bedroom and runs $20-30. Buy semi-gloss for trim
      so it&apos;s washable and visually distinct from the matte/eggshell on
      the walls.
    </p>
    <p>
      Doors take about a quart each for two coats on both sides. Six panels
      adds material. If you&apos;re doing more than three doors, buy a
      gallon and use it for door + trim + closet interiors at the same time.
    </p>
    <p>
      Ceilings are easy: ceiling area = length × width. Most ceilings get one
      coat of dedicated ceiling paint (it&apos;s thick, less spatter, flat
      finish). One gallon covers about 400 ft² of ceiling — coverage is
      better than walls because there&apos;s no edges to cut in.
    </p>

    <h2>Paint for common room sizes</h2>
    <p>
      Two-coat smooth-wall finish, walls only:
    </p>
    <ul>
      <li><strong>10×10 bathroom (8 ft ceiling):</strong> 320 ft² × 2 = 640 ÷ 350 = 2 gallons</li>
      <li><strong>12×12 bedroom:</strong> 384 ft² × 2 = 768 ÷ 350 = 2.5 gallons → buy 3</li>
      <li><strong>12×16 living room:</strong> 448 ft² × 2 = 896 ÷ 350 = 2.6 gallons → buy 3</li>
      <li><strong>20×30 great room (10 ft ceiling):</strong> 1,000 ft² × 2 = 2,000 ÷ 350 = 5.7 gallons → buy 6</li>
    </ul>
    <p>
      For a whole-house repaint, sum all wall areas, multiply by 2 (or 3 for
      color changes), divide by 350, and add 5–10% for touch-ups, drips, and
      the inevitable can you spill. A typical 1,800 ft² home interior eats
      8–12 gallons.
    </p>

    <h2>What paint actually costs in 2026</h2>
    <ul>
      <li><strong>Builder-grade flat (Behr Premium Plus, Valspar Pro):</strong> $25–35/gal — fine for ceilings, closets, rentals. Two coats minimum.</li>
      <li><strong>Mid-grade (Behr Ultra, Sherwin Cashmere):</strong> $40–55/gal — washable, low-VOC, good color depth. Two coats.</li>
      <li><strong>Premium (Behr Marquee, Sherwin Emerald, Benjamin Moore Aura):</strong> $60–85/gal — true one-coat in most cases, scrubbable, lifetime warranty. Worth the price on bedrooms and living areas.</li>
      <li><strong>Primer (PVA or stain-blocking):</strong> $20–30/gal</li>
    </ul>
    <p>
      The math on premium paint is usually a wash. Two coats of $30 paint =
      $60 in material; one coat of $80 paint = $80 in material — slightly
      more, but you save half the labor time. For DIY where time is free, the
      cheap two-coat path is fine. For paying a pro, premium one-coat saves
      you money.
    </p>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Mixing leftover paint to save money.</strong> Sheen mismatches will show. Pour a half-gallon of flat into a gallon of eggshell and the result is a streaky mess that nothing covers.</li>
      <li><strong>Skipping primer over a stain or water mark.</strong> Latex paint won&apos;t seal it — the stain bleeds through every coat. Use stain-blocking primer (KILZ, Zinsser BIN) on the spot first.</li>
      <li><strong>Buying gallons for a 6×8 closet.</strong> A quart covers 100 ft² and costs a third of a gallon. Closets, accent walls, and trim usually don&apos;t need a full gallon.</li>
      <li><strong>Forgetting the box of touch-up paint.</strong> Hold back at least a quart in a labeled jar (room name + date + sheen) for the inevitable scuffs and nail-pops over the next 5 years.</li>
      <li><strong>Painting over wallpaper.</strong> The seams telegraph through, the moisture in latex paint sometimes loosens the wallpaper glue, and you&apos;ve doubled your removal cost when you eventually redo it. Always remove wallpaper first.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much paint for a 12x12 room?</strong> 2.5–3 gallons for
      walls only with two coats on smooth surfaces. Add a quart for trim and
      a gallon of ceiling paint if you&apos;re doing the ceiling too.
    </p>
    <p>
      <strong>Can I store leftover paint?</strong> Yes — push the lid down
      tight, store at room temp (not garage in winter), and most latex paint
      stays usable for 2–5 years. If it has a foul smell or won&apos;t mix
      smooth, it&apos;s done.
    </p>
    <p>
      <strong>Do I need to prime before repainting?</strong> Only when going
      from oil-based to latex, painting over bare drywall or wood, or
      covering stains, water marks, or a glossy surface. Repainting an
      already-painted wall in a similar color: skip primer.
    </p>
    <p>
      <strong>How much does it cost to paint a room?</strong> DIY: $80–150 in
      paint and supplies for a typical bedroom. Pro: $400–700 for the same
      room (includes labor, prep, and the contractor&apos;s premium paint).
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/paint-calculator" style={{ color: 'var(--hi-vis)' }}>paint calculator</Link>{' '}
      gives gallons for walls + ceiling with smooth or textured coverage and
      configurable coats. Pair with the{' '}
      <Link href="/drywall-calculator" style={{ color: 'var(--hi-vis)' }}>drywall calculator</Link>{' '}
      if you&apos;re finishing fresh sheets first.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'how-much-paint-do-i-need',
  title: 'How Much Paint Do I Need? Real Coverage Math',
  metaTitle: 'How Much Paint Do I Need? Calculator + Coverage Math | ProjectCalc',
  metaDesc: 'Calculate paint gallons for any room. Real coverage rates by surface, one vs two coats, common room sizes, and the mistakes that send you back for a third gallon.',
  excerpt: 'The reason you usually buy too much paint is that gallons don\'t cover what the label says. Real coverage is 200–325 ft² per gallon, not 350. Here\'s the actual math.',
  date: '2026-04-27',
  readTime: 7,
  category: 'home',
  relatedCalcs: ['paint-calculator', 'drywall-calculator'],
  Body,
};

export default post;
