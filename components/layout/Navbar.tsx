"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border" style={{ backgroundColor: "#221e1f" }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/mjp-auto-detailing/logo.webp"
            alt="Matty P's Auto Detailing"
            width={180}
            height={180}
            priority
          />
        </Link>

        {/* Desktop: nav links + phone + CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-white hover:text-accent transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:+17742870447"
            className="flex items-center gap-2 font-mono text-sm text-white hover:text-accent transition"
          >
            <Phone className="w-4 h-4" />
            (774) 287-0447
          </a>

          <Link
            href="/book"
            className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-hover transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 border-t border-white/20 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-accent transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-2">
            <a
              href="tel:+17742870447"
              className="flex items-center gap-2 font-mono text-sm text-white"
            >
              <Phone className="w-4 h-4" />
              (774) 287-0447
            </a>
          </li>
          <li className="pt-2">
            <Link
              href="/book"
              className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-accent-hover transition"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
