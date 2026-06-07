import type { Metadata } from "next";
import Script from "next/script";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import SDContent from "./content";

import {
  siteConfig,
  buildLocalBusinessSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
} from "@/lib/seo";
import { sdFaqs } from "./faqs";

const PAGE_PATH = "/program/les-privat-sd-bandung";
const PAGE_TITLE =
  "Les Privat SD Bandung | Bimbel SD Andir - Zain Ilmi";
const PAGE_DESCRIPTION =
  "Les privat SD di Andir, Bandung. Pendampingan belajar personal untuk siswa SD: PR, Matematika, Bahasa Indonesia, IPA, IPS. Jadwal fleksibel, tutor berpengalaman.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "les privat SD Bandung",
    "guru privat SD Bandung",
    "bimbel SD Bandung",
    "les SD Bandung",
    "les matematika SD Bandung",
    "les untuk anak SD Bandung",
    "bimbingan belajar SD Bandung",
    "les privat Andir Bandung",
    "les SD Andir",
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
        alt: "Les Privat SD di Bandung - Zain Ilmi",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Privat SD Bandung | Zain Ilmi",
    description: PAGE_DESCRIPTION,
    images: [siteConfig.ogImage],
  },
};

export default function LesPrivatSDBandungPage() {
  const ldJson = [
    buildLocalBusinessSchema(),
    buildBreadcrumbSchema([
      { name: "Beranda", path: "/" },
      { name: "Program", path: "/#program" },
      { name: "Les Privat SD Bandung", path: PAGE_PATH },
    ]),
    buildFAQSchema(sdFaqs),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <SDContent />
      <Footer />
      <FloatingWhatsApp />

      <Script
        id="ld-json-sd"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
    </main>
  );
}
