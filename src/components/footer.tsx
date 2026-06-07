"use client";

import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

import { scrollToSection } from "@/lib/scroll-to";
import { siteConfig, FULL_ADDRESS } from "@/lib/seo";

const programs = [
  { label: "Pra-SD & Calistung", href: "program" },
  { label: "Program SD", href: "program" },
  { label: "Program SMP", href: "program" },
  { label: "Program SMA", href: "program" },
];

const navigation = [
  { label: "Home", href: "home" },
  { label: "Tentang Kami", href: "tentang" },
  { label: "Perjalanan", href: "perjalanan" },
  { label: "Program Belajar", href: "program" },
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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
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

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
              Bimbingan belajar untuk Pra-SD, SD, SMP, dan SMA dengan suasana
              belajar yang nyaman serta pendampingan yang personal.
            </p>
          </div>

          {/* Column 2: Program Belajar */}
          <div>
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Program Belajar
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-5 sm:text-base">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={`#${program.href}`}
                    onClick={(e) => handleNavClick(e, program.href)}
                    className="inline-block transition hover:text-teal-700 hover:translate-x-1"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigasi */}
          <nav aria-label="Navigasi footer">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Navigasi
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-5 sm:text-base">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-block transition hover:text-teal-700 hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Hubungi Kami */}
          <address className="not-italic">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Hubungi Kami
            </h3>

            <div className="mt-4 space-y-4 text-sm text-slate-600 sm:mt-5 sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-700"
                  aria-hidden="true"
                />
                <p className="min-w-0 leading-relaxed">{FULL_ADDRESS}</p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-teal-700"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.phoneInternational}`}
                  className="transition hover:text-teal-700"
                >
                  {siteConfig.phone}
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-700"
                  aria-hidden="true"
                />
                <div className="min-w-0 leading-relaxed">
                  <p>Senin - Sabtu</p>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    08:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500 sm:mt-12 sm:text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
