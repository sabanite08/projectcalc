import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Roofing math intimidates people because of one term: <em>pitch</em>.
      Once you know how pitch affects square footage, the rest is simple
      arithmetic. Here&apos;s how to figure shingle bundles for any pitched
      roof, plus the cost numbers and rules of thumb most online calculators
      skip.
    </p>

    <h2>The vocabulary you need</h2>
    <ul>
      <li><strong>Square (1 sq):</strong> 100 ft² of roof surface. Roofing is sold by the square — bundles, underlayment, ice and water, all of it.</li>
      <li><strong>Pitch:</strong> How steep the roof is, expressed as rise/run. A 6/12 pitch rises 6 inches for every 12 inches of horizontal run. The bigger the first number, the steeper.</li>
      <li><strong>Footprint:</strong> The flat area the roof covers when viewed from directly above (length × width). This is NOT the actual roof surface — that&apos;s always larger because of the slope.</li>
      <li><strong>Pitch multiplier:</strong> The number you multiply footprint by to get actual roof surface. Comes from basic geometry (Pythagorean theorem on the slope).</li>
    </ul>

    <h2>The pitch multiplier table</h2>
    <p>
      Don&apos;t try to memorize the formula — just use the table:
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      <thead>
        <tr style={{ background: 'var(--bg-2)' }}>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid var(--line)' }}>Pitch</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid var(--line)' }}>Multiplier</th>
          <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid var(--line)' }}>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style={{ padding: '8px' }}>2/12</td><td>1.014</td><td>Low slope, almost flat</td></tr>
        <tr><td style={{ padding: '8px' }}>4/12</td><td>1.054</td><td>Common ranch / modern</td></tr>
        <tr><td style={{ padding: '8px' }}>6/12</td><td>1.118</td><td>Most common residential</td></tr>
        <tr><td style={{ padding: '8px' }}>8/12</td><td>1.202</td><td>Steeper colonial</td></tr>
        <tr><td style={{ padding: '8px' }}>10/12</td><td>1.302</td><td>Steep, walking edge of safe</td></tr>
        <tr><td style={{ padding: '8px' }}>12/12</td><td>1.414</td><td>45° — needs roof jacks</td></tr>
      </tbody>
    </table>

    <h2>Worked example</h2>
    <p>
      Say you have a 40 ft × 30 ft house with a simple gable roof at 6/12
      pitch.
    </p>
    <ol>
      <li>Footprint: 40 × 30 = <strong>1,200 ft²</strong></li>
      <li>Apply pitch multiplier: 1,200 × 1.118 = <strong>1,342 ft²</strong> of actual roof surface</li>
      <li>Convert to squares: 1,342 ÷ 100 = <strong>13.42 squares</strong></li>
      <li>Add 10% waste: 13.42 × 1.10 = <strong>14.76 squares</strong></li>
      <li>3 bundles per square × 14.76 = <strong>45 bundles</strong> (round up)</li>
    </ol>
    <p>
      The <Link href="/roofing-calculator">roofing calculator</Link> handles all
      this math — just enter footprint and pitch.
    </p>

    <h2>How to figure pitch on an existing roof</h2>
    <p>
      Three ways, in order of preference:
    </p>
    <p>
      <strong>1. Use a level on the roof or in the attic.</strong> Hold a
      24-inch level horizontal against the underside of a rafter. Measure
      straight down 12 inches from the level&apos;s end. Then measure up to the
      rafter. That vertical number is your pitch (in inches per 12 inches of
      run). Easiest method.
    </p>
    <p>
      <strong>2. Use a smartphone level app.</strong> Lay your phone flat
      against the roof surface. Most level/inclinometer apps will show degrees
      directly. Convert: 18° ≈ 4/12, 27° ≈ 6/12, 33° ≈ 8/12, 45° = 12/12.
    </p>
    <p>
      <strong>3. Eyeball it from the ground</strong> against a known reference
      (your neighbor&apos;s roof, a Google image search of pitch examples). Least
      accurate, but fine for a rough materials estimate.
    </p>

    <h2>Don&apos;t forget the rest of the order</h2>
    <p>
      Bundles are the headline number, but a roofing job needs more than just
      shingles. For a typical 25-square roof:
    </p>
    <ul>
      <li><strong>Underlayment:</strong> 25 squares of synthetic underlayment ($75–125 per square = $1,900–3,100, but usually sold in 1,000 ft² rolls so ~3 rolls)</li>
      <li><strong>Ice & water shield:</strong> First 3–6 ft of every eave + valleys + around penetrations. About 2–3 squares for an average house.</li>
      <li><strong>Drip edge:</strong> Lineal feet of every eave and rake (perimeter total)</li>
      <li><strong>Starter strip:</strong> Eave perimeter (one bundle covers ~120 lf)</li>
      <li><strong>Ridge cap:</strong> 1 bundle per 35 lf of ridge</li>
      <li><strong>Roofing nails:</strong> 4 nails per shingle, ~320 nails per square. Buy a 50-lb box.</li>
      <li><strong>Pipe boots:</strong> One per plumbing vent</li>
      <li><strong>Flashing:</strong> Step flashing for sidewalls and chimneys, plus apron flashing</li>
    </ul>
    <p>
      Add another $300–800 to the shingle cost for these consumables on a
      typical house.
    </p>

    <h2>2026 cost ranges</h2>
    <ul>
      <li>3-tab shingles: $90–130 per square (15–20 year life)</li>
      <li>Architectural / dimensional: $120–200 per square (25–30 year life)</li>
      <li>Premium designer: $200–350+ per square (40–50 year life)</li>
      <li>Full installed cost (materials + labor + tear-off): $400–800 per square</li>
    </ul>
    <p>
      A typical 2,000 ft² house with a 6/12 roof has about 25 squares. So
      a full re-roof: $10,000–20,000 installed. Insurance often pays for
      this if the existing roof is hail-damaged — get an adjuster out before
      replacement if a recent storm rolled through.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How long do asphalt shingles last?</strong> 15–20 years for
      3-tab, 25–30 for architectural, 40–50 for premium. Real-world life is
      often 5–10 years shorter than rated due to sun, hail, and ventilation
      issues.
    </p>
    <p>
      <strong>Can I install new shingles over old ones?</strong> Most codes
      allow up to two layers. A second layer adds weight (which can stress
      framing on older homes) and traps heat. Tear-off is almost always the
      better long-term call.
    </p>
    <p>
      <strong>What pitch is too steep to walk on?</strong> Anything above 6/12
      becomes work-positioning territory (roof jacks, harnesses). Above 8/12,
      hire a roofer — DIY at that pitch is genuinely dangerous.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/roofing-calculator" style={{ color: 'var(--hi-vis)' }}>roofing calculator</Link>{' '}
      handles footprint × pitch math automatically and gives you bundles with
      10% waste built in.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'how-many-shingles-for-my-roof',
  title: 'How Many Shingles for My Roof? A Pitched-Roof Guide',
  metaTitle: 'How Many Shingles for My Roof — Pitch, Squares, Bundles | ProjectCalc',
  metaDesc: 'Calculate roofing shingles for any pitched roof. Pitch multiplier table, full materials list beyond shingles, 2026 cost ranges, and how to measure pitch.',
  excerpt: 'Roofing math intimidates people because of one term: pitch. Once you know how pitch affects square footage, the rest is simple. Here\'s how to figure bundles, plus the cost numbers most online calculators skip.',
  date: '2026-04-26',
  readTime: 7,
  category: 'home',
  relatedCalcs: ['roofing-calculator', 'siding-calculator'],
  Body,
};

export default post;
