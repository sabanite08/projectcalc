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
            rectangular space &mdash; bedrooms, patios, decks, garden beds &mdash;
            and includes an L-shape mode for rooms with bump-outs and a
            <strong> Custom shape</strong> mode where you can drag any number of
            points around to match an irregular room or yard.
          </p>
        </div>

        <RoomSketcher />

        <div className="seo-block" style={{ maxWidth: 760, marginTop: 48 }}>
          <h2>What the sketcher actually does</h2>
          <p>
            Most material calculators ask for length and width as numbers and
            you have to imagine the room in your head. The sketcher flips that
            &mdash; you see a scaled drawing of the space as you type, with
            corner handles you can drag to adjust dimensions live. Once it
            looks right, click any of the 14 calculator launcher buttons and
            the calc opens with your dimensions already filled in.
          </p>

          <h2 style={{ marginTop: 32 }}>Calculators it pre-fills</h2>
          <p>
            The sketcher is wired into the calculators that take a length and
            width as their primary inputs:
          </p>
          <ul>
            <li>
              <strong>Walls / drywall:</strong> drywall (sheets), paint
              (gallons), insulation (batts)
            </li>
            <li>
              <strong>Flooring:</strong> hardwood (planks &amp; boxes), carpet
              (square yards), vinyl (linear feet), tile (count)
            </li>
            <li>
              <strong>Outdoor:</strong> deck stain (gallons), paver (count),
              concrete (slabs and pads)
            </li>
            <li>
              <strong>Yard:</strong> mulch (cubic yards), gravel (yards or
              tons), sod (pallets), topsoil (yards)
            </li>
          </ul>
          <p>
            Each launcher passes the sketched length, width, and L-shape
            cutout to the destination calc as URL parameters so the calc loads
            with your numbers ready. You can still edit them in the calc
            itself if needed.
          </p>

          <h2 style={{ marginTop: 32 }}>Custom shape mode</h2>
          <p>
            For rooms or yards that aren&apos;t rectangles or simple L-shapes,
            switch to <strong>Custom shape</strong>. The sketcher opens with a
            four-point square &mdash; drag any corner to reshape it, tap the
            <strong> + </strong>button on any edge to insert a new point, and
            tap the <strong>×</strong> next to a point to remove it (minimum 3
            points). Edge lengths and the live area in square feet update as
            you drag, so you can match the actual footprint of a patio with a
            curved edge, a kitchen with an angled wall, a garden bed that
            tapers, or any other shape that doesn&apos;t fit a rectangle.
          </p>
          <p>
            When you launch a calculator from custom mode, the calc opens
            with Shape set to &ldquo;Custom (from sketch)&rdquo; and the exact
            area and perimeter from your polygon pre-filled. The math uses
            those values directly rather than treating the shape as a
            rectangle, so wall-based calcs like drywall and paint also pick up
            the real perimeter.
          </p>

          <h2 style={{ marginTop: 32 }}>L-shape mode</h2>
          <p>
            Real rooms aren&apos;t always rectangles. Switch to L-shape mode
            and the sketch shows a 6-sided polygon with a corner removed.
            Enter the cutout length and width, choose which corner to remove
            (top-left, top-right, bottom-left, bottom-right), and the area
            updates in real time &mdash; with the gross, cutout, and net area
            shown separately.
          </p>
          <p>
            12 of the 14 area-based calculators understand the L-shape and
            apply the cutout automatically. The two exceptions are paint
            (walls only &mdash; perimeter is the same regardless of shape) and
            insulation (the launcher converts your dimensions into wall
            length so insulation handles the entry differently).
          </p>

          <h2 style={{ marginTop: 32 }}>Real use cases</h2>
          <ul>
            <li>
              <strong>Tile a bathroom floor:</strong> sketch the room, drop the
              cutout for the vanity recess, jump straight into the tile
              calculator with the net area filled in.
            </li>
            <li>
              <strong>Stain a deck:</strong> sketch the deck dimensions, jump
              into deck stain &mdash; the calc factors in railing area
              separately.
            </li>
            <li>
              <strong>Order mulch for a curving bed:</strong> approximate the
              bed as a rectangle (or break it into a couple of rectangles and
              run the calc twice), get the cubic yards.
            </li>
            <li>
              <strong>Paint or drywall an L-shaped great room:</strong>
              sketch the L, hit the calculator launcher &mdash; net area is
              automatic.
            </li>
          </ul>

          <h2 style={{ marginTop: 32 }}>What the sketcher doesn&apos;t do</h2>
          <p>
            This is a project-input helper, not full CAD. It handles
            rectangles and L-shapes with one cutout. For complex multi-room
            layouts, irregular polygons, or detailed floor plans, you&apos;ll
            want a real layout tool (RoomSketcher, MagicPlan, AutoCAD, etc.).
            For 95% of residential project math &mdash; one room at a time,
            simple shapes &mdash; this is faster than firing up anything
            heavier.
          </p>
        </div>
      </section>
    </main>
  );
}
