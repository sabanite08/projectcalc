import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Stairs are the unforgiving part of framing. A 1/4-inch error
      compounded across fourteen risers becomes a 3-1/2 inch
      problem at the top, and code violations on rise or run get
      flagged on every inspection. This guide walks the math, the
      IRC limits, and the order of cuts on a stringer.
    </p>

    <h2>The four numbers you need first</h2>
    <p>
      Before you touch a 2x12, you need: total rise (finished
      floor to finished floor), unit riser height, unit tread
      depth (the run), and the diagonal stringer length. Total
      rise is the only one you measure; the other three come from
      it.
    </p>
    <ul>
      <li><strong>Pick a riser count.</strong> Divide total rise by 7
        to estimate. A 9-ft (108") rise wants ~14 risers
        (108 ÷ 14 = 7.71" — under the 7-3/4" code max).</li>
      <li><strong>Set the run.</strong> 10" is the IRC minimum.
        10-1/2" or 11" steps feel better and give more room for
        nosed treads.</li>
      <li><strong>Solve the diagonal.</strong> Total run = (risers
        − 1) × unit run. Stringer length = √(rise² + run²).</li>
    </ul>
    <p>
      The{' '}
      <Link href="/stair-stringer-calculator">stair stringer calculator</Link>{' '}
      runs all four steps and flags rise/run combos that fail IRC.
    </p>

    <h2>IRC R311.7 — what passes inspection</h2>
    <ul>
      <li>Maximum riser height: <strong>7-3/4"</strong></li>
      <li>Minimum tread depth: <strong>10"</strong> (nose to nose)</li>
      <li>Riser variation in a flight: max <strong>3/8"</strong> between
        smallest and largest</li>
      <li>Tread variation: same 3/8" rule</li>
      <li>Headroom: <strong>6 ft 8 in</strong> minimum from nose
        diagonal</li>
      <li>Nosing projection: 3/4" minimum, 1-1/4" maximum</li>
    </ul>
    <p>
      The "rule of comfort" — 2R + T between 24 and 25 inches —
      is not code, but it predicts which stairs feel right
      underfoot. A 7" riser with an 11" tread hits 25". A 7-3/4"
      riser with a 10" tread is legal but feels steep at 25.5".
    </p>

    <h2>Laying out the stringer</h2>
    <p>
      Mark the rise and run on the long edge of a 2x12 with a
      framing square. Most framers attach stair gauges (small
      brass clamps) at the rise and run dimensions on the
      square, then walk the square down the board, marking each
      step. Walk it the same number of times as treads, because
      the bottom of the stringer gets a rise-thickness cut at the
      shoe and the top gets a run-thickness cut at the upper
      framing.
    </p>
    <p>
      Subtract the tread thickness (typically 1") from the bottom
      riser cut so all your finished risers land on the same
      height. This is the "drop" — the most-missed cut on a DIY
      stringer.
    </p>

    <h2>Stringer stock and throat</h2>
    <p>
      Always cut from a 2x12. After cutting the rise and run
      notches, the remaining "throat" of wood must be at least
      3-1/2" wide (some inspectors require 5"). A 2x10 leaves
      barely 2-3/4" of throat on a typical stair — fragile, and
      will fail many inspections. The calculator suggests a stock
      length one foot longer than the diagonal to account for
      seat cuts and to leave clean ends.
    </p>
    <p>
      Use 3 stringers under standard 36" stairs (left, middle,
      right). Add one stringer per 16" of additional width for
      stair widths over 36".
    </p>

    <h2>Why you don't eyeball the math</h2>
    <p>
      The classic homeowner mistake: 13 risers across a 96" total
      rise gives 7.38" per rise, fine. But if total rise is
      actually 99" (an extra ¾" of subfloor at the top), 13
      risers becomes 7.62" — still legal, but it changes every
      mark on the stringer. Always re-measure total rise after
      subfloor and finish floor are dry-fit, before cutting.
    </p>

    <h2>Common layout errors</h2>
    <p>
      <strong>Forgetting the drop.</strong> If you cut all 14
      rises at 7.71" and forget to subtract the 1" tread thickness
      from the bottom, your first step ends up 1" taller than the
      others — instant code fail.
    </p>
    <p>
      <strong>Wrong stringer count.</strong> Two stringers under a
      36" residential stair will let the treads sag and crack.
      Three minimum, more for wider stairs.
    </p>
    <p>
      <strong>Skipping the headroom check.</strong> Cathedral
      stairs into basements often violate the 6'8" headroom rule
      because the basement ceiling beam is too low. Catch this
      before you frame the rough opening.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What is the maximum stair rise per code?</strong> 7-3/4"
      under IRC R311.7.5 in most jurisdictions. Some local codes
      allow 8" in non-residential or remodel work — check
      locally.
    </p>
    <p>
      <strong>Can I use 2x10 stringers?</strong> Sometimes, but
      most inspectors prefer 2x12 because the throat thickness is
      stronger and meets minimum requirements with margin.
    </p>
    <p>
      <strong>How wide should residential stairs be?</strong> 36"
      minimum clear width above the handrail, per IRC R311.7.1.
      Many builders frame at 38–40" rough opening to leave room
      for finish work.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Stair stringers are a
      structural element. The numbers in the{' '}
      <Link href="/stair-stringer-calculator" style={{ color: 'var(--hi-vis)' }}>stair stringer calculator</Link>{' '}
      are for planning; before cutting, verify rise, run, and
      headroom with your local building inspector or licensed
      contractor. ProjectCalc is not responsible for code
      violations or installation defects.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'stair-stringer-layout-guide',
  title: 'Stair Stringer Layout — Rise, Run, and Cut Order',
  metaTitle: 'Stair Stringer Layout Guide — IRC Rise & Run | ProjectCalc',
  metaDesc: 'Lay out a stair stringer the right way. IRC code limits on rise and run, the diagonal math, the drop cut, and the mistakes that fail inspection.',
  excerpt: 'Stairs are the unforgiving part of framing. A 1/4-inch error across 14 risers becomes 3-1/2 inches of trouble at the top. Here is the math, the IRC limits, and the cut order that passes inspection.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['stair-stringer-calculator', 'lumber-cut-calculator', 'lumber-calculator'],
  Body,
};

export default post;
