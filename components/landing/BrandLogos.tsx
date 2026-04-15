"use client";

import { Reveal } from "@/components/ui/reveal";

const brands = [
  // "Ceramic Pro",
  "P&S",
  "Gyeon",
  "Chemical Guys",
  "Meguiar\u2019s",
];

export function BrandLogos() {
  return (
    <section className="py-12 px-4 border-y border-border">
      <Reveal>
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-muted text-center mb-6">
            Trusted Products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {brands.map((brand, i) => (
              <span key={brand} className="flex items-center gap-8">
                <span className="text-xs text-text-muted tracking-wider font-medium">
                  {brand}
                </span>
                {i < brands.length - 1 && (
                  <span className="text-text-muted/30 text-[6px]" aria-hidden="true">
                    &#9679;
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
