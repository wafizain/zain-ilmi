import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zain Ilmi | Bimbingan Belajar TK hingga SMA di Bandung",

  description:
    "Zain Ilmi adalah bimbingan belajar rumahan di Bandung untuk TK, SD, SMP, dan SMA dengan suasana belajar nyaman, pendampingan personal, dan pembelajaran terarah.",

  keywords: [
    "bimbel bandung",
    "bimbingan belajar bandung",
    "les privat bandung",
    "bimbel tk sd smp sma",
    "bimbel rumahan",
    "zain ilmi",
  ],

  authors: [{ name: "Zain Ilmi" }],

  openGraph: {
    title: "Zain Ilmi",
    description:
      "Bimbingan belajar nyaman dan terarah untuk TK hingga SMA.",
    url: "https://zainilmi.web.id",
    siteName: "Zain Ilmi",
    locale: "id_ID",
    type: "website",
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
