import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Voltage drop on a long wire run is one of those electrical
      problems that doesn't trip a breaker — the circuit just
      runs warm, motors hum harder, and LED lights flicker. The
      NEC's 3% / 5% recommendation is informative (not enforced),
      but every electrician follows it because the alternatives
      are equipment failures and unhappy customers. Here is the
      math.
    </p>

    <h2>The 3% / 5% rule</h2>
    <p>
      The National Electrical Code recommends:
    </p>
    <ul>
      <li><strong>≤ 3% drop on the branch circuit alone</strong>
        {' '}— the wire from the panel to the outlet</li>
      <li><strong>≤ 5% drop combined</strong> on feeder + branch
        — the wire from the service to the panel, plus the wire
        from the panel to the outlet</li>
    </ul>
    <p>
      Per NEC Article 210.19(A) Informational Note 4 and
      215.2(A)(1) Informational Note 2. "Informational" means
      they aren't code-violations on their own — but every
      jurisdiction inspector reads them as the standard, and
      energy-code adoption (IECC) is gradually making them
      enforceable.
    </p>

    <h2>The math — 2KIL ÷ CM</h2>
    <p>
      Voltage drop on a single-phase circuit:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      VD = 2 × K × I × L ÷ CM
    </p>
    <ul>
      <li><strong>K</strong> = 12.9 for copper at 75°C; 21.2 for
        aluminum</li>
      <li><strong>I</strong> = current in amps</li>
      <li><strong>L</strong> = one-way length in feet (formula
        doubles it for round-trip)</li>
      <li><strong>CM</strong> = wire circular mils from NEC
        Chapter 9 Table 8</li>
    </ul>
    <p>
      Run your numbers on the{' '}
      <Link href="/voltage-drop-calculator">voltage drop
      calculator</Link>.
    </p>

    <h2>When voltage drop matters most</h2>
    <p>
      The cases that bite electricians:
    </p>
    <ul>
      <li><strong>Long runs to detached structures.</strong> A
        garage 150 ft from the house on a 20A circuit can lose 6%
        on 12 AWG — switch to 10 AWG or 8 AWG.</li>
      <li><strong>Pool pumps and well pumps.</strong> Inductive
        loads draw 3-5× the running current at startup. A pump
        that runs at 12A but starts at 50A on a borderline-sized
        wire trips overload protection.</li>
      <li><strong>HVAC condensers.</strong> Compressor short-
        cycling under low voltage costs the compressor
        in 3-5 years vs the rated 15-20.</li>
      <li><strong>EV chargers.</strong> A 40A Level 2 charger on
        a 100 ft run needs 8 AWG, not 10, despite both being
        ampacity-legal.</li>
    </ul>

    <h2>Aluminum runs higher</h2>
    <p>
      Aluminum has 60% the conductivity of copper, so you need
      one to two AWG sizes larger to hit the same drop. Service
      entrance feeders are commonly aluminum (cheaper for the
      large gauges), but 10 AWG and smaller is almost always
      copper. The calculator's K = 12.9 is for copper — multiply
      its result by 1.6 for aluminum.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting to double the length.</strong> The
      formula uses one-way distance, then multiplies by 2 inside
      to account for the return path on the neutral. Many online
      calculators confuse this — be sure you're entering one-way
      distance.
    </p>
    <p>
      <strong>Using ampacity instead of actual load.</strong> A
      20A breaker doesn't mean a 20A continuous load. Use the
      design load (motor running current, EVSE charging current,
      total fixture wattage), not the breaker rating.
    </p>
    <p>
      <strong>Solving the drop with longer runs.</strong> If a
      100 ft run on 12 AWG is borderline, going to 12 AWG with a
      150 ft run isn't fixing anything — drop scales linearly with
      length. Upsize wire, not the run.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What's the maximum length for 12 AWG on a 20A
      circuit?</strong> About 60-70 ft for 3% drop at full 16A
      continuous load (120V single-phase). Less if the circuit
      runs near full capacity.
    </p>
    <p>
      <strong>Does voltage drop apply to DC circuits?</strong>{' '}
      The same physics, different formula — drop on a DC circuit
      is 2 × R × I where R is wire resistance per foot. Solar PV
      systems on long roof-to-inverter runs use the same NEC 3%
      target.
    </p>
    <p>
      <strong>Why does my LED light flicker on a long run?</strong>
      {' '}LED drivers are sensitive to low voltage. A 6-8% drop on
      a 120V circuit pushes the driver below the input voltage
      threshold and it cycles on/off. Upsize the wire or add a
      voltage stabilizer.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/voltage-drop-calculator" style={{ color: 'var(--hi-vis)' }}>voltage drop calculator</Link>{' '}
      uses K = 12.9 for copper at 75°C single-phase. Three-phase
      circuits use the same formula with √3 in the denominator;
      derate aluminum by 1.6. Verify designs for sizing critical
      circuits (pumps, HVAC, EVSE) with a licensed electrician.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'voltage-drop-nec',
  title: 'Voltage Drop — NEC 3 / 5 Percent Rule',
  metaTitle: 'Voltage Drop NEC Math — Copper Wire Sizing | ProjectCalc',
  metaDesc: 'Voltage drop math: 2KIL/CM formula, NEC 3% / 5% recommendation, when to upsize copper wire for long runs, pump and EVSE cases.',
  excerpt: 'Voltage drop on a long run does not trip a breaker. Lights flicker, motors run hot, compressors fail in five years instead of fifteen. Here is the NEC math that prevents it.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['voltage-drop-calculator', 'conduit-fill-calculator'],
  Body,
};

export default post;
