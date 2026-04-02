import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-serif text-3xl mb-4">Thank You!</h1>
          <p className="text-text-secondary mb-8">
            We&apos;ll be in touch within 24 hours to confirm your appointment.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-hover transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
