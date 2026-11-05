import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.ENABLE_PRODUCTION_INDEXING === "true" &&
    (process.env.VERCEL_ENV === "production" ||
     process.env.NEXT_PUBLIC_APP_ENV === "production");

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/management-review", "/api/", "/secure_uploads/"],
    },
    sitemap: "https://vibrusgroup.com/sitemap.xml",
  };
}
