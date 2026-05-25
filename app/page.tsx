"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Zap,
} from "lucide-react";
import {
  Headphones,
  ShieldCheck,
  Award,
  FileText,
  Users,
  MessageCircle,
  Globe2,
    BadgeCheck,
    Rocket,
Target,
} from "lucide-react";

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

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "رحلتنا لإستخراج التأشيرات",
      alternateName: "Study Race",
      url: "https://visa-gate.vercel.app",
      logo: "https://visa-gate.vercel.app/logo.png",
      telephone: "+966552525141",
      address: {
        "@type": "PostalAddress",
        streetAddress: "مكتب 102 - الدور الأول - برج الحميضي، طريق المدينة، حي السلامة",
        addressLocality: "جدة",
        addressCountry: "SA",
      },
      areaServed: "SA",
      description:
        "خدمات استخراج التأشيرات السياحية والدراسية وتجهيز المتطلبات وحجز المواعيد.",
      sameAs: [
        "https://instagram.com/studyrace1",
        "https://snapchat.com/add/studyrace1",
        "https://tiktok.com/@studyrace1",
        "https://linkedin.com/company/studyrace",
        "https://x.com/studyrace1",
      ],
    }),
  }}
/>
{/* Premium Hero */}
<section
  id="home"
  dir="rtl"
  className="relative min-h-screen overflow-hidden bg-[#f8efe3] text-[#101b32]"
>
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="/hero-bg.png"
      alt="رحلتنا لاستخراج التأشيرات"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/55 to-white/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07142c]/70 via-transparent to-transparent" />
  </div>

{/* Navbar */}
<motion.header
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
  className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl"
>
  <nav className="relative flex items-center justify-between rounded-[32px] border border-white/60 bg-white/90 px-5 py-4 shadow-2xl shadow-black/10 backdrop-blur-2xl md:px-12 md:py-5">

    {/* Mobile Menu Button - Right */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-3xl font-bold text-slate-900"
    >
      ☰
    </button>

    {/* Desktop WhatsApp - Left */}
    <a
      href="https://wa.me/966552525141"
      target="_blank"
      className="hidden md:flex items-center gap-2 rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105"
    >
      <MessageCircle size={22} />
      واتساب
    </a>

    {/* Desktop Links */}
    <div className="hidden items-center gap-14 text-[19px] font-bold text-slate-800 lg:flex">
      {[
        ["الرئيسية", "#home"],
        ["الوجهات", "#countries"],
        ["ابدأ طلبك", "#contact"],
        ["التقييمات", "#reviews"],
        ["من نحن", "#about"],
      ].map(([label, href], index) => (
        <a
          key={label}
          href={href}
          className={`relative transition duration-300 hover:text-orange-500 after:absolute after:-bottom-3 after:right-0 after:h-[2px] after:w-0 after:rounded-full after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
            index === 0 ? "text-orange-500 after:w-full" : ""
          }`}
        >
          {label}
        </a>
      ))}
    </div>

    {/* Logo - Left visually */}
    <a href="#home" className="mr-auto md:mr-0">
      <img
        src="/logo.png"
        alt="رحلتنا للتأشيرات"
        className="h-9 w-auto md:h-16"
      />
    </a>
  </nav>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden mt-4 rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-5 text-right text-lg font-bold">
      <a href="#home" onClick={() => setMenuOpen(false)}>
        الرئيسية
      </a>

      <a href="#countries" onClick={() => setMenuOpen(false)}>
        الوجهات
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        ابدأ طلبك
      </a>

      <a href="#reviews" onClick={() => setMenuOpen(false)}>
        التقييمات
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)}>
        من نحن
      </a>

      <a
        href="https://wa.me/966552525141"
        target="_blank"
        className="bg-orange-500 text-white rounded-2xl py-4 text-center mt-2"
      >
        واتساب
      </a>
    </div>
  )}
</motion.header>

  {/* Content */}
  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] w-[92%] max-w-7xl items-center pb-16 pt-36 md:pb-64 md:pt-44">
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
className="mr-0 ml-auto w-full max-w-2xl text-center md:text-right"
    >
      <h1 className="text-5xl font-black leading-tight md:text-7xl">
        <span className="block text-orange-500">رحلتنا</span>
        <span className="block text-[#101b32]">
          لاستخراج التأشيرات
        </span>
      </h1>

      <p className="mt-6 text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
        بوابتك لاستخراج التأشيرات السياحية والدراسية
        <br />
        بأسرع وأسهل طريقة
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
        {[
          ["إجراءات احترافية", Award],
          ["دعم متخصص 24/7", Headphones],
          ["نسبة نجاح مرتفعة", ShieldCheck],
        ].map(([text, Icon]: any) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-2xl border border-orange-200/70 bg-white/50 px-5 py-3 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-xl"
          >
            <Icon className="text-orange-500" size={22} />
            {text}
          </div>
        ))}
      </div>

      <div className="mt-9">
        <a
          href="#contact"
          className="inline-block rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 px-16 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105"
        >
          ابدأ طلبك الآن
        </a>
      </div>
    </motion.div>
  </div>

  {/* Floating Stats */}
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
className="
relative md:absolute
-mt-20 md:mt-0
bottom-auto md:bottom-28
left-auto md:left-1/2
z-20
w-[92%] max-w-7xl
mx-auto md:-translate-x-1/2
rounded-t-[30px]
border border-white/60
bg-white/90
px-6 md:px-8
py-8
shadow-2xl shadow-black/15
backdrop-blur-2xl
"  >
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-x-reverse md:divide-slate-200">
      {[
        { icon: ShieldCheck, value: "99%", label: "نسبة نجاح عالية" },
        { icon: Headphones, value: "24/7", label: "دعم متخصص" },
        { icon: FileText, value: "1200+", label: "طلب مكتمل بنجاح" },
        { icon: Users, value: "40+", label: "وجهة متاحة" },
      ].map((item) => (
        <div key={item.value} className="flex items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg">
            <item.icon size={30} />
          </div>

          <div>
            <div className="text-2xl font-black md:text-4xl">
              {item.value}
            </div>
            <div className="text-xs md:text-sm text-slate-700">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>

  {/* Bottom Trust Bar */}
  <div className="
relative md:absolute
bottom-auto md:bottom-6
left-auto md:left-1/2
z-20
w-[92%] max-w-7xl
mx-auto md:-translate-x-1/2
rounded-b-[30px]
bg-[#0d1b3d]
px-6 py-8
text-white
shadow-2xl
">
    <div className="grid gap-5 text-center text-base font-semibold md:grid-cols-3 md:text-lg">
      {[
        ["خبرة في مجال التأشيرات", Award],
        ["خدمات لوجهات متعددة", Globe2],
        ["نضمن لك تجربة واضحة", ShieldCheck],
      ].map(([text, Icon]: any) => (
        <div key={text} className="flex items-center justify-center gap-3 text-white/90">
          <Icon className="text-white/45" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Countries */}
<section
  id="countries"
  dir="rtl"
  className="relative px-5 md:px-8 pt-10 pb-24 overflow-hidden bg-white"
>

  {/* Background Effects */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-[-120px] w-[420px] h-[420px] bg-orange-200/25 blur-3xl rounded-full" />
    
    <div className="absolute bottom-0 left-[-120px] w-[420px] h-[420px] bg-blue-200/20 blur-3xl rounded-full" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,130,0,0.08),transparent_45%)]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-100 bg-white shadow-sm text-orange-500 font-bold mb-5">
        <span>✈️</span>
        وجهاتنا الأكثر طلبًا
      </div>

      <h3 className="text-4xl md:text-6xl font-black mb-5 text-[#101b32]">
        التأشيرات <span className="text-orange-500">الأكثر طلبًا</span>
      </h3>

      <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-8">
        اختر وجهتك، وفريق رحلتنا يتولى تجهيز ملفك ومتابعة طلبك خطوة بخطوة.
      </p>

    </div>

    {/* Desktop Cards */}
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

      {[
          {
          href: "/schengen",
          flag: "🇪🇺",
          title: "شنغن",
          desc: "استخراج تأشيرات الشنغن لجميع الدول الأوروبية",
          image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/uk",
          flag: "🇬🇧",
          title: "بريطانيا",
          desc: "تأشيرات سياحية ودراسية مع تجهيز كامل للملف",
          image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/usa",
          flag: "🇺🇸",
          title: "أمريكا",
          desc: "مساعدتك في تعبئة النماذج وحجز المواعيد",
          image:
            "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/uae",
          flag: "🇦🇪",
          title: "الإمارات",
          desc: "تأشيرة إلكترونية لمقيمي دول الخليج",
          image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/canada",
          flag: "🇨🇦",
          title: "كندا",
          desc: "خدمات التأشيرات السياحية والدراسية لكندا",
          image:
            "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/australia",
          flag: "🇦🇺",
          title: "أستراليا",
          desc: "تأشيرات سياحية ودراسية إلكترونية",
          image:
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
        },
      ].map((country) => (
        <a
          key={country.title}
          href={country.href}
          className="group relative overflow-hidden rounded-[34px] bg-white border border-orange-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center"
        >
          <div className="relative h-44 overflow-hidden rounded-b-[46px]">
            <img
              src={country.image}
              alt={country.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl">
              {country.flag}
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-2xl font-black text-[#101b32] mb-3">
              {country.title}
            </h4>

            <p className="text-gray-500 text-sm leading-7 min-h-[56px]">
              {country.desc}
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-orange-500 font-bold">
              <span>ابدأ الطلب الآن</span>
              <span className="h-8 w-8 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center">
                ←
              </span>
            </div>
          </div>
        </a>
      ))}

    </div>

    {/* Mobile Cards */}
    <div className="md:hidden space-y-4">

      {[
          {
          href: "/schengen",
          flag: "🇪🇺",
          title: "شنغن",
          desc: "استخراج تأشيرات الشنغن لجميع الدول الأوروبية",
          image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/uk",
          flag: "🇬🇧",
          title: "بريطانيا",
          desc: "تأشيرات سياحية ودراسية مع تجهيز كامل للملف",
          image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/usa",
          flag: "🇺🇸",
          title: "أمريكا",
          desc: "مساعدتك في تعبئة النماذج وحجز المواعيد",
          image:
            "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/canada",
          flag: "🇨🇦",
          title: "كندا",
          desc: "خدمات التأشيرات السياحية والدراسية لكندا",
          image:
            "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/uae",
          flag: "🇦🇪",
          title: "الإمارات",
          desc: "تأشيرة إلكترونية لمقيمي دول الخليج",
          image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
        },
        {
          href: "/australia",
          flag: "🇦🇺",
          title: "أستراليا",
          desc: "تأشيرات سياحية ودراسية إلكترونية",
          image:
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
        },
      ].map((country) => (
        <a
          key={country.title}
          href={country.href}
          className="group flex items-center justify-between rounded-[28px] bg-white border border-orange-100 shadow-lg overflow-hidden active:scale-[0.98] transition"
        >
          <div className="flex-1 p-5 text-right">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-xl font-black text-[#101b32]">
                {country.title}
              </h4>
              <span className="text-orange-500 text-sm">✹</span>
            </div>

            <p className="text-gray-500 text-sm leading-6">
              {country.desc}
            </p>
          </div>

          <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-r-[28px]">
            <img
              src={country.image}
              alt={country.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-2xl">
              {country.flag}
            </div>
          </div>

          <div className="pr-4 pl-2">
            <span className="h-11 w-11 rounded-full border border-orange-100 bg-orange-50 text-orange-500 flex items-center justify-center text-2xl">
              ←
            </span>
          </div>
        </a>
      ))}

    </div>

  </div>
</section>
 
{/* Why Us */}
<section
  id="about"
  dir="rtl"
  className="relative overflow-hidden px-5 md:px-8 py-24 bg-white"
>
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="/why-bg.png"
      alt="لماذا تختار رحلتنا"
      className="w-full h-full object-cover opacity-90"
    />
    <div className="absolute inset-0 bg-white/35" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      

      <h2 className="text-4xl md:text-6xl font-black text-[#101b32] mb-5">
        لماذا تختار <span className="text-orange-500">رحلتنا؟</span>
      </h2>

      <p className="text-gray-500 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
        نجمع بين الخبرة والاحترافية لنقدم لك تجربة استخراج تأشيرة سهلة وآمنة وموثوقة من البداية حتى استلام التأشيرة.
      </p>

      <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
    </div>

    {/* Desktop */}
    <div className="hidden md:grid grid-cols-3 gap-10 text-center">

      {[
  {
    title: "سرعة الإنجاز",
    text: "نساعدك في تجهيز طلبك بأسرع وقت مع متابعة مستمرة لحالة طلبك.",
    icon: Zap,
  },
  {
    title: "متابعة كاملة",
    text: "نتابع معك جميع خطوات التقديم حتى إصدار التأشيرة.",
    icon: ClipboardCheck,
  },
  {
    title: "دعم عبر واتساب",
    text: "تواصل مباشر وسريع للإجابة على جميع استفساراتك في أي وقت.",
    icon: Headphones,
  },
].map((item) => {
  const Icon = item.icon;

  return (
    <div key={item.title} className="relative px-8">

      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl border border-orange-100">
        <Icon size={48} className="text-orange-500" />
      </div>

      <h3 className="text-2xl font-black text-[#101b32] mb-4">
        {item.title}
      </h3>

      <p className="text-gray-500 leading-8">
        {item.text}
      </p>
    </div>
  );
})}

    </div>

   {/* Mobile */}
<div className="md:hidden relative mt-10 space-y-10">
  <div className="absolute top-6 bottom-6 right-[58px] w-px bg-orange-200" />

  {[
    {
      title: "سرعة الإنجاز",
      text: "نساعدك في تجهيز طلبك بأسرع وقت مع متابعة مستمرة لحالة طلبك.",
      icon: Zap,
    },
    {
      title: "متابعة كاملة",
      text: "نتابع معك جميع خطوات التقديم حتى إصدار التأشيرة.",
      icon: ClipboardCheck,
    },
    {
      title: "دعم عبر واتساب",
      text: "تواصل مباشر وسريع للإجابة على جميع استفساراتك في أي وقت.",
      icon: Headphones,
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <div key={item.title} className="relative flex items-center gap-5">
        <div className="z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white shadow-xl border border-orange-100">
          <Icon size={42} className="text-orange-500" />
        </div>

        <div className="text-right">
          <h3 className="text-xl font-black text-[#101b32] mb-2">
            {item.title}
          </h3>

          <p className="text-gray-500 text-sm leading-7">
            {item.text}
          </p>
        </div>
      </div>
    );
  })}
</div>


  </div>
</section>
{/* Steps */}
<section
  id="steps"
  dir="rtl"
  className="relative overflow-hidden px-5 md:px-8 py-24 bg-white"
>
  {/* Background */}
  <div className="absolute inset-0">
    <img
src="/why-clean-bg.png"
      alt="خطوات استخراج التأشيرة"
      className="w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-white/45" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-6xl font-black text-[#101b32] mb-5">
        خطوات استخراج التأشيرة
      </h2>

      <p className="text-gray-500 text-lg md:text-xl leading-9">
        عملية سهلة وبسيطة في أربع خطوات لإنجاز طلب التأشيرة بنجاح
      </p>

      <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
    </div>

  <div className="grid gap-8 md:grid-cols-4">
  {[
    {
      number: "1",
      title: "تواصل معنا",
      text: "نحدد نوع التأشيرة المناسبة لك ونجيب على جميع استفساراتك.",
      icon: Headphones,
    },
    {
      number: "2",
      title: "تجهيز المتطلبات",
      text: "نراجع المستندات ونتأكد من جاهزية ملفك بالكامل.",
      icon: ClipboardCheck,
    },
    {
      number: "3",
      title: "تقديم الطلب",
      text: "نساعدك في تعبئة النماذج وحجز الموعد المناسب.",
      icon: FileText,
    },
    {
      number: "4",
      title: "متابعة التأشيرة",
      text: "نتابع حالة الطلب معك حتى صدور القرار النهائي.",
      icon: BadgeCheck,
    },
  ].map((step) => {
    const Icon = step.icon;

    return (
      <div
        key={step.number}
        className="group relative overflow-hidden rounded-[34px] border border-orange-100 bg-white/80 px-7 pt-16 pb-10 text-center shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      >
        {/* Number */}
        <div className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-lg font-black text-white shadow-lg">
          {step.number}
        </div>

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-orange-100 bg-gradient-to-b from-white to-orange-50 shadow-lg transition duration-500 group-hover:scale-110">
          <Icon
            size={50}
            className="text-orange-500"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-black text-[#101b32]">
          {step.title}
        </h3>

        {/* Text */}
        <p className="leading-8 text-gray-500">
          {step.text}
        </p>

        {/* Bottom Line */}
        <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24" />

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-t from-orange-50/40 to-transparent pointer-events-none" />
      </div>
    );
  })}
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
    absolute
    bottom-[-70px] right-[35%]
    md:bottom-auto md:right-[-24px] md:top-1/2 md:-translate-y-1/2
    z-20 bg-white/80 hover:bg-orange-500 hover:text-white
    border border-gray-100 w-12 h-12 rounded-full shadow-lg transition
  "
>
  ›
</button>

<button
  onClick={goNext}
  className="
    absolute
    bottom-[-70px] left-[35%]
    md:bottom-auto md:left-[-24px] md:top-1/2 md:-translate-y-1/2
    z-20 bg-white/80 hover:bg-orange-500 hover:text-white
    border border-gray-100 w-12 h-12 rounded-full shadow-lg transition
  "
>
  ‹
</button>

  </div>
</section>
{/* About */}
<section
  id="about"
  dir="rtl"
  className="relative px-5 md:px-8 py-24 overflow-hidden bg-white"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-[-120px] w-[420px] h-[420px] bg-orange-200/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-[-120px] w-[420px] h-[420px] bg-blue-200/15 blur-3xl rounded-full" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-6xl font-black text-[#101b32] mb-5">
        من نحن في <span className="text-orange-500">رحلتنا؟</span>
      </h2>

      <p className="text-gray-500 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
        نساعدك في استخراج التأشيرات السياحية والدراسية بطريقة واضحة، منظمة، ومتابعة مستمرة حتى اكتمال طلبك.
      </p>

      <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          label: "من نحن",
          title: "خبرة في خدمات التأشيرات",
          text: "فريق متخصص يساعدك في فهم المتطلبات وتجهيز ملفك حسب وجهتك.",
          icon: Globe2,
        },
        {
          label: "رسالتنا",
          title: "تجربة سهلة وواضحة",
          text: "نختصر عليك التعقيد ونرشدك خطوة بخطوة من البداية حتى التقديم.",
          icon: Rocket,
        },
        {
          label: "هدفنا",
          title: "ثقة ونتائج أفضل",
          text: "نركز على رفع جودة الطلب وتقليل الأخطاء قبل إرسال الملف.",
          icon: Target,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="group rounded-[34px] border border-orange-100 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-500">
                {item.label}
              </span>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-white to-orange-50 text-orange-500 shadow-md">
                <Icon size={32} strokeWidth={1.8} />
              </div>
            </div>

            <h3 className="mb-4 text-2xl font-black text-[#101b32]">
              {item.title}
            </h3>

            <p className="leading-8 text-gray-500">
              {item.text}
            </p>

            <div className="mt-7 h-1 w-12 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24" />
          </div>
        );
      })}
    </div>
  </div>
</section>
{/* FAQ */}
<section
  id="faq"
  dir="rtl"
  className="relative px-5 md:px-8 py-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-[-120px] w-[380px] h-[380px] bg-orange-100/30 blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-[-120px] w-[380px] h-[380px] bg-blue-100/20 blur-3xl rounded-full" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-5 py-2 text-sm font-bold text-orange-500 shadow-sm">
        ✈️ استفسارات العملاء
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#101b32]">
        الأسئلة <span className="text-orange-500">الشائعة</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-500 max-w-2xl mx-auto">
        كل ما تحتاج معرفته قبل البدء في استخراج التأشيرة.
      </p>

      <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
    </div>

    {/* FAQ Cards */}
    <div className="space-y-6">
      {[
        {
          q: "كم تستغرق مدة استخراج التأشيرة؟",
          a: "تختلف المدة حسب الدولة ونوع التأشيرة، ويتم توضيح المدة المتوقعة قبل بدء الطلب.",
        },
        {
          q: "هل تساعدون في تجهيز الملف؟",
          a: "نعم، نساعدك في مراجعة وتجهيز جميع المستندات المطلوبة للتقديم.",
        },
        {
          q: "هل يتم حجز المواعيد؟",
          a: "نعم، نوفر خدمة حجز المواعيد والتقديم على التأشيرات حسب المتطلبات.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group rounded-[30px] border border-orange-100 bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex items-start gap-5">
            
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-orange-500 to-orange-400 text-xl font-black text-white shadow-lg">
              ?
            </div>

            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black text-[#101b32] mb-3">
                {item.q}
              </h3>

              <p className="leading-8 text-gray-500 text-base md:text-lg">
                {item.a}
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Contact Form */}
<section
  id="contact"
  dir="rtl"
  className="relative px-5 md:px-8 py-24 overflow-hidden bg-white"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-[-120px] w-[420px] h-[420px] bg-orange-200/20 blur-3xl rounded-full" />
    <div className="absolute bottom-0 left-[-120px] w-[420px] h-[420px] bg-blue-200/15 blur-3xl rounded-full" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-5 py-2 text-sm font-bold text-orange-500 shadow-sm">
        🚀 ابدأ الآن
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#101b32]">
        ابدأ <span className="text-orange-500">طلبك الآن</span>
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-500 max-w-2xl mx-auto">
        املأ البيانات التالية وسيتم تحويلك للواتساب لإكمال طلب التأشيرة مع فريق رحلتنا.
      </p>

      <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-6" />
    </div>

    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-stretch">
      <div className="rounded-[34px] bg-[#101b32] order-2 lg:order-1 p-8 md:p-10 text-white shadow-2xl">
        <h3 className="text-3xl font-black mb-5">
          ماذا يحدث بعد الإرسال؟
        </h3>

        <div className="space-y-5">
          {[
            "نستقبل بياناتك مباشرة عبر الواتساب.",
            "نراجع نوع التأشيرة والوجهة المناسبة.",
            "نوضح لك المتطلبات والخطوات التالية.",
            "نبدأ معك تجهيز الطلب خطوة بخطوة.",
          ].map((item, index) => (
            <div key={item} className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-black">
                {index + 1}
              </span>
              <p className="leading-8 text-white/85">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[34px] border border-orange-100 order-1 lg:order-2 bg-white/85 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-orange-100 bg-orange-50/30 rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition duration-300"
          />

          <input
            type="text"
            placeholder="رقم الجوال"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-orange-100 bg-orange-50/30 rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition duration-300"
          />

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-orange-100 bg-orange-50/30 rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition duration-300"
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
            className="border border-orange-100 bg-orange-50/30 rounded-2xl p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition duration-300"
          >
            <option value="">نوع التأشيرة</option>
            <option>تأشيرة سياحية</option>
            <option>تأشيرة دراسية</option>
          </select>
        </div>

        <button
          onClick={sendToWhatsApp}
          className="w-full mt-8 bg-gradient-to-l from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-5 rounded-2xl text-lg font-black transition duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-orange-500/20"
        >
          إرسال الطلب عبر واتساب
        </button>

        <p className="text-center text-gray-500 text-sm mt-5">
          لن يتم إرسال أي طلب بدون مراجعتك للبيانات عبر الواتساب.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Footer */}
<footer className="bg-black text-white py-14 px-8">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-4">رحلتنا لإستخراج التأشيرات</h3>

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
    <div className="flex justify-center gap-6 mb-8 flex-wrap text-gray-300">

  <a
    href="/terms"
    className="hover:text-orange-400 transition"
  >
    الشروط والأحكام
  </a>

  <a
    href="/privacy"
    className="hover:text-orange-400 transition"
  >
    سياسة الخصوصية
  </a>

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