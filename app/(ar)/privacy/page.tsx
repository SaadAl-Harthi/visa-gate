export default function PrivacyPage() {
  const items = [
    {
      title: "مقدمة",
      text: `تحترم رحلتنا للتأشيرات خصوصية مستخدمي الموقع وتلتزم بحماية البيانات الشخصية التي يتم جمعها أثناء استخدام الموقع أو الاستفادة من خدمات التأشيرات.

باستخدام الموقع أو إرسال طلب تأشيرة فإنك توافق على سياسة الخصوصية هذه.`,
    },
    {
      title: "البيانات التي نقوم بجمعها",
      text: `قد نقوم بجمع البيانات التالية:

* الاسم الكامل
* رقم الجوال
* البريد الإلكتروني إن وجد
* بيانات جواز السفر
* بيانات الهوية الوطنية أو الإقامة
* العنوان الوطني
* المستندات المطلوبة للتأشيرات
* أي معلومات إضافية يرسلها العميل ضمن الطلب`,
    },
    {
      title: "كيفية استخدام البيانات",
      text: `يتم استخدام البيانات للأغراض التالية:

* تقديم خدمات التأشيرات
* مراجعة المستندات المطلوبة
* التواصل مع العميل بخصوص الطلب
* تقديم الطلبات إلى السفارات أو الجهات المختصة
* تحسين جودة الخدمات المقدمة
* الامتثال للأنظمة والمتطلبات القانونية`,
    },
    {
      title: "مشاركة البيانات",
      text: `قد يتم مشاركة البيانات عند الحاجة مع:

* السفارات والقنصليات
* مراكز التأشيرات المعتمدة
* شركات الشحن والتوصيل
* الجهات الحكومية المختصة
* مزودي الخدمات المرتبطين بإجراءات التأشيرات

ولا يتم بيع البيانات الشخصية أو تأجيرها لأي طرف ثالث لأغراض تسويقية.`,
    },
    {
      title: "حماية البيانات",
      text: `تتخذ رحلتنا للتأشيرات إجراءات معقولة ومناسبة لحماية البيانات الشخصية من الوصول غير المصرح به أو الاستخدام أو الإفصاح أو التعديل أو الإتلاف.

ومع ذلك لا يمكن ضمان الأمان الكامل لأي عملية نقل أو تخزين إلكتروني للبيانات.`,
    },
    {
      title: "مدة الاحتفاظ بالبيانات",
      text: "يجوز الاحتفاظ بالبيانات والمستندات للفترة اللازمة لتقديم الخدمة أو للامتثال للمتطلبات النظامية والتنظيمية أو لحل النزاعات وحماية الحقوق القانونية.",
    },
    {
      title: "ملفات تعريف الارتباط (Cookies)",
      text: `قد يستخدم الموقع ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربة المستخدم وتحليل أداء الموقع وتطوير الخدمات.

ويمكن للمستخدم التحكم بإعدادات ملفات تعريف الارتباط من خلال المتصفح المستخدم.`,
    },
    {
      title: "التواصل التسويقي",
      text: `عند إرسال طلب عبر الموقع أو نموذج التواصل يوافق المستخدم على إمكانية التواصل معه بخصوص طلبه عبر:

* الهاتف
* الواتساب
* البريد الإلكتروني

ويجوز للمستخدم طلب إيقاف الرسائل التسويقية في أي وقت.`,
    },
    {
      title: "روابط المواقع الخارجية",
      text: `قد يحتوي الموقع على روابط لمواقع أو خدمات خارجية.

ولا تتحمل رحلتنا للتأشيرات مسؤولية سياسات الخصوصية أو محتوى تلك المواقع.`,
    },
    {
      title: "تحديث سياسة الخصوصية",
      text: `يجوز تحديث سياسة الخصوصية من وقت لآخر وفق المتطلبات النظامية أو التشغيلية.

ويعتبر استمرار استخدام الموقع موافقة على النسخة المحدثة من السياسة.`,
    },
    {
      title: "التواصل معنا",
      text: "إذا كانت لديك أي استفسارات تتعلق بسياسة الخصوصية أو البيانات الشخصية يمكنك التواصل معنا عبر وسائل التواصل المعتمدة الموضحة في الموقع.",
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
            سياسة <span className="text-orange-500">الخصوصية</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            نلتزم في رحلتنا للتأشيرات بحماية خصوصية العملاء والتعامل مع جميع البيانات بسرية واحترافية.
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

              <p className="whitespace-pre-line leading-9 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
