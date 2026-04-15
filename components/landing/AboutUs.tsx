import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "500+", label: "Details" },
  { value: "5-Star", label: "Rated" },
  { value: "Fully", label: "Insured" },
];

export function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface py-28 px-4">
      <span className="section-label absolute top-4 left-4">ABOUT</span>

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Content */}
            <div className="md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-wide text-accent mb-4">
                ABOUT US
              </p>
              <h2 className="font-serif text-4xl font-bold text-text-primary mb-8">
                Built on precision and care.
              </h2>

              <p className="text-text-secondary leading-relaxed mb-4">
                MJP Auto Detailing is a mobile detailing service based out of West
                Boylston, Massachusetts. We bring professional-grade equipment and
                products directly to your location — whether that&apos;s your
                driveway, your office, or anywhere in the Worcester County area.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every vehicle gets the same level of care. We use only trusted
                products and take the time to do things right, from a basic wash
                to a full paint correction.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Fully insured. IDA certified. Serving Central Massachusetts.
              </p>

              <div className="flex items-center gap-8 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-xs font-medium uppercase tracking-wider">
                    <span className="text-accent font-bold">{stat.value}</span>{" "}
                    <span className="text-text-secondary">{stat.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="text-xs font-medium uppercase tracking-wider text-accent hover:text-accent-hover transition inline-block"
              >
                Learn more &rarr;
              </Link>
            </div>

            {/* Owner photo */}
            <div className="hidden md:block md:col-span-2">
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#221e1f" }}>
                <Image
                  src="/logo.webp"
                  alt="Matty P's Auto Detailing"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
