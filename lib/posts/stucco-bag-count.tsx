import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Stucco bag counts are simple math once you know which
      system you're installing. The trap is that "stucco" covers
      two very different products — traditional 3-coat Portland
      cement stucco and 1-coat synthetic systems — with about a
      4× difference in bag consumption.
    </p>

    <h2>3-coat traditional — the 38-bag rule</h2>
    <p>
      Traditional Portland cement stucco builds in three coats:
    </p>
    <ul>
      <li>
        <strong>Scratch coat</strong> (3/8 in) — first layer
        keyed into the metal lath; surface scored horizontally to
        give the next coat something to bite. ~1 bag per 8 ft² of
        wall.
      </li>
      <li>
        <strong>Brown coat</strong> (3/8 in) — second layer,
        floated flat to plane the wall. Same yield as scratch:
        ~1 bag per 8 ft².
      </li>
      <li>
        <strong>Finish coat</strong> (1/8 in) — color coat,
        usually integral-colored Portland cement or acrylic.
        Thinner so coverage jumps to ~1 bag per 12 ft².
      </li>
    </ul>
    <p>
      Add it up: <strong>roughly 38 bags of 80-lb stucco mix per
      100 ft² of wall</strong> for a complete 3-coat job. A
      1,500 ft² house with about 1,200 ft² of net wall (after
      windows and doors) burns 460 bags — about 9 pallets.
    </p>
    <p>
      Run the live count on the{' '}
      <Link href="/stucco-calculator">stucco calculator</Link>.
    </p>

    <h2>1-coat synthetic — the 8-bag rule</h2>
    <p>
      One-coat systems use polymer-modified mixes with fiberglass
      or mesh reinforcement applied 3/8 in to 1/2 in thick over
      proprietary lath assemblies. Coverage runs about{' '}
      <strong>1 bag per 12 ft²</strong> — call it 8 bags per
      100 ft² of wall. Fastest install on the market and no
      between-coat cure time, but bag-for-bag it's more expensive
      than Portland cement and slightly less durable.
    </p>

    <h2>Lath, paper, and the WRB</h2>
    <p>
      Frame walls always need a weather-resistive barrier and
      metal lath under stucco. The standard buildup:
    </p>
    <ol>
      <li>Sheathing (OSB or plywood)</li>
      <li>Two layers of grade D paper or a coded WRB</li>
      <li>2.5-lb diamond-mesh galvanized metal lath, fastened
        through to studs at 6 in o.c.</li>
      <li>Weep screed at the base of the wall, 4 in min above
        finish grade</li>
      <li>Stucco coats</li>
    </ol>
    <p>
      Lath sheets are 27 in × 96 in = 18 ft² each. A 1,200 ft²
      net wall takes 67 sheets plus laps. Skip a layer of paper
      or under-fasten the lath and the wall fails — usually
      cracking and delamination at corners within five years.
    </p>

    <h2>Cure time matters more than bag count</h2>
    <p>
      The most common warranty failure on stucco isn't running
      out of mix — it's rushing between coats. Each coat needs
      moisture-cure time for the Portland cement to hydrate
      properly:
    </p>
    <ul>
      <li>Scratch coat → 48 hours minimum before brown</li>
      <li>Brown coat → 7 days before finish (10-14 days in cold
        weather)</li>
      <li>Finish coat → 28 days before applying paint or sealer
        (most painters skip this and the wall fails)</li>
    </ul>
    <p>
      Mist the wall during hot or windy cures so the surface
      doesn't dry before the cement hydrates. Stucco that dries
      faster than it cures cracks every time.
    </p>

    <h2>Aggregate sand for site-mix</h2>
    <p>
      If you're mixing from cement and sand on site instead of
      using a pre-blend, the standard ratio is 1 part Portland
      cement : 4 parts plaster sand for the scratch and brown
      coats, plus a small amount of lime in the brown coat for
      workability. A 1,200 ft² wall takes roughly 4 cubic yards
      of plaster sand for both scratch and brown, plus 30 bags
      of Portland cement. Pre-blends save the proportioning
      headache for the cost of 10-15% more per square foot.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Stucco over plywood without lath.</strong> Direct
      stucco-to-sheathing fails — wood expansion cracks the
      stucco; the lath is the only thing that holds it on.
    </p>
    <p>
      <strong>Skipping the weep screed.</strong> Without a weep
      screed at the base, water that gets behind the stucco has
      no way out, freezes, and blows the stucco off the wall.
    </p>
    <p>
      <strong>Painting the finish coat before it cures.</strong>
      {' '}Acrylic paint over uncured stucco traps the moisture
      and saponifies the paint. Wait the full 28 days even
      though the finish looks dry on day 3.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many bags of stucco for a 1,500 sq ft house?
      </strong> Roughly 460 bags for 3-coat traditional, or about
      96 bags for 1-coat synthetic. The calculator handles your
      net area after openings.
    </p>
    <p>
      <strong>Can I stucco over existing stucco?</strong> Yes —
      a "re-stucco" with one new finish coat over a wire-brushed,
      bonded existing wall. Skip the new lath unless the existing
      stucco is loose.
    </p>
    <p>
      <strong>Is stucco a good DIY project?</strong> Color and
      finish work yes; the structural lath/scratch/brown coats
      take experience to plane flat. First-timers should sub the
      base coats and only DIY the finish.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/stucco-calculator" style={{ color: 'var(--hi-vis)' }}>stucco calculator</Link>{' '}
      uses generic Portland cement and synthetic system yields.
      Real bag counts vary by mix design, substrate absorption,
      and lath profile — verify against the manufacturer's spec
      sheet before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'stucco-bag-count',
  title: 'Stucco — Bags Per Square Footage',
  metaTitle: 'Stucco Bag Count — 3-Coat and 1-Coat Math | ProjectCalc',
  metaDesc: 'How many bags of stucco per square foot. The 38-bag rule for 3-coat traditional, 8 bags for 1-coat synthetic, lath sheets, cure times.',
  excerpt: 'Stucco bag counts depend on the system. Traditional 3-coat burns about 38 bags per 100 sq ft; 1-coat synthetic runs 8 bags. Here is the math, the lath layers, and the cure schedule.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['stucco-calculator', 'mortar-grout-calculator', 'siding-calculator'],
  Body,
};

export default post;
