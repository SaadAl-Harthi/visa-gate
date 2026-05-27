import type { Metadata } from "next";
import CanadaVisaContent from "../components/CanadaVisaContent";

export const metadata: Metadata = {
  title: "استخراج تأشيرة كندا للسعوديين | رحلتنا للتأشيرات",

  description:
    "خدمة استخراج تأشيرة كندا السياحية والدراسية مع تجهيز الملفات والمتابعة الكاملة حتى إصدار التأشيرة.",

  alternates: {
    canonical: "/canada",
  },

  openGraph: {
    title: "استخراج تأشيرة كندا للسعوديين",

    description:
      "نساعدك في استخراج تأشيرة كندا بسهولة مع مراجعة المتطلبات والملف.",

    url: "/canada",

    images: ["/og-image-v2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "استخراج تأشيرة كندا",
    description:
      "خدمة استخراج تأشيرة كندا للسعوديين بسهولة وسرعة.",
    images: ["/og-image-v2.png"],
  },
};

export default function CanadaPage() {
  return <CanadaVisaContent />;
}