export default function TermsPage() {
  const items = [
    {
      title: "طبيعة الخدمة",
      text: "يقدم موقع رحلتنا للتأشيرات خدمات المساعدة في تجهيز ومتابعة طلبات التأشيرات السياحية والدراسية، ولا يعتبر جهة حكومية أو سفارة أو جهة مخولة بإصدار التأشيرات.",
    },
    {
      title: "إصدار التأشيرة",
      text: "إصدار أو رفض التأشيرة يعود بالكامل للسفارة أو الجهة المختصة، ولا يضمن الموقع الموافقة النهائية على أي طلب تأشيرة.",
    },
    {
      title: "صحة المعلومات",
      text: "يتحمل العميل مسؤولية صحة جميع البيانات والمستندات المقدمة، وأي معلومات غير صحيحة قد تؤدي إلى رفض الطلب أو تأخير المعالجة.",
    },
    {
      title: "مدة المعالجة",
      text: "جميع المدد المذكورة في الموقع تعتبر تقديرية وقد تختلف حسب السفارة أو الجهة المختصة أو المواسم أو حالة الطلب.",
    },
    {
      title: "متابعة الطلب",
      text: "تقع مسؤولية متابعة حالة التأشيرة أو المواعيد أو التحديثات الصادرة من السفارة أو الجهة المختصة على العميل، ويقدم المكتب المساعدة قدر الإمكان دون تحمل مسؤولية التأخير أو عدم متابعة العميل للطلبات أو التحديثات.",
    },
    {
      title: "الرسوم والاسترجاع",
      text: "بعد بدء إجراءات التقديم أو استخدام الرسوم الحكومية أو رسوم المراكز المعتمدة، قد تصبح بعض المبالغ غير قابلة للاسترجاع حسب سياسة الجهة المقدمة للخدمة.",
    },
    {
      title: "المستندات الإضافية",
      text: "يحق للسفارات أو الجهات المختصة طلب مستندات إضافية أو إجراء مقابلات شخصية أو طلب حضور البصمة في أي مرحلة من مراحل التقديم.",
    },
    {
      title: "الأسعار",
      text: "جميع الأسعار المعروضة قابلة للتغيير حسب تحديثات رسوم السفارات أو الجهات الخارجية أو التغييرات التشغيلية.",
    },
    {
      title: "الخصوصية",
      text: "يتم التعامل مع بيانات العملاء بسرية، وتستخدم فقط لغرض التقديم على التأشيرات أو التواصل المرتبط بالخدمة.",
    },
  ];

  return (
    <main dir="rtl" className="bg-white text-black min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 md:px-8 pt-24 pb-20 bg-white text-center">
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

        <div className="relative z-10 max-w-4xl mx-auto">
          

          <h1 className="mb-6 text-4xl font-black text-[#101b32] md:text-7xl">
            الشروط <span className="text-orange-500">والأحكام</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            يرجى قراءة الشروط والأحكام التالية بعناية قبل استخدام خدمات التأشيرات المقدمة عبر موقع رحلتنا للتأشيرات.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-orange-100 bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700">
            آخر تحديث: 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-orange-100 bg-white/90 p-7 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl md:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-lg font-black text-white shadow-lg">
                  {index + 1}
                </span>

                <h2 className="text-2xl font-black text-[#101b32]">
                  {item.title}
                </h2>
              </div>

              <p className="leading-9 text-gray-500">{item.text}</p>
            </div>
          ))}

          <div className="rounded-[34px] border border-orange-100 bg-orange-50/70 p-8 text-center shadow-lg">
            <h2 className="mb-4 text-2xl font-black text-[#101b32]">
              الموافقة على الشروط
            </h2>

            <p className="mx-auto max-w-3xl leading-9 text-gray-700">
              باستخدامك للموقع أو طلب الخدمة فإنك توافق على جميع الشروط والأحكام المذكورة أعلاه.
            </p>
          </div>

          <div className="rounded-[34px] bg-[#0d1b3d] p-8 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-2xl font-black">
              لديك استفسار عن الشروط؟
            </h2>

            <p className="mb-6 leading-8 text-white/70">
              يمكنك التواصل معنا مباشرة قبل بدء الطلب لتوضيح أي بند متعلق بالخدمة أو الرسوم أو إجراءات التقديم.
            </p>

            <a
              href="https://wa.me/966552525141"
              target="_blank"
              className="inline-flex rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 px-8 py-4 font-black text-white shadow-xl shadow-orange-500/25 transition hover:scale-105"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}