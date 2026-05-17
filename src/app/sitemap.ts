import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Anchor section penting di SPA homepage. Search engine boleh
  // mengikuti hash sebagai context tambahan.
  const sections = [
    "",
    "#program",
    "#galeri",
    "#testimoni",
    "#lokasi",
    "#faq",
    "#kontak",
  ];

  return sections.map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
