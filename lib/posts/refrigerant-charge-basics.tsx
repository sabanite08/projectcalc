import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Refrigerant charge is the difference between an AC that runs
      at 13 SEER as advertised and one that runs at 8 SEER and
      breaks in five years. Most undercharged or overcharged
      systems in the field weren't bad from the factory — they
      were charged by weight without verifying subcooling, or
      topped off "until it sounded right" without recovering and
      starting clean. Here is how the charge actually works and
      why the federal license matters.
    </p>

    <h2>The factory charge covers a standard line set</h2>
    <p>
      Every split-system AC ships pre-charged with refrigerant
      sized for a specific line set length — typically 15 ft or
      25 ft on residential equipment. Read the data plate; it'll
      say something like "Pre-charged for 15 ft line set @ 7 lb 4
      oz of R-410A."
    </p>
    <p>
      Run the line set longer and you have to add refrigerant by
      the ounce per linear foot of liquid line. For R-410A on a
      3/8" liquid line, the typical adder is 0.6 oz per foot. A
      40-ft run adds 25 ft × 0.6 oz = 15 oz, or about a pound,
      beyond the factory pre-charge.
    </p>
    <p>
      Run it shorter? Recover the difference. Skipping that step
      overcharges the system, kills compressor life, and floods
      the suction line during low-load operation.
    </p>

    <h2>Subcooling vs superheat</h2>
    <p>
      Final charge is verified by a thermodynamic measurement —
      not by weight alone. Two methods, depending on metering
      device:
    </p>
    <p>
      <strong>Subcooling</strong> (TXV / EEV systems — most modern
      equipment). Measure liquid line temperature at the condenser.
      Convert liquid line pressure to saturation temperature.
      Subcooling = saturation temp − liquid line temp. Target the
      manufacturer's spec, typically 8-12°F. Add refrigerant to
      raise subcooling, recover to lower it.
    </p>
    <p>
      <strong>Superheat</strong> (fixed-orifice / piston systems —
      older or budget equipment). Measure suction line temperature
      at the condenser. Convert suction pressure to saturation
      temperature. Superheat = suction line temp − saturation temp.
      Match the chart on the equipment for current outdoor and
      return air temps. Add refrigerant to lower superheat, recover
      to raise it.
    </p>
    <p>
      Either way: a manifold gauge set, a clamp-on thermometer, and
      the manufacturer's chart. The{' '}
      <Link href="/refrigerant-charge-calculator">refrigerant
      charge calculator</Link> is for ordering refrigerant, not
      replacing the verification step.
    </p>

    <h2>R-410A is going away</h2>
    <p>
      The AIM Act (American Innovation and Manufacturing Act)
      caps refrigerant GWP (global warming potential) at 700 for
      new residential systems starting January 1, 2025:
    </p>
    <ul>
      <li><strong>R-410A</strong> — GWP 2,088. Phasing out. Still
        legal to service existing systems and recharge them, but
        new manufacture is over.</li>
      <li><strong>R-454B</strong> — GWP 466. The 2025+ residential
        replacement. Mildly flammable (A2L), so equipment is
        redesigned for it. Trane, Carrier, Lennox have rolled out.</li>
      <li><strong>R-32</strong> — GWP 675. Common in mini-splits
        from Mitsubishi, Daikin, Fujitsu. Also A2L.</li>
    </ul>
    <p>
      A2L mildly-flammable refrigerants need different leak
      detection and may require minimum room volume per the NEC
      and product standards — talk to the equipment rep on a new
      install.
    </p>

    <h2>EPA Section 608 — the federal license</h2>
    <p>
      Section 608 of the Clean Air Act requires technician
      certification to:
    </p>
    <ul>
      <li>Purchase refrigerant in cylinders larger than 2 lbs</li>
      <li>Recover, recycle, or reclaim refrigerant</li>
      <li>Charge or remove refrigerant from sealed equipment</li>
    </ul>
    <p>
      Three certification levels:
    </p>
    <ul>
      <li><strong>Type I</strong> — small appliances</li>
      <li><strong>Type II</strong> — high-pressure (residential AC,
        heat pumps)</li>
      <li><strong>Universal</strong> — everything</li>
    </ul>
    <p>
      Penalties: up to $44,539 per day per violation as of 2024.
      Selling refrigerant to non-certified buyers, venting
      refrigerant, or "topping off" without recovery — all federal
      violations.
    </p>

    <h2>Common charge mistakes</h2>
    <p>
      <strong>Topping off a leaking system.</strong> If the system
      lost charge, it has a leak. Find it, repair it, evacuate,
      recharge by weight. Topping off without leak repair kills the
      compressor (oil migrates with refrigerant out of the leak)
      and pollutes the atmosphere.
    </p>
    <p>
      <strong>Charging by gauge pressures alone.</strong> Pressures
      vary with outdoor temp, indoor temp, and humidity.
      "Pressures look right at 95°F outdoor" doesn't mean the
      charge is correct at 75°F outdoor. Use subcooling/superheat,
      not just pressure.
    </p>
    <p>
      <strong>Mixing refrigerants.</strong> Never. R-410A in an
      R-22 system, R-32 in an R-410A system — both lead to
      compressor failure and warranty void. Recover, evacuate,
      recharge with the correct fluid.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/refrigerant-charge-calculator" style={{ color: 'var(--hi-vis)' }}>refrigerant charge calculator</Link>{' '}
      gives a planning figure for line set sizing and refrigerant
      ordering. Final charge must be verified by subcooling or
      superheat per the manufacturer's spec, by an EPA Section
      608-certified technician. Charging procedures are
      regulated by federal law.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'refrigerant-charge-basics',
  title: 'Refrigerant Charge — Pounds, Subcooling, and Section 608',
  metaTitle: 'Refrigerant Charge — Lbs, Subcooling, EPA Section 608 | ProjectCalc',
  metaDesc: 'How to size refrigerant charge for split systems: factory pre-charge, line set adders, subcooling vs superheat verification, R-410A → R-454B transition.',
  excerpt: 'A 3-ton AC ships pre-charged for 25 ft of line set. Run it 50 ft and you owe it a pound of refrigerant — by ounce-per-foot, not by gauge pressure.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['refrigerant-charge-calculator', 'btu-calculator', 'manual-j-heat-load-calculator'],
  Body,
};

export default post;
