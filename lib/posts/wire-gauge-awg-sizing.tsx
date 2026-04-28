import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Wire size is one of those decisions where the cheap mistake
      and the expensive mistake look identical when the drywall
      goes back up. Undersized conductors run hot under load,
      degrade insulation, and end careers when an inspector pulls
      a panel cover. Oversized conductors waste copper budget and
      jam connector lugs. NEC Table 310.16 settles the argument.
    </p>

    <h2>The 75°C column is the answer for almost everyone</h2>
    <p>
      NEC Table 310.16 lists three temperature columns: 60°C,
      75°C, and 90°C. The wire's insulation is rated higher (90°C
      for THHN, the most common building wire), but the
      <em> termination </em>at the breaker, lug, or device caps the
      usable ampacity at 75°C for any equipment rated for over 100 A
      and effectively for residential and commercial work
      generally.
    </p>
    <p>
      Practical effect:
    </p>
    <ul>
      <li><strong>14 AWG copper</strong> — 15 A, only on a 15 A breaker</li>
      <li><strong>12 AWG copper</strong> — 20 A</li>
      <li><strong>10 AWG copper</strong> — 30 A</li>
      <li><strong>8 AWG copper</strong> — 50 A (75°C)</li>
      <li><strong>6 AWG copper</strong> — 65 A</li>
      <li><strong>4 AWG copper</strong> — 85 A</li>
      <li><strong>2 AWG copper</strong> — 115 A</li>
      <li><strong>1/0 AWG copper</strong> — 150 A</li>
      <li><strong>2/0 AWG copper</strong> — 175 A</li>
      <li><strong>3/0 AWG copper</strong> — 200 A</li>
    </ul>
    <p>
      Aluminum is one to two sizes larger for equivalent ampacity.
      That is the whole story for normal terminations.
    </p>

    <h2>The 125% continuous-load multiplier</h2>
    <p>
      NEC 210.19(A)(1) and 215.2 say a circuit feeding a continuous
      load (anything operating 3+ hours: EV charger, electric heat,
      sign lighting, server room) must size both conductor and
      breaker at <strong>125%</strong> of the continuous load. A
      32 A continuous EV charger draws 32 A, but the breaker and
      wire size from a 40 A target — 8 AWG copper, 40 A breaker.
    </p>
    <p>
      Skip this and a load that is at code on paper still trips
      under sustained draw, because thermal protection is calibrated
      for that 80% rule. Apply the 1.25 multiplier before entering
      amps in the{' '}
      <Link href="/wire-gauge-calculator">wire gauge calculator</Link>.
    </p>

    <h2>Voltage drop is a separate test</h2>
    <p>
      Ampacity says the wire won't melt. Voltage drop says the
      load gets enough volts to actually work. NEC 210.19(A) IN 4
      caps branch-circuit drop at 3% — typical breakpoint where
      LED lights flicker, motors hum, and electronics glitch.
    </p>
    <p>
      Long runs blow past the ampacity sizing first. Examples:
    </p>
    <ul>
      <li><strong>20 A on 12 AWG, 120 V, 100 ft.</strong> 4.0%
        drop — fails. Bump to 10 AWG or move to 240 V.</li>
      <li><strong>40 A EV charger, 240 V, 75 ft.</strong> 8 AWG
        passes ampacity but drops 1.7% — fine.</li>
      <li><strong>30 A subpanel, 240 V, 200 ft.</strong> 10 AWG is
        2.6% — passes, but tight. 8 AWG is the safer call.</li>
    </ul>
    <p>
      The calculator runs the drop check and bumps a size if it
      exceeds 3%.
    </p>

    <h2>Aluminum vs copper</h2>
    <p>
      Aluminum has 60% the conductivity of copper. The Al column
      in NEC 310.16 reflects that — a 100 A copper feeder is 3 AWG
      copper or 1 AWG aluminum, a 200 A copper feeder is 2/0
      copper or 4/0 aluminum. Aluminum is materially cheaper at
      large gauges (service entrance, subpanel feeders), so the
      service drop into your house is almost always aluminum even
      though the branch circuits are copper.
    </p>
    <p>
      Aluminum needs antioxidant compound (Noalox) at every
      termination and ratcheted lugs torqued to spec. Don't mix
      aluminum and copper at a lug — use AL/CU rated devices or a
      copper pigtail.
    </p>

    <h2>Common wire-size mistakes</h2>
    <p>
      <strong>Sizing for breaker, not for load.</strong> The
      breaker is the maximum, not the design point. A 20 A breaker
      with 8 A of LED lighting doesn't need 12 AWG up to that
      breaker rating — it needs 14 AWG and a 15 A breaker.
    </p>
    <p>
      <strong>Forgetting derating in conduit.</strong> NEC
      310.15(C)(1): more than 3 current-carrying conductors in a
      raceway derates ampacity. 4–6 conductors → 80%; 7–9 → 70%;
      10–20 → 50%. Bundling many circuits in one EMT is the silent
      reason a properly-sized wire still cooks.
    </p>
    <p>
      <strong>Ignoring temperature.</strong> Conductors run
      through an attic in Phoenix derate 12-15% for ambient. The
      75°C column assumes 30°C ambient.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/wire-gauge-calculator" style={{ color: 'var(--hi-vis)' }}>wire gauge calculator</Link>{' '}
      uses NEC 310.16 75°C ampacity and a 3% voltage-drop check.
      Conduit bundling, ambient temperature, motor-circuit rules
      (NEC 430), and termination-rating exceptions are not
      modeled. Verify final wire size with a licensed electrician
      and the local AHJ before installation.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'wire-gauge-awg-sizing',
  title: 'Wire Gauge — Picking the Right AWG',
  metaTitle: 'Wire Gauge AWG Sizing — NEC 310.16 Quick Guide | ProjectCalc',
  metaDesc: 'How to pick AWG wire size from amps and run length. NEC 310.16 75°C column, 125% continuous-load rule, 3% voltage-drop bump, copper vs aluminum.',
  excerpt: 'Wire size is the cheap mistake that hides until inspection. Here is the NEC 310.16 75°C column, the 125% continuous-load rule, and when voltage drop forces a bump.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['wire-gauge-calculator', 'voltage-drop-calculator', 'circuit-breaker-size-calculator'],
  Body,
};

export default post;
