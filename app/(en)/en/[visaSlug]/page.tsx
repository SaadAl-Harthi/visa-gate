import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import VisaPageTemplate from "../../../components/VisaPageTemplate";
import { getVisaPageBySlug, publicVisaPages } from "../../../data/visas";

type EnglishVisaPageProps = {
  params: Promise<{
    visaSlug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publicVisaPages.map((visa) => ({
    visaSlug: visa.slug,
  }));
}

export async function generateMetadata({
  params,
}: EnglishVisaPageProps): Promise<Metadata> {
  const { visaSlug } = await params;
  const visa = getVisaPageBySlug(visaSlug, "en");

  if (!visa) {
    return {};
  }

  return {
    title: visa.seo.title,
    description: visa.seo.description,
    alternates: {
      canonical: `/en/${visa.slug}`,
      languages: {
        "ar-SA": `/${visa.slug}`,
        en: `/en/${visa.slug}`,
      },
    },
    openGraph: {
      title: visa.seo.openGraphTitle,
      description: visa.seo.openGraphDescription,
      url: `/en/${visa.slug}`,
      images: [visa.seo.image],
      locale: "en_US",
      type: "website",
    },
    twitter: visa.seo.twitterTitle
      ? {
          card: "summary_large_image",
          title: visa.seo.twitterTitle,
          description: visa.seo.twitterDescription ?? visa.seo.description,
          images: [visa.seo.image],
        }
      : undefined,
  };
}

export default async function EnglishVisaPage({ params }: EnglishVisaPageProps) {
  const { visaSlug } = await params;
  const visa = getVisaPageBySlug(visaSlug, "en");

  if (!visa) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visa.variants[0].faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <VisaPageTemplate data={visa} locale="en" />
    </>
  );
}
