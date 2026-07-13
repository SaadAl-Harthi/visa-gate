import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VisaRace",
  description:
    "Learn how VisaRace collects, uses, shares, protects, and retains personal data for visa services.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      "ar-SA": "/privacy",
      en: "/en/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy | VisaRace",
    description:
      "How VisaRace handles personal data for visa services and client communication.",
    url: "/en/privacy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | VisaRace",
    description: "How VisaRace handles personal data for visa services.",
  },
};

export default function EnglishPrivacyPage() {
  const items = [
    {
      title: "Introduction",
      text: "VisaRace respects user privacy and is committed to protecting personal data collected while using the website or benefiting from visa services. By using the website or submitting a visa request, you agree to this Privacy Policy.",
    },
    {
      title: "Data we collect",
      text: "We may collect information such as full name, phone number, email address, passport details, national ID or residence permit details, national address, visa documents, and any additional information submitted with the request.",
    },
    {
      title: "How we use data",
      text: "Data is used to provide visa services, review documents, communicate with clients, submit applications to embassies or competent authorities, improve service quality, and comply with legal requirements.",
    },
    {
      title: "Data sharing",
      text: "Data may be shared when needed with embassies, consulates, approved visa centers, courier companies, competent government authorities, and service providers related to visa procedures. Personal data is not sold or rented for marketing purposes.",
    },
    {
      title: "Data protection",
      text: "VisaRace takes reasonable and appropriate measures to protect personal data from unauthorized access, use, disclosure, alteration, or destruction. However, complete security cannot be guaranteed for any electronic transfer or storage.",
    },
    {
      title: "Data retention",
      text: "Data and documents may be retained for the period required to provide the service, comply with regulatory requirements, resolve disputes, or protect legal rights.",
    },
    {
      title: "Cookies",
      text: "The website may use cookies and similar technologies to improve user experience, analyze performance, and develop services. Users can control cookie settings through their browser.",
    },
    {
      title: "Communication",
      text: "When submitting a request through the website or contact form, users agree that VisaRace may contact them about their request by phone, WhatsApp, or email.",
    },
    {
      title: "External links",
      text: "The website may contain links to external websites or services. VisaRace is not responsible for the privacy policies or content of external websites.",
    },
    {
      title: "Policy updates",
      text: "This Privacy Policy may be updated from time to time according to regulatory or operational requirements. Continued use of the website means acceptance of the updated policy.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <section className="relative overflow-hidden bg-white px-5 pb-20 pt-24 text-center md:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-120px] top-0 h-[420px] w-[420px] rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/10 blur-3xl" />
        </div>

        <a
          href="/en"
          className="absolute left-5 top-6 z-20 inline-flex items-center gap-3 rounded-full border border-orange-100 bg-white/80 px-5 py-3 text-sm font-bold text-[#101b32] shadow-xl backdrop-blur-xl transition hover:text-orange-500 md:left-8 md:px-7 md:py-4 md:text-base"
        >
          <span>←</span>
          Home
        </a>

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-black text-[#101b32] md:text-7xl">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            VisaRace is committed to protecting client privacy and handling data
            with care and professionalism.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-orange-100 bg-orange-50 px-5 py-3 text-sm font-bold text-orange-700">
            Last updated: May 31, 2026
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </main>
  );
}
