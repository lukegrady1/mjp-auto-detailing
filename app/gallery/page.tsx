import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gallery | MJP Auto Detailing | West Boylston, MA",
  description:
    "View results from MJP Auto Detailing. See real transformations on vehicles in West Boylston, Worcester, and Central Massachusetts.",
};

const beforeAfterProjects = [
  {
    service: "Interior Detail",
    note: "Full interior deep clean. Vacuumed, steam cleaned, and extracted.",
    before: "/mjp-auto-detailing/suv_before.PNG",
    after: "/mjp-auto-detailing/suv_after.PNG",
  },
  {
    service: "Interior Detail",
    note: "Complete interior restoration. Seats, carpet, and all surfaces cleaned.",
    before: "/mjp-auto-detailing/truck_before.PNG",
    after: "/mjp-auto-detailing/truck_after.PNG",
  },
  {
    service: "Interior Detail",
    note: "Deep interior cleaning. Steam cleaned and extracted.",
    before: "/mjp-auto-detailing/joes_towing_interior_before.PNG",
    after: "/mjp-auto-detailing/joes_towing_interior_after.PNG",
  },
];

const singlePhotos = [
  {
    service: "Exterior Detail",
    note: "Exterior detail completed and looking sharp.",
    image: "/mjp-auto-detailing/joes_towing_exterior.PNG",
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
          Results from recent details in the West Boylston and Worcester area.
        </p>

        {/* Before & After Grid */}
        <section className="pb-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {beforeAfterProjects.map((project, i) => (
              <div
                key={i}
                className="bg-surface rounded-sm border-l-3 border-l-accent overflow-hidden"
              >
                <div className="relative aspect-[4/3] m-4 mb-0 rounded-sm overflow-hidden">
                  <Image
                    src={project.before}
                    alt={`${project.service} — Before`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded-sm">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] m-4 rounded-sm overflow-hidden">
                  <Image
                    src={project.after}
                    alt={`${project.service} — After`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded-sm">
                    After
                  </span>
                </div>
                <div className="p-5 pt-0">
                  <p className="text-text-primary font-medium text-lg">
                    {project.service}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    {project.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Single Photos Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {singlePhotos.map((project, i) => (
              <div
                key={i}
                className="bg-surface rounded-sm border-l-3 border-l-accent overflow-hidden"
              >
                <div className="relative aspect-[4/3] m-4 rounded-sm overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.service}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 pt-0">
                  <p className="text-text-primary font-medium text-lg">
                    {project.service}
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
              Every vehicle we work on gets documented. What you see here is
              what you can expect when you book with us.
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
