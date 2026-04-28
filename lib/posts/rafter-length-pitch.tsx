import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Rafter length math is a 30-second job once you know the
      pitch factor — and a confusing mess if you don&apos;t. A
      6/12-pitch rafter on a 24-ft-wide building is not 12 feet
      long. It is 13.4 feet, plus an overhang. Here is where the
      number comes from and how to lay out the cuts.
    </p>

    <h2>Pitch is rise per 12 inches of run</h2>
    <p>
      A 6/12 pitch means the roof rises 6 inches for every 12
      inches of horizontal run. 4/12 is a low slope; 6/12 is the
      conventional residential pitch; 9/12 and steeper require
      roof jacks or scaffolding to walk safely; 12/12 is a 45°
      cathedral pitch.
    </p>

    <h2>Run, rise, and the diagonal</h2>
    <p>
      For a gable roof, the run of one rafter is half the
      building width. A 24-ft-wide building gives 12 ft of run
      per rafter. The rise at the ridge is run × pitch/12 — for
      6/12, that is 12 × 0.5 = 6 ft of rise.
    </p>
    <p>
      The diagonal length, ridge to wall plate, is the
      Pythagorean √(run² + rise²). Or, more practically, you
      multiply run by the <em>pitch factor</em>:
    </p>
    <ul>
      <li>3/12 → factor 1.031</li>
      <li>4/12 → factor 1.054</li>
      <li>6/12 → factor 1.118</li>
      <li>8/12 → factor 1.202</li>
      <li>9/12 → factor 1.250</li>
      <li>12/12 → factor 1.414 (45°)</li>
    </ul>
    <p>
      The factor comes from √(pitch² + 144) ÷ 12. The{' '}
      <Link href="/rafter-length-calculator">rafter length calculator</Link>{' '}
      runs all this and includes the eave overhang along the
      slope.
    </p>

    <h2>Don&apos;t forget the overhang</h2>
    <p>
      The eave overhang is the horizontal projection of the
      rafter past the wall plate. 12 inches is conventional;
      18–24 inches gives more weather protection. The overhang
      is also multiplied by the pitch factor to get its along-
      slope length, because the rafter slopes down past the wall
      at the same angle.
    </p>
    <p>
      For a 6/12 pitch with a 12-inch overhang, the overhang
      contributes 12 × 1.118 = 13.4 inches of additional rafter
      length along the slope. Add that to the run-to-ridge slope
      length to get total cut length.
    </p>

    <h2>The ridge correction</h2>
    <p>
      At the upper end of the rafter, you cut a plumb cut that
      lands flush against the ridge board. Most ridges are 2x
      stock (1-1/2" thick), so you subtract half the ridge
      thickness — 3/4" — from the horizontal run before
      multiplying by the pitch factor. For a 6/12 pitch, that is
      0.84" off the slope length. Small, but real for a precise
      cut. The calculator does not include this offset; subtract
      it manually before final cut.
    </p>

    <h2>The bird&apos;s-mouth seat cut</h2>
    <p>
      The rafter sits on the wall plate via a bird&apos;s-mouth
      cut — a level seat cut where the rafter rests on top of the
      plate, plus a plumb cut that runs flat against the outside
      face of the wall. The seat cut depth must leave at least
      enough wood above the plate for the rafter to actually
      transfer load (rule of thumb: at least 2/3 of the rafter
      depth remains above the seat). For a 2x10 rafter, that is
      ~6" above the seat cut.
    </p>

    <h2>Plumb-cut angle</h2>
    <p>
      The plumb-cut angle (used at both the ridge and the
      bird&apos;s-mouth) is arctangent of pitch ÷ 12. A 6/12
      rafter cuts at 26.6° off vertical; a 9/12 rafter cuts at
      36.9°. Set your circular saw or use a Speed Square at the
      pitch number printed on it for the matching plumb cut.
    </p>

    <h2>Hip and valley rafters</h2>
    <p>
      Hip and valley rafters run on a 17:12 effective slope (not
      12:12 like commons), because they travel diagonally across
      a 12×12 horizontal grid. A 6/12 hip rafter has a pitch
      factor of √(36 + 17²) ÷ 17 ≈ 1.10, applied to a longer hip
      run = √(run² + run²) = run × √2 = run × 1.414. Hip rafter
      length math is a separate calculation; this calculator
      handles common rafters only.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Using run instead of slope length.</strong> A
      24-ft-wide gable roof needs 13.4-ft rafters (per 6/12
      pitch), not 12-ft. Running with 12-ft stock leaves you
      short at the eave. Always buy stock 1–2 ft longer than the
      calculated slope length.
    </p>
    <p>
      <strong>Measuring overhang horizontally instead of along
      the slope.</strong> A 12-inch horizontal overhang is 13.4
      inches of rafter material at 6/12 pitch. Mark the cut
      along the slope, not horizontally.
    </p>
    <p>
      <strong>Skipping the ridge correction.</strong> Half the
      ridge board (3/4" for 2x stock) needs to come out of the
      run. Forget it and your rafters jam against each other at
      the peak.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What is the pitch factor for a 6/12 roof?</strong> 1.118.
      Multiply run by this to get rafter slope length.
    </p>
    <p>
      <strong>How long should the eave overhang be?</strong> 12"
      is the most common; 18–24" gives more protection from rain
      and sun, but adds load and material cost.
    </p>
    <p>
      <strong>Does this calculator size rafters?</strong> No — it
      gives length only. Rafter size depends on snow load,
      species/grade, spacing, and ceiling-joist tie. AWC and IRC
      R802.5 span tables are the right reference.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/rafter-length-calculator" style={{ color: 'var(--hi-vis)' }}>rafter length calculator</Link>{' '}
      returns cut length, not structural rafter size. Verify
      sizing against engineered roof plans, IRC R802.5 span
      tables, or a licensed engineer for snow-region or
      cathedral-ceiling work.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'rafter-length-pitch-and-run',
  title: 'Rafter Length from Pitch and Run',
  metaTitle: 'Rafter Length Calculator Guide — Pitch & Run | ProjectCalc',
  metaDesc: 'Rafter length math from roof pitch and run. Pitch factor table, ridge offset, bird\'s-mouth seat cut, and the common errors that leave rafters short.',
  excerpt: 'A 6/12 rafter on a 24-ft building is not 12 feet long — it is 13.4 feet plus the overhang. Here is where the pitch factor comes from and how to lay out the cuts.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['rafter-length-calculator', 'roofing-calculator', 'lumber-calculator'],
  Body,
};

export default post;
