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

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const submitForm = () => {
    // TODO: trigger notification here (SMS/email — future phase)
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setFormData(defaultBookingFormData);
    setIsSubmitted(false);
  };

  return { step, formData, updateFormData, nextStep, prevStep, submitForm, isSubmitted, resetForm };
}
