import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "My car hadn\u2019t been cleaned in months and they made it look new. Very thorough job on the interior.",
    reviewer: "John D.",
    vehicle: "2022 BMW 3 Series",
  },
  {
    quote:
      "They came to my office parking lot and had it done by lunch. Couldn\u2019t be easier.",
    reviewer: "Sarah M.",
    vehicle: "2021 Ford F-150",
  },
  {
    quote:
      "Got the ceramic coating done in November. Still beading water in April.",
    reviewer: "Mike R.",
    vehicle: "2023 Tesla Model 3",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 px-4">
      <span className="section-label absolute top-4 left-4">REVIEWS</span>

      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
          WHAT CLIENTS SAY
        </p>
        <h2 className="font-serif text-4xl font-bold text-text-primary mb-16">
          Real results. Real feedback.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="bg-surface p-8 rounded-sm border-l-3 border-l-accent">
                <p className="text-text-secondary leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-text-primary text-sm font-medium">
                  {testimonial.reviewer}
                </p>
                <p className="text-text-muted text-xs font-mono">
                  {testimonial.vehicle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
