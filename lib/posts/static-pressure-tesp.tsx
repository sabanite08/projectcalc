import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Static pressure is the single most under-measured number in
      residential HVAC. Every contractor checks refrigerant
      pressures; almost none drill the plenums and read TESP. Yet
      high static pressure is the cause behind half the warranty
      calls — iced coils in summer, cracked heat exchangers in
      winter, blown blower motors. Here is the math, the rule of
      thumb, and what a Magnehelic gauge actually tells you.
    </p>

    <h2>What TESP is</h2>
    <p>
      Total External Static Pressure (TESP) is the resistance the
      blower has to overcome to push air through the system —
      everything <em>outside</em> the air-handler cabinet. The
      blower fights against four pressure drops:
    </p>
    <ul>
      <li>The filter</li>
      <li>The evaporator coil</li>
      <li>The supply duct, registers, and balancing dampers</li>
      <li>The return duct and grille</li>
    </ul>
    <p>
      Add them up and that number has to be less than what the
      blower is rated for. Most residential PSC blowers are rated
      0.5" w.c. ECM blowers handle 0.5-0.8" w.c. depending on
      programming.
    </p>

    <h2>What 0.5" w.c. means</h2>
    <p>
      Inches of water column (in. w.c. or in. WC) is the unit the
      HVAC industry uses for low-pressure measurements.
      0.5" w.c. = the pressure that would lift a column of water
      half an inch. Tiny in absolute terms, but it's a meaningful
      load on a 1/3 to 1/2 HP residential blower motor.
    </p>
    <p>
      Run the blower at 0.7-0.8" w.c. and:
    </p>
    <ul>
      <li>Airflow drops 25-40% (the blower curve flattens)</li>
      <li>The coil sees less air per minute, gets colder, ices up
        in summer</li>
      <li>The heat exchanger sees less air, gets hotter, cracks in
        winter</li>
      <li>The motor pulls harder, runs hotter, and the windings
        bake</li>
      <li>Equipment dies in 5-7 years instead of 15-20</li>
    </ul>

    <h2>The 1-inch MERV-13 filter trap</h2>
    <p>
      The single biggest installer mistake of the past 10 years is
      handing the homeowner a 1-inch MERV-13 filter "for COVID" or
      "for allergies" without changing the filter cabinet.
    </p>
    <p>
      A 1-inch MERV-13 pleated filter has too little surface area
      to pass full system airflow without a major pressure drop:
    </p>
    <ul>
      <li>Clean: 0.20-0.30" w.c.</li>
      <li>Loaded (3-month service interval): 0.40-0.50" w.c.</li>
    </ul>
    <p>
      That single filter eats most of the blower's static-pressure
      budget by itself. Solution: install a 4-inch or 5-inch media
      cabinet (Aprilaire, Honeywell, Trion). Same MERV rating, 4-5x
      the surface area, runs 0.10-0.15" w.c. clean. Costs $80-150
      and a couple hours to install.
    </p>

    <h2>The undersized return grille trap</h2>
    <p>
      Single 20×25 return grille for a whole 4-ton system is the
      other classic. Move 1,600 CFM through 350 in² of grille face
      and you're at 4-5 fpm face velocity — the air can't accelerate
      cleanly into the duct. Pressure drop: 0.20-0.30" w.c. on the
      return side alone.
    </p>
    <p>
      Industry rule: return grille face area should be at least 1
      ft² per 400 CFM (or about 144 in² per ton). A 4-ton system
      needs 576+ in² of return grille — two 20×25 grilles, or
      one 24×30, or several smaller distributed throughout the
      house.
    </p>

    <h2>Reading TESP with a gauge</h2>
    <p>
      Equipment: a Magnehelic 0-1.0" w.c. gauge ($50-80 used,
      $150 new) or a digital manometer ($200-400, more useful).
    </p>
    <p>
      Procedure:
    </p>
    <ol>
      <li>Drill a 3/8" hole in the supply plenum, 6-12" downstream
        of the coil</li>
      <li>Drill another in the return plenum, 6-12" upstream of
        the filter</li>
      <li>Insert the gauge probe into one port, the reference port
        into the other</li>
      <li>Run blower on cooling speed for 5 minutes; read</li>
      <li>Plug the holes with rubber grommets when finished</li>
    </ol>
    <p>
      Run the same measurement before and after a duct change to
      see if you actually fixed the problem. Run it on heating
      speed too if you have variable-speed gas heat — the airflow
      target is different.
    </p>

    <h2>Common static-pressure mistakes</h2>
    <p>
      <strong>Reading filter pressure drop from the box label.</strong>
      Filter manufacturers publish drop figures at clean condition
      and at a specific face velocity (often 295 fpm). Real
      residential face velocity runs 300-400 fpm. Real-world clean
      drop is usually 1.5-2× the catalog figure.
    </p>
    <p>
      <strong>Ignoring the heat-exchanger drop on gas
      furnaces.</strong> A clogged secondary heat exchanger on a
      condensing furnace can add 0.10-0.20" by itself. Service
      call territory.
    </p>
    <p>
      <strong>Spec'ing a high-MERV filter without measuring.</strong>
      Filter upgrades are popular and silent killers if not paired
      with a media cabinet. Measure TESP before and after any
      filter change.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/static-pressure-calculator" style={{ color: 'var(--hi-vis)' }}>static pressure calculator</Link>{' '}
      sums typical pressure drops for filters, coils, and ducts.
      Real measured TESP requires a Magnehelic gauge or digital
      manometer at the plenums. Equipment selection and duct
      modifications should be verified by a licensed HVAC
      contractor.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'static-pressure-tesp',
  title: 'Static Pressure — Why TESP Kills Equipment',
  metaTitle: 'Static Pressure / TESP — Filter, Coil, Duct Drops | ProjectCalc',
  metaDesc: 'Total External Static Pressure (TESP) basics: 0.5" w.c. blower limit, 1-inch MERV-13 trap, undersized return grille, how to measure with a Magnehelic gauge.',
  excerpt: 'High static pressure is the cause behind half of all HVAC warranty calls. Here is what 0.5" w.c. means, why 1-inch MERV-13 filters destroy systems, and how to measure it.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['static-pressure-calculator', 'duct-cfm-calculator', 'manual-j-heat-load-calculator'],
  Body,
};

export default post;
