export default function PrivacyPage() {
  return (
    <main dir="rtl" className="bg-white text-black min-h-screen">

      {/* Hero */}
      <section className="px-5 md:px-8 py-24 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            سياسة الخصوصية
          </h1>

          <p className="text-gray-600 text-lg leading-9">
            نلتزم في رحلتنا للتأشيرات بحماية خصوصية العملاء والتعامل مع جميع البيانات بسرية واحترافية.
          </p>

        </div>

      </section>

      {/* Content */}
      <section className="px-5 md:px-8 py-16">

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              1. جمع المعلومات
            </h2>

            <p className="text-gray-600 leading-9">
              قد نقوم بجمع بعض البيانات والمعلومات اللازمة لتقديم خدمات التأشيرات، مثل الاسم ورقم الجوال والبريد الإلكتروني والمستندات المطلوبة للتقديم.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              2. استخدام المعلومات
            </h2>

            <p className="text-gray-600 leading-9">
              تستخدم المعلومات المقدمة فقط لغرض تجهيز طلبات التأشيرات أو التواصل مع العميل بخصوص الخدمة المطلوبة.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              3. مشاركة البيانات
            </h2>

            <p className="text-gray-600 leading-9">
              لا يتم بيع أو مشاركة بيانات العملاء مع أي طرف ثالث إلا في حدود ما تتطلبه إجراءات التقديم لدى السفارات أو الجهات المختصة.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              4. حماية المعلومات
            </h2>

            <p className="text-gray-600 leading-9">
              نحرص على اتخاذ الإجراءات المناسبة لحماية بيانات العملاء من الوصول غير المصرح به أو الاستخدام غير القانوني.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              5. مسؤولية العميل
            </h2>

            <p className="text-gray-600 leading-9">
              يتحمل العميل مسؤولية التأكد من صحة البيانات والمستندات المقدمة، وأي معلومات غير صحيحة قد تؤثر على الطلب أو تؤدي إلى رفضه.
            </p>
          </div>

          {/* Item */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              6. التعديلات على السياسة
            </h2>

            <p className="text-gray-600 leading-9">
              يحق للموقع تحديث أو تعديل سياسة الخصوصية في أي وقت بما يتناسب مع التطورات التشغيلية أو التنظيمية.
            </p>
          </div>

          {/* Final */}
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 text-center">

            <h2 className="text-2xl font-bold mb-4">
              الموافقة على السياسة
            </h2>

            <p className="text-gray-700 leading-9">
              باستخدامك للموقع أو طلب أي خدمة فإنك توافق على سياسة الخصوصية المذكورة أعلاه.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}