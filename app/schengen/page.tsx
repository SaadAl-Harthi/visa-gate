"use client";

import { useState } from "react";

type SchengenCountry = {
  name: string;
  flag: string;
  price: string;
  duration: string;
  status: string;
  requirements: string[];
  notes: string[];
};

const defaultRequirements = [
  "أصل الجواز وصورة منه.",
  "ورقة تعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل.",
  "للشركات الخاصة: يجب تصديق تعريف العمل من الغرفة التجارية.",
  "كشف حساب مطبوع باللغة الإنجليزية لمدة 4 أشهر وبرصيد لا يقل عن 10,000 ريال للشخص.",
  "صورة من الهوية.",
  "صورة من كرت العائلة إذا كان الموعد للعائلة.",
  "ورقة الموعد الخاصة بمركز الاعتماد.",
  "ورقة الأبلكيشن الخاصة بالسفارة.",
  "حجز الفندق - نسخة لكل شخص.",
  "حجز الطيران - نسخة لكل شخص.",
  "بوليصة التأمين - نسخة لكل شخص.",
  "صورتان شخصية مقاس 3.5 × 4.5 بخلفية بيضا مكشوف الرأس للرجال ومكشوف الوجه للنساءء.",
  "صورة من تأشيرة الشنغن السابقة إن وجدت.",
  "تأشيرة خروج وعودة لغير السعوديين.",
];

const buildNotes = (country: string) => [
  "الهويات وكرت العائلة إذا لم تكن بالإصدار الجديد يجب ترجمتها باللغة الإنجليزية، ويمكن ترجمتها عن طريقنا برسوم إضافية.",
  `يمكن لسفارة ${country} تغيير بعض المتطلبات أو طلب مستندات إضافية دون سابق إنذار.`,
  "لا يوجد أي وعد أو ضمان من جهتنا باستخراج التأشيرة أو تحديد وقت إصدارها.",
  "في حال رغبتك بالاستفسار عن تأشيرتك يمكنك زيارة مركز الاعتماد للسؤال عن معاملتك.",
];

const schengenCountries: SchengenCountry[] = [
  {
    name: "فرنسا",
    flag: "🇫🇷",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة فرنسا مستندات إضافية حسب حالة مقدم الطلب أو الغرض من الزيارة.",
    ],
    notes: buildNotes("فرنسا"),
  },
  {
    name: "إيطاليا",
    flag: "🇮🇹",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة إيطاليا تفاصيل إضافية عن خطة الرحلة أو حجوزات المدن داخل إيطاليا.",
    ],
    notes: buildNotes("إيطاليا"),
  },
  {
    name: "سويسرا",
    flag: "🇨🇭",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة سويسرا توضيحًا إضافيًا لمسار الرحلة أو حجوزات الإقامة حسب الحالة.",
    ],
    notes: buildNotes("سويسرا"),
  },
  {
    name: "ألمانيا",
    flag: "🇩🇪",
    price: "350 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة ألمانيا مستندات إضافية لإثبات الغرض من الزيارة أو الوضع المالي.",
    ],
    notes: buildNotes("ألمانيا"),
  },
  {
    name: "هولندا",
    flag: "🇳🇱",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة هولندا تفاصيل إضافية عن الإقامة أو برنامج الرحلة.",
    ],
    notes: buildNotes("هولندا"),
  },
  {
    name: "إسبانيا",
    flag: "🇪🇸",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة إسبانيا مستندات إضافية حسب مدينة الوصول أو مدة الإقامة.",
    ],
    notes: buildNotes("إسبانيا"),
  },
  {
  name: "النمسا",
  flag: "🇦🇹",
    price: "450 ريال (غير شاملة رسوم السفارة )",
  duration: "حسب المواعيد المتاحة",
  status: "متاحة للتقديم",
  requirements: [
    "أصل الجواز وصورة منه.",
    "ورقة تعريف بالراتب باللغة الإنجليزية موجهة للسفارة ومختومة من جهة العمل.",
    "للشركات الخاصة: يجب تصديق تعريف العمل من الغرفة التجارية.",
    "كشف حساب مطبوع باللغة الإنجليزية لمدة 4 أشهر وبرصيد لا يقل عن 15,000 ريال للشخص.",
    "صورة من الهوية.",
    "صورة من كرت العائلة إذا كان الموعد للعائلة.",
    "ورقة الموعد الخاصة بمركز الاعتماد.",
    "ورقة الأبلكيشن الخاصة بالسفارة.",
    "حجز الفندق - نسخة لكل شخص.",
    "حجز الطيران - نسخة لكل شخص.",
    "بوليصة التأمين - نسخة لكل شخص.",
  "صورتان شخصية مقاس 3.5 × 4.5 بخلفية بيضا مكشوف الرأس للرجال ومكشوف الوجه للنساءء.",
    "صورة من تأشيرة الشنغن السابقة إن وجدت.",
    "تأشيرة خروج وعودة لغير السعوديين.",
    "قد تطلب سفارة النمسا توضيحات إضافية عن برنامج الرحلة أو حجوزات السكن.",
  ],
  notes: buildNotes("النمسا"),
},
  {
    name: "البرتغال",
    flag: "🇵🇹",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة البرتغال مستندات إضافية حسب الغرض من السفر أو مدة الرحلة.",
    ],
    notes: buildNotes("البرتغال"),
  },
  {
    name: "اليونان",
    flag: "🇬🇷",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة اليونان تفاصيل إضافية عن الجزر أو المدن التي سيتم زيارتها.",
    ],
    notes: buildNotes("اليونان"),
  },
  {
    name: "التشيك",
    flag: "🇨🇿",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة التشيك مستندات إضافية عن خطة السفر أو حجوزات الإقامة.",
    ],
    notes: buildNotes("التشيك"),
  },
  {
    name: "بلجيكا",
    flag: "🇧🇪",
    price: "450 ريال (غير شاملة رسوم السفارة )",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements,
      "قد تطلب سفارة بلجيكا مستندات إضافية حسب الغرض من الزيارة أو جهة الاستضافة.",
    ],
    notes: buildNotes("بلجيكا"),
  },
];

export default function SchengenPage() {
  const [selectedCountry, setSelectedCountry] = useState<SchengenCountry>(
    schengenCountries[0]
  );

  const sendToWhatsApp = () => {
    const message = `
السلام عليكم، أرغب بالتقديم على تأشيرة شنغن

الدولة: ${selectedCountry.name}
نوع التأشيرة: سياحية
السعر: ${selectedCountry.price}
المدة: ${selectedCountry.duration}
    `;

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main dir="rtl" className="bg-white text-black">
        
        <div className="px-5 md:px-8 pt-6">
  <a
    href="/"
    className="
    inline-flex items-center gap-2
    bg-white/70 backdrop-blur-md
    border border-gray-100
    hover:border-orange-200
    hover:bg-orange-50
    text-gray-700 hover:text-orange-500
    px-5 py-3 rounded-full
    shadow-sm transition duration-300
  "
  >
    الرئيسية
    <span className="text-lg">→</span>
  </a>
</div>
      {/* Hero */}
<section className="px-5 md:px-8 py-20 md:py-28 text-center bg-gradient-to-b from-orange-100 via-orange-50 to-white">        <div className="max-w-5xl mx-auto">
          <div className="text-6xl mb-6">🇪🇺</div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            تأشيرة شنغن
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
            اختر دولة الشنغن المطلوبة، واطّلع على المتطلبات والملاحظات المهمة
            قبل بدء طلب التأشيرة.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Countries Sidebar */}
          <aside className="bg-white border rounded-3xl p-6 shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-6">اختر الدولة</h2>
<div className="md:hidden mb-6">
  <select
    value={selectedCountry.name}
    onChange={(e) => {
      const country = schengenCountries.find(
        (c) => c.name === e.target.value
      );

      if (country) {
        setSelectedCountry(country);
      }
    }}
    className="w-full border border-gray-200 rounded-2xl p-4 bg-white text-lg"
  >
    {schengenCountries.map((country) => (
      <option key={country.name} value={country.name}>
        {country.flag} {country.name}
      </option>
    ))}
  </select>
</div>
<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">              {schengenCountries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                  className={`text-right p-4 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                    selectedCountry.name === country.name
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <span className="text-2xl ml-2">{country.flag}</span>
                  {country.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Country Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="text-6xl">{selectedCountry.flag}</div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    تأشيرة شنغن - {selectedCountry.name}
                  </h2>

                  <p className="text-green-600 mt-2">
                    الحالة: {selectedCountry.status}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">نوع التأشيرة</p>
                  <h3 className="text-xl font-bold">سياحية</h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">السعر</p>
                  <h3 className="text-xl font-bold text-orange-500">
                    {selectedCountry.price}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-500 mb-2">المدة</p>
                  <h3 className="text-xl font-bold">
                    {selectedCountry.duration}
                  </h3>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-5 mb-10">
                <h3 className="text-xl font-bold mb-2">
                  ملاحظة قبل التقديم
                </h3>
                <p className="text-gray-700 leading-8">
                  المتطلبات التالية مخصصة لسفارة {selectedCountry.name}، وقد
                  تختلف حسب حالة مقدم الطلب أو تحديثات السفارة.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-5">
                المتطلبات عند الحضور لمركز التأشيرات
              </h3>

              <ul className="space-y-3 mb-10">
                {selectedCountry.requirements.map((item) => (
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
                {selectedCountry.notes.map((note) => (
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
                ابدأ طلب تأشيرة {selectedCountry.name}
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

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          هل الحضور شخصي لمركز التأشيرات؟
        </h3>

        <p className="text-gray-600 leading-8">
          نعم، يجب حضور صاحب الطلب شخصيًا لمركز التأشيرات لإجراء البصمة وتسليم الجواز.
        </p>
      </div>

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          هل البصمة مطلوبة؟
        </h3>

        <p className="text-gray-600 leading-8">
          نعم، البصمة مطلوبة عند التقديم على تأشيرة شنغن.
        </p>
      </div>

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          كم مدة استخراج التأشيرة؟
        </h3>

        <p className="text-gray-600 leading-8">
          تختلف مدة المعالجة حسب السفارة والموسم، وعادة تستغرق من عدة أيام إلى عدة أسابيع.
        </p>
      </div>

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          هل التأشيرة مضمونة؟
        </h3>

        <p className="text-gray-600 leading-8">
          لا يمكن ضمان الموافقة على التأشيرة، حيث يعود القرار النهائي للسفارة فقط.
        </p>
      </div>

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          هل يمكن التقديم للعائلة؟
        </h3>

        <p className="text-gray-600 leading-8">
          نعم، يمكن التقديم للأفراد أو العائلات مع تجهيز كامل للملفات والمواعيد.
        </p>
      </div>

      <div className="border rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-3">
          هل يجب حجز طيران وفندق قبل التقديم؟
        </h3>

        <p className="text-gray-600 leading-8">
          نعم، يتطلب ملف التأشيرة وجود حجوزات مبدئية للطيران والفندق، ويمكن توفيرها وتجهيزها من خلالنا.
        </p>
      </div>

    </div>

  </div>

</section>
{/* Related Visas */}
<section dir="rtl" className="px-5 md:px-8 py-16 md:py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      تأشيرات قد تهمك
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
<a
  href="/uk"
  className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
>        <div className="text-5xl mb-5">🇬🇧</div>
        <h3 className="text-2xl font-bold mb-3">تأشيرة بريطانيا</h3>
        <p className="text-gray-600 leading-8">
          خدمات التقديم على التأشيرات السياحية والدراسية لبريطانيا.
        </p>
      </a>

<a
  href="/usa"
  className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
>        <div className="text-5xl mb-5">🇺🇸</div>
        <h3 className="text-2xl font-bold mb-3">تأشيرة أمريكا</h3>
        <p className="text-gray-600 leading-8">
          تجهيز ملف التأشيرة الأمريكية ومساعدتك في خطوات التقديم.
        </p>
      </a>

<a
  href="/canada"
  className="bg-white border border-gray-100 rounded-3xl p-8 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 block"
>        <div className="text-5xl mb-5">🇨🇦</div>
        <h3 className="text-2xl font-bold mb-3">تأشيرة كندا</h3>
        <p className="text-gray-600 leading-8">
          خدمات التأشيرات السياحية والدراسية لكندا بخطوات واضحة.
        </p>
      </a>
    </div>
  </div>
</section>
{/* Footer */}
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

    <div className="flex justify-center items-center gap-4 mt-8 mb-10 flex-wrap">
      <a href="https://instagram.com/studyrace1" target="_blank" className="bg-white/10 hover:bg-orange-500 transition px-5 py-3 rounded-full whitespace-nowrap">
        Instagram
      </a>

      <a href="https://snapchat.com/add/studyrace1" target="_blank" className="bg-white/10 hover:bg-yellow-400 hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">
        Snapchat
      </a>

      <a href="https://tiktok.com/@studyrace1" target="_blank" className="bg-white/10 hover:bg-white hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">
        TikTok
      </a>

      <a href="https://linkedin.com/company/studyrace" target="_blank" className="bg-white/10 hover:bg-blue-600 transition px-5 py-3 rounded-full whitespace-nowrap">
        LinkedIn
      </a>

      <a href="https://x.com/studyrace1" target="_blank" className="bg-white/10 hover:bg-white hover:text-black transition px-5 py-3 rounded-full whitespace-nowrap">
        X
      </a>
    </div>

    <p className="text-gray-500 mt-8 text-sm">
      © 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات
    </p>
  </div>
</footer>
<a
  href={`https://wa.me/966552525141?text=${encodeURIComponent(
    `السلام عليكم، أرغب بالتقديم على تأشيرة ${selectedCountry.name}`
  )}`}
  target="_blank"
  className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
>
  واتساب
</a>
    </main>
  );
}