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
    answer: "من 4 إلى 15 يوم عمل، وقد تزيد حسب حالة الطلب أو تحديثات الجهات المختصة.",
  },
  {
    question: "هل التأشيرة مضمونة؟",
    answer: "لا، إصدار التأشيرة غير مضمون، ويعود القرار النهائي للجهات المختصة في الإمارات.",
  },
  {
    question: "هل يمكن التقديم للمقيمين بدول الخليج؟",
    answer: "نعم، يمكن لمقيمي دول مجلس التعاون الخليجي التقديم حسب الشروط المطلوبة.",
  },
  {
    question: "هل توجد شروط على الإقامة؟",
    answer: "نعم، يجب أن تكون صلاحية الإقامة أكثر من 6 أشهر من تاريخ العودة.",
  },
];

export default function UAEPage() {
  const sendToWhatsApp = () => {
    const message = `
السلام عليكم، أرغب بالتقديم على تأشيرة الإمارات
    `;

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main dir="rtl" className="bg-white text-black">
      <section className="px-5 md:px-8 py-20 md:py-28 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-6xl mb-6">🇦🇪</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            تأشيرة الإمارات
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
            تأشيرة إلكترونية لمقيمي دول مجلس التعاون الخليجي بخطوات سهلة وواضحة.
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
        <p className="text-gray-500 mb-2">الحضور</p>
        <h3 className="text-2xl font-bold">غير مطلوب</h3>
      </div>

      <div className="bg-gray-50 rounded-3xl p-6 text-center">
        <p className="text-gray-500 mb-2">المدة</p>
        <h3 className="text-2xl font-bold">4 - 15 يوم عمل</h3>
      </div>

      <div className="bg-gray-50 rounded-3xl p-6 text-center">
        <p className="text-gray-500 mb-2">الفئة</p>
        <h3 className="text-2xl font-bold">مقيمي الخليج</h3>
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <div className="bg-gray-50 rounded-3xl p-6 text-center w-full md:w-72">
        <p className="text-gray-500 mb-2">السعر</p>

        <h3 className="text-2xl font-bold text-orange-500">
          يحدد لاحقًا
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
            ابدأ طلب تأشيرة الإمارات
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
            <a href="/uk" className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block">
              <div className="text-5xl mb-5">🇬🇧</div>
              <h3 className="text-2xl font-bold mb-3">تصريح بريطانيا</h3>
              <p className="text-gray-600 leading-8">تصريح السفر الإلكتروني للسعوديين.</p>
            </a>

            <a href="/schengen" className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block">
              <div className="text-5xl mb-5">🇪🇺</div>
              <h3 className="text-2xl font-bold mb-3">تأشيرة شنغن</h3>
              <p className="text-gray-600 leading-8">خدمات استخراج تأشيرات الشنغن لجميع الدول الأوروبية.</p>
            </a>

            <a href="/canada" className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block">
              <div className="text-5xl mb-5">🇨🇦</div>
              <h3 className="text-2xl font-bold mb-3">تأشيرة كندا</h3>
              <p className="text-gray-600 leading-8">خدمات التأشيرات السياحية والدراسية لكندا.</p>
            </a>
          </div>
        </div>
      </section>

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
          "السلام عليكم، أرغب بالتقديم على تأشيرة الإمارات"
        )}`}
        target="_blank"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
      >
        واتساب
      </a>
    </main>
  );
}