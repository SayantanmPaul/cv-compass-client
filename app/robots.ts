import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "*",
      disallow: ["/api/*, /admin/*"],
    },
    sitemap: "https://cvcompass.sayantanpaul.com/sitemap.xml",
  };
}
