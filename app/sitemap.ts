import { MetadataRoute } from "next";
import { sitemapVisaPages } from "./data/visas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visarace.net";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },

    ...sitemapVisaPages.map((visa) => ({
      url: `${baseUrl}/${visa.slug}`,
      lastModified: new Date(),
    })),
    ...sitemapVisaPages.map((visa) => ({
      url: `${baseUrl}/en/${visa.slug}`,
      lastModified: new Date(),
    })),

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: new Date(),
    },
  ];
}
