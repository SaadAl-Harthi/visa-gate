"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  FileText,
  Globe2,
  Headphones,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { activeVisaPages, localizeVisaPages } from "../data/visas";
import { getPageAnalyticsParams, trackEvent } from "../lib/analytics";

const cardImages: Record<string, string> = {
  schengen:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  uk: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
  usa: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
  uae: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  canada:
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop",
  australia:
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&auto=format&fit=crop",
  "turkey-non-saudi":
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop",
  brazil:
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop",
  "new-zealand":
    "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=800&auto=format&fit=crop",
  ireland:
    "https://images.unsplash.com/photo-1763755688324-a2ea2e12efc4?q=80&w=800&auto=format&fit=crop",
  "south-africa":
    "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800&auto=format&fit=crop",
};

const visaCards = localizeVisaPages(activeVisaPages, "en").map((visa) => ({
  href: `/en/${visa.slug}`,
  slug: visa.slug,
  icon: visa.heroIcon,
  title: `${visa.title} ${visa.highlightedTitle}`.trim(),
  desc: visa.description,
  image:
    cardImages[visa.slug] ??
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
}));

export default function EnglishHomePageClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedVisa, setSelectedVisa] = useState("");
  const [visaType, setVisaType] = useState("");

  const sendToWhatsApp = () => {
    trackEvent("lead_form_submit", {
      selected_visa: selectedVisa,
      selected_visa_type: visaType,
      ...getPageAnalyticsParams(),
    });

    trackEvent("whatsapp_click", {
      button_location: "contact_form_submit",
      visa_name: selectedVisa,
      ...getPageAnalyticsParams(),
    });

    const message = `
New visa request

Name: ${name}
Phone: ${phone}
Selected visa: ${selectedVisa}
Visa type: ${visaType}
    `;

    window.open(
      `https://wa.me/966552525141?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white text-[#101b32]">
      <section className="relative min-h-screen overflow-hidden bg-[#f8efe3]">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt="VisaRace visa services"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07142c]/70 via-transparent to-transparent" />
        </div>

        <motion.header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="fixed left-1/2 top-3 z-50 w-[94%] max-w-7xl -translate-x-1/2 md:top-5"
        >
          <nav className="relative flex items-center justify-between rounded-[32px] border border-white/60 bg-white/90 px-5 py-4 shadow-2xl shadow-black/10 backdrop-blur-2xl md:px-12 md:py-5">
            <a href="/en" className="text-2xl font-black text-orange-500">
              VisaRace
            </a>

            <div className="hidden items-center gap-10 text-[17px] font-bold text-slate-800 lg:flex">
              {[
                ["Home", "#home"],
                ["Destinations", "#countries"],
                ["Start request", "#contact"],
                ["Reviews", "#reviews"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="transition duration-300 hover:text-orange-500"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher
                locale="en"
                className="rounded-2xl border border-orange-100 bg-white px-5 py-3 text-sm font-bold text-[#101b32] shadow-sm transition hover:text-orange-500"
              />

              <a
                href="https://wa.me/966552525141"
                target="_blank"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    button_location: "hero_cta",
                    ...getPageAnalyticsParams(),
                  })
                }
                className="hidden items-center gap-2 rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105 md:flex"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </nav>
        </motion.header>

        <div
          id="home"
          className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] w-[92%] max-w-7xl items-center pb-16 pt-36 md:pb-64 md:pt-44"
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl text-center md:text-left"
          >
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              <span className="block text-orange-500">VisaRace</span>
              <span className="block text-[#101b32]">
                Visa services made clear
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium leading-relaxed text-slate-800 md:text-2xl">
              Tourist and study visa support with professional file preparation,
              appointment guidance, and WhatsApp follow-up.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              {[
                ["Professional process", Award],
                ["Specialized support", Headphones],
                ["High success focus", ShieldCheck],
              ].map(([text, Icon]: any) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-orange-200/70 bg-white/30 px-5 py-3 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-xl"
                >
                  <Icon className="text-orange-500" size={22} />
                  {text}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-block rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 px-14 py-5 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105"
            >
              Start your request
            </a>
          </motion.div>
        </div>

        <div className="relative z-20 mx-auto -mt-20 w-[92%] max-w-7xl rounded-t-[30px] border border-white/60 bg-white/90 px-6 py-8 shadow-2xl shadow-black/15 backdrop-blur-2xl md:absolute md:bottom-28 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-slate-200">
            {[
              { icon: Globe2, value: "+40", label: "Available destinations" },
              { icon: FileText, value: "+1200", label: "Completed requests" },
              { icon: Award, value: "Strong", label: "Visa experience" },
              { icon: BadgeCheck, value: "Follow-up", label: "Until delivery" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg">
                  <item.icon size={30} />
                </div>
                <div>
                  <div className="text-2xl font-black md:text-4xl">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-700 md:text-sm">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="countries" className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black md:text-5xl">
              Visa <span className="text-orange-500">Destinations</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
              Choose your destination and review requirements, notes, pricing,
              and FAQs in one place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visaCards.map((visa) => (
              <a
                key={visa.slug}
                href={visa.href}
                onClick={() =>
                  trackEvent("visa_card_click", {
                    visa_slug: visa.slug,
                    visa_name: visa.title,
                    ...getPageAnalyticsParams(),
                  })
                }
                className="group flex min-h-[420px] flex-col overflow-hidden rounded-[30px] border border-orange-100 bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={visa.image}
                    alt={visa.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101b32]/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-5xl">
                    {visa.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-black">{visa.title}</h3>
                  <p className="mt-3 flex-1 leading-8 text-gray-500">
                    {visa.desc}
                  </p>
                  <span className="mt-6 rounded-2xl bg-orange-50 px-5 py-3 text-center font-bold text-orange-600">
                    Start request now
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-orange-50/35 px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Document review",
              text: "We help you prepare and review the required documents before submission.",
            },
            {
              title: "Clear process",
              text: "You see the requirements, notes, pricing, and expected processing time upfront.",
            },
            {
              title: "Dedicated follow-up",
              text: "Our team follows up with you through WhatsApp from request to delivery.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-orange-100 bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-8 text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-black">
            How it <span className="text-orange-500">works</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Choose your visa",
              "Send your details",
              "Prepare the file",
              "Follow up until completion",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-orange-100 bg-white p-7 text-center shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white">
                  {index + 1}
                </div>
                <h3 className="font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#101b32] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">
            Client <span className="text-orange-400">feedback</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Professional handling and quick responses throughout the process.",
              "The requirements were clear and the file was prepared smoothly.",
              "Excellent follow-up through WhatsApp from start to finish.",
            ].map((review) => (
              <div
                key={review}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 leading-8 text-white/80"
              >
                {review}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-black">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="space-y-5">
            {[
              [
                "Is visa approval guaranteed?",
                "No. Final approval always belongs to the embassy or competent authority.",
              ],
              [
                "Can I apply through WhatsApp?",
                "Yes. You can submit your initial request through the form and continue with our team on WhatsApp.",
              ],
              [
                "Are embassy fees included?",
                "It depends on the visa. Any separate embassy, center, courier, or government fees are clarified before starting.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-lg"
              >
                <h3 className="text-xl font-black">{question}</h3>
                <p className="mt-3 leading-8 text-gray-500">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-orange-50/35 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[34px] border border-orange-100 bg-white p-7 shadow-2xl md:p-10">
          <h2 className="mb-8 text-center text-4xl font-black">
            Start your <span className="text-orange-500">request</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full name"
              className="rounded-2xl border border-orange-100 p-4 outline-none focus:border-orange-500"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              className="rounded-2xl border border-orange-100 p-4 outline-none focus:border-orange-500"
            />
            <select
              value={selectedVisa}
              onChange={(event) => setSelectedVisa(event.target.value)}
              className="rounded-2xl border border-orange-100 p-4 outline-none focus:border-orange-500"
            >
              <option value="">Choose visa</option>
              {visaCards.map((visa) => (
                <option key={visa.slug} value={visa.title}>
                  {visa.title}
                </option>
              ))}
            </select>
            <select
              value={visaType}
              onChange={(event) => setVisaType(event.target.value)}
              className="rounded-2xl border border-orange-100 p-4 outline-none focus:border-orange-500"
            >
              <option value="">Visa type</option>
              <option value="Tourist">Tourist</option>
              <option value="Study">Study</option>
            </select>
          </div>
          <button
            onClick={sendToWhatsApp}
            className="mt-7 w-full rounded-2xl bg-gradient-to-l from-orange-500 to-orange-400 py-5 text-lg font-black text-white shadow-xl shadow-orange-500/25 transition hover:scale-[1.01]"
          >
            Send request via WhatsApp
          </button>
        </div>
      </section>
    </main>
  );
}
