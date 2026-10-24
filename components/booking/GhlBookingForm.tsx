"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/analytics";

// The Book Now popup renders a GoHighLevel form served from the client's
// branded domain (forms.mjpautodetailing.com → GHL). Fields, spam protection,
// the owner notification email, the lead confirmation workflow and the
// thank-you message are all managed inside the GHL sub-account
// (MJP Auto Detailing, location znW1EQZJ5ZYXpD8jCyMN). This component only
// renders the iframe and loads GHL's form_embed.js, which listens for the
// form's postMessage and auto-resizes the iframe to fit.
const FORM_HOST = "https://forms.mjpautodetailing.com";
const EMBED_SCRIPT = `${FORM_HOST}/js/form_embed.js`;

export const GHL_BOOKING_FORM = {
  id: "hYs9wqAE431I0pVFdJwi",
  name: "Website Booking Form",
  // Name, Phone, Email, five service checkboxes, button.
  height: 640,
} as const;

export function GhlBookingForm() {
  const { id, name, height } = GHL_BOOKING_FORM;
  const iframeId = `inline-${id}`;

  // After a successful submit, GHL's form posts
  // ["set-sticky-contacts", "_ud", "<json of the saved contact>"] to the
  // parent window (verified 2026-10-23 against the live form). Use it to keep
  // the GA4 generate_lead event the old in-page form used to send. Fire at
  // most once per mount so iframe resizes or repeated messages don't double
  // count.
  useEffect(() => {
    let tracked = false;
    const onMessage = (event: MessageEvent) => {
      if (tracked || event.origin !== FORM_HOST) return;
      const data = event.data;
      if (
        Array.isArray(data) &&
        data[0] === "set-sticky-contacts" &&
        data[1] === "_ud" &&
        typeof data[2] === "string" &&
        data[2].includes('"id"')
      ) {
        tracked = true;
        trackEvent("generate_lead", { source: "ghl_booking_form" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <iframe
        src={`${FORM_HOST}/widget/form/${id}`}
        id={iframeId}
        title={name}
        style={{
          width: "100%",
          minHeight: height,
          border: "none",
          display: "block",
          background: "transparent",
          colorScheme: "normal",
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={name}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={id}
      />
      <Script src={EMBED_SCRIPT} />
    </>
  );
}
