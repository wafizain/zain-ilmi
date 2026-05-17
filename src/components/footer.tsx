import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:py-14 md:grid-cols-4 md:py-16 lg:px-8">
        {/* Brand */}
        <div className="sm:col-span-2">
          <div className="relative h-10 w-32 sm:h-12 sm:w-40">
            <Image
              src="/logo.svg"
              alt="Zain Ilmi Logo"
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain object-left"
            />
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-base">
            Bimbingan belajar rumahan dengan suasana nyaman,
            pendampingan personal, dan pembelajaran yang terarah
            untuk membantu perkembangan akademik siswa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Navigasi
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-6 sm:space-y-4 sm:text-base">
            <li>
              <a href="#home" className="transition hover:text-teal-700">
                Home
              </a>
            </li>

            <li>
              <a href="#program" className="transition hover:text-teal-700">
                Program
              </a>
            </li>

            <li>
              <a href="#tentang" className="transition hover:text-teal-700">
                Tentang
              </a>
            </li>

            <li>
              <a href="#testimoni" className="transition hover:text-teal-700">
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold text-slate-900 sm:text-lg">
            Kontak
          </h3>

          <div className="mt-4 space-y-4 text-sm text-slate-600 sm:mt-6 sm:space-y-5 sm:text-base">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-teal-700"
              />
              <p className="min-w-0 break-words">Alamat Zain Ilmi</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-teal-700" />
              <a
                href="tel:08xxxxxxxxxx"
                className="break-all transition hover:text-teal-700"
              >
                08xxxxxxxxxx
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-teal-700" />
              <a
                href="mailto:zainilmi@gmail.com"
                className="break-all transition hover:text-teal-700"
              >
                zainilmi@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <InstagramIcon className="shrink-0 text-teal-700" />
              <a
                href="https://instagram.com/zainilmi"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-teal-700"
              >
                @zainilmi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 sm:py-6 sm:text-sm">
        © 2026 Zain Ilmi. All rights reserved.
      </div>
    </footer>
  );
}
