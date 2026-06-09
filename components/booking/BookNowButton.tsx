"use client";

import { useBooking } from "@/components/booking/BookingProvider";

interface BookNowButtonProps {
  /** Optional service slug to pre-select in the popup. */
  service?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Drop-in replacement for the old `<Link href="/book">` CTAs.
 * Opens the booking popup instead of navigating to a page.
 */
export function BookNowButton({
  service,
  className,
  children,
}: BookNowButtonProps) {
  const { openBooking } = useBooking();
  return (
    <button type="button" onClick={() => openBooking(service)} className={className}>
      {children}
    </button>
  );
}
