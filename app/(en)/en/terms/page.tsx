import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | VisaRace",
  description:
    "Read the VisaRace terms and conditions for visa support, preparation, submission assistance, fees, processing times, and refunds.",
  alternates: {
    canonical: "/en/terms",
    languages: {
      "ar-SA": "/terms",
      en: "/en/terms",
    },
  },
  openGraph: {
    title: "Terms and Conditions | VisaRace",
    description:
      "VisaRace terms for visa support, document preparation, and application follow-up services.",
    url: "/en/terms",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | VisaRace",
    description:
      "VisaRace terms for visa support and application follow-up services.",
  },
};

export default function EnglishTermsPage() {
  const items = [
    {
      title: "Service definition",
      text: "VisaRace provides support, preparation, submission assistance, and application follow-up services for visas through embassies and approved visa centers. By using the website or submitting a visa request, you agree to these terms and conditions.",
    },
    {
      title: "Website use",
      text: "Users agree to provide accurate and complete information when using the website or submitting a visa request. The user is fully responsible for the accuracy of all provided information and documents.",
    },
    {
      title: "Service fees",
      text: "Fees shown on the website relate to preparation, follow-up, and submission support unless clearly stated otherwise. Additional fees may apply, including embassy fees, visa center fees, biometric fees, courier fees, or government fees. Required fees are clarified before procedures begin.",
    },
    {
      title: "Processing time",
      text: "All processing times shown on the website are estimates based on information available from relevant authorities at the time of publication. Processing may vary due to embassy workload, seasons, holidays, additional document requests, or administrative procedures.",
    },
    {
      title: "Cancellation and refunds",
      text: "A client may request cancellation before work begins. After work starts, the application is submitted, or government fees are paid, the client may not be entitled to a full or partial refund depending on the application stage. Each case is reviewed separately.",
    },
    {
      title: "Travel bookings and visas",
      text: "VisaRace recommends not purchasing non-refundable flight tickets or hotel bookings before the visa is issued. VisaRace is not responsible for losses caused by travel bookings made before a visa decision.",
    },
    {
      title: "Disclaimer",
      text: "VisaRace is not an embassy, consulate, or government authority and does not issue or reject visas. The final decision belongs only to the embassy or competent authority. VisaRace does not guarantee approval for any visa application.",
    },
    {
      title: "Information updates",
      text: "Requirements, fees, processing times, and website content may be updated without prior notice according to updates from embassies and relevant authorities.",
    },
    {
      title: "Privacy",
      text: "Collection and use of personal data are governed by the website Privacy Policy.",
    },
    {
      title: "Contact",
      text: "For service or application inquiries, users may contact VisaRace through the official communication channels shown on the website.",
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
            Terms <span className="text-orange-500">and Conditions</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-500 md:text-2xl">
            Please read these terms carefully before using VisaRace services.
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
