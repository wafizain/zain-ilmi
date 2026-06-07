"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, BookMarked, Trophy, CalendarCheck } from "lucide-react";

const trustMetrics = [
  {
    icon: GraduationCap,
    value: "100+",
    label: "Siswa Dibimbing",
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-100",
    shadow: "hover:shadow-teal-100/80",
  },
  {
    icon: BookMarked,
    value: "Pra-SD – SMA",
    label: "Semua Jenjang",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
    shadow: "hover:shadow-blue-100/80",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Tahun Pengalaman",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
    shadow: "hover:shadow-amber-100/80",
  },
  {
    icon: CalendarCheck,
    value: "⏰",
    label: "Jam Belajar Fleksibel",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    shadow: "hover:shadow-emerald-100/80",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      aria-labelledby="about-heading"
      className="relative bg-white py-16 sm:py-20 md:py-20 lg:py-24 pb-8 sm:pb-10 md:pb-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <Image
                src="/foto.webp"
                alt="Suasana belajar di Zain Ilmi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:mb-3 sm:text-sm">
                Tentang Zain Ilmi
              </p>

              <h2
                id="about-heading"
                className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                <span className="text-teal-700">Membangun </span>
                 Pemahaman, Kepercayaan Diri,dan Prestasi{" "}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg"
            >
              Zain Ilmi merupakan bimbingan belajar yang mendampingi siswa dari Pra-SD hingga SMA dengan suasana belajar yang nyaman, jam belajar yang fleksibel, dan pendekatan yang lebih personal untuk membantu setiap siswa berkembang secara optimal.
            </motion.p>
          </div>
        </div>

        {/* Trust Metrics - Horizontal Below */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-4">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${metric.border} ${metric.shadow}`}
              >
                {/* Background glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${metric.bg}`}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${metric.bg}`}
                  >
                    <Icon
                      size={24}
                      className={`${metric.color} transition-transform duration-300 group-hover:scale-110`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Value */}
                  <div
                    className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${metric.color}`}
                  >
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="mt-1.5 text-xs font-medium leading-tight text-slate-600 sm:text-sm">
                    {metric.label}
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
