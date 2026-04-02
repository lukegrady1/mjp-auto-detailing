"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { step2Schema } from "@/lib/validation";
import { BookingFormData, VehicleCondition } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  CircleCheck,
  Circle,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";

interface Step2VehicleProps {
  formData: BookingFormData;
  updateFormData: (fields: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

type Step2FormData = z.infer<typeof step2Schema>;

const conditionOptions: {
  value: VehicleCondition;
  label: string;
  description: string;
  icon: React.ElementType;
  color: string;
}[] = [
  {
    value: "clean",
    label: "Clean",
    description: "Light use, mostly tidy",
    icon: CircleCheck,
    color: "text-green-400",
  },
  {
    value: "average",
    label: "Average",
    description: "Normal wear and some mess",
    icon: Circle,
    color: "text-yellow-400",
  },
  {
    value: "dirty",
    label: "Dirty",
    description: "Needs a solid clean",
    icon: AlertCircle,
    color: "text-orange-400",
  },
  {
    value: "heavily-soiled",
    label: "Very Dirty",
    description: "Kids, pets, or long neglect",
    icon: AlertTriangle,
    color: "text-red-400",
  },
];

export function Step2Vehicle({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Step2VehicleProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      vehicleYear: formData.vehicleYear,
      vehicleMake: formData.vehicleMake,
      vehicleModel: formData.vehicleModel,
      vehicleColor: formData.vehicleColor,
      vehicleCondition:
        (formData.vehicleCondition as Step2FormData["vehicleCondition"]) ??
        undefined,
    },
  });

  const selectedCondition = watch("vehicleCondition");
  const hasAnimals = formData.hasAnimals;
  const hasSmokeOdor = formData.hasSmokeOdor;
  const additionalNotes = formData.additionalNotes;

  const onSubmit = (data: Step2FormData) => {
    updateFormData({
      ...data,
      hasAnimals,
      hasSmokeOdor,
      additionalNotes,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-serif text-3xl font-bold text-center mb-8 text-text-primary">
        Tell us about your vehicle.
      </h2>

      {/* Row 1: Year, Make, Model */}
      <div className="flex gap-4 mb-4">
        <div className="w-1/3">
          <Label htmlFor="vehicleYear" className="text-text-secondary text-sm mb-1.5">
            Year
          </Label>
          <Input
            id="vehicleYear"
            placeholder="2024"
            {...register("vehicleYear")}
            className="bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted"
          />
          {errors.vehicleYear && (
            <p className="text-danger text-sm mt-1">
              {errors.vehicleYear.message}
            </p>
          )}
        </div>
        <div className="w-1/3">
          <Label htmlFor="vehicleMake" className="text-text-secondary text-sm mb-1.5">
            Make
          </Label>
          <Input
            id="vehicleMake"
            placeholder="Toyota"
            {...register("vehicleMake")}
            className="bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted"
          />
          {errors.vehicleMake && (
            <p className="text-danger text-sm mt-1">
              {errors.vehicleMake.message}
            </p>
          )}
        </div>
        <div className="w-1/3">
          <Label htmlFor="vehicleModel" className="text-text-secondary text-sm mb-1.5">
            Model
          </Label>
          <Input
            id="vehicleModel"
            placeholder="Camry"
            {...register("vehicleModel")}
            className="bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted"
          />
          {errors.vehicleModel && (
            <p className="text-danger text-sm mt-1">
              {errors.vehicleModel.message}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Color */}
      <div className="mb-6">
        <Label htmlFor="vehicleColor" className="text-text-secondary text-sm mb-1.5">
          Color
        </Label>
        <Input
          id="vehicleColor"
          placeholder="Black"
          {...register("vehicleColor")}
          className="bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted"
        />
        {errors.vehicleColor && (
          <p className="text-danger text-sm mt-1">
            {errors.vehicleColor.message}
          </p>
        )}
      </div>

      {/* Vehicle Condition */}
      <div className="mb-6">
        <Label className="text-xs font-medium uppercase tracking-wide text-text-muted mb-3">
          Vehicle Condition
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {conditionOptions.map((option) => {
            const isSelected = selectedCondition === option.value;
            const Icon = option.icon;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  setValue("vehicleCondition", option.value, {
                    shouldValidate: true,
                  })
                }
                className={`bg-surface rounded-sm p-4 border cursor-pointer text-center transition-all duration-200 ${
                  isSelected
                    ? "border-accent bg-surface-raised"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <Icon className={`${option.color} w-6 h-6 mx-auto mb-2`} />
                <p className="text-text-primary font-medium text-sm">
                  {option.label}
                </p>
                <p className="text-text-muted text-xs mt-1">
                  {option.description}
                </p>
              </button>
            );
          })}
        </div>
        {errors.vehicleCondition && (
          <p className="text-danger text-sm mt-1">
            {errors.vehicleCondition.message}
          </p>
        )}
      </div>

      {/* Toggle Switches */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between bg-surface rounded-sm p-4 border border-border">
          <Label className="text-text-primary cursor-pointer">
            Do you have pets?
          </Label>
          <Switch
            checked={hasAnimals}
            onCheckedChange={(checked: boolean) =>
              updateFormData({ hasAnimals: checked })
            }
          />
        </div>
        <div className="flex items-center justify-between bg-surface rounded-sm p-4 border border-border">
          <Label className="text-text-primary cursor-pointer">
            Any smoke odor?
          </Label>
          <Switch
            checked={hasSmokeOdor}
            onCheckedChange={(checked: boolean) =>
              updateFormData({ hasSmokeOdor: checked })
            }
          />
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mb-8">
        <Label
          htmlFor="additionalNotes"
          className="text-text-secondary text-sm mb-1.5"
        >
          Anything else we should know?
        </Label>
        <Textarea
          id="additionalNotes"
          placeholder="Special requests, problem areas, etc."
          value={additionalNotes}
          onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
          className="bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted"
        />
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-text-muted text-sm font-semibold uppercase tracking-wider hover:text-text-primary transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-accent text-white text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-accent-hover transition"
        >
          Next
        </button>
      </div>
    </form>
  );
}
