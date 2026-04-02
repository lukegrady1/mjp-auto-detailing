"use client";

import Link from "next/link";
import {
  Car,
  Armchair,
  Star,
  Shield,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/reveal";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Armchair,
  Star,
  Shield,
  Sparkles,
  Lightbulb,
};

export function ServiceCards() {
  return (
    <section id="services" className="relative overflow-hidden py-28 px-4">
      {/* Section watermark */}
      <span className="section-label absolute top-0 right-0 opacity-50">
        SERVICES
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-4xl font-bold text-text-primary">
              Our Services
            </h2>
            <Link
              href="/services"
              className="text-xs font-medium uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
        </Reveal>

        {/* Service cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block bg-surface p-6 rounded-sm border-l-3 border-l-accent/0 hover:border-l-accent transition-all duration-300 group h-full"
                >
                  {Icon && (
                    <Icon className="w-6 h-6 text-accent mb-4" />
                  )}
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-accent text-sm">
                      From ${service.startingPrice}
                    </span>
                    <span className="font-mono text-text-muted text-xs">
                      {service.duration}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
