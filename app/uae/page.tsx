"use client";

const requirements = [
  "صورة الجواز.",
  "صورة الإقامة.",
  "صورة شخصية بخلفية بيضاء.",
  "العنوان الوطني.",
];

const notes = [
  "هذه الخدمة مخصصة لمقيمي دول مجلس التعاون الخليجي.",
  "يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
  "التأشيرة إلكترونية ولا تتطلب حضور أو بصمة.",
  "إصدار التأشيرة غير مضمون، ويعود القرار النهائي للجهات المختصة في الإمارات.",
  "قد تختلف مدة المعالجة حسب حالة الطلب أو تحديثات الجهات المختصة.",
];
import type { Metadata } from "next";

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
const faqs = [
  {
    question: "هل التأشيرة إلكترونية؟",
    answer: "نعم، يتم إصدار التأشيرة إلكترونيًا.",
  },
  {
    question: "هل يلزم حضور أو بصمة؟",
    answer: "لا، لا يلزم حضور أو بصمة للتقديم.",
  },
  {
    question: "كم مدة استخراج التأشيرة؟",
    answer:
      "من 4 إلى 15 يوم عمل، وقد تزيد حسب حالة الطلب أو تحديثات الجهات المختصة.",
  },
  {
    question: "هل التأشيرة مضمونة؟",
    answer:
      "لا، إصدار التأشيرة غير مضمون، ويعود القرار النهائي للجهات المختصة في الإمارات.",
  },
  {
    question: "هل يمكن التقديم للمقيمين بدول الخليج؟",
    answer:
      "نعم، يمكن لمقيمي دول مجلس التعاون الخليجي التقديم حسب الشروط المطلوبة.",
  },
  {
    question: "هل توجد شروط على الإقامة؟",
    answer:
      "نعم، يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
  },
];

export default function UAEPage() {
  const sendToWhatsApp = () => {
    const message = `
السلام عليكم، أرغب بالتقديم على تأشيرة الإمارات

نوع التأشيرة: إلكترونية لمقيمي دول الخليج
المدة: من 4 إلى 15 يوم عمل وقد تزيد
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
            تأشيرة <span className="text-orange-500">الإمارات</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي بخطوات سهلة وواضحة.
          </p>

          <div className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-orange-100 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex h-[110px] min-w-[110px] items-center justify-center rounded-[30px] bg-gradient-to-br from-orange-500 to-orange-400 text-5xl shadow-[0_15px_40px_rgba(249,115,22,0.35)]">
                🇦🇪
              </div>

              <div className="flex-1 text-center md:text-right">
                <h2 className="mb-5 text-3xl font-black text-[#101b32] md:text-4xl">
                  لمن تناسب تأشيرة الإمارات؟
                </h2>

                <p className="text-lg leading-9 text-gray-600">
                  هذه الخدمة مناسبة لمقيمي دول مجلس التعاون الخليجي الراغبين في زيارة الإمارات، مع تقديم إلكتروني دون الحاجة للحضور أو البصمة.
                </p>

                <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm leading-8 text-orange-700 md:text-base">
                  يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ["نوع التقديم", "إلكتروني"],
              ["الحضور", "غير مطلوب"],
              ["المدة", "4 - 15 يوم عمل"],
              ["الفئة", "مقيمي الخليج"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[28px] border border-orange-100 bg-white/90 p-6 text-center shadow-lg backdrop-blur-xl"
              >
                <p className="mb-2 text-gray-500">{label}</p>
                <h3 className="text-2xl font-black text-[#101b32]">
                  {value}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full rounded-[28px] border border-orange-100 bg-white/90 p-6 text-center shadow-lg backdrop-blur-xl md:w-80">
              <p className="mb-2 text-gray-500">السعر</p>
              <h3 className="text-2xl font-black text-orange-500">
                550 ريال
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-5 md:px-8 pb-20">
        <div className="mx-auto max-w-5xl rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <h2 className="mb-8 text-3xl font-black text-[#101b32]">
            المتطلبات
          </h2>

          <ul className="mb-10 space-y-3">
            {requirements.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-orange-100 bg-white p-4 leading-8 shadow-sm"
              >
                • {item}
              </li>
            ))}
          </ul>

          <h2 className="mb-8 text-3xl font-black text-[#101b32]">
            ملاحظات مهمة
          </h2>

          <ul className="mb-10 space-y-3">
            {notes.map((note) => (
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
            ابدأ طلب تأشيرة الإمارات
          </button>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Related Visas */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
            تأشيرات قد <span className="text-orange-500">تهمك</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/uk",
                flag: "🇬🇧",
                title: "تصريح بريطانيا",
                text: "تصريح السفر الإلكتروني للسعوديين.",
              },
              {
                href: "/schengen",
                flag: "🇪🇺",
                title: "تأشيرة شنغن",
                text: "خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.",
              },
              {
                href: "/canada",
                flag: "🇨🇦",
                title: "تأشيرة كندا",
                text: "خدمات التأشيرات السياحية والدراسية لكندا.",
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