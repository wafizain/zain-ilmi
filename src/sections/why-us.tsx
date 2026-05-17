import {
  BookOpen,
  Home,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Suasana Belajar Nyaman",
    description:
      "Lingkungan belajar rumahan yang tenang dan mendukung fokus siswa.",
  },
  {
    icon: Users,
    title: "Pendampingan Personal",
    description:
      "Setiap siswa mendapatkan perhatian dan pendekatan belajar yang lebih dekat.",
  },
  {
    icon: BookOpen,
    title: "Pembelajaran Terarah",
    description:
      "Materi disusun sesuai kebutuhan dan perkembangan akademik siswa.",
  },
  {
    icon: Sparkles,
    title: "Ramah dan Supportif",
    description:
      "Menciptakan pengalaman belajar yang menyenangkan dan membangun percaya diri.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="tentang"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Kenapa Memilih Zain Ilmi
          </div>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Pendampingan Belajar yang
            <span className="text-teal-700"> Nyaman dan Terarah</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Kami percaya setiap anak memiliki cara belajar yang berbeda.
            Karena itu Zain Ilmi hadir dengan pendekatan yang lebih personal,
            nyaman, dan fokus pada perkembangan akademik siswa.
          </p>
        </div>

        {/* Cards - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-2xl sm:p-7 md:p-8 md:hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 sm:h-[30px] sm:w-[30px]" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
