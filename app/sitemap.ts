import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wasatchsafetyih.com";

  return [
    "",
    "/services",
    "/industries",
    "/about",
    "/experience",
    "/capability",
    "/faq",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
