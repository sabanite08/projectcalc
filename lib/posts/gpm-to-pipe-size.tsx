import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Sometimes you don&apos;t have a fixture list to add up — you have a
      flow demand. Irrigation zones, equipment cooling, hose station bibs,
      restaurant dish lines, custom water features. The question is what size
      pipe carries that flow without erosion or excessive pressure drop.
      Here&apos;s the rule that pros use, why it&apos;s velocity-driven, and
      common GPM-to-size lookups for residential and light commercial work.
    </p>

    <h2>Two ways to size water supply pipe</h2>
    <p>
      There are two valid approaches. Pick the one that fits your data:
    </p>
    <p>
      <strong>By fixture units (WSFU):</strong> The IPC method. Sum the
      Water Supply Fixture Units for all fixtures the line serves, look up
      the minimum pipe size in IPC Table E202.1. This is probabilistic —
      it assumes not every fixture runs at once. Standard for residential
      whole-house service. Use the{' '}
      <Link href="/water-supply-pipe-size-calculator">water supply sizing calculator</Link>{' '}
      for this method.
    </p>
    <p>
      <strong>By flow rate (GPM):</strong> Velocity-driven. You know the
      continuous or peak demand directly, so you size for the smallest pipe
      that keeps water below the velocity threshold for the application. Use
      this for irrigation, mechanical equipment, hose stations, and any line
      where the flow is dictated by the load not a fixture count.
    </p>
    <p>
      The{' '}
      <Link href="/gpm-to-pipe-size-calculator">GPM to pipe size calculator</Link>{' '}
      handles the second method.
    </p>

    <h2>The velocity rule</h2>
    <p>
      Industry practice — backed by manufacturer literature for copper, PEX,
      and CPVC — limits water velocity to:
    </p>
    <ul>
      <li><strong>Cold water service:</strong> 8 fps maximum</li>
      <li><strong>Hot water service:</strong> 5 fps maximum</li>
      <li><strong>Inside buildings, sound-sensitive zones:</strong> 4 fps</li>
      <li><strong>Long horizontal runs:</strong> 6 fps for noise control</li>
    </ul>
    <p>
      Velocity converts from flow to a number you can size against:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      V (fps) = Q (GPM) × 0.4085 ÷ D² (inches)
    </p>
    <p>
      Solve for minimum diameter:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      D_min = √(Q × 0.4085 ÷ V_max)
    </p>
    <p>
      <strong>Example:</strong> 12 GPM cold service. D_min = √(12 × 0.4085 ÷
      8) = √0.613 = 0.783&quot;. So you need at least 0.783&quot; inside
      diameter. ¾&quot; copper Type L has 0.785&quot; ID — barely fits.
      Bump to 1&quot; for headroom (1.025&quot; ID), or use 1&quot; PEX
      (0.862&quot; ID).
    </p>

    <h2>Why hot water uses a lower velocity</h2>
    <p>
      Hot water erodes copper faster. The mechanism is progressive removal
      of the protective copper-oxide layer that forms inside copper pipes —
      higher temperature accelerates the process, higher velocity strips
      the layer faster than it regrows. At sustained 8 fps and 140°F service
      temperature, copper can pinhole at fittings within 5–10 years.
    </p>
    <p>
      Sizing hot lines one nominal step bigger than cold keeps velocity
      under the erosion threshold. Plenty of older homes have hot-line
      pinhole leaks before any cold-line failure for exactly this reason —
      both lines were originally sized the same, but only the hot side was
      eroding.
    </p>

    <h2>Common GPM lookups</h2>
    <p>
      Cold water at ≤8 fps, copper Type L:
    </p>
    <ul>
      <li><strong>4 GPM:</strong> ½&quot; minimum (V = 5.5 fps)</li>
      <li><strong>6 GPM:</strong> ½&quot; (V = 8.2 fps — borderline; use ¾&quot;)</li>
      <li><strong>8 GPM:</strong> ¾&quot; (V = 5.3 fps)</li>
      <li><strong>12 GPM:</strong> ¾&quot; (V = 8.0 fps — at limit; consider 1&quot;)</li>
      <li><strong>15 GPM:</strong> 1&quot; (V = 5.8 fps)</li>
      <li><strong>20 GPM:</strong> 1&quot; (V = 7.8 fps — at limit)</li>
      <li><strong>25 GPM:</strong> 1¼&quot; (V = 6.4 fps)</li>
      <li><strong>40 GPM:</strong> 1½&quot; (V = 7.2 fps)</li>
      <li><strong>60 GPM:</strong> 2&quot; (V = 6.2 fps)</li>
      <li><strong>100 GPM:</strong> 2½&quot; (V = 6.7 fps)</li>
    </ul>
    <p>
      For PEX, bump every entry above by one nominal size. PEX-A 1&quot; has
      the same flow capacity as copper ¾&quot; at the same velocity.
    </p>

    <h2>When to also check pressure loss</h2>
    <p>
      Velocity sizing alone is fine for short runs (under 50 ft). For longer
      runs, friction loss can become the binding constraint even when
      velocity is acceptable.
    </p>
    <p>
      Rough rule: if length ÷ diameter (in feet ÷ inches) exceeds 150, run
      the friction-loss check. A 150 ft × ¾&quot; line gets 200 — needs the
      check. A 30 ft × ¾&quot; line gets 40 — velocity sizing is enough.
      The{' '}
      <Link href="/pressure-loss-calculator">pressure loss calculator</Link>{' '}
      uses Hazen-Williams to confirm.
    </p>

    <h2>Practical applications</h2>
    <p>
      <strong>Irrigation main:</strong> Most residential irrigation systems
      flow 10–25 GPM per zone. A 1&quot; main feeds typical zones; 1¼&quot;
      for high-flow rotor zones. Don&apos;t use ¾&quot; for irrigation —
      sprinkler heads need pressure to throw correctly, and ¾&quot; eats too
      much head on the typical 100+ ft underground run.
    </p>
    <p>
      <strong>Tankless water heater inlet:</strong> Continuous flow at full
      output. A 199,000 BTU tankless heater pulls 9 GPM at 35°F rise — needs
      ¾&quot; minimum cold inlet, often 1&quot; for whole-house units. Check
      the install manual for your specific model.
    </p>
    <p>
      <strong>Hose station for car washing:</strong> A typical wash bay flows
      8 GPM through one hose. Two stations sharing a line need 16 GPM
      capacity → 1&quot; copper or 1¼&quot; PEX.
    </p>
    <p>
      <strong>Hydronic heating loop:</strong> Sized by the boiler&apos;s GPM
      output (rated on the data plate). A 100,000 BTU/hr boiler at 20°F ΔT
      pumps 10 GPM — needs ¾&quot; minimum supply and return.
    </p>
    <p>
      <strong>Restaurant dish station:</strong> Pre-rinse sprayer + dish
      machine fill = 6–10 GPM. Most plumbing inspectors require 1&quot; for
      commercial dish lines regardless of velocity math.
    </p>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>Sizing PEX like copper.</strong> The smaller PEX inside diameter means lower flow at the same nominal size. Always size PEX one step up from the copper answer.</li>
      <li><strong>Ignoring the run length.</strong> A pipe that&apos;s velocity-acceptable can still pressure-starve a fixture 200 ft downstream. Pair velocity sizing with friction-loss check on long runs.</li>
      <li><strong>Sizing for &quot;typical&quot; flow instead of peak.</strong> Irrigation zones run at full design flow; equipment cooling pulls full GPM during operation. Don&apos;t average — size for the peak the line will see.</li>
      <li><strong>Forgetting the elevation loss.</strong> Every foot of vertical rise costs 0.433 PSI. A line that delivers acceptable pressure horizontally may not at the top of a riser.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size pipe for 10 GPM?</strong> ¾&quot; copper minimum
      for cold service (V = 6.6 fps). 1&quot; for hot. 1&quot; PEX for cold,
      1¼&quot; PEX for hot.
    </p>
    <p>
      <strong>What size pipe for 20 GPM?</strong> 1&quot; copper for cold
      (V = 7.8 fps, near max), 1¼&quot; for hot. 1¼&quot; PEX for cold,
      1½&quot; PEX for hot.
    </p>
    <p>
      <strong>What is the maximum water velocity in copper pipe?</strong>{' '}
      8 fps for cold lines, 5 fps for hot. Industry standard from copper
      manufacturer literature; exceeding causes erosion at fittings within
      5–15 years.
    </p>
    <p>
      <strong>How do I convert GPM to pipe size?</strong> D_min = √(GPM ×
      0.4085 ÷ max_velocity). For cold at 8 fps, that simplifies to D_min =
      √(GPM ÷ 19.6). The{' '}
      <Link href="/gpm-to-pipe-size-calculator">GPM to pipe size calculator</Link>{' '}
      does it for both cold and hot service.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/gpm-to-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>GPM to pipe size calculator</Link>{' '}
      returns minimum copper and PEX size for any flow rate, with cold/hot
      service toggle.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Pipe sizing depends on local
      code amendments, fixture mix, and friction-loss conditions.
      Verify with a licensed plumber and your local plumbing inspector
      before purchase or installation. ProjectCalc is not responsible
      for code violations, permit failures, or system failures
      resulting from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'gpm-to-pipe-size',
  title: 'What Size Pipe for X GPM? Flow-Rate Pipe Sizing',
  metaTitle: 'GPM to Pipe Size — Flow Rate to Diameter Sizing Guide | ProjectCalc',
  metaDesc: 'Calculate the minimum pipe size for any flow rate. Velocity rules for cold and hot service, common GPM-to-size lookups, irrigation, tankless heater, and equipment sizing.',
  excerpt: 'Sometimes you don\'t have a fixture list — you have a flow demand. Here\'s the velocity-based rule pros use to size pipe by GPM for irrigation, equipment, and custom systems.',
  date: '2026-04-27',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['gpm-to-pipe-size-calculator', 'pressure-loss-calculator', 'water-supply-pipe-size-calculator'],
  Body,
};

export default post;
