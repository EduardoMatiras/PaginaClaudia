import { site, whatsappLink } from "@/lib/site";
import { faq, seo } from "@/lib/seo";

// /llms.txt: resumo em Markdown para modelos de linguagem (padrão llmstxt.org).
// Gerado a partir dos mesmos dados do site, então nunca fica desatualizado.
export const dynamic = "force-static";

export function GET() {
  const perguntas = faq.map((f) => `### ${f.pergunta}\n\n${f.resposta}`).join("\n\n");

  const corpo = `# ${seo.tituloCurto}

> ${seo.resumo}

## Informações principais

- Nome: ${site.nome}
- Profissão: Psicóloga clínica
- Registro: CRP ${site.crp} (Conselho Regional de Psicologia da 18ª Região – Mato Grosso)
- Especializações: ${site.especializacoes.join(" e ")} (ITCC-MS)
- Formação: ${site.formacao}
- Público: adultos e adolescentes
- Modalidade: presencial em ${site.endereco.cidade} – ${site.endereco.estado} e online para todo o Brasil
- Cidades próximas atendidas (presencial em Rondonópolis ou online): ${site.cidadesProximas.join(", ")}
- Online para todo o Mato Grosso (ex.: ${site.cidadesOnline.join(", ")}) e o Brasil
- Agendamento: WhatsApp ${site.whatsapp} (${whatsappLink()})
- E-mail: ${site.email}
- Instagram: ${site.instagram.url}

## Como funciona o atendimento

1. Primeiro contato pelo WhatsApp para conhecer o atendimento e ver horários.
2. Primeira sessão para conversar sobre a história, a perda e o motivo da busca por apoio.
3. Acompanhamento em sessões individuais, no ritmo de cada pessoa e com sigilo.

## Perguntas frequentes

${perguntas}

## Aviso

Este site não oferece atendimento de emergência. Em crise, ligue 188 (CVV) ou 192 (SAMU).

## Páginas

- [Página principal](${site.url}/): apresentação, sobre a psicóloga, atendimento, perguntas frequentes e contato.
`;

  return new Response(corpo, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
