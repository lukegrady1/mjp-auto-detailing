import { SERVICES, SERVICE_DETAILS, ServiceDetail } from "@/lib/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) {
    return {};
  }
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail: ServiceDetail | undefined = SERVICE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-accent font-medium">{detail.name}</li>
            </ol>
          </nav>

          {/* Headline and Intro */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {detail.headline}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-3xl">
            {detail.intro}
          </p>

          <Separator className="mb-10" />

          {/* Two-column layout: content left, info sidebar right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What's Included */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-2">
                  {detail.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-accent mt-1 flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Our Process */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  Our Process
                </h2>
                <ol className="space-y-6">
                  {detail.process.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-surface font-mono text-accent flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-bold text-text-primary mb-1">{step.step}</p>
                        <p className="text-text-secondary leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Pricing */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Pricing
                </h2>
                <p className="text-text-secondary leading-relaxed">{detail.pricing}</p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {detail.faq.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium text-text-primary mb-2">
                        {item.question}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-surface rounded-sm p-6 sticky top-28 space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted mb-1">Starting at</p>
                  <p className="text-accent text-2xl font-bold">
                    ${SERVICES.find((s) => s.slug === detail.slug)?.startingPrice ?? "---"}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted mb-1">Duration</p>
                  <p className="text-text-primary font-medium">{detail.duration}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-text-muted mb-1">Best For</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{detail.bestFor}</p>
                </div>
                <Separator />
                <Link
                  href={`/book?service=${detail.slug}`}
                  className="block w-full text-center bg-accent text-white text-sm font-semibold uppercase tracking-wider py-3 px-6 rounded-sm hover:bg-accent-hover transition"
                >
                  Book This Service
                </Link>
              </div>
            </aside>
          </div>

          {/* Bottom CTA */}
          <Separator className="my-12" />
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Ready to book?
            </h2>
            <p className="text-text-secondary mb-6">
              Schedule your {detail.name.toLowerCase()} today. Mobile service — we come to you.
            </p>
            <Link
              href={`/book?service=${detail.slug}`}
              className="inline-block bg-accent text-white text-sm font-semibold uppercase tracking-wider py-3 px-7 rounded-sm hover:bg-accent-hover transition"
            >
              Book This Service
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
