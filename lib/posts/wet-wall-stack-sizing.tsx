import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      In multi-story houses, almost all plumbing runs vertically through one
      or two designated wet walls — framed cavities that carry the supply,
      drain, and vent lines from the basement to the roof. The soil stack
      inside that wall (sometimes called the drainage stack or main vertical)
      collects every fixture connected at every floor and dumps the load
      into the building drain at the bottom. Get the stack size wrong and
      you have a structural problem dressed up as a plumbing problem.
      Here&apos;s how stacks get sized per IPC and what wet-wall framing has
      to accommodate.
    </p>

    <h2>What a wet wall is</h2>
    <p>
      A wet wall is a framed wall designed to carry plumbing inside the
      cavity. Differences from a regular interior wall:
    </p>
    <ul>
      <li><strong>Wider studs:</strong> Typically 2×6 instead of 2×4 to fit a 3&quot; or 4&quot; vertical drain stack with insulation around it. Some designers use staggered 2×4s.</li>
      <li><strong>Plumbing-grade studs:</strong> Less knot, less twist — straight studs let the plumber maintain plumb on long vertical runs.</li>
      <li><strong>Notch / bore allowances:</strong> Studs can be notched up to 25% of depth or bored up to 40% (40% for non-bearing walls; less for load-bearing). Plumbers plan around this.</li>
      <li><strong>Strapping plates:</strong> Code requires steel nail plates over any pipe that passes within 1¼&quot; of a stud face — protects against drywall screws penetrating pipe.</li>
    </ul>
    <p>
      Stacking bathrooms vertically over a single wet wall (master above,
      hall bath below, basement bath at the bottom) cuts plumbing labor and
      material 30–50% compared to spreading bathrooms across the floor plan.
      Architects who skip this end up with plumbers cursing them later.
    </p>

    <h2>The soil stack: what gets sized</h2>
    <p>
      The soil stack is the vertical drain pipe that collects all branches
      and carries waste down to the building drain. It also doubles as the
      stack vent (vent extension to the roof) at the top.
    </p>
    <p>
      Sizing depends on three things:
    </p>
    <ol>
      <li><strong>Total DFU on the stack</strong> — every fixture connected at every floor</li>
      <li><strong>Largest DFU at any single branch interval</strong> — one floor&apos;s worth of fixtures</li>
      <li><strong>Number of branch intervals</strong> — total stories, which affects which capacity column applies</li>
    </ol>
    <p>
      IPC Table 710.1 separates stacks ≤3 stories from stacks &gt;3 stories
      (taller stacks face stricter limits because of accumulated air-pressure
      problems). The{' '}
      <Link href="/wet-wall-stack-calculator">wet wall stack sizing calculator</Link>{' '}
      handles both cases plus the per-branch-interval cap.
    </p>

    <h2>Stack capacity by size (IPC 710.1, simplified)</h2>
    <ul>
      <li><strong>2&quot; stack:</strong> 6 DFU per branch interval, 10 DFU total stack (≤3 stories), 8 (taller)</li>
      <li><strong>3&quot; stack:</strong> 20 per interval, 48 total (≤3 stories), 30 (taller)</li>
      <li><strong>4&quot; stack:</strong> 90 per interval, 240 total (≤3 stories), 180 (taller)</li>
      <li><strong>5&quot; stack:</strong> 200 per interval, 540 / 390</li>
      <li><strong>6&quot; stack:</strong> 350 per interval, 960 / 700</li>
    </ul>
    <p>
      A typical 3-story townhouse with one full bath per floor sums to ~30
      DFU total stack and ~10 DFU per branch interval — comfortable on a
      3&quot; stack. Add a fourth floor or stack a second-bath off the
      master and 4&quot; becomes safer.
    </p>

    <h2>Why both caps matter</h2>
    <p>
      You can fail either limit and need to upsize:
    </p>
    <p>
      <strong>Total stack cap:</strong> The total DFU on the entire stack
      can&apos;t exceed the column for your stack height. A 3&quot; stack
      tops out at 48 DFU even if no single floor pushes the per-branch
      limit.
    </p>
    <p>
      <strong>Per-branch-interval cap:</strong> Even if your total is fine,
      no single branch interval can exceed the per-interval limit. Putting
      both bathrooms of a 4-bath house on one floor (28 DFU connecting at
      one branch interval) exceeds the 3&quot; stack&apos;s 20-DFU
      per-interval cap and forces a 4&quot; stack.
    </p>
    <p>
      Spreading load across multiple branch intervals is what stacks are
      designed for. Concentrating all the load at one floor defeats the
      purpose.
    </p>

    <h2>Stack vents and roof penetrations</h2>
    <p>
      Every soil stack must extend up through the roof to act as a vent.
      The portion above the highest branch is called the stack vent
      (terminology varies — also called vent stack in some references). Key
      rules:
    </p>
    <ul>
      <li>Same diameter as the stack (no reduction except where allowed by IPC 906.7)</li>
      <li>Minimum 3&quot; through the roof in cold climates (frost closure protection)</li>
      <li>Must extend at least 6&quot; above the roof, with no joints inside the attic</li>
      <li>Located at least 4 ft from any vertical surface (chimney, dormer)</li>
      <li>Must clear any window or air intake by 3 ft horizontally or 1 ft above</li>
    </ul>
    <p>
      The roof penetration is sealed with a rubber boot (Oatey or similar)
      or lead flashing. Boots fail at 10–15 years; lead lasts 30+. Check
      and replace boots during any roof work.
    </p>

    <h2>Wet-wall framing considerations</h2>
    <p>
      A 4&quot; PVC stack needs about 4½&quot; of clear cavity (pipe OD plus
      bell at fittings). Standard 2×4 walls are 3½&quot; deep — won&apos;t
      fit. Options:
    </p>
    <ul>
      <li><strong>2×6 wet wall (5½&quot; cavity):</strong> The default. Fits 4&quot; stack with insulation around.</li>
      <li><strong>Furred-out 2×4 wall:</strong> 2×4 framing with 2&quot; of furring strips on the back side to gain depth. Cheaper than 2×6 framing but less room for branch fittings.</li>
      <li><strong>Staggered-stud wall:</strong> Two rows of 2×4 offset, gives 6+ inches of depth and breaks the sound path between rooms (extra benefit for bedroom-side wet walls).</li>
      <li><strong>Plumbing chase:</strong> A small vertical closet (3 ft × 1 ft) instead of a wall. Common in commercial and high-rise residential where stacks are 6&quot;+.</li>
    </ul>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>Undersizing because total DFU looks low.</strong> The per-branch-interval cap can force an upsize even when total looks fine. Calculate both.</li>
      <li><strong>Reducing the stack diameter going up.</strong> IPC prohibits it — the stack must be the largest size it ever needs at the bottom. (Vent extension above the highest branch can sometimes reduce; check 906.7.)</li>
      <li><strong>Using a wet wall as a load-bearing wall.</strong> The notching and boring required for a stack significantly weakens studs. Plumbing walls should be non-bearing or doubled-up if structurally required.</li>
      <li><strong>Forgetting the offset rule.</strong> A horizontal offset in a vertical stack (jog around an obstruction) more than 45° from vertical counts as a horizontal section — must be sized as horizontal branch and re-vented per IPC.</li>
      <li><strong>Stack vent through unconditioned attic.</strong> Cold air condenses inside the vent, drips back down, and freezes during deep cold. Insulate the stack vent inside the attic in cold climates, or use larger diameter.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size stack for a 2-story house with 2 bathrooms?</strong>{' '}
      3&quot; PVC handles ~14 DFU per floor and 28 DFU total — well within
      the 3&quot; stack&apos;s 20 per-interval and 48 total caps. Standard
      residential.
    </p>
    <p>
      <strong>What size stack for a 4-story building?</strong> 4&quot; is
      typical. The &quot;tall stack&quot; column applies (&gt;3 stories), which
      limits 4&quot; to 180 DFU total — still plenty for most multi-family
      residential.
    </p>
    <p>
      <strong>Can the stack reduce in size going up?</strong> No, generally
      not. The drainage stack must be the largest diameter it ever needs at
      the bottom. The vent portion above the highest fixture connection can
      sometimes reduce per IPC 906.7 but not below the size required for
      the vent flow.
    </p>
    <p>
      <strong>How tall does the vent need to extend above the roof?</strong>{' '}
      Minimum 6&quot;. In areas with snow loading, code may require taller
      (12&quot; or more). And it must clear any operable window by 3 ft
      horizontally or 1 ft above.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/wet-wall-stack-calculator" style={{ color: 'var(--hi-vis)' }}>wet wall stack sizing calculator</Link>{' '}
      handles both total DFU and per-branch-interval limits. Pair with the{' '}
      <Link href="/vent-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>vent pipe sizing calculator</Link>{' '}
      for the stack vent extension.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'wet-wall-stack-sizing',
  title: 'Wet Wall & Soil Stack Sizing for Multi-Story Homes',
  metaTitle: 'Wet Wall Stack Sizing — Soil Stack DFU & Framing Guide | ProjectCalc',
  metaDesc: 'How soil stacks get sized in wet walls. IPC 710.1 stack columns, per-branch-interval limits, framing requirements, stack vent rules, and common residential configurations.',
  excerpt: 'In multi-story houses, almost all plumbing runs vertically through one wet wall. Get the stack size wrong and you have a structural problem dressed up as a plumbing problem.',
  date: '2026-04-27',
  readTime: 8,
  category: 'construction',
  relatedCalcs: ['wet-wall-stack-calculator', 'drain-pipe-size-calculator', 'vent-pipe-size-calculator', 'building-drain-size-calculator'],
  Body,
};

export default post;
