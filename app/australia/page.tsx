import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import VisaPageTemplate from "../components/VisaPageTemplate";
import { australiaVisaPage } from "../data/visas";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: australiaVisaPage.variants[0].faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "استخراج تأشيرة أستراليا للسعوديين | رحلتنا للتأشيرات",

  description:
    "استخراج تأشيرة أستراليا السياحية والدراسية مع تجهيز الملف ومتابعة الطلب خطوة بخطوة.",

  alternates: {
    canonical: "/australia",
  },

  openGraph: {
    title: "استخراج تأشيرة أستراليا للسعوديين",

    description:
      "خدمة احترافية لاستخراج تأشيرة أستراليا بسهولة وسرعة.",

    url: "/australia",

    images: ["/og-image-v2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "استخراج تأشيرة أستراليا",
    description:
      "خدمة استخراج تأشيرة أستراليا السياحية والدراسية.",
    images: ["/og-image-v2.png"],
  },
};

export default function AustraliaPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <VisaPageTemplate data={australiaVisaPage} />
    </>
  );
}
