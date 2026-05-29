import { MetadataRoute } from "next";
import { sitemapVisaPages } from "./data/visas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visa-gate.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...sitemapVisaPages.map((visa) => ({
      url: `${baseUrl}/${visa.slug}`,
      lastModified: new Date(),
    })),

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
  ];
}
