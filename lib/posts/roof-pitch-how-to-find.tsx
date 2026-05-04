import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Roof pitch is the single number that decides what shingles you
      can use, whether you need ice and water shield, and how much
      square footage of roofing material to actually order. The trade
      writes it as <strong>X in 12</strong> — six inches of vertical
      rise for every twelve inches of horizontal run. Here&apos;s how to
      find it on a roof that&apos;s already built, and what the number
      actually controls.
    </p>

    <h2>The pitch formula</h2>
    <p>
      Pitch is just rise over run, scaled to a 12 in run for the
      trade convention:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      pitch = (rise × 12) ÷ run{'\n'}
      angle = arctan(rise ÷ run){'\n'}
      slope_multiplier = √(1 + (rise/run)²)
    </p>
    <p>
      <strong>Example:</strong> a level laid against the rafter, 12 in
      out from the wall, gap to the roof at the level&apos;s tip = 6 in.
      Pitch = (6 × 12) ÷ 12 = <strong>6/12</strong>. That&apos;s about
      26.6° and a slope multiplier of 1.118 — meaning the actual roof
      surface is 11.8% larger than the building&apos;s plan area.
    </p>
    <p>
      The <Link href="/roof-pitch-calculator">roof pitch calculator</Link>
      {' '}does this conversion both ways and gives you the multiplier
      to convert plan-view square footage to roof surface area for
      shingle ordering.
    </p>

    <h2>Three ways to measure an existing roof</h2>

    <h3>Method 1 — Level on the rafter (most accurate)</h3>
    <p>
      Get into the attic and find a rafter. Hold a 24 in level flat
      against the bottom edge of the rafter, with the level extending
      horizontally. Mark exactly 12 in along the level from the high
      end. Measure straight up from that mark to the rafter — that
      vertical distance is your rise per 12 in run.
    </p>
    <p>
      This is what roofers do because it eliminates shingle thickness,
      sagging, and snow load deflection from the measurement. The
      number is the structural pitch.
    </p>

    <h3>Method 2 — Smartphone level app (fastest)</h3>
    <p>
      iPhone (Measure app) and Android (Bubble Level app) both have
      angle-finder modes. Set the phone flat on the roof or against a
      gable rake board, hit hold, read the angle in degrees. Convert
      to /12 with: pitch = tan(angle) × 12. A reading of 26.6° gives
      tan(26.6°) × 12 = 6/12.
    </p>
    <p>
      Works in under a minute but the phone has to sit flat against
      the surface. Asphalt shingles add a few degrees of error from
      the surface texture; smooth metal roofs read cleanly.
    </p>

    <h3>Method 3 — From outside with a long level</h3>
    <p>
      Hold a 24 in or 48 in level against the gable end of the house
      so it points along the roof slope. Tip one end up until the
      bubble centers. Measure the gap between the low end of the
      level and the gable&apos;s rake board — that&apos;s your rise.
      Divide by the level length, multiply by 12.
    </p>
    <p>
      Works without a ladder, but accuracy depends on holding the
      level steady at full arm extension. Off by 1° is off by 0.2/12.
    </p>

    <h2>What the pitch number actually controls</h2>
    <p>
      Pitch isn&apos;t cosmetic — it dictates which roofing systems
      pass code:
    </p>
    <ul>
      <li><strong>Below 2/12:</strong> Low-slope. Asphalt shingles are not allowed. You need EPDM rubber, TPO, or built-up membrane.</li>
      <li><strong>2/12 to 4/12:</strong> Asphalt shingles permitted with a double layer of underlayment per IRC R905.1.1. Ice and water shield required at eaves in cold climates.</li>
      <li><strong>4/12 to 12/12:</strong> Standard asphalt shingle range. Single-layer underlayment, ice barrier required in cold climates per local code.</li>
      <li><strong>Above 12/12:</strong> Steep slope. Shingles need 6 nails per shingle (vs 4) and roofers bill it at a steep-roof premium because they&apos;re working off ladders or in harnesses.</li>
    </ul>
    <p>
      The 4/12 line is also where ice dam underlayment (ice and water
      shield) becomes mandatory in IRC climate zones 4-8 — that&apos;s
      most of the northern US and all of Canada. Check your local
      amendments before assuming it&apos;s optional.
    </p>

    <h2>The plan-to-roof multiplier — order the right shingles</h2>
    <p>
      The biggest mistake DIYers make ordering shingles is using the
      house&apos;s plan-view square footage. A 1,000 ft² ranch with a
      6/12 roof has 1,118 ft² of actual roof surface. At 9/12, it&apos;s
      1,250 ft². At 12/12, it&apos;s 1,414 ft².
    </p>
    <p>
      The slope multiplier from the calculator handles this — multiply
      the plan-view footprint of the house by the multiplier, then
      convert to squares (1 square = 100 ft²) for shingle orders. The
      <Link href="/roofing-calculator"> roofing calculator</Link> does
      this conversion plus the bundle math.
    </p>

    <h2>Common pitches by house style</h2>
    <p>
      Pitch tells you a lot about when and where a house was built:
    </p>
    <ul>
      <li><strong>2/12 to 4/12:</strong> Mid-century ranch, Craftsman bungalow, modern flat-look</li>
      <li><strong>5/12 to 7/12:</strong> Standard suburban tract housing, most US homes built 1980-2010</li>
      <li><strong>8/12 to 10/12:</strong> Cape Cod, Colonial, traditional New England</li>
      <li><strong>10/12 to 12/12:</strong> Victorian, Tudor, Gothic Revival</li>
      <li><strong>Above 12/12:</strong> A-frame, ski cabin, ecclesiastical</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What pitch is 30°?</strong> 30° = tan(30°) × 12 = 6.93/12.
      Round to 7/12.
    </p>
    <p>
      <strong>What pitch is 45°?</strong> 45° = tan(45°) × 12 = 12/12.
      That&apos;s the steep-roof threshold.
    </p>
    <p>
      <strong>Can I shingle a low slope (under 2/12)?</strong> Not
      with asphalt shingles per IRC. Use a membrane system. Some
      manufacturers void the warranty on slopes below 2/12.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Got the pitch — now order the shingles.</strong> Use the{' '}
      <Link href="/roofing-calculator" style={{ color: 'var(--hi-vis)' }}>roofing calculator</Link>
      {' '}with the slope multiplier from this calculator to get
      bundles and squares for the actual roof surface, not the plan
      area.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'roof-pitch-how-to-find',
  title: 'How to Find Your Roof Pitch (Three Methods + What It Means)',
  metaTitle: 'How to Find Roof Pitch — 3 Measurement Methods | ProjectCalc',
  metaDesc: 'Roof pitch explained — the X/12 system, three ways to measure on an existing roof, and what the number controls (shingles, ice barrier, ordering).',
  excerpt: 'Pitch is the single number that decides what shingles you can use, whether you need ice barrier, and how much material to actually order. Here is how to measure it three ways and what the number controls.',
  date: '2026-05-03',
  readTime: 6,
  category: 'home',
  relatedCalcs: ['roof-pitch-calculator', 'roofing-calculator', 'rafter-length-calculator'],
  Body,
};

export default post;
