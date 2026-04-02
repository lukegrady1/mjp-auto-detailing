import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gallery | MJP Auto Detailing | West Boylston, MA",
  description:
    "View before and after results from MJP Auto Detailing. See real transformations on vehicles in West Boylston, Worcester, and Central Massachusetts.",
};

const projects = [
  {
    service: "Full Detail",
    vehicle: "2022 BMW 330i — Black",
    note: "Full interior and exterior detail. Heavy pet hair removal, clay bar, and sealant.",
  },
  {
    service: "Ceramic Coating",
    vehicle: "2023 Tesla Model 3 — White",
    note: "Single-stage paint correction followed by a 2-year ceramic coating.",
  },
  {
    service: "Interior Detail",
    vehicle: "2019 Jeep Wrangler — Silver",
    note: "Deep interior cleaning after a season of trail use. Steam cleaned and extracted.",
  },
  {
    service: "Paint Correction",
    vehicle: "2021 Audi A4 — Navarra Blue",
    note: "Multi-stage correction to remove dealership wash swirls. Before and after under LED.",
  },
  {
    service: "Exterior Detail",
    vehicle: "2020 Ford F-150 — Oxford White",
    note: "Hand wash, clay bar, and sealant. Fleet vehicle for a local contractor.",
  },
  {
    service: "Headlight Restoration",
    vehicle: "2016 Honda Civic — Grey",
    note: "Severely yellowed headlights restored to clear. Passed MA inspection afterward.",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-24 pb-4 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
              Recent Projects
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Our Work
            </h1>
          </div>
        </section>

        <p className="text-text-secondary text-center mb-16 px-4">
          Before and after results from recent details in the West Boylston and
          Worcester area.
        </p>

        {/* Gallery Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.vehicle}
                className="bg-surface rounded-sm border-l-3 border-l-accent overflow-hidden"
              >
                {/* Before placeholder */}
                <div className="bg-surface-raised rounded-sm h-48 flex items-center justify-center m-3 mb-0">
                  <span className="text-text-muted text-xs font-medium uppercase tracking-wide">Before</span>
                </div>
                {/* After placeholder */}
                <div className="bg-surface-raised rounded-sm h-48 flex items-center justify-center m-3">
                  <span className="text-text-muted text-xs font-medium uppercase tracking-wide">After</span>
                </div>
                {/* Caption */}
                <div className="p-4 pt-0">
                  <p className="text-text-primary font-medium">
                    {project.service}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {project.vehicle}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    {project.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-6">
              About Our Work
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Every vehicle we work on gets documented before and after. These
              photos are taken under the same lighting conditions to show the
              actual difference, not a camera trick. What you see here is what
              you can expect when you book with us.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Have a vehicle you&apos;d like to see in this gallery? Book a
              detail and we&apos;ll photograph the results (with your
              permission) to show future customers the kind of work we do.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 px-4 text-center">
          <Link
            href="/book"
            className="inline-flex items-center bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-sm hover:bg-accent-hover transition"
          >
            Book a Detail
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
