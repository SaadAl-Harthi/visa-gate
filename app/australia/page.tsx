"use client";

const requirements = [
  "صورة الهوية.",
  "صورة الجواز.",
  "صورة شخصية بخلفية بيضاء.",
  "العنوان الوطني.",
  "قبول الجهة التعليمية في حال التقديم الدراسي.",
];

const notes = [
  "التأشيرة إلكترونية بالكامل.",
  "يمكن استخدام التأشيرة للسياحة أو الدراسة لمدة أقل من 3 أشهر.",
  "يجب أن تكون جميع المستندات واضحة وحديثة.",
  "قد تطلب السفارة مستندات إضافية حسب حالة الطلب.",
  "إصدار التأشيرة غير مضمون ويعود القرار النهائي للسفارة الأسترالية.",
];

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
    answer: "من 4 إلى 10 أيام عمل، وقد تختلف حسب حالة الطلب.",
  },
  {
    question: "هل التأشيرة مضمونة؟",
    answer:
      "إصدار التأشيرة غير مضمون، ويعود القرار النهائي للسفارة الأسترالية.",
  },
  {
    question: "هل تشمل التأشيرة الدراسة؟",
    answer:
      "نعم، يمكن استخدامها للدراسة إذا كانت مدة الدراسة أقل من 3 أشهر.",
  },
  {
    question: "هل أحتاج قبول دراسي؟",
    answer:
      "نعم، في حال التقديم على تأشيرة دراسية يجب إرفاق قبول الجهة التعليمية.",
  },
];

export default function AustraliaPage() {
  const sendToWhatsApp = () => {
    const message = `
السلام عليكم، أرغب بالتقديم على تأشيرة أستراليا
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
      <section className="px-5 md:px-8 py-20 md:py-28 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-6xl mb-6">🇦🇺</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            تأشيرة أستراليا
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
            خدمات التأشيرات السياحية والدراسية لأستراليا بخطوات إلكترونية سهلة
            وواضحة.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-3xl p-6 text-center">
              <p className="text-gray-500 mb-2">نوع التقديم</p>
              <h3 className="text-2xl font-bold">إلكتروني</h3>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 text-center">
              <p className="text-gray-500 mb-2">المدة</p>
              <h3 className="text-2xl font-bold">4 - 10 أيام</h3>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 text-center">
              <p className="text-gray-500 mb-2">نوع التأشيرة</p>
              <h3 className="text-2xl font-bold">سياحية + دراسية</h3>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 text-center">
              <p className="text-gray-500 mb-2">البصمة</p>
              <h3 className="text-2xl font-bold">غير مطلوبة</h3>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-gray-50 rounded-3xl p-6 text-center w-full md:w-72">
              <p className="text-gray-500 mb-2">السعر</p>

              <h3 className="text-2xl font-bold text-orange-500">
                650 ريال
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto bg-white border rounded-3xl p-6 md:p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-8">المتطلبات</h2>

          <ul className="space-y-3 mb-10">
            {requirements.map((item) => (
              <li
                key={item}
                className="bg-gray-50 rounded-2xl p-4 leading-8 border border-gray-100"
              >
                • {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold mb-8">ملاحظات مهمة</h2>

          <ul className="space-y-3 mb-10">
            {notes.map((note) => (
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
            ابدأ طلب تأشيرة أستراليا
          </button>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            الأسئلة الشائعة
          </h2>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-gray-100 rounded-3xl p-6 bg-white hover:bg-orange-50/40 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>

                <p className="text-gray-600 leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            تأشيرات قد تهمك
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a
              href="/uk"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇬🇧</div>

              <h3 className="text-2xl font-bold mb-3">
                تصريح بريطانيا
              </h3>

              <p className="text-gray-600 leading-8">
                تصريح السفر الإلكتروني للسعوديين.
              </p>
            </a>

            <a
              href="/usa"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇺🇸</div>

              <h3 className="text-2xl font-bold mb-3">
                تأشيرة أمريكا
              </h3>

              <p className="text-gray-600 leading-8">
                خدمات التأشيرات السياحية والدراسية لأمريكا.
              </p>
            </a>

            <a
              href="/canada"
              className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
            >
              <div className="text-5xl mb-5">🇨🇦</div>

              <h3 className="text-2xl font-bold mb-3">
                تأشيرة كندا
              </h3>

              <p className="text-gray-600 leading-8">
                خدمات التأشيرات السياحية والدراسية لكندا.
              </p>
            </a>
          </div>
        </div>
      </section>

      <footer dir="rtl" className="bg-black text-white py-14 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            رحلتنا للتأشيرات
          </h3>

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

          <p className="text-gray-500 mt-8 text-sm">
            © 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات
          </p>
        </div>
      </footer>

     
    </main>
  );
}
