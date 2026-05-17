import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zain Ilmi | Bimbingan belajar di Bandung",

  description:
    "Bimbel di Bandung untuk Pra-SD & Calistung, SD, SMP, dan SMA dengan suasana belajar yang nyaman dan pendampingan personal.",

  openGraph: {
    title: "Zain Ilmi",
    description:
      "Bimbingan belajar dengan suasana belajar nyaman dan pendampingan personal.",
    url: "https://zainilmi.web.id",
    siteName: "Zain Ilmi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zain Ilmi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zain Ilmi",
    description:
      "Bimbingan Belajar dengan suasana belajar yang nyaman dan terarah.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
