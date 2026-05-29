"use client";

import { useState } from "react";
import { schengenCountries, type SchengenCountry } from "../data/visas";
import VisaWhatsAppCTA from "./VisaWhatsAppCTA";

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
      {/* Hero */}
      <section className="relative overflow-hidden px-5 md:px-8 pt-24 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute bottom-0 left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,130,0,0.08),transparent_45%)]" />
        </div>

        <a
          href="/"
          className="absolute right-5 top-6 z-20 inline-flex items-center gap-3 rounded-full border border-orange-100 bg-white/80 px-5 py-3 text-sm font-bold text-[#101b32] shadow-xl backdrop-blur-xl transition hover:text-orange-500 md:right-8 md:px-7 md:py-4 md:text-base"
        >
          <span>→</span>
          الرئيسية
        </a>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-black text-[#101b32] md:text-7xl">
            تأشيرة <span className="text-orange-500">شنغن</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            اختر دولة الشنغن المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.
          </p>

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-12">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl" />

              <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row">
                <div className="flex h-[110px] min-w-[110px] items-center justify-center rounded-[30px] bg-gradient-to-br from-orange-500 to-orange-400 shadow-[0_15px_40px_rgba(249,115,22,0.35)]">
                  <span className="text-5xl">🌍</span>
                </div>

                <div className="flex-1 text-center md:text-right">
                  <h2 className="mb-5 text-3xl font-bold text-[#101b32] md:text-4xl">
                    ما هي تأشيرة شنغن؟
                  </h2>

                  <p className="text-lg leading-9 text-gray-600">
                    تأشيرة شنغن هي تأشيرة موحدة تسمح لحاملها بالتنقل بين دول منطقة الشنغن الأوروبية لمدة تصل إلى 90 يومًا خلال فترة 180 يومًا، سواءً للسياحة أو زيارة العائلة أو الأعمال.
                  </p>

                  <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm leading-8 text-orange-700 md:text-base">
                    قد تختلف المتطلبات والإجراءات من دولة لأخرى، لذلك يتم تحديث الشروط حسب السفارة المختارة.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          <aside className="h-fit rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-black text-[#101b32]">
              اختر الدولة
            </h2>

            <div className="mb-6 md:hidden">
              <select
                value={selectedCountry.name}
                onChange={(e) => {
                  const country = schengenCountries.find(
                    (c) => c.name === e.target.value
                  );

                  if (country) {
                    setSelectedCountry(country);
                  }
                }}
                className="w-full rounded-2xl border border-orange-100 bg-white p-4 text-lg outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                {schengenCountries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden gap-3 md:grid">
              {schengenCountries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                  className={`rounded-2xl border p-4 text-right font-bold transition duration-300 hover:-translate-y-1 ${
                    selectedCountry.name === country.name
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                      : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg"
                  }`}
                >
                  <span className="ml-2 text-2xl">{country.flag}</span>
                  {country.name}
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
                <div className="text-6xl">{selectedCountry.flag}</div>

                <div>
                  <h2 className="text-3xl font-black text-[#101b32] md:text-4xl">
                    تأشيرة شنغن - {selectedCountry.name}
                  </h2>

                  <p className="mt-2 font-bold text-green-600">
                    {selectedCountry.status}
                  </p>
                </div>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">نوع التأشيرة</p>
                  <h3 className="text-xl font-black">سياحية</h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">السعر</p>
                  <h3 className="text-xl font-black text-orange-500">
                    {selectedCountry.price}
                  </h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">المدة</p>
                  <h3 className="text-xl font-black">
                    {selectedCountry.duration}
                  </h3>
                </div>
              </div>

              <div className="mb-10 rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="mb-2 text-xl font-black">ملاحظة قبل التقديم</h3>
                <p className="leading-8 text-gray-700">
                  المتطلبات التالية مخصصة لسفارة {selectedCountry.name}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة.
                </p>
              </div>

              <h3 className="mb-5 text-2xl font-black text-[#101b32]">
                المتطلبات عند الحضور لمركز التأشيرات
              </h3>

              <ul className="mb-10 space-y-3">
                {allRequirements.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-orange-100 bg-white p-4 leading-8 shadow-sm"
                  >
                    • {item}
                  </li>
                ))}
              </ul>

              <h3 className="mb-5 text-2xl font-black text-[#101b32]">
                ملاحظات مهمة
              </h3>

              <ul className="mb-10 space-y-3">
                {selectedCountry.notes.map((note) => (
                  <li
                    key={note}
                    className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 leading-8 shadow-sm"
                  >
                    • {note}
                  </li>
                ))}
              </ul>

              <VisaWhatsAppCTA visaName={`الشنغن - ${selectedCountry.name}`}>
                ابدأ طلب تأشيرة {selectedCountry.name}
              </VisaWhatsAppCTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
            الأسئلة <span className="text-orange-500">الشائعة</span>
          </h2>

          <div className="space-y-5">
            {[
              {
                q: "هل الحضور شخصي لمركز التأشيرات؟",
                a: "نعم، يجب حضور صاحب الطلب شخصيًا لمركز التأشيرات لإجراء البصمة وتسليم الجواز.",
              },
              {
                q: "هل البصمة مطلوبة؟",
                a: "نعم، البصمة مطلوبة عند التقديم على تأشيرة شنغن.",
              },
              {
                q: "كم مدة استخراج التأشيرة؟",
                a: "تختلف مدة المعالجة حسب السفارة والموسم، وعادة تستغرق من عدة أيام إلى عدة أسابيع.",
              },
              {
                q: "هل التأشيرة مضمونة؟",
                a: "لا يمكن ضمان الموافقة على التأشيرة، حيث يعود القرار النهائي للسفارة فقط.",
              },
              {
                q: "هل يمكن التقديم للعائلة؟",
                a: "نعم، يمكن التقديم للأفراد أو العائلات مع تجهيز كامل للملفات والمواعيد.",
              },
              {
                q: "هل يجب حجز طيران وفندق قبل التقديم؟",
                a: "نعم، يتطلب ملف التأشيرة وجود حجوزات مبدئية للطيران والفندق، ويمكن توفيرها وتجهيزها من خلالنا.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-orange-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="mb-3 text-xl font-black text-[#101b32]">
                  {item.q}
                </h3>

                <p className="leading-8 text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Visas */}
      <section
        dir="rtl"
        className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
            تأشيرات قد <span className="text-orange-500">تهمك</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/uk",
                flag: "🇬🇧",
                title: "تأشيرة بريطانيا",
                text: "خدمات التقديم على التأشيرات السياحية والدراسية لبريطانيا.",
              },
              {
                href: "/usa",
                flag: "🇺🇸",
                title: "تأشيرة أمريكا",
                text: "تجهيز ملف التأشيرة الأمريكية ومساعدتك في خطوات التقديم.",
              },
              {
                href: "/canada",
                flag: "🇨🇦",
                title: "تأشيرة كندا",
                text: "خدمات التأشيرات السياحية والدراسية لكندا بخطوات واضحة.",
              },
            ].map((visa) => (
              <a
                key={visa.href}
                href={visa.href}
                className="block rounded-[30px] border border-orange-100 bg-white p-8 text-right shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
              >
                <div className="mb-5 text-5xl">{visa.flag}</div>
                <h3 className="mb-3 text-2xl font-black text-[#101b32]">
                  {visa.title}
                </h3>
                <p className="leading-8 text-gray-500">{visa.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
