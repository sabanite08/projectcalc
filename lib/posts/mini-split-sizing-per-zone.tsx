import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Mini-splits (ductless heat pumps with one outdoor unit and one
      or more indoor heads) are sized per zone, not per house. Each
      indoor head matches its own room or open area, and standard
      head sizes are 9k, 12k, 18k, 24k, and 36k BTU/hr. Get the
      sizing wrong and you either short-cycle (oversized) or run
      continuously without reaching setpoint (undersized). Here&apos;s
      the per-zone math and the standard sizes to round to.
    </p>

    <h2>The per-zone formula</h2>
    <p>
      Mini-splits need to handle the larger of the room&apos;s cooling
      or heating load:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      cooling = ft² × 25 × sun_adj{'\n'}
      heating = ft² × climate_factor{'\n'}
      design = max(cooling, heating)
    </p>
    <p>
      <strong>Example:</strong> 350 ft² master bedroom in Boston,
      normal sun. Cooling = 350 × 25 = 8,750 BTU/hr. Heating =
      350 × 45 = 15,750 BTU/hr. Design load = 15,750 (heating drives).
      Round up to <strong>18,000 BTU/hr (18k) head</strong>.
    </p>
    <p>
      The <Link href="/mini-split-sizing-calculator">mini-split sizing
      calculator</Link> runs both loads and snaps to the nearest
      standard head size.
    </p>

    <h2>Standard mini-split head sizes</h2>
    <p>
      Indoor heads come in fixed sizes from every major manufacturer
      (Mitsubishi, Daikin, Fujitsu, LG):
    </p>
    <ul>
      <li><strong>9k BTU (9,000 BTU/hr):</strong> Small bedrooms, small offices, 250-400 ft² in mild climate</li>
      <li><strong>12k BTU:</strong> Medium bedrooms, small living rooms, 400-550 ft²</li>
      <li><strong>18k BTU:</strong> Large bedrooms, medium open spaces, 550-800 ft²</li>
      <li><strong>24k BTU:</strong> Open-concept living, large rooms, 800-1,100 ft²</li>
      <li><strong>36k BTU:</strong> Large open spaces, small whole-home single-zone, 1,100-1,500 ft²</li>
    </ul>
    <p>
      Above 36k for a single zone is rare in residential — open
      spaces over 1,500 ft² heat and cool more evenly with two smaller
      heads (e.g., two 18k) than one big one. Two heads also let one
      run while the other is off.
    </p>

    <h2>Why per-zone sizing beats whole-house sizing</h2>
    <p>
      Central AC and forced-air furnaces share one air handler. They
      mix air across rooms, so a 3-ton system handles a 1,800 ft²
      house at the average load.
    </p>
    <p>
      Mini-split zones don&apos;t share air. A 9k BTU bedroom head
      handles only that bedroom — the kitchen across the hall is on
      its own zone. So per-zone load is what matters, not house total.
      The per-zone factor (25 BTU/ft² cooling) is slightly higher
      than central AC (20 BTU/ft²) because:
    </p>
    <ul>
      <li>No air mixing means the zone has to fully condition its own load</li>
      <li>Doors are often open between zones, leaking conditioned air</li>
      <li>Each zone has its own envelope (windows, walls) with no &ldquo;averaging&rdquo;</li>
    </ul>

    <h2>Multi-zone systems — sizing the outdoor unit</h2>
    <p>
      Multi-zone systems (one outdoor unit, 2-8 indoor heads) need
      the outdoor unit sized for the simultaneous load — usually
      60-80% of the sum of all heads, because not every zone hits
      peak load at the same time.
    </p>
    <p>
      Example: a 4-zone Mitsubishi system with two 9k heads and two
      12k heads. Sum = 42k BTU. Outdoor unit sized at ~30k (about
      72% of sum) handles the simultaneous load. Manufacturer
      configurators (Mitsubishi&apos;s Selection Tool, Daikin&apos;s
      VRV, etc.) match outdoor units to head combinations.
    </p>

    <h2>Cold-climate mini-splits — what changes</h2>
    <p>
      Standard mini-splits lose capacity rapidly below 20°F outdoor
      temperature. <strong>Hyper-heat</strong> or cold-climate
      models (Mitsubishi H2i, Daikin LV-Series) maintain 100% rated
      capacity down to 5°F and produce useful heat to -15°F. In
      climates where January nights drop below 0°F:
    </p>
    <ul>
      <li>Spec hyper-heat models, not standard models — capacity at design temp matters more than rated capacity</li>
      <li>Add 20% to the heating load for the design temperature, since the unit derates as outdoor temp drops</li>
      <li>Consider supplemental electric resistance for the coldest hours, or pair with a backup furnace</li>
    </ul>

    <h2>What pros do differently</h2>
    <p>
      <strong>Don&apos;t oversize.</strong> A 12k head in a 250 ft²
      bedroom short-cycles, doesn&apos;t dehumidify, and runs less
      efficient than a properly-sized 9k. The 9k modulates down
      smoothly; the 12k either cycles on/off or runs at 50% all day.
    </p>
    <p>
      <strong>Match the line set length to the manufacturer spec.</strong>
      {' '}Mini-split refrigerant lines have charge limits — over
      50 ft typically requires extra refrigerant added at install.
      Pre-charged units only handle 25-30 ft of line set without
      adjustment.
    </p>
    <p>
      <strong>Verify the head height clearance.</strong> Wall-mounted
      heads need 6 in clearance above and 4 in to either side.
      Ceiling cassette heads need 9-12 in plenum depth. Confirm before
      ordering.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size mini-split for a 400 ft² room?</strong>
      {' '}Cooling-driven: 12k BTU. Heating-driven in cold climate
      (50 BTU/ft²): 24k. Run the calculator with your climate to
      see which controls.
    </p>
    <p>
      <strong>Can one mini-split heat a whole house?</strong> Up to
      about 1,500 ft² with a 36k single-zone, if the house is
      relatively open. For multi-room layouts, multi-zone (multiple
      heads on one outdoor unit) is the right setup.
    </p>
    <p>
      <strong>Do mini-splits work below freezing?</strong> Standard
      models lose capacity rapidly below 20°F. Hyper-heat models
      hold 100% capacity to 5°F and produce useful heat to -15°F.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Whole-house central system instead?</strong> Run the{' '}
      <Link href="/ac-tonnage-calculator" style={{ color: 'var(--hi-vis)' }}>AC tonnage calculator</Link>
      {' '}for central AC sizing or the{' '}
      <Link href="/furnace-size-calculator" style={{ color: 'var(--hi-vis)' }}>furnace size calculator</Link>
      {' '}for ducted heating.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'mini-split-sizing-per-zone',
  title: 'Mini-Split Sizing — BTU per Zone, Not per House',
  metaTitle: 'Mini-Split Sizing Calculator — 9k 12k 18k 24k Heads | ProjectCalc',
  metaDesc: 'How to size mini-split BTU per indoor head. Standard 9k/12k/18k/24k/36k sizes, cold-climate hyper-heat, and multi-zone outdoor unit sizing.',
  excerpt: 'Mini-splits are sized per zone — each indoor head matches its room. Standard sizes are 9k/12k/18k/24k/36k BTU/hr. Get sizing wrong and you short-cycle or run continuously.',
  date: '2026-05-03',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['mini-split-sizing-calculator', 'btu-calculator', 'ac-tonnage-calculator'],
  Body,
};

export default post;
