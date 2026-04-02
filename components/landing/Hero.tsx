"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function Hero() {
  return (
    <section className="hero-dark relative min-h-[90vh] bg-[#0A0A0A] overflow-hidden">
      {/* MOBILE: image block on top */}
      <div className="relative h-[50vh] md:hidden">
        <Image
          src="/hero.png"
          alt="Detailed car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]" />
      </div>

      {/* DESKTOP: two-column layout */}
      <div className="relative flex flex-col md:flex-row md:min-h-[90vh]">
        {/* LEFT — editorial content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-16 md:py-0 md:w-[55%]">
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-medium uppercase tracking-wide text-[#555555] mb-8"
          >
            EST. 2020 &mdash; WEST BOYLSTON, MA
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-[#EBEBEB]"
          >
            MJP
            <br />
            Auto Detailing
          </motion.h1>

          <motion.div
            {...fadeUp(0.2)}
            className="w-16 h-1 bg-accent my-8"
          />

          <motion.p
            {...fadeUp(0.3)}
            className="text-[#999999] text-lg leading-relaxed max-w-md"
          >
            Mobile detailing across Central Massachusetts. Exterior, interior,
            ceramic coating, and paint correction&nbsp;&mdash; we come to you.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex items-center"
          >
            <Link
              href="/book"
              className="bg-accent text-white text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-sm hover:bg-accent-hover transition"
            >
              Book a Detail
            </Link>
            <Link
              href="/services"
              className="text-[#999999] text-sm font-semibold uppercase tracking-wider hover:text-accent transition ml-6"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — hero image (desktop only) */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%]">
          <Image
            src="/hero.png"
            alt="Detailed car"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
