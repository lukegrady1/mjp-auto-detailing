import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function BookingCTA() {
  return (
    <section className="bg-surface py-28 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
            READY?
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Book your detail.
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            Pick a service. Tell us about your car. We handle the rest.
          </p>
          <Link
            href="/book"
            className="inline-block bg-accent text-white text-sm font-semibold uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-accent-hover transition"
          >
            Get Started
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
