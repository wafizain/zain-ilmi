"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

import { scrollToSection } from "@/lib/scroll-to";
import { siteConfig, FULL_ADDRESS } from "@/lib/seo";

const footerNav = [
  { label: "Home", href: "home" },
  { label: "Program", href: "program" },
  { label: "Galeri", href: "galeri" },
  { label: "Testimoni", href: "testimoni" },
  { label: "FAQ", href: "faq" },
];

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer
      className="border-t border-slate-200 bg-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:py-14 md:grid-cols-4 md:py-16 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="inline-block"
            aria-label={`${siteConfig.name} - Beranda`}
          >
            <div className="relative h-10 w-32 sm:h-12 sm:w-40">
              <Image
                src="/logo.svg"
                alt={`${siteConfig.name} Logo`}
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-contain object-left"
              />
            </div>
          </a>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">
            {siteConfig.longDescription}
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigasi footer">
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Navigasi
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-6 sm:space-y-4 sm:text-base">
            {footerNav.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="transition hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic">
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Kontak
          </h3>

          <div className="mt-4 space-y-4 text-sm text-slate-600 sm:mt-6 sm:space-y-5 sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-teal-700"
                aria-hidden="true"
              />
              <p className="min-w-0">{FULL_ADDRESS}</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={18}
                className="shrink-0 text-teal-700"
                aria-hidden="true"
              />
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="break-all transition hover:text-teal-700"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </address>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 sm:py-6 sm:text-sm">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
