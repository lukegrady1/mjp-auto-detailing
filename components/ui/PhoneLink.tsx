"use client";

import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  location: string;
  className?: string;
  children: ReactNode;
  phone?: string;
};

const DEFAULT_PHONE = "+17742870447";

export function PhoneLink({ location, className, children, phone = DEFAULT_PHONE }: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={() => trackEvent("phone_click", { location, phone_number: phone })}
    >
      {children}
    </a>
  );
}
