"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Users,
  Clock,
  MessageCircle,
  Check,
  ChevronRight,
  Sparkles,
  MapPin,
  Star,
  Quote,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/seo";
import { calistungFaqs } from "./faqs";

/* ------------------------------------------------------------------ */
/*  Accordion Sub-component                                             */
/* ------------------------------------------------------------------ */

function CalistungFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {calistungFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-btn-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
              isOpen
                ? "border-teal-200 shadow-md shadow-teal-700/5"
                : "border-slate-200 shadow-sm hover:border-slate-300"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span
                  className={`text-sm font-semibold leading-snug sm:text-base ${
                    isOpen ? "text-teal-700" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-teal-700 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const trustIndicators = [
  "Pendampingan personal",
  "Metode Belajar Menyenangkan",
  "Jadwal fleksibel",
  "Area Andir dan sekitarnya"
];

const socialProofAreas = [
  "Andir",
  "Maleber",
  "Garuda",
  "Dunguscariang",
  "Ciroyom",
];

const whyFeatures = [
  // ---- FEATURED (top row) ----
  {
    icon: Users,
    title: "Pendampingan Personal",
    description:
      "Setiap anak memiliki kemampuan belajar yang berbeda. Tutor memberikan arahan dan perhatian sesuai kebutuhan masing-masing siswa.",
    featured: true,
    badge: "Unggulan",
    color: "text-teal-700",
    bg: "bg-teal-50",
    accentBg: "bg-teal-700",
    accentText: "text-white",
    border: "border-teal-200",
    shadow: "shadow-teal-100/60",
  },
  {
    icon: Sparkles,
    title: "Belajar dengan Cara Menyenangkan",
    description:
      "Aktivitas belajar dirancang agar anak lebih antusias, aktif, dan tidak mudah bosan selama proses calistung.",
    featured: true,
    badge: "Unggulan",
    color: "text-pink-600",
    bg: "bg-pink-50",
    accentBg: "bg-pink-600",
    accentText: "text-white",
    border: "border-pink-200",
    shadow: "shadow-pink-100/60",
  },
  {
    icon: BookOpen,
    title: "Fokus pada Kemajuan Anak",
    description:
      "Program dilakukan secara bertahap untuk membantu anak berkembang sesuai kemampuan dan lebih percaya diri saat masuk SD.",
    featured: true,
    badge: "Unggulan",
    color: "text-blue-700",
    bg: "bg-blue-50",
    accentBg: "bg-blue-700",
    accentText: "text-white",
    border: "border-blue-200",
    shadow: "shadow-blue-100/60",
  },
  // ---- STANDARD (bottom row) ----
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description:
      "Pilihan waktu belajar yang dapat disesuaikan dengan aktivitas sekolah dan keluarga.",
    featured: false,
    badge: null,
    color: "text-amber-700",
    bg: "bg-amber-50",
    accentBg: "bg-amber-700",
    accentText: "text-white",
    border: "border-amber-100",
    shadow: "shadow-amber-50/60",
  },
  {
    icon: MapPin,
    title: "Area Layanan Andir & Sekitarnya",
    description:
      "Melayani keluarga di Andir, Maleber, Garuda, Dunguscariang, Ciroyom, dan wilayah sekitar Bandung Barat.",
    featured: false,
    badge: null,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    accentBg: "bg-emerald-700",
    accentText: "text-white",
    border: "border-emerald-100",
    shadow: "shadow-emerald-50/60",
  },
  {
    icon: Heart,
    title: "Lingkungan Belajar Nyaman",
    description:
      "Suasana belajar yang kondusif membantu anak lebih fokus dan nyaman selama mengikuti program.",
    featured: false,
    badge: null,
    color: "text-rose-600",
    bg: "bg-rose-50",
    accentBg: "bg-rose-600",
    accentText: "text-white",
    border: "border-rose-100",
    shadow: "shadow-rose-50/60",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────
// Easy to update: replace name, role, and text with real parent testimonials.
const calistungTestimonials = [
  {
    name: "Ibu Rina",
    role: "Orang Tua Siswa Pra-SD",
    initial: "R",
    text: "Awalnya anak saya masih kesulitan mengenal huruf. Setelah mengikuti program calistung di Zain Ilmi, kemampuan membacanya berkembang dengan baik dan sekarang lebih percaya diri saat belajar.",
  },
  {
    name: "Ibu Sari",
    role: "Orang Tua Siswa Pra-SD",
    initial: "S",
    text: "Tutor sangat sabar dan cara mengajarnya menyenangkan. Anak jadi lebih semangat belajar dan tidak merasa terbebani saat latihan membaca maupun berhitung.",
  },
  {
    name: "Ibu Dewi",
    role: "Orang Tua Siswa Pra-SD",
    initial: "D",
    text: "Kami memilih Zain Ilmi karena pendekatan belajarnya yang personal. Perkembangan anak terasa lebih terarah dan komunikasinya dengan orang tua juga sangat baik.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function CalistungContent() {
  const waLink = `${siteConfig.social.whatsapp}?text=Halo%20saya%20ingin%20bertanya%20tentang%20program%20Calistung%20Zain%20Ilmi`;

  return (
    <>
      {/* ============================================================ */}
      {/* BREADCRUMB                                                     */}
      {/* ============================================================ */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500 sm:text-sm">
          <li>
            <Link href="/" className="transition hover:text-teal-700">
              Beranda
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" className="shrink-0" />
          <li>
            <Link href="/#program" className="transition hover:text-teal-700">
              Program
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" className="shrink-0" />
          <li className="font-medium text-teal-700" aria-current="page">
            Calistung Bandung
          </li>
        </ol>
      </nav>

      {/* ============================================================ */}
      {/* HERO — Two-Column                                              */}
      {/* ============================================================ */}
      <section
        id="calistung-hero"
        aria-labelledby="calistung-hero-heading"
        className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white"
      >
        {/* Subtle background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

          {/* ---------- LEFT COLUMN ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 sm:px-4 sm:py-2">
              <Star
                size={14}
                className="shrink-0 fill-pink-400 text-pink-400"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold text-pink-700 sm:text-sm">
                Program Calistung Pra-SD di Andir, Bandung
              </span>
            </div>

            {/* H1 — SEO keyword-rich */}
            <h1
              id="calistung-hero-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              Les Calistung Bandung
              <span className="block text-teal-700">
                untuk Anak Pra-SD
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              Bantu anak lebih siap masuk SD melalui program membaca, menulis,
              dan berhitung yang menyenangkan dengan pendampingan personal dari
              tutor Zain Ilmi di Kecamatan Andir, Bandung.
            </p>

            {/* Trust Indicators — card checklist */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <Check size={12} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daftar program calistung Zain Ilmi via WhatsApp"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Daftar Sekarang
              </a>

              <Link
                href="#calistung-benefits"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                Lihat Biaya
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-teal-400 to-teal-600 text-xs font-bold text-white shadow-sm"
                    aria-hidden="true"
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">
                  Dipercaya orang tua
                </span>{" "}
                di{" "}
                {socialProofAreas.join(", ")}
              </p>
            </div>
          </motion.div>

          {/* ---------- RIGHT COLUMN — Illustration (desktop only) ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Decorative ring behind illustration */}
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-pink-100/60 via-teal-100/40 to-blue-100/60 blur-2xl" />

            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/ilustrasi_hero.svg"
                alt="Ilustrasi anak belajar calistung di Zain Ilmi, Andir Bandung"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 50vw"
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Floating stat card — top left
            <div className="absolute left-0 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-4 lg:left-0">
              <p className="text-xs text-slate-500">Pengalaman mengajar</p>
              <p className="text-2xl font-extrabold text-teal-700">17+</p>
              <p className="text-xs font-medium text-slate-600">tahun</p>
            </div> */}

            {/* Floating stat card — bottom right */}
            {/* <div className="absolute bottom-8 right-0 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-right-4 lg:right-0">
              <p className="text-xs text-slate-500">Siswa dibimbing</p>
              <p className="text-2xl font-extrabold text-pink-600">100+</p>
              <p className="text-xs font-medium text-slate-600">anak aktif</p>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY CHOOSE — Refined, production-quality                       */}
      {/* ============================================================ */}
      <section
        aria-labelledby="calistung-why-choose-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <Star size={13} className="shrink-0 fill-teal-600 text-teal-600" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Mengapa Memilih Zain Ilmi
              </span>
            </div>

            <h2
              id="calistung-why-choose-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Kenapa Orang Tua Memilih Program
              <span className="text-teal-700"> Calistung Zain Ilmi?</span>
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Program calistung yang membantu anak belajar membaca, menulis, dan
              berhitung secara bertahap agar lebih siap dan percaya diri saat
              memasuki jenjang sekolah dasar.
            </p>
          </div>

          {/* ── Trust metrics row ── */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 sm:mt-7">
            {[
              "Pendampingan Personal",
              "Jadwal Fleksibel",
              "Area Andir & Sekitarnya",
              "17+ Tahun Pengalaman Mengajar",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <Check size={11} className="text-teal-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          {/* ── Featured cards row — single consistent accent ── */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {whyFeatures.filter((f) => f.featured).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex h-full flex-col rounded-2xl border border-teal-100 bg-teal-50/40 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-teal-100 transition-transform duration-200 group-hover:scale-105">
                    <Icon size={22} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Supporting cards row ── */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {whyFeatures.filter((f) => !f.featured).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 transition-transform duration-200 group-hover:scale-105">
                    <Icon size={20} className="text-slate-600" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Soft closing statement ── */}
          <p className="mt-10 text-center text-sm text-slate-500 sm:mt-12 sm:text-base">
            Hadir untuk membantu anak belajar dengan lebih percaya diri melalui
            program calistung yang terarah dan menyenangkan.
          </p>

        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIALS                                                   */}
      {/* ============================================================ */}
      <section
        aria-labelledby="calistung-testimoni-heading"
        className="bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <Star size={13} className="shrink-0 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Testimoni Orang Tua
              </span>
            </div>

            <h2
              id="calistung-testimoni-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Apa Kata Orang Tua Tentang Zain Ilmi?
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Kepercayaan orang tua adalah hal yang paling berharga bagi kami.
              Berikut pengalaman beberapa orang tua yang mendampingi anaknya
              belajar calistung bersama Zain Ilmi di Andir, Bandung.
            </p>
          </div>

          {/* Testimonial Cards — horizontal scroll on mobile, 3-col on desktop */}
          <div className="mt-10 sm:mt-12">
            {/* Scroll container */}
            <div className="flex gap-4 overflow-x-auto pb-4 sm:gap-5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {calistungTestimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative flex w-[80vw] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:w-[60vw] sm:p-7 lg:w-auto"
                >
                  {/* Decorative quote */}
                  <div className="absolute right-5 top-5 opacity-[0.07]">
                    <Quote size={48} className="text-teal-700" aria-hidden="true" />
                  </div>

                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px w-10 bg-teal-200" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint dots — mobile only */}
            <div className="mt-4 flex justify-center gap-1.5 lg:hidden" aria-hidden="true">
              {calistungTestimonials.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-slate-300"
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* BIAYA & JADWAL                                                 */}
      {/* ============================================================ */}
      <section
        aria-labelledby="calistung-biaya-heading"
        className="bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="text-base">💰</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Biaya & Jadwal
              </span>
            </div>

            <h2
              id="calistung-biaya-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Program Calistung yang Fleksibel untuk
              <span className="text-teal-700"> Kebutuhan Setiap Anak</span>
            </h2>

            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Setiap anak memiliki kebutuhan belajar yang berbeda. Jadwal dan
              program dapat disesuaikan agar proses belajar lebih nyaman dan efektif.
            </p>
          </div>

          {/* Two-column cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">

            {/* LEFT — Program card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex flex-col rounded-2xl border border-teal-100 bg-teal-50/40 p-6 sm:p-8"
            >
              {/* Card header */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-teal-100">
                  <BookOpen size={22} className="text-teal-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                    Program
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Program Calistung Pra-SD
                  </h3>
                </div>
              </div>

              {/* Inclusions */}
              <ul className="space-y-2.5">
                {[
                  "Pendampingan Personal",
                  "Materi Sesuai Kemampuan Anak",
                  "Jadwal Fleksibel",
                  "Fokus Membaca, Menulis, dan Berhitung",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                      <Check size={11} className="text-teal-700" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing display */}
              <div className="mt-6 rounded-xl border border-teal-100 bg-white px-5 py-4 sm:px-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Biaya Program
                </p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-teal-700 sm:text-4xl">
                    Rp 100.000
                  </span>
                  <span className="text-sm font-medium text-slate-500">/ bulan</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daftar program calistung Bandung via WhatsApp"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg active:scale-[0.98] sm:text-base"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Daftar via WhatsApp
              </a>
            </motion.div>

            {/* RIGHT — Schedule card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                  <Clock size={22} className="text-slate-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  Jadwal Belajar
                </h3>
              </div>

              {/* Schedule block */}
              <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-5">
                <div className="flex items-baseline gap-3">
                  <div>
                    <p className="text-2xl font-extrabold text-teal-700 sm:text-3xl">
                      Senin – Jumat
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-700 sm:text-lg">
                      08.00 – 17.00 WIB
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                  Jadwal belajar dapat disesuaikan dengan ketersediaan siswa
                  dan orang tua.
                </p>
              </div>

              {/* Trust box */}
              <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/60 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Keunggulan Program
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    "Fleksibel",
                    "Pendampingan Personal",
                    "Area Andir & Sekitarnya",
                    "Program Pra-SD",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <Check size={12} className="shrink-0 text-teal-600" aria-hidden="true" />
                      <span className="text-sm font-medium text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1" />

              <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                Program tersedia untuk anak usia Pra-SD di Andir, Bandung dan
                sekitarnya.
              </p>
            </motion.div>
          </div>

          {/* Reassurance block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-6 py-8 text-center shadow-sm sm:mt-10 sm:px-10 sm:py-10"
          >
            <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl md:text-2xl">
              Masih Bingung Menentukan Program yang Tepat?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Konsultasikan kebutuhan belajar anak bersama tim Zain Ilmi. Kami
              siap membantu memilih program yang sesuai dengan kemampuan dan
              tujuan belajar anak.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi les calistung Bandung via WhatsApp"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg active:scale-[0.98] sm:px-8 sm:text-base"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi via WhatsApp
            </a>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ — Accordion                                               */}
      {/* ============================================================ */}
      <section
        id="calistung-faq"
        aria-labelledby="calistung-faq-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="text-base">❓</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                FAQ
              </span>
            </div>
            <h2
              id="calistung-faq-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Pertanyaan yang Sering Diajukan Orang Tua
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Berikut beberapa pertanyaan yang sering ditanyakan mengenai program
              les calistung Bandung di Zain Ilmi.
            </p>
          </div>

          {/* Accordion */}
          <CalistungFaqAccordion />


        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA                                                            */}
      {/* ============================================================ */}
      <section
        aria-labelledby="calistung-cta-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white to-teal-50/40 p-8 text-center shadow-xl sm:p-12">
            <h2
              id="calistung-cta-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Siap Mendaftarkan Anak ke{" "}
              <span className="text-teal-700">Les Calistung Zain ilmi?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Konsultasikan kesiapan belajar anak Anda bersama Zain Ilmi di
              Andir, Bandung. Kami siap membantu si kecil belajar membaca,
              menulis, dan berhitung dengan cara yang menyenangkan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Hubungi via WhatsApp
              </a>
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                Kembali ke Beranda
              </Link>
            </div>

            {/* Location nudge */}
            <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} className="shrink-0 text-teal-600" aria-hidden="true" />
              Jl. Maleber Utara, Kec. Andir, Kota Bandung
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
