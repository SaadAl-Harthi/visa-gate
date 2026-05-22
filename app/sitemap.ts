import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visa-gate.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/schengen`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/usa`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/canada`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/uk`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/uae`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/australia`,
      lastModified: new Date(),
    },

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