"use client";

import { useState } from "react";
import Script from "next/script";
import { Plus, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { faqs, type FAQItem } from "@/data/faqs";
import { buildFAQSchema, siteConfig } from "@/lib/seo";

function FAQAccordion({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOpen
          ? "border-teal-200 shadow-lg shadow-teal-700/5"
          : "border-slate-200 hover:border-slate-300 hover:shadow-md"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span
            className={`text-sm font-semibold leading-snug transition-colors sm:text-base ${
              isOpen ? "text-teal-700" : "text-slate-900"
            }`}
          >
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "rotate-45 bg-teal-700 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Plus className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:pt-5 sm:text-base">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Heading & Description */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700 sm:mb-3 sm:text-sm"
              >
                FAQ
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                id="faq-heading"
                className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Pertanyaan yang Sering Diajukan
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base md:text-lg"
              >
                Temukan informasi yang paling sering ditanyakan oleh orang tua
                dan siswa mengenai program belajar di Zain Ilmi.
              </motion.p>

              {/* CTA Card - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:block"
              >
                <p className="mb-4 text-base font-semibold text-slate-900">
                  Masih memiliki pertanyaan?
                </p>
                {/* <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  Tim kami siap membantu Anda menemukan program belajar yang
                  tepat untuk anak Anda.
                </p> */}
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi Zain Ilmi via WhatsApp"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-800 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Hubungi Kami via WhatsApp
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <FAQAccordion
                    index={index}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA - Mobile Only */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-10 lg:hidden">
              <p className="mb-3 text-center text-base font-semibold text-slate-900 sm:mb-4">
                Masih memiliki pertanyaan?
              </p>
              {/* <p className="mb-5 text-center text-sm leading-relaxed text-slate-600">
                kami siap membantu Anda menemukan program belajar yang tepat
                untuk anak Anda.
              </p> */}
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi Zain Ilmi via WhatsApp"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-800 active:scale-[0.98] sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data: FAQPage */}
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFAQSchema(faqs)),
        }}
      />
    </section>
  );
}
