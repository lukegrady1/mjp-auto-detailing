import { z } from "zod";

export const step1Schema = z.object({
  selectedService: z.string().min(1, "Please select a service"),
});

export const step2Schema = z.object({
  vehicleYear: z.string().regex(/^\d{4}$/, "Enter a valid year"),
  vehicleMake: z.string().min(1, "Required"),
  vehicleModel: z.string().min(1, "Required"),
  vehicleColor: z.string().min(1, "Required"),
  vehicleCondition: z.enum(["clean", "average", "dirty", "heavily-soiled"]),
});

export const step3Schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Use format (xxx) xxx-xxxx"),
  email: z.string().email("Enter a valid email"),
  preferredContact: z.enum(["phone", "text", "email"]),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
});
