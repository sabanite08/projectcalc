import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Conduit fill is the rule that keeps a bundle of wires from
      becoming a heat-trapping bird's nest inside an EMT run.
      The NEC limits aren't about jamming wires — they're about
      heat dissipation and the ability to pull replacement
      conductors without ripping a wall apart. Here is the
      practical version.
    </p>

    <h2>The 53 / 31 / 40 rule</h2>
    <p>
      Per NEC Chapter 9 Table 1, the maximum percent of conduit
      cross-section a bundle of wires can occupy:
    </p>
    <ul>
      <li><strong>53%</strong> for a single conductor</li>
      <li><strong>31%</strong> for exactly 2 conductors</li>
      <li><strong>40%</strong> for 3 or more conductors</li>
    </ul>
    <p>
      Why the dip in the middle? Two wires don't pull-string the
      way three or more do — they bind on each other in the
      conduit. The 31% limit gives them room to slide. Three or
      more wires shuffle past each other better, so 40% is
      allowed.
    </p>
    <p>
      The{' '}
      <Link href="/conduit-fill-calculator">conduit fill
      calculator</Link>{' '}auto-applies the right limit based on
      conductor count and gives you a pass/fail.
    </p>

    <h2>Wire areas come from Table 5, conduit areas from Table 4</h2>
    <p>
      Cross-sectional areas are listed in NEC Chapter 9. The
      common THHN/THWN-2 sizes:
    </p>
    <ul>
      <li>14 AWG: 0.0097 in²</li>
      <li>12 AWG: 0.0133 in²</li>
      <li>10 AWG: 0.0211 in²</li>
      <li>8 AWG: 0.0366 in²</li>
      <li>6 AWG: 0.0507 in²</li>
    </ul>
    <p>
      EMT (Electrical Metallic Tubing) inside areas:
    </p>
    <ul>
      <li>½" EMT: 0.304 in²</li>
      <li>¾" EMT: 0.533 in²</li>
      <li>1" EMT: 0.864 in²</li>
      <li>1¼" EMT: 1.496 in²</li>
      <li>1½" EMT: 2.036 in²</li>
      <li>2" EMT: 3.356 in²</li>
    </ul>

    <h2>Heat is the real reason for the rule</h2>
    <p>
      A conduit packed with current-carrying wires is essentially
      an insulated heating element. The 40% fill limit is the
      threshold above which mutual heating between conductors
      starts to matter — and once it matters, NEC 310.15(C)(1)
      requires you to derate the ampacity of every conductor in
      the bundle:
    </p>
    <ul>
      <li>4-6 conductors: 80% ampacity</li>
      <li>7-9 conductors: 70%</li>
      <li>10-20 conductors: 50%</li>
      <li>21-30: 45%</li>
    </ul>
    <p>
      That's why most installs that look like they should fit at
      40% really need to upsize the conduit anyway — you'd
      otherwise lose so much ampacity to derating that the wire
      isn't useful.
    </p>

    <h2>Box fill is a separate calculation</h2>
    <p>
      Junction-box fill follows NEC 314.16, not the conduit
      table. Each conductor entering or passing through a box
      counts toward a volume cap based on AWG size. A 4×4 metal
      box has a published cubic-inch capacity, and each
      conductor consumes a fraction of it. Don't confuse this
      with conduit fill — they're different calculations and you
      have to pass both.
    </p>

    <h2>Common errors</h2>
    <p>
      <strong>Forgetting the equipment grounding conductor.</strong>
      {' '}EGC counts toward fill at its own AWG size, even
      though it's not current-carrying. A 3-wire branch (hot,
      neutral, ground) counts as 3 conductors at the 40% limit.
    </p>
    <p>
      <strong>Using nominal conduit size as inside area.</strong>
      {' '}Nominal sizes are the trade names — they don't equal
      actual inside diameters. ¾" EMT has a 0.824" inside
      diameter, not 0.75". Always pull from Table 4.
    </p>
    <p>
      <strong>Ignoring future-proofing.</strong> Pulling tight at
      39% fill today guarantees you'll be ripping the wall apart
      to add one circuit later. Best practice is 30-35% fill at
      design time, leaving headroom for future adds.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>How many 12 AWG wires fit in 3/4" EMT?</strong>{' '}
      40% fill of 0.533 in² = 0.213 in² available. At 0.0133 in²
      per conductor: 16 wires. NEC also caps at the derating
      factor — 16 wires would derate to 50% ampacity.
    </p>
    <p>
      <strong>What about MC cable in a wireway?</strong> MC and
      AC cable have published whole-cable cross-sections; you
      use those values, not the individual conductor areas. Same
      40% rule applies.
    </p>
    <p>
      <strong>Does the rule change for PVC conduit?</strong>{' '}
      Same percentages, different interior areas. Schedule 40
      and 80 PVC have slightly smaller IDs than EMT of the same
      trade size — check NEC Table 4 for the type you're using.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/conduit-fill-calculator" style={{ color: 'var(--hi-vis)' }}>conduit fill calculator</Link>{' '}
      uses NEC Chapter 9 Table 4 (EMT) and Table 5 (THHN/THWN-2).
      For other insulation types or non-EMT conduit, pull the
      correct table values. Verify ampacity derating with a
      licensed electrician.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'conduit-fill-nec',
  title: 'Conduit Fill — NEC 53 / 31 / 40',
  metaTitle: 'Conduit Fill Calculator — NEC EMT Math | ProjectCalc',
  metaDesc: 'NEC conduit fill rules: 53% one wire, 31% two, 40% three or more. EMT inside areas, THHN cross-sections, derating, common errors.',
  excerpt: 'Conduit fill is about heat dissipation and pull-through, not just packing wires. Here is the NEC 53/31/40 rule, the EMT and THHN tables, and why you should design at 30-35 percent.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['conduit-fill-calculator', 'voltage-drop-calculator'],
  Body,
};

export default post;
