import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      "Do I need a 200-amp panel?" is the question every
      electrician hears on the first home visit. The honest
      answer comes from a load calculation per NEC Article 220 —
      not a guess based on house size or neighbors. Here is what
      goes into the math.
    </p>

    <h2>Standard vs Optional method</h2>
    <p>
      NEC 220 gives two methods for sizing a residential service:
    </p>
    <ul>
      <li><strong>Part III "Standard":</strong> sum each load with
        its own demand factor. Conservative, line-itemy, and the
        method this calculator uses.</li>
      <li><strong>Part IV "Optional":</strong> 100% of the first
        10 kVA + 40% of the remainder. Plus AC vs heat at the
        larger of the two. Usually gives a smaller answer than
        Standard for all-electric homes.</li>
    </ul>
    <p>
      Either is code-legal. Standard is what inspectors see most
      often and what plan reviewers expect on a residential
      service-upgrade permit.
    </p>

    <h2>The pieces of a Standard load calc</h2>
    <p>
      <strong>General lighting + receptacles.</strong> NEC 220.41:
      3 VA per ft² of habitable area. A 2,000 ft² house contributes
      6,000 VA right off the top.
    </p>
    <p>
      <strong>Small-appliance circuits.</strong> NEC 210.11(C)(1):
      at least 2 in the kitchen + dining; each adds 1,500 VA.
    </p>
    <p>
      <strong>Laundry circuit.</strong> 1,500 VA for the dedicated
      laundry receptacle (not the dryer itself — that is its own
      load).
    </p>
    <p>
      <strong>Lighting demand factor.</strong> NEC 220.42 lets you
      take 100% of the first 3,000 VA of lighting+SA+laundry, then
      35% of the next 117,000 VA. That is the discount that keeps
      panel calcs reasonable.
    </p>
    <p>
      <strong>Range.</strong> NEC 220.55 + Table — an 8 kW to 12 kW
      range counts as 8,000 VA flat. Each 1 kW over 12 adds 5% to
      that 8,000.
    </p>
    <p>
      <strong>Dryer.</strong> NEC 220.54 — 5,000 VA minimum, or
      nameplate if higher.
    </p>
    <p>
      <strong>Water heater, AC, EV, heat pump, hot tub.</strong>
      Nameplate VA. AC vs heat takes the larger of the two
      (220.60); they don't run at the same time. EV charging is
      continuous so it gets the 1.25 multiplier built in.
    </p>

    <h2>What "200 amps is enough" actually means</h2>
    <p>
      A 200 A service at 240 V can deliver 48 kVA continuous. After
      load calc, most 2,500-3,500 ft² homes with a mix of gas + electric
      land between 100 A and 160 A calculated demand — 200 A is
      comfortable.
    </p>
    <p>
      Where 200 A starts feeling tight:
    </p>
    <ul>
      <li>All-electric (heat pump + induction range + heat-pump water heater + heat-pump dryer + EV) on a 3,000+ ft² house</li>
      <li>Two EV chargers (a 48 A + a 32 A is 96 A continuous, sized to 120 A — that alone is 60% of the panel)</li>
      <li>Hot tub + pool heater + workshop subpanel</li>
      <li>Whole-home Generac standby with priority interlock — fine, but factor it</li>
    </ul>
    <p>
      Run your numbers through the{' '}
      <Link href="/panel-load-calculator">panel load calculator</Link>{' '}
      before committing to a service size on a remodel.
    </p>

    <h2>Service sizes that exist</h2>
    <ul>
      <li><strong>100 A</strong> — older homes, small homes, gas-heat + gas-cooking up to about 1,200 ft². Common upgrade target.</li>
      <li><strong>150 A</strong> — middle ground, cheap if the meter base supports it.</li>
      <li><strong>200 A</strong> — the residential default since the 1990s.</li>
      <li><strong>320 A / 400 A "class 320" meter</strong> — two 200 A panels off one meter, the heavy-electrification target. Many utilities are pushing customers here on new builds.</li>
      <li><strong>600+ A</strong> — engineered, multi-family or commercial.</li>
    </ul>

    <h2>Common load-calc mistakes</h2>
    <p>
      <strong>Counting both AC and heat.</strong> NEC 220.60 says
      take the larger of the two; they don't run together. Counting
      both inflates the load by 30-40%.
    </p>
    <p>
      <strong>Forgetting the EV 125%.</strong> EV charging is
      continuous. A 7.7 kW (32 A × 240 V) charger contributes 9,625 VA
      to the load, not 7,700. The calculator handles this; spreadsheet
      versions often miss it.
    </p>
    <p>
      <strong>Skipping the lighting demand factor.</strong> 220.42
      gives a real discount. Do not add 100% of every lighting +
      SA + laundry circuit straight through — you will spec a 320 A
      service when 200 A is correct.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/panel-load-calculator" style={{ color: 'var(--hi-vis)' }}>panel load calculator</Link>{' '}
      uses the NEC 220 Part III Standard method with typical
      single-phase 240/120 V residential assumptions. It does not
      handle 3-phase, multifamily, dwelling unit feeders to
      separate buildings (220.84), or unusual loads. A licensed
      electrician must run the full Part III/IV worksheet for any
      permit submittal.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'panel-load-nec-220',
  title: 'Panel Load — NEC 220 Standard Method',
  metaTitle: 'Panel Load Calc — NEC 220 Service Sizing | ProjectCalc',
  metaDesc: 'How to size a residential service per NEC 220 Standard method: 3 VA/ft², small-appliance + laundry, lighting demand factor, range, dryer, EV continuous load.',
  excerpt: '"Is 200 amps enough?" is the wrong question. Run the NEC 220 Standard method with the lighting demand factor and the EV continuous bump, then you know.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['panel-load-calculator', 'circuit-breaker-size-calculator', 'wire-gauge-calculator'],
  Body,
};

export default post;
