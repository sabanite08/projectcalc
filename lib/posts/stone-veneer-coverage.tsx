import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Manufactured stone veneer is sold two ways: flats by the
      square foot and corners by the linear foot. Get the math
      wrong and you either run short halfway through the
      installation or end up with $400 of unreturnable material in
      the garage. Here's how to count it right.
    </p>

    <h2>Flats and corners — the 0.75 rule</h2>
    <p>
      Flat stones cover the field of the wall and are sold by the
      square foot. Corner stones are L-shaped pieces that wrap
      outside corners — the long leg goes on one face, the short
      leg on the adjacent face, hiding what would otherwise be
      ugly butt joints. Corners sell by the linear foot.
    </p>
    <p>
      Each linear foot of corner replaces about{' '}
      <strong>0.75 ft² of flat coverage</strong>. So a wall with
      30 lin ft of outside corners on a 200 ft² gross area really
      needs 200 − (30 × 0.75) = 178 ft² of flats plus 30 lin ft of
      corners. Add 10% waste to both for cuts and breakage.
    </p>
    <p>
      The{' '}
      <Link href="/stone-veneer-calculator">stone veneer
      calculator</Link>{' '}deducts corner coverage automatically
      and returns flats, corners, mortar, and lath all at once.
    </p>

    <h2>The lath layer is not optional</h2>
    <p>
      Every code-compliant manufactured stone install over framing
      or sheathing needs <strong>2.5-lb diamond mesh galvanized
      metal lath</strong> stapled <em>through</em> the sheathing
      into the studs at 6 in on center, plus a weather-resistive
      barrier (two layers of grade D paper, or a coded WRB) under
      the lath. Skip the lath, skip the WRB, or fasten the lath
      to sheathing only — and the veneer fails. Usually within
      five years.
    </p>
    <p>
      A standard 27" × 96" lath sheet covers 18 ft². A 200 ft²
      wall takes 12 sheets plus laps. The calculator returns
      sheet count.
    </p>
    <p>
      Direct-bond installs are allowed only over masonry, concrete,
      or brick — substrates that already provide bond. Frame
      walls always need lath.
    </p>

    <h2>Mortar — joint style decides the bag count</h2>
    <p>
      Two install styles drive different mortar consumption:
    </p>
    <ul>
      <li>
        <strong>Full mortar joint</strong> — traditional grouted
        look, joints visible between every stone. Roughly 3 bags
        of 80-lb Type S per 100 ft² of veneer.
      </li>
      <li>
        <strong>Dry stack</strong> — stones butted tight with
        only the back-buttering and setting bed. About 1 bag per
        100 ft².
      </li>
    </ul>
    <p>
      Polymer-modified bagged mortar (sometimes labeled "stone
      veneer mortar" or "Mason Mix") is what most manufacturers
      spec — standard Type N often doesn't bond well to the back
      of cast veneer. Read the spec sheet for the brand you're
      installing before mixing.
    </p>

    <h2>Cut work and waste</h2>
    <p>
      The 10% waste factor is a baseline. Bump it to 15% on:
    </p>
    <ul>
      <li>Walls with more than 6 lin ft of corner per 100 ft² of
        face (lots of cut starts)</li>
      <li>Tight pattern requirements (some manufacturers specify
        no two stones of the same shape touching)</li>
      <li>Masonry novices — pros waste roughly half what a
        first-time installer does</li>
    </ul>
    <p>
      Save the offcuts. Most veneer manufacturers ship pieces in
      blended pallets where every box has the same color and shape
      mix — the offcuts from one wall become field starts on the
      next.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Counting both faces of every corner.</strong> One
      L-shaped corner piece covers both adjacent faces at the
      corner — don't double-count it in your lin ft tally. Measure
      vertical run of the outside corner from grade to soffit.
    </p>
    <p>
      <strong>Skipping the weep screed.</strong> The bottom of the
      lath layer needs a weep screed or a 2-inch gap above grade
      so any moisture that gets behind the veneer can drain.
      Install on grade and water sits in the lath cavity, freezes,
      and pushes the veneer off the wall.
    </p>
    <p>
      <strong>Using the wrong staples.</strong> Galvanized roofing
      nails or fence staples corrode behind the veneer within five
      years. Hot-dip galvanized or stainless lath staples only.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How much stone veneer do I need for a 30 ft × 8 ft
      wall?</strong> Gross area = 240 ft². Subtract openings and
      account for corners with the calculator. With one outside
      corner of 8 lin ft, you need ~228 ft² of flats plus 9 lin ft
      of corners, plus 10% waste.
    </p>
    <p>
      <strong>Can I install stone veneer over old siding?</strong>
      {' '}No. Strip to sheathing, install WRB and lath, then
      veneer. The siding underneath will fail before the veneer
      does and trap moisture against the framing.
    </p>
    <p>
      <strong>What's the height limit?</strong> Manufactured
      stone veneer over framing is generally limited to 30 ft
      total wall height per code, with intermediate flashing
      every story. Above 30 ft, switch to natural stone with
      structural ties.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/stone-veneer-calculator" style={{ color: 'var(--hi-vis)' }}>stone veneer calculator</Link>{' '}
      uses standard manufacturer averages. Coverage, mortar yields,
      and corner ratios vary by product line — verify against the
      spec sheet for the SKU you're installing before ordering.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'stone-veneer-coverage',
  title: 'Stone Veneer — Flats, Corners, Mortar',
  metaTitle: 'Stone Veneer Coverage — Flats, Corners, Mortar | ProjectCalc',
  metaDesc: 'How to estimate manufactured stone veneer: flats by square foot, corners by linear foot, the 0.75 rule, mortar bags, lath sheets.',
  excerpt: 'Manufactured stone veneer is sold two ways: flats by the square foot and corners by the linear foot. Get the math wrong and you either run short or eat unreturnable material. Here is the count.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['stone-veneer-calculator', 'mortar-grout-calculator', 'siding-calculator'],
  Body,
};

export default post;
