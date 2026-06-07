import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Anchor section penting di SPA homepage. Search engine boleh
  // mengikuti hash sebagai context tambahan.
  const sections = [
    "",
    "#tentang",
    "#perjalanan",
    "#program",
    "#testimoni",
    "#lokasi",
    "#faq",
    "#kontak",
  ];

  // Halaman landing terpisah yang dapat diindeks
  const pages = [
    "/program/calistung-bandung",
    "/program/les-privat-sd-bandung",
  ];

  const sectionEntries = sections.map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));

  const pageEntries = pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...sectionEntries, ...pageEntries];
}
