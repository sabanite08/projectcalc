import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      The water meter is the single biggest pressure restriction in most
      residential service lines, and most homeowners never think about it
      until something downstream fails the pressure-loss test. A
      ⅝&quot; × ¾&quot; meter — the most common residential meter in the US —
      caps continuous flow at about 10 GPM. Add a tankless water heater that
      pulls 9 GPM at full output and you&apos;ve essentially exhausted the
      meter&apos;s capacity for everything else in the house. This guide
      covers how meters get sized, when to upsize, and what to coordinate
      with your utility before installing high-flow equipment.
    </p>

    <h2>How meters get sized in the first place</h2>
    <p>
      Most US utilities use the AWWA M22 method or a close variant.
      It&apos;s a two-step process:
    </p>
    <ol>
      <li>Estimate peak demand from total Water Supply Fixture Units (WSFU) using Hunter&apos;s probabilistic curve, or use a flat per-dwelling-unit value for multi-family</li>
      <li>Pick the smallest standard meter where the maximum continuous flow rating equals or exceeds peak demand, with 15–20% margin</li>
    </ol>
    <p>
      The output is the recommended meter size. Most utilities default to
      one size up from the calculation result for safety, because customer
      pressure complaints cost them money to investigate. The{' '}
      <Link href="/water-meter-size-calculator">water meter size calculator</Link>{' '}
      runs the same logic for any WSFU input.
    </p>

    <h2>Standard residential meter sizes</h2>
    <p>
      Displacement-type (PD) meters are the dominant residential and small
      commercial meter. Common sizes and capacities:
    </p>
    <ul>
      <li><strong>⅝&quot; × ¾&quot;:</strong> 10 GPM continuous, 20 GPM intermittent. Default for single-family residential up to ~30 WSFU.</li>
      <li><strong>¾&quot;:</strong> 15 GPM continuous, 30 GPM intermittent. Larger homes (4+ baths) or homes with high-flow equipment.</li>
      <li><strong>1&quot;:</strong> 25 GPM continuous, 50 GPM intermittent. Small multi-family, very large single-family, or homes with substantial irrigation.</li>
      <li><strong>1½&quot;:</strong> 50 GPM continuous, 100 GPM intermittent. Multi-family duplex/triplex or small commercial.</li>
      <li><strong>2&quot;:</strong> 80 GPM continuous, 160 GPM intermittent. Larger multi-family, mid-size commercial.</li>
    </ul>
    <p>
      The dimensional callout &quot;⅝&quot; × ¾&quot;&quot; refers to the
      meter chamber size and the connecting thread size. The thread is
      ¾&quot; so the meter installs into a standard ¾&quot; service yoke,
      but the actual measuring chamber is the smaller ⅝&quot; size.
    </p>

    <h2>When to ask for an upsize</h2>
    <p>
      Common scenarios that warrant a meter upsize:
    </p>
    <p>
      <strong>Tankless water heater install.</strong> Whole-home tankless
      units pull 7–11 GPM at full output to handle simultaneous shower +
      kitchen demand. With a ⅝&quot; meter (10 GPM), the tankless eats
      almost the entire meter capacity — meaning any other water draw causes
      the tankless to throttle and dump cold water into your shower.
      Upsizing to ¾&quot; (15 GPM) gives proper headroom.
    </p>
    <p>
      <strong>Adding a master suite.</strong> Going from 2 baths to 3 or 4
      baths typically pushes WSFU past the comfort threshold for ⅝&quot;.
      Combine with a soaking tub (4 WSFU each) and you&apos;re likely past
      the meter capacity even at average demand.
    </p>
    <p>
      <strong>Substantial irrigation.</strong> Lawn irrigation can pull
      15–25 GPM per zone. If irrigation runs at the same time as indoor
      use (early morning), the meter is sized for the simultaneous load.
      Most irrigation systems are scheduled for 4 AM specifically to avoid
      this conflict.
    </p>
    <p>
      <strong>Pressure complaints from existing fixtures.</strong> If
      multiple fixtures starve under simultaneous use (shower drops when
      dishwasher runs, hose bib trickles when tub fills), the meter is the
      first thing to check after confirming the supply line itself is
      adequately sized. The{' '}
      <Link href="/pressure-loss-calculator">pressure loss calculator</Link>{' '}
      can pinpoint whether the meter or the supply pipe is the limiting
      restriction.
    </p>

    <h2>What an upsize actually involves</h2>
    <p>
      You can&apos;t just install a bigger meter — the service line and
      meter pit have to support it. Going from ⅝&quot; to 1&quot; meter
      typically requires:
    </p>
    <ul>
      <li>New service line (usually 1&quot; copper or polyethylene)</li>
      <li>New meter yoke or new meter pit configuration</li>
      <li>Larger meter (utility provides; you pay for it)</li>
      <li>Possible upsize of the building&apos;s main shut-off valve</li>
      <li>Permit and tap fees if treated as new service</li>
    </ul>
    <p>
      Total cost for a residential ⅝&quot; → 1&quot; meter upsize varies
      wildly by utility — anywhere from $500 (utility absorbs most cost) to
      $5,000+ (full new tap, contractor excavation). Get a quote from your
      utility before assuming this is a cheap fix.
    </p>

    <h2>Why utilities don&apos;t just install bigger meters by default</h2>
    <p>
      Three reasons:
    </p>
    <p>
      <strong>Accuracy at low flow.</strong> A 2&quot; meter has a minimum
      registration threshold around 1.5 GPM. A leaking toilet at 0.5 GPM
      doesn&apos;t register. The utility loses revenue (and you don&apos;t
      get a leak warning on your bill).
    </p>
    <p>
      <strong>Higher base fees.</strong> Most utility tariffs charge a
      monthly base fee scaled to meter size. A 1&quot; meter base fee can
      be 2–3× the ⅝&quot; base fee, regardless of usage. Over 20 years
      that&apos;s real money.
    </p>
    <p>
      <strong>Service-line capacity.</strong> The buried service line is
      sized to match the meter. Bigger meter requires bigger line, which
      is expensive to retrofit and uses more material.
    </p>

    <h2>Touchless / smart meters</h2>
    <p>
      Many utilities are migrating to AMI (Advanced Metering Infrastructure)
      meters that radio reads back to the utility. These meters are still
      mechanical — typically ultrasonic flow sensing or magnetic — and the
      sizing rules are the same. AMI brings benefits: hourly usage data
      visible to you, leak alerts, no more meter-reader visits. The flow
      capacity numbers are unchanged.
    </p>

    <h2>Common mistakes</h2>
    <ul>
      <li><strong>Assuming bigger is always better.</strong> Higher base fees and lower low-flow accuracy can outweigh capacity gains. Size for actual demand with margin, not for &quot;maximum possible.&quot;</li>
      <li><strong>Forgetting the irrigation load.</strong> Most fixture-unit calculations treat hose bibs as 2.5 WSFU each, which underestimates a real irrigation system. Add irrigation as a separate continuous load if it ever runs simultaneously with indoor demand.</li>
      <li><strong>Installing high-flow equipment without checking meter capacity first.</strong> The classic case: tankless heater install fails commissioning because the ⅝&quot; meter can&apos;t deliver enough flow. Now you have a $3,000 heater that doesn&apos;t work and a separate utility coordination problem.</li>
      <li><strong>Ignoring meter age.</strong> Old meters develop fouled or worn measuring chambers and lose accuracy in both directions. If your bills jump or drop with no use change, ask the utility to check or replace the meter.</li>
    </ul>

    <h2>Quick FAQ</h2>
    <p>
      <strong>What size water meter do I need?</strong> For a typical 2-bath
      single-family home (~25–30 WSFU), the standard ⅝&quot; × ¾&quot;
      meter is sufficient. 3+ baths or any high-flow equipment (tankless
      heater, large irrigation) usually warrants ¾&quot; or 1&quot;.
    </p>
    <p>
      <strong>How much water can a ⅝&quot; meter handle?</strong> 10 GPM
      continuous, 20 GPM intermittent. That&apos;s enough for most
      single-family use — about 600 GPH continuous if you ran every fixture
      simultaneously, which never happens.
    </p>
    <p>
      <strong>Can I just install my own bigger meter?</strong> No. The
      meter is utility property and replacing it without coordination is
      tampering, which carries fines. Request a meter swap through your
      utility&apos;s service department.
    </p>
    <p>
      <strong>Does meter size affect water pressure?</strong> Indirectly. A
      meter at maximum capacity has measurable pressure drop across it
      (typically 5–10 PSI at rated flow). Above rated flow the drop
      increases sharply. Upsizing reduces this drop and frees up downstream
      pressure for fixtures.
    </p>

    <p style={{ marginTop: 32, padding: '16px', background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Run the numbers:</strong> the{' '}
      <Link href="/water-meter-size-calculator" style={{ color: 'var(--hi-vis)' }}>water meter size calculator</Link>{' '}
      returns the recommended meter for any WSFU total. Pair with the{' '}
      <Link href="/water-supply-pipe-size-calculator" style={{ color: 'var(--hi-vis)' }}>water supply pipe sizing calculator</Link>{' '}
      to confirm both are sized consistently.
    </p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> Your local water utility sets
      the actual meter — sizing rules, tap fees, and registration
      requirements vary. Verify with the utility and a licensed
      plumber before purchase or installation. ProjectCalc is not
      responsible for permit failures or service issues resulting
      from use.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'water-meter-sizing-guide',
  title: 'Water Meter Sizing: When to Upsize and Why',
  metaTitle: 'Water Meter Sizing — How to Pick the Right Meter Size | ProjectCalc',
  metaDesc: 'How residential water meters get sized, common capacities by meter size, when to upsize for tankless heaters or irrigation, and what an upsize actually costs.',
  excerpt: 'The water meter is the single biggest restriction in most service lines. Add a tankless heater to a typical residential meter and you\'ve eaten the entire flow capacity for the rest of the house.',
  date: '2026-04-27',
  readTime: 7,
  category: 'construction',
  relatedCalcs: ['water-meter-size-calculator', 'water-supply-pipe-size-calculator', 'pressure-loss-calculator'],
  Body,
};

export default post;
