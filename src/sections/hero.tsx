"use client";

import Image from "next/image";
import { MessageCircle, ChevronDown } from "lucide-react";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/seo";
import { scrollToSection } from "@/lib/scroll-to";

export default function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSection("perjalanan");
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 sm:pt-20"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-teal-100/40 via-blue-100/40 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:grid lg:min-h-[85vh] lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pt-12 lg:pb-20">
        {/* Mobile-First Content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          {/* Illustration - Mobile Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 w-full max-w-xs sm:mb-10 sm:max-w-sm lg:hidden"
            aria-hidden="true"
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/ilustrasi_hero (2).svg"
                alt="Ilustrasi suasana belajar di Zain Ilmi"
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="hero-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Belajar Lebih Nyaman,{" "}
            <span className="text-teal-700"> Didampingi Hingga Paham</span>
          </motion.h1>

          {/* Keyword context for SEO (visually hidden) */}
          <p className="sr-only">
            Zain Ilmi adalah bimbel di Andir, Bandung untuk Pra-SD, calistung,
            SD, SMP, dan SMA.
          </p>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg md:text-xl"
          >
            Bimbingan belajar untuk Pra-SD hingga SMA di Andir, Bandung dengan pendampingan personal, jam belajar yang fleksibel, dan pengalaman mengajar lebih dari 17 tahun.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4 lg:flex-row"
          >
            {/* Primary CTA - Explore */}
            <button
              onClick={handleExploreClick}
              aria-label="Jelajahi lebih lanjut tentang Zain Ilmi"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30 active:scale-[0.98] sm:text-lg lg:w-auto lg:px-8"
            >
              Explore
              <ChevronDown size={20} aria-hidden="true" className="animate-bounce" />
            </button>

            {/* Secondary CTA - WhatsApp */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat dengan Zain Ilmi via WhatsApp"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] sm:text-lg lg:w-auto lg:px-8"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Chat WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Desktop Illustration - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/ilustrasi_hero (2).svg"
              alt="Ilustrasi suasana belajar di Zain Ilmi"
              fill
              priority
              sizes="50vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
