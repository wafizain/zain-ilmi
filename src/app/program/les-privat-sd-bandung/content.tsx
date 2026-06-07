"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Target,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Check,
  ChevronRight,
  Star,
  Quote,
  Plus,
  PenLine,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/seo";
import { sdFaqs } from "./faqs";

/* ------------------------------------------------------------------ */
/*  Accordion Sub-component                                             */
/* ------------------------------------------------------------------ */

function SdFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {sdFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `sd-faq-btn-${index}`;
        const panelId = `sd-faq-panel-${index}`;

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
                    isOpen ? "text-teal-700"  : "text-slate-900"
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
  "Membantu PR Sekolah",
  "Semua Mata Pelajaran SD",
  "Persiapan Ulangan & Ujian",
  "Jadwal Fleksibel Setelah Sekolah",
];

const socialProofAreas = ["Andir", "Maleber", "Garuda", "Dunguscariang", "Ciroyom"];

const whyFeatures = [
  {
    icon: GraduationCap,
    title: "Pendampingan Belajar Personal",
    description:
      "Setiap siswa mendapat perhatian langsung dari pengajar sesuai kemampuan dan kebutuhan belajarnya.",
    featured: true,
    color: "text-teal-700",
    bg: "bg-teal-50",
    accentBg: "bg-teal-700",
    accentText: "text-white",
    border: "border-teal-200",
  },
  {
    icon: PenLine,
    title: "Membantu Pekerjaan Rumah (PR)",
    description:
      "Kami membantu siswa memahami dan menyelesaikan PR dengan cara yang terarah dan tidak membebani.",
    featured: true,
    color: "text-teal-700",
    bg: "bg-teal-50",
    accentBg: "bg-teal-700",
    accentText: "text-white",
    border: "border-teal-200",
  },
  {
    icon: BookOpen,
    title: "Fokus pada Pemahaman Materi",
    description:
      "Materi diajarkan secara bertahap agar siswa benar-benar paham, bukan sekadar menghafal.",
    featured: true,
    color: "text-teal-700",
    bg: "bg-teal-50",
    accentBg: "bg-teal-700",
    accentText: "text-white",
    border: "border-teal-200",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description:
      "Waktu belajar dapat disesuaikan dengan jadwal sekolah dan kegiatan keluarga.",
    featured: false,
    color: "text-amber-700",
    bg: "bg-amber-50",
    accentBg: "bg-amber-700",
    accentText: "text-white",
    border: "border-amber-100",
  },
  {
    icon: Heart,
    title: "Lingkungan Belajar Nyaman",
    description:
      "Suasana belajar yang kondusif membantu siswa lebih fokus dan tidak mudah tertekan.",
    featured: false,
    color: "text-rose-600",
    bg: "bg-rose-50",
    accentBg: "bg-rose-600",
    accentText: "text-white",
    border: "border-rose-100",
  },
  {
    icon: MapPin,
    title: "Area Layanan Bandung",
    description:
      "Melayani keluarga di Andir, Maleber, Garuda, Dunguscariang, Ciroyom, dan sekitar Bandung.",
    featured: false,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    accentBg: "bg-emerald-700",
    accentText: "text-white",
    border: "border-emerald-100",
  },
];

const sdTestimonials = [
  {
    name: "Ibu Hana",
    role: "Orang Tua Siswa SD Kelas 4",
    initial: "H",
    text: "Nilai Matematika anak saya meningkat signifikan setelah belajar di Zain Ilmi.",
  },
  {
    name: "Bapak Rudi",
    role: "Orang Tua Siswa SD Kelas 3",
    initial: "R",
    text: "Anak jadi lebih semangat mengerjakan PR. Sebelumnya sering mengeluh susah, sekarang lebih mandiri dan percaya diri.",
  },
  {
    name: "Ibu Nita",
    role: "Orang Tua Siswa SD Kelas 5",
    initial: "N",
    text: "Sangat terbantu terutama untuk persiapan ulangan. Jadwalnya fleksibel dan komunikasi dengan pengajar sangat terbuka.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */

export default function SDContent() {
  const waLink = `${siteConfig.social.whatsapp}?text=Halo%20saya%20ingin%20bertanya%20tentang%20program%20Les%20Privat%20SD%20Zain%20Ilmi`;

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
            Les Privat SD Bandung
          </li>
        </ol>
      </nav>

      {/* ============================================================ */}
      {/* HERO                                                           */}
      {/* ============================================================ */}
      <section
        id="sd-hero"
        aria-labelledby="sd-hero-heading"
        className="relative overflow-hidden bg-slate-50"
      >
        {/* Background decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-125 w-125 rounded-full bg-teal-100/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-50/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 sm:px-4 sm:py-2">
              <Star size={14} className="shrink-0 fill-teal-600 text-teal-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-teal-700 sm:text-sm">
                Pendampingan Belajar SD di Andir, Bandung
              </span>
            </div>

            {/* H1 */}
            <h1
              id="sd-hero-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              Les Privat SD Bandung
              <span className="block text-teal-700">
                Membantu Anak Memahami
              </span>
              <span className="block text-slate-900">
                Pelajaran Sekolah dengan Lebih Mudah
              </span>
            </h1>

            {/* SEO sr-only */}
            <p className="sr-only">
              Pendampingan belajar yang membantu siswa SD memahami materi sekolah,
              mengerjakan tugas dengan lebih percaya diri, dan meningkatkan hasil belajar
              secara bertahap.
            </p>

            {/* Sub-headline */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              Pendampingan belajar yang membantu siswa SD memahami materi
              sekolah, mengerjakan tugas dengan lebih percaya diri, dan
              meningkatkan hasil belajar secara bertahap.
            </p>

            {/* Trust indicators — card checklist */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <Check size={12} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konsultasi gratis les privat SD Bandung via WhatsApp"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Daftar Sekarang
              </a>
              <Link
                href="#sd-biaya"
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-teal-700 bg-white px-6 py-4 text-base font-semibold text-teal-700 transition-all hover:bg-teal-50 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                Lihat Biaya
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Trust note */}
            <p className="mt-4 flex items-start gap-1.5 text-xs text-slate-500 sm:text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-teal-600" aria-hidden="true" />
              Melayani siswa SD di Andir, Maleber, Garuda, Dunguscariang,
              Ciroyom, dan sekitarnya.
            </p>

            {/* Micro-trust */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
              {["Jadwal Fleksibel", "Pendampingan Personal", "Area Andir & Sekitarnya"].map((t) => (
                <span key={t} className="flex items-center gap-1 text-xs text-slate-500">
                  <Check size={11} className="shrink-0 text-teal-600" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Academic visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Glow ring */}
            <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-teal-200/40 via-teal-100/30 to-slate-100/50 blur-2xl" />

            {/* Illustration */}
            <div className="relative aspect-square w-full">
              <Image
                src="/hero_sd.svg"
                alt="Ilustrasi siswa SD belajar bersama pengajar di Zain Ilmi Bandung"
                fill
                priority
                sizes="50vw"
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Floating card 1 — top left */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -left-4 top-10 flex items-center gap-2.5 rounded-2xl border border-teal-100 bg-white px-4 py-3 shadow-lg"
            >
              <span className="text-xl" aria-hidden="true">📚</span>
              <div>
                <p className="text-xs font-bold text-slate-900">Pendampingan</p>
                <p className="text-xs text-slate-500">Semua Mata Pelajaran SD</p>
              </div>
            </motion.div>

            {/* Floating card 2 — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -right-4 bottom-10 flex items-center gap-2.5 rounded-2xl border border-teal-100 bg-white px-4 py-3 shadow-lg"
            >
              <span className="text-xl" aria-hidden="true">📝</span>
              <div>
                <p className="text-xs font-bold text-slate-900">Membantu PR</p>
                <p className="text-xs text-slate-500">&amp; Persiapan Ujian</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MENGAPA MEMILIH ZAIN ILMI                                      */}
      {/* ============================================================ */}
      <section
        aria-labelledby="sd-why-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <Star size={13} className="shrink-0 fill-teal-600 text-teal-700" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Mengapa Memilih Zain Ilmi
              </span>
            </div>
            <h2
              id="sd-why-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Kenapa Orang Tua Memilih{" "}
              <span className="text-teal-700">Les Privat SD Zain Ilmi?</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Program bimbel SD di Andir, Bandung ini dirancang untuk membantu
              siswa lebih memahami pelajaran sekolah, lebih percaya diri saat
              ujian, dan lebih mandiri dalam belajar.
            </p>
          </div>

          {/* Trust metrics row */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 sm:mt-7">
            {["Pendampingan Personal", "Jadwal Fleksibel", "Area Andir & Sekitarnya", "17+ Tahun Pengalaman"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <Check size={11} className="text-teal-700" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          {/* Featured cards */}
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
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl ${feature.border}`}
                >
                  <div className={`h-1 w-full ${feature.accentBg}`} aria-hidden="true" />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-110 ${feature.bg}`}>
                      <Icon size={24} className={feature.color} aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Supporting cards */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${feature.bg}`}>
                    <Icon size={20} className={feature.color} aria-hidden="true" />
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

          {/* Soft closing */}
          <p className="mt-10 text-center text-sm text-slate-500 sm:mt-12 sm:text-base">
            Hadir untuk membantu siswa SD belajar dengan lebih percaya diri
            melalui pendampingan yang terarah dan menyenangkan.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONI                                                      */}
      {/* ============================================================ */}
      <section
        aria-labelledby="sd-testimoni-heading"
        className="bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <Star size={13} className="shrink-0 fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Testimoni Orang Tua
              </span>
            </div>
            <h2
              id="sd-testimoni-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Apa Kata Orang Tua Siswa SD?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Kepercayaan orang tua adalah prioritas kami. Berikut pengalaman
              beberapa orang tua yang mendampingi anaknya belajar bersama
              Zain Ilmi di Andir, Bandung.
            </p>
          </div>

          {/* Horizontal scroll on mobile, 3-col on desktop */}
          <div className="mt-10 sm:mt-12">
            <div className="flex gap-4 overflow-x-auto pb-4 sm:gap-5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {sdTestimonials.map((t, index) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative flex w-[80vw] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:w-[60vw] sm:p-7 lg:w-auto"
                >
                  <div className="absolute right-5 top-5 opacity-[0.07]">
                    <Quote size={48} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="my-5 h-px w-10 bg-blue-200" />
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
            <div className="mt-4 flex justify-center gap-1.5 lg:hidden" aria-hidden="true">
              {sdTestimonials.map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BIAYA & JADWAL                                                 */}
      {/* ============================================================ */}
      <section
        id="sd-biaya"
        aria-labelledby="sd-biaya-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="text-base">💰</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Biaya & Jadwal
              </span>
            </div>
            <h2
              id="sd-biaya-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Program Belajar yang Fleksibel untuk{" "}
              <span className="text-teal-700">Siswa SD</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Program disesuaikan dengan kebutuhan dan kemampuan setiap siswa
              agar proses belajar lebih efektif dan nyaman.
            </p>
          </div>

          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 sm:mt-10 sm:gap-6 lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* Program card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex w-[85vw] shrink-0 flex-col rounded-2xl border border-teal-100 bg-teal-50/40 p-6 sm:w-[70vw] sm:p-8 lg:w-auto"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-teal-100">
                  <GraduationCap size={22} className="text-teal-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Program</p>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Les Privat SD 
                  </h3>
                </div>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Matematika, B. Indonesia, B. Inggris, IPA, IPS",
                  "Pendampingan PR harian",
                  "Persiapan ulangan dan ujian",
                  "Materi disesuaikan kurikulum sekolah",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
                      <Check size={11} className="text-teal-700" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-teal-100 bg-white px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Biaya Program
                </p>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-teal-700 sm:text-4xl">
                    Rp 120.000
                  </span>
                  <span className="text-sm font-medium text-slate-500">/ bulan</span>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanya biaya les privat SD Bandung via WhatsApp"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg active:scale-[0.98] sm:text-base"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Tanya Biaya via WhatsApp
              </a>
            </motion.div>

            {/* Schedule card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex w-[85vw] shrink-0 flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[70vw] sm:p-8 lg:w-auto"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                  <Clock size={22} className="text-slate-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">Jadwal Belajar</h3>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-5">
                <p className="text-2xl font-extrabold text-teal-700 sm:text-3xl">Senin – Jumat</p>
                <p className="mt-1 text-base font-semibold text-slate-700 sm:text-lg">08.00 – 17.00 WIB</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                  Jadwal dapat disesuaikan dengan ketersediaan siswa, termasuk
                  sesi sore hari setelah pulang sekolah.
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-slate-100 bg-slate-50/60 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Keunggulan Program
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {["Jadwal Fleksibel", "Semua Jenjang SD", "Area Andir & Sekitarnya", "Pengajar Berpengalaman"].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <Check size={12} className="shrink-0 text-teal-700" aria-hidden="true" />
                      <span className="text-sm font-medium text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1" />
              <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                Tersedia untuk siswa SD di Andir, Bandung dan sekitarnya.
              </p>
            </motion.div>
          </div>

          {/* Reassurance */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-6 py-8 text-center shadow-sm sm:mt-10 sm:px-10 sm:py-10"
          >
            <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl md:text-2xl">
              Belum Yakin Program Mana yang Tepat?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Konsultasikan kebutuhan belajar anak bersama tim Zain Ilmi. Kami
              siap membantu memilih program yang paling sesuai.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi guru privat SD Bandung via WhatsApp"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg active:scale-[0.98] sm:px-8 sm:text-base"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi via WhatsApp
            </a>
          </motion.div> */}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                            */}
      {/* ============================================================ */}
      <section
        id="sd-faq"
        aria-labelledby="sd-faq-heading"
        className="bg-white py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-3 inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="text-base">❓</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">FAQ</span>
            </div>
            <h2
              id="sd-faq-heading"
              className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Temukan jawaban atas pertanyaan umum seputar les privat SD dan
              bimbel SD di Zain Ilmi, Andir, Bandung.
            </p>
          </div>

          <SdFaqAccordion />

          {/* Trust CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10 rounded-2xl border border-teal-100 bg-white px-6 py-8 text-center shadow-sm sm:mt-12 sm:px-8 sm:py-10"
          >
            <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
              Masih Ada Pertanyaan Lain?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Tim Zain Ilmi siap membantu menjawab pertanyaan Anda mengenai
              program les privat SD di Bandung.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tanya lebih lanjut tentang bimbel SD Bandung via WhatsApp"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-700/20 transition-all hover:bg-teal-800 hover:shadow-lg active:scale-[0.98] sm:px-8 sm:text-base"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi via WhatsApp
            </a>
          </motion.div> */}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                      */}
      {/* ============================================================ */}
      <section
        aria-labelledby="sd-cta-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-white to-blue-50/40 p-8 text-center shadow-xl sm:p-12">
            <h2
              id="sd-cta-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Siap Membantu Anak Lebih Memahami Pelajaran Sekolah
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Setiap anak memiliki tantangan belajar yang berbeda. Konsultasikan kebutuhan belajar anak dan dapatkan pendampingan yang sesuai dengan kemampuannya.
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
            <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} className="shrink-0 text-teal-700" aria-hidden="true" />
              Jl. Maleber Utara, Kec. Andir, Kota Bandung
            </p>
          </div>
        </div>
      </section>
    </>
  );
}



