import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Furnace sizing is one of the few HVAC calls where climate matters
      more than house size. A 2,000 ft² house in Atlanta needs a
      60,000 BTU/hr furnace; the same house in Minneapolis needs
      100,000+. The rule of thumb scales BTU per square foot by
      climate zone, then divides by AFUE to convert delivered output
      into the input BTU printed on the furnace nameplate. Here&apos;s
      the math and the gotchas that change it.
    </p>

    <h2>The climate-zone formula</h2>
    <p>
      Residential furnace heating load:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      output_BTU = ft² × climate_factor{'\n'}
      input_BTU = output_BTU ÷ AFUE
    </p>
    <p>
      <strong>Example:</strong> 2,000 ft² house in Chicago (climate
      factor 45 BTU/ft²), 95% AFUE condensing furnace. Output =
      2,000 × 45 = <strong>90,000 BTU/hr delivered</strong>. Input =
      90,000 ÷ 0.95 = 94,737 BTU/hr nameplate. Round up to a
      <strong> 100,000 BTU/hr input furnace</strong>.
    </p>
    <p>
      The <Link href="/furnace-size-calculator">furnace size calculator</Link>
      {' '}runs both numbers and snaps to the nearest standard size.
    </p>

    <h2>Climate factors by region</h2>
    <p>
      Pull the right factor from where the house actually is, not
      where the supplier&apos;s rule of thumb came from:
    </p>
    <ul>
      <li><strong>30 BTU/ft² (mild):</strong> Atlanta, Dallas, Charleston, LA, Phoenix in mild winter zones</li>
      <li><strong>35 BTU/ft²:</strong> Memphis, Nashville, Norfolk, Sacramento</li>
      <li><strong>40 BTU/ft² (moderate):</strong> Washington DC, St Louis, Kansas City, San Francisco</li>
      <li><strong>45 BTU/ft² (cool):</strong> Chicago, Boston, Denver, Cleveland, Pittsburgh</li>
      <li><strong>50 BTU/ft² (cold):</strong> Minneapolis, Buffalo, Salt Lake City</li>
      <li><strong>60 BTU/ft² (very cold):</strong> Burlington VT, Fargo, Anchorage south, Duluth</li>
    </ul>
    <p>
      The factors assume average residential construction (2x6 walls
      R-19, R-30 to R-49 ceilings, double-pane low-E windows). For
      pre-1980 homes with R-11 walls and single-pane windows, add
      10-20%. For Passive House or super-tight builds, subtract 30-40%.
    </p>

    <h2>Output BTU vs Input BTU — read the right number</h2>
    <p>
      Furnaces are sold by <strong>input BTU</strong> — the gas
      consumption rating on the nameplate. Output BTU is what the
      furnace actually delivers to the house, after combustion losses
      and flue venting:
    </p>
    <ul>
      <li><strong>80% AFUE</strong> (standard non-condensing): 80,000 BTU input → 64,000 BTU output</li>
      <li><strong>90% AFUE</strong> (entry condensing): 80,000 BTU input → 72,000 BTU output</li>
      <li><strong>95% AFUE</strong> (high-efficiency condensing): 80,000 BTU input → 76,000 BTU output</li>
      <li><strong>98% AFUE</strong> (premium condensing): 80,000 BTU input → 78,400 BTU output</li>
    </ul>
    <p>
      When a contractor says &ldquo;you need an 80,000 BTU furnace,&rdquo;
      ask whether they mean input or output. Most quote input. The
      calculator returns both so you can verify.
    </p>

    <h2>Standard residential furnace sizes</h2>
    <p>
      Manufacturers ship in 20,000 BTU/hr increments at the input rating:
    </p>
    <ul>
      <li>40,000 BTU input — small house under 1,200 ft² in mild climate</li>
      <li>60,000 BTU input — 1,200-1,800 ft² mild, smaller in cold</li>
      <li>80,000 BTU input — most common residential size, 1,800-2,500 ft²</li>
      <li>100,000 BTU input — 2,500-3,500 ft² in cool/cold climate</li>
      <li>120,000 BTU input — large or very-cold-climate houses</li>
    </ul>
    <p>
      Above 120,000 BTU, the right answer is usually two zones with
      smaller furnaces, not one larger furnace. Single-stage furnaces
      over 120,000 also need higher gas line pressure that some
      residential meters can&apos;t supply.
    </p>

    <h2>The oversizing trap (also applies to heating)</h2>
    <p>
      Same problem as AC oversizing — short cycles. An oversized
      furnace heats the thermostat zone in 5 minutes, shuts off, and
      cools off. The opposite end of the house never warms up because
      the air handler doesn&apos;t run long enough to push warm air
      everywhere. You feel cold rooms even though the thermostat says
      72°F.
    </p>
    <p>
      Modulating furnaces (variable input BTU) are the modern fix —
      they ramp down to 40-50% of nameplate during mild weather, run
      longer, and balance the house better. Premium price; worth it
      in cold climates.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Verify the gas line size.</strong> An 80,000 BTU input
      furnace needs a 1/2 inch gas line on a short run, 3/4 inch on
      anything over 25 ft. 100,000+ BTU often needs 3/4 in or 1 in.
      Old houses with original 3/8 in or 1/2 in lines starve larger
      furnaces.
    </p>
    <p>
      <strong>Match the AC tonnage to the same air handler.</strong>
      {' '}A 100,000 BTU furnace with a 4-ton AC needs an air handler
      rated for both. Mismatched air handlers run efficiency lower on
      one side and starve the other.
    </p>
    <p>
      <strong>Run a Manual J for new construction or major renovation.</strong>
      {' '}The rule of thumb breaks on tight modern envelopes (over-sizes
      by 30-50%) and on poorly insulated older homes (under-sizes).
      Manual J is required by most jurisdictions for permitted work
      over 100,000 BTU input.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size furnace for 2,000 ft²?</strong> Depends on
      climate. Atlanta: 60,000 BTU output (~75,000 input at 80% AFUE).
      Chicago: 90,000 BTU output (~95,000 input at 95% AFUE). The
      calculator handles the climate scaling.
    </p>
    <p>
      <strong>Is 95% AFUE worth the upgrade from 80%?</strong>
      {' '}Payback in 5-8 years in cold climates (saves 15-20% on gas).
      Less compelling in mild climates where heating is a small bill
      item.
    </p>
    <p>
      <strong>Do I need a permit to replace a furnace?</strong>
      {' '}Yes in most jurisdictions. Inspectors check input BTU
      against gas line capacity and venting. DIY furnace swaps without
      permit can void homeowner&apos;s insurance after a fire.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Hydronic system instead of forced air?</strong> Run the{' '}
      <Link href="/boiler-size-calculator" style={{ color: 'var(--hi-vis)' }}>boiler size calculator</Link>
      {' '}— same climate-zone math but with boiler-specific AFUE and
      a discount for radiant floor systems.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'furnace-size-by-climate',
  title: 'Furnace Sizing by Climate Zone (Output vs Input BTU)',
  metaTitle: 'Furnace Size Calculator Math — Climate Zones + AFUE | ProjectCalc',
  metaDesc: 'How to size a residential gas furnace by climate zone. Output vs input BTU, AFUE conversion, standard sizes, and when to run Manual J.',
  excerpt: 'Furnace sizing is the rare HVAC call where climate matters more than house size. Atlanta vs Minneapolis on the same 2,000 ft² house can swing the size 50%. Here is the math and the AFUE conversion.',
  date: '2026-05-03',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['furnace-size-calculator', 'heat-loss-calculator', 'boiler-size-calculator'],
  Body,
};

export default post;
