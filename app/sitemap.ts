import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_APP_ENV === "production";

  // During staging/preview, prevent generating production URLs
  if (!isProduction) {
    return [];
  }

  const baseUrl = "https://vibrusgroup.com";
  const now = new Date();

  const publicRoutes: {
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/employers", priority: 0.9, changeFrequency: "daily" },
    { path: "/apply", priority: 0.9, changeFrequency: "daily" },
    { path: "/careers", priority: 0.85, changeFrequency: "daily" },
    { path: "/careers/healthcare", priority: 0.8, changeFrequency: "weekly" },
    { path: "/careers/general", priority: 0.8, changeFrequency: "weekly" },
    { path: "/divisions", priority: 0.85, changeFrequency: "weekly" },
    { path: "/divisions/healthcare", priority: 0.85, changeFrequency: "weekly" },
    { path: "/divisions/industrial", priority: 0.85, changeFrequency: "weekly" },
    { path: "/divisions/office", priority: 0.75, changeFrequency: "monthly" },
    { path: "/divisions/professional", priority: 0.75, changeFrequency: "monthly" },
    { path: "/divisions/info-tech", priority: 0.75, changeFrequency: "monthly" },
    { path: "/divisions/hospitality", priority: 0.75, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/coverage", priority: 0.8, changeFrequency: "monthly" },
    { path: "/compliance", priority: 0.75, changeFrequency: "monthly" },
    { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
