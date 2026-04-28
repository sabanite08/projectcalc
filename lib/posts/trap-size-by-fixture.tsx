import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Every plumbing fixture needs a trap, and every trap has a minimum size
      set by code. Get it wrong and the fixture either drains slowly (trap
      too big — solids settle), clogs (trap too small — flow can&apos;t
      self-scour), or vents sewer gas into the room (trap seal breaks under
      siphon). This guide walks through the IPC trap-size table, how the trap
      arm and vent rules tie in, and the easy-to-miss situations that trip
      up DIY installers.
    </p>

    <h2>What a trap actually does</h2>
    <p>
      A plumbing trap is a U-shape (or P-shape) of pipe under every fixture
      that holds a small column of water — about 2 to 4 inches deep. That
      water column is the only thing standing between your bathroom and the
      sewer line below. Sewer gases (methane, hydrogen sulfide, plus
      whatever else is being decomposed downstream) cannot pass through
      water. The trap seal is what makes indoor plumbing livable.
    </p>
    <p>
      The trap also catches dropped jewelry. That&apos;s why every kitchen
      sink trap has a slip-nut union — for retrieving the engagement ring
      that went down the drain.
    </p>

    <h2>IPC trap sizes by fixture (Table 1002.1)</h2>
    <p>
      Minimum trap sizes from the International Plumbing Code Table 1002.1:
    </p>
    <ul>
      <li><strong>1¼&quot; trap:</strong> Lavatory (bathroom sink), bidet, drinking fountain</li>
      <li><strong>1½&quot; trap:</strong> Kitchen sink (single or double bowl), bar/prep sink, laundry tub, bathtub, dishwasher (when separately trapped)</li>
      <li><strong>2&quot; trap:</strong> Shower stall, floor drain, clothes washer standpipe, urinal</li>
      <li><strong>3&quot; integral trap:</strong> Water closet (toilet) — built into the fixture, no separate trap installed</li>
    </ul>
    <p>
      Use the <Link href="/trap-size-calculator">trap size calculator</Link>{' '}
      for the full table including the connecting branch drain size and
      vent size for each fixture.
    </p>
    <p>
      <strong>Note on UPC differences:</strong> The Uniform Plumbing Code
      (used on the West Coast) is mostly the same but has a few tighter
      requirements — UPC requires 1½&quot; minimum for laundry tubs even
      where IPC allows 1¼&quot;, and UPC explicitly requires the trap
      diameter to match or be one size smaller than the trap arm.
    </p>

    <h2>Trap arm length limits</h2>
    <p>
      The <em>trap arm</em> is the horizontal pipe between the trap weir
      (the top of the U-bend) and the vent take-off. IPC 1002.4 limits arm
      length based on trap size:
    </p>
    <ul>
      <li>1¼&quot; trap → 5 ft maximum trap arm</li>
      <li>1½&quot; trap → 6 ft</li>
      <li>2&quot; trap → 8 ft</li>
      <li>3&quot; trap → 12 ft</li>
      <li>4&quot; trap → 16 ft</li>
    </ul>
    <p>
      The arm must also slope ¼&quot; per foot back toward the drain. Going
      longer than the table allows breaks the trap seal under flow — once
      water is moving down the arm, it&apos;ll siphon the trap dry behind it
      because there&apos;s no air relief between the fixture and the drain.
    </p>
    <p>
      The fix when you can&apos;t physically get a vent close enough to the
      fixture is either an <strong>air admittance valve (AAV)</strong> or a
      <strong>loop vent</strong> if AAVs aren&apos;t accepted in your
      jurisdiction.
    </p>

    <h2>Common trap mistakes</h2>
    <p>
      <strong>S-traps.</strong> An S-trap (vertical bend going down past the
      trap) is illegal almost everywhere because the falling water column
      siphons the trap dry on every drain cycle. P-traps (horizontal arm
      going to a vent) are required. Older homes often have S-traps under
      kitchen sinks; rip them out when you renovate.
    </p>
    <p>
      <strong>Double-trapping.</strong> Putting a P-trap on a fixture that
      drains into another P-trap (e.g., trapping a dishwasher when it&apos;s
      already running through a disposer trap, or trapping a bar sink that
      shares a line with a kitchen sink trap). Double-trapping creates a
      pocket of trapped air between the two seals, killing flow. Either
      remove one trap or vent between them.
    </p>
    <p>
      <strong>Flexible / accordion traps.</strong> The corrugated plastic
      tubing sold as &quot;flex traps&quot; under sinks is illegal under
      every code. The interior corrugation traps food debris and the seal
      eventually blows out under pressure. Use rigid PVC or chrome P-traps.
    </p>
    <p>
      <strong>Wrong size for the fixture.</strong> Putting a 1¼&quot; trap
      under a kitchen sink (which needs 1½&quot;) is a common DIY error.
      The smaller trap clogs constantly because kitchen waste includes too
      much solid for the velocity in 1¼&quot; pipe to flush.
    </p>
    <p>
      <strong>Trap arm without a vent.</strong> Every fixture trap needs a
      vent within the arm-length limit. The kitchen island sink with no
      vent is the classic violation — fixed with an AAV under the sink, or
      a loop vent if you have ceiling space above the cabinet.
    </p>

    <h2>Special situations</h2>
    <p>
      <strong>Showers in slabs.</strong> The trap is in the slab, accessed
      through the drain. Replacing it requires breaking concrete. Get it
      right the first time — and inspect the trap before pouring on new
      construction.
    </p>
    <p>
      <strong>Floor drains in unheated spaces.</strong> A floor drain with no
      regular water input dries out, then sewer gas comes up through the
      empty trap. Pour a quart of water in unused floor drains every few
      months, or install a trap primer (a small valve that doses a few
      ounces of water on a schedule).
    </p>
    <p>
      <strong>Combined dishwasher + disposer.</strong> The dishwasher
      discharge usually plumbs into the disposer (above the disposer&apos;s
      knockout plug), which then drains through the kitchen sink trap. No
      separate dishwasher trap needed. If you don&apos;t have a disposer,
      the dishwasher needs its own trap on a 1½&quot; line.
    </p>
    <p>
      <strong>Clothes washer standpipe.</strong> Code requires a 2&quot;
      P-trap with a standpipe rising 18–42&quot; above the trap weir.
      Discharge from the washer pump drops into the standpipe, which gives
      enough air gap to prevent siphoning the machine empty if there&apos;s
      a sewage backup.
    </p>

    <h2>Why toilets are different</h2>
    <p>
      Toilets have an integral 3-inch trap molded into the porcelain — the
      curved water column you see in the bowl. The branch drain leaving the
      toilet is straight pipe (no separate trap installed). This is why
      every branch carrying a toilet has to be 3&quot; minimum even if
      other fixtures sharing the line would otherwise allow smaller pipe.
      The <Link href="/drain-pipe-size-calculator">drain pipe sizing calculator</Link>{' '}
      enforces this rule automatically.
    </p>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size P-trap for a kitchen sink?</strong> 1½&quot; per
      both IPC and UPC. Single bowl or double bowl, same minimum size.
    </p>
    <p>
      <strong>What size P-trap for a bathroom sink?</strong> 1¼&quot;
      minimum. Some installers go 1½&quot; for slightly faster drainage,
      but 1¼&quot; is the code minimum and works fine.
    </p>
    <p>
      <strong>What size trap for a shower?</strong> 2&quot; minimum.
      Showers move much more water than tubs (continuous flow vs fill-and-
      drain), and the larger trap handles the volume.
    </p>
    <p>
      <strong>Can I use a smaller trap to fit under my vanity?</strong> No —
      undersizing the trap below code minimum is an inspection failure and
      causes drainage problems. If physical clearance is tight, use a
      shallow-seal P-trap or a side-outlet P-trap instead of a deeper
      conventional trap.
    </p>
    <p>
      <strong>Why does my drain gurgle when water runs?</strong> Almost
      always either undersized vent or trap arm too long. The gurgling is
      air trying to enter through the trap because the vent isn&apos;t
      breathing properly. Check the{' '}
      <Link href="/vent-pipe-size-calculator">vent pipe sizing calculator</Link>{' '}
      to confirm the vent diameter is adequate.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/trap-size-calculator" style={{ color: 'var(--hi-vis)' }}>trap size calculator</Link>{' '}
      gives minimum trap diameter, branch drain size, DFU, and required
      vent size for any common residential or commercial fixture.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Trap and vent rules vary by
      jurisdiction. Verify with a licensed plumber and your local
      plumbing inspector before purchase or installation. ProjectCalc
      is not responsible for code violations, permit failures, or
      system failures resulting from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'plumbing-trap-sizes-by-fixture',
  title: 'Plumbing Trap Sizes by Fixture (IPC Table 1002.1)',
  metaTitle: 'Plumbing Trap Sizes by Fixture — IPC Table 1002.1 Guide | ProjectCalc',
  metaDesc: 'Minimum trap diameter for every plumbing fixture per IPC Table 1002.1. Trap arm rules, common installation mistakes, and why toilets have built-in traps.',
  excerpt: 'Get the trap size wrong and the fixture either drains slow, clogs, or vents sewer gas into the room. Here\'s the IPC table by fixture, plus the trap arm and vent rules that come with it.',
  date: '2026-04-27',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['trap-size-calculator', 'drain-pipe-size-calculator', 'vent-pipe-size-calculator'],
  Body,
};

export default post;
