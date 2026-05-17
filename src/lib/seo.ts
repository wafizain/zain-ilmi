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
    "Bimbel di Bandung untuk Pra-SD, Calistung, SD, SMP, dan SMA dengan suasana belajar nyaman dan pendampingan personal.",

  longDescription:
    "Zain Ilmi adalah bimbingan belajar rumahan di Bandung yang menyediakan program TK, Pra-SD, Calistung, SD, SMP, dan SMA. Suasana belajar yang hangat, pendampingan personal, dan pembelajaran terarah untuk membantu perkembangan akademik siswa.",

  keywords: [
    "bimbel Bandung",
    "bimbingan belajar Bandung",
    "calistung Bandung",
    "bimbel calistung",
    "bimbel SD Bandung",
    "bimbel SMP Bandung",
    "bimbel SMA Bandung",
    "bimbel rumahan Bandung",
    "les privat Bandung",
    "les anak Bandung",
    "bimbel Maleber",
    "bimbel Andir",
    "Zain Ilmi",
    "bimbingan belajar TK",
    "Pra-SD",
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

  // Jam buka
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "13:00",
      closes: "20:00",
    },
  ],

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

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: siteConfig.phoneInternational,
    description: siteConfig.description,
    priceRange: "$$",
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
    openingHoursSpecification: siteConfig.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: {
      "@type": "City",
      name: "Bandung",
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
