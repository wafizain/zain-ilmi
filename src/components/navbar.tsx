"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToSection, NAV_OFFSET } from "@/lib/scroll-to";
import { siteConfig } from "@/lib/seo";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Program", href: "program" },
  { label: "Testimoni", href: "testimoni" },
  { label: "Lokasi", href: "lokasi" },
  { label: "FAQ", href: "faq" },
  { label: "Kontak", href: "kontak" },
];

const sectionIds = navLinks.map((l) => l.href);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds, NAV_OFFSET);

  // Lock body scroll saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Tambahkan shadow ringan saat sudah di-scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler dengan offset navbar
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      setIsOpen(false);
      // Beri jeda sangat singkat agar transisi close menu mobile mulus
      setTimeout(() => scrollToSection(id), 50);
    },
    [],
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        isScrolled
          ? "border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl"
          : "border-white/20 bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center gap-2"
          aria-label="Zain Ilmi - Beranda"
        >
          <div className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-44">
            <Image
              src="/logo.svg"
              alt="Zain Ilmi Logo"
              fill
              priority
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center md:flex">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-teal-700 lg:px-4"
                  >
                    <span
                      className={
                        isActive ? "text-teal-700" : "text-slate-600"
                      }
                    >
                      {link.label}
                    </span>

                    {/* Active indicator - layoutId untuk shared transition antar link */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        aria-hidden="true"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-teal-700 lg:inset-x-3"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Daftar bimbel Zain Ilmi via WhatsApp"
            className="hidden rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98] md:inline-flex lg:px-6 lg:py-3"
          >
            Daftar Sekarang
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition active:scale-95 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeId === link.href;
                return (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition active:scale-[0.99] ${
                      isActive
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-700" />
                    )}
                  </a>
                );
              })}

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                aria-label="Daftar bimbel Zain Ilmi via WhatsApp"
                className="mt-3 w-full rounded-full bg-teal-700 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98]"
              >
                Daftar Sekarang
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
