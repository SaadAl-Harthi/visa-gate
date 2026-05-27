"use client";

import { useState } from "react";
import VisaWhatsAppCTA from "./VisaWhatsAppCTA";

type SchengenCountry = {
  name: string;
  flag: string;
  status: string;
  price: string;
  duration: string;
  requirements: string[];
  extraRequirements?: string[];
  notes: string[];
};

const commonRequirements = [
  "أصل الجواز وصورة منه.",
  "صورة الهوية.",
  "صورتان شخصية بخلفية بيضاء.",
  "تعريف بالراتب باللغة الإنجليزية.",
  "كشف حساب بنكي لمدة 6 أشهر باللغة الإنجليزية.",
  "حجز طيران مبدئي.",
  "حجز فندق مبدئي.",
  "تأمين طبي للسفر.",
];

const commonNotes = [
  "يجب حضور صاحب الطلب شخصيًا لمركز التأشيرات.",
  "البصمة مطلوبة عند التقديم.",
  "إصدار التأشيرة غير مضمون، والقرار النهائي يعود للسفارة.",
  "قد تطلب السفارة مستندات إضافية حسب حالة الطلب.",
];

const schengenCountries: SchengenCountry[] = [
  {
    name: "فرنسا",
    flag: "🇫🇷",
    status: "متاحة للتقديم",
    price: "حسب الطلب",
    duration: "حسب مواعيد السفارة",
    requirements: commonRequirements,
    notes: commonNotes,
  },
  {
    name: "إيطاليا",
    flag: "🇮🇹",
    status: "متاحة للتقديم",
    price: "حسب الطلب",
    duration: "حسب مواعيد السفارة",
    requirements: commonRequirements,
    notes: commonNotes,
  },
  {
    name: "إسبانيا",
    flag: "🇪🇸",
    status: "متاحة للتقديم",
    price: "حسب الطلب",
    duration: "حسب مواعيد السفارة",
    requirements: commonRequirements,
    notes: commonNotes,
  },
  {
    name: "ألمانيا",
    flag: "🇩🇪",
    status: "متاحة للتقديم",
    price: "حسب الطلب",
    duration: "حسب مواعيد السفارة",
    requirements: commonRequirements,
    notes: commonNotes,
  },
];

export default function SchengenVisaContent() {
  const [selectedCountry, setSelectedCountry] = useState<SchengenCountry>(
    schengenCountries[0]
  );

  const allRequirements = [
    ...selectedCountry.requirements,
    ...(selectedCountry.extraRequirements ?? []),
  ];

  return (
    <main dir="rtl" className="bg-white text-black overflow-hidden">
      {/* هنا الصق نفس كود التصميم الطويل من return القديم */}

      <VisaWhatsAppCTA visaName={`الشنغن - ${selectedCountry.name}`}>
        ابدأ طلب تأشيرة الشنغن
      </VisaWhatsAppCTA>
    </main>
  );
}