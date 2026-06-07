import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import CalistungContent from "./content";

import {
  siteConfig,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/seo";
import { calistungFaqs } from "./faqs";

const PAGE_PATH = "/program/calistung-bandung";
const PAGE_TITLE = "Calistung Bandung | Les Calistung Andir - Zain Ilmi";
const PAGE_DESCRIPTION =
  "Les calistung di Andir, Bandung untuk anak Pra-SD. Belajar membaca, menulis, dan berhitung dengan metode menyenangkan, pendampingan personal, dan jam fleksibel.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "calistung Bandung",
    "calistung Andir Bandung",
    "bimbel calistung Bandung",
    "les calistung Bandung",
    "calistung Maleber",
    "les membaca menulis berhitung Bandung",
    "calistung anak Pra-SD",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${siteConfig.url}${PAGE_PATH}`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Les Calistung di Bandung - Zain Ilmi",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calistung Bandung | Zain Ilmi",
    description: PAGE_DESCRIPTION,
    images: [siteConfig.ogImage],
  },
};

export default function CalistungBandungPage() {
  const ldJson = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([
      { name: "Beranda", path: "/" },
      { name: "Program", path: "/#program" },
      { name: "Calistung Bandung", path: PAGE_PATH },
    ]),
    buildFAQSchema(calistungFaqs),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <CalistungContent />
      <Footer />
      <FloatingWhatsApp />

      <Script
        id="ld-json-calistung"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </main>
  );
}
