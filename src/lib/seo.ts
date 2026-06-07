/**
 * Konfigurasi SEO terpusat untuk Zain Ilmi.
 * Semua metadata, schema JSON-LD, dan info brand mengalir dari sini.
 */

export const siteConfig = {
  name: "Zain Ilmi",
  shortName: "Zain Ilmi",
  legalName: "Zain Ilmi - Bimbingan Belajar",
  url: "https://zainilmi.web.id",
  locale: "id_ID",
  language: "id",

  description:
    "Bimbel di Andir, Bandung untuk Pra-SD, Calistung, SD, SMP, dan SMA. Pendampingan personal, jam belajar fleksibel, dan pengalaman mengajar 17+ tahun.",

  longDescription:
    "Zain Ilmi adalah bimbingan belajar di Kecamatan Andir, Kota Bandung yang menyediakan program Pra-SD, Calistung, SD, SMP, dan SMA. Dengan pengalaman lebih dari 17 tahun, suasana belajar yang hangat, pendampingan personal, dan jam belajar fleksibel untuk membantu perkembangan akademik siswa di Bandung.",

  keywords: [
    "bimbel Bandung",
    "bimbel Andir Bandung",
    "bimbingan belajar Bandung",
    "bimbingan belajar Andir",
    "bimbel SD Bandung",
    "bimbel SMP Bandung",
    "bimbel SMA Bandung",
    "calistung Bandung",
    "bimbel calistung",
    "les privat Bandung",
    "les anak Bandung",
    "bimbel Maleber",
    "bimbel Garuda Bandung",
    "bimbel Dunguscariang",
    "bimbel rumahan Bandung",
    "Zain Ilmi",
    "Pra-SD Bandung",
  ],

  // Kontak
  phone: "081290964840",
  phoneInternational: "+6281290964840",
  whatsappNumber: "6281290964840", // tanpa "+" untuk wa.me link

  // Alamat
  address: {
    street:
      "Jl. Maleber Utara Gg. Bakti 04 No.197, RT.02/RW.08",
    locality: "Kec. Andir",
    region: "Jawa Barat",
    city: "Kota Bandung",
    postalCode: "40184",
    country: "ID",
  },

  // Geo (Maleber, Bandung)
  geo: {
    latitude: -6.906498,
    longitude: 107.572229,
  },

  // Jam buka — Senin s.d. Jumat, 08.00–17.00 WIB (4 pertemuan/minggu, jam fleksibel)
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],

  // Tahun berdiri (17+ tahun pengalaman)
  foundingYear: "2008",

  // Sosial
  social: {
    instagram: "https://instagram.com/zainilmi",
    whatsapp: "https://wa.me/6281290964840",
  },

  // Verification (isi token saat sudah daftar Search Console / Bing)
  verification: {
    google: "", // contoh: "abc123_xyz"
    bing: "",
    yandex: "",
  },

  ogImage: "/og-image.png",
};

export const FULL_ADDRESS = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

/* -------------------------------------------------------------------------- */
/*                              JSON-LD BUILDERS                              */
/* -------------------------------------------------------------------------- */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.longDescription,
    telephone: siteConfig.phoneInternational,
    foundingDate: siteConfig.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

const PROGRAMS = [
  {
    name: "Bimbel Pra-SD & Calistung",
    description:
      "Program calistung (membaca, menulis, berhitung) untuk anak Pra-SD melalui metode belajar menyenangkan dan interaktif.",
  },
  {
    name: "Bimbel SD",
    description:
      "Memperkuat pemahaman dasar akademik dan membangun rasa percaya diri siswa SD dalam mengikuti pelajaran sekolah.",
  },
  {
    name: "Bimbel SMP",
    description:
      "Pendampingan belajar terarah untuk membantu siswa SMP menghadapi materi yang semakin kompleks.",
  },
  {
    name: "Bimbel SMA",
    description:
      "Fokus pada pemahaman konsep, peningkatan prestasi akademik, dan persiapan ujian untuk siswa SMA.",
  },
];

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.svg`,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
    description: siteConfig.description,
    priceRange: "$$",
    foundingDate: siteConfig.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
    openingHoursSpecification: siteConfig.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: [
      { "@type": "City", name: "Kota Bandung" },
      { "@type": "AdministrativeArea", name: "Kecamatan Andir" },
      { "@type": "Place", name: "Maleber" },
      { "@type": "Place", name: "Garuda" },
      { "@type": "Place", name: "Dunguscariang" },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Program Bimbingan Belajar Zain Ilmi",
      itemListElement: PROGRAMS.map((program) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: program.name,
          description: program.description,
          provider: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      })),
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
