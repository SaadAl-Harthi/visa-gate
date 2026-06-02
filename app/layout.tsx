import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://visarace.net"),

  alternates: {
    canonical: "/",
  },

  title: "رحلتنا للتأشيرات | تأشيرات سياحية ودراسية",

  description:
    "استخراج التأشيرات السياحية والدراسية لجميع الوجهات العالمية مع تجهيز الملفات، حجز المواعيد، والمتابعة عبر واتساب.",

  verification: {
    google: "2gwF7lQNIq2CFVTlAS1R7cWptoqOreI-LvFtXwCtmjY",
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
  <GoogleAnalytics gaId="G-Z8BRTJ9SR3" />
  <Script id="microsoft-clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "x0ntki83kj");
    `}
  </Script>
</body>
    </html>
  );
}

