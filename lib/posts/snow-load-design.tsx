import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Snow load is the single weather number that drives roof framing
      design in cold climates. Get it wrong by 10 psf and you&apos;re
      either paying for lumber you don&apos;t need or designing a
      collapse risk. The number on your engineer&apos;s drawings comes
      from ASCE 7, the structural engineering standard adopted by the
      International Building Code. Here&apos;s how the math works and
      where to find your inputs.
    </p>

    <p style={{ padding: 12, background: 'rgba(255, 100, 100, 0.08)', borderLeft: '2px solid #c44', fontSize: 13 }}>
      <strong>Estimate only.</strong> This guide and the calculator
      cover the ASCE 7 simplified method for residential roofs (Risk
      Category II). For commercial, multi-family, drift-prone roofs,
      or any structure your local jurisdiction flags as critical,
      get a licensed structural engineer to run the full analysis.
    </p>

    <h2>Ground snow vs roof snow</h2>
    <p>
      Two numbers matter:
    </p>
    <ul>
      <li><strong>Ground snow load (pg):</strong> The weight per square foot of snow that statistically accumulates on flat open ground in your region over a 50-year return period. Set by the building department.</li>
      <li><strong>Roof snow load (pf or ps):</strong> The design load on your actual roof, calculated from pg with four multipliers that account for exposure, heating, importance, and slope.</li>
    </ul>
    <p>
      You don&apos;t design framing for the ground number — you design
      for the roof number, which is usually <em>less</em> than ground
      because of wind scour and slope shedding.
    </p>

    <h2>The simplified formula</h2>
    <p>
      ASCE 7-22 chapter 7 gives a simplified equation for residential
      pitched roofs:
    </p>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      pf = 0.7 × Ce × Ct × I × pg{'\n'}
      ps = Cs × pf
    </p>
    <p>
      Where pf is the flat-roof snow load and ps is the sloped roof
      snow load. The 0.7 factor reduces ground snow to what actually
      accumulates on a roof under normal exposure. Each multiplier:
    </p>
    <ul>
      <li><strong>Ce — Exposure factor:</strong> 0.9 fully exposed (open terrain), 1.0 partially exposed (typical suburban), 1.2 sheltered (dense trees)</li>
      <li><strong>Ct — Thermal factor:</strong> 1.0 heated structure (house with insulated conditioned space), 1.2 unheated structure (barn, detached garage)</li>
      <li><strong>I — Importance factor:</strong> 1.0 residential (Risk Cat II), 1.1 schools and assembly, 1.2 hospitals (Risk Cat IV)</li>
      <li><strong>Cs — Slope factor:</strong> 1.0 if pitch ≤ 30°. Above 30° on warm slippery roofs, Cs = (70 − angle) ÷ 40, dropping to 0 at 70°</li>
    </ul>

    <h2>Worked example</h2>
    <p>
      Boston single-family house, 6/12 pitch, asphalt shingle roof,
      heated, suburban (some trees nearby):
    </p>
    <ul>
      <li>pg = 35 psf (Boston ground snow per Massachusetts code)</li>
      <li>Ce = 1.0 (partially exposed)</li>
      <li>Ct = 1.0 (heated)</li>
      <li>I = 1.0 (residential)</li>
      <li>pf = 0.7 × 1.0 × 1.0 × 1.0 × 35 = <strong>24.5 psf</strong></li>
      <li>Pitch 6/12 = 26.6° (below 30° threshold)</li>
      <li>Cs = 1.0</li>
      <li>ps = 1.0 × 24.5 = <strong>24.5 psf design load</strong></li>
    </ul>
    <p>
      The truss supplier or rafter designer uses 24.5 psf as the snow
      load input plus dead loads (sheathing, shingles, insulation —
      typically 8-15 psf for residential). The{' '}
      <Link href="/snow-load-calculator">snow load calculator</Link>
      {' '}runs this math instantly with the four multiplier dropdowns.
    </p>

    <h2>Where to find your ground snow load (pg)</h2>
    <p>
      Three reliable sources, in order of preference:
    </p>
    <ol>
      <li>
        <strong>Local building department.</strong> Most US
        jurisdictions publish a single pg value for the entire town
        or county. This is the legally binding number and what your
        permit reviewer will check against.
      </li>
      <li>
        <strong>State amendments to the IBC/IRC.</strong> Some states
        (Massachusetts, New York, Maine) publish state-wide pg maps
        with finer resolution than the ASCE 7 base map.
      </li>
      <li>
        <strong>ASCE 7 Hazard Tool</strong> at asce7hazardtool.online —
        the free online lookup that returns ground snow load for any
        US lat/lon. Useful for design-stage estimating before
        confirming with the local department.
      </li>
    </ol>
    <p>
      Common US ground snow values for reference:
    </p>
    <ul>
      <li>Atlanta, GA: 5 psf</li>
      <li>Denver, CO: 25 psf</li>
      <li>Chicago, IL: 25 psf</li>
      <li>Boston, MA: 35 psf</li>
      <li>Buffalo, NY: 50 psf</li>
      <li>Burlington, VT: 60 psf</li>
      <li>Anchorage, AK: 50-70 psf</li>
      <li>Mt. Washington valley, NH: 100+ psf</li>
    </ul>

    <h2>When the slope factor kicks in</h2>
    <p>
      Cs reduces snow load for steeper warm slippery roofs because
      snow slides off before it accumulates to the design depth. The
      cutoff is 30° (about 7/12 pitch) for asphalt shingles and metal
      roofs.
    </p>
    <p>
      A 12/12 pitch (45°) gives Cs = (70 − 45) ÷ 40 = 0.625 — meaning
      the design snow load drops by 37.5% vs a flat roof at the same
      ground snow. This is why steeper Cape Cod and Tudor roofs
      survive heavy New England winters with lighter rafters than a
      6/12 ranch with the same snow region.
    </p>
    <p>
      Cold roofs (unheated barns, ski cabins kept at outside
      temperature when unoccupied) don&apos;t get the slope reduction
      until much steeper angles — 45° instead of 30° — because the
      snow doesn&apos;t soften and slide.
    </p>

    <h2>What this number drives in framing</h2>
    <p>
      Once you have ps (sloped design load), it gets added to dead
      load for sizing:
    </p>
    <ul>
      <li><strong>Rafter and truss top chord:</strong> top chord lumber size scales with span and total load (ps + dead). A 20 ft span at 30 psf snow uses 2×8; at 60 psf it&apos;s 2×10.</li>
      <li><strong>Sheathing thickness:</strong> 7/16 in OSB at 24 in OC handles 30-40 psf; bumps to 5/8 in for higher snow.</li>
      <li><strong>Header sizes over openings:</strong> snow load adds to roof load over walls — the <Link href="/header-size-calculator">header size calculator</Link> uses this.</li>
      <li><strong>Foundation design:</strong> total roof load eventually transfers to footings, sized in the engineering stamp.</li>
    </ul>

    <h2>What pros do differently</h2>
    <p>
      <strong>Round up at the boundary.</strong> If your code official
      uses 30 psf and the calculator returns 28.5 psf, design for 30.
      The savings from designing to the calculated number aren&apos;t
      worth the risk of the inspector pulling out a different value
      mid-build.
    </p>
    <p>
      <strong>Account for drifting on adjacent roofs.</strong> ASCE 7
      simplified does not handle drift. If your roof has a shed dormer,
      a stepped second story, or sits next to a taller building, the
      drift load can be 2-3× the base ps in concentrated areas. Get
      an engineer for any building with these geometries.
    </p>
    <p>
      <strong>Verify the local pg before ordering trusses.</strong>
      {' '}Truss suppliers ask for snow load on the order form. Submitting
      the wrong number means the trusses ship with the wrong top chord
      lumber. Cross-check pg with the building department, then submit.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>Why is roof load less than ground load?</strong> Wind
      scours snow off roofs faster than off open ground. Heated roofs
      melt snow from below. The 0.7 factor and the multipliers
      account for both.
    </p>
    <p>
      <strong>Do I need to design for snow plus rain?</strong> In
      shallow-pitch regions where rain-on-snow is common, IBC requires
      a 5 psf rain surcharge on roofs below 1/2 in per ft slope. Above
      that pitch, water runs off and the surcharge doesn&apos;t apply.
    </p>
    <p>
      <strong>What if my old roof is rated lower than the current code?</strong>
      {' '}Existing buildings are grandfathered to the code in effect
      when built. New roofs and additions must meet current ground snow.
      Re-roofing alone (replacing shingles) does not trigger an upgrade.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only — not engineered design.</strong> The{' '}
      <Link href="/snow-load-calculator" style={{ color: 'var(--hi-vis)' }}>snow load calculator</Link>
      {' '}runs the ASCE 7 simplified method for residential roofs.
      For commercial, drift-prone, or multi-family structures, get a
      licensed structural engineer to run the full chapter 7 analysis
      and stamp the design.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'snow-load-design',
  title: 'Roof Snow Load — How to Read Your Number and Why It Matters',
  metaTitle: 'Roof Snow Load Explained — ASCE 7 Simplified | ProjectCalc',
  metaDesc: 'How roof snow load is calculated from ground snow load using ASCE 7. Where to find your ground snow value, what the four multipliers do.',
  excerpt: 'Snow load is the weather number that drives roof framing in cold climates. Get it wrong by 10 psf and you are paying for lumber you do not need — or designing a collapse risk. Here is how the math works.',
  date: '2026-05-03',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['snow-load-calculator', 'roof-truss-calculator', 'header-size-calculator'],
  Body,
};

export default post;
