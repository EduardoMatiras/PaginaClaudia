import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";
import { servicos } from "@/lib/servicos";

export default function sitemap(): MetadataRoute.Sitemap {
  const ultimoPost = posts
    .map((p) => p.atualizadoEm ?? p.publicadoEm)
    .sort()
    .at(-1);

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
    ...servicos.map((s) => ({
      url: `${site.url}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${site.url}/blog`,
      lastModified: ultimoPost ? new Date(ultimoPost) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.atualizadoEm ?? p.publicadoEm),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
