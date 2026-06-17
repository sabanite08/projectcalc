// Cross-sell CTA shown on trade/material calculators (everything except finance).
// ProjectCalc's trades traffic is exactly Operaite's customer (service-business
// owners). The link is rel="sponsored nofollow" — the goal is referral CLICKS,
// not passing link equity, so nofollow keeps ProjectCalc's profile clean while
// delivering the traffic. UTM tags let Operaite's analytics attribute the source.
const OPERAITE_URL =
  'https://operaite.net/?utm_source=projectcalc&utm_medium=calc_cta&utm_campaign=trades_crosssell';

export default function OperaiteCTA() {
  return (
    <aside className="operaite-cta" aria-label="Operaite — software for your trade business">
      <div className="operaite-cta-head">
        <span className="operaite-cta-badge">RUN THE BUSINESS</span>
        <span className="operaite-cta-by">operaite.net</span>
      </div>
      <div className="operaite-cta-name">Quote it. Book it. Get paid.</div>
      <p className="operaite-cta-pitch">
        Done with the math? <strong>Operaite</strong> is the all-in-one app for service
        trades — online booking, scheduling, quotes, and invoices that get you paid
        faster. Built for solo pros and growing crews.
      </p>
      <ul className="operaite-cta-bullets">
        <li>Send quotes &amp; invoices in minutes</li>
        <li>Online booking + drag-and-drop scheduling</li>
        <li>Get paid online — stop chasing checks</li>
      </ul>
      <a
        className="operaite-cta-btn"
        href={OPERAITE_URL}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
      >
        See how Operaite works →
      </a>
      <p className="operaite-cta-foot">
        Plus a full kit of free tools — invoicing, estimates &amp; more.
      </p>
    </aside>
  );
}
