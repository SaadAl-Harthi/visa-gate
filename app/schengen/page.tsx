"use client";

import { useState } from "react";

type SchengenCountry = {
  name: string;
  flag: string;
  price: string;
  duration: string;
  status: string;
  requirements: string[];
  extraRequirements?: string[];
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
  "صورتان شخصية مقاس 3.5 × 4.5 بخلفية بيضاء.",
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
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة فرنسا مستندات إضافية حسب حالة مقدم الطلب أو الغرض من الزيارة.",
    ],
    notes: buildNotes("فرنسا"),
  },
  {
    name: "إيطاليا",
    flag: "🇮🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة إيطاليا تفاصيل إضافية عن خطة الرحلة أو حجوزات المدن داخل إيطاليا.",
    ],
    notes: buildNotes("إيطاليا"),
  },
  {
    name: "سويسرا",
    flag: "🇨🇭",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة سويسرا توضيحًا إضافيًا لمسار الرحلة أو حجوزات الإقامة حسب الحالة.",
    ],
    notes: buildNotes("سويسرا"),
  },
  {
    name: "ألمانيا",
    flag: "🇩🇪",
    price: "350 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة ألمانيا مستندات إضافية لإثبات الغرض من الزيارة أو الوضع المالي.",
    ],
    notes: buildNotes("ألمانيا"),
  },
  {
    name: "هولندا",
    flag: "🇳🇱",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة هولندا تفاصيل إضافية عن الإقامة أو برنامج الرحلة.",
    ],
    notes: buildNotes("هولندا"),
  },
  {
    name: "إسبانيا",
    flag: "🇪🇸",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة إسبانيا مستندات إضافية حسب مدينة الوصول أو مدة الإقامة.",
    ],
    notes: buildNotes("إسبانيا"),
  },
  {
    name: "النمسا",
    flag: "🇦🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: [
      ...defaultRequirements.filter(
        (item) => !item.includes("10,000 ريال")
      ),
      "كشف حساب مطبوع باللغة الإنجليزية لمدة 4 أشهر وبرصيد لا يقل عن 15,000 ريال للشخص.",
    ],
    extraRequirements: [
      "قد تطلب سفارة النمسا توضيحات إضافية عن برنامج الرحلة أو حجوزات السكن.",
    ],
    notes: buildNotes("النمسا"),
  },
  {
    name: "البرتغال",
    flag: "🇵🇹",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة البرتغال مستندات إضافية حسب الغرض من السفر أو مدة الرحلة.",
    ],
    notes: buildNotes("البرتغال"),
  },
  {
    name: "اليونان",
    flag: "🇬🇷",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة اليونان تفاصيل إضافية عن الجزر أو المدن التي سيتم زيارتها.",
    ],
    notes: buildNotes("اليونان"),
  },
  {
    name: "التشيك",
    flag: "🇨🇿",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة التشيك مستندات إضافية عن خطة السفر أو حجوزات الإقامة.",
    ],
    notes: buildNotes("التشيك"),
  },
  {
    name: "بلجيكا",
    flag: "🇧🇪",
    price: "450 ريال غير شاملة رسوم السفارة",
    duration: "حسب المواعيد المتاحة",
    status: "متاحة للتقديم",
    requirements: defaultRequirements,
    extraRequirements: [
      "قد تطلب سفارة بلجيكا مستندات إضافية حسب الغرض من الزيارة أو جهة الاستضافة.",
    ],
    notes: buildNotes("بلجيكا"),
  },
];

export default function SchengenPage() {
  const [selectedCountry, setSelectedCountry] = useState<SchengenCountry>(
    schengenCountries[0]
  );

  const allRequirements = [
    ...selectedCountry.requirements,
    ...(selectedCountry.extraRequirements ?? []),
  ];

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
            تأشيرة <span className="text-orange-500">شنغن</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            اختر دولة الشنغن المطلوبة واطّلع على المتطلبات والملاحظات المهمة قبل بدء طلب التأشيرة.
          </p>

      

{/* Schengen Intro */}
<div className="max-w-5xl mx-auto mt-14">

  <div className="
    relative overflow-hidden
    bg-white/80 backdrop-blur-xl
    border border-orange-100
    rounded-[32px]
    p-8 md:p-12
    shadow-[0_20px_80px_rgba(0,0,0,0.06)]
  ">

    <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

      <div className="
        min-w-[110px] h-[110px]
        rounded-[30px]
        bg-gradient-to-br from-orange-500 to-orange-400
        flex items-center justify-center
        shadow-[0_15px_40px_rgba(249,115,22,0.35)]
      ">
        <span className="text-5xl">🌍</span>
      </div>

      <div className="text-center md:text-right flex-1">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          ما هي تأشيرة شنغن؟
        </h2>

        <p className="text-gray-600 leading-9 text-lg">
          تأشيرة شنغن هي تأشيرة موحدة تسمح لحاملها بالتنقل بين دول منطقة
          الشنغن الأوروبية لمدة تصل إلى 90 يومًا خلال فترة 180 يومًا،
          سواءً للسياحة أو زيارة العائلة أو الأعمال.
        </p>

        <div className="
          mt-6
          bg-orange-50
          border border-orange-100
          rounded-2xl
          px-5 py-4
          text-orange-700
          leading-8
          text-sm md:text-base
        ">
          قد تختلف المتطلبات والإجراءات من دولة لأخرى، لذلك يتم تحديث
          الشروط حسب السفارة المختارة.
        </div>

      </div>

    </div>

  </div>

</div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <aside className="h-fit rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-xl backdrop-blur-xl">
            <h2 className="mb-6 text-2xl font-black text-[#101b32]">
              اختر الدولة
            </h2>

            <div className="mb-6 md:hidden">
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
                className="w-full rounded-2xl border border-orange-100 bg-white p-4 text-lg outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                {schengenCountries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden gap-3 md:grid">
              {schengenCountries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setSelectedCountry(country)}
                  className={`rounded-2xl border p-4 text-right font-bold transition duration-300 hover:-translate-y-1 ${
                    selectedCountry.name === country.name
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md"
                      : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-lg"
                  }`}
                >
                  <span className="ml-2 text-2xl">{country.flag}</span>
                  {country.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Details */}
          <div className="lg:col-span-2">
            <div className="rounded-[34px] border border-orange-100 bg-white/90 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
                <div className="text-6xl">{selectedCountry.flag}</div>

                <div>
                  <h2 className="text-3xl font-black text-[#101b32] md:text-4xl">
                    تأشيرة شنغن - {selectedCountry.name}
                  </h2>

                  <p className="mt-2 font-bold text-green-600">
                    {selectedCountry.status}
                  </p>
                </div>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">نوع التأشيرة</p>
                  <h3 className="text-xl font-black">سياحية</h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">السعر</p>
                  <h3 className="text-xl font-black text-orange-500">
                    {selectedCountry.price}
                  </h3>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
                  <p className="mb-2 text-gray-500">المدة</p>
                  <h3 className="text-xl font-black">
                    {selectedCountry.duration}
                  </h3>
                </div>
              </div>

              <div className="mb-10 rounded-3xl border border-orange-100 bg-orange-50 p-5">
                <h3 className="mb-2 text-xl font-black">ملاحظة قبل التقديم</h3>
                <p className="leading-8 text-gray-700">
                  المتطلبات التالية مخصصة لسفارة {selectedCountry.name}، وقد تختلف حسب حالة مقدم الطلب أو تحديثات السفارة.
                </p>
              </div>

              <h3 className="mb-5 text-2xl font-black text-[#101b32]">
                المتطلبات عند الحضور لمركز التأشيرات
              </h3>

              <ul className="mb-10 space-y-3">
                {allRequirements.map((item) => (
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
                {selectedCountry.notes.map((note) => (
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
                ابدأ طلب تأشيرة {selectedCountry.name}
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
            {[
              {
                q: "هل الحضور شخصي لمركز التأشيرات؟",
                a: "نعم، يجب حضور صاحب الطلب شخصيًا لمركز التأشيرات لإجراء البصمة وتسليم الجواز.",
              },
              {
                q: "هل البصمة مطلوبة؟",
                a: "نعم، البصمة مطلوبة عند التقديم على تأشيرة شنغن.",
              },
              {
                q: "كم مدة استخراج التأشيرة؟",
                a: "تختلف مدة المعالجة حسب السفارة والموسم، وعادة تستغرق من عدة أيام إلى عدة أسابيع.",
              },
              {
                q: "هل التأشيرة مضمونة؟",
                a: "لا يمكن ضمان الموافقة على التأشيرة، حيث يعود القرار النهائي للسفارة فقط.",
              },
              {
                q: "هل يمكن التقديم للعائلة؟",
                a: "نعم، يمكن التقديم للأفراد أو العائلات مع تجهيز كامل للملفات والمواعيد.",
              },
              {
                q: "هل يجب حجز طيران وفندق قبل التقديم؟",
                a: "نعم، يتطلب ملف التأشيرة وجود حجوزات مبدئية للطيران والفندق، ويمكن توفيرها وتجهيزها من خلالنا.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[28px] border border-orange-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="mb-3 text-xl font-black text-[#101b32]">
                  {item.q}
                </h3>

                <p className="leading-8 text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Visas */}
      <section
        dir="rtl"
        className="relative bg-gradient-to-b from-white via-orange-50/20 to-white px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-black text-[#101b32] md:text-5xl">
            تأشيرات قد <span className="text-orange-500">تهمك</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                href: "/uk",
                flag: "🇬🇧",
                title: "تأشيرة بريطانيا",
                text: "خدمات التقديم على التأشيرات السياحية والدراسية لبريطانيا.",
              },
              {
                href: "/usa",
                flag: "🇺🇸",
                title: "تأشيرة أمريكا",
                text: "تجهيز ملف التأشيرة الأمريكية ومساعدتك في خطوات التقديم.",
              },
              {
                href: "/canada",
                flag: "🇨🇦",
                title: "تأشيرة كندا",
                text: "خدمات التأشيرات السياحية والدراسية لكندا بخطوات واضحة.",
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