"use client";

import { useState } from "react";

type VisaType = {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  price: string;
  duration: string;
  requirements: string[];
  notes: string[];
  faqs: { question: string; answer: string }[];
};
import type { Metadata } from "next";

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
    description:
      "خدمة استخراج تأشيرة أمريكا السياحية والدراسية.",
    images: ["/og-image-v2.png"],
  },
};

const touristRequirements = [
  "أصل الجواز وصورة منه.",
  "ورقة تعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل، وللشركات الخاصة يجب تصديقها من الغرفة التجارية.",
  "كشف حساب مطبوع باللغة الإنجليزية لمدة 6 أشهر وبرصيد لا يقل عن 10,000 ريال للشخص.",
  "صورة من الهوية.",
  "صورة من كرت العائلة في حال كان الموعد للعائلة.",
  "ورقة الموعد الخاصة بمركز الاعتماد.",
  "ورقة الكونفرميشن الخاصة بالسفارة.",
  "حجز الفندق - نسخة لكل شخص.",
  "حجز الطيران - نسخة لكل شخص.",
  "صورتان شخصية مقاس 5×5 مكشوف الرأس للرجال ومكشوف الوجه للنساء.",
  "صورة من تأشيرة أمريكا السابقة إن وجدت.",
  "تأشيرة خروج وعودة لغير السعوديين.",
];

const studentRequirements = [
  ...touristRequirements.slice(0, 9),
  "فاتورة SEVIS.",
  "قبول جهة الدراسة.",
  "نموذج I-20.",
  ...touristRequirements.slice(9),
];

const commonNotes = [
  "الهويات وكرت العائلة إذا لم تكن بالإصدار الجديد يجب ترجمتها باللغة الإنجليزية، ويمكن ترجمتها عن طريقنا برسوم إضافية.",
  "يمكن للسفارة الأمريكية تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.",
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "في حال رغبتك بالاستفسار عن تأشيرتك يمكنك زيارة السفارة الأمريكية للاستفسار عن معاملتك.",
];

const visaTypes: VisaType[] = [
  {
    id: "tourist",
    title: "تأشيرة أمريكا السياحية",
    icon: "🇺🇸",
    subtitle: "للسياحة والزيارة وحضور الفعاليات.",
    price: "900 ريال",
    duration: "من 5 إلى 15 يوم عمل وقد تزيد حسب السفارة",
    requirements: touristRequirements,
    notes: commonNotes,
    faqs: [
      { question: "هل البصمة مطلوبة؟", answer: "نعم، البصمة مطلوبة عند التقديم على التأشيرة الأمريكية." },
      { question: "هل توجد مقابلة شخصية؟", answer: "نعم، توجد مقابلة شخصية في السفارة الأمريكية ضمن إجراءات التقديم." },
      { question: "كم مدة استخراج التأشيرة؟", answer: "عادة تستغرق من 5 إلى 15 يوم عمل، وقد تزيد حسب السفارة وحالة الطلب." },
      { question: "هل التأشيرة مضمونة؟", answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الأمريكية." },
      { question: "هل يمكن توفير حجوزات الطيران والفندق؟", answer: "نعم، يمكن توفير حجوزات مبدئية للطيران والفندق وتجهيزها ضمن ملف التأشيرة." },
    ],
  },
  {
    id: "student",
    title: "تأشيرة أمريكا الدراسية",
    icon: "🎓",
    subtitle: "للطلاب المقبولين في معاهد أو جامعات داخل أمريكا.",
    price: "2500 ريال",
    duration: "من 5 إلى 15 يوم عمل وقد تزيد حسب السفارة",
    requirements: studentRequirements,
    notes: commonNotes,
    faqs: [
      { question: "هل البصمة مطلوبة؟", answer: "نعم، البصمة مطلوبة عند التقديم على التأشيرة الأمريكية." },
      { question: "هل توجد مقابلة شخصية؟", answer: "نعم، توجد مقابلة شخصية في السفارة الأمريكية ضمن إجراءات التقديم." },
      { question: "ما هو نموذج I-20؟", answer: "نموذج I-20 هو مستند رسمي يصدر من جهة الدراسة في أمريكا، ويثبت قبول الطالب ويُستخدم للتقديم على التأشيرة الدراسية." },
      { question: "هل رسوم SEVIS مشمولة؟", answer: "نعم، يتم تجهيز فاتورة SEVIS ضمن متطلبات التأشيرة الدراسية." },
      { question: "كم مدة استخراج التأشيرة؟", answer: "عادة تستغرق من 5 إلى 15 يوم عمل، وقد تزيد حسب السفارة وحالة الطلب." },
      { question: "هل التأشيرة مضمونة؟", answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الأمريكية." },
    ],
  },
];

export default function UsaPage() {
  const [selectedVisa, setSelectedVisa] = useState<VisaType>(visaTypes[0]);

  const sendToWhatsApp = () => {
    const message = `
السلام عليكم، أرغب بالتقديم على ${selectedVisa.title}

نوع التأشيرة: ${selectedVisa.title}
المدة: ${selectedVisa.duration}
السعر: ${selectedVisa.price}
`;

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
            تأشيرة <span className="text-orange-500">أمريكا</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            اختر نوع التأشيرة المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.
          </p>

          <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex h-[110px] min-w-[110px] items-center justify-center rounded-[30px] bg-gradient-to-br from-orange-500 to-orange-400 text-5xl shadow-[0_15px_40px_rgba(249,115,22,0.35)]">
                🇺🇸
              </div>

              <div className="flex-1 text-center md:text-right">
                <h2 className="mb-5 text-3xl font-black text-[#101b32] md:text-4xl">
                  عن التأشيرة الأمريكية
                </h2>

                <p className="text-lg leading-9 text-gray-600">
                  نساعدك في تجهيز ملف التأشيرة الأمريكية سواءً للسياحة أو الدراسة، مع توضيح المتطلبات ومساعدتك في خطوات النماذج والمواعيد.
                </p>

                <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm leading-8 text-orange-700 md:text-base">
                  تختلف المتطلبات حسب نوع التأشيرة وحالة مقدم الطلب، والقرار النهائي يعود للسفارة الأمريكية.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Selector */}
          <aside className="h-fit rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-black text-[#101b32]">
              اختر نوع التأشيرة
            </h2>

            <div className="space-y-3">
              {visaTypes.map((visa) => (
                <button
                  key={visa.id}
                  onClick={() => setSelectedVisa(visa)}
                  className={`w-full rounded-2xl border p-5 text-right transition duration-300 hover:-translate-y-1 ${
                    selectedVisa.id === visa.id
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                      : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg"
                  }`}
                >
                  <div className="mb-2 text-3xl">{visa.icon}</div>
                  <h3 className="text-lg font-black">{visa.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{visa.subtitle}</p>
                </button>
              ))}
            </div>
          </aside>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
                <div className="text-6xl">{selectedVisa.icon}</div>

                <div>
                  <h2 className="text-3xl font-black text-[#101b32] md:text-4xl">
                    {selectedVisa.title}
                  </h2>

                  <p className="mt-2 font-bold text-green-600">
                    الحالة: متاحة للتقديم
                  </p>
                </div>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">نوع التأشيرة</p>
                  <h3 className="text-xl font-black">
                    {selectedVisa.id === "tourist" ? "سياحية" : "دراسية"}
                  </h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">السعر</p>
                  <h3 className="text-xl font-black text-orange-500">
                    {selectedVisa.price}
                  </h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">المدة</p>
                  <h3 className="text-xl font-black">{selectedVisa.duration}</h3>
                </div>
              </div>

              <div className="mb-10 rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="mb-2 text-xl font-black">ملاحظة قبل التقديم</h3>
                <p className="leading-8 text-gray-700">
                  المتطلبات التالية خاصة بالتقديم على {selectedVisa.title}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة الأمريكية.
                </p>
              </div>

              <h3 className="mb-5 text-2xl font-black text-[#101b32]">
                المتطلبات عند الحضور للسفارة الأمريكية
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

              <button
                onClick={sendToWhatsApp}
                className="w-full rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 py-5 text-lg font-black text-white shadow-xl shadow-orange-500/25 transition duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-orange-500"
              >
                ابدأ طلب {selectedVisa.title}
              </button>
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
            {selectedVisa.faqs.map((faq) => (
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

      {/* Related Visas */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
            تأشيرات قد <span className="text-orange-500">تهمك</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/schengen",
                flag: "🇪🇺",
                title: "تأشيرة شنغن",
                text: "خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.",
              },
              {
                href: "/uk",
                flag: "🇬🇧",
                title: "تصريح بريطانيا",
                text: "تصريح السفر الإلكتروني للسعوديين.",
              },
              {
                href: "/australia",
                flag: "🇦🇺",
                title: "تأشيرة أستراليا",
                text: "تأشيرات سياحية ودراسية إلكترونية بخطوات سهلة.",
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