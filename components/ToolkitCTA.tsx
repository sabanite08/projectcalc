import type { Toolkit } from '@/lib/toolkits';

export default function ToolkitCTA({ toolkit }: { toolkit: Toolkit }) {
  return (
    <aside className="toolkit-cta" aria-label="Pro toolkit">
      <div className="toolkit-cta-head">
        <span className="toolkit-cta-badge">PRO TOOLKIT</span>
        <span className="toolkit-cta-price">{toolkit.price}</span>
      </div>
      <div className="toolkit-cta-name">{toolkit.name}</div>
      <p className="toolkit-cta-pitch">{toolkit.pitch}</p>
      <ul className="toolkit-cta-bullets">
        {toolkit.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <a
        className="toolkit-cta-btn"
        href={toolkit.url ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the Toolkit →
      </a>
    </aside>
  );
}
