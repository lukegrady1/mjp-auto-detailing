"use client";

import { SERVICES } from "@/lib/services";
import {
  Car,
  Armchair,
  Star,
  Shield,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import type React from "react";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Armchair,
  Star,
  Shield,
  Sparkles,
  Lightbulb,
};

interface Step1ServiceProps {
  selectedService: string | null;
  onSelect: (slug: string) => void;
}

export function Step1Service({ selectedService, onSelect }: Step1ServiceProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-center mb-8 text-text-primary">
        What can we do for you?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => {
          const isSelected = selectedService === service.slug;
          const Icon = iconMap[service.icon];

          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => onSelect(service.slug)}
              className={`bg-surface rounded-sm p-6 border-l-3 cursor-pointer transition-all duration-200 text-left ${
                isSelected
                  ? "border-l-accent bg-surface-raised"
                  : "border-l-transparent hover:border-l-accent"
              }`}
            >
              {Icon && <Icon className="text-accent w-8 h-8 mb-3" />}
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {service.name}
              </h3>
              <p className="text-text-secondary text-sm mb-3">
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
            </button>
          );
        })}
      </div>
    </div>
  );
}
