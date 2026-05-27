import type { Metadata } from "next";
import SchengenVisaContent from "../components/SchengenVisaContent";

export const metadata: Metadata = {
  title: "استخراج تأشيرة الشنغن | رحلتنا للتأشيرات",

  description:
    "استخراج تأشيرة الشنغن للسعوديين مع تجهيز الملف، التأمين الطبي، حجوزات السفر، والمتابعة الكاملة.",

  alternates: {
    canonical: "/schengen",
  },

  openGraph: {
    title: "استخراج تأشيرة الشنغن",
    description:
      "نساعدك في استخراج فيزا الشنغن لجميع الدول الأوروبية بسهولة.",
    url: "/schengen",
    images: ["/og-image-v2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "استخراج تأشيرة الشنغن",
    description:
      "خدمة استخراج تأشيرة الشنغن للسعوديين بخطوات سهلة.",
    images: ["/og-image-v2.png"],
  },
};

export default function SchengenPage() {
  return <SchengenVisaContent />;
}