import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Door and window headers are the small built-up beams over
      framed openings. Get them too small and the wall sags into
      the opening; get them too big and you waste money and
      framing space. IRC R602.7 has a simplified table for
      typical residential cases — here is the plain-English
      version, with the disclaimers that have to come with it.
    </p>

    <h2>What a header carries</h2>
    <p>
      A header transfers load from above the opening — the floor,
      ceiling, or roof — sideways to the trimmer (jack) studs at
      either end of the opening, which then carry the load down
      to the foundation. The wider the opening, the heavier the
      load over it, and the bigger the header.
    </p>
    <p>
      Three things determine the header size:
    </p>
    <ul>
      <li><strong>Opening width.</strong> Rough opening, not
        finish opening.</li>
      <li><strong>What is above the wall.</strong> Roof only,
        roof + 1 floor, or roof + 2 floors.</li>
      <li><strong>Whether the wall is bearing.</strong> Non-
        bearing (parallel to joists) takes a token header;
        bearing walls take real headers.</li>
    </ul>

    <h2>Simplified IRC R602.7 quick-pick</h2>
    <p>
      For exterior bearing walls in a 28-ft-wide or smaller
      building, ground snow ≤ 30 psf, #2 SPF or better:
    </p>

    <p><strong>Roof + ceiling only (no floors above):</strong></p>
    <ul>
      <li>Up to 3 ft → (2) 2x4</li>
      <li>Up to 5 ft → (2) 2x6</li>
      <li>Up to 7 ft → (2) 2x8</li>
      <li>Up to 8 ft → (2) 2x10</li>
      <li>Up to 10 ft → (3) 2x10</li>
      <li>Up to 12 ft → (3) 2x12</li>
    </ul>

    <p><strong>One floor + roof above:</strong></p>
    <ul>
      <li>Up to 3 ft → (2) 2x6</li>
      <li>Up to 5 ft → (2) 2x8</li>
      <li>Up to 7 ft → (2) 2x10</li>
      <li>Up to 8 ft → (3) 2x10</li>
      <li>Up to 10 ft → (3) 2x12</li>
      <li>Beyond 10 ft → engineer-specified LVL</li>
    </ul>

    <p><strong>Two floors + roof above:</strong></p>
    <ul>
      <li>Up to 3 ft → (2) 2x8</li>
      <li>Up to 5 ft → (2) 2x10</li>
      <li>Up to 7 ft → (3) 2x10</li>
      <li>Up to 8 ft → (3) 2x12</li>
      <li>Beyond 8 ft → engineer-specified LVL</li>
    </ul>

    <p><strong>Non-bearing (interior partition):</strong></p>
    <ul>
      <li>Up to 4 ft → (2) 2x4</li>
      <li>Up to 8 ft → (2) 2x6</li>
      <li>Wider → (2) 2x8 minimum</li>
    </ul>

    <p>
      The{' '}
      <Link href="/header-size-calculator">header size calculator</Link>{' '}
      walks the table for you and reports jack stud count too.
    </p>

    <h2>Building up the header</h2>
    <p>
      Two-ply headers sandwich a strip of 1/2" plywood (matching
      the wall stud width of 3-1/2") between the two 2x members,
      so the finished header is 3-1/2" wide and flush with the
      wall framing. Three-ply headers use two strips of 1/2"
      plywood. Nail the assembly together with 16d common at
      12" o.c. staggered, top and bottom.
    </p>
    <p>
      For 2x6 walls, you can stack two 2x members and use a
      flat 2x to fill the cripple space, or use engineered LVL
      sized to fit the wall depth.
    </p>

    <h2>Jack and king studs</h2>
    <p>
      The header bears on jack studs (also called trimmers) at
      each end. King studs run full height alongside each jack
      and tie the assembly into the wall above and below the
      opening. Quick rules:
    </p>
    <ul>
      <li>Up to 4 ft → 1 jack each side, 1 king each side</li>
      <li>4 to 8 ft → 2 jacks each side, 1 king each side</li>
      <li>Over 8 ft → 3 jacks each side, 1 king each side; or
        engineered post + plate</li>
    </ul>

    <h2>When to skip the table and call an engineer</h2>
    <ul>
      <li>Opening over 12 ft (or over 8 ft with two stories
        above)</li>
      <li>Heavy snow regions (ground snow over 50 psf)</li>
      <li>Buildings wider than 28 ft</li>
      <li>Garage door headers — almost always engineered LVL</li>
      <li>Anywhere a point load lands directly on the header</li>
      <li>Custom homes where the architect specs the header</li>
    </ul>
    <p>
      LVL (laminated veneer lumber) handles the loads where
      built-up dimensional lumber runs out of capacity. A 1-3/4"
      x 9-1/4" LVL spans much farther than a (3) 2x10 in the
      same opening.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting the plywood spacer.</strong> A built-up
      header without the 1/2" plywood between plies is only 3"
      wide and sits inside a 3-1/2" wall — drywall and trim
      pinch around it.
    </p>
    <p>
      <strong>Crowning wrong.</strong> Each ply has a slight bow
      (the &quot;crown&quot;). Always orient all plies crown-up,
      so the header pre-stresses against the load instead of with
      it.
    </p>
    <p>
      <strong>Not enough jacks.</strong> Bearing failure under a
      header almost always shows up as one jack stud splitting
      under the bottom plate. Wide openings need multiple jacks
      per side.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size header for a 36-inch door?</strong> A
      (2) 2x6 with 1 jack and 1 king each side is plenty for a
      bearing or non-bearing wall. Many builders use (2) 2x8 or
      (2) 2x10 just to keep stock counts simple.
    </p>
    <p>
      <strong>Can I use a single 2x as a header?</strong> Only on
      non-bearing walls under 4 ft, and even then most builders
      double-up out of habit. Bearing-wall headers are always
      built up.
    </p>
    <p>
      <strong>When do I need an LVL?</strong> Anytime an opening
      exceeds the simplified table, two stories sit above a wide
      opening, or the engineer specs one. Garage door headers
      are almost always LVL.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/header-size-calculator" style={{ color: 'var(--hi-vis)' }}>header size calculator</Link>{' '}
      uses a simplified read of IRC R602.7. Real header sizing
      depends on snow load, building width, lumber grade, and
      stacked loads. Verify with a licensed structural engineer
      or your building inspector before framing.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'header-size-quickpick',
  title: 'Door &amp; Window Header Sizes — IRC Quick-Pick',
  metaTitle: 'Header Size Quick-Pick — Doors and Windows | ProjectCalc',
  metaDesc: 'Door and window header sizes from a simplified IRC R602.7 table. Built-up header construction, jack stud count, and when to switch to engineered LVL.',
  excerpt: 'Headers are the small built-up beams over framed openings. Too small and the wall sags. Too big and you waste money. Here is the simplified IRC R602.7 quick-pick for typical residential framing.',
  date: '2026-04-27',
  readTime: 6,
  category: 'construction',
  relatedCalcs: ['header-size-calculator', 'beam-span-calculator', 'lumber-calculator'],
  Body,
};

export default post;
