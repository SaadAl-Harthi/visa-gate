"use client";

import { getPageAnalyticsParams, trackEvent } from "../lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966552525141"
      target="_blank"
      onClick={() =>
        trackEvent("whatsapp_click", {
          button_location: "floating_whatsapp",
          ...getPageAnalyticsParams(),
        })
      }
      className="group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-400 shadow-2xl shadow-green-500/30 transition duration-300 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-8 w-8"
      >
        <path d="M19.11 17.29c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.18 5.05 4.46.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.97-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35z"/>
        <path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.8 0 2.26.59 4.46 1.71 6.39L3 29l6.81-1.78c1.87 1.02 3.98 1.56 6.2 1.56h.01c7.06 0 12.79-5.73 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05-2.42-2.42-5.63-3.75-9.05-3.75zm0 23.24h-.01c-1.92 0-3.8-.52-5.43-1.5l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.43 10.43 0 01-1.61-5.56c0-5.76 4.69-10.45 10.46-10.45 2.79 0 5.41 1.09 7.38 3.06 1.97 1.97 3.06 4.59 3.06 7.38-.01 5.76-4.7 10.45-10.45 10.45z"/>
      </svg>

      <span className="absolute right-20 whitespace-nowrap rounded-full bg-[#101b32] px-4 py-2 text-sm font-bold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
        تواصل واتساب
      </span>
    </a>
  );
}
