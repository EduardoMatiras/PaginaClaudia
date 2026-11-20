import ServicoPagina, { metadataServico } from "@/components/ServicoPagina";

const slug = "terapia-online-mato-grosso";

export const metadata = metadataServico(slug);

export default function Page() {
  return <ServicoPagina slug={slug} />;
}
