import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // TODO: Phase 2 — send confirmation SMS via Twilio
  // TODO: Phase 2 — send confirmation email via Resend
  // TODO: Phase 2 — save to database (Supabase or Prisma)

  console.log("Booking received:", body);

  return NextResponse.json({ success: true, message: "Booking received." });
}
