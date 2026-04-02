"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useBookingForm } from "@/hooks/useBookingForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StepIndicator } from "@/components/funnel/StepIndicator";
import { Step1Service } from "@/components/funnel/Step1Service";
import { Step2Vehicle } from "@/components/funnel/Step2Vehicle";
import { Step3Contact } from "@/components/funnel/Step3Contact";
import { Step4Review } from "@/components/funnel/Step4Review";
import { ConfirmationScreen } from "@/components/funnel/ConfirmationScreen";
import { ServiceSlug } from "@/lib/types";
import { SERVICES } from "@/lib/services";

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

function BookingFunnel() {
  const searchParams = useSearchParams();
  const { step, formData, updateFormData, nextStep, prevStep, submitForm, isSubmitted } =
    useBookingForm();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && SERVICES.some((s) => s.slug === serviceParam)) {
      updateFormData({ selectedService: serviceParam as ServiceSlug });
    }
  }, [searchParams]);

  if (isSubmitted) {
    return <ConfirmationScreen formData={formData} />;
  }

  const direction = 1;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <StepIndicator currentStep={step} totalSteps={4} />

          <div className="mt-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {step === 1 && (
                  <Step1Service
                    selectedService={formData.selectedService}
                    onSelect={(slug) => {
                      updateFormData({ selectedService: slug as ServiceSlug });
                      nextStep();
                    }}
                  />
                )}
                {step === 2 && (
                  <Step2Vehicle
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                )}
                {step === 3 && (
                  <Step3Contact
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={nextStep}
                    onBack={prevStep}
                  />
                )}
                {step === 4 && (
                  <Step4Review
                    formData={formData}
                    onSubmit={submitForm}
                    onBack={prevStep}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-text-secondary">Loading...</div>
        </div>
      }
    >
      <BookingFunnel />
    </Suspense>
  );
}
