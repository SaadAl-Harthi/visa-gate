export type Locale = "ar" | "en";

export const defaultLocale: Locale = "ar";
export const supportedLocales: Locale[] = ["ar", "en"];

export const translations = {
  ar: {
    switchLanguage: "English",
    navigation: {
      home: "الرئيسية",
      destinations: "الوجهات",
      startRequest: "ابدأ طلبك",
      reviews: "التقييمات",
      about: "من نحن",
    },
    buttons: {
      whatsapp: "واتساب",
      startNow: "ابدأ طلبك الآن",
      backHome: "الرئيسية",
      startVisaRequest: "ابدأ طلب",
    },
    visaPage: {
      price: "السعر",
      visaType: "نوع التأشيرة",
      duration: "المدة",
      importantNotes: "ملاحظات مهمة",
      preApplyNote: "ملاحظة قبل التقديم",
      faqPrefix: "الأسئلة",
      faqHighlight: "الشائعة",
      relatedPrefix: "تأشيرات قد",
      relatedHighlight: "تهمك",
    },
    footer: {
      establishmentInfo: "معلومات المنشأة",
    },
    englishPreview: {
      title: "VisaRace",
      description:
        "English pages are being prepared. Arabic visa details remain the source of truth for now.",
      viewArabic: "View Arabic page",
      availableVisas: "Available visas",
    },
  },
  en: {
    switchLanguage: "العربية",
    navigation: {
      home: "Home",
      destinations: "Destinations",
      startRequest: "Start request",
      reviews: "Reviews",
      about: "About",
    },
    buttons: {
      whatsapp: "WhatsApp",
      startNow: "Start now",
      backHome: "Home",
      startVisaRequest: "Start",
    },
    visaPage: {
      price: "Price",
      visaType: "Visa type",
      duration: "Processing time",
      importantNotes: "Important notes",
      preApplyNote: "Before applying",
      faqPrefix: "Frequently Asked",
      faqHighlight: "Questions",
      relatedPrefix: "Related",
      relatedHighlight: "Visas",
    },
    footer: {
      establishmentInfo: "Business information",
    },
    englishPreview: {
      title: "VisaRace",
      description:
        "English pages are being prepared. Arabic visa details remain the source of truth for now.",
      viewArabic: "View Arabic page",
      availableVisas: "Available visas",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  if (locale === "en") {
    if (pathname === "/") {
      return "/en";
    }

    if (pathname.startsWith("/en")) {
      return pathname;
    }

    return `/en${pathname}`;
  }

  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }

  return pathname;
}
