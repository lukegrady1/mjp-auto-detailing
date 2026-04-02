"use client";

import { BookingFormData } from "@/lib/types";
import { SERVICES } from "@/lib/services";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface Step4ReviewProps {
  formData: BookingFormData;
  onSubmit: () => void;
  onBack: () => void;
}

export function Step4Review({ formData, onSubmit, onBack }: Step4ReviewProps) {
  const service = SERVICES.find((s) => s.slug === formData.selectedService);

  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-center mb-8 text-text-primary">
        Review your request.
      </h2>

      <div className="bg-surface rounded-sm p-8 border-l-3 border-l-accent max-w-2xl mx-auto">
        {/* Service Section */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-2">
            Service
          </p>
          <p className="text-text-primary text-lg font-semibold">
            {service?.name}
          </p>
          {service && (
            <p className="font-mono text-accent text-sm">Starting at ${service.startingPrice}</p>
          )}
        </div>

        <Separator className="my-6" />

        {/* Vehicle Section */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-2">
            Vehicle
          </p>
          <p className="text-text-primary text-lg">
            {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
          </p>
          <p className="text-text-secondary">
            {formData.vehicleColor}
            {formData.vehicleCondition && ` \u00B7 ${formData.vehicleCondition}`}
          </p>
          {(formData.hasAnimals || formData.hasSmokeOdor) && (
            <div className="flex gap-2 mt-2">
              {formData.hasAnimals && (
                <Badge variant="secondary">Has pets</Badge>
              )}
              {formData.hasSmokeOdor && (
                <Badge variant="secondary">Smoke odor</Badge>
              )}
            </div>
          )}
          {formData.additionalNotes && (
            <p className="text-text-muted italic mt-2">
              {formData.additionalNotes}
            </p>
          )}
        </div>

        <Separator className="my-6" />

        {/* Contact Section */}
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted mb-2">
            Contact
          </p>
          <p className="text-text-primary text-lg">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="text-text-secondary">{formData.phone}</p>
          <p className="text-text-secondary">{formData.email}</p>
          {formData.preferredContact && formData.preferredTime && (
            <p className="text-text-muted mt-1">
              Preferred: {formData.preferredContact} in the{" "}
              {formData.preferredTime}
            </p>
          )}
          {formData.zip && (
            <p className="text-text-secondary mt-1">{formData.zip}</p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8">
          <button
            type="button"
            onClick={onBack}
            className="text-text-muted text-sm font-semibold uppercase tracking-wider hover:text-text-primary transition mb-3"
          >
            Go back
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="bg-accent text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-sm hover:bg-accent-hover transition w-full"
          >
            Submit Request
          </button>
          <p className="text-text-muted text-xs text-center mt-4">
            By submitting, you agree to be contacted about your detailing
            request. No payment is collected at this time.
          </p>
        </div>
      </div>
    </div>
  );
}
