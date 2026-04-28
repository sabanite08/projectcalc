import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Every HVAC contractor who has been in the business for ten
      years has the same complaint: the previous AC was 4 tons,
      the customer wants "the same size," and the actual load is
      2.5. ACCA Manual J is the document that fixes that mistake.
      Here is what it does, why "rule of thumb" sizing kills
      equipment, and how to read a Manual J report you've been
      handed.
    </p>

    <h2>What Manual J is</h2>
    <p>
      ACCA Manual J — formally <em>Residential Load Calculation,
      8th Edition</em> — is the industry-standard procedure for
      calculating the heating and cooling load of a residence. It
      is referenced by IECC, IRC M1401.3, every state code that
      adopts the IECC, and most utility incentive programs that
      pay rebates on new equipment.
    </p>
    <p>
      A Manual J calculation is room-by-room. Every wall, window,
      door, ceiling, and floor segment is entered with its area,
      orientation, U-value, and shading. Infiltration is added
      from a blower-door test or estimated from construction
      vintage. Internal gains from people, lights, and appliances
      are added on the cooling side. The result: BTU/hr cooling
      and heating, per room, summed for the whole house.
    </p>

    <h2>Why "rule of thumb" is wrong</h2>
    <p>
      The old rule of thumb was 600 ft²/ton (or 1 ton per 600 ft²)
      in cooling-dominated climates. Apply it to a 2,400 ft² home
      and you get 4 tons. The actual Manual J number for a
      well-insulated 2,400 ft² home in the same climate? Often 2 to
      2.5 tons.
    </p>
    <p>
      Where the rule went wrong: it was set in the 1960s, before
      modern insulation, low-E windows, and air sealing. R-19 walls
      and U-0.30 windows cut the load roughly in half versus 1960s
      construction, but the rule of thumb never updated. The
      result: half the houses in America have ACs that are 50-100%
      oversized.
    </p>

    <h2>What oversized equipment does</h2>
    <p>
      <strong>Short-cycling.</strong> A 4-ton AC on a 2-ton load
      runs for 5 minutes, hits the thermostat, and shuts off. It
      restarts 12 minutes later. It runs again for 5. Repeat.
    </p>
    <p>
      <strong>No dehumidification.</strong> AC dehumidifies by
      having air sit on a cold coil long enough for water to
      condense. 5-minute runs don't get the coil cold enough or
      the air dwell-time long enough. Result: 75°F at 65% RH —
      the temperature is right but the house feels clammy.
    </p>
    <p>
      <strong>Compressor death.</strong> Each compressor start
      pulls locked-rotor amps, heats the windings, and stresses the
      capacitor. 4× the normal start count = 4× the wear.
      Oversized systems die at 8-12 years vs the rated 15-20.
    </p>

    <h2>The HTM shortcut (what this calculator does)</h2>
    <p>
      A full Manual J needs Wrightsoft, Cool Calc, or Elite
      Software. For a quick whole-home approximation, ACCA
      publishes Heat Transfer Multipliers (HTM) — BTU/hr per ft²
      of conditioned area — by climate zone, construction type,
      and window quality. Multiply the HTM by floor area and you
      get a load number that lands within 10-15% of a full Manual
      J for a typical home.
    </p>
    <p>
      The{' '}
      <Link href="/manual-j-heat-load-calculator">Manual J load
      calculator</Link> does exactly this: HTM tables for IECC
      zones 1-8, construction tightness adjustment, and window
      adjustment. Useful for a sanity check before signing off on
      a contractor's quote.
    </p>

    <h2>Manual J → Manual S → Manual D</h2>
    <p>
      The full design package is three documents:
    </p>
    <ul>
      <li><strong>Manual J</strong> — load calculation (BTU/hr per
        room and total)</li>
      <li><strong>Manual S</strong> — equipment selection. Match
        the AHRI-rated equipment to the calculated load with
        appropriate sensible/latent split. Don't just pick the
        next size up.</li>
      <li><strong>Manual D</strong> — duct design. Trunk and
        branch sizes for the airflow each room needs, with target
        friction rate and total external static pressure under
        the blower's rating.</li>
    </ul>
    <p>
      Permits and rebates increasingly require all three. A
      contractor who can't produce them for your project should be
      replaced.
    </p>

    <h2>Common Manual J mistakes</h2>
    <p>
      <strong>Using "rule of thumb" infiltration.</strong> A
      blower-door test gives the actual ACH50 number — the
      difference between assuming 0.35 ACH natural and measuring
      0.10 ACH (tight new construction) can be 30% of the cooling
      load.
    </p>
    <p>
      <strong>Not zoning a multistory.</strong> The second floor
      of a typical house has 50-70% more cooling load than the
      first (heat rises, attic radiates down). One thermostat
      means either the upstairs is hot or the downstairs is
      freezing. Manual J catches this room-by-room.
    </p>
    <p>
      <strong>Picking the next size up "for safety."</strong>
      Manual S says match the load. If the calc is 2.4 tons, a
      2.5-ton heat pump is correct. A 3-ton "for safety" puts you
      back in the short-cycle problem the calc was supposed to
      prevent.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/manual-j-heat-load-calculator" style={{ color: 'var(--hi-vis)' }}>Manual J load calculator</Link>{' '}
      uses ACCA HTM approximations by climate zone, construction,
      and windows. It does not replace a full room-by-room Manual
      J. Equipment selection, zoning decisions, and permit
      submittals require a credentialed HVAC contractor running
      Manual J / S / D in approved software.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'manual-j-load-basics',
  title: 'Manual J — Right-Sizing HVAC Equipment',
  metaTitle: 'Manual J Load Calc — Right-Sizing AC and Heat Pumps | ProjectCalc',
  metaDesc: 'How ACCA Manual J prevents oversized HVAC: HTM math, why "rule of thumb" gives 4 tons when the load is 2.5, and the Manual J / S / D package contractors must produce.',
  excerpt: 'The previous AC was 4 tons; the actual load is 2.5. Here is why every house in America is over-sized, and what Manual J / S / D is supposed to fix.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['manual-j-heat-load-calculator', 'btu-calculator', 'heat-loss-calculator'],
  Body,
};

export default post;
