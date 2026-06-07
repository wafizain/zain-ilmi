"use client";

import { MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/seo";
import { scrollToSection } from "@/lib/scroll-to";

export default function CTA() {
  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("lokasi");
  };

  return (
    <section
      id="kontak"
      aria-labelledby="kontak-heading"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-200/30 via-teal-200/30 to-yellow-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-50/30 shadow-2xl shadow-slate-900/5 sm:rounded-[32px] md:rounded-[40px]"
        >
          <div className="px-6 py-12 text-center sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="kontak-heading"
              className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Siap Bergabung Bersama{" "}
              <span className="text-teal-700">Zain Ilmi?</span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:text-lg"
            >
              Kami membuka program belajar untuk Pra-SD & Calistung, SD, SMP, dan
              SMA dengan suasana belajar yang nyaman serta pendampingan yang
              personal. Hubungi kami untuk proses pendaftaran.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
            >
              {/* Primary CTA */}
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi Zain Ilmi via WhatsApp"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/25 transition-all hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-700/30 active:scale-[0.98] sm:w-auto sm:px-8 sm:text-lg"
              >
                <MessageCircle
                  size={20}
                  className="transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                Hubungi via WhatsApp
              </a>

              {/* Secondary CTA */}
              <a
                href="#lokasi"
                onClick={handleLocationClick}
                aria-label="Lihat lokasi Zain Ilmi"
                className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] sm:w-auto sm:px-8 sm:text-lg"
              >
                <MapPin
                  size={20}
                  className="transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                Lihat Lokasi Kami
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
