export type ServiceSlug =
  | "exterior-detail"
  | "interior-detail"
  | "full-detail"
  // | "ceramic-coating"
  | "paint-correction"
  | "headlight-restoration";

export type VehicleCondition = "clean" | "average" | "dirty" | "heavily-soiled";
export type PreferredContact = "phone" | "text" | "email";
export type PreferredTime = "morning" | "afternoon" | "evening";

export interface Service {
  slug: ServiceSlug;
  name: string;
  description: string;
  startingPrice: number;
  duration: string;
  icon: string;
}

export interface BookingFormData {
  // Step 1
  selectedService: ServiceSlug | null;

  // Step 2
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleColor: string;
  vehicleCondition: VehicleCondition | null;
  hasAnimals: boolean;
  hasSmokeOdor: boolean;
  additionalNotes: string;

  // Step 3
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredContact: PreferredContact | null;
  preferredTime: PreferredTime | null;
  zip: string;
}

export const defaultBookingFormData: BookingFormData = {
  selectedService: null,
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleColor: "",
  vehicleCondition: null,
  hasAnimals: false,
  hasSmokeOdor: false,
  additionalNotes: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  preferredContact: null,
  preferredTime: null,
  zip: "",
};
