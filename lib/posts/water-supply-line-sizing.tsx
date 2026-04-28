import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Pick the wrong water supply line and one of two things happens. Too
      small, and the shower drops to a trickle the moment someone flushes a
      toilet. Too large, and you wasted money on copper and dropped your
      water velocity below the threshold that keeps debris moving — sediment
      settles, deposits build, and the line eventually clogs from inside. The
      sweet spot is the smallest pipe that delivers your peak demand at full
      pressure, and the IPC has a method for finding it that pros use every
      day.
    </p>

    <h2>Why pipe size matters</h2>
    <p>
      Two physics constraints fight each other in a supply line. Friction
      loss says smaller pipe → faster water → more pressure drop per foot.
      Velocity says larger pipe → slower water → sediment falls out of
      suspension. The plumbing code threads the needle by sizing pipe to
      deliver enough <em>flow</em> at enough <em>pressure</em> for the
      fixtures it serves, while staying above the velocity that keeps
      everything moving.
    </p>
    <p>
      Residential service entries (the line from the meter to the house) are
      typically ¾-inch or 1-inch copper. Branch lines off the main are ½-inch
      to ¾-inch. Knowing exactly which one is a function of how many fixtures
      that line feeds.
    </p>

    <h2>The WSFU method</h2>
    <p>
      The IPC (International Plumbing Code) and UPC (Uniform Plumbing Code)
      both use <strong>Water Supply Fixture Units</strong> (WSFU) to size
      supply lines. Each fixture in your house gets a WSFU value that
      captures both its peak flow and how likely it is to run at the same
      time as other fixtures — Hunter&apos;s curve, the probabilistic model
      behind the table, was developed in 1940 and is still the basis of
      modern code.
    </p>
    <p>
      Common residential WSFU values:
    </p>
    <ul>
      <li>Toilet (1.6 GPF tank): 2.5 WSFU</li>
      <li>Bathtub: 4 WSFU</li>
      <li>Shower: 2 WSFU</li>
      <li>Lavatory (bathroom sink): 1 WSFU</li>
      <li>Kitchen sink: 1.5 WSFU</li>
      <li>Dishwasher: 1.4 WSFU</li>
      <li>Clothes washer: 4 WSFU</li>
      <li>Hose bib (outdoor sillcock): 2.5 WSFU</li>
    </ul>
    <p>
      A typical 3-bed/2-bath home with a kitchen, dishwasher, washer, and two
      hose bibs sums to ~30 WSFU. A 4-bed/3-bath with the same auxiliaries
      runs ~40 WSFU. The{' '}
      <Link href="/water-supply-pipe-size-calculator">water supply pipe sizing calculator</Link>{' '}
      adds these up automatically based on a fixture count.
    </p>

    <h2>Typical residential pipe sizes</h2>
    <p>
      For copper Type L or CPVC at typical residential pressure (40–60 psi
      static), here&apos;s the IPC service entry sizing:
    </p>
    <ul>
      <li><strong>≤ 2 WSFU:</strong> ½&quot; (small ADU, single bathroom)</li>
      <li><strong>≤ 14 WSFU:</strong> ¾&quot; (small home, 1–2 baths)</li>
      <li><strong>≤ 32 WSFU:</strong> 1&quot; (typical 2,000–2,500 ft² home)</li>
      <li><strong>≤ 50 WSFU:</strong> 1¼&quot; (large home, 4+ baths)</li>
      <li><strong>≤ 90 WSFU:</strong> 1½&quot; (very large home or duplex)</li>
      <li><strong>&gt; 90 WSFU:</strong> 2&quot; or larger (commercial/multi-family)</li>
    </ul>
    <p>
      That&apos;s the service line. Branch lines feeding individual rooms or
      groups are smaller — typically ¾&quot; trunk lines down to ½&quot; for the
      drops to fixtures.
    </p>

    <h2>Copper vs PEX vs CPVC</h2>
    <p>
      The three common residential supply materials each have different
      sizing rules because their inside diameters differ for the same nominal
      size:
    </p>
    <p>
      <strong>Copper Type L:</strong> Industry standard for decades. ¾&quot;
      copper has a 0.785&quot; ID. Long-lasting (50–100 years), tolerates
      heat well, scrap value at end of life. More expensive, requires
      sweating skills, and copper theft from new construction is a real
      issue.
    </p>
    <p>
      <strong>PEX (cross-linked polyethylene):</strong> Now the dominant new
      construction choice. Cheaper, fewer fittings (long flexible runs), no
      torch required. Sizing catch: PEX has a thicker wall than copper, so
      the inside diameter is smaller and friction loss is higher per foot. To
      deliver the same flow as ¾&quot; copper, you usually need 1&quot; PEX
      — bump up one nominal size from the copper sizing table.
    </p>
    <p>
      <strong>CPVC:</strong> Less common now but allowed by code. Sized like
      copper. Brittle in cold; banned in some jurisdictions for heat/fire
      reasons. Cheap and easy to glue.
    </p>

    <h2>Service entry vs branch lines</h2>
    <p>
      Sizing the service entry is the part most people get wrong. The
      service line carries the entire house&apos;s peak demand, so it gets
      sized for the total WSFU. After it enters the building and tees off
      into branch lines, each branch only carries its own subset of fixtures
      — so branches can be smaller.
    </p>
    <p>
      A practical layout in a typical 2-bath home:
    </p>
    <ul>
      <li>Service entry: 1&quot; copper (handles 32 WSFU)</li>
      <li>Cold trunk inside the house: ¾&quot;</li>
      <li>Hot trunk from water heater: ¾&quot;</li>
      <li>Branch lines to bathroom groups: ¾&quot;</li>
      <li>Drop to individual fixtures: ½&quot;</li>
    </ul>
    <p>
      Tankless water heaters often need a bigger gas line and a bigger cold
      water inlet than tank heaters, so check the manufacturer spec sheet
      before assuming the existing ¾&quot; will work.
    </p>

    <h2>Pressure considerations</h2>
    <p>
      The WSFU table assumes 40–60 psi static pressure at the meter. If your
      pressure is lower (well systems, hilltop houses, end-of-line municipal
      service), you need bigger pipe to deliver the same flow rate because
      friction eats a larger percentage of available pressure. Below 30 psi
      static, talk to a licensed plumber — you may need a booster pump
      regardless of pipe size.
    </p>
    <p>
      If you&apos;re above 80 psi, code requires a <strong>pressure-reducing
      valve</strong> at the service entry. High pressure cracks fixtures,
      blows out washing machine hoses, and shortens the life of every
      appliance in the house.
    </p>
    <p>
      Long underground service runs (more than 100 ft from meter to house)
      are another reason to bump up one size. Friction loss per linear foot
      is small but it accumulates — a 200-foot ¾&quot; copper run feeding
      30 WSFU is on the edge of acceptable; bump to 1&quot; for headroom.
    </p>

    <h2>Common mistakes to avoid</h2>
    <ul>
      <li><strong>Sizing for typical demand instead of peak demand.</strong> The reason WSFU exists is that peak demand happens — toilet flushes during shower, dishwasher running while someone takes a bath. Size for the peak, not the average.</li>
      <li><strong>Forgetting hose bibs.</strong> Outdoor faucets are 2.5 WSFU each and easy to skip in the count. Skipping them undersizes your service line.</li>
      <li><strong>Assuming PEX sizes the same as copper.</strong> The thinner ID matters. The flow tables in PEX manufacturer literature account for it; the IPC tables assume copper sizing baseline.</li>
      <li><strong>Mixing pipe materials without dielectric unions.</strong> Copper-to-galvanized steel without an isolator triggers galvanic corrosion at the joint. Brass or dielectric union is required.</li>
      <li><strong>Tapping a branch off the trunk too close to a fixture.</strong> Pressure drop hits the fixture furthest downstream. The shower at the dead end of the line is always the one that loses pressure when someone flushes.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size water line do I need for a 3-bedroom house?</strong>
      {' '}A typical 3-bed/2-bath home runs 25–35 WSFU, which calls for a 1&quot;
      copper or 1¼&quot; PEX service line. Branch lines inside are ¾&quot;
      to ½&quot;.
    </p>
    <p>
      <strong>Can I use ½-inch line for a whole house?</strong> No. ½&quot;
      tops out around 4 WSFU — barely enough for one bath. You&apos;ll get
      pressure drops every time two fixtures run at once.
    </p>
    <p>
      <strong>Does pipe size affect water bill?</strong> No — you pay by
      volume, not pipe diameter. A bigger pipe doesn&apos;t use more water,
      it just delivers the same gallons faster.
    </p>
    <p>
      <strong>What about drain and vent pipe sizing?</strong> Different
      tables, different fixture-unit values (DFU, not WSFU). See the{' '}
      <Link href="/drain-pipe-size-calculator">drain pipe sizing calculator</Link>{' '}
      and{' '}
      <Link href="/vent-pipe-size-calculator">vent pipe sizing calculator</Link>{' '}
      for the full DWV side.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/water-supply-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>water supply pipe sizing calculator</Link>{' '}
      sums fixture counts and returns the minimum copper/CPVC size plus the
      PEX-equivalent size, with peak GPM estimate.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Supply line sizing depends on
      local pressure, fixture mix, and code amendments. Verify with a
      licensed plumber and your local plumbing inspector before
      purchase or installation. ProjectCalc is not responsible for
      code violations, permit failures, or system failures resulting
      from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'what-size-water-line-for-a-house',
  title: 'What Size Water Supply Line for a House? Plumbing Pipe Sizing Guide',
  metaTitle: 'What Size Water Line for a House? IPC Pipe Sizing Guide | ProjectCalc',
  metaDesc: 'How to size residential water supply lines. WSFU method explained, copper vs PEX vs CPVC sizing, typical service entries, and the pressure considerations pros use.',
  excerpt: 'Pick the wrong supply line and your shower drops to a trickle when someone flushes — or you waste money on oversized copper. Here\'s the IPC method pros use to find the right size.',
  date: '2026-04-27',
  readTime: 8,
  category: 'construction',
  relatedCalcs: ['water-supply-pipe-size-calculator', 'drain-pipe-size-calculator', 'vent-pipe-size-calculator', 'pipe-volume-calculator'],
  Body,
};

export default post;
