import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Built-up beams from dimensional lumber show up everywhere
      in residential framing — under floors, over carrying walls,
      across deck rims. The question is always the same: how far
      can I span this thing? Here is the practical version of the
      math, with the disclaimers that have to come with it.
    </p>

    <h2>What &quot;simple span&quot; means</h2>
    <p>
      A simple-span beam is supported at two ends only, with a
      uniformly distributed load between them. That covers most
      residential floor and roof beams. If your beam has a column
      or post in the middle, or carries a point load (a stack of
      walls coming down on one spot), the math is different and
      you need an engineer.
    </p>

    <h2>The two limits that govern span</h2>
    <p>
      A wood beam has to pass two checks before you can call its
      span allowable:
    </p>
    <ul>
      <li>
        <strong>Bending strength.</strong> The beam must not
        crack under load. Required section modulus comes from
        M = wL²/8, with allowable bending stress (Fb) for the
        species and grade. For #2 SPF, Fb is 875 psi adjusted by
        a size factor (Cf) that gets bigger for shallow sections.
      </li>
      <li>
        <strong>Deflection (sag).</strong> Even if it doesn&apos;t
        break, a beam that bows too much cracks finishes above
        and below it. Floor beams are limited to L/360 of live-
        load deflection — that is, span divided by 360. A 12-ft
        beam can sag no more than 144/360 = 0.4 inch under
        live load.
      </li>
    </ul>
    <p>
      The{' '}
      <Link href="/beam-span-calculator">beam span calculator</Link>{' '}
      computes both and reports whichever governs.
    </p>

    <h2>Tributary width — the load on the beam</h2>
    <p>
      Tributary width is the half-distance from the beam to the
      next parallel support. A beam down the middle of a 24-ft-
      wide room with joists hanging off both sides has a 12-ft
      tributary width. Multiply that by your floor load (40 psf
      live + 10 psf dead = 50 psf in residential) to get the
      uniform load in pounds per linear foot. A 12-ft tributary
      at 50 psf is 600 plf.
    </p>

    <h2>Member, ply, and species</h2>
    <p>
      The calculator covers four sizes (2x6, 2x8, 2x10, 2x12) at
      one to three plies, fastened together. Three plies are not
      automatically three times as strong — they must be properly
      nailed (typically 16d at 12" o.c., staggered top and
      bottom) or bolted to act as a unit. Spruce-Pine-Fir #2 is
      the assumed species; Douglas Fir is stiffer and stronger
      and would let you span farther, while Hemlock or
      Southern Yellow Pine vary in either direction.
    </p>
    <p>
      For wide openings or heavy loads, switch to engineered
      lumber: LVL (laminated veneer lumber), PSL (parallel strand
      lumber), or glulam. They span 30%+ farther than the same
      depth in built-up dimensional, with predictable
      manufacturer-published values.
    </p>

    <h2>How to use the result</h2>
    <p>
      The number the calculator returns is the maximum span where
      the beam stays inside both bending and deflection limits.
      In practice you want at least 10–15% margin, because field
      conditions never match assumptions perfectly: lumber grade
      varies, point loads sneak in, contractor changes happen.
      If the calculator shows a 10.5-ft max span and you need
      11 ft, step up a size or add a ply rather than trust the
      margin.
    </p>

    <h2>What this calculator does not do</h2>
    <p>
      It does not consider:
    </p>
    <ul>
      <li>Shear at the supports (rarely controlling for typical
        residential floor beams, but real)</li>
      <li>Bearing length at the supports — your beam needs at
        least 1.5–3 inches of bearing on a stud pack or column,
        sized for the reaction</li>
      <li>Connection design — how the joists hang off the beam,
        how the beam transfers to columns below</li>
      <li>Snow drift, seismic, or wind uplift loads on roof beams</li>
      <li>Notches and holes drilled in the beam (which can
        reduce capacity dramatically)</li>
    </ul>
    <p>
      For deck beams specifically, IRC R507.5 has prescriptive
      tables that cover most residential decks; use those before
      this calculator if your project fits.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How far can a triple 2x10 span?</strong> Under a
      typical 12-ft tributary width and standard residential
      load, around 11–12 feet for #2 SPF. A double 2x12 will go
      slightly farther. For longer spans, engineered LVL is
      almost always the right answer.
    </p>
    <p>
      <strong>Why is the deflection limit L/360 instead of
      L/240?</strong> L/240 is for roof rafters with no finished
      ceiling below; the visible sag is hidden by the slope. Floors
      under finished ceilings need L/360 because drywall cracks
      around 0.5 inch of midspan deflection.
    </p>
    <p>
      <strong>Can I use this for a deck beam?</strong> Yes for
      planning, but always cross-check against IRC R507.5 deck-
      beam span tables. Decks have specific outdoor-exposure and
      bearing rules the calculator doesn&apos;t enforce.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Built-up beams in real
      structures must be sized by a licensed structural engineer
      or selected from a code-stamped span table. The{' '}
      <Link href="/beam-span-calculator" style={{ color: 'var(--hi-vis)' }}>beam span calculator</Link>{' '}
      is for planning. ProjectCalc is not responsible for
      structural failures resulting from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'beam-span-basics',
  title: 'Beam Span Basics — How Far Will a Built-Up Beam Carry?',
  metaTitle: 'Beam Span Basics — Built-Up Wood Beams | ProjectCalc',
  metaDesc: 'Built-up dimensional lumber beam span basics — bending strength, L/360 deflection, tributary width, and when to switch to engineered LVL.',
  excerpt: 'Built-up beams from 2x stock are everywhere in residential framing. The question is always: how far can I span this? Here is the practical math, with the disclaimers that have to come with it.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['beam-span-calculator', 'header-size-calculator', 'lumber-calculator'],
  Body,
};

export default post;
