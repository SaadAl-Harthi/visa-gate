import type { Metadata } from "next";
import VisaPageTemplate from "../components/VisaPageTemplate";
import { ukVisaPage } from "../data/visas";

export const metadata: Metadata = {
  title: "استخراج تأشيرة بريطانيا للسعوديين | رحلتنا للتأشيرات",

  description:
    "خدمة استخراج تأشيرة بريطانيا للسعوديين مع تجهيز الملف، حجز الموعد، والمتابعة خطوة بخطوة عبر واتساب.",

  alternates: {
    canonical: "/uk",
  },

  openGraph: {
    title: "استخراج تأشيرة بريطانيا للسعوديين",

    description:
      "نساعدك في استخراج تأشيرة بريطانيا وتجهيز الملف والمتطلبات بسهولة.",

    url: "/uk",

    images: ["/og-image-v2.png"],
  },
};

export default function UKPage() {
  return <VisaPageTemplate data={ukVisaPage} />;
}
