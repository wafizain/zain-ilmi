import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import {
  siteConfig,
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildLocalBusinessSchema,
} from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Bimbel Bandung untuk Pra-SD, SD, SMP, dan SMA`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "education",

  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },

  openGraph: {
    title: `${siteConfig.name} | Bimbel Bandung untuk Pra-SD, SD, SMP, dan SMA`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Bimbingan Belajar di Bandung`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bimbel Bandung`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  manifest: "/manifest.webmanifest",

  // Verification meta - isi token di siteConfig.verification setelah daftar
  verification: {
    google: siteConfig.verification.google || undefined,
    yandex: siteConfig.verification.yandex || undefined,
    other: siteConfig.verification.bing
      ? { "msvalidate.01": siteConfig.verification.bing }
      : undefined,
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f766e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Build JSON-LD untuk Organization, LocalBusiness, dan WebSite
  const ldJson = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildWebsiteSchema(),
  ];

  return (
    <html lang={siteConfig.language} className="scroll-smooth">
      <head>
        {/* Preconnect ke Google Maps untuk perf maps embed */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}

        {/* Structured Data - Organization, LocalBusiness, WebSite */}
        <Script
          id="ld-json-site"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldJson),
          }}
        />
      </body>
    </html>
  );
}
