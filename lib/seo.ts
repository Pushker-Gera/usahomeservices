import type { Metadata } from "next";
import { brandName, email, jobs, serviceOptions } from "./data";

export const siteUrl = "https://usahomeservices.in";
export const ogImage = "/og-image.png";

export const defaultKeywords = [
  "usahomeservices",
  "home services Indianapolis",
  "emergency plumbing Indianapolis",
  "roofing services Indianapolis",
  "HVAC cooling Indianapolis",
  "locksmith services Indianapolis",
  "electrical emergency Indianapolis",
  "home maintenance Indianapolis",
  "water heater repair",
  "appliance repair"
];

export const homepageDescription =
  "usahomeservices provides premium home repair, emergency response, HVAC, roofing, plumbing, locksmith, electrical, and maintenance services for homeowners in Indianapolis and surrounding areas.";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path = "/", keywords = [], noIndex = false }: PageMeta): Metadata {
  const url = new URL(path, siteUrl).toString();
  const image = new URL(ogImage, siteUrl).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      url,
      siteName: brandName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${brandName} premium home services`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brandName,
  url: siteUrl,
  email,
  logo: `${siteUrl}/icon.png`,
  sameAs: []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brandName,
  url: siteUrl
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: brandName,
  url: siteUrl,
  email,
  image: `${siteUrl}/og-image.png`,
  logo: `${siteUrl}/icon.png`,
  areaServed: {
    "@type": "Place",
    name: "Indianapolis Metropolitan Area"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indianapolis",
    addressRegion: "IN",
    addressCountry: "US"
  },
  makesOffer: serviceOptions.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service
    }
  }))
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Premium Home Services",
  provider: {
    "@type": "Organization",
    name: brandName,
    url: siteUrl
  },
  areaServed: "Indianapolis Metropolitan Area",
  serviceType: [
    "Emergency Plumbing",
    "Roofing Services",
    "HVAC & Cooling",
    "Locksmith Services",
    "Electrical Emergency",
    "Home Maintenance",
    "Water Heater Repair",
    "Appliance Repair"
  ]
};

export function faqSchema(items: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };
}

export const jobPostingSchema = {
  "@context": "https://schema.org",
  "@graph": jobs.map((job) => ({
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: brandName,
      sameAs: siteUrl
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "United States"
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        unitText: "HOUR",
        minValue: Number(job.rate.match(/\$(\d+)/)?.[1] || 10),
        maxValue: Number(job.rate.match(/\$(?:\d+)-\$(\d+)/)?.[1] || 45)
      }
    },
    workHours: job.hours,
    datePosted: "2026-06-30",
    validThrough: "2026-12-31"
  }))
};
