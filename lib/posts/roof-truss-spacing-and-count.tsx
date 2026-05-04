import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Engineered roof trusses replaced stick framing for one reason:
      they ship pre-built, drop in 30 minutes per truss with a crane,
      and the lumber is sized by an engineer instead of by you eyeballing
      span tables. The math for ordering is simple — count and spacing.
      The math for the truss itself is the supplier&apos;s problem.
      Here&apos;s what you need to know to order correctly.
    </p>

    <p style={{ padding: 12, background: 'rgba(255, 100, 100, 0.08)', borderLeft: '2px solid #c44', fontSize: 13 }}>
      <strong>Estimate only — engineered design required.</strong>
      {' '}Truss design (lumber sizes, plate connectors, web layout)
      is engineered by the truss manufacturer for your specific span,
      snow load, and roof loads. This guide and calculator handle
      count and spacing only, not truss design.
    </p>

    <h2>The truss count formula</h2>
    <p>
      Trusses are spaced along the building length, perpendicular to
      the ridge. The math is:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      total_trusses = ceil(length_in ÷ spacing) + 1
    </p>
    <p>
      The +1 is the truss at the starting end — every spacing interval
      adds one more truss after that, and you cap with one at the far
      end.
    </p>
    <p>
      <strong>Example:</strong> a 30 ft long building at 24 in OC.
      (30 × 12) ÷ 24 = 15 intervals. 15 + 1 = <strong>16 trusses</strong>
      {' '}total. If both end walls are gable trusses, that&apos;s 14
      common trusses + 2 gable trusses. The{' '}
      <Link href="/roof-truss-calculator">roof truss calculator</Link>
      {' '}handles this and the gable end split.
    </p>

    <h2>16 vs 24 OC — which spacing</h2>
    <p>
      24 in on center is the residential standard for two reasons:
      it lets you sheath with standard 4×8 ft OSB or plywood with
      fewer pieces, and the truss count is 33% lower vs 16 in OC. The
      tradeoff is that 24 in OC needs heavier top-chord lumber and
      heavier sheathing.
    </p>
    <p><strong>24 in OC:</strong></p>
    <ul>
      <li>Standard residential framing — single-family, light commercial</li>
      <li>Allows 7/16 in OSB sheathing on most roofs</li>
      <li>Lighter overall framing weight, fewer pieces to lift</li>
      <li>Lower lumber and labor cost</li>
    </ul>
    <p><strong>16 in OC:</strong></p>
    <ul>
      <li>Required for very heavy snow loads (above ~50 psf design)</li>
      <li>Used on long spans (over 32 ft) to allow lighter top chords</li>
      <li>Allows lighter sheathing options including some panel products</li>
      <li>33% more trusses to lift, set, and brace</li>
    </ul>
    <p>
      Truss suppliers default to 24 in OC unless your engineer
      specifies otherwise. The cost difference for going to 16 in OC
      on a 30 ft building is roughly 6 extra trusses plus the labor
      to set them — typically $1,500-3,000 in 2026 pricing depending
      on region.
    </p>

    <h2>Gable trusses — a different beast</h2>
    <p>
      A gable end truss looks like a regular truss outline but the
      web members are vertical studs at 16 or 24 in OC, doubling as
      the gable wall framing. They cost about 50% more than a common
      truss because of the extra material and engineering, but they
      eliminate having to stick-frame the gable walls separately.
    </p>
    <p>
      Skip gable trusses if your end walls are already conventionally
      framed up to the roof line. Most production builders use them;
      most owner-builders save the cost and stick-frame the gables.
    </p>

    <h2>Hurricane ties — never skip these</h2>
    <p>
      Every truss bears on the top plate of the wall. Code (IRC R802.11)
      requires uplift connection between truss and plate sized for the
      wind region. The standard is a Simpson Strong-Tie H1 or H2.5A
      hurricane clip, one per truss-to-plate connection.
    </p>
    <p>
      In coastal regions (Florida, Gulf Coast, Outer Banks), the spec
      jumps to H10 or LTS clips and requires anchoring to the wall
      studs, not just the plate. Local code amendments override the
      base IRC — pull the spec from the building department before
      ordering connectors.
    </p>

    <h2>Lead time — order before you frame</h2>
    <p>
      Engineered trusses run <strong>4-8 weeks lead time</strong> in
      most US markets in 2026. The supplier needs:
    </p>
    <ul>
      <li>Foundation and floor plan (defines the span)</li>
      <li>Roof pitch (set by the architect or calculated from the rafter design)</li>
      <li>Snow load (psf) for your jurisdiction — pull from <Link href="/snow-load-calculator">the snow load calculator</Link></li>
      <li>Wind exposure category (B/C/D)</li>
      <li>Sheathing and roofing dead load (typically 8-15 psf)</li>
    </ul>
    <p>
      Submit the order when foundation forms go in — by the time
      framing is dried in, trusses arrive. Showing up with framed walls
      and no truss order in the system means a 1-2 month framing pause
      while the trusses get engineered and shipped.
    </p>

    <h2>What pros do differently</h2>
    <p>
      <strong>Get the truss layout drawing approved before manufacture.</strong>
      {' '}Suppliers send a layout PDF with web member positions,
      bearing points, and uplift values. The site superintendent and
      truss installer should both sign off before the order ships.
      Field changes after delivery cost weeks.
    </p>
    <p>
      <strong>Order extra bracing material with the trusses.</strong>
      {' '}Permanent diagonal bracing is required between trusses per
      the truss design drawing. Most suppliers will quote the bracing
      lumber as a line item if asked. Without it, the framers improvise
      with whatever 2×4 they have on the truck — often non-compliant.
    </p>
    <p>
      <strong>Confirm the bearing surface is sized right.</strong>
      {' '}Trusses bear on the wall top plate. Long-span trusses
      (40+ ft) often need a doubled top plate or a beam at the bearing.
      The truss layout drawing specifies the required bearing length
      — verify your wall framing matches before the trusses arrive.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How long does a truss take to install?</strong> About
      30-45 minutes per truss with a crane, faster as the crew gets
      into a rhythm. A 16-truss roof on a 30 ft house takes a single
      day with a 3-person crew and crane.
    </p>
    <p>
      <strong>Can I cut a truss to fit?</strong> Never. Cutting any
      web member voids the engineering and the warranty, and weakens
      the load path. If a truss is wrong, the supplier modifies and
      reships.
    </p>
    <p>
      <strong>Do trusses replace ridge boards?</strong> Yes —
      engineered trusses are self-supporting once braced. There&apos;s
      no ridge board, no rafter ties, no collar ties. The truss IS
      the framing system.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Engineered design — verify with supplier.</strong> The{' '}
      <Link href="/roof-truss-calculator" style={{ color: 'var(--hi-vis)' }}>roof truss calculator</Link>
      {' '}handles count and spacing only. Truss design (lumber sizes,
      web layout, plate connectors) is engineered by the truss
      manufacturer for your span, snow load, and wind region.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'roof-truss-spacing-and-count',
  title: 'Roof Truss Count and Spacing — 16 vs 24 Inches On Center',
  metaTitle: 'Roof Truss Calculator Explained — 16 vs 24 OC | ProjectCalc',
  metaDesc: 'How to count roof trusses, when to use 16 vs 24 OC spacing, gable vs common trusses, hurricane ties, and lead times for engineered trusses.',
  excerpt: 'Engineered trusses replaced stick framing because they drop in 30 minutes and the lumber is sized by an engineer. The math for ordering is simple — count and spacing. Here is what to know.',
  date: '2026-05-03',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['roof-truss-calculator', 'snow-load-calculator', 'rafter-length-calculator'],
  Body,
};

export default post;
