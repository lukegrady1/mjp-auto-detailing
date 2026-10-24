"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { X } from "lucide-react";
import { GhlBookingForm } from "@/components/booking/GhlBookingForm";

interface BookingContextValue {
  /**
   * Open the booking popup. The service slug is accepted for backwards
   * compatibility with the old in-page form; the GoHighLevel form lets the
   * visitor tick the services themselves.
   */
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

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

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
          <div className="relative w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto rounded-md bg-surface border border-border p-8 shadow-2xl">
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close"
              className="absolute right-4 top-4 text-text-muted hover:text-text-primary transition"
            >
              <X className="h-5 w-5" />
            </button>

            <h2
              id="booking-modal-title"
              className="font-serif text-3xl font-bold text-text-primary mb-2"
            >
              Book Now
            </h2>
            <p className="text-text-secondary mb-6">
              Tell us how to reach you and we&apos;ll be in touch.
            </p>

            {/* GoHighLevel "Website Booking Form" (Name, Phone, Email, Services) */}
            <GhlBookingForm />
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
