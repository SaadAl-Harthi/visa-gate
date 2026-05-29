import type { Metadata } from "next";
import VisaPageTemplate from "../components/VisaPageTemplate";
import { uaeVisaPage } from "../data/visas";

export const metadata: Metadata = {
  title: "استخراج تأشيرة الإمارات للسعوديين | رحلتنا للتأشيرات",

  description:
    "خدمة استخراج تأشيرة الإمارات السياحية بسرعة وسهولة مع متابعة الطلب وتجهيز المتطلبات.",

  alternates: {
    canonical: "/uae",
  },

  openGraph: {
    title: "استخراج تأشيرة الإمارات",

    description:
      "نساعدك في استخراج تأشيرة الإمارات بخطوات سهلة وسريعة.",

    url: "/uae",

    images: ["/og-image-v2.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "استخراج تأشيرة الإمارات",
    description:
      "خدمة استخراج تأشيرة الإمارات للسعوديين.",
    images: ["/og-image-v2.png"],
  },
};

export default function UAEPage() {
  return <VisaPageTemplate data={uaeVisaPage} />;
}
