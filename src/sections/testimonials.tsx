"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ibu Rina Permata",
    role: "Orang Tua Siswa SD",
    message:
      "Awalnya anak saya agak susah fokus belajar, tapi setelah ikut di Zain Ilmi jadi lebih semangat dan lebih percaya diri saat belajar di sekolah.",
    rating: 5,
  },
  {
    name: "Bapak Andi Wijaya",
    role: "Orang Tua Siswa SMP",
    message:
      "Suasana belajarnya nyaman dan pengajar sabar menghadapi anak-anak. Sekarang anak saya jadi lebih rajin belajar tanpa harus disuruh terus.",
    rating: 5,
  },
  {
    name: "Ibu Salsabila",
    role: "Orang Tua Siswa SMA",
    message:
      "Saya suka karena pendekatannya lebih personal dan tidak terlalu kaku. Anak jadi lebih nyaman bertanya kalau ada materi yang belum dipahami.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:mb-3 sm:text-sm"
          >
            Testimoni
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="testimoni-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Apa Kata Orang Tua dan Siswa Kami
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg"
          >
            Kepercayaan orang tua dan perkembangan siswa menjadi motivasi kami
            untuk terus memberikan pendampingan belajar terbaik.
          </motion.p>
        </div>

        {/* Testimonial Wall - Masonry-style Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl sm:rounded-3xl sm:p-7 md:p-8"
            >
              {/* Large Quote Mark Decoration */}
              <div className="absolute -right-2 -top-2 opacity-5 transition-all duration-300 group-hover:opacity-10">
                <Quote size={80} className="text-teal-700" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Star Rating */}
                <div className="mb-4 flex gap-0.5 sm:mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-12 bg-gradient-to-r from-teal-200 to-transparent transition-all duration-300 group-hover:w-16 sm:my-6" />

                {/* User Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-blue-100 text-base font-bold text-teal-700 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500 sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
