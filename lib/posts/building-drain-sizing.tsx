import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The building drain is the lowest horizontal pipe inside your house —
      the main artery that every branch eventually empties into before it
      heads outside as the building sewer. Get its size or slope wrong and
      you get the world&apos;s most miserable plumbing problem: chronic
      back-ups in the lowest fixtures (basement floor drain, basement bath)
      that keep returning no matter how often you snake the line. This
      guide covers IPC building-drain sizing per Table 710.1, why it&apos;s
      different from horizontal branch sizing, and the slope rules that
      decide capacity.
    </p>

    <h2>Building drain vs branch drain vs sewer</h2>
    <p>
      The IPC distinguishes three horizontal drain types, each sized
      differently:
    </p>
    <ul>
      <li><strong>Horizontal branch:</strong> Carries one or more fixtures into a stack or a building drain. Sized by the fixtures it serves on its branch. (See the{' '}
      <Link href="/drain-pipe-size-calculator">drain pipe sizing calculator</Link>.)</li>
      <li><strong>Building drain:</strong> The main horizontal collector inside the building below the lowest stack base. Carries the entire building&apos;s drainage. Sized for total DFU and slope.</li>
      <li><strong>Building sewer:</strong> Starts 5 ft outside the building foundation. Different (more permissive) sizing rules — outside the scope of this calculator.</li>
    </ul>
    <p>
      The transition between branch and building drain is the lowest stack
      base. The transition between building drain and sewer is the
      5-foot mark outside the foundation.
    </p>

    <h2>Why building drains have higher capacity per inch of pipe</h2>
    <p>
      IPC Table 710.1 has separate columns for horizontal branches and
      building drains. The building drain column allows higher DFU loads at
      the same pipe size — for example, 3&quot; horizontal branch maxes at
      20 DFU at any slope, but a 3&quot; building drain at ¼&quot;/ft can
      carry 50 DFU.
    </p>
    <p>
      Why? Because the building drain always runs at full slope (no flat
      runs caused by roughed-in branches), and it benefits from continuous
      flow rather than the start-stop pattern of a single-fixture branch.
      The math works out to higher steady-state capacity at the same
      diameter.
    </p>

    <h2>Slope changes capacity</h2>
    <p>
      The same pipe size carries more DFU at steeper slope. From IPC Table
      710.1:
    </p>
    <ul>
      <li><strong>2&quot; building drain:</strong> 21 DFU at ⅛&quot;/ft (not allowed below 3&quot;), 26 at ¼&quot;/ft, 31 at ½&quot;/ft</li>
      <li><strong>3&quot; building drain:</strong> 42 at ⅛&quot;/ft, 50 at ¼&quot;/ft, 57 at ½&quot;/ft</li>
      <li><strong>4&quot; building drain:</strong> 180 at ⅛&quot;/ft, 216 at ¼&quot;/ft, 250 at ½&quot;/ft</li>
      <li><strong>6&quot; building drain:</strong> 700 at ⅛&quot;/ft, 840 at ¼&quot;/ft, 1,000 at ½&quot;/ft</li>
    </ul>
    <p>
      The {' '}
      <Link href="/building-drain-size-calculator">building drain sizing calculator</Link>{' '}
      handles the table lookup including the constraint that ⅛&quot;/ft is
      only allowed on 3&quot; pipe and larger.
    </p>

    <h2>Slope rules</h2>
    <p>
      The IPC sets minimum slope by pipe size:
    </p>
    <ul>
      <li><strong>2½&quot; and smaller:</strong> Minimum ¼&quot;/ft (about 2% grade). No reduction allowed.</li>
      <li><strong>3&quot; and larger:</strong> Minimum ⅛&quot;/ft (1% grade). The reduction lets you fit longer runs in tight ceiling clearances.</li>
      <li><strong>8&quot; and larger:</strong> Some jurisdictions allow 1/16&quot;/ft with engineering approval. Rare in residential.</li>
    </ul>
    <p>
      And a maximum: never exceed ½&quot;/ft. Above that, water moves
      faster than the solids it&apos;s carrying, and the solids settle out
      of the flow into pipe-wall buildup. The clog pattern looks identical
      to too-little slope. The sweet spot is ¼&quot;/ft for any pipe and
      ⅛&quot;/ft for 3+&quot; pipe when ceiling space is the binding
      constraint.
    </p>

    <h2>The 3-inch toilet rule</h2>
    <p>
      Any building drain segment carrying a water closet must be at least
      3 inches in diameter. Even if the DFU math would allow smaller pipe
      based on the other fixtures, the toilet&apos;s 3&quot; minimum
      controls. This is because of the physical size of toilet waste — a
      smaller pipe can&apos;t reliably carry it regardless of flow velocity.
    </p>
    <p>
      The corollary: if your building has a toilet anywhere, your building
      drain is at least 3&quot;. The DFU math typically pushes residential
      to 4&quot; for any reasonable fixture count.
    </p>

    <h2>Common residential building drain sizes</h2>
    <p>
      Typical sizes for common house configurations at ¼&quot;/ft slope:
    </p>
    <ul>
      <li><strong>1-bath ADU (~10 DFU):</strong> 3&quot;</li>
      <li><strong>2-bath single family (~30 DFU):</strong> 3&quot; or 4&quot; depending on layout</li>
      <li><strong>3–4 bath single family (~50–80 DFU):</strong> 4&quot;</li>
      <li><strong>Duplex (~100 DFU):</strong> 4&quot;</li>
      <li><strong>Small apartment building (200+ DFU):</strong> 4&quot; or 6&quot;</li>
    </ul>
    <p>
      Residential standard practice is to oversize to 4&quot; even when
      3&quot; would calculate as adequate. The cost difference between
      3&quot; and 4&quot; PVC is small ($1–2 per foot), and the headroom
      for future additions (basement bath, accessory unit) is worth the
      modest material premium.
    </p>

    <h2>Cleanouts</h2>
    <p>
      The IPC requires cleanouts at specific points along the building drain:
    </p>
    <ul>
      <li>At the upstream end of every horizontal drain run</li>
      <li>At every change of direction greater than 45°</li>
      <li>At intervals not exceeding 100 ft on 4&quot;+ pipe (50 ft on smaller)</li>
      <li>At the building drain&apos;s exit point (foundation transition)</li>
    </ul>
    <p>
      Skipping cleanouts is a permit violation and a maintenance nightmare —
      a clog 80 feet downstream from any access point can&apos;t be
      reached without hydro-jetting from outside. Plan cleanouts during
      rough-in, not after.
    </p>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>Sizing the building drain like a horizontal branch.</strong> Different table column with different DFU caps. Easy mistake; produces oversized pipe.</li>
      <li><strong>Setting slope by eye.</strong> A torpedo level or a 4-ft level with calibrated shim is required. Eyeball-grade pipe runs always end up either too flat (chronic clogs) or too steep (scour issues).</li>
      <li><strong>Forgetting the cleanouts.</strong> Adding cleanouts after the fact through a finished slab costs 10× what it costs to install them during rough-in.</li>
      <li><strong>Mixing DWV pipe materials at joints.</strong> PVC, ABS, and cast iron each have specific joint compounds and adapters. Mismatched joints leak under pressure.</li>
      <li><strong>Not planning for a sewage ejector.</strong> If any fixture is below the building sewer&apos;s elevation (basement bath below the street main), it needs an ejector pump and separate sealed waste line — the building drain can&apos;t serve it by gravity.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size building drain for a 3-bedroom house?</strong> 4&quot;
      PVC at ¼&quot;/ft is the residential standard. Handles 216 DFU —
      far more than a typical 3-bed/2-bath produces (~30–40 DFU).
    </p>
    <p>
      <strong>Can a building drain run uphill?</strong> No. Gravity is the
      only thing moving waste. If the building drain has to go uphill to
      reach the sewer (basement plumbing, lots below the street main), you
      need an ejector pump and pressurized sewer line — different system
      entirely.
    </p>
    <p>
      <strong>What&apos;s the minimum slope for a 4-inch drain?</strong>{' '}
      ⅛&quot;/ft (1%). ¼&quot;/ft (2%) is preferred when ceiling space
      allows because it carries more DFU. Maximum is ½&quot;/ft beyond
      which scour problems begin.
    </p>
    <p>
      <strong>How is building drain sizing different from sewer sizing?</strong>{' '}
      Building drain stops 5 ft outside the foundation; sewer starts there.
      Sewer can be sized smaller for the same DFU load because it&apos;s
      not subject to the same horizontal branch interference inside the
      building. Coordinate sewer sizing with your municipal connection
      requirements.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/building-drain-size-calculator" style={{ color: 'var(--hi-vis)' }}>building drain sizing calculator</Link>{' '}
      uses IPC Table 710.1 building-drain column with slope-aware capacity.
      Pair with the{' '}
      <Link href="/drain-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>drain pipe sizing calculator</Link>{' '}
      for branch sizing.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Building-drain sizing depends on
      local code amendments, fixture mix, and field conditions. Verify
      with a licensed plumber and your local plumbing inspector before
      purchase or installation. ProjectCalc is not responsible for
      code violations, permit failures, or system failures resulting
      from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'building-drain-sizing-guide',
  title: 'Building Drain Sizing: IPC Table 710.1 Made Practical',
  metaTitle: 'Building Drain Sizing — IPC Table 710.1 Guide | ProjectCalc',
  metaDesc: 'How to size the main building drain. IPC 710.1 building-drain column, slope rules, the 3-inch toilet rule, cleanout requirements, and common residential sizes.',
  excerpt: 'The building drain is the main artery every branch empties into. Get the size or slope wrong and you get chronic back-ups in the lowest fixtures that keep coming back no matter how often you snake.',
  date: '2026-04-27',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['building-drain-size-calculator', 'drain-pipe-size-calculator', 'pipe-slope-calculator'],
  Body,
};

export default post;
