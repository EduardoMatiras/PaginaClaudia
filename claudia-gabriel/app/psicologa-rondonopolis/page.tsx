import ServicoPagina, { metadataServico } from "@/components/ServicoPagina";

const slug = "psicologa-rondonopolis";

export const metadata = metadataServico(slug);

export default function Page() {
  return <ServicoPagina slug={slug} />;
}
