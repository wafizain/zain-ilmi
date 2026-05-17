import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ibu Rina",
    role: "Orang Tua Siswa SD",
    message:
      "Anak saya jadi lebih semangat belajar dan lebih percaya diri sejak mengikuti bimbingan di Zain Ilmi.",
  },
  {
    name: "Bapak Andi",
    role: "Orang Tua Siswa SMP",
    message:
      "Suasana belajarnya nyaman dan tentornya sabar. Anak jadi lebih fokus saat belajar.",
  },
  {
    name: "Ibu Salsabila",
    role: "Orang Tua Siswa SMA",
    message:
      "Pendampingan belajarnya terasa lebih personal dibanding bimbel lain. Sangat membantu perkembangan akademik anak.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Testimoni Orang Tua
          </div>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Kepercayaan Orang Tua adalah
            <span className="text-teal-700"> Prioritas Kami</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Kami percaya suasana belajar yang nyaman dan pendampingan yang tepat
            dapat membantu siswa berkembang lebih baik secara akademik maupun percaya diri.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 md:p-8 md:hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1 text-yellow-400 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Message */}
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                &ldquo;{testimonial.message}&rdquo;
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-100 text-base font-bold text-teal-700 sm:h-14 sm:w-14 sm:text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
