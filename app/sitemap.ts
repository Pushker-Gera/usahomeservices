import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/services",
  "/about",
  "/careers",
  "/contact",
  "/faq",
  "/quote-request",
  "/privacy-policy",
  "/terms-of-service"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7
  }));
}
