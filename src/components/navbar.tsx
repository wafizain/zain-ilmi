"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Program", href: "#program" },
  { label: "Tentang", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={handleClose}
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
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 md:inline-flex lg:px-6 lg:py-3">
            Konsultasi
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition active:scale-95 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleClose}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 active:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={handleClose}
                className="mt-3 w-full rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98]"
              >
                Konsultasi
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
