import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

export default function Location() {
  return (
    <section
      id="lokasi"
      className="bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Left Content */}
        <div>
          <div className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Lokasi Belajar
          </div>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Belajar Nyaman dalam
            <span className="text-teal-700"> Suasana Rumahan</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Zain Ilmi menyediakan lingkungan belajar yang nyaman,
            tenang, dan mendukung perkembangan akademik siswa dari TK hingga SMA.
          </p>

          <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:gap-4 sm:p-5">
              <div className="shrink-0 rounded-xl bg-teal-100 p-2.5 text-teal-700 sm:p-3">
                <MapPin className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-slate-900">Alamat</h3>

                <p className="mt-1 text-sm text-slate-600 sm:text-base">
                  Isi alamat lengkap Zain Ilmi di sini
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:gap-4 sm:p-5">
              <div className="shrink-0 rounded-xl bg-blue-100 p-2.5 text-blue-700 sm:p-3">
                <Clock3 className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-slate-900">Jam Belajar</h3>

                <p className="mt-1 text-sm text-slate-600 sm:text-base">
                  Senin - Sabtu • 13.00 - 20.00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 sm:gap-4 sm:p-5">
              <div className="shrink-0 rounded-xl bg-emerald-100 p-2.5 text-emerald-700 sm:p-3">
                <Phone className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-slate-900">Kontak</h3>

                <p className="mt-1 text-sm text-slate-600 sm:text-base">
                  08xxxxxxxxxx
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map - aspect ratio responsive agar tidak kepotong */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl sm:rounded-[32px]">
          <div className="aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[500px]">
            <iframe
              title="Lokasi Zain Ilmi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.6012805087516!2d107.5722298743568!3d-6.906498567590311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7087ad29017%3A0x5bec249b4c3439a4!2sLes%20Zain%20Ilmi!5e1!3m2!1sid!2sid!4v1778995337150!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
