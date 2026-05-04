import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      &ldquo;What size AC do I need&rdquo; is the most-asked HVAC
      question in residential. The answer is in tons — the unit AC
      equipment is rated in and the unit your contractor will quote
      against. One ton equals 12,000 BTU/hr of cooling, the heat
      removed by melting one ton of ice over 24 hours. Here&apos;s how
      to size it without paying for a Manual J on a 1,500 ft² house.
    </p>

    <h2>The tonnage formula</h2>
    <p>
      The residential rule of thumb for cooling load:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      tons = (ft² × 20 × sun_adj + occupant_extra) ÷ 12,000
    </p>
    <p>
      <strong>Example:</strong> a 1,500 ft² ranch with normal sun and
      4 occupants. Base = 1,500 × 20 = 30,000 BTU/hr. Occupant extra =
      (4 - 2) × 600 = 1,200. Total = 31,200 BTU/hr ÷ 12,000 = 2.6 tons.
      Round up to a <strong>3.0 ton unit</strong> (the next standard
      residential size).
    </p>
    <p>
      The <Link href="/ac-tonnage-calculator">AC tonnage calculator</Link>
      {' '}runs this and snaps to the nearest standard size — 1.5,
      2.0, 2.5, 3.0, 3.5, 4.0, or 5.0 tons.
    </p>

    <h2>Standard residential AC sizes</h2>
    <p>
      Residential AC units come in fixed sizes. There&apos;s no
      &ldquo;2.7 ton&rdquo; — the manufacturers ship in 0.5-ton
      increments:
    </p>
    <ul>
      <li><strong>1.5 ton (18,000 BTU/hr):</strong> Apartments, small condos, 600-900 ft² zones</li>
      <li><strong>2.0 ton (24,000 BTU/hr):</strong> Small ranch homes, 900-1,200 ft²</li>
      <li><strong>2.5 ton (30,000 BTU/hr):</strong> Standard 3-bedroom, 1,200-1,500 ft²</li>
      <li><strong>3.0 ton (36,000 BTU/hr):</strong> Larger 3-bedroom or modest 4-bedroom, 1,500-1,800 ft²</li>
      <li><strong>3.5 ton (42,000 BTU/hr):</strong> 1,800-2,100 ft²</li>
      <li><strong>4.0 ton (48,000 BTU/hr):</strong> 2,100-2,400 ft²</li>
      <li><strong>5.0 ton (60,000 BTU/hr):</strong> 2,400-3,000 ft²</li>
    </ul>
    <p>
      Anything over 5 tons in residential is unusual and almost always
      means two smaller units zoned (one upstairs, one down) instead
      of one big unit.
    </p>

    <h2>Why oversizing is worse than slight undersizing</h2>
    <p>
      DIYers and bad contractors over-size AC because they think
      bigger means better. It&apos;s the opposite. An oversized AC:
    </p>
    <ul>
      <li><strong>Short-cycles</strong> — runs 5-10 minutes, hits the thermostat target, shuts off, then turns back on 15 minutes later. Each cycle stresses the compressor and burns starting electricity.</li>
      <li><strong>Doesn&apos;t dehumidify</strong> — AC removes humidity primarily through long, steady runs that let the coil get cold enough to condense moisture. Short cycles leave the house cold and clammy.</li>
      <li><strong>Costs more upfront and to run</strong> — bigger compressor, bigger electrical service, more refrigerant, higher monthly bill.</li>
      <li><strong>Wears out faster</strong> — short-cycling cuts compressor life by 30-50%.</li>
    </ul>
    <p>
      A correctly sized unit runs 70-80% of the hottest day, dehumidifies
      properly, and lasts 12-18 years. An oversized unit runs 30-40%
      of the same day and dies at 8-10 years.
    </p>

    <h2>When the rule of thumb breaks</h2>
    <p>
      The 20 BTU/ft² rule assumes a typical post-1990 house with
      8 ft ceilings, average insulation, and standard window count.
      Adjust if your house is unusual:
    </p>
    <ul>
      <li><strong>Cathedral or vaulted ceilings:</strong> Add 10-20% — more air to cool</li>
      <li><strong>Heavy west-facing glass:</strong> Add 10% beyond the &ldquo;sunny&rdquo; setting</li>
      <li><strong>Old, leaky 1950s house:</strong> Add 15% — uncontrolled infiltration</li>
      <li><strong>Tight modern house with foam insulation:</strong> Subtract 10-15%</li>
      <li><strong>Kitchen-only zone:</strong> Add 1,200 BTU for major appliances</li>
    </ul>
    <p>
      For any of these or for whole-house systems above 3 tons, an
      ACCA Manual J load calculation by an HVAC contractor is the
      right answer. The Manual J accounts for actual envelope U-values,
      window orientation, infiltration, and internal loads. Cost is
      typically $200-500 — pays for itself if it changes the equipment
      size by half a ton.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Run Manual J on jobs over $5,000.</strong> Anything where
      the equipment cost justifies a $300 calc, get the calc. Wrong
      sizing is the #1 reason residential AC dies early.
    </p>
    <p>
      <strong>Match the air handler.</strong> The condenser tonnage
      must match the air handler&apos;s rated airflow (typically 400
      CFM per ton) — mismatched components run inefficiently and
      void the manufacturer warranty.
    </p>
    <p>
      <strong>Verify ductwork can handle the airflow.</strong> A new
      3-ton unit needs about 1,200 CFM through the ducts. Old ductwork
      designed for a 2-ton unit will starve a 3-ton install. <Link href="/duct-cfm-calculator">Run the duct CFM calculator</Link> against the existing ducts before upgrading equipment.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size AC for 2,000 ft²?</strong> ~3.5 tons
      (42,000 BTU/hr) at normal sun and standard occupancy. Can be
      3.0 if shaded and tightly insulated; 4.0 if very sunny.
    </p>
    <p>
      <strong>How many BTU per ton?</strong> 12,000 BTU/hr per ton.
      A &ldquo;2-ton AC&rdquo; is 24,000 BTU/hr.
    </p>
    <p>
      <strong>Can I use a smaller AC and run it longer?</strong>
      {' '}Up to about 10% undersized, yes — and the dehumidification
      improves. Past that, the unit can&apos;t reach setpoint on the
      hottest days and runs continuously.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Heating side too?</strong> Run the{' '}
      <Link href="/furnace-size-calculator" style={{ color: 'var(--hi-vis)' }}>furnace size calculator</Link>
      {' '}for the heating output. Cooling and heating loads are
      different — most houses don&apos;t need the same tonnage on both
      sides of the year.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'ac-tonnage-explained',
  title: 'AC Tonnage Explained — What Size AC Do I Actually Need',
  metaTitle: 'AC Tonnage Explained — How to Size Residential AC | ProjectCalc',
  metaDesc: 'AC tonnage sizing for residential — 1 ton = 12,000 BTU/hr. Standard sizes, why oversizing is worse than slight undersizing, when to run Manual J.',
  excerpt: 'AC equipment is rated in tons — 1 ton = 12,000 BTU/hr. The rule of thumb is 20 BTU/ft² with sun and occupant adjustments. Oversizing is worse than slight undersizing. Here is the math.',
  date: '2026-05-03',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['ac-tonnage-calculator', 'btu-calculator', 'duct-cfm-calculator'],
  Body,
};

export default post;
