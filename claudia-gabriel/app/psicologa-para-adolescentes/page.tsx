import ServicoPagina, { metadataServico } from "@/components/ServicoPagina";

const slug = "psicologa-para-adolescentes";

export const metadata = metadataServico(slug);

export default function Page() {
  return <ServicoPagina slug={slug} />;
}
