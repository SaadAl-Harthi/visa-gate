type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsEventParams) => void;
  }
}

export function getPageAnalyticsParams() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_title: document.title,
  };
}

export function trackEvent(
  eventName: string,
  params: AnalyticsEventParams = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}
