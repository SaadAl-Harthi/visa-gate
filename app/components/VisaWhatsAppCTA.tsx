"use client";

import { getPageAnalyticsParams, trackEvent } from "../lib/analytics";

type VisaWhatsAppCTAProps = {
  visaName: string;
  visaSlug?: string;
  message?: string;
  locale?: "ar" | "en";
  children: React.ReactNode;
};

export default function VisaWhatsAppCTA({
  visaName,
  visaSlug,
  message,
  locale = "ar",
  children,
}: VisaWhatsAppCTAProps) {
  const sendToWhatsApp = () => {
    trackEvent("whatsapp_click", {
      button_location: "visa_page_cta",
      visa_slug: visaSlug,
      visa_name: visaName,
      ...getPageAnalyticsParams(),
    });

    const whatsappMessage =
      message ??
      (locale === "ar"
        ? `السلام عليكم، أود استخراج تأشيرة ${visaName}`
        : `Hello, I would like to apply for ${visaName}`);

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={sendToWhatsApp}
      className="w-full rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 py-5 text-lg font-black text-white shadow-xl shadow-orange-500/25 transition duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-orange-500"
    >
      {children}
    </button>
  );
}
