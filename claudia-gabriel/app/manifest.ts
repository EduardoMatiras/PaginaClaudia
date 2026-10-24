import type { MetadataRoute } from "next";
import { seo } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.tituloCurto,
    short_name: "Claudia Gabriel",
    description: seo.descricao,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1eb",
    theme_color: "#f6f1eb",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
