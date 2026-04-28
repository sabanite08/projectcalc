import Link from 'next/link';
import type { BlogPost } from './types';

const Body = () => (
  <>
    <p>
      Buying a generator on running watts alone is the most
      common way homeowners get burned. The fridge that pulls 700
      watts pulls 1,800 watts for the half-second the compressor
      starts; the well pump that runs at 1,500 watts surges to
      4,500. Add up nameplates without surge headroom and the
      generator buys you a stalled unit instead of cold beer.
    </p>

    <h2>Running watts vs surge watts</h2>
    <p>
      Every generator spec sheet lists two numbers:
    </p>
    <ul>
      <li><strong>Running (rated) watts</strong> — what it can
        sustain continuously. Picture this as cruising horsepower.</li>
      <li><strong>Surge (peak / starting) watts</strong> — what it
        can deliver for ~1-3 seconds before the engine stalls.
        Typically 10-20% higher than running.</li>
    </ul>
    <p>
      Inductive loads (anything with a motor) are why surge watts
      matter:
    </p>
    <ul>
      <li>Refrigerator/freezer: 2-3× running</li>
      <li>Furnace blower (PSC motor): 2× running</li>
      <li>Window AC: 2-3× running</li>
      <li>Central AC compressor: 2.5× running (LRA on the
        nameplate)</li>
      <li><strong>Well pump and sump pump: 3-4× running</strong> —
        the worst offender</li>
    </ul>

    <h2>Sizing math</h2>
    <p>
      The right way to size a generator:
    </p>
    <ol>
      <li>Add up <strong>running watts</strong> for everything you
        want to back up</li>
      <li>Find the <strong>largest single motor</strong> and
        compute its surge above its running</li>
      <li>Required surge = running total + that one biggest
        motor's startup spike</li>
      <li>Add 20% headroom on running so the engine isn't pegged</li>
    </ol>
    <p>
      Why only the largest motor's surge? Because motors don't all
      start at the exact same instant. The fridge cycles on, the
      well kicks in two minutes later. The probability of two
      motors hitting peak surge simultaneously is low enough that
      generator manufacturers and electricians don't size for it.
      The{' '}
      <Link href="/generator-size-calculator">generator size
      calculator</Link> handles this automatically.
    </p>

    <h2>Common essential-load builds</h2>
    <p>
      <strong>Bare-minimum essentials (3-4 kW running):</strong>
      fridge, furnace blower, lights + outlets, microwave on
      demand. A 4,000-5,000 W portable handles this.
    </p>
    <p>
      <strong>Comfort essentials (5-7 kW running):</strong> add a
      sump pump, freezer, window AC for one bedroom, all the
      electronics. 7,500 W portable territory.
    </p>
    <p>
      <strong>Well + essentials (6-8 kW running, 9-11 kW surge):</strong>
      add a ½ HP well pump, which is the surge driver. 9,000+ W
      portable or 10 kW standby.
    </p>
    <p>
      <strong>Whole home (15-22 kW running, 30+ kW surge):</strong>
      central AC + electric range + dryer + everything else. 18-22 kW
      air-cooled standby (Generac Guardian, Kohler 20RESCL) is the
      sweet spot here.
    </p>

    <h2>Portable vs standby</h2>
    <p>
      <strong>Portable</strong> generators top out at about 12 kW
      and need a manual transfer switch or interlock kit. Cheap,
      flexible, gas-powered (or dual-fuel propane). Have to be
      rolled out, started, and refueled every 6-10 hours.
    </p>
    <p>
      <strong>Standby</strong> generators are permanent installs:
      pad-mounted, hardwired through an automatic transfer switch
      (ATS), fueled from natural gas or a propane tank. They start
      themselves within seconds of an outage and run until utility
      power returns. 14 kW air-cooled units start around $4,500
      installed; 22 kW around $7,500; liquid-cooled 30 kW+ units
      go to $15,000+.
    </p>

    <h2>NEC 702 — the legal bits</h2>
    <p>
      Anything wired into the home panel needs:
    </p>
    <ul>
      <li>A <strong>transfer switch</strong> (manual or automatic)
        or a UL-listed <strong>interlock kit</strong> on the panel</li>
      <li>Properly sized <strong>generator-input wiring</strong>
        from the inlet box to the transfer means</li>
      <li>A <strong>generator inlet box</strong> on the exterior
        for portables (no extension-cord-through-window)</li>
    </ul>
    <p>
      Backfeeding through a dryer outlet without an interlock is
      the worst common DIY mistake — the generator energizes the
      utility lines, and a lineman working on the de-energized
      service gets electrocuted. Don't do this. Ever.
    </p>

    <h2>Fuel sizing — runs out faster than you think</h2>
    <p>
      A 7,500 W portable at 50% load burns ~0.7 gal of gasoline
      per hour — 17 gal in 24 hours. Five-gallon cans get old fast.
      Standby on natural gas runs as long as utility gas pressure
      holds. Standby on propane: a 250-gal tank at 50% load on a
      22 kW unit lasts about 3-4 days.
    </p>

    <h2>Common generator-sizing mistakes</h2>
    <p>
      <strong>Sizing on running watts only.</strong> The
      surge-watts trap. A 5,000 W generator backs up loads that
      total 4,500 W running and 9,000 W surge — the well pump
      starts, the gen stalls, the lights drop.
    </p>
    <p>
      <strong>Backing up the central AC with a 7,500 W
      portable.</strong> A 3-ton AC pulls 9,000+ W on startup. Not
      enough peak. Get the AC contractor to spec a soft-start kit
      (Micro-Air EasyStart) that cuts surge by ~70%, or step up to
      a 12 kW unit.
    </p>
    <p>
      <strong>Skipping the transfer switch on a "temporary"
      install.</strong> Every "temporary" lasts longer than
      planned. Spend the $300-500 on an interlock kit and do it
      right the first time.</p>

    <p style={{ marginTop: 24, padding: 14, background: 'rgba(255,212,0,0.06)', borderLeft: '2px solid var(--hi-vis)', fontSize: 13 }}>
      <strong>Estimate only.</strong> The{' '}
      <Link href="/generator-size-calculator" style={{ color: 'var(--hi-vis)' }}>generator size calculator</Link>{' '}
      uses typical motor surge multipliers (2.5-3×) and 20%
      running-watts headroom. Specific motors can surge higher —
      always check nameplate LRA (locked rotor amps) on critical
      loads. Permanent installs require a licensed electrician,
      transfer switch / interlock per NEC 702, and AHJ approval.
    </p>
  </>
);

const post: BlogPost = {
  slug: 'generator-sizing-watts',
  title: 'Generator Sizing — Running Watts and Surge Watts',
  metaTitle: 'Generator Sizing — Watts for Home or Job Site | ProjectCalc',
  metaDesc: 'How to size a generator: running watts, surge watts, motor inrush math, portable vs standby kW, NEC 702 transfer switch rules.',
  excerpt: 'Running watts gets you a generator that stalls when the well pump kicks in. Here is the surge math, the transfer-switch rules, and what 5 / 7.5 / 22 kW each actually backs up.',
  date: '2026-04-27',
  readTime: 5,
  category: 'construction',
  relatedCalcs: ['generator-size-calculator', 'panel-load-calculator', 'wire-gauge-calculator'],
  Body,
};

export default post;
