import type { Metadata } from "next";
import UsaVisaContent from "../components/UsaVisaContent";

export const metadata: Metadata = {
  title: "استخراج تأشيرة أمريكا للسعوديين | رحلتنا للتأشيرات",

  description:
    "نساعدك في استخراج تأشيرة أمريكا السياحية أو الدراسية مع تجهيز الملف، تعبئة النماذج، وحجز الموعد.",

  alternates: {
    canonical: "/usa",
  },

  openGraph: {
    title: "استخراج تأشيرة أمريكا للسعوديين",

    description:
      "خدمة متكاملة لاستخراج تأشيرة أمريكا مع متابعة الطلب خطوة بخطوة.",

    url: "/usa",

    images: ["/og-image-v2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "استخراج تأشيرة أمريكا",
    description: "خدمة استخراج تأشيرة أمريكا السياحية والدراسية.",
    images: ["/og-image-v2.png"],
  },
};

export default function UsaPage() {
  return <UsaVisaContent />;
}