import {
  FaInstagram,
  FaTiktok,
  FaSnapchat,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type FooterProps = {
  locale?: "ar" | "en";
};

const footerText = {
  ar: {
    brand: "رحلتنا للتأشيرات",
    description:
      "خدمات التأشيرات السياحية والدراسية لجميع الوجهات العالمية بخطوات واضحة وتجهيز احترافي لملف التأشيرة.",
    contactTitle: "معلومات التواصل",
    address: "📍 جدة - حي السلامة - طريق المدينة",
    phone: "📞 0552525141",
    hours: "🕒 يوميًا من 10 صباحًا حتى 10 مساءً",
    linksTitle: "روابط مهمة",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    businessTitle: "معلومات المنشأة",
    cr: "السجل التجاري",
    license: "رقم الرخصة",
    tax: "الرقم الضريبي",
    rights: "© 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات",
    termsHref: "/terms",
    privacyHref: "/privacy",
  },
  en: {
    brand: "VisaRace",
    description:
      "Tourist and study visa services for global destinations with clear steps and professional file preparation.",
    contactTitle: "Contact information",
    address: "📍 Jeddah - Al Salamah District - Madinah Road",
    phone: "📞 0552525141",
    hours: "🕒 Daily from 10 AM to 10 PM",
    linksTitle: "Important links",
    terms: "Terms and Conditions",
    privacy: "Privacy Policy",
    businessTitle: "Business information",
    cr: "Commercial Registration",
    license: "License Number",
    tax: "Tax Number",
    rights: "© 2026 All rights reserved - VisaRace",
    termsHref: "/en/terms",
    privacyHref: "/en/privacy",
  },
};

export default function Footer({ locale = "ar" }: FooterProps) {
  const text = footerText[locale];

  return (
    <footer
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#0d1529] text-white pt-20 pb-10 px-5 md:px-8"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Top */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-5">
              {text.brand}
            </h3>

            <p className="text-white/70 leading-8">
              {text.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-5 text-orange-400">
              {text.contactTitle}
            </h4>

            <div className="space-y-4 text-white/70 leading-8">
              <p>{text.address}</p>
              <p>{text.phone}</p>
              <p>{text.hours}</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-black mb-5 text-orange-400">
              {text.linksTitle}
            </h4>

            <div className="flex flex-col gap-4 text-white/70">
              <a
                href={text.termsHref}
                className="transition hover:text-orange-400"
              >
                {text.terms}
              </a>

              <a
                href={text.privacyHref}
                className="transition hover:text-orange-400"
              >
                {text.privacy}
              </a>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-xl font-black mb-5 text-orange-400">
              {text.businessTitle}
            </h4>

            <div className="space-y-4 text-white/70 leading-8">
              <p>
                ✓ {text.cr}:{" "}
                <span dir="ltr" className="inline-block font-semibold text-white/85">
                  4030228793
                </span>
              </p>
              <p>
                ✓ {text.license}:{" "}
                <span dir="ltr" className="inline-block font-semibold text-white/85">
                  73104015
                </span>
              </p>
              <p>
                ✓ {text.tax}:{" "}
                <span dir="ltr" className="inline-block font-semibold text-white/85">
                  30201661700003
                </span>
              </p>
            </div>
          </div>
        </div>

     {/* Social */}
<div className="mt-14 flex justify-center gap-4 flex-wrap">
  {[
    {
      name: "Instagram",
      href: "https://instagram.com/studyrace1",
      icon: <FaInstagram size={22} />,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@studyrace1",
      icon: <FaTiktok size={22} />,
    },
    {
      name: "Snapchat",
      href: "https://snapchat.com/add/studyrace1",
      icon: <  FaSnapchat size={22} />,
    },
    {
      name: "X",
      href: "https://x.com/studyrace1",
      icon: <FaXTwitter size={22} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedinIn size={22} />,
    },
  ].map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
    >
      {social.icon}
    </a>
  ))}
</div>
        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/40">
            {text.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
