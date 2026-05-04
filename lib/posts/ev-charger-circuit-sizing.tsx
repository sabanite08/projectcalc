import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      EV charging at home is a circuit-sizing problem, not a magic
      device decision. The charger plugs into a 240V circuit; the
      circuit ampacity sets how fast you charge. Get the wire and
      breaker sized correctly per NEC and you can install most
      Level 2 chargers as a permitted DIY job. Get them wrong and
      you&apos;re looking at a wire fire or a tripped breaker every
      time the car plugs in. Here&apos;s the practical math, with
      links to the calculators that handle the lookups.
    </p>

    <h2>Level 1 vs Level 2 vs DC fast — what the labels mean</h2>
    <ul>
      <li><strong>Level 1 (120V, 12A):</strong> Standard wall outlet. Adds 3-5 miles of range per hour. Usable only if you commute under 30 miles/day. No circuit work needed.</li>
      <li><strong>Level 2 (240V, 16-80A):</strong> The home install. Adds 15-50 miles of range per hour depending on amperage. Requires a dedicated 240V circuit with appropriate wire and breaker.</li>
      <li><strong>DC fast (Level 3):</strong> Commercial charging stations only — 480V three-phase, 50-350 kW. Not residential. Requires utility-level service upgrades and is not in scope for home installs.</li>
    </ul>
    <p>
      The home decision is what amperage Level 2 to install. Common
      options are 30A, 40A, 48A, 50A, and 60A. Each requires its own
      wire gauge, breaker size, and panel capacity check.
    </p>

    <h2>The 125% continuous load rule (NEC 210.19)</h2>
    <p>
      EV charging is a <strong>continuous load</strong> — the car can
      pull max amperage for 3+ hours. NEC 210.19(A)(1) requires the
      circuit to be sized at <strong>125% of the load</strong> for
      continuous applications. This single rule drives every wire and
      breaker decision below.
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      breaker_amps = charger_max_amps × 1.25{'\n'}
      wire_gauge   = sized for breaker_amps at NEC 310.16
    </p>
    <p>
      A 40A charger draws 40A continuously, so the circuit must be
      protected by a 50A breaker (40 × 1.25 = 50A). A 48A charger
      needs a 60A breaker. A 32A charger needs a 40A breaker.
    </p>

    <h2>Wire gauge by EVSE amperage</h2>
    <p>
      Per NEC 310.16 Table for 75°C copper conductors (THHN, THWN-2 —
      the standard residential conduit wire):
    </p>
    <ul>
      <li><strong>30A charger → 40A breaker → 8 AWG copper</strong> — adds ~25 miles/hr</li>
      <li><strong>32A charger → 40A breaker → 8 AWG copper</strong> — most common Level 2 setup</li>
      <li><strong>40A charger → 50A breaker → 8 AWG copper</strong> (8 AWG handles 50A on residential branch circuits)</li>
      <li><strong>48A charger → 60A breaker → 6 AWG copper</strong> — adds ~38 miles/hr</li>
      <li><strong>50A charger → 60A breaker → 6 AWG copper</strong></li>
      <li><strong>60A charger → 80A breaker → 4 AWG copper</strong> — fastest Level 2, ~50 miles/hr</li>
    </ul>
    <p>
      Aluminum wire is allowed and typically saves money on long runs
      (over 50 ft from panel) but requires anti-oxidant compound at
      every termination and is one size larger than copper for the
      same ampacity. Confirm your panel and EVSE both accept
      aluminum-rated lugs.
    </p>
    <p>
      The <Link href="/wire-gauge-calculator">wire gauge calculator</Link>
      {' '}runs this lookup for any amperage and length. The{' '}
      <Link href="/circuit-breaker-size-calculator">circuit breaker size calculator</Link>
      {' '}handles the 125% rule for continuous loads.
    </p>

    <h2>Voltage drop — long runs to detached garages</h2>
    <p>
      NEC recommends voltage drop under 3% on branch circuits, 5% total.
      EV charging is a long continuous load — voltage drop adds up
      fast on runs over 50 ft. The <Link href="/voltage-drop-calculator">voltage drop
      calculator</Link> sizes wire for the run length, but the rule
      of thumb:
    </p>
    <ul>
      <li>Up to 50 ft: standard wire gauge from the table above</li>
      <li>50-100 ft: bump one size larger (e.g., 6 AWG instead of 8 AWG for a 40A circuit)</li>
      <li>100-200 ft: bump two sizes (4 AWG for 40A, 2 AWG for 60A)</li>
    </ul>
    <p>
      Detached garages and outbuildings are where voltage drop bites.
      A 40A circuit run 150 ft to a detached garage in 8 AWG drops
      almost 6% — over the 3% recommendation, and the EVSE may
      derate or fault. Run it in 6 AWG or 4 AWG for the distance.
    </p>

    <h2>Panel capacity — the step DIYers skip</h2>
    <p>
      Adding a 50A or 60A circuit means your panel needs to have the
      capacity. Run the load math per NEC 220:
    </p>
    <ol>
      <li>Total amperage of all 240V appliances at full rated load (HVAC, electric range, dryer, water heater, EV charger)</li>
      <li>Add 100% of the largest motor load (usually the AC condenser)</li>
      <li>Add general lighting/receptacle load (3 VA per ft² of conditioned area, divided by 240V)</li>
      <li>Apply NEC demand factors (typically 100% for the first 10 kVA, 40% for the rest)</li>
    </ol>
    <p>
      The <Link href="/panel-load-calculator">panel load calculator</Link>
      {' '}runs the full NEC 220.83 simplified residential calculation
      and tells you whether your existing 100A or 200A service can
      take a new 50A EV circuit.
    </p>
    <p>
      If the panel is full, the answer is either: (a) install a
      load-management EVSE that throttles the EV during peak load
      (Wallbox Pulsar Max, Emporia Vue, others), (b) downsize from a
      48A to a 32A charger, or (c) upgrade the service from 100A to
      200A.
    </p>

    <h2>Outlet vs hardwired</h2>
    <p>
      Level 2 chargers come in two install types:
    </p>
    <ul>
      <li><strong>Plug-in (NEMA 14-50 outlet):</strong> Charger plugs into a 50A 240V receptacle. Easy install, charger portable, but the outlet is the failure point — cheap NEMA 14-50 receptacles overheat at 32-40A continuous load. Use a hospital-grade or industrial outlet ($40-60), not the $15 home center version.</li>
      <li><strong>Hardwired:</strong> Wires terminate directly inside the EVSE. Required for chargers above 40A continuous (50A breaker is the receptacle limit per NEC 625.40). More reliable, no plug to overheat.</li>
    </ul>
    <p>
      For 32-40A chargers, plug-in is fine if you use a quality outlet.
      For 48A or 60A chargers, hardwiring is mandatory.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Pull permits.</strong> EV circuits are inspected. Most
      jurisdictions require a permit for any new 240V circuit. Cost is
      $50-200 — way less than the headache of an unpermitted circuit
      surfacing during a future home sale or fire investigation.
    </p>
    <p>
      <strong>Run conduit one size larger than minimum.</strong>
      {' '}Standard EMT or PVC sized to NEC 358.22 fill rules works,
      but bumping one size up makes the wire pull dramatically easier
      and leaves room for future upgrades.
    </p>
    <p>
      <strong>Match the EVSE to the panel breaker.</strong> Most
      modern chargers are programmable — you set the max amperage on
      the unit to match the breaker (e.g., 40A on a 50A breaker).
      Don&apos;t install a 60A-capable charger on a 40A circuit
      without setting the limit; it can pull more than the breaker
      protects, and the safety logic relies on you setting it
      correctly.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size wire for a 40A EV charger?</strong> 8 AWG
      copper THHN/THWN-2 on a 50A breaker, for runs under 50 ft.
      Bump to 6 AWG for 50-100 ft.
    </p>
    <p>
      <strong>Can I use my existing dryer outlet?</strong> Maybe. Most
      US dryer outlets are 30A on 10 AWG — supports a 24A continuous
      EV charge (typical Tesla Mobile Connector setting). Slower than
      40A but doesn&apos;t require new wiring.
    </p>
    <p>
      <strong>Do I need a permit for an EV charger?</strong> Yes in
      most US jurisdictions for any hardwired install or new outlet
      circuit. Some allow plug-in EVSE on existing outlets without
      permit, but verify locally.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the calcs in order:</strong>{' '}
      <Link href="/circuit-breaker-size-calculator" style={{ color: 'var(--hi-vis)' }}>breaker size</Link>
      {' '}(125% rule) →{' '}
      <Link href="/wire-gauge-calculator" style={{ color: 'var(--hi-vis)' }}>wire gauge</Link>
      {' '}(NEC 310.16) →{' '}
      <Link href="/voltage-drop-calculator" style={{ color: 'var(--hi-vis)' }}>voltage drop</Link>
      {' '}(for runs over 50 ft) →{' '}
      <Link href="/panel-load-calculator" style={{ color: 'var(--hi-vis)' }}>panel load</Link>
      {' '}(verify capacity).
    </p>
  </>
);

const post: BlogPost = {
  slug: 'ev-charger-circuit-sizing',
  title: 'EV Charger Circuit Sizing — Wire, Breaker, and the 125% Rule',
  metaTitle: 'EV Charger Wire and Breaker Sizing — NEC 625 + 210.19 | ProjectCalc',
  metaDesc: 'How to size the wire, breaker, and panel circuit for a Level 2 EV charger. The NEC 125% continuous load rule, wire gauge by amperage, and panel checks.',
  excerpt: 'EV charging at home is a circuit-sizing problem. Get wire and breaker sized correctly per NEC and you can install Level 2 as a permitted DIY job. Here is the math.',
  date: '2026-05-03',
  readTime: 8,
  category: 'construction',
  relatedCalcs: ['wire-gauge-calculator', 'circuit-breaker-size-calculator', 'voltage-drop-calculator', 'panel-load-calculator'],
  Body,
};

export default post;
