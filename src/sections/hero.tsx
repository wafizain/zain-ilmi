"use client";

import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50"
    >
      {/* Background Glow - dibatasi agar tidak bikin overflow di mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-teal-200/30 blur-3xl sm:h-72 sm:w-72"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-200/30 blur-3xl sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Bimbingan Belajar TK hingga SMA
          </div>

          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Belajar Nyaman,
            <span className="text-teal-700">
              {" "}
              Prestasi Lebih Terarah
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl">
            Zain Ilmi hadir sebagai bimbingan belajar rumahan dengan suasana nyaman,
            pendampingan personal, dan pembelajaran yang terarah untuk membantu
            perkembangan akademik siswa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4">
              Daftar Sekarang
              <ArrowRight size={18} />
            </button>

            <button className="w-full rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4">
              Konsultasi Gratis
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="relative mt-2 lg:mt-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Main Card */}
          <div className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-xl backdrop-blur sm:p-6 md:rounded-[32px] md:p-8 md:shadow-2xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 sm:h-14 sm:w-14">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  Pendampingan Personal
                </h3>

                <p className="text-xs text-slate-500 sm:text-sm">
                  Suasana belajar nyaman dan terarah
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 sm:gap-4 sm:p-4">
                <div className="shrink-0 rounded-xl bg-blue-100 p-2.5 text-blue-700 sm:p-3">
                  <BookOpen className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-slate-800 sm:text-base">
                    Materi Terstruktur
                  </h4>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Pembelajaran sesuai kebutuhan siswa
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 sm:gap-4 sm:p-4">
                <div className="shrink-0 rounded-xl bg-emerald-100 p-2.5 text-emerald-700 sm:p-3">
                  <Users className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-slate-800 sm:text-base">
                    Kelas Lebih Fokus
                  </h4>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    Pendekatan personal dan nyaman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card - posisi aman di mobile (tidak keluar viewport) */}
          <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-bottom-6 sm:-left-6 sm:rounded-3xl sm:px-6 sm:py-4">
            <p className="text-xs text-slate-500 sm:text-sm">
              Siswa Aktif
            </p>

            <h3 className="mt-0.5 text-2xl font-bold text-teal-700 sm:mt-1 sm:text-3xl">
              200+
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
