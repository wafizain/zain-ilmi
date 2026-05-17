import {
  Baby,
  BookOpen,
  GraduationCap,
  School,
} from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Pra-SD & Calistung",
    description:
      "Membantu anak belajar membaca, menulis, dan berhitung dengan metode yang nyaman, menyenangkan, dan mudah dipahami.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: BookOpen,
    title: "Program SD",
    description:
      "Pendampingan belajar sekolah dasar untuk membantu siswa memahami materi dengan lebih fokus dan nyaman.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: School,
    title: "Program SMP",
    description:
      "Membantu siswa meningkatkan pemahaman materi dan membangun kebiasaan belajar yang lebih terarah.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Program SMA",
    description:
      "Pendalaman materi sekolah dan persiapan akademik untuk membantu siswa mencapai target belajar.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Programs() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Program Belajar
          </p>

          <h2
            id="program-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Pendampingan Belajar untuk
            <span className="text-teal-700"> Semua Jenjang</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Zain Ilmi menyediakan program belajar dari TK hingga SMA
            dengan pendekatan yang nyaman, personal, dan terarah sesuai kebutuhan siswa.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 xl:grid-cols-4">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 md:p-8 md:hover:-translate-y-2"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${program.color} sm:h-16 sm:w-16`}
                  aria-hidden="true"
                >
                  <Icon className="h-7 w-7 sm:h-[30px] sm:w-[30px]" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:mt-6 sm:text-2xl">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                  {program.description}
                </p>

                <a
                  href={`https://wa.me/6281290964840?text=Halo%20saya%20ingin%20bertanya%20tentang%20${program.title}%20di%20Zain%20Ilmi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-teal-700 transition hover:text-teal-800 sm:mt-8"
                >
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
