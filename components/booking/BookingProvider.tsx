"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Check, X } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { formatPhone } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/znW1EQZJ5ZYXpD8jCyMN/webhook-trigger/lMqob2sXuBfevEi4sQLC";

interface BookingContextValue {
  /** Open the booking popup, optionally pre-selecting a service by slug. */
  openBooking: (serviceSlug?: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}

type Status = "idle" | "submitting" | "success" | "error";

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    service?: string;
  }>({});

  const openBooking = useCallback((serviceSlug?: string) => {
    const preselected = SERVICES.find((s) => s.slug === serviceSlug);
    setServices(preselected ? [preselected.name] : []);
    setName("");
    setPhone("");
    setErrors({});
    setStatus("idle");
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleService = (serviceName: string) => {
    setServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeBooking]);

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length !== 10)
      next.phone = "Please enter a valid phone number.";
    if (services.length === 0)
      next.service = "Please choose at least one service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");

    const trimmed = name.trim();
    const firstSpace = trimmed.indexOf(" ");
    const firstName = firstSpace === -1 ? trimmed : trimmed.slice(0, firstSpace);
    const lastName = firstSpace === -1 ? "" : trimmed.slice(firstSpace + 1).trim();
    const serviceList = services.join(", ");
    const note = `New booking request\nName: ${trimmed}\nPhone: ${phone}\nService(s): ${serviceList}`;

    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmed,
          fullName: trimmed,
          firstName,
          lastName,
          phone,
          selectedService: serviceList,
          selectedServices: services,
          note,
        }),
      });
      trackEvent("generate_lead", { service: services.join(", ") });
      setStatus("success");
    } catch (err) {
      console.error("Failed to send to GoHighLevel:", err);
      setStatus("error");
    }
  };

  const fieldClasses =
    "w-full h-12 rounded-sm border bg-background text-text-primary px-4 text-base placeholder:text-text-muted outline-none transition focus:border-accent";

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeBooking}
          />

          {/* Card */}
          <div className="relative w-full max-w-md rounded-md bg-surface border border-border p-8 shadow-2xl">
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close"
              className="absolute right-4 top-4 text-text-muted hover:text-text-primary transition"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="text-center py-6">
                <h2
                  id="booking-modal-title"
                  className="font-serif text-3xl font-bold text-text-primary mb-3"
                >
                  Thanks, {name.trim().split(" ")[0]}!
                </h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  We&apos;ve got your request and will reach out shortly to lock
                  in the details.
                </p>
                <button
                  type="button"
                  onClick={closeBooking}
                  className="bg-accent text-white text-sm font-semibold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-accent-hover transition"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="booking-modal-title"
                  className="font-serif text-3xl font-bold text-text-primary mb-2"
                >
                  Book Now
                </h2>
                <p className="text-text-secondary mb-6">
                  Tell us how to reach you and we&apos;ll be in touch.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-text-secondary text-sm mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={`${fieldClasses} ${
                        errors.name ? "border-danger" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-danger text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-text-secondary text-sm mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                      placeholder="(555) 123-4567"
                      className={`${fieldClasses} ${
                        errors.phone ? "border-danger" : "border-border"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-danger text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service(s) */}
                  <div>
                    <span className="block text-text-secondary text-sm mb-2">
                      Service{" "}
                      <span className="text-text-muted">
                        (select all that apply)
                      </span>
                    </span>
                    <div className="grid gap-2">
                      {SERVICES.map((s) => {
                        const selected = services.includes(s.name);
                        return (
                          <button
                            key={s.slug}
                            type="button"
                            onClick={() => toggleService(s.name)}
                            aria-pressed={selected}
                            className={`flex items-center justify-between gap-3 rounded-sm border px-4 py-3 text-left transition ${
                              selected
                                ? "border-accent bg-accent/5"
                                : "border-border hover:border-accent/50"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border ${
                                  selected
                                    ? "border-accent bg-accent text-white"
                                    : "border-border"
                                }`}
                              >
                                {selected && <Check className="h-3.5 w-3.5" />}
                              </span>
                              <span className="text-sm font-medium text-text-primary">
                                {s.name}
                              </span>
                            </span>
                            <span className="text-sm text-text-muted whitespace-nowrap">
                              from ${s.startingPrice}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.service && (
                      <p className="text-danger text-sm mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-danger text-sm">
                      Something went wrong. Please try again or call us at (774)
                      287-0447.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-accent text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-accent-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Request Booking"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
