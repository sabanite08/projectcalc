import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Pressure loss is the silent killer of water systems. Everything looks
      fine on installation day — meter pressure is 60 psi, all the fixtures
      run, the inspector signs off. Then a few months later the master shower
      drops to a trickle whenever the dishwasher runs, the second-floor
      hose bib wheezes, and nobody can figure out why. Almost always: friction
      loss in undersized pipe at the wrong spot. This guide walks through the
      Hazen-Williams formula, what each variable actually means, and how to
      use the math before you cut and sweat the wrong size.
    </p>

    <h2>What pressure loss is</h2>
    <p>
      Water moving through pipe loses energy to friction with the pipe wall.
      The longer the run, the higher the flow rate, the smaller the pipe,
      and the rougher the inside surface, the more energy is lost — measured
      either in feet of head or pounds per square inch (PSI). One foot of
      head equals 0.433 PSI. So a 23 ft head loss eats 10 PSI from your
      working pressure.
    </p>
    <p>
      The total available pressure at any fixture is:
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      P_fixture = P_supply − friction_loss − elevation_loss
    </p>
    <p>
      Elevation loss is just gravity: every foot of vertical rise costs 0.433
      PSI. A second-floor bathroom 12 ft above the meter loses 5.2 PSI to
      elevation alone before friction is counted.
    </p>

    <h2>The Hazen-Williams formula</h2>
    <p>
      Hazen-Williams is the equation pretty much every plumbing designer uses
      for water at typical municipal pressure. Simpler than Darcy-Weisbach
      (which is more accurate at extreme conditions) and accurate enough for
      residential and light commercial work.
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      h_f = 4.52 × L × Q^1.852 ÷ (C^1.852 × D^4.87)
    </p>
    <p>Where:</p>
    <ul>
      <li><strong>h_f</strong> = head loss in feet (multiply by 0.433 to get PSI)</li>
      <li><strong>L</strong> = pipe length in feet (use developed length: straight pipe + equivalent length for fittings)</li>
      <li><strong>Q</strong> = flow rate in gallons per minute</li>
      <li><strong>C</strong> = roughness coefficient (depends on pipe material)</li>
      <li><strong>D</strong> = inside diameter in inches (not nominal size)</li>
    </ul>
    <p>
      The exponents do most of the work. Flow is to the 1.852, so doubling
      flow nearly quadruples loss. Diameter is to the 4.87 — bumping pipe up
      one nominal size cuts friction loss in half or more. That&apos;s why
      upsizing is the standard fix when fixtures starve.
    </p>
    <p>
      The <Link href="/pressure-loss-calculator">pressure loss calculator</Link>{' '}
      runs Hazen-Williams for you across copper, PEX, CPVC, and steel.
    </p>

    <h2>C-factors by pipe material</h2>
    <p>
      The C-factor captures how rough the inside of the pipe is. Higher
      C = smoother = less friction:
    </p>
    <ul>
      <li><strong>Plastic (PEX, CPVC, PVC):</strong> C = 150. The smoothest commonly-used material.</li>
      <li><strong>Copper Type L (new):</strong> C = 140</li>
      <li><strong>Copper Type L (10+ years):</strong> C = 130 — slight oxide buildup</li>
      <li><strong>Cast iron (new):</strong> C = 120</li>
      <li><strong>Galvanized steel (new):</strong> C = 120</li>
      <li><strong>Galvanized steel (15–30 yr old):</strong> C = 80–100</li>
      <li><strong>Galvanized steel (40+ yr old):</strong> C = 60 or lower</li>
    </ul>
    <p>
      The aging behavior of galvanized steel is why so many old houses have
      slow flow — the original 1&quot; line is now flowing like a 5/8&quot;
      line because mineral buildup has cut the effective inside diameter and
      crashed the C-factor. Replace it instead of trying to size around it.
    </p>

    <h2>Inside diameter ≠ nominal size</h2>
    <p>
      The number printed on a pipe is the <em>nominal</em> size — a label,
      not a measurement. Actual inside diameter varies by material because
      wall thickness varies:
    </p>
    <ul>
      <li>¾&quot; copper Type L: ID = 0.785&quot;</li>
      <li>¾&quot; PEX-A: ID = 0.671&quot;</li>
      <li>¾&quot; CPVC: ID = 0.695&quot;</li>
      <li>¾&quot; galvanized steel: ID = 0.824&quot;</li>
    </ul>
    <p>
      PEX has the smallest ID for any given nominal size because of its
      thicker wall. That&apos;s why PEX usually needs to bump up one nominal
      size compared to copper for equivalent flow performance. The math in
      Hazen-Williams uses ID, not nominal — sizing PEX as if it were copper
      will under-deliver flow.
    </p>

    <h2>Equivalent length for fittings</h2>
    <p>
      Every elbow, tee, and valve adds friction loss as if you had a
      certain extra length of straight pipe. Rough equivalents for ¾&quot;
      copper:
    </p>
    <ul>
      <li>90° elbow: 2 ft equivalent</li>
      <li>45° elbow: 1 ft equivalent</li>
      <li>Tee (run-through): 1 ft</li>
      <li>Tee (branch): 5 ft</li>
      <li>Gate valve (fully open): 0.5 ft</li>
      <li>Globe valve (fully open): 25 ft</li>
      <li>Check valve: 9 ft</li>
      <li>Water meter: 10–25 ft (varies by meter type)</li>
    </ul>
    <p>
      A typical residential branch from the main to a far bathroom might be
      30 ft of straight pipe plus six 90° elbows and a tee — that&apos;s
      30 + 12 + 5 = 47 ft of developed length, not 30. Plug 47 into the
      formula, not 30.
    </p>

    <h2>Velocity matters too</h2>
    <p>
      Friction loss is half the picture. Velocity is the other half — and
      it&apos;s an independent constraint. Water above 8 fps on cold lines
      (5 fps on hot) erodes pipe and fittings, regardless of what the
      pressure-loss math says.
    </p>
    <p style={{ fontFamily: 'JetBrains Mono, monospace', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)' }}>
      V (fps) = Q (GPM) × 0.4085 ÷ D² (inches)
    </p>
    <p>
      A pipe that&apos;s acceptable on friction loss but exceeds the velocity
      threshold causes water hammer (pressure spikes from sudden stops),
      audible flow noise, and pinhole leaks at fittings within a decade. If
      either friction loss or velocity fails, upsize.
    </p>

    <h2>Common scenarios where this matters</h2>
    <p>
      <strong>Long underground service runs.</strong> Houses set back from
      the street with 200+ ft from meter to building eat measurable PSI in
      the buried pipe. A 200 ft ¾&quot; copper line at 10 GPM loses about
      5 PSI to friction — bumping to 1&quot; cuts that to under 1 PSI.
    </p>
    <p>
      <strong>Multi-story buildings.</strong> Top-floor fixtures lose both
      elevation pressure (5 PSI for second floor, 9 PSI for third) and
      friction loss in the riser. Risers in older buildings are often
      undersized; the standard fix is a separate riser per zone or a booster
      pump (see the{' '}
      <Link href="/water-supply-pipe-size-calculator">water supply sizing calculator</Link>{' '}
      for fixture-unit-based sizing).
    </p>
    <p>
      <strong>Irrigation mains.</strong> Sprinkler zones flowing 15–25 GPM
      need bigger pipe than typical residential branch lines. A ¾&quot; line
      at 20 GPM has unacceptable velocity (over 13 fps) and high friction
      loss — needs at least 1&quot;.
    </p>
    <p>
      <strong>Tankless water heater inlet.</strong> Most tankless units need
      ¾&quot; cold water inlet at minimum, sometimes 1&quot;, regardless of
      what the previous tank heater was fed by. A starved tankless will
      cycle on flow rather than hold steady temperature.
    </p>

    <h2>When to upsize</h2>
    <p>
      Rough decision rules:
    </p>
    <ul>
      <li>Total friction loss exceeds 10 PSI on the path to any fixture: upsize</li>
      <li>Velocity exceeds 8 fps cold or 5 fps hot anywhere in the system: upsize</li>
      <li>Run length over 100 ft and friction loss approaches 5 PSI: upsize for headroom</li>
      <li>Fixture at the dead end of the line consistently underperforms: trace pressure back, upsize the run with the worst loss</li>
    </ul>
    <p>
      The cost difference between ¾&quot; and 1&quot; copper is roughly
      40% per foot. The cost difference between fixing a starved fixture
      now and ripping open finished walls in three years is everything.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How do I calculate friction loss in a water line?</strong> Use
      Hazen-Williams: h = 4.52 × L × Q^1.852 ÷ (C^1.852 × D^4.87). Multiply
      head loss in feet by 0.433 to get PSI. The{' '}
      <Link href="/pressure-loss-calculator">pressure loss calculator</Link>{' '}
      handles it for any common pipe material.
    </p>
    <p>
      <strong>How much PSI is lost per 100 ft of pipe?</strong> Depends on
      flow rate and pipe size. A typical example: ¾&quot; copper at 8 GPM
      loses about 1.7 PSI per 100 ft. The same line at 15 GPM loses 5.5 PSI
      per 100 ft — flow doubled, loss tripled.
    </p>
    <p>
      <strong>What&apos;s the difference between Hazen-Williams and Darcy-Weisbach?</strong>{' '}
      Darcy-Weisbach is more accurate across all flow regimes and fluid
      types but requires solving for the friction factor (Moody diagram or
      Colebrook equation). Hazen-Williams is a fitted approximation valid
      for water near room temperature at typical municipal pressure — easier
      to compute, accurate enough for ~95% of plumbing work.
    </p>
    <p>
      <strong>Does pipe length include fittings?</strong> Yes — use developed
      length, which is straight pipe length plus equivalent length for every
      fitting. Each 90° elbow adds about 2 ft, each tee branch adds 5 ft.
      A complex branch can have 30–50% of its loss in fittings.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/pressure-loss-calculator" style={{ color: 'var(--hi-vis)' }}>pressure loss calculator</Link>{' '}
      runs Hazen-Williams across copper, PEX, CPVC, and galvanized steel
      with built-in velocity check.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'pressure-loss-in-pipes',
  title: 'Pressure Loss in Water Pipes: Hazen-Williams Made Practical',
  metaTitle: 'Pressure Loss Calculator — Hazen-Williams Friction Loss Guide | ProjectCalc',
  metaDesc: 'Calculate friction loss in water pipes using Hazen-Williams. C-factors by material, equivalent length for fittings, when to upsize, and the velocity check most installers miss.',
  excerpt: 'Pressure loss is the silent killer of water systems. Everything looks fine on day one, then a fixture starves three months later. Here\'s the math that prevents it.',
  date: '2026-04-27',
  readTime: 9,
  category: 'construction',
  relatedCalcs: ['pressure-loss-calculator', 'gpm-to-pipe-size-calculator', 'water-supply-pipe-size-calculator', 'pipe-volume-calculator'],
  Body,
};

export default post;
