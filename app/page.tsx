import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AboutUs } from "@/components/landing/AboutUs";
import { ServiceCards } from "@/components/landing/ServiceCards";
import { Testimonials } from "@/components/landing/Testimonials";
import { BookingCTA } from "@/components/landing/BookingCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ServiceCards />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
