"use client";

import { usePathname } from "next/navigation";
import { getLocalizedPath, getTranslations, type Locale } from "../i18n/translations";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export default function LanguageSwitcher({ locale, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "ar" ? "en" : "ar";
  const t = getTranslations(locale);
  const href = getLocalizedPath(pathname, targetLocale);

  return (
    <a
      href={href}
      hrefLang={targetLocale === "ar" ? "ar-SA" : "en"}
      className={className}
    >
      {t.switchLanguage}
    </a>
  );
}
