import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The honest answer: it depends on what you&apos;re pouring, how thick, and
      whether the ground is level. But you can get a usable number in 30
      seconds. Here&apos;s how the math actually works, plus the rules of thumb
      pros use to avoid running short or wasting half a yard.
    </p>

    <h2>The basic formula</h2>
    <p>
      Concrete is sold by the cubic yard. To find how many cubic yards you
      need, multiply length × width × depth in feet, then divide by 27 (since
      one cubic yard = 27 cubic feet).
    </p>
    <p>
      <strong>Example:</strong> a 10 ft × 10 ft patio at 4 inches thick =
      10 × 10 × 0.333 = 33.3 cubic feet ÷ 27 = <strong>1.23 cubic yards</strong>.
      Add 10% for spillage and over-dig and you&apos;re ordering 1.4 yards. Most
      ready-mix plants have a 1-yard minimum, so you&apos;re fine.
    </p>
    <p>
      Use the <Link href="/concrete-calculator">concrete calculator</Link> if you
      don&apos;t want to do this by hand — it gives you cubic yards plus the
      equivalent in 60lb and 80lb bags.
    </p>

    <h2>Bags vs ready-mix: where the line is</h2>
    <p>
      Bagged concrete makes sense for small jobs. Above about half a cubic
      yard, ready-mix delivery wins on price, time, and consistency.
    </p>
    <p>
      A <strong>60lb bag</strong> yields 0.45 ft³. An <strong>80lb bag</strong> yields 0.60 ft³.
      So a yard of concrete is roughly 60 bags of 60lb or 45 bags of 80lb.
      At Home Depot prices in 2026, that&apos;s $250–350 in bags vs $150–200 from
      a ready-mix plant — for the same amount.
    </p>
    <p>
      The other factor: mixing 45 bags by hand takes hours and gives you
      inconsistent slump (water content varies bag to bag, your fatigue
      affects mix quality). Ready-mix shows up in a truck, ready to pour.
    </p>
    <p>
      Rough decision tree:
    </p>
    <ul>
      <li>Under 0.25 yd³ (≈ a 4×4 ft pad): bags, easy</li>
      <li>0.25–0.5 yd³ (≈ shed pad, small walkway): bags if you have a mixer, otherwise call ready-mix</li>
      <li>0.5+ yd³: ready-mix, every time</li>
    </ul>

    <h2>How thick should the slab be?</h2>
    <p>
      Slab thickness depends on what&apos;s rolling on it:
    </p>
    <ul>
      <li><strong>4 inches</strong> — patios, walkways, shed floors, garden borders. Standard residential thickness.</li>
      <li><strong>4–6 inches</strong> — driveways, with rebar or wire mesh. 6 inches if the soil is soft or you park heavy vehicles.</li>
      <li><strong>6 inches</strong> — garage floors, RV pads, anywhere a heavy truck will park.</li>
      <li><strong>8–12 inches</strong> — footings under load-bearing walls, pier footings. Always check local code; some jurisdictions require deeper.</li>
    </ul>
    <p>
      The thicker you go, the more concrete you need (linearly), but also the
      more reinforcement matters. A 4-inch slab can usually skip rebar with
      proper subgrade prep; a 6-inch slab almost always needs it.
    </p>

    <h2>The waste factor everyone forgets</h2>
    <p>
      Add 10% to whatever the calculator says. Reasons:
    </p>
    <ul>
      <li>Subgrade is never perfectly flat — low spots eat extra concrete</li>
      <li>Forms can deflect outward as the wet concrete pushes against them</li>
      <li>Some concrete sticks to the chute, the wheelbarrow, your boots</li>
      <li>You always over-dig the form perimeter slightly</li>
    </ul>
    <p>
      Coming up half a yard short with the truck pulling away is way worse
      than having a quarter-yard of leftover concrete you dump into a quick
      stepping stone form. Always order the next ¼ yard up.
    </p>

    <h2>Common pours and their concrete needs</h2>
    <p>Quick-reference numbers for typical residential pours at 4 inches thick (add 10% waste before ordering):</p>
    <ul>
      <li>4×4 shed pad → 0.20 yd³</li>
      <li>10×10 patio → 1.25 yd³</li>
      <li>12×24 driveway slab → 3.6 yd³</li>
      <li>24×24 garage floor → 7.1 yd³</li>
      <li>Sidewalk, 3 ft × 50 ft → 1.85 yd³</li>
    </ul>

    <h2>What ready-mix delivery actually costs</h2>
    <p>
      Material is around $150–180 per yard depending on PSI and your region.
      But there are extra fees that catch first-timers:
    </p>
    <ul>
      <li><strong>Short-load fee:</strong> $50–150 for orders under 3 yards (the truck holds 10 yd³ — they want you to use more of it)</li>
      <li><strong>Wait fee:</strong> $1–3 per minute past the first 5–7 minutes of pouring. Have your form prep, wheelbarrows, and crew ready before the truck arrives.</li>
      <li><strong>Pump rental:</strong> $400–800 if you can&apos;t reach the pour from the chute. Skip if at all possible.</li>
      <li><strong>Saturday/evening:</strong> 10–25% surcharge, depending on the plant</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much does 1 yard of concrete cost installed?</strong> $150–250
      DIY (just material), $400–700 if you hire a contractor for a typical pour
      (includes prep, forms, finish).
    </p>
    <p>
      <strong>How long does concrete take to cure?</strong> Foot traffic in
      24 hours, light vehicle in 7 days, full strength in 28 days. Don&apos;t
      let anything sit on it for the first 24h.
    </p>
    <p>
      <strong>Do I need to order steel mesh or rebar?</strong> For a 4-inch
      patio: optional but recommended. For a driveway: yes. For a garage
      floor: definitely.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/concrete-calculator" style={{ color: 'var(--hi-vis)' }}>concrete calculator</Link>{' '}
      gives you cubic yards, plus the equivalent in 60lb and 80lb bags so you
      can compare bagged vs ready-mix at a glance.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'how-much-concrete-do-i-need',
  title: 'How Much Concrete Do I Need? Cubic Yards, Bags, and Real-World Examples',
  metaTitle: 'How Much Concrete Do I Need? Cubic Yards, Bags & Examples | ProjectCalc',
  metaDesc: 'Figure out exactly how much concrete you need for any pour. Real numbers, the bags-vs-ready-mix breakeven, slab thickness rules, and waste factor.',
  excerpt: 'The honest answer: it depends on what you\'re pouring, how thick, and whether the ground is level. But you can get a usable number in 30 seconds. Here\'s how the math works, plus the rules of thumb pros use.',
  date: '2026-04-26',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['concrete-calculator', 'gravel-calculator'],
  Body,
};

export default post;
