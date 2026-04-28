import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      A breaker is not the on/off switch the homeowner thinks it
      is — it is a calibrated thermal/magnetic device sized to
      protect the wire downstream from overheating. Get the
      breaker right and the wire never runs warm. Get it wrong
      and either the breaker nuisance-trips or, worse, the wire
      cooks before the breaker notices.
    </p>

    <h2>Breakers come in standard sizes only</h2>
    <p>
      NEC 240.6(A) lists the standard breaker sizes:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250 A
    </p>
    <p>
      Anything else is non-standard — they exist (35, 45 A are
      stocked but unusual) but selecting one outside this list
      means specifying a custom breaker. The{' '}
      <Link href="/circuit-breaker-size-calculator">breaker
      calculator</Link> always rounds up to the nearest standard.
    </p>

    <h2>The 125% rule for continuous loads</h2>
    <p>
      A continuous load operates 3 hours or more — lighting in a
      retail store, an EV charger, electric baseboard heat in
      January, the freezer in your garage, the LED sign over your
      shop. NEC 210.20(A) requires breaker (and conductor) to be
      sized at <strong>125% of the continuous load</strong>:
    </p>
    <ul>
      <li>16 A continuous → 16 × 1.25 = 20 A breaker</li>
      <li>32 A EV charger → 32 × 1.25 = 40 A breaker</li>
      <li>48 A EV charger → 48 × 1.25 = 60 A breaker</li>
    </ul>
    <p>
      The 80%/125% rule comes from the breaker thermal curve.
      Standard breakers are calibrated for 80% sustained operation
      at their rating; push past that and the bimetal strip drifts,
      then nuisance-trips, then doesn't trip when it should.
    </p>

    <h2>Watts to amps the right way</h2>
    <p>
      For resistive loads (heaters, incandescent lights, ovens):
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      amps = watts ÷ volts
    </p>
    <p>
      For 3-phase: divide by V × √3 × power factor. For motors:
      <em> use the FLA (full-load amps) on the nameplate</em>, not
      watts — motor power factor and inrush mess up the math.
    </p>

    <h2>Motor circuits play by NEC 430</h2>
    <p>
      Motors get sized differently because of inrush. A 12 A motor
      drawing 60 A for half a second at startup would trip a 15 A
      breaker every time it cycled. NEC 430.52 lets the inverse-
      time breaker on a motor circuit run up to 250% of the FLA
      (typical small motors), with the overload relay at the
      starter handling the actual thermal protection of the motor
      windings.
    </p>
    <p>
      A 12 A continuous-rated air handler motor commonly lands on a
      30 A breaker — fully code-legal, with a 12 A overload at the
      contactor doing the protection. The calculator flags motor
      mode and applies the 2.5× multiplier.
    </p>

    <h2>Wire and breaker have to match</h2>
    <p>
      Sizing wire to one rating and breaker to another gets people
      killed. Pairs that always go together (residential, NEC
      310.16 75°C):
    </p>
    <ul>
      <li>14 AWG copper ↔ 15 A breaker</li>
      <li>12 AWG copper ↔ 20 A breaker</li>
      <li>10 AWG copper ↔ 30 A breaker</li>
      <li>8 AWG copper ↔ 40 A or 50 A breaker</li>
      <li>6 AWG copper ↔ 60 A or 65 A breaker</li>
      <li>4 AWG copper ↔ 85 A breaker</li>
      <li>3 AWG copper ↔ 100 A breaker</li>
      <li>2/0 AWG copper ↔ 175 A breaker</li>
      <li>3/0 AWG copper ↔ 200 A breaker</li>
    </ul>
    <p>
      Run the load through the{' '}
      <Link href="/circuit-breaker-size-calculator">breaker
      calculator</Link>, then verify the matching wire on the{' '}
      <Link href="/wire-gauge-calculator">wire gauge calculator</Link>.
    </p>

    <h2>Common breaker mistakes</h2>
    <p>
      <strong>Upsizing the breaker to stop nuisance trips.</strong>
      A 15 A circuit on 14 AWG that keeps tripping is telling you
      the load is too heavy for the wire — not the breaker. Going
      to 20 A on 14 AWG turns the breaker into kindling protection
      instead of wire protection. Add a circuit, don't upsize the
      breaker.
    </p>
    <p>
      <strong>Putting an EV charger on a 50 A breaker for a 40 A
      car.</strong> A 40 A continuous load is 50 A breaker only if
      the EVSE is hardwired and listed for 80% — a plug-in 40 A
      charger needs 50 A breaker, but 50 A continuous needs a 60 A
      breaker. Read the EVSE spec sheet.
    </p>
    <p>
      <strong>Forgetting the AFCI / GFCI requirements.</strong>
      Bedrooms, kitchens, and bathrooms have specific breaker-type
      requirements that the size calculator does not check.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/circuit-breaker-size-calculator" style={{ color: 'var(--hi-vis)' }}>breaker size calculator</Link>{' '}
      gives the next-standard NEC 240.6 size with the 125% continuous
      multiplier and a basic motor flag. AFCI, GFCI, series-rated
      panels, and selective coordination are not modeled. Confirm
      breaker selection with a licensed electrician and the local
      AHJ.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'circuit-breaker-sizing',
  title: 'Circuit Breaker Sizing — NEC 240.6 in Practice',
  metaTitle: 'Circuit Breaker Sizing — NEC 240.6 + 125% Rule | ProjectCalc',
  metaDesc: 'How to pick the right breaker size: standard NEC 240.6 sizes, 125% continuous-load rule, watts-to-amps math, motor circuits per NEC 430.52.',
  excerpt: 'Breakers protect the wire, not the appliance. Here is NEC 240.6 standard sizes, the 80% / 125% rule, and why motors get oversized breakers on purpose.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['circuit-breaker-size-calculator', 'wire-gauge-calculator', 'panel-load-calculator'],
  Body,
};

export default post;
