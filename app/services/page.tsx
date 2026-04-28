import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { SERVICES, SERVICE_DETAILS } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "Auto Detailing Services | MJP Auto Detailing | Northborough, MA" },
  description:
    "Explore our full menu of professional mobile auto detailing services in Central Massachusetts. Exterior detail, interior detail, full detail, paint correction, and headlight restoration. We come to you in Northborough, Worcester, and surrounding towns.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Auto Detailing Services in Northborough &amp; Worcester, MA",
    description:
      "Mobile auto detailing services across Central Massachusetts: exterior, interior, full detail, paint correction, and headlight restoration.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero / Intro */}
        <section className="pt-28 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Auto Detailing Services in Northborough &amp; Worcester, MA
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              MJP Auto Detailing offers professional mobile detailing across
              Central Massachusetts, including Northborough, Worcester, Holden,
              Sterling, Shrewsbury, and the surrounding area. Every service is
              performed on-site at your home or workplace — we bring all of our
              own water, power, and equipment. No drop-off required. Browse our
              full service menu below and book the one that fits your vehicle.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {SERVICES.map((service, index) => {
              const detail = SERVICE_DETAILS[service.slug];
              if (!detail) return null;

              return (
                <div key={service.slug}>
                  {index > 0 && <Separator className="my-12" />}

                  <article className="scroll-mt-24" id={service.slug}>
                    <div className="border-l-3 border-l-accent pl-6">
                      {/* Service Name */}
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="hover:text-accent transition-colors"
                        >
                          {detail.name}
                        </Link>
                      </h2>

                      {/* Intro */}
                      <p className="text-text-secondary text-base leading-relaxed mb-6">
                        {detail.intro}
                      </p>

                      {/* Price and Duration */}
                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="bg-surface border border-border rounded-sm px-5 py-3">
                          <span className="block text-xs font-medium uppercase tracking-wide text-text-muted mb-1">
                            Starting at
                          </span>
                          <span className="text-text-primary text-xl font-semibold">
                            ${service.startingPrice}
                          </span>
                        </div>
                        <div className="bg-surface border border-border rounded-sm px-5 py-3">
                          <span className="block text-xs font-medium uppercase tracking-wide text-text-muted mb-1">
                            Duration
                          </span>
                          <span className="text-text-primary text-xl font-semibold">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                          What&apos;s Included
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {detail.whatsIncluded.map((item) => (
                            <li
                              key={item}
                              className="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5 shrink-0">
                                &#10003;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing Note */}
                      <p className="text-text-muted text-sm mb-2">
                        {detail.pricing}
                      </p>
                      {service.notice && (
                        <p className="text-text-muted text-xs italic mb-6">
                          *{service.notice}
                        </p>
                      )}
                      {!service.notice && <div className="mb-6" />}

                      {/* CTA Links */}
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-accent text-xs font-medium uppercase tracking-wider hover:underline"
                        >
                          Learn More
                          <span className="ml-1" aria-hidden="true">
                            &rarr;
                          </span>
                        </Link>
                        <Link
                          href={`/book?service=${service.slug}`}
                          className="inline-flex items-center bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-sm hover:bg-accent-hover transition"
                        >
                          Book This Service
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
