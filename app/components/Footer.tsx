export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#0d1529] text-white pt-20 pb-10 px-5 md:px-8"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-120px] h-[320px] w-[320px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-right">
          
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-5">
              رحلتنا للتأشيرات
            </h3>

            <p className="text-white/70 leading-8">
              خدمات التأشيرات السياحية والدراسية لجميع الوجهات العالمية بخطوات واضحة وتجهيز احترافي لملف التأشيرة.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-5 text-orange-400">
              معلومات التواصل
            </h4>

            <div className="space-y-4 text-white/70 leading-8">
              <p>📍 جدة - حي السلامة - طريق المدينة</p>
              <p>📞 0552525141</p>
              <p>🕒 يوميًا من 10 صباحًا حتى 10 مساءً</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-black mb-5 text-orange-400">
              روابط مهمة
            </h4>

            <div className="flex flex-col gap-4 text-white/70">
              <a
                href="/terms"
                className="transition hover:text-orange-400"
              >
                الشروط والأحكام
              </a>

              <a
                href="/privacy"
                className="transition hover:text-orange-400"
              >
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="mt-14 flex justify-center gap-4 flex-wrap">
          {[
            {
              name: "Instagram",
              href: "https://instagram.com/studyrace1",
            },
            {
              name: "TikTok",
              href: "https://tiktok.com/@studyrace1",
            },
            {
              name: "Snapchat",
              href: "https://snapchat.com/add/studyrace1",
            },
            {
              name: "X",
              href: "https://x.com/studyrace1",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white/80 backdrop-blur-xl transition hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/40">
            © 2026 جميع الحقوق محفوظة - رحلتنا للتأشيرات
          </p>
        </div>
      </div>
    </footer>
  );
}