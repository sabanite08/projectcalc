import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The panel fits the wall. Does the wall pass? On a service
      upgrade or a rough-in, the space <em>around</em> the panel
      fails inspection more often than the wiring inside it. NEC
      110.26 governs that space, and it is dimensional — the
      inspector shows up with a tape measure, not an opinion.
      Here is what has to be clear, and the things that get
      red-tagged.
    </p>

    <h2>The working space: three dimensions</h2>
    <p>
      NEC 110.26(A) sets a required working space in front of
      equipment likely to be serviced while energized — which is
      exactly what a panelboard is. It has three measurements, and
      all three have to be satisfied at once.
    </p>
    <p>
      <strong>Depth — 3 feet in front.</strong> A residential
      120/240 V service is 120 V to ground, which puts you in the
      "0 to 150 volts" row of Table 110.26(A)(1). That row is{' '}
      <strong>3 ft for all three conditions</strong> — so for a house
      panel the answer is simply <strong>36 inches of clear depth</strong>{' '}
      in front of the panel, measured from the face of the deadfront
      out into the room. (The "conditions" that increase the depth
      only kick in above 150 V to ground — commercial/industrial
      gear, not a dwelling.)
    </p>
    <p>
      <strong>Width — 30 inches.</strong> NEC 110.26(A)(2): at least
      30 in wide, or the width of the panel if it is wider than 30 in,
      and the deadfront or door has to be able to swing a full{' '}
      <strong>90°</strong>. The 30 in does not have to be centered on
      the panel, but it does have to be a clear 30.
    </p>
    <p>
      <strong>Headroom — 6 ft 6 in.</strong> NEC 110.26(A)(3): the
      working space has to be at least 6 ft 6 in high (or the height
      of the equipment, if that is taller).
    </p>
    <p>
      Miss any one of the three and the space fails, even if the
      other two are generous. The most common failure is depth: a
      panel in a narrow utility closet with the water heater or
      furnace eating into that 36 inches.
    </p>

    <h2>Where a panel is not allowed to go</h2>
    <p>
      This is about location and access, not load. The breakers have
      to be <strong>readily accessible</strong> — reachable without
      moving obstacles, standing on a chair, or using a ladder — and
      NEC 240.24(A) caps the height: the center of the grip of the
      highest breaker's operating handle can't sit more than{' '}
      <strong>6 ft 7 in</strong> above the floor or working platform.
      Panels set too high for a finished-basement ceiling are a
      routine correction.
    </p>
    <p>
      They also can't go in the wrong room. In a dwelling, the panel
      can't be in a <strong>bathroom</strong> (NEC 240.24(E)), and it
      can't be in the vicinity of easily ignitible material such as a{' '}
      <strong>clothes closet</strong> (NEC 240.24(D)). Both are common
      finds on older-home remodels where the panel was "always there."
    </p>

    <h2>Dedicated equipment space — the volume above the panel</h2>
    <p>
      This is the rule people confuse with working space, and it is
      different. NEC 110.26(E) reserves the space <em>above</em> the
      panel — a footprint equal to the width and depth of the
      equipment, running from the floor up to <strong>6 ft above the
      panel</strong>, or to the structural ceiling if that is lower.
      Nothing foreign is allowed in that zone:
    </p>
    <ul>
      <li>No plumbing, drains, or gas piping</li>
      <li>No HVAC ducts</li>
      <li>No leak-protection systems or other equipment unrelated to
        the electrical installation</li>
    </ul>
    <p>
      Working space (in front) is about a person being able to stand
      and work. Dedicated space (above) is about keeping a leaking
      pipe or a duct off the top of the panel. Inspectors check both,
      and a condensate line or sprinkler pipe run across the top of a
      panel is an easy catch.
    </p>

    <h2>The circuit directory</h2>
    <p>
      NEC 408.4(A) requires every circuit to be legibly identified as
      to its clear, evident, and specific purpose, on a directory
      located on the face or inside of the panel door — and spare
      positions with unused breakers have to be labeled as spares,
      too. "Lights," "plugs," and blanks don't pass. It is the
      cheapest thing on this list to fix and the easiest to forget,
      and it will hold your final.
    </p>

    <h2>What the inspector actually checks</h2>
    <p>
      At rough-in and again at final, this is the walk:
    </p>
    <ul>
      <li>Tape the depth — a clear 36 in in front, with the door
        open and whatever ends up opposite the panel accounted for.</li>
      <li>Swing the door (and any adjacent door) a full 90° — does it
        hit the water heater, a shelf, the opposite wall?</li>
      <li>Look up — anything crossing the 6 ft dedicated space above.</li>
      <li>Is the space being used for storage? A panel behind stacked
        boxes isn't "readily accessible."</li>
      <li>Directory filled in and legible; breakers match the legend.</li>
      <li>Highest handle within 6 ft 7 in of the floor.</li>
    </ul>

    <h2>Common red-tag reasons</h2>
    <p>
      <strong>A door that can't open 90°.</strong> A panel tucked
      behind a swinging door or into a corner where the deadfront
      can't fully open fails the width rule.
    </p>
    <p>
      <strong>Panel in a clothes closet or bathroom.</strong> Still
      one of the most common corrections on older-home remodels.
    </p>
    <p>
      <strong>The water heater or furnace in the working space.</strong>{' '}
      Utility closets get tight; the appliance intruding on the 36 in
      is a depth failure even if the panel itself is fine.
    </p>
    <p>
      <strong>Storage or finish built over the panel.</strong> A
      soffit, cabinet, or shelf intruding on the dedicated space above.
    </p>
    <p>
      <strong>Blank or vague directory.</strong> Cheap to fix, easy to
      forget, and it will hold your final.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Verify your edition.</strong> These figures are the
      residential (0–150 V to ground) case and are unchanged across the
      2017, 2020, and 2023 NEC — but the exact edition your jurisdiction
      has <strong>adopted</strong>, plus any local amendments, always
      governs. Confirm both before you frame the wall. Clearance is
      separate from capacity: size the service itself with the{' '}
      <Link href="/panel-load-calculator" style={{ color: 'var(--hi-vis)' }}>panel load calculator</Link>{' '}
      (NEC 220), then make sure the box has room to live where you put it.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'panel-clearance-nec-110-26',
  title: 'Electrical Panel Clearance — NEC 110.26 Working Space',
  metaTitle: 'Panel Working Clearance — NEC 110.26 Rules | ProjectCalc',
  metaDesc: 'How much clearance is required around an electrical panel per NEC 110.26: 36 in working depth, 30 in width, 6 ft 6 in headroom, the dedicated space above, and the mistakes that fail rough-in.',
  excerpt: 'The space around the panel fails more inspections than the wiring inside it. NEC 110.26 working space is dimensional — 36 in deep, 30 in wide, and here is what gets red-tagged.',
  date: '2026-07-18',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['panel-load-calculator', 'circuit-breaker-size-calculator', 'wire-gauge-calculator'],
  Body,
};

export default post;
