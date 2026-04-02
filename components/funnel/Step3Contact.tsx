"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { step3Schema } from "@/lib/validation";
import { formatPhone } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Phone,
  MessageSquare,
  Mail,
  Sunrise,
  Sun,
  Moon,
} from "lucide-react";
import type { BookingFormData, PreferredContact, PreferredTime } from "@/lib/types";

interface Step3ContactProps {
  formData: BookingFormData;
  updateFormData: (fields: Partial<BookingFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

type Step3Fields = z.infer<typeof step3Schema>;

const contactMethods: {
  value: PreferredContact;
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "phone", label: "Phone", icon: Phone },
  { value: "text", label: "Text", icon: MessageSquare },
  { value: "email", label: "Email", icon: Mail },
];

const timeSlots: {
  value: PreferredTime;
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "morning", label: "Morning", icon: Sunrise },
  { value: "afternoon", label: "Afternoon", icon: Sun },
  { value: "evening", label: "Evening", icon: Moon },
];

export function Step3Contact({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Step3ContactProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Step3Fields>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      preferredContact: formData.preferredContact ?? undefined,
      preferredTime: formData.preferredTime ?? undefined,
      zip: formData.zip,
    },
  });

  const selectedContact = watch("preferredContact");
  const selectedTime = watch("preferredTime");

  const onSubmit = (data: Step3Fields) => {
    updateFormData(data);
    onNext();
  };

  const inputClasses =
    "bg-surface-raised border-border text-text-primary rounded-sm placeholder:text-text-muted h-12";

  return (
    <div>
      <h2 className="font-serif text-3xl font-bold text-center mb-8 text-text-primary">
        How do we reach you?
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: First Name + Last Name */}
        <div className="flex gap-4">
          <div className="flex-1">
            <Label className="text-text-secondary text-sm mb-2">First Name</Label>
            <Input
              {...register("firstName")}
              placeholder="First name"
              className={inputClasses}
            />
            {errors.firstName && (
              <p className="text-danger text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <Label className="text-text-secondary text-sm mb-2">Last Name</Label>
            <Input
              {...register("lastName")}
              placeholder="Last name"
              className={inputClasses}
            />
            {errors.lastName && (
              <p className="text-danger text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone */}
        <div>
          <Label className="text-text-secondary text-sm mb-2">Phone</Label>
          <Input
            {...register("phone")}
            placeholder="(555) 123-4567"
            type="tel"
            className={inputClasses}
            onChange={(e) => {
              const formatted = formatPhone(e.target.value);
              setValue("phone", formatted, { shouldValidate: true });
            }}
          />
          {errors.phone && (
            <p className="text-danger text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Row 3: Email */}
        <div>
          <Label className="text-text-secondary text-sm mb-2">Email</Label>
          <Input
            {...register("email")}
            placeholder="you@example.com"
            type="email"
            className={inputClasses}
          />
          {errors.email && (
            <p className="text-danger text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Row 4: ZIP */}
        <div>
          <Label className="text-text-secondary text-sm mb-2">ZIP Code</Label>
          <div className="w-1/3">
            <Input
              {...register("zip")}
              placeholder="01583"
              inputMode="numeric"
              maxLength={5}
              className={inputClasses}
            />
          </div>
          {errors.zip && (
            <p className="text-danger text-sm mt-1">{errors.zip.message}</p>
          )}
          <p className="text-text-muted text-xs italic mt-2">
            We currently serve West Boylston, Worcester, Holden, Sterling, and
            surrounding areas.
          </p>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <Label className="text-xs font-medium uppercase tracking-wide text-text-muted mb-3">
            Preferred Contact Method
          </Label>
          <div className="grid grid-cols-3 gap-3">
            {contactMethods.map(({ value, label, icon: Icon }) => {
              const isSelected = selectedContact === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setValue("preferredContact", value, {
                      shouldValidate: true,
                    })
                  }
                  className={`bg-surface rounded-sm p-4 border cursor-pointer text-center transition-all duration-200 ${
                    isSelected
                      ? "border-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mx-auto mb-2 ${
                      isSelected ? "text-accent" : "text-text-muted"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      isSelected ? "text-accent" : "text-text-secondary"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.preferredContact && (
            <p className="text-danger text-sm mt-1">
              {errors.preferredContact.message}
            </p>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <Label className="text-xs font-medium uppercase tracking-wide text-text-muted mb-3">
            Preferred Time
          </Label>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map(({ value, label, icon: Icon }) => {
              const isSelected = selectedTime === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setValue("preferredTime", value, { shouldValidate: true })
                  }
                  className={`bg-surface rounded-sm p-4 border cursor-pointer text-center transition-all duration-200 ${
                    isSelected
                      ? "border-accent"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mx-auto mb-2 ${
                      isSelected ? "text-accent" : "text-text-muted"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      isSelected ? "text-accent" : "text-text-secondary"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.preferredTime && (
            <p className="text-danger text-sm mt-1">
              {errors.preferredTime.message}
            </p>
          )}
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-between items-center pt-4">
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
    </div>
  );
}
