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
      className={`overflow-hidden rounded-2xl border bg-white transition duration-300 sm:rounded-3xl ${
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
            className={`text-sm font-semibold leading-snug transition sm:text-base ${
              isOpen ? "text-teal-700" : "text-slate-900"
            }`}
          >
            {item.question}
          </span>

          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 sm:h-9 sm:w-9 ${
              isOpen
                ? "rotate-45 bg-teal-700 text-white"
                : "bg-slate-100 text-slate-700"
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
      className="relative bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700 sm:px-4 sm:py-2 sm:text-sm">
            Pertanyaan yang Sering Ditanyakan
          </p>

          <h2
            id="faq-heading"
            className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Mungkin Ini Beberapa Hal yang
            <span className="text-teal-700"> Sedang Anda Pikirkan</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            Berikut beberapa pertanyaan yang sering ditanyakan orang tua
            seputar program dan suasana belajar di Zain Ilmi.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3 sm:mt-14 sm:space-y-4 lg:mt-16">
          {faqs.map((item, index) => (
            <FAQAccordion
              key={item.question}
              index={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center sm:mt-14 sm:flex-row sm:gap-5 sm:px-8 sm:py-7 sm:text-left">
          <p className="text-sm text-slate-700 sm:text-base">
            Masih punya pertanyaan? Kami senang membantu Anda.
          </p>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Zain Ilmi via WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98] sm:px-6"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Hubungi via WhatsApp
          </a>
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
