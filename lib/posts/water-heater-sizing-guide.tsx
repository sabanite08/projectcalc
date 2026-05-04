import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Water heater sizing comes down to one question: can it deliver
      hot water to all the things running at the same time on your
      busiest morning? For tank heaters that&apos;s called the First
      Hour Rating (FHR). For tankless it&apos;s gallons per minute
      (GPM) at the temperature rise your inlet needs. Get either
      wrong and you run cold partway through showers. Here&apos;s the
      math, the standard sizes, and what changes by climate.
    </p>

    <h2>Tank vs tankless — the actual decision</h2>
    <p>
      <strong>Tank water heaters</strong> store 30-80 gallons at
      120-140°F continuously and refill as you draw down. Cheaper
      upfront ($500-1,200 installed), shorter life (10-15 years),
      and they cycle the burner all day to maintain stored temperature
      — which costs money on the fuel bill.
    </p>
    <p>
      <strong>Tankless water heaters</strong> heat water on demand as
      it flows through the unit. Higher upfront ($1,500-3,500
      installed), longer life (20+ years), and only run when there&apos;s
      actual hot water draw — saving 20-30% on energy in moderate-use
      households. The constraint is flow rate: a unit rated 7 GPM
      handles one shower (2.5 GPM) plus a kitchen sink (1.5 GPM)
      simultaneously. Past that, the temperature drops.
    </p>
    <p>
      Tankless wins for: small/medium households (1-4 people), tight
      mechanical rooms, vacation homes, gas-line upgrades. Tank wins
      for: large households (5+ people), heavy simultaneous use,
      cold-inlet climates that derate tankless GPM, and tight budgets.
    </p>

    <h2>Tank sizing — the FHR rule</h2>
    <p>
      First Hour Rating is the gallons of hot water a tank can
      deliver in one hour starting from a full tank. It depends on
      tank capacity, recovery rate (how fast the burner refills hot
      water), and burner BTU. The DOE Energy Saver guideline:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      Household        FHR target   Tank size{'\n'}
      1-2 people       45 gal       40 gal{'\n'}
      3 people         60 gal       50 gal{'\n'}
      4 people         70 gal       60 gal{'\n'}
      5 people         80 gal       75 gal{'\n'}
      6+ people        90 gal       80 gal
    </p>
    <p>
      Notice tank size is smaller than FHR — that&apos;s because gas
      tanks recover ~30 gallons of hot water per hour while the burner
      runs, so the FHR exceeds the static capacity. Electric tanks
      recover slower (~20 gal/hr), so you size up by ~10 gallons for
      the same household.
    </p>
    <p>
      The <Link href="/water-heater-size-calculator">water heater
      sizing calculator</Link> handles both gas and electric assumptions.
    </p>

    <h2>Tankless sizing — GPM at temperature rise</h2>
    <p>
      Tankless capacity is rated as &ldquo;X GPM at Y°F rise.&rdquo;
      The rise is the difference between cold inlet temperature and
      desired output temperature. Standard hot water output is 110-
      120°F at the fixture. Cold inlet varies by season and region:
    </p>
    <ul>
      <li><strong>Southern US, summer:</strong> 70°F inlet → 50°F rise to 120°F output</li>
      <li><strong>Northern US, winter:</strong> 40°F inlet → 80°F rise</li>
      <li><strong>Cold-climate well water, winter:</strong> 35°F inlet → 85°F rise</li>
    </ul>
    <p>
      Manufacturers rate units at 70°F rise as the standard. A unit
      labeled 7 GPM at 70°F rise delivers only ~5 GPM at 90°F rise
      — which means a Boston winter starves a unit that worked fine
      in Houston. Size for your worst-case rise.
    </p>
    <p>
      Required GPM by household:
    </p>
    <ul>
      <li>1-2 people: 5-6 GPM (one shower + sink)</li>
      <li>3-4 people: 7-8 GPM (one shower + dishwasher + sink)</li>
      <li>5+ people: 9-11 GPM (two showers simultaneously)</li>
    </ul>

    <h2>Worked example — 4-person family in Buffalo</h2>
    <p>
      Tank option: 60 gallon gas tank, FHR ~70 gal. Handles morning
      peak (two showers + dishwasher running back-to-back) without
      running out. Lifecycle cost over 12 years: ~$8,000 (equipment
      + gas).
    </p>
    <p>
      Tankless option: 8 GPM tankless rated at 70°F rise. In Buffalo
      winter (40°F inlet, 80°F rise), effective output drops to
      ~7 GPM — still handles one shower (2.5) + dishwasher (1.0) +
      sink (1.5) = 5 GPM peak. Lifecycle cost over 20 years (longer
      service life): ~$11,000 (equipment + gas, 25% less than tank).
    </p>
    <p>
      Tankless wins on lifecycle in this case — the longer service
      life and lower fuel use offset the higher upfront cost. In a
      6-person household, the math flips because peak GPM exceeds
      what a single residential tankless can handle.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Verify gas line capacity before tankless.</strong>
      {' '}A 199,000 BTU tankless on a long gas run from the meter
      may starve at peak fire — the line either needs upsizing or
      a dedicated 1-inch run from the meter. Quote includes line
      assessment.
    </p>
    <p>
      <strong>Keep tank water heater drained low for safety.</strong>
      {' '}Set thermostat to 120°F not 140°F. Above 130°F is the
      legionella safety threshold but also a major scald risk —
      water at 140°F causes third-degree burns in 5 seconds. Anti-
      scald valves at fixtures are required by IRC R310.
    </p>
    <p>
      <strong>Run a recirculation loop on long hot-water runs.</strong>
      {' '}If the bathroom is 50+ feet of pipe from the heater, a
      recirculation pump or on-demand recirc system saves the gallons
      that get wasted waiting for hot water. Pays for itself in
      under 3 years on water bills alone.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size water heater for a family of 4?</strong>
      {' '}60 gallon gas tank or 8 GPM tankless at 70°F rise. Adjust
      tankless up to 9-10 GPM if you&apos;re in a cold inlet region.
    </p>
    <p>
      <strong>Can I run two showers on one tankless?</strong> Yes
      if the unit is rated 7+ GPM at your design rise. Two showers
      at 2.5 GPM each = 5 GPM, plus any other simultaneous use.
    </p>
    <p>
      <strong>Heat pump water heaters — different math?</strong>
      {' '}Same FHR sizing as electric tank, with a recovery rate
      bonus when ambient air is warm (heat pumps pull heat from the
      mechanical room). In cold basements they switch to backup
      resistance and lose the efficiency advantage.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Need to size the supply line too?</strong> Use the{' '}
      <Link href="/water-supply-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>water supply pipe size calculator</Link>
      {' '}to confirm your incoming water service can deliver the
      GPM your new heater needs.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'water-heater-sizing-guide',
  title: 'Water Heater Sizing — Tank Gallons or Tankless GPM',
  metaTitle: 'Water Heater Sizing — DOE FHR + Tankless GPM | ProjectCalc',
  metaDesc: 'How to size a water heater. DOE First Hour Rating for tanks, GPM at temperature rise for tankless, and when each wins on lifecycle cost.',
  excerpt: 'Water heater sizing is one question — can it deliver to all the things running on your busiest morning? Here is the math for tank FHR and tankless GPM, plus what changes by climate.',
  date: '2026-05-03',
  readTime: 7,
  category: 'home',
  relatedCalcs: ['water-heater-size-calculator', 'water-supply-pipe-size-calculator', 'btu-calculator'],
  Body,
};

export default post;
