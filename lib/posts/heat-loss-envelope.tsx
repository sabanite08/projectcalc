import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Heat loss is the conductive piece of a heating load
      calculation — how many BTUs the building gives up through
      the walls, windows, ceiling, and floor when the indoor and
      outdoor temperatures don't match. It's the foundation of
      Manual J, the basis of every weatherization decision, and
      the math behind whether sealing the rim joist is actually
      worth the weekend.
    </p>

    <h2>The formula — Q = U × A × ΔT</h2>
    <p>
      Per surface:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      Q = U × A × ΔT
    </p>
    <ul>
      <li><strong>Q</strong> = heat flow in BTU/hr</li>
      <li><strong>U</strong> = U-value, the rate of heat flow per
        ft² per °F. U = 1/R where R is the insulation rating</li>
      <li><strong>A</strong> = surface area in ft²</li>
      <li><strong>ΔT</strong> = temperature difference between
        inside and outside in °F</li>
    </ul>
    <p>
      Run the math once for each surface — wall, window, ceiling,
      floor — and add them up. That's the whole-house conductive
      heat loss at design conditions.
    </p>

    <h2>R-value vs U-value</h2>
    <p>
      Same physics, inverted scale. R is the resistance to heat
      flow; U is the rate of heat flow:
    </p>
    <ul>
      <li>R-19 wall → U = 1/19 = 0.053</li>
      <li>R-30 ceiling → U = 1/30 = 0.033</li>
      <li>Single-pane window → U = 1.0 (R = 1)</li>
      <li>Double low-E window → U = 0.30 (R ≈ 3.3)</li>
      <li>Triple-pane window → U = 0.18 (R ≈ 5.6)</li>
    </ul>
    <p>
      Insulation is sold by R-value because that's the quick
      mental model — R-19 is more than R-13. Windows are sold by
      U-value because the assembly (glass + frame + spacer)
      doesn't have a uniform R-value, and the U number better
      describes the performance.
    </p>

    <h2>The 99% design temperature</h2>
    <p>
      ΔT in the formula uses the <strong>99% outdoor design
      temp</strong> — the temperature your area is colder than
      only 1% of the heating season hours. Sizing equipment to
      record-cold means oversizing for 99.9% of the year. ACCA
      Manual J Table 1 lists the 99% design temp for every U.S.
      city; the calculator's tooltip has typical values:
    </p>
    <ul>
      <li>Phoenix: 31°F</li>
      <li>Atlanta: 23°F</li>
      <li>St. Louis: 11°F</li>
      <li>NYC: 11°F</li>
      <li>Boston: 6°F</li>
      <li>Chicago: -3°F</li>
      <li>Minneapolis: -12°F</li>
      <li>Duluth: -19°F</li>
      <li>Fairbanks: -47°F</li>
    </ul>

    <h2>What the calculator doesn't include</h2>
    <p>
      Real Manual J adds three pieces beyond conductive loss:
    </p>
    <p>
      <strong>Infiltration.</strong> Air leaking through cracks
      around windows, doors, electrical penetrations, and the rim
      joist carries heat with it. Typical loss = 0.018 × volume ×
      ACH × ΔT. A 20,000 ft³ house at 0.35 natural ACH and ΔT 65 =
      8,200 BTU/hr. Substantial.
    </p>
    <p>
      <strong>Duct losses.</strong> Ducts in unconditioned attics
      or crawlspaces lose 15-25% of system output to that space.
      Unconditioned-space ducts are the single most expensive
      design decision in residential HVAC.
    </p>
    <p>
      <strong>Internal gains.</strong> Bodies (250 BTU/person
      sensible), lights (3.4 BTU per W of lighting), appliances
      (1,000-1,500 BTU/hr from cooking, dishwasher, dryer). On the
      heating side these <em>reduce</em> the equipment-sized load.
    </p>
    <p>
      A reasonable rule: take the conductive loss from the{' '}
      <Link href="/heat-loss-calculator">heat loss calculator</Link>,
      multiply by 1.25-1.40 for infiltration, then subtract typical
      internal gains (~1,500-2,500 BTU/hr for a small house) to get
      the heating equipment size.
    </p>

    <h2>Where the heat goes — typical breakdown</h2>
    <p>
      Whole-home loss for a typical 2,000 ft² 2-story house in
      Chicago (ΔT = 73°F):
    </p>
    <ul>
      <li>Walls (R-19, 1,600 ft²): 6,150 BTU/hr</li>
      <li>Windows (U-0.32, 240 ft²): 5,600 BTU/hr</li>
      <li>Ceiling (R-38, 1,000 ft²): 1,920 BTU/hr</li>
      <li>Floor (R-19, 1,000 ft²): 3,840 BTU/hr</li>
      <li>Total conductive: ~17,500 BTU/hr</li>
      <li>+ infiltration (×1.30): ~22,800 BTU/hr</li>
      <li>− internal gains (~2,000): ~20,800 BTU/hr design load</li>
    </ul>
    <p>
      That's a 21,000 BTU/hr (1.75 ton) heat-pump heating load. A
      contractor selling you a 4-ton unit "to be safe" is
      oversizing 2× — Manual J catches that.
    </p>

    <h2>Common heat-loss mistakes</h2>
    <p>
      <strong>Using nominal R-value, not effective.</strong> R-19
      batt installed badly performs at R-13. Thermal bridging
      through 2x4 studs drops a "R-13 wall" to a whole-wall
      R-value of about 9. Effective R, not nominal R, is what
      goes in the calc.
    </p>
    <p>
      <strong>Forgetting basement walls.</strong> A heated
      basement loses heat through below-grade walls at a slower
      rate than above-grade (soil temp moderates), but it's not
      zero. Manual J includes basement loss; the calculator
      doesn't — add it manually for a heated below-grade level.
    </p>
    <p>
      <strong>Ignoring the floor over the garage.</strong> The
      garage is unconditioned. Floor over it gets the full ΔT,
      not the indoor-to-indoor ΔT. Insulate the floor or condition
      the garage; either way, count it.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/heat-loss-calculator" style={{ color: 'var(--hi-vis)' }}>heat loss calculator</Link>{' '}
      gives conductive loss only. Infiltration, duct losses, and
      internal gains must be added for a true Manual J load. Use
      this for envelope-improvement decisions and as a sanity
      check; equipment sizing requires a credentialed HVAC
      contractor running full Manual J.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'heat-loss-envelope',
  title: 'Heat Loss — Q = U × A × ΔT for Building Envelopes',
  metaTitle: 'Heat Loss Calc — Q = U × A × ΔT, Envelope Math | ProjectCalc',
  metaDesc: 'How to calculate building heat loss: Q = U × A × ΔT, R-value vs U-value, 99% design temp, infiltration and internal gains beyond conductive.',
  excerpt: 'Q = U × A × ΔT is the foundation of every Manual J. Here is the math, the 99% design temp, and what to add beyond conductive loss.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['heat-loss-calculator', 'manual-j-heat-load-calculator', 'btu-calculator'],
  Body,
};

export default post;
