import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "/book" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-xl font-bold text-text-primary">
              MJP Auto Detailing
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              Premium auto detailing services in Central Massachusetts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-text-secondary">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-wider text-text-muted hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-text-secondary">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17742870447"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-text-secondary transition"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  (774) 287-0447
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-text-muted">
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                5 Weber Ln, Northborough, MA 01532
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mjpdetails/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-text-secondary transition"
                >
                  <FaInstagram className="h-4 w-4 flex-shrink-0 text-accent" />
                  @mjpdetails
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mattypautodetail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-text-secondary transition"
                >
                  <FaFacebook className="h-4 w-4 flex-shrink-0 text-accent" />
                  MJP Auto Detailing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border pt-6 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MJP Auto Detailing. All rights reserved.
          </p>
          <p className="text-xs text-text-muted mt-2">
            Website by{" "}
            <a
              href="https://gradydigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition"
            >
              Grady Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
