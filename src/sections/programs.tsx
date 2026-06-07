"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Target, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/seo";

type Program = {
  icon: typeof Sparkles;
  title: string;
  description: string;
  price: string;
  accentColor: string;
  bgColor: string;
  detailLink?: string;
};

const programs: Program[] = [
  {
    icon: Sparkles,
    title: "Pra-SD & Calistung",
    description:
      "Membantu anak mengenal membaca, menulis, dan berhitung melalui metode belajar yang menyenangkan dan interaktif.",
    price: "Rp 100.000 / bulan",
    accentColor: "text-pink-600",
    bgColor: "bg-pink-50",
    detailLink: "/program/calistung-bandung",
  },
  {
    icon: BookOpen,
    title: "Sekolah Dasar (SD)",
    description:
      "Memperkuat pemahaman dasar akademik serta membantu siswa lebih percaya diri dalam mengikuti pelajaran sekolah.",
    price: "Rp 120.000 / bulan",
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Sekolah Menengah Pertama (SMP)",
    description:
      "Pendampingan belajar yang lebih terarah untuk membantu siswa menghadapi materi yang semakin kompleks.",
    price: "Rp 150.000 / bulan",
    accentColor: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: GraduationCap,
    title: "Sekolah Menengah Atas (SMA)",
    description:
      "Fokus pada pemahaman konsep, peningkatan prestasi akademik, dan persiapan menghadapi ujian.",
    price: "Rp 200.000 / bulan",
    accentColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export default function Programs() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="relative bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-teal-100/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:mb-3 sm:text-sm">
            Program Belajar
          </p>

          <h2
            id="program-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Bimbingan belajar untuk{" "}
            <span className="text-teal-700">Pra-SD hingga SMA</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
           Kami menyediakan program bimbingan belajar yang disesuaikan dengan kebutuhan siswa pada setiap jenjang pendidikan.
          </p>
        </div>

        {/* Programs Grid - 2x2 */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-3xl sm:p-7 md:p-8">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${program.bgColor} transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16`}
                  >
                    <Icon
                      className={`h-7 w-7 ${program.accentColor} sm:h-8 sm:w-8`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {program.description}
                  </p>

                  {/* Price Badge */}
                  <div className="mt-5">
                    <span
                      className={`inline-flex items-center rounded-full ${program.bgColor} px-4 py-2 text-sm font-bold ${program.accentColor} sm:text-base`}
                    >
                      {program.price}
                    </span>
                  </div>

                  {/* CTA Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {program.detailLink && (
                      <Link
                        href={program.detailLink}
                        className={`inline-flex items-center gap-1 text-sm font-semibold ${program.accentColor} transition-all hover:gap-2`}
                      >
                        Lihat Detail
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="h-4 w-4"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8h10m0 0l-3-3m3 3l-3 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    )}

                    <a
                      href={`${siteConfig.social.whatsapp}?text=Halo%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(program.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition-all hover:gap-2 hover:text-slate-700"
                    >
                      Hubungi Kami
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10m0 0l-3-3m3 3l-3 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
