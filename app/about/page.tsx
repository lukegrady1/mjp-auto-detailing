import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About MJP Auto Detailing | Northborough, MA" },
  description:
    "Learn about MJP Auto Detailing, a professional mobile auto detailing service based in Northborough, MA. IDA certified, fully insured, and committed to delivering showroom-quality results at your location.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MJP Auto Detailing | Northborough, MA",
    description:
      "Mobile auto detailing service based in Northborough, MA. IDA certified, fully insured, serving Worcester County and Central Massachusetts.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <div className="pt-24 pb-8 px-4 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
            Who We Are
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            About MJP Auto Detailing — Mobile Detailing in Northborough, MA
          </h1>
        </div>

        {/* Section 1 - Owner Intro */}
        <section className="bg-background max-w-6xl mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="rounded-sm aspect-[3/4] flex items-center justify-center" style={{ backgroundColor: "#221e1f" }}>
                <Image
                  src="/logo.webp"
                  alt="Matty P's Auto Detailing"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-text-secondary text-lg leading-relaxed">
                MJP Auto Detailing is a professional mobile detailing service
                based in Northborough, Massachusetts. We bring showroom-quality
                detailing directly to your driveway, office parking lot, or
                wherever your vehicle is located. Our mission is simple: deliver
                exceptional results with the convenience of a fully mobile
                operation so you never have to rearrange your day for a detail.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                The business was born out of a genuine passion for cars and the
                art of paint correction. What started as weekend projects on
                friends&apos; and family members&apos; vehicles quickly grew
                into a full-time pursuit. After investing in professional
                training, certifications, and commercial-grade equipment, MJP
                Auto Detailing was established to serve the greater Worcester
                County area with the level of care that every vehicle deserves.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                What sets MJP apart is an uncompromising attention to detail.
                Every wash follows a proper multi-step process. Every polish is
                guided by paint thickness readings. Every sealant is applied in
                controlled conditions to ensure proper bonding. We never cut
                corners, because the results speak for themselves and our
                reputation depends on every single job.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                MJP Auto Detailing is IDA (International Detailing Association)
                certified and fully insured, giving you peace of mind that your
                vehicle is in qualified, professional hands. Whether it&apos;s a
                daily driver that needs a refresh or a weekend car that deserves
                preservation-level care, we treat every vehicle like it&apos;s
                our own.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Our Standards */}
        <section className="bg-surface py-16">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs font-medium uppercase tracking-wide text-accent text-center mb-3">
              What Sets Us Apart
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Our Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3 border-l-3 border-l-accent pl-6">
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  Quality Products
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We exclusively use professional-grade products from trusted
                  brands like P&amp;S, Gyeon, and Chemical Guys. You will never
                  see off-the-shelf consumer products in our setup. Every soap,
                  sealant, and dressing is selected for its performance
                  and safety on your vehicle&apos;s surfaces, because the
                  products you use matter just as much as the technique.
                </p>
              </div>
              <div className="space-y-3 border-l-3 border-l-accent pl-6">
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  Proper Technique
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Every detail follows proven, methodical processes. That means
                  a two-bucket wash method to prevent swirl marks, clay bar
                  decontamination to remove embedded contaminants, and machine
                  polishing guided by paint thickness readings to safely correct
                  defects without compromising clear coat. Every step is done
                  correctly, in the right order, with the right tools.
                </p>
              </div>
              <div className="space-y-3 border-l-3 border-l-accent pl-6">
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  Mobile Convenience
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our fully self-contained mobile setup includes its own water
                  supply, power generation, and a complete inventory of
                  professional equipment. We do not need access to your hose or
                  electricity. You simply tell us where and when, and we show up
                  ready to deliver the same level of quality you would expect
                  from a high-end detail shop, right at your location.
                </p>
              </div>
              <div className="space-y-3 border-l-3 border-l-accent pl-6">
                <h3 className="font-serif text-xl font-bold text-text-primary">
                  Transparent Pricing
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  No hidden fees and no surprises. Before any work begins, we
                  assess your vehicle&apos;s condition and provide a final price.
                  You know exactly what you are paying for and what is included.
                  If we find anything during the detail that warrants additional
                  work, we discuss it with you first. Honesty and clear
                  communication are the foundation of every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Service Area */}
        <section className="bg-background py-16">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xs font-medium uppercase tracking-wide text-accent text-center mb-3">
              Where We Operate
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
              Service Area
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed text-center mb-6">
              Northborough &middot; Worcester &middot; Holden &middot; Sterling &middot; Boylston &middot; West Boylston &middot; Shrewsbury &middot; Westborough &middot; Rutland &middot; Paxton &middot; Princeton &middot; and surrounding communities throughout Worcester County, Massachusetts.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our mobile service covers a generous radius from our Northborough
              base. Whether you need us at your home, your office, or any other
              convenient location, we will come to you. If you are unsure
              whether your area is within our range, reach out and we will make
              it work.
            </p>
          </div>
        </section>

        {/* Section 4 - CTA */}
        <section className="bg-surface py-16 text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Book?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Schedule your detail today and experience the MJP difference
            firsthand.
          </p>
          <Link
            href="/book"
            className="bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-sm hover:bg-accent-hover transition inline-block"
          >
            Book Your Detail
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
