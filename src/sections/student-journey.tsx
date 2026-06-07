"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type JourneyStage = {
  step: number;
  title: string;
  description: string;
  accentColor: string;
  accentBg: string;
};

const journeyStages: JourneyStage[] = [
  {
    step: 1,
    title: "Kesulitan Memahami Pelajaran",
    description:
      "Siswa menghadapi tantangan dalam memahami materi dan membutuhkan bimbingan yang tepat.",
    accentColor: "bg-red-500",
    accentBg: "bg-red-50",
  },
  {
    step: 2,
    title: "Lingkungan Belajar yang Nyaman",
    description:
      "Siswa belajar dalam suasana yang hangat, kondusif, dan mendukung perkembangan mereka.",
    accentColor: "bg-blue-500",
    accentBg: "bg-blue-50",
  },
  {
    step: 3,
    title: "Pendampingan Personal",
    description:
      "Setiap siswa mendapatkan perhatian dan bimbingan yang lebih dekat dari pengajar berpengalaman.",
    accentColor: "bg-teal-500",
    accentBg: "bg-teal-50",
  },
  // {
  //   step: 4,
  //   title: "Progress Dipantau Berkala",
  //   description:
  //     "Perkembangan belajar terus dipantau untuk memastikan kemajuan yang konsisten.",
  //   accentColor: "bg-amber-500",
  //   accentBg: "bg-amber-50",
  // },
  {
    step: 4,
    title: "Meraih Prestasi dan Percaya Diri",
    description:
      "Siswa mencapai hasil akademik yang lebih baik serta membangun rasa percaya diri dalam belajar.",
    accentColor: "bg-emerald-500",
    accentBg: "bg-emerald-50",
  },
];

function JourneyCard({
  stage,
  index,
  isLast,
}: {
  stage: JourneyStage;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="relative flex items-center">
      {/* Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
          <div className="flex items-start gap-4">
            {/* Step indicator */}
            <div className="shrink-0">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stage.accentBg} text-base font-bold text-slate-700 sm:h-12 sm:w-12 sm:text-lg`}
              >
                {stage.step}
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                {stage.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {stage.description}
              </p>
            </div>
          </div>

          {/* Accent bar */}
          <div
            className={`absolute bottom-0 left-0 h-1 w-full ${stage.accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Timeline connector (vertical line between cards) */}
      {!isLast && (
        <div
          className="absolute left-[30px] top-full hidden h-6 w-0.5 bg-gradient-to-b from-teal-200 to-transparent sm:left-[34px] xl:block"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function StudentJourney() {
  return (
    <section
      id="perjalanan"
      aria-labelledby="journey-heading"
      className="relative bg-white pt-4 pb-10 sm:pt-6 sm:pb-14 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="journey-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Dari Kesulitan Belajar
            <br className="hidden sm:inline" />
            <span className="text-teal-700"> Menuju Prestasi</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Melalui pendampingan yang personal dan lingkungan belajar yang nyaman,
            kami membantu setiap siswa berkembang sesuai potensinya.
          </p>
        </div>

        {/* Journey stages */}
        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {journeyStages.map((stage, index) => (
            <JourneyCard
              key={stage.step}
              stage={stage}
              index={index}
              isLast={index === journeyStages.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center sm:mt-16"
        >
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-95 sm:px-8 sm:py-3.5"
          >
            Mulai Perjalanan Belajar
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
        </motion.div>
      </div>
    </section>
  );
}
