import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";

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
    canonical: "/en",
    languages: {
      "ar-SA": "/",
      en: "/en",
    },
  },
  title: "VisaRace | Tourist and Study Visas",
  description:
    "VisaRace provides tourist and study visa services with professional file preparation, appointment support, and WhatsApp follow-up.",
  verification: {
    google: "2gwF7lQNIq2CFVTlAS1R7cWptoqOreI-LvFtXwCtmjY",
  },
  openGraph: {
    title: "VisaRace",
    description:
      "Professional tourist and study visa services with clear steps and dedicated support.",
    url: "/en",
    siteName: "VisaRace",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "VisaRace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaRace",
    description:
      "Tourist and study visa services with professional file preparation and follow-up.",
    images: ["/og-image-v2.png"],
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Footer locale="en" />
        <WhatsAppButton locale="en" />
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
