"use client";

type VisaWhatsAppCTAProps = {
  visaName: string;
  children: React.ReactNode;
};

export default function VisaWhatsAppCTA({
  visaName,
  children,
}: VisaWhatsAppCTAProps) {
  const sendToWhatsApp = () => {
    const message = `السلام عليكم، أود استخراج تأشيرة ${visaName}`;

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={sendToWhatsApp}
      className="w-full rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 py-5 text-lg font-black text-white shadow-xl shadow-orange-500/25 transition duration-300 hover:scale-[1.02] hover:from-orange-600 hover:to-orange-500"
    >
      {children}
    </button>
  );
}