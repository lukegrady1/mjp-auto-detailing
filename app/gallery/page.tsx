import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { absolute: "Gallery | MJP Auto Detailing | Northborough, MA" },
  description:
    "View before-and-after results from MJP Auto Detailing. Real interior and exterior transformations on vehicles in Northborough, Worcester, and Central Massachusetts.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Auto Detailing Gallery | MJP Auto Detailing | Northborough, MA",
    description:
      "Before-and-after auto detailing results from Northborough, Worcester, and Central Massachusetts.",
    url: "/gallery",
    type: "website",
  },
};

const beforeAfterProjects = [
  {
    service: "Interior Detail",
    vehicle: "SUV",
    note: "Full interior deep clean. Vacuumed, steam cleaned, and extracted.",
    before: "/suv_before.webp",
    after: "/suv_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "Pickup truck",
    note: "Complete interior restoration. Seats, carpet, and all surfaces cleaned.",
    before: "/truck_before.webp",
    after: "/truck_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "Tow truck",
    note: "Deep interior cleaning. Steam cleaned and extracted.",
    before: "/joes_towing_interior_before.webp",
    after: "/joes_towing_interior_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "GMC Denali",
    note: "Full interior detail. Deep cleaned and restored.",
    before: "/denali_before.webp",
    after: "/denali_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "GMC Denali passenger side",
    note: "Passenger side deep clean and extraction.",
    before: "/denali_passenger_side_before.webp",
    after: "/denali_passenger_side_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "Ford",
    note: "Complete interior cleaning and conditioning.",
    before: "/ford_before.webp",
    after: "/ford_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "Ford F-150 Platinum passenger side",
    note: "Passenger side interior restored to like-new condition.",
    before: "/xyz_platinum_passenger_side_before.webp",
    after: "/xyz_platinum_passenger_side_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "BMW driver side",
    note: "Driver side interior deep cleaned and conditioned.",
    before: "/bmw_driver_side_interior_before.webp",
    after: "/bmw_driver_side_interior_after.webp",
  },
  {
    service: "Interior Detail",
    vehicle: "Ford F-150 Platinum driver side",
    note: "Driver side interior fully cleaned and restored.",
    before: "/xyz_platinum_driver_side_before.webp",
    after: "/xyz_platinum_driver_side_after.webp",
  },
];

const singlePhotos = [
  {
    service: "Interior Detail",
    vehicle: "White pickup truck",
    note: "Interior cleaned and refreshed.",
    image: "/white_truck_interior.webp",
  },
  {
    service: "Exterior Detail",
    vehicle: "Tow truck",
    note: "Exterior detail completed and looking sharp.",
    image: "/joes_towing_exterior.webp",
  },
  {
    service: "Exterior Detail",
    vehicle: "Pickup truck",
    note: "Full exterior wash, clay bar, and sealant.",
    image: "/truck_exterior.webp",
  },
  {
    service: "Exterior Detail",
    vehicle: "Pickup truck",
    note: "Exterior cleaned and sealed.",
    image: "/xyz_truck_exterior.webp",
  },
  {
    service: "Exterior Detail",
    vehicle: "Green pickup truck",
    note: "Exterior washed, decontaminated, and sealed.",
    image: "/green_truck_exterior.webp",
  },
  {
    service: "Exterior Detail",
    vehicle: "Pickup truck",
    note: "Hand wash, clay bar, and sealant application.",
    image: "/xyz_truck_exterior_2.webp",
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
              Auto Detailing Before &amp; After Gallery — Northborough &amp; Worcester, MA
            </h1>
          </div>
        </section>

        <p className="text-text-secondary text-center mb-16 px-4">
          Results from recent interior and exterior details in the Northborough
          and Worcester area.
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
                    alt={`${project.vehicle} — ${project.service} before, MJP Auto Detailing in Northborough MA`}
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
                    alt={`${project.vehicle} — ${project.service} after, MJP Auto Detailing in Northborough MA`}
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
                    alt={`${project.vehicle} — ${project.service}, MJP Auto Detailing in Northborough MA`}
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
