import { Check } from "lucide-react";

const STEP_LABELS = ["Service", "Vehicle", "Contact", "Review"];

export function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center w-full">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;

        return (
          <div key={step} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-sm font-mono text-xs transition-colors ${
                  isCompleted
                    ? "bg-accent text-white"
                    : isActive
                      ? "bg-accent text-white"
                      : "border border-border text-text-muted"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step}
              </div>
              <span
                className={`mt-1.5 text-[10px] font-medium uppercase tracking-[0.2em] ${
                  isActive ? "text-accent" : "text-text-muted"
                }`}
              >
                {STEP_LABELS[i] ?? `Step ${step}`}
              </span>
            </div>

            {/* Connecting line */}
            {step < totalSteps && (
              <div
                className={`h-px w-8 sm:w-12 md:w-16 mx-1 ${
                  step < currentStep ? "bg-accent" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
