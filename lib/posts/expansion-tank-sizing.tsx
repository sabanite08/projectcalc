import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The little blue (or red) cylinder strapped to the cold-water line above
      your water heater is an expansion tank, and most homeowners ignore it
      until it fails — at which point everything from the T&amp;P relief
      valve to the supply-line fittings starts to leak. This guide covers
      why closed plumbing systems need expansion tanks, the formula for
      sizing one, and the install details that make the difference between
      a tank that lasts 15 years and one that fails in two.
    </p>

    <h2>Why thermal expansion needs somewhere to go</h2>
    <p>
      Water expands when heated. Roughly 0.04% per 10°F rise — small, but
      not nothing in a 50-gallon water heater going from 50°F cold inlet to
      140°F stored hot. That&apos;s about 1.8 gallons of expansion. The
      expansion needs to go somewhere; otherwise the system pressurizes
      until something gives.
    </p>
    <p>
      In an open system (no check valve, no PRV, no backflow preventer
      between the meter and the water heater), expansion just pushes back
      out through the meter into the municipal main. Pressure stays stable.
      No expansion tank required.
    </p>
    <p>
      In a closed system (any of the above devices present), the expansion
      has nowhere to go. Pressure rises with each heating cycle — typically
      from 60 PSI cold to 150+ PSI after recovery. The T&amp;P relief valve
      is rated to pop at 150 PSI, so it discharges, then reseals, then pops
      again next cycle. Each cycle ages the relief valve and stresses every
      fitting in the system. Eventually something fails.
    </p>

    <h2>How to tell if your system is closed</h2>
    <p>
      Three things to check at the water meter or just downstream:
    </p>
    <ol>
      <li><strong>Pressure-reducing valve (PRV).</strong> A bell-shaped or cylindrical valve, usually adjustable. Required by most codes when incoming municipal pressure exceeds 80 PSI. Most modern homes have one.</li>
      <li><strong>Backflow preventer.</strong> A double-check valve assembly, usually on the irrigation feed but sometimes on the main. Required for irrigation systems and some commercial setups.</li>
      <li><strong>Check valve in the meter or service line.</strong> Some utility districts install check valves at the meter to prevent backflow into their main. Often invisible to the homeowner — call the utility to confirm.</li>
    </ol>
    <p>
      Any of the three creates a closed system. UPC 608.3 and IPC 607.3.1
      both require an expansion tank in this case. If your home was built
      after about 2005 in a typical US jurisdiction, it likely has a PRV
      and likely needs an expansion tank — check above the water heater.
    </p>

    <h2>Sizing the tank</h2>
    <p>
      The standard formula (used by Watts, Amtrol, Zilmet, and other tank
      manufacturers) sizes the expansion tank based on:
    </p>
    <ul>
      <li>Water heater capacity (gallons of stored water that gets heated)</li>
      <li>Temperature rise (cold inlet to hot stored — typically 90°F)</li>
      <li>System supply pressure (the PRV setting, typically 50–60 PSI)</li>
      <li>Maximum allowable pressure (usually 80 PSI for plumbing fittings, well below T&amp;P pop pressure)</li>
    </ul>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      V_tank = V_expansion ÷ (1 − P_supply ÷ P_max)
    </p>
    <p>
      Where V_expansion ≈ V_water × 0.00041 × ΔT (per ASHRAE).
    </p>
    <p>
      <strong>Example:</strong> 50-gallon water heater, 60 PSI supply, 80
      PSI max, 90°F rise. V_expansion = 50 × 0.00041 × 90 = 1.85 gal.
      V_tank = 1.85 ÷ (1 − 60/80) = 1.85 ÷ 0.25 = 7.4 gal acceptance volume.
      But acceptance volume isn&apos;t tank size — bladder tanks have an
      acceptance ratio of about 25%, so the actual tank size is roughly
      1.5–2 gal for residential service.
    </p>
    <p>
      The{' '}
      <Link href="/expansion-tank-sizing-calculator">expansion tank sizing calculator</Link>{' '}
      handles the math and rounds to standard tank sizes.
    </p>

    <h2>Common residential tank sizes</h2>
    <p>
      Standard product line sizes (Watts ETS series, Amtrol Therm-X-Trol,
      Zilmet HY-Pro):
    </p>
    <ul>
      <li><strong>2 gal (Watts PLT-5, Amtrol ST-5):</strong> Most 40–50 gallon tank water heaters at 60 PSI supply. The residential default.</li>
      <li><strong>4.4 gal (PLT-12, ST-12):</strong> 60–80 gallon water heaters or higher supply pressure (75+ PSI). Also common for tankless installations with a small storage tank.</li>
      <li><strong>6 gal (PLT-20, ST-20):</strong> Larger residential or light commercial.</li>
      <li><strong>14+ gal:</strong> Light commercial water heaters, hydronic boiler systems.</li>
    </ul>
    <p>
      Always go up to the next standard size. Under-sized tanks fill
      completely and stop accepting expansion — same as having no tank.
    </p>

    <h2>Pre-charge pressure: the most-missed step</h2>
    <p>
      Every expansion tank ships from the factory with a pre-charge air
      pressure of 40 PSI. That&apos;s rarely the right setting for your
      system. Pre-charge must match the system supply pressure (PRV setting)
      — typically 50–60 PSI in residential service.
    </p>
    <p>
      To set pre-charge correctly:
    </p>
    <ol>
      <li>Shut off cold water supply to the water heater</li>
      <li>Open the lowest hot-water faucet to depressurize the system</li>
      <li>Disconnect the expansion tank from the line (or close its isolation valve)</li>
      <li>Use a Schrader-valve gauge to read the tank&apos;s air pressure</li>
      <li>Add or release air to match the PRV setting</li>
      <li>Reconnect, restore water, close the faucet</li>
    </ol>
    <p>
      Setting pre-charge with the tank still pressurized by water gives a
      false reading — the gauge sees water pressure plus residual air
      pressure. The ASHRAE / manufacturer instructions are explicit:
      always check pre-charge with the water side at zero PSI.
    </p>

    <h2>Installation details</h2>
    <p>
      <strong>Location:</strong> On the cold water inlet to the water
      heater, between the heater and any shut-off valve. Mounted vertically
      with the air-valve fitting up — drains debris out of the bladder area.
    </p>
    <p>
      <strong>Support:</strong> The tank is heavy when full of water. A
      2-gallon tank weighs 18 lb full. Don&apos;t hang it from the cold
      water pipe alone — strap it to a stud or use a manufactured tank
      hanger bracket.
    </p>
    <p>
      <strong>Isolation:</strong> A shut-off valve between the tank and the
      cold-water line lets you replace the tank without draining the
      system. Worth the extra $10 in fittings.
    </p>
    <p>
      <strong>Air valve access:</strong> The Schrader valve must remain
      accessible for periodic pre-charge checks. Don&apos;t bury it behind
      finished drywall.
    </p>

    <h2>Tankless water heaters</h2>
    <p>
      Most tankless water heaters don&apos;t need expansion tanks because
      they don&apos;t store hot water — there&apos;s no continuous
      thermal-expansion source. The exception: tankless systems with a
      buffer tank, recirculation loop, or storage tank in series. In those
      configurations, treat the storage volume as a regular tank water
      heater for sizing purposes.
    </p>
    <p>
      Some manufacturers (notably Rinnai) require a small expansion device
      anyway as part of the installation warranty. Check the install manual.
    </p>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>No expansion tank on a closed system.</strong> The most common code violation in older homes that had a PRV added later. Symptoms: T&amp;P valve drips after every heating cycle.</li>
      <li><strong>Wrong pre-charge pressure.</strong> The tank is installed but pre-charge wasn&apos;t adjusted from the factory 40 PSI. The tank fills instantly under 60 PSI supply and provides zero expansion capacity.</li>
      <li><strong>Tank installed downstream of the heater (hot side).</strong> Doesn&apos;t work — expansion happens on the cold inlet because that&apos;s where the heated water pushes back. Hot-side installation pressurizes only the hot lines.</li>
      <li><strong>Bladder failure ignored.</strong> When the bladder fails, the tank fills with water (no air pocket left). Symptom: tank feels full / heavy when tapped, and T&amp;P valve drips. Replace the tank — bladders aren&apos;t serviceable.</li>
      <li><strong>Undersized tank.</strong> A 1-gallon tank on a 75-gallon water heater fills completely on the first heating cycle and provides no further capacity. Match tank size to water heater capacity at minimum.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>Do I need an expansion tank for a 50-gallon water heater?</strong>{' '}
      Yes if your system is closed (PRV, backflow preventer, or check valve
      between meter and heater). A standard 2-gallon expansion tank handles
      a typical 40–50 gallon heater at 60 PSI supply.
    </p>
    <p>
      <strong>How long do expansion tanks last?</strong> 5–15 years
      depending on water quality, pressure cycling, and pre-charge
      maintenance. Hard water shortens life. If you can hear water
      sloshing inside the tank when you tap it, the bladder failed —
      replace it.
    </p>
    <p>
      <strong>What pressure should the expansion tank be set to?</strong>{' '}
      Pre-charge air pressure should match your system supply pressure
      (the PRV setting). Typically 50–60 PSI. Set with the water side
      depressurized — cannot be set accurately while the system is
      under pressure.
    </p>
    <p>
      <strong>Why is my T&amp;P valve dripping?</strong> Most common cause:
      no expansion tank or failed expansion tank on a closed system.
      Pressure spikes during heating cycles open the relief valve.
      Second-most-common: T&amp;P valve itself worn out from cycling
      (replace it). Third: actually too-high system pressure (check the
      PRV setting).
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/expansion-tank-sizing-calculator" style={{ color: 'var(--hi-vis)' }}>expansion tank sizing calculator</Link>{' '}
      uses the standard ASME formula and rounds to common product sizes
      (Watts, Amtrol, Zilmet).
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Expansion tank sizing depends on
      water heater specifics, supply pressure, and local code
      amendments. Verify with a licensed plumber and your local
      plumbing inspector before purchase or installation. ProjectCalc
      is not responsible for code violations or system failures
      resulting from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'expansion-tank-sizing-guide',
  title: 'Expansion Tank Sizing for Closed Plumbing Systems',
  metaTitle: 'Expansion Tank Sizing — Water Heater Closed System | ProjectCalc',
  metaDesc: 'Size a thermal expansion tank for any closed water heater system. The math, common residential sizes, pre-charge pressure setup, and the installation mistakes that fail tanks early.',
  excerpt: 'The blue cylinder strapped to the cold inlet of your water heater is an expansion tank, and most homeowners ignore it until it fails. Here\'s why closed systems need them and how to size and install one right.',
  date: '2026-04-27',
  readTime: 8,
  category: 'construction',
  relatedCalcs: ['expansion-tank-sizing-calculator', 'water-supply-pipe-size-calculator', 'pressure-loss-calculator'],
  Body,
};

export default post;
