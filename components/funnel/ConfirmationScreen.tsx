"use client";

import { BookingFormData } from "@/lib/types";
import { SERVICES } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface ConfirmationScreenProps {
  formData: BookingFormData;
  onReset: () => void;
}

export function ConfirmationScreen({ formData, onReset }: ConfirmationScreenProps) {
  const service = SERVICES.find((s) => s.slug === formData.selectedService);

  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-6" />

        <h2 className="font-serif text-3xl font-bold mb-4 text-text-primary">
          Request received, {formData.firstName}.
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          We&apos;ll reach out within 24 hours to confirm your appointment.
        </p>

        <div className="bg-surface rounded-sm p-6 border-l-3 border-l-accent mb-8 text-left">
          {service && (
            <p className="text-text-primary font-semibold">{service.name}</p>
          )}
          <p className="text-text-secondary">
            {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
          </p>
          {formData.preferredContact && (
            <p className="text-text-muted mt-2">
              Preferred contact: {formData.preferredContact}
            </p>
          )}
        </div>

        <Link
          href="/"
          className="inline-block bg-accent text-white text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-accent-hover transition"
        >
          Back to Home
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="text-text-muted text-sm font-semibold uppercase tracking-wider hover:text-text-primary transition mt-4 block mx-auto"
        >
          Book another service
        </button>
      </motion.div>
    </div>
  );
}
