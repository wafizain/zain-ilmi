import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-teal-200/30 blur-3xl sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-emerald-600 px-6 py-12 text-center text-white shadow-2xl sm:rounded-[32px] sm:px-8 sm:py-16 md:rounded-[40px] md:px-12 md:py-20 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 sm:px-4 sm:py-2 sm:text-sm">
              Mulai Belajar Bersama Zain Ilmi
            </div>

            <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Dampingi Perjalanan Belajar Anak dengan Lebih Nyaman
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              Zain Ilmi hadir untuk membantu siswa belajar dengan suasana yang nyaman,
              pendampingan yang lebih personal, dan pembelajaran yang terarah.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-teal-700 transition hover:bg-slate-100 active:scale-[0.98] sm:px-7 sm:py-4">
                Daftar Sekarang
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 active:scale-[0.98] sm:px-7 sm:py-4">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
