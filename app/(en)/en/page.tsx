import type { Metadata } from "next";
import EnglishHomePageClient from "../../components/EnglishHomePageClient";
import JsonLd from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "VisaRace | Tourist and Study Visas",
  description:
    "Tourist and study visa services with professional file preparation, appointment support, and WhatsApp follow-up through VisaRace.",
  alternates: {
    canonical: "/en",
    languages: {
      "ar-SA": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "VisaRace",
    description:
      "Professional tourist and study visa services with clear steps and dedicated support.",
    url: "/en",
    siteName: "VisaRace",
    images: ["/og-image-v2.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisaRace | Tourist and Study Visas",
    description:
      "Tourist and study visa services with professional file preparation and follow-up.",
    images: ["/og-image-v2.png"],
  },
};

export default function EnglishHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "VisaRace",
    alternateName: "Study Race",
    url: "https://visarace.net/en",
    logo: "https://visarace.net/logo.png",
    telephone: "+966552525141",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office 102, First Floor, Al Humaidhi Tower, Madinah Road, Al Salamah District",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    areaServed: "SA",
    description:
      "Tourist and study visa services with document preparation, appointment support, and application follow-up.",
    sameAs: [
      "https://instagram.com/studyrace1",
      "https://snapchat.com/add/studyrace1",
      "https://tiktok.com/@studyrace1",
      "https://linkedin.com/company/studyrace",
      "https://x.com/studyrace1",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VisaRace",
    url: "https://visarace.net/en",
    inLanguage: "en",
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <EnglishHomePageClient />
    </>
  );
}
