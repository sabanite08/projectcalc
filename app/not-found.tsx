import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="hero">
        <div className="hero-tag">404</div>
        <h1>That calc<br /><span className="accent">doesn&apos;t exist.</span></h1>
        <p>Try one of these instead.</p>
        <div style={{ marginTop: 24 }}>
          <Link href="/" className="btn">← BACK HOME</Link>
        </div>
      </section>
    </main>
  );
}
