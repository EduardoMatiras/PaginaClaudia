import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Buscadores e assistentes de IA liberados de forma explícita (AIO/GEO):
// isso permite que o site seja lido e citado em respostas do ChatGPT, Claude,
// Perplexity, Gemini e Copilot.
const robosDeIA = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: robosDeIA, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
