
"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    {
      name: "أحمد الزهراني",
      text: "تعامل راقي وسرعة في إنهاء الإجراءات، أنصح فيهم جدًا."
    },

    {
      name: "نورة القحطاني",
      text: "ساعدوني في تجهيز ملف التأشيرة ومتابعة الموعد بالكامل."
    },

    {
      name: "خالد العرابي",
      text: "تجربة ممتازة وتواصل سريع عبر الواتساب طوال فترة التقديم."
    },

    {
      name: "عبدالله العتيبي",
      text: "التقديم كان مرتب وسريع جدًا، وتمت مساعدتي خطوة بخطوة."
    },

    {
      name: "سارة باخشب",
      text: "أفضل تجربة تعامل في التأشيرات، خصوصًا سرعة الرد والمتابعة."
    },

    {
      name: "تركي الشمراني",
      text: "تم استخراج التأشيرة بكل احترافية وسهولة."
    },

    {
      name: "محمد الذيابي",
      text: "شرح واضح ومتابعة ممتازة حتى بعد التقديم."
    },

    {
      name: "رغد مستور",
      text: "خدمة ممتازة وتعامل راقي جدًا وأنصح فيهم."
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

const previousReview =
  reviews[(reviewIndex - 1 + reviews.length) % reviews.length];

const currentReview = reviews[reviewIndex];

const nextReview = reviews[(reviewIndex + 1) % reviews.length];

const goNext = () => {
  setReviewIndex((prev) => (prev + 1) % reviews.length);
};

const goPrev = () => {
  setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
};

  const sendToWhatsApp = () => {
    const message = `
طلب تأشيرة جديد

الاسم: ${name}
الجوال: ${phone}
الدولة: ${country}
نوع التأشيرة: ${visaType}
    `;

    const url = `https://wa.me/966552525141?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-white text-black">
{/* Floating Navbar */}
<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50">

  <div className="bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl px-6 md:px-10 py-4 flex items-center justify-between">

    {/* Logo */}
    <a href="#home" className="flex items-center">
      <img
        src="/logo.png"
        alt="رحلتنا لإستخراج التأشيرات"
        className="h-12 md:h-16 w-auto transition duration-300"
      />
    </a>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-20 text-[19px] font-semibold">

      <a
        href="#reviews"
        className="relative hover:text-orange-500 transition duration-300 after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        التقييمات
      </a>

      <a
        href="#contact"
        className="relative hover:text-orange-500 transition duration-300 after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        ابدأ طلبك
      </a>

      <a
        href="#countries"
        className="relative hover:text-orange-500 transition duration-300 after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        الوجهات
      </a>

      <a
        href="#home"
        className="relative hover:text-orange-500 transition duration-300 after:absolute after:-bottom-2 after:right-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        الرئيسية
      </a>

    </div>

    {/* Desktop WhatsApp */}
    <a
      href="https://wa.me/966552525141"
      target="_blank"
      className="hidden md:flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl font-bold transition duration-300 hover:scale-105 shadow-xl"
    >
      واتساب
    </a>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(true)}
      className="md:hidden text-3xl font-bold"
    >
      ☰
    </button>

  </div>
</nav>

{/* Mobile Sidebar */}
{menuOpen && (
  <div className="fixed inset-0 z-[999] md:hidden">

    {/* Overlay */}
    <div
      onClick={() => setMenuOpen(false)}
      className="absolute inset-0 bg-black/50 backdrop-blur-sm"
    ></div>

    {/* Sidebar */}
    <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl p-6">

      {/* Top */}
      <div className="flex items-center justify-between mb-10">

        <img
          src="/logo.png"
          alt="رحلتنا للتأشيرات"
          className="h-12 w-auto"
        />

        <button
          onClick={() => setMenuOpen(false)}
          className="text-3xl"
        >
          ×
        </button>

      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 text-lg font-bold text-right">

        <a
          onClick={() => setMenuOpen(false)}
          href="#home"
          className="hover:text-orange-500 transition flex items-center justify-between"
        >
          <span>الرئيسية</span>
          <span>🏠</span>
        </a>

        <a
          onClick={() => setMenuOpen(false)}
          href="#countries"
          className="hover:text-orange-500 transition flex items-center justify-between"
        >
          <span>الوجهات</span>
          <span>🌍</span>
        </a>

        <a
          onClick={() => setMenuOpen(false)}
          href="#contact"
          className="hover:text-orange-500 transition flex items-center justify-between"
        >
          <span>ابدأ طلبك</span>
          <span>🛂</span>
        </a>

        <a
          onClick={() => setMenuOpen(false)}
          href="#reviews"
          className="hover:text-orange-500 transition flex items-center justify-between"
        >
          <span>التقييمات</span>
          <span>⭐</span>
        </a>

        <a
          href="https://wa.me/966552525141"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-2xl transition mt-4"
        >
          واتساب
        </a>

      </div>
    </div>
  </div>
)}
      {/* Hero Section */}
<section
  id="home"
className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-32 pt-32 bg-cover bg-center relative"  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
  }}
>
<h2 className="text-3xl md:text-4xl md:text-6xl font-bold mb-6 leading-tight text-white bg-black/40 px-6 py-3 rounded-2xl backdrop-blur-sm">  رحلتنا لاستخراج التأشيرات
</h2>
<p  className="text-white text-xl max-w-2xl mb-10 bg-black/30 px-5 py-3 rounded-2xl backdrop-blur-sm">بوابتك لاستخراج التأشيرات السياحية والدراسية بأسرع وأسهل طريقة        </p>

        <a
          href="https://wa.me/966552525141"
          target="_blank"
className="bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-lg hover:bg-orange-600 hover:scale-105 transition duration-300"        >
          ابدأ طلبك الآن
        </a>
      </section>
{/* Stats */}
<section dir="rtl" className="bg-gradient-to-r from-zinc-900 to-black text-white py-10 px-8">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

    <div>
      <h3 className="text-4xl font-bold text-orange-400 mb-2">
        +1200
      </h3>

      <p className="text-gray-300">
        عميل
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-orange-400 mb-2">
        +40
      </h3>

      <p className="text-gray-300">
        وجهة
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-orange-400 mb-2">
        99%
      </h3>

      <p className="text-gray-300">
        نسبة رضا العملاء
      </p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-orange-400 mb-2">
        24/7
      </h3>

      <p className="text-gray-300">
        دعم مستمر
      </p>
    </div>

  </div>

</section>
      {/* Countries */}
<section id="countries"
       className="px-8 pb-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          التأشيرات الأكثر طلبًا
        </h3>
        <p className="text-center text-gray-400 mt-3 mb-8 md:hidden animate-pulse">
  اسحب لعرض المزيد ←
</p>

<div
className="
flex flex-row-reverse md:grid
md:grid-cols-2 lg:grid-cols-3
gap-5 md:gap-8
overflow-x-auto
md:overflow-visible
snap-x snap-mandatory
scroll-smooth
pb-4
scrollbar-hide
"
>
<a
  href="/uk"
  className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block"
>            <h4 className="text-3xl mb-4">🇬🇧</h4>
            <h5 className="text-2xl font-semibold mb-2">بريطانيا</h5>
            <p className="text-gray-600">
              تأشيرات سياحية ودراسية مع تجهيز كامل للملف
            </p>
          </a>

<a
  href="/usa"
  className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block"
>            <h4 className="text-3xl mb-4">🇺🇸</h4>
            <h5 className="text-2xl font-semibold mb-2">أمريكا</h5>
            <p className="text-gray-600">
              مساعدتك في تعبئة النماذج وحجز المواعيد
            </p>
          </a>

<a
  href="/schengen"
className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block">
              <h4 className="text-3xl mb-4">🇪🇺</h4>
            <h5 className="text-2xl font-semibold mb-2">شنغن</h5>
            <p className="text-gray-600">
              استخراج تأشيرات الشنغن لجميع الدول الأوروبية
            </p>
          </a>
<a
  href="/canada"
  className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block"
>
  <h4 className="text-3xl mb-4">🇨🇦</h4>

  <h5 className="text-2xl font-semibold mb-2">
    كندا
  </h5>

  <p className="text-gray-600">
    خدمات التأشيرات السياحية والدراسية لكندا
  </p>
</a>
<a
  href="/uae"
  className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block"
>
  <h4 className="text-3xl mb-4">🇦🇪</h4>

  <h5 className="text-2xl font-semibold mb-2">
    الإمارات
  </h5>

  <p className="text-gray-600">
    تأشيرة إلكترونية لمقيمي دول الخليج
  </p>
</a>
<a
  href="/australia"
  className="min-w-[85%] md:min-w-0 snap-center border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300 text-center block"
>
  <h4 className="text-3xl mb-4">🇦🇺</h4>

  <h5 className="text-2xl font-semibold mb-2">
    أستراليا
  </h5>

  <p className="text-gray-600">
    تأشيرات سياحية ودراسية إلكترونية
  </p>
</a>

        </div>
      </section>
 
{/* Why Choose Us */}
<section className="bg-gray-50 py-24 px-8">

  <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
    لماذا تختار رحلتنا للتأشيرات؟
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

    <div className="bg-white rounded-3xl p-8 shadow-sm text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <h4 className="text-2xl font-semibold mb-4">
        سرعة الإنجاز
      </h4>

      <p className="text-gray-600">
        نساعدك في تجهيز طلبك بأسرع وقت مع متابعة مستمرة
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-sm text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <h4 className="text-2xl font-semibold mb-4">
        متابعة كاملة
      </h4>

      <p className="text-gray-600">
        نتابع معك جميع خطوات التقديم حتى إصدار التأشيرة
      </p>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-sm text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <h4 className="text-2xl font-semibold mb-4">
        دعم عبر واتساب
      </h4>

      <p className="text-gray-600">
        تواصل مباشر وسريع للإجابة على جميع استفساراتك
      </p>
    </div>

  </div>

</section>
{/* Steps */}
<section id="steps" 
className="py-24 px-8 bg-white">

  <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
    خطوات استخراج التأشيرة
  </h3>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center" dir="rtl">
    <div className="border rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="text-4xl mb-4">1</div>
      <h4 className="text-xl font-bold mb-3">تواصل معنا</h4>
      <p className="text-gray-600">
        نحدد نوع التأشيرة المناسبة لك.
      </p>
    </div>

    <div className="border rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="text-4xl mb-4">2</div>
      <h4 className="text-xl font-bold mb-3">تجهيز المتطلبات</h4>
      <p className="text-gray-600">
        نراجع المستندات ونوضح النواقص.
      </p>
    </div>

    <div className="border rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="text-4xl mb-4">3</div>
      <h4 className="text-xl font-bold mb-3">تقديم الطلب</h4>
      <p className="text-gray-600">
        نساعدك في تعبئة النماذج وحجز الموعد.
      </p>
    </div>

    <div className="border rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="text-4xl mb-4">4</div>
      <h4 className="text-xl font-bold mb-3">متابعة التأشيرة</h4>
      <p className="text-gray-600">
        نتابع معك حتى صدور القرار.
      </p>
    </div>

  </div>

</section>
{/* Testimonials */}
<section id="reviews" className="bg-gray-50 py-16 md:py-24 px-5 md:px-8 overflow-hidden">
  <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
    آراء عملائنا
  </h3>

  <div className="relative max-w-5xl mx-auto h-[340px] flex items-center justify-center">

    {/* Previous */}
    <div className="hidden md:block absolute right-0 w-[320px] h-[230px] bg-white border border-gray-100 rounded-3xl p-8 text-center opacity-40 scale-90 blur-[1px] transition duration-500">
      <h4 className="font-bold text-xl mb-3">{previousReview.name}</h4>
      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
      <p className="text-gray-600 leading-8">{previousReview.text}</p>
    </div>

    {/* Current */}
    <div className="relative z-10 w-full md:w-[420px] h-[280px] bg-white border border-orange-100 rounded-3xl p-8 text-center shadow-2xl transition duration-500">
      <h4 className="font-bold text-2xl mb-3">{currentReview.name}</h4>
      <div className="text-yellow-400 text-3xl mb-5">★★★★★</div>
      <p className="text-gray-600 leading-8">{currentReview.text}</p>
    </div>

    {/* Next */}
    <div className="hidden md:block absolute left-0 w-[320px] h-[230px] bg-white border border-gray-100 rounded-3xl p-8 text-center opacity-40 scale-90 blur-[1px] transition duration-500">
      <h4 className="font-bold text-xl mb-3">{nextReview.name}</h4>
      <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
      <p className="text-gray-600 leading-8">{nextReview.text}</p>
    </div>

    {/* Arrows */}
   <button
  onClick={goPrev}
  className="
  absolute md:right-20
  bottom-[-70px] md:bottom-auto
  right-[55%] md:top-1/2
  md:-translate-y-1/2
  z-20
  bg-white/80 hover:bg-orange-500 hover:text-white
  border border-gray-100
  w-12 h-12 rounded-full shadow-lg transition
"
>
  ›
</button>

 <button
  onClick={goNext}
  className="
  absolute md:left-20
  bottom-[-70px] md:bottom-auto
  left-[55%] md:top-1/2
  md:-translate-y-1/2
  z-20
  bg-white/80 hover:bg-orange-500 hover:text-white
  border border-gray-100
  w-12 h-12 rounded-full shadow-lg transition
"
>
  ‹
</button>

  </div>
</section>
{/* About Us */}
<section id="about"
dir="rtl" className="px-5 md:px-8 py-16 md:py-24 bg-white">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

    <div className="bg-white border border-gray-100 rounded-3xl p-10 text-right hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300">

  <div className="text-5xl mb-6">
    🌍
  </div>

  <h3 className="text-3xl font-bold mb-4 text-orange-500">
    من نحن
  </h3>

  <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>

  <p className="text-gray-600 leading-8">
    رحلتنا للتأشيرات هي منصة متخصصة في خدمات التأشيرات السياحية والدراسية، نساعد عملاءنا في تسهيل إجراءات السفر واستخراج التأشيرات لجميع الوجهات العالمية باحترافية وموثوقية.
  </p>

</div>
    <div className="bg-white border border-gray-100 rounded-3xl p-10 text-right hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <div className="text-5xl mb-6">
    🚀
  </div>

  <h3 className="text-3xl font-bold mb-4 text-orange-500">
    رسالتنا
  </h3>

  <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>

  <p className="text-gray-600 leading-8">
    نسعى لتقديم تجربة سهلة وسريعة في خدمات التأشيرات من خلال المتابعة الدقيقة، والدعم المستمر، وتوفير حلول موثوقة تناسب احتياجات عملائنا.
  </p>

</div>
    <div className="bg-white border border-gray-100 rounded-3xl p-10 text-right hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <div className="text-5xl mb-6">
    🎯
  </div>

  <h3 className="text-3xl font-bold mb-4 text-orange-500">
    هدفنا
  </h3>

  <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>

  <p className="text-gray-600 leading-8">
    أن نكون الخيار الأول في خدمات التأشيرات والسفر عبر تقديم تجربة احترافية، وبناء ثقة طويلة المدى مع عملائنا داخل المملكة وخارجها.
  </p>

</div>
  </div>

</section>
{/* FAQ */}
<section dir="rtl" className="px-5 md:px-8 py-16 md:py-24 bg-white">
  <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
    الأسئلة الشائعة
  </h3>

<div className="max-w-4xl mx-auto space-y-6 text-right">
    <div className="border rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300">
      <h4 className="text-xl font-bold mb-3">
        كم تستغرق مدة استخراج التأشيرة؟
      </h4>

      <p className="text-gray-600">
        تختلف المدة حسب الدولة ونوع التأشيرة، ويتم توضيح المدة المتوقعة قبل بدء الطلب.
      </p>
    </div>

    <div className="border rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300">
      <h4 className="text-xl font-bold mb-3">
        هل تساعدون في تجهيز الملف؟
      </h4>

      <p className="text-gray-600">
        نعم، نساعدك في مراجعة وتجهيز جميع المستندات المطلوبة للتقديم.
      </p>
    </div>

    <div className="border rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 transition duration-300">
      <h4 className="text-xl font-bold mb-3">
        هل يتم حجز المواعيد؟
      </h4>

      <p className="text-gray-600">
        نعم، نوفر خدمة حجز المواعيد والتقديم على التأشيرات حسب المتطلبات.
      </p>
    </div>

  </div>

</section>
{/* Contact Form */}
<section id="contact"
 dir="rtl" className="px-5 md:px-8 py-16 md:py-24 bg-gray-50">

  <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
    ابدأ طلبك الآن
  </h3>

  <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<input
  type="text"
  placeholder="الاسم الكامل"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="border rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-300"
/>

<input
  type="text"
  placeholder="رقم الجوال"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="border rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-300"
/>

<select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  className="border rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-300"
>
  <option value="">اختر الدولة</option>
  <option>🇬🇧 بريطانيا</option>
  <option>🇺🇸 أمريكا</option>
  <option>🇨🇦 كندا</option>
  <option>🇪🇺 شنغن</option>
  <option>🇦🇪 الإمارات</option>
  <option>🇦🇺 أستراليا</option>
</select>

<select
  value={visaType}
  onChange={(e) => setVisaType(e.target.value)}
  className="border rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-300"
>
  <option value="">نوع التأشيرة</option>
  <option>تأشيرة سياحية</option>
  <option>تأشيرة دراسية</option>
</select>

    </div>

    <button
  onClick={sendToWhatsApp}

      className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-bold transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
    >
      إرسال الطلب
    </button>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
  املأ النموذج التالي وسيتم التواصل معك بأسرع وقت لمساعدتك في استخراج التأشيرة المناسبة.
</p>

  </div>

</section>
{/* Footer */}
<footer className="bg-black text-white py-14 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-4">رحلتنا للتأشيرات</h3>

    <p className="text-gray-400 mb-10">
      خدمات التأشيرات السياحية والدراسية لجميع الوجهات العالمية.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto text-gray-300 mb-10 text-right">
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

    <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-zinc-800 mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.5834825925763!2d39.162962325502896!3d21.594510468108513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d17e2eb9b007%3A0xa76e6baf7e34d360!2z2LHYrdmE2KrZhtinINmE2YTYr9ix2KfYs9ipINio2KfZhNiu2KfYsdisIChTVFVEWSBSQUNFKQ!5e1!3m2!1sar!2ssa!4v1779215522688!5m2!1sar!2ssa"
        width="100%"
        height="330"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <p className="text-gray-500 mt-8 text-sm">
      © 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات
    </p>
  </div>
</footer>

<a
  href="https://wa.me/966552525141"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
>
  واتساب
</a>
    </main>
  );
}