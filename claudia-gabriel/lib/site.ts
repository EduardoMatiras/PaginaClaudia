// Dados editáveis do site. Os valores entre colchetes são placeholders do layout original.
export const site = {
  // TROCAR pelo domínio definitivo antes de publicar (usado em canonical, sitemap e schema).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.psicologaclaudiagabriel.com.br",
  nome: "Claudia Gabriel",
  crp: "18/8181",
  anosExperiencia: "[X]",
  modalidade: "Atendimento online e presencial",
  duracaoSessao: "[50 minutos]",
  whatsapp: "(66) 99667-2819",
  email: "claudiagabriel1312@gmail.com",
  cidade: "Rondonópolis/MT",
  endereco: {
    cidade: "Rondonópolis",
    uf: "MT",
    estado: "Mato Grosso",
    pais: "BR",
    // Centro de Rondonópolis (aproximado). Ajustar quando houver o endereço do consultório.
    latitude: -16.4673,
    longitude: -54.6372,
  },
  formacao: "Faculdade Anhanguera de Rondonópolis",
  especializacoes: ["Perdas e Luto", "Terapia Cognitivo-Comportamental"],
  instagram: {
    handle: "@psic.claudiagabriel",
    url: "https://www.instagram.com/psic.claudiagabriel/",
  },
  redes: [
    "https://www.instagram.com/psic.claudiagabriel/",
    "https://www.threads.net/@psic.claudiagabriel",
    "https://beacons.ai/psic.claudiagabriel",
  ],
};

// true quando o valor ainda é um placeholder do layout (ex.: "[X]"), para não exibi-lo no site.
export const pendente = (valor: string) => /^\[.*\]$/.test(valor.trim());

// Telefone no formato internacional (E.164), usado no schema e em links tel:
export const telefoneInternacional = `+55${site.whatsapp.replace(/\D/g, "")}`;

// Link do WhatsApp (com DDI 55) já com a mensagem de agendamento preenchida.
export function whatsappLink(mensagem = "Olá Claudia, vim do site, quero fazer um agendamento.") {
  const numero = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
}
