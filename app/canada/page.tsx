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

const touristRequirements = [
  "أصل الجواز وصورة منه.",
  "صورة الهوية.",
  "صورة التأشيرة السابقة إن وجدت.",
  "صورة من كرت العائلة.",
  "العنوان الوطني.",
  "سجل السفريات من توكلنا.",
  "صور الأختام من جواز السفر.",
  "ورقة التعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل، وللشركات الخاصة يجب تصديقها من الغرفة التجارية.",
  "كشف حساب لمدة 6 أشهر باللغة الإنجليزية وبرصيد لا يقل عن 15,000 ريال.",
  "صورتان شخصية مقاس 5×5 بخلفية بيضاء، مكشوف الرأس للرجال ومكشوف الوجه للنساء.",
];

const studentRequirements = [
  ...touristRequirements,
  "قبول المعهد أو جهة الدراسة في كندا.",
];

const commonNotes = [
  "يمكن للسفارة الكندية تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.",
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "يجب أن تكون جميع المستندات واضحة وحديثة عند التقديم.",
  "قد تختلف مدة المعالجة حسب نوع التأشيرة وحالة الطلب.",
];

const visaTypes: VisaType[] = [
  {
    id: "tourist",
    title: "تأشيرة كندا السياحية",
    icon: "🇨🇦",
    subtitle: "للسياحة والزيارة العائلية أو حضور الفعاليات.",
    price: "1100 ريال",
    duration: "حسب مدة معالجة السفارة",
    requirements: touristRequirements,
    notes: commonNotes,
    faqs: [
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على تأشيرة كندا.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الكندية.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer: "تختلف مدة المعالجة حسب السفارة وحالة الطلب، وقد تزيد في بعض المواسم.",
      },
      {
        question: "هل يجب توفير كشف حساب؟",
        answer: "نعم، يتطلب ملف التأشيرة كشف حساب لمدة 6 أشهر باللغة الإنجليزية وبرصيد لا يقل عن 15,000 ريال.",
      },
    ],
  },
  {
    id: "student",
    title: "تأشيرة كندا الدراسية",
    icon: "🎓",
    subtitle: "للطلاب المقبولين في معاهد أو مؤسسات تعليمية في كندا.",
    price: "1170 ريال",
    duration: "حسب مدة معالجة السفارة",
    requirements: studentRequirements,
    notes: commonNotes,
    faqs: [
      {
        question: "هل قبول المعهد مطلوب؟",
        answer: "نعم، قبول المعهد أو جهة الدراسة مطلوب ضمن ملف التأشيرة الدراسية.",
      },
      {
        question: "هل البصمة مطلوبة؟",
        answer: "نعم، البصمة مطلوبة عند التقديم على تأشيرة كندا.",
      },
      {
        question: "هل التأشيرة مضمونة؟",
        answer: "لا، التأشيرة ليست مضمونة، والقرار النهائي يعود للسفارة الكندية.",
      },
      {
        question: "كم مدة استخراج التأشيرة؟",
        answer: "تختلف مدة المعالجة حسب السفارة وحالة الطلب، وقد تزيد في بعض المواسم.",
      },
    ],
  },
];

export default function CanadaPage() {
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
    <main dir="rtl" className="bg-white text-black">

<div className="absolute top-6 right-5 md:right-8 z-20">
  <a
    href="/"
    className="
    flex items-center gap-3
    bg-white/70 backdrop-blur-xl
    border border-orange-100
    hover:border-orange-300
    hover:bg-white
    text-gray-700 hover:text-orange-500
    px-5 md:px-7
    py-3 md:py-4
    rounded-full
    shadow-[0_8px_30px_rgb(0,0,0,0.05)]
    transition-all duration-300
    text-sm md:text-base
    font-medium
  "
  >
    <span className="text-xl">→</span>
    الرئيسية
  </a>
</div>
      {/* Hero */}
      <section className="px-5 md:px-8 py-20 md:py-28 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-6xl mb-6">🇨🇦</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            تأشيرة كندا
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
            اختر نوع التأشيرة المطلوبة، واطّلع على المتطلبات والملاحظات المهمة
            قبل بدء طلب التأشيرة.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="bg-white border rounded-3xl p-6 shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-6">اختر نوع التأشيرة</h2>

            <div className="space-y-3">
              {visaTypes.map((visa) => (
                <button
                  key={visa.id}
                  onClick={() => setSelectedVisa(visa)}
                  className={`w-full text-right p-5 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                    selectedVisa.id === visa.id
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="text-3xl mb-2">{visa.icon}</div>
                  <h3 className="font-bold text-lg">{visa.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{visa.subtitle}</p>
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="text-6xl">{selectedVisa.icon}</div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {selectedVisa.title}
                  </h2>

                  <p className="text-green-600 mt-2">
                    الحالة: متاحة للتقديم
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">نوع التأشيرة</p>
                  <h3 className="text-xl font-bold">
                    {selectedVisa.id === "tourist" ? "سياحية" : "دراسية"}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">السعر</p>
                  <h3 className="text-xl font-bold text-orange-500">
                    {selectedVisa.price}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">المدة</p>
                  <h3 className="text-xl font-bold">
                    {selectedVisa.duration}
                  </h3>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-5 mb-10">
                <h3 className="text-xl font-bold mb-2">ملاحظة قبل التقديم</h3>
                <p className="text-gray-700 leading-8">
                  المتطلبات التالية خاصة بالتقديم على {selectedVisa.title}،
                  وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة الكندية.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-5">
                المتطلبات المطلوبة للتقديم
              </h3>

              <ul className="space-y-3 mb-10">
                {selectedVisa.requirements.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-50 rounded-2xl p-4 leading-8 border border-gray-100"
                  >
                    • {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-5">ملاحظات مهمة</h3>

              <ul className="space-y-3 mb-10">
                {selectedVisa.notes.map((note) => (
                  <li
                    key={note}
                    className="bg-orange-50 rounded-2xl p-4 leading-8 border border-orange-100"
                  >
                    • {note}
                  </li>
                ))}
              </ul>

              <button
                onClick={sendToWhatsApp}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-[1.02] shadow-xl"
              >
                ابدأ طلب {selectedVisa.title}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            الأسئلة الشائعة
          </h2>

          <div className="space-y-5">
            {selectedVisa.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Visas */}
      <section className="px-5 md:px-8 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            تأشيرات قد تهمك
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a
              href="/schengen"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇪🇺</div>
              <h3 className="text-2xl font-bold mb-3">تأشيرة شنغن</h3>
              <p className="text-gray-600 leading-8">
                خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.
              </p>
            </a>

            <a
              href="/usa"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇺🇸</div>
              <h3 className="text-2xl font-bold mb-3">تأشيرة أمريكا</h3>
              <p className="text-gray-600 leading-8">
                خدمات التأشيرات السياحية والدراسية لأمريكا.
              </p>
            </a>

            <a
              href="/uk"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇬🇧</div>
              <h3 className="text-2xl font-bold mb-3">تأشيرة بريطانيا</h3>
              <p className="text-gray-600 leading-8">
                خدمات التقديم على التأشيرات السياحية والدراسية لبريطانيا.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer dir="rtl" className="bg-black text-white py-14 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">رحلتنا للتأشيرات</h3>

          <p className="text-gray-400 mb-10">
            خدمات التأشيرات السياحية والدراسية لجميع الوجهات العالمية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto text-gray-300 mb-10 text-right">
            <div className="space-y-3">
              <p>📍 مكتب 102 - الدور الأول - برج الحميضي</p>
              <p>طريق المدينة - حي السلامة - جدة</p>
              <p>المملكة العربية السعودية</p>
              <p>📞 0552525141</p>
            </div>

            <div className="space-y-3">
              <p>الاسم التجاري: مؤسسة رحلتنا لتنظيم الرحلات</p>
              <p>السجل التجاري: 4030228793</p>
              <p>الرقم الضريبي: 30201661700003</p>
              <p>التصنيف: منظم رحلات سياحية</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8 mb-10 flex-wrap">
            <a href="https://instagram.com/studyrace1" target="_blank" className="bg-white/10 hover:bg-orange-500 transition px-5 py-3 rounded-full whitespace-nowrap">Instagram</a>
            <a href="https://snapchat.com/add/studyrace1" target="_blank" className="bg-white/10 hover:bg-yellow-400 hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">Snapchat</a>
            <a href="https://tiktok.com/@studyrace1" target="_blank" className="bg-white/10 hover:bg-white hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">TikTok</a>
            <a href="https://linkedin.com/company/studyrace" target="_blank" className="bg-white/10 hover:bg-blue-600 transition px-5 py-3 rounded-full whitespace-nowrap">LinkedIn</a>
            <a href="https://x.com/studyrace1" target="_blank" className="bg-white/10 hover:bg-white hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">X</a>
          </div>

          <p className="text-gray-500 mt-8 text-sm">
            © 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات
          </p>
        </div>
      </footer>

      <a
        href={`https://wa.me/966552525141?text=${encodeURIComponent(
          `السلام عليكم، أرغب بالتقديم على ${selectedVisa.title}`
        )}`}
        target="_blank"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
      >
        واتساب
      </a>
    </main>
  );
}