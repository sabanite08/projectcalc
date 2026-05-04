import type { Metadata } from 'next';
import Link from 'next/link';
import RoomSketcher from '@/components/RoomSketcher';

export const metadata: Metadata = {
  title: 'Sketch Your Room — Visual Project Helper',
  description: 'Sketch a room with length and width, then jump straight into the matching calculator with your dimensions pre-filled. Free, no signup.',
  alternates: { canonical: 'https://projectcalc.app/sketch' },
};

export default function SketchPage() {
  return (
    <main>
      <section className="calc-wrap">
        <nav className="breadcrumb">
          <Link href="/">ProjectCalc</Link>
          <span className="sep">/</span>
          <span>Sketch</span>
        </nav>
        <div className="calc-header">
          <div>
            <div className="calc-formula">VISUAL HELPER</div>
            <h1 className="calc-title">SKETCH YOUR ROOM</h1>
          </div>
          <div className="calc-formula">L × W = AREA</div>
        </div>

        <div className="seo-block" style={{ maxWidth: 760, marginBottom: 24 }}>
          <p>
            Type your room&apos;s length and width below to see a scaled
            sketch with the area, then jump straight into a matching
            calculator with your dimensions already filled in. Works for any
            rectangular space — bedrooms, patios, decks, garden beds.
            For L-shaped rooms or houses with bump-outs, sketch the largest
            rectangle and add the bump-out manually in the calculator.
          </p>
        </div>

        <RoomSketcher />
      </section>
    </main>
  );
}
