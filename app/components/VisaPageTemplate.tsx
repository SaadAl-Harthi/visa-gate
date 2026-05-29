"use client";

import { useState } from "react";
import type { Faq, VisaPageData, VisaPageVariant } from "../data/visas";
import VisaWhatsAppCTA from "./VisaWhatsAppCTA";

type VisaPageTemplateProps = {
  data: VisaPageData;
};

export default function VisaPageTemplate({ data }: VisaPageTemplateProps) {
  const [selectedVisa, setSelectedVisa] = useState<VisaPageVariant>(
    data.variants[0]
  );

  const hasSelector = data.variants.length > 1;

  return (
    <main dir="rtl" className="bg-white text-black overflow-hidden">
      <HeroSection data={data} />

      {hasSelector ? (
        <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            <aside className="h-fit rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-xl backdrop-blur-xl">
              <h2 className="mb-6 text-2xl font-black text-[#101b32]">
                {data.selectorTitle}
              </h2>

              <div className="mb-6 md:hidden">
                <select
                  value={selectedVisa.id}
                  onChange={(event) => {
                    const visa = data.variants.find(
                      (item) => item.id === event.target.value
                    );

                    if (visa) {
                      setSelectedVisa(visa);
                    }
                  }}
                  className="w-full rounded-2xl border border-orange-100 bg-white p-4 text-lg outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                >
                  {data.variants.map((visa) => (
                    <option key={visa.id} value={visa.id}>
                      {visa.icon} {visa.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden gap-3 md:grid">
                {data.variants.map((visa) => (
                  <button
                    key={visa.id}
                    onClick={() => setSelectedVisa(visa)}
                    className={`rounded-2xl border p-4 text-right font-bold transition duration-300 hover:-translate-y-1 ${
                      selectedVisa.id === visa.id
                        ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                        : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg"
                    }`}
                  >
                    <span className="ml-2 text-2xl">{visa.icon}</span>
                    {visa.name}
                    {visa.subtitle && (
                      <p className="mt-2 text-sm font-normal text-gray-500">
                        {visa.subtitle}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </aside>

            <div className="lg:col-span-2">
              <VisaDetailsCard data={data} selectedVisa={selectedVisa} />
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {(data.infoCards ?? []).map((card) => (
                  <InfoCard
                    key={card.label}
                    label={card.label}
                    value={card.value}
                  />
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-full rounded-[28px] border border-orange-100 bg-white/90 p-6 text-center shadow-lg backdrop-blur-xl md:w-80">
                  <p className="mb-2 text-gray-500">السعر</p>
                  <h3 className="text-2xl font-black text-orange-500">
                    {selectedVisa.price}
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 md:px-8 pb-20">
            <div className="mx-auto max-w-5xl rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <VisaRequirements data={data} selectedVisa={selectedVisa} />
            </div>
          </section>
        </>
      )}

      <FaqSection faqs={selectedVisa.faqs} />
      <RelatedVisas relatedVisas={data.relatedVisas} />
    </main>
  );
}

function HeroSection({ data }: { data: VisaPageData }) {
  return (
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
          {data.title}{" "}
          <span className="text-orange-500">{data.highlightedTitle}</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
          {data.description}
        </p>

        <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex h-[110px] min-w-[110px] items-center justify-center rounded-[30px] bg-gradient-to-br from-orange-500 to-orange-400 text-5xl shadow-[0_15px_40px_rgba(249,115,22,0.35)]">
              {data.heroIcon}
            </div>

            <div className="flex-1 text-center md:text-right">
              <h2 className="mb-5 text-3xl font-black text-[#101b32] md:text-4xl">
                {data.aboutTitle}
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                {data.aboutText}
              </p>

              <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm leading-8 text-orange-700 md:text-base">
                {data.aboutNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisaDetailsCard({
  data,
  selectedVisa,
}: {
  data: VisaPageData;
  selectedVisa: VisaPageVariant;
}) {
  return (
    <div className="rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="text-6xl">{selectedVisa.icon}</div>

        <div>
          <h2 className="text-3xl font-black text-[#101b32] md:text-4xl">
            {selectedVisa.title}
          </h2>

          {selectedVisa.status && (
            <p className="mt-2 font-bold text-green-600">
              {selectedVisa.status}
            </p>
          )}
        </div>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard label="نوع التأشيرة" value={selectedVisa.typeLabel} compact />
        <InfoCard
          label="السعر"
          value={selectedVisa.price}
          compact
          accent
        />
        <InfoCard label="المدة" value={selectedVisa.duration} compact />
      </div>

      <VisaRequirements data={data} selectedVisa={selectedVisa} />
    </div>
  );
}

function VisaRequirements({
  data,
  selectedVisa,
}: {
  data: VisaPageData;
  selectedVisa: VisaPageVariant;
}) {
  return (
    <>
      {selectedVisa.preApplyNote && (
        <div className="mb-10 rounded-3xl border border-orange-100 bg-orange-50 p-5">
          <h3 className="mb-2 text-xl font-black">ملاحظة قبل التقديم</h3>
          <p className="leading-8 text-gray-700">
            {selectedVisa.preApplyNote}
          </p>
        </div>
      )}

      <h3 className="mb-5 text-2xl font-black text-[#101b32]">
        {data.requirementsTitle}
      </h3>

      <ul className="mb-10 space-y-3">
        {selectedVisa.requirements.map((item) => (
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
        {selectedVisa.notes.map((note) => (
          <li
            key={note}
            className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 leading-8 shadow-sm"
          >
            • {note}
          </li>
        ))}
      </ul>

      <VisaWhatsAppCTA
        visaName={selectedVisa.whatsappName}
        message={selectedVisa.whatsappMessage}
      >
        ابدأ طلب {selectedVisa.title}
      </VisaWhatsAppCTA>
    </>
  );
}

function InfoCard({
  label,
  value,
  compact = false,
  accent = false,
}: {
  label: string;
  value: string;
  compact?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "rounded-2xl border border-orange-100 bg-orange-50/40 p-5"
          : "rounded-[28px] border border-orange-100 bg-white/90 p-6 text-center shadow-lg backdrop-blur-xl"
      }
    >
      <p className="mb-2 text-gray-500">{label}</p>
      <h3
        className={
          accent
            ? compact
              ? "text-xl font-black text-orange-500"
              : "text-2xl font-black text-orange-500"
            : compact
              ? "text-xl font-black"
              : "text-2xl font-black text-[#101b32]"
        }
      >
        {value}
      </h3>
    </div>
  );
}

function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="relative bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
          الأسئلة <span className="text-orange-500">الشائعة</span>
        </h2>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[28px] border border-orange-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="mb-3 text-xl font-black text-[#101b32]">
                {faq.question}
              </h3>
              <p className="leading-8 text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedVisas({
  relatedVisas,
}: {
  relatedVisas: VisaPageData["relatedVisas"];
}) {
  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
          تأشيرات قد <span className="text-orange-500">تهمك</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {relatedVisas.map((visa) => (
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
  );
}
