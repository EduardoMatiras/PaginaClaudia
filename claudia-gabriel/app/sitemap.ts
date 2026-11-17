import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.url}/opengraph-image.jpg`,
        `${site.url}/claudia-principal.webp`,
        `${site.url}/claudia-sobre-1.webp`,
        `${site.url}/claudia-sobre-2.webp`,
      ],
    },
  ];
}
