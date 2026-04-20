"use client";

import { useState } from "react";
import { BookingFormData, defaultBookingFormData } from "@/lib/types";

export function useBookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(defaultBookingFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (fields: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => {
    setStep((s) => Math.min(s + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = async () => {
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/znW1EQZJ5ZYXpD8jCyMN/webhook-trigger/lMqob2sXuBfevEi4sQLC",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            zip: formData.zip,
            selectedService: formData.selectedService,
            vehicleYear: formData.vehicleYear,
            vehicleMake: formData.vehicleMake,
            vehicleModel: formData.vehicleModel,
            vehicleColor: formData.vehicleColor,
            vehicleCondition: formData.vehicleCondition,
            hasAnimals: formData.hasAnimals,
            hasSmokeOdor: formData.hasSmokeOdor,
            additionalNotes: formData.additionalNotes,
            preferredContact: formData.preferredContact,
            preferredTime: formData.preferredTime,
          }),
        }
      );
    } catch (err) {
      console.error("Failed to send to GoHighLevel:", err);
    }
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setFormData(defaultBookingFormData);
    setIsSubmitted(false);
  };

  return { step, formData, updateFormData, nextStep, prevStep, submitForm, isSubmitted, resetForm };
}
