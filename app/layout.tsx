import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visa-gate.vercel.app"),

  alternates: {
    canonical: "/",
  },

  title: "رحلتنا للتأشيرات | تأشيرات سياحية ودراسية",

  description:
    "استخراج التأشيرات السياحية والدراسية لجميع الوجهات العالمية مع تجهيز الملفات، حجز المواعيد، والمتابعة عبر واتساب.",

  verification: {
    google: "a_FZgceeVsU7gRvj0J29ggKAgPKRCYnGg9n1Hxi8Lvo",
  },

  openGraph: {
    title: "رحلتنا للتأشيرات",
    description:
      "خدمات استخراج التأشيرات السياحية والدراسية لجميع الوجهات العالمية.",
    url: "/",
    siteName: "رحلتنا للتأشيرات",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "رحلتنا للتأشيرات",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "رحلتنا للتأشيرات",
    description:
      "خدمات استخراج التأشيرات السياحية والدراسية لجميع الوجهات العالمية.",
    images: ["/og-image-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full flex flex-col">
  {children}
  <Footer />
  <WhatsAppButton />
  <Analytics />
</body>
    </html>
  );
}

