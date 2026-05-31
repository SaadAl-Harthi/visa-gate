export default function TermsPage() {
  const items = [
    {
      title: "التعريف بالخدمة",
      text: `رحلتنا للتأشيرات منصة متخصصة في تقديم خدمات المساندة والتجهيز والتقديم على التأشيرات ومتابعة الطلبات لدى السفارات والمراكز المعتمدة.

باستخدام الموقع أو إرسال طلب تأشيرة فإنك توافق على هذه الشروط والأحكام.`,
    },
    {
      title: "استخدام الموقع",
      text: `يوافق المستخدم على تقديم معلومات صحيحة ودقيقة عند استخدام الموقع أو تعبئة نموذج طلب التأشيرة.

ويتحمل المستخدم المسؤولية الكاملة عن صحة البيانات والمستندات المقدمة.`,
    },
    {
      title: "رسوم الخدمات",
      text: `رسوم الخدمة الموضحة بالموقع تخص خدمات التجهيز والمتابعة والتقديم فقط ما لم يُذكر خلاف ذلك.

قد تترتب رسوم إضافية تشمل:

* رسوم السفارات
* رسوم مراكز التأشيرات
* رسوم البصمة
* رسوم الشحن والتوصيل
* أي رسوم حكومية أخرى

وسيتم توضيح الرسوم المطلوبة للعميل قبل بدء الإجراءات.`,
    },
    {
      title: "مدة المعالجة",
      text: `جميع المدد المذكورة بالموقع هي مدد تقديرية تعتمد على معلومات الجهات المختصة وقت النشر.

قد تختلف مدة المعالجة بسبب:

* ضغط السفارات
* المواسم والإجازات
* طلب مستندات إضافية
* الإجراءات الأمنية أو الإدارية

ولا تتحمل الشركة مسؤولية أي تأخير صادر من السفارات أو الجهات الخارجية.`,
    },
    {
      title: "إلغاء الطلب والاسترجاع",
      text: `يجوز للعميل طلب إلغاء الخدمة قبل بدء إجراءات التقديم.

أما بعد بدء العمل على الطلب أو رفعه للجهات المختصة أو سداد الرسوم الحكومية فقد لا يكون العميل مستحقاً لاسترداد كامل المبلغ أو جزء منه بحسب المرحلة التي وصل إليها الطلب.

وسيتم تقييم كل حالة بشكل مستقل وفق الإجراءات المتبعة.`,
    },
    {
      title: "حجوزات السفر والتأشيرات",
      text: `تنصح رحلتنا للتأشيرات بعدم شراء تذاكر السفر أو حجوزات الفنادق غير القابلة للاسترجاع قبل صدور التأشيرة.

ولا تتحمل الشركة أي مسؤولية عن الخسائر أو التكاليف الناتجة عن شراء حجوزات أو تذاكر قبل صدور قرار التأشيرة.`,
    },
    {
      title: "إخلاء المسؤولية",
      text: `رحلتنا للتأشيرات ليست سفارة أو قنصلية أو جهة حكومية ولا تملك صلاحية إصدار أو رفض التأشيرات.

الموافقة على التأشيرة أو رفضها قرار يعود حصراً إلى السفارة أو الجهة المختصة.

لا تضمن رحلتنا للتأشيرات الموافقة على أي طلب تأشيرة مهما كانت المستندات المقدمة.

كما لا تتحمل الشركة أي مسؤولية عن:

* رفض طلب التأشيرة
* تأخير إصدار التأشيرة
* تغيير متطلبات السفارات
* فقدان أو تأخير المستندات لدى شركات الشحن أو الجهات الخارجية
* أي خسائر ناتجة عن تغيير مواعيد السفر أو الحجوزات`,
    },
    {
      title: "تحديث المعلومات",
      text: "قد يتم تحديث المتطلبات أو الرسوم أو المدد أو المحتوى المنشور بالموقع دون إشعار مسبق وفقاً لتحديثات السفارات والجهات المختصة.",
    },
    {
      title: "الخصوصية",
      text: "يخضع جمع واستخدام البيانات الشخصية لسياسة الخصوصية المعتمدة بالموقع.",
    },
    {
      title: "التواصل",
      text: "للاستفسارات المتعلقة بالخدمات أو الطلبات يمكن التواصل عبر وسائل التواصل المعتمدة الموضحة بالموقع.",
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
            آخر تحديث: 31 مايو 2026
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

              <p className="whitespace-pre-line leading-9 text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
