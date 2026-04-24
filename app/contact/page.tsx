import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact MJP Auto Detailing | West Boylston, MA",
  description:
    "Contact MJP Auto Detailing to book your mobile detailing appointment in West Boylston, Worcester, and Central Massachusetts. Call, text, or email us for a free quote.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="pt-24 pb-8 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Contact Us
            </h1>
          </div>
        </section>

        <p className="text-text-secondary text-lg text-center mb-16 px-4">
          Get in touch to schedule your detail or ask a question.
        </p>

        {/* Two-column layout */}
        <section className="pb-20 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* LEFT -- Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-surface rounded-sm p-6 border-l-3 border-l-accent">
                <Phone className="text-accent w-5 h-5 mb-3" />
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Phone
                </h3>
                <PhoneLink
                  location="contact_page"
                  className="text-accent font-medium hover:underline"
                >
                  (774) 287-0447
                </PhoneLink>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  Call or text anytime. We typically respond within an hour
                  during business hours.
                </p>
              </div>

              {/* Email */}
              <div className="bg-surface rounded-sm p-6 border-l-3 border-l-accent">
                <Mail className="text-accent w-5 h-5 mb-3" />
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@mjpautodetailing.com"
                  className="text-accent font-medium hover:underline"
                >
                  info@mjpautodetailing.com
                </a>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  For quotes, questions, or scheduling.
                </p>
              </div>

              {/* Location */}
              <div className="bg-surface rounded-sm p-6 border-l-3 border-l-accent">
                <MapPin className="text-accent w-5 h-5 mb-3" />
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Location
                </h3>
                <p className="text-text-primary font-medium">
                  5 Weber Ln, Northborough, MA 01532
                </p>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  We&apos;re a mobile service &mdash; we come to you anywhere in
                  Worcester County.
                </p>
              </div>

              {/* Hours */}
              <div className="bg-surface rounded-sm p-6 border-l-3 border-l-accent">
                <Clock className="text-accent w-5 h-5 mb-3" />
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Hours
                </h3>
                <p className="text-text-primary font-medium">
                  Monday&ndash;Saturday: 8:00 AM &ndash; 6:00 PM
                </p>
                <p className="text-text-primary font-medium">
                  Sunday: By appointment
                </p>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  Flexible scheduling available. Contact us for early morning or
                  evening appointments.
                </p>
              </div>
            </div>

            {/* RIGHT -- FAQs */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-accent mb-3">
                FAQ
              </p>
              <h2 className="font-serif text-3xl font-bold text-text-primary mb-8">
                Common Questions
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    How do I book a detail?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    The fastest way is through our{" "}
                    <Link href="/book" className="text-accent hover:underline">
                      online booking form
                    </Link>
                    . You can also call or text us directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    How far do you travel?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We serve all of Worcester County. West Boylston, Worcester,
                    Holden, Sterling, Shrewsbury, Northborough, and surrounding
                    towns. If you&apos;re unsure, just ask.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    Do I need to be home during the detail?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Not necessarily. As long as we have access to the vehicle and
                    a place to park, we can work while you&apos;re away. Many
                    customers have us come to their workplace.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    What forms of payment do you accept?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Cash, Venmo, Zelle, and all major credit cards.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    What if it rains on my appointment day?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We&apos;ll reach out to reschedule. Exterior work requires
                    dry conditions. Interior-only services can proceed in light
                    rain if there&apos;s covered parking.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-primary font-medium mb-2">
                    Do you offer gift certificates?
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Yes. Contact us by phone or email and we&apos;ll set one up
                    for any service or dollar amount.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center bg-surface rounded-sm p-10 border-l-3 border-l-accent">
            <h2 className="font-serif text-3xl font-bold text-text-primary mb-4">
              Ready to Book?
            </h2>
            <p className="text-text-secondary mb-6">
              Schedule your mobile detail online in just a few steps.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3 rounded-sm hover:bg-accent-hover transition"
            >
              Book Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
