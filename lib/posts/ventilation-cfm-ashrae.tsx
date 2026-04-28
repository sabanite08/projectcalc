import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Modern homes are sealed tight enough that they need
      mechanical ventilation. The 1980s and earlier housing stock
      leaked enough air through cracks that infiltration covered
      the fresh-air requirement; new construction at 3 ACH50 or
      tighter does not. ASHRAE 62.2 is the standard the IECC and
      most state codes reference for "how much fresh air is
      enough." Here is the math and the practical strategies.
    </p>

    <h2>The ASHRAE 62.2 whole-house formula</h2>
    <p>
      ASHRAE 62.2-2019 sets the whole-house ventilation rate as:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      Q = 0.03 × A_floor + 7.5 × (Nbr + 1)
    </p>
    <p>
      Where:
    </p>
    <ul>
      <li><strong>Q</strong> = total whole-house ventilation in CFM</li>
      <li><strong>A_floor</strong> = conditioned floor area in ft²</li>
      <li><strong>Nbr + 1</strong> = number of bedrooms plus 1
        (assumed occupancy)</li>
    </ul>
    <p>
      A 2,000 ft² 3-bedroom home: Q = 0.03 × 2000 + 7.5 × 4 = 60 +
      30 = 90 CFM. That's the continuous fresh-air target. Run a
      bath fan at 50% for 24 hours and you've delivered roughly
      that.
    </p>

    <h2>When mechanical ventilation is required</h2>
    <p>
      ASHRAE 62.2 (and the IECC reference) requires mechanical
      ventilation when the home tests below <strong>5 ACH50</strong>
      on a blower-door test. Practical translation:
    </p>
    <ul>
      <li>Pre-2000 home with original windows and no air sealing —
        usually 8-15 ACH50 — natural infiltration covers it</li>
      <li>Post-2010 home built to IECC code — usually 3-5 ACH50 —
        right at the threshold</li>
      <li>Any home retrofitted with sprayfoam, new windows, and air
        sealing — often 1-3 ACH50 — definitely needs mechanical</li>
    </ul>
    <p>
      Run the calc with the{' '}
      <Link href="/ventilation-cfm-calculator">ventilation CFM
      calculator</Link>.
    </p>

    <h2>Local exhaust requirements</h2>
    <p>
      ASHRAE 62.2 also sets minimums for local (point-source)
      exhaust:
    </p>
    <ul>
      <li><strong>Kitchen:</strong> 100 CFM intermittent (range
        hood) or 5 ACH continuous at the kitchen volume — usually
        25 CFM continuous</li>
      <li><strong>Bathroom:</strong> 50 CFM intermittent or 20 CFM
        continuous, per bathroom</li>
      <li><strong>Laundry:</strong> 50 CFM intermittent</li>
    </ul>
    <p>
      A bath fan can pull double duty — 50 CFM during shower use,
      20 CFM continuous as part of the whole-house ventilation
      total. Panasonic WhisperGreen and similar dual-speed fans
      are designed exactly for this.
    </p>

    <h2>Three ventilation strategies</h2>
    <p>
      <strong>Exhaust-only.</strong> Run a continuous bath fan at
      the calculated CFM. Cheapest, simplest, slightly
      depressurizes the house. Fresh air enters through cracks and
      passive vents. Works fine in mild climates.
    </p>
    <p>
      <strong>Supply-only.</strong> Duct outdoor air to the return
      side of the air handler. Slightly pressurizes the house,
      which keeps moisture out of walls in cold climates. Mixing
      with conditioned air avoids the "cold draft" problem.
    </p>
    <p>
      <strong>Balanced (HRV / ERV).</strong> Best by far. A heat
      recovery ventilator (cold climate) or energy recovery
      ventilator (humid climate) recovers 60-90% of the heat or
      moisture from the exhaust stream and transfers it to the
      incoming fresh air. Costs $1,200-3,000 installed; pays back
      in energy savings in 5-10 years and gives the cleanest indoor
      air.
    </p>

    <h2>Sizing an HRV or ERV</h2>
    <p>
      Match the unit's rated CFM to the ASHRAE 62.2 whole-house
      number, plus a 25% margin for actual installed flow vs rated
      flow. A 90 CFM target means a 110-120 CFM rated HRV.
    </p>
    <p>
      HRV vs ERV:
    </p>
    <ul>
      <li><strong>HRV</strong> recovers heat only. Good for cold
        dry climates (zones 6-8) where you want to dump indoor
        moisture in winter.</li>
      <li><strong>ERV</strong> recovers heat AND moisture. Good for
        humid climates (zones 1-4) where keeping summer humidity
        out is the priority. Also good for cold climates if your
        home runs too dry in winter.</li>
    </ul>

    <h2>Common ventilation mistakes</h2>
    <p>
      <strong>Spec'ing a 110-CFM bath fan and assuming it
      delivers 110.</strong> Installed flow is typically 60-70% of
      rated due to flex duct restrictions, elbows, and roof caps.
      Verify with a flow hood or oversize the fan.
    </p>
    <p>
      <strong>Skipping ventilation in a tight retrofit.</strong>
      Spray-foaming an attic and replacing windows takes a 12 ACH50
      house to 3 ACH50 in a weekend. Indoor air quality complaints
      follow within months — moisture on windows, lingering cooking
      smells, off-gassing buildup. Add mechanical ventilation as
      part of any envelope retrofit.
    </p>
    <p>
      <strong>Pulling fresh air from a garage or attic.</strong>
      The fresh-air intake has to be outdoors, away from the
      garage, dryer vent, plumbing vent, and bathroom exhaust.
      Minimum 10 ft of separation per ASHRAE 62.2.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/ventilation-cfm-calculator" style={{ color: 'var(--hi-vis)' }}>ventilation CFM calculator</Link>{' '}
      uses ASHRAE 62.2-2019 rates. Code adoption varies by
      jurisdiction. Installed flow must be verified at the grille
      with a flow hood, and tight new construction requires a
      blower-door test to confirm the mechanical-ventilation
      threshold.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'ventilation-cfm-ashrae',
  title: 'Ventilation CFM — ASHRAE 62.2 in Practice',
  metaTitle: 'Ventilation CFM — ASHRAE 62.2 Fresh Air Math | ProjectCalc',
  metaDesc: 'How to size whole-house and local-exhaust ventilation: ASHRAE 62.2 formula, kitchen/bath/laundry exhaust, HRV vs ERV, when mechanical ventilation is required.',
  excerpt: 'Tight homes need mechanical ventilation. Here is the ASHRAE 62.2 whole-house formula, the kitchen and bath exhaust minimums, and HRV vs ERV.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['ventilation-cfm-calculator', 'duct-cfm-calculator', 'static-pressure-calculator'],
  Body,
};

export default post;
