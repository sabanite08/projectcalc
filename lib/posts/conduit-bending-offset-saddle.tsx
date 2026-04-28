import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Conduit bending is the trade skill that separates the
      apprentice from the journeyman in three lessons: take-up,
      offset, and saddle. The math behind each is small — what
      takes time is the muscle memory of where to put the foot
      and how to read the bender. Here is the math part, so the
      muscle part starts from a correct mark.
    </p>

    <h2>Offset — two bends, opposite directions</h2>
    <p>
      An offset steps the conduit around a side obstacle: a
      junction box flush to a wall and the conduit needs to come
      out behind a stud, or a row of conduits going from a panel
      down to a tray.
    </p>
    <p>
      Two pieces of math: the distance between the bends, and the
      shrink.
    </p>

    <h3>Distance between bends</h3>
    <p style={{ padding: 12, background: 'rgba(255,212,0,0.05)', borderLeft: '2px solid #555', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>
      distance = rise × multiplier
    </p>
    <p>
      Multipliers (printed on every Klein and Greenlee bender
      handle):
    </p>
    <ul>
      <li>22.5° → 2.6</li>
      <li>30° → 2.0 (the easy one — twice the rise)</li>
      <li>45° → 1.4</li>
      <li>60° → 1.15</li>
    </ul>
    <p>
      A 4-inch offset at 30° = 8 inches between marks. Mark, bend,
      slide, bend in the opposite direction at the second mark.
      Done.
    </p>

    <h3>Shrink</h3>
    <p>
      The conduit gets shorter overall by a small amount per inch
      of rise — because the run is not a straight line anymore.
    </p>
    <ul>
      <li>22.5° → 3⁄16" per inch of rise</li>
      <li>30° → 1⁄4" per inch of rise</li>
      <li>45° → 3⁄8" per inch of rise</li>
      <li>60° → 1⁄2" per inch of rise</li>
    </ul>
    <p>
      A 4-inch offset at 30° loses 1 inch overall. If the box is
      96 inches from the start of the run, mark the first bend at
      97 inches — bending shortens it back to 96.
    </p>

    <h2>3-bend saddle — going over an obstacle</h2>
    <p>
      A saddle lifts the run over an obstacle in the middle — most
      commonly another conduit crossing perpendicular. Three bends:
      a center bend at twice the side angle, two side bends at the
      half angle.
    </p>
    <p>
      Common pairings:
    </p>
    <ul>
      <li>22.5° / 45° / 22.5° saddle — gentle, used on long runs</li>
      <li>30° / 60° / 30° saddle — tight, used near panels</li>
    </ul>
    <p>
      Layout for a 30° / 60° saddle:
    </p>
    <ol>
      <li>Mark the center of the obstacle on the conduit</li>
      <li>Bend a 60° at that mark</li>
      <li>Measure <em>rise × 2.0</em> from the center mark in each
        direction (use the 30° multiplier even though center is 60°)</li>
      <li>Bend 30° at each side mark, opposite the center bend</li>
    </ol>
    <p>
      The{' '}
      <Link href="/conduit-bending-calculator">conduit bending
      calculator</Link> handles both layouts and prints the marks.
    </p>

    <h2>Take-up vs deduct</h2>
    <p>
      "Take-up" is the distance from the back of the bend to where
      the conduit was straight, on a 90°. "Deduct" is the same idea
      from a different reference point. Both are bender-specific —
      check the chart on your bender:
    </p>
    <ul>
      <li>½" EMT, hand bender → 5" deduct</li>
      <li>¾" EMT, hand bender → 6" deduct</li>
      <li>1" EMT, hand bender → 8" deduct</li>
      <li>1¼" EMT, mechanical → 11" deduct</li>
    </ul>
    <p>
      For a stub-up (a 90° from a known horizontal length), measure
      the desired stub height, subtract the deduct, mark the bend
      there. The calculator does not handle 90° stubs — they are a
      different formula.
    </p>

    <h2>Common bending mistakes</h2>
    <p>
      <strong>Forgetting which side of the mark.</strong> The
      bender hooks to one side of the mark depending on offset
      direction. Mismark by 1⁄8" and the second bend lands wrong.
      Pencil an arrow on the conduit before bending.
    </p>
    <p>
      <strong>Bending one offset on each end of a run before
      verifying.</strong> Always dry-fit the first bend, confirm
      direction and rise, then make the second. Stripped,
      cut-to-length conduit with two wrong offsets goes in the
      scrap pile.
    </p>
    <p>
      <strong>Overbending past 30°.</strong> Each degree past 30
      adds resistance to the wire pull. Three 90° elbows + a 30°
      offset hits the NEC 358.26 / 344.26 cap of 360° between pull
      points — add a junction box or pull box before that.
    </p>
    <p>
      <strong>Mixing degree references.</strong> Some chart
      conventions print the side-bend angle (30° saddle = 30°
      sides + 60° center); some print the center. Read the
      footnotes on your bender chart.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/conduit-bending-calculator" style={{ color: 'var(--hi-vis)' }}>conduit bending calculator</Link>{' '}
      uses the standard multipliers and shrink table for offsets
      and 3-bend saddles. Verify against your specific bender's
      printed deduct and shoe-radius chart, and confirm your final
      layout meets NEC 358.26 / 344.26 bend-count limits between
      pull points.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'conduit-bending-offset-saddle',
  title: 'Conduit Bending — Offset and 3-Bend Saddle Math',
  metaTitle: 'Conduit Bending — Offset & Saddle Multipliers | ProjectCalc',
  metaDesc: 'Conduit bending math: 22.5°/30°/45° offset multipliers, shrink per inch of rise, 3-bend saddle layout, take-up and deduct on hand benders.',
  excerpt: 'The offset, the 3-bend saddle, and the shrink that makes a 96-inch run come back exactly 96 inches. Here is the math every bender handle is printed with.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['conduit-bending-calculator', 'conduit-fill-calculator'],
  Body,
};

export default post;
