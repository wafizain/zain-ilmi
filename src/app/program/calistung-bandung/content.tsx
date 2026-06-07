"use client";

import Link from "next/link";
import {
  BookOpen,
  PencilLine,
  Calculator,
  Sparkles,
  Heart,
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Check,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/seo";
import { calistungFaqs } from "./faqs";

const benefits = [
  {
    icon: BookOpen,
    title: "Lancar Membaca",
    description:
      "Anak mengenal huruf, suku kata, hingga membaca kalimat sederhana secara bertahap dan menyenangkan.",
  },
  {
    icon: PencilLine,
    title: "Terampil Menulis",
    description:
      "Melatih motorik halus dan kebiasaan menulis yang rapi sebagai fondasi penting sebelum masuk SD.",
  },
  {
    icon: Calculator,
    title: "Paham Berhitung",
    description:
      "Mengenal angka, konsep jumlah, dan berhitung dasar melalui permainan dan aktivitas interaktif.",
  },
  {
    icon: Heart,
    title: "Tumbuh Percaya Diri",
    description:
      "Anak lebih siap dan percaya diri menghadapi hari pertama sekolah dasar tanpa rasa cemas.",
  },
];

const whyUs = [
  "Pengalaman mengajar lebih dari 17 tahun",
  "Pendampingan personal dalam kelompok kecil",
  "Metode belajar menyenangkan dan tidak menekan anak",
  "Jam belajar fleksibel menyesuaikan keluarga",
  "Lokasi strategis di Andir, Bandung",
  "Pengajar tetap yang sabar dan berpengalaman",
];

const programDetails = [
  "Pengenalan huruf abjad A–Z dan bunyinya",
  "Latihan membaca suku kata hingga kalimat sederhana",
  "Latihan menulis huruf, angka, dan kata dengan rapi",
  "Pengenalan angka dan konsep berhitung dasar",
  "Aktivitas interaktif untuk melatih fokus dan motorik",
  "Evaluasi perkembangan belajar secara berkala",
];

export default function CalistungContent() {
  const waLink = `${siteConfig.social.whatsapp}?text=Halo%20saya%20ingin%20bertanya%20tentang%20program%20Calistung%20Zain%20Ilmi`;

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500 sm:text-sm">
          <li>
            <Link href="/" className="transition hover:text-teal-700">
              Beranda
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" />
          <li>
            <Link href="/#program" className="transition hover:text-teal-700">
              Program
            </Link>
          </li>
          <ChevronRight size={14} aria-hidden="true" />
          <li className="font-medium text-teal-700" aria-current="page">
            Calistung Bandung
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        aria-labelledby="calistung-hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-100/50 via-teal-100/40 to-transparent blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pink-600 sm:text-sm">
            Program Pra-SD & Calistung
          </p>

          <h1
            id="calistung-hero-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Les Calistung di Andir,{" "}
            <span className="text-teal-700">Bandung</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Bantu si kecil siap masuk SD dengan program calistung di Bandung yang
            menyenangkan. Zain Ilmi mendampingi anak Pra-SD belajar membaca,
            menulis, dan berhitung secara bertahap dengan pendekatan personal di
            Kecamatan Andir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 active:scale-[0.98] sm:w-auto sm:px-8"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Daftar Calistung via WhatsApp
            </a>
            <Link
              href="/#kontak"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] sm:w-auto sm:px-8"
            >
              <MapPin size={20} aria-hidden="true" />
              Lihat Kontak & Lokasi
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        aria-labelledby="calistung-benefits-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
              Manfaat Calistung
            </p>
            <h2
              id="calistung-benefits-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Mengapa Calistung Penting Sebelum Masuk SD?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Kemampuan membaca, menulis, dan berhitung adalah fondasi belajar
              yang akan digunakan anak sepanjang masa sekolahnya. Dengan calistung
              yang kuat sejak dini, anak lebih mudah mengikuti pelajaran dan
              tumbuh menjadi pembelajar yang percaya diri.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Zain Ilmi */}
      <section
        aria-labelledby="calistung-why-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
                Kenapa Zain Ilmi
              </p>
              <h2
                id="calistung-why-heading"
                className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
              >
                Les Calistung Terpercaya di Bandung
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Sebagai bimbingan belajar dengan pengalaman lebih dari 17 tahun,
                Zain Ilmi memahami bahwa setiap anak punya tempo belajar yang
                berbeda. Itulah mengapa kami mengutamakan pendampingan personal
                dalam kelompok kecil, sehingga anak Anda mendapat perhatian penuh
                tanpa merasa tertekan. Orang tua di Andir, Maleber, Garuda, dan
                Dunguscariang mempercayakan kesiapan belajar anak mereka kepada
                kami.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm sm:text-base"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <Check size={14} className="text-teal-700" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section
        aria-labelledby="calistung-details-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
              Detail Program
            </p>
            <h2
              id="calistung-details-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Apa yang Dipelajari Anak Anda
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Materi calistung disusun bertahap mengikuti perkembangan anak,
              mulai dari pengenalan paling dasar hingga membaca kalimat sederhana.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
            {programDetails.map((detail, index) => (
              <div
                key={detail}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-50 text-sm font-bold text-pink-600">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-700 sm:text-base">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Schedule */}
      <section
        aria-labelledby="calistung-pricing-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="calistung-pricing-heading" className="sr-only">
            Biaya dan Jadwal Belajar Calistung
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Pricing */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                Biaya Program
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Biaya les calistung di Zain Ilmi terjangkau dan transparan, dapat
                disesuaikan dengan jumlah pertemuan per minggu. Kami percaya
                pendidikan berkualitas tidak harus mahal.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-95 sm:text-base"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Tanya Biaya Calistung
              </a>
            </div>

            {/* Schedule */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                Jadwal Fleksibel
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-600 sm:text-base">
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="shrink-0 text-teal-700" aria-hidden="true" />
                  Senin – Jumat, pukul 08.00 – 17.00 WIB
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="shrink-0 text-teal-700" aria-hidden="true" />
                  Rata-rata 4 pertemuan per minggu
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="shrink-0 text-teal-700" aria-hidden="true" />
                  Jam belajar menyesuaikan ketersediaan anak
                </li>
                <li className="flex items-center gap-2.5">
                  <Users size={16} className="shrink-0 text-teal-700" aria-hidden="true" />
                  Kelompok kecil untuk pendampingan personal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="calistung-faq-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:text-sm">
              FAQ
            </p>
            <h2
              id="calistung-faq-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Pertanyaan Seputar Les Calistung
            </h2>
          </div>

          <div className="mt-8 space-y-4 sm:mt-10">
            {calistungFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="calistung-cta-heading"
        className="bg-slate-50 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-teal-50/40 p-8 text-center shadow-xl sm:p-12">
            <h2
              id="calistung-cta-heading"
              className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Siap Mendaftarkan Anak ke Les Calistung Bandung?
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
          </div>
        </div>
      </section>
    </>
  );
}
