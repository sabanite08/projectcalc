import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      AC sizing is one of those things people consistently get
      wrong in both directions. Pick a unit too small and the
      house never cools off on a 95°F day; pick one too big and
      it short-cycles, leaves the air humid, and burns out the
      compressor in a third of its rated life. Here is the rule
      of thumb that gets you close, plus when you need a real
      Manual J.
    </p>

    <h2>20 BTU per square foot — the starting point</h2>
    <p>
      The simplest cooling load estimate is{' '}
      <strong>20 BTU per square foot of conditioned space</strong>
      {' '}for moderate-climate residential construction. A 200
      ft² bedroom needs about 4,000 BTU/hr of cooling — call it
      a 5,000 BTU window unit or part of a 1-ton mini-split. A
      whole 1,500 ft² ranch needs about 30,000 BTU/hr → a 2.5
      ton system.
    </p>
    <p>
      The{' '}
      <Link href="/btu-calculator">BTU calculator</Link>{' '}
      starts here and adjusts for sun and occupancy.
    </p>

    <h2>Adjustments to the 20-BTU rule</h2>
    <p>
      The base rule is calibrated for an average room with two
      occupants, normal sun exposure, and standard insulation.
      Real adjustments:
    </p>
    <ul>
      <li><strong>Heavily shaded room:</strong> drop 10%</li>
      <li><strong>Very sunny room (south or west exposure with
        minimal shade):</strong> add 10%</li>
      <li><strong>Each occupant above 2:</strong> add 600 BTU/hr
        (typical body heat output is 250-400 BTU/hr at rest;
        600 covers active cooking, exercise, or kids)</li>
      <li><strong>Kitchen:</strong> add 4,000 BTU/hr if cooking
        regularly with the AC running (heat from the range,
        oven, dishwasher)</li>
      <li><strong>Ceilings over 8 ft:</strong> scale base BTU/ft²
        proportionally — 10 ft ceilings need 25 BTU/ft²</li>
    </ul>
    <p>
      Tons in HVAC: 12,000 BTU/hr = 1 ton of cooling. Common
      residential sizes are 1.5, 2, 2.5, 3, 3.5, 4, and 5 ton.
    </p>

    <h2>Manual J — when the rule isn't enough</h2>
    <p>
      ACCA Manual J is the industry-standard residential load
      calculation. It accounts for:
    </p>
    <ul>
      <li>Wall U-values and insulation R-values</li>
      <li>Window areas, orientations, and glass types (low-E,
        triple-pane, etc.)</li>
      <li>Air infiltration rates (tight new construction vs leaky
        1950s ranch)</li>
      <li>Internal heat gain (lights, appliances, occupants)</li>
      <li>Local design temperature (the 1% peak summer day
        published by ASHRAE for your county)</li>
      <li>Solar gain by hour and orientation</li>
      <li>Latent load (humidity removal)</li>
    </ul>
    <p>
      Most permits in production housing now require Manual J on
      file, and many high-efficiency rebate programs require
      it. If you're sizing a system for a heavily glazed modern
      home, an old leaky house, a humid coastal climate, or a
      dry mountain climate — get a Manual J done. The 20-BTU
      rule misses by 30-50% in those cases.
    </p>

    <h2>Bigger isn't safer</h2>
    <p>
      Oversizing is the most common HVAC mistake homeowners make.
      A unit that's too big:
    </p>
    <ul>
      <li>Short-cycles (cools the air faster than it can pull
        humidity out — house feels clammy)</li>
      <li>Wears compressors and contactors faster — every start
        is 3-5x the running current</li>
      <li>Leaves "stratified" air, hot ceilings, cold floors</li>
      <li>Costs more to install and run than a properly sized
        unit</li>
    </ul>
    <p>
      Right-sized AC runs longer at lower speeds, pulling more
      humidity out and giving more even temperatures. Variable-
      speed equipment (inverters, two-stage compressors) makes
      this even more forgiving.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Sizing only by square footage.</strong> A 200 ft²
      sunroom with three exterior walls and a south-facing
      glass wall is not equivalent to a 200 ft² interior bedroom.
      Sun exposure matters as much as size.
    </p>
    <p>
      <strong>Forgetting humidity.</strong> AC pulls heat AND
      water out of the air. A unit that hits temperature in 5
      minutes hasn't pulled the humidity out yet — house feels
      cold and damp. Humid climates need run time more than
      tonnage.
    </p>
    <p>
      <strong>Using "cooling capacity" from a thermostat.</strong>
      {' '}Smart thermostats sometimes display estimated load.
      Those numbers come from runtime data on the existing system
      and are biased by whatever the existing unit happens to be
      — they don't tell you the right size, just the historical
      load.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size AC for a 1,500 sq ft house?</strong>{' '}
      Roughly 30,000 BTU/hr (2.5 ton) for moderate climate, no
      unusual sun or insulation issues. Run a Manual J for
      anything tight or unusual.
    </p>
    <p>
      <strong>Can a window unit cool a whole house?</strong>{' '}
      Only if the house is very small (under 600 ft²) and very
      open. Most window units max out at 25,000 BTU/hr (≈ 2 ton)
      and only cool the room they're in plus some bleed.
    </p>
    <p>
      <strong>Is a heat pump sized the same as AC?</strong>{' '}
      Cooling-side yes. Heating-side no — heat pumps lose
      capacity as outdoor temperature drops, so cold-climate
      sizing requires a heat-pump-specific load calc and often
      auxiliary electric strip heat or backup furnace.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/btu-calculator" style={{ color: 'var(--hi-vis)' }}>BTU calculator</Link>{' '}
      uses the 20 BTU/ft² rule of thumb. For permits, rebates, and
      tight specs run a full ACCA Manual J calculation through a
      licensed HVAC contractor.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'btu-room-sizing',
  title: 'BTU Sizing — Air Conditioner For a Room',
  metaTitle: 'AC BTU Calculator — Room Sizing Rule of Thumb | ProjectCalc',
  metaDesc: 'BTU sizing for AC: 20 BTU per square foot rule, sun and occupancy adjustments, Manual J vs rule of thumb, why oversizing is worse than undersizing.',
  excerpt: 'AC sizing trips up homeowners both ways. Too small never cools, too big short-cycles and leaves humidity. Here is the 20 BTU/ft² rule, the adjustments, and when you need a real Manual J.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['btu-calculator', 'duct-cfm-calculator', 'insulation-calculator'],
  Body,
};

export default post;
