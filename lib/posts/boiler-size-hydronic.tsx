import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Hydronic heating — boilers feeding radiators, baseboard, or
      radiant floor — concentrates in cold US regions where forced
      air can&apos;t keep older masonry buildings comfortable. Sizing
      is the same climate-zone rule used for furnaces, with two
      adjustments: boiler AFUE ranges differently (82% cast-iron up
      to 95% modulating-condensing), and radiant floor systems can be
      sized 10-15% smaller than radiator systems on the same envelope.
      Here&apos;s the math and the system-type adjustments.
    </p>

    <h2>The boiler sizing formula</h2>
    <p>
      Same envelope load math as any heating system, with system and
      efficiency adjustments at the boiler:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      output_BTU = ft² × climate_factor × system_adj{'\n'}
      input_BTU = output_BTU ÷ AFUE
    </p>
    <p>
      <strong>Example:</strong> 2,200 ft² Boston house with cast-iron
      radiators, 87% AFUE mid-efficiency boiler. Output = 2,200 × 45
      = <strong>99,000 BTU/hr delivered</strong>. Input = 99,000 ÷
      0.87 = 113,793 BTU/hr nameplate. Round up to a
      <strong> 120,000 BTU/hr input boiler</strong>.
    </p>
    <p>
      Same house with radiant floor instead of radiators: output drops
      to 99,000 × 0.9 = 89,100 BTU/hr. Round to 100,000 input. The{' '}
      <Link href="/boiler-size-calculator">boiler size calculator</Link>
      {' '}handles both.
    </p>

    <h2>Boiler AFUE — three classes</h2>
    <p>
      Boiler efficiency depends on whether it condenses the flue gas
      and how it modulates output:
    </p>
    <ul>
      <li><strong>82% AFUE (cast-iron, atmospheric vent):</strong> The traditional residential boiler. Vents through a chimney, no power vent fan, no condensate drain. Reliable for 25-30 years, parts cheap, easy service. Loses ~18% of fuel up the flue.</li>
      <li><strong>87% AFUE (mid-efficiency):</strong> Power-vented through a sidewall, no chimney needed. Standing pilot replaced by electronic ignition. Same general design as 82% but tighter combustion control.</li>
      <li><strong>90-95% AFUE (modulating condensing):</strong> Stainless heat exchanger, condenses flue moisture, modulates from 20-100% output. Ten years of life expectancy lower than cast-iron but 12-15% fuel savings and zone-perfect comfort.</li>
    </ul>
    <p>
      Cast-iron boilers are still bought new in 2026 because they
      outlast condensing units 2:1 in hard-water regions where the
      condensing heat exchanger fouls and fails at 12-18 years.
      Condensing boilers are the right answer in soft-water regions
      and in tight modern envelopes where their modulation range
      matches the actual heat load most of the year.
    </p>

    <h2>Radiator vs radiant — why radiant gets the discount</h2>
    <p>
      Radiator systems supply 160-200°F water to a small surface area
      (the radiator face). The water has to be hot to deliver enough
      BTU per square foot of radiator. The boiler runs at full output
      to maintain that supply temperature.
    </p>
    <p>
      Radiant floor systems supply 90-120°F water to the entire floor
      area. Lower water temp means less heat loss in the supply lines
      and a much larger emitter surface. The boiler can run lower and
      modulate down. ASHRAE design data gives radiant systems about
      10-15% lower design heat loss than radiator systems for the same
      envelope.
    </p>
    <p>
      Modulating-condensing boilers benefit most from radiant — they
      run in their condensing range (return temp under 130°F) almost
      year-round and hit nameplate AFUE. Cast-iron boilers on radiant
      need a mixing valve to prevent condensation in the heat
      exchanger, which complicates the install.
    </p>

    <h2>Standard residential boiler sizes</h2>
    <p>
      Boilers ship in slightly different increments than furnaces,
      typically every 20,000-30,000 BTU input:
    </p>
    <ul>
      <li>60,000 BTU input — small house under 1,200 ft² in cold climate, or zone-only boiler</li>
      <li>80,000 BTU input — 1,500-2,000 ft²</li>
      <li>100,000 BTU input — 2,000-2,500 ft² standard</li>
      <li>120,000 BTU input — 2,500-3,200 ft² or older drafty house</li>
      <li>140,000 BTU input — large or very-cold-climate houses</li>
      <li>175,000+ BTU — multi-family or commercial residential</li>
    </ul>
    <p>
      For houses over 3,500 ft², two smaller modulating boilers in
      parallel (a &ldquo;mod-con array&rdquo;) is more efficient than
      one large boiler — they sequence based on load and one can be
      down for service without losing heat.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Pull the boiler&apos;s manual and read the venting
      table.</strong> Condensing boilers vent through PVC sidewall
      pipes; cast-iron boilers vent through metal Class B chimney.
      Mixing them voids the manufacturer warranty. The vent type
      determines where the boiler can physically go in the basement.
    </p>
    <p>
      <strong>Size the expansion tank to the boiler output.</strong>
      {' '}Hydronic systems need an expansion tank rated for the system
      water volume and operating pressure. Use the <Link href="/expansion-tank-sizing-calculator">expansion tank sizing calculator</Link> after the boiler size is set.
    </p>
    <p>
      <strong>Run a heat-loss calc for tight or unusual envelopes.</strong>
      {' '}The climate-zone rule overshoots tight modern construction
      by 20-40%. Use the <Link href="/heat-loss-calculator">heat loss calculator</Link> to size by actual envelope U-values for any new construction or deep retrofit.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>Cast-iron or condensing — which lasts longer?</strong>
      {' '}Cast-iron boilers commonly hit 30 years. Condensing units
      average 15-20. Condensing units save more in fuel cost over
      that life, but the upfront cost is 50-80% higher.
    </p>
    <p>
      <strong>Can I run radiators and radiant floor on one boiler?</strong>
      {' '}Yes — design the system with primary-secondary piping so
      each loop runs at its own design temperature. Most modulating-
      condensing boilers handle this natively.
    </p>
    <p>
      <strong>What size boiler for 2,500 ft² in Buffalo?</strong>
      {' '}45 BTU/ft² × 2,500 = 112,500 BTU output. At 95% AFUE,
      ~118,000 BTU input. Round to 120,000 BTU input boiler.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Forced-air system instead?</strong> Run the{' '}
      <Link href="/furnace-size-calculator" style={{ color: 'var(--hi-vis)' }}>furnace size calculator</Link>
      {' '}— same climate-zone math but with furnace-specific AFUE
      and standard furnace size increments.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'boiler-size-hydronic',
  title: 'Boiler Sizing for Hydronic Heating (Radiator vs Radiant)',
  metaTitle: 'Boiler Size Calculator Math — Hydronic Heating | ProjectCalc',
  metaDesc: 'How to size a residential boiler for hydronic heating. Radiator vs radiant adjustments, cast-iron vs condensing AFUE, standard sizes.',
  excerpt: 'Hydronic boiler sizing uses the same climate-zone rule as a furnace, with adjustments for radiant floor systems and boiler AFUE class. Cast-iron lasts longer, condensing saves more fuel.',
  date: '2026-05-03',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['boiler-size-calculator', 'expansion-tank-sizing-calculator', 'heat-loss-calculator'],
  Body,
};

export default post;
