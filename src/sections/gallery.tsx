import Image from "next/image";
import { Sparkles } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  /** Tinggi card di desktop. Variasi ringan biar tidak monoton. */
  className?: string;
};

const items: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&auto=format&fit=crop&q=80",
    alt: "Rak buku belajar yang rapi",
    caption: "Rak Buku",
    className: "md:row-span-2 md:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=80",
    alt: "Suasana belajar yang fokus dan nyaman",
    caption: "Suasana Belajar",
  },
  {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop&q=80",
    alt: "Meja belajar dengan buku catatan",
    caption: "Meja Belajar",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&auto=format&fit=crop&q=80",
    alt: "Aktivitas belajar siswa bersama tentor",
    caption: "Aktivitas Belajar",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&auto=format&fit=crop&q=80",
    alt: "Papan tulis dengan materi pembelajaran",
    caption: "Papan Tulis",
  },
  {
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900&auto=format&fit=crop&q=80",
    alt: "Ruang belajar yang hangat dan tertata",
    caption: "Ruang Belajar",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeri"
      aria-labelledby="galeri-heading"
      className="relative bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Galeri Zain Ilmi
          </p>

          <h2
            id="galeri-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Sekilas Suasana Belajar di
            <span className="text-teal-700"> Zain Ilmi</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Lingkungan belajar yang hangat, tenang, dan tertata rapi
            untuk mendukung anak belajar dengan lebih nyaman dan fokus.
          </p>
        </div>

        {/* Gallery Grid - bento style: 2 cols tablet, 3 cols desktop */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {items.map((item, index) => (
            <figure
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                item.className ?? ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-auto md:h-full md:min-h-[260px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient overlay untuk readability caption */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/0 to-slate-900/0 opacity-0 transition duration-500 group-hover:opacity-100"
                />

                {/* Caption muncul saat hover */}
                {item.caption && (
                  <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:left-5">
                    {item.caption}
                  </figcaption>
                )}
              </div>
            </figure>
          ))}
        </div>

        {/* Floating badge - bottom callout */}
        <div className="mt-10 flex justify-center sm:mt-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-sm sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
            <Sparkles className="h-4 w-4 text-teal-700 sm:h-[18px] sm:w-[18px]" />
            Lingkungan Belajar yang Mendukung
          </div>
        </div>
      </div>
    </section>
  );
}
