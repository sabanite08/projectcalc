import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Estimating drywall isn&apos;t complicated, but the math has a couple of
      gotchas that turn an easy job into a second trip to Home Depot. This
      guide walks through the actual formula, when to use 4×8 vs 4×12 sheets,
      and how to handle ceilings, openings, and waste.
    </p>

    <h2>The basic formula</h2>
    <p>
      Drywall is sold by the sheet, and each standard 4×8 sheet covers 32
      square feet. The formula:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      sheets = (wall area + ceiling area) ÷ 32 × 1.10 (waste)
    </p>
    <p>
      <strong>Example:</strong> a 12×14 ft bedroom with 8 ft ceilings and you&apos;re
      doing walls + ceiling. Wall area = 2 × (12 + 14) × 8 = 416 ft². Ceiling
      = 12 × 14 = 168 ft². Total = 584 ft². ÷ 32 × 1.10 = 20 sheets. Round up
      and order 20 sheets of 4×8 drywall.
    </p>
    <p>
      The <Link href="/drywall-calculator">drywall calculator</Link> does this
      automatically and lets you toggle whether the ceiling is included.
    </p>

    <h2>4×8 vs 4×12: when each makes sense</h2>
    <p>
      Most home centers stock both. The choice comes down to room size, crew
      size, and how much taping/mudding you want to do.
    </p>
    <p><strong>4×8 sheets (32 ft²):</strong></p>
    <ul>
      <li>Easier for one person to handle</li>
      <li>Fits through standard doorways without tilting</li>
      <li>More seams to tape and mud</li>
      <li>Default choice for most DIYers</li>
    </ul>
    <p><strong>4×12 sheets (48 ft²):</strong></p>
    <ul>
      <li>Roughly 1.5× the price per sheet but cheaper per ft²</li>
      <li>Reduces seams by 33% — way faster mudding, smoother finish</li>
      <li>Heavy: a 4×12 ½&quot; sheet weighs ~70 lbs. Two-person job.</li>
      <li>Won&apos;t fit through 30&quot; doorways or tight stairwells without tilting</li>
      <li>Best for ceilings (fewer butt joints) and long unbroken walls</li>
    </ul>
    <p>
      Pros tend to use 4×12 for everything because the time savings on
      taping more than pays for the difficulty. DIYers should default to 4×8
      unless they have a helper.
    </p>

    <h2>Should you subtract windows and doors?</h2>
    <p>
      For most jobs: <strong>no</strong>. Leaving the openings in your
      calculation gives you natural waste tolerance. A typical 36-inch door
      and a couple of windows account for about 30 ft² of subtracted
      area — almost exactly the 10% waste factor in the formula. If you
      subtract them, you have to add the waste back in anyway.
    </p>
    <p>
      Subtract openings only when they&apos;re unusually large: sliding glass
      doors, bay windows, or picture windows totaling more than 50 ft²
      combined. Otherwise leave them in and let the math give you natural
      slack.
    </p>

    <h2>Ceilings: the hidden complexity</h2>
    <p>
      Ceiling drywall is heavier work than walls — gravity is fighting you.
      Two practical points:
    </p>
    <ul>
      <li><strong>Use ⅝-inch on ceilings if you can</strong> instead of ½-inch. It sags less over time and holds insulation weight better. Costs 25–35% more per sheet.</li>
      <li><strong>Use 4×12 sheets if possible.</strong> Fewer butt joints in ceilings = dramatically smoother finish. Butt joints across a ceiling under raking light are the most obvious finishing flaw in any room.</li>
    </ul>

    <h2>What drywall actually costs in 2026</h2>
    <ul>
      <li>Standard ½&quot; 4×8 sheet: $13–18</li>
      <li>Moisture-resistant (greenboard) 4×8: $18–24</li>
      <li>Mold/mildew resistant (purple): $20–28</li>
      <li>Type X fire-rated ⅝&quot;: $20–30</li>
      <li>4×12 sheets: 1.4–1.6× the 4×8 price</li>
    </ul>
    <p>
      Plus consumables: 25-lb bag of joint compound ($15), 250 ft of paper
      tape ($5), screws ($30 for a 5-lb box), corner bead, and sandpaper.
      Budget another $80–120 for a typical room beyond the sheets themselves.
    </p>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Buying exactly the calculated number of sheets.</strong> Always add 1–2 spare sheets — drywall scratches in the truck, gets dropped, gets cut wrong. Stores will accept returns of unused full sheets.</li>
      <li><strong>Mixing sheet thicknesses on the same wall.</strong> A ½&quot; next to a ⅝&quot; creates a visible step that mud can&apos;t hide. Pick one and stick with it for the whole wall plane.</li>
      <li><strong>Forgetting closet ceilings.</strong> Closets are easy to overlook in the room measurement and they need ceiling drywall too.</li>
      <li><strong>Skipping moisture-resistant board in bathrooms.</strong> Greenboard goes around tubs/showers and on bathroom ceilings. Standard drywall in those spots will fail within a few years.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many sheets of drywall for a 12x12 room?</strong> About 17
      sheets for walls + ceiling at 8 ft (or 12 sheets for walls only). The{' '}
      <Link href="/drywall-calculator">calculator</Link> gives an exact
      number for any room size.
    </p>
    <p>
      <strong>How long does it take to install drywall?</strong> A skilled
      crew of two hangs a typical bedroom in 2–4 hours. Mudding and finishing
      adds 3 days minimum (apply, dry, sand, repeat). DIY: triple that time.
    </p>
    <p>
      <strong>Can I install drywall over existing drywall?</strong> Yes if
      it&apos;s flat and sound, but you&apos;ll need longer screws (1¼&quot; to penetrate
      both layers and bite the stud). It&apos;s usually faster to remove the old
      stuff than to deal with the alignment issues of layering.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/drywall-calculator" style={{ color: 'var(--hi-vis)' }}>drywall calculator</Link>{' '}
      gives sheet count for walls only or walls + ceiling, with the 10% waste
      factor built in.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'drywall-estimating-guide',
  title: 'Drywall Estimating: How to Figure Sheets for Any Room',
  metaTitle: 'Drywall Estimating Guide — Sheets, Waste, 4x8 vs 4x12 | ProjectCalc',
  metaDesc: 'Estimate drywall sheets for any room. Real formula, when to use 4x8 vs 4x12, how to handle openings, ceiling tips, and the 10% waste rule pros use.',
  excerpt: 'The math has a couple of gotchas that turn an easy job into a second trip to Home Depot. This guide walks through the formula, when to use 4×8 vs 4×12, and how to handle ceilings, openings, and waste.',
  date: '2026-04-26',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['drywall-calculator', 'paint-calculator', 'insulation-calculator'],
  Body,
};

export default post;
