import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You appear to be offline. Calculators you have already opened will still work.',
  robots: { index: false, follow: false },
};

export default function Offline() {
  return (
    <main className="offline-wrap">
      <section className="hero">
        <div className="hero-tag">OFFLINE</div>
        <h1>You&apos;re<br /><span className="accent">offline.</span></h1>
        <p>
          No connection right now. Any calculator you&apos;ve already opened on this
          device will still work — open it from your home screen or from history.
        </p>
        <p style={{ marginTop: 24 }}>
          <Link href="/" className="offline-retry">↻ Try the home page</Link>
        </p>
      </section>
    </main>
  );
}
