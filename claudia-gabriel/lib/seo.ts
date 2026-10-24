import { site, telefoneInternacional } from "./site";

export const seo = {
  titulo: "Psicóloga em Rondonópolis – MT | Especialista em Perdas e Luto | Claudia Gabriel",
  tituloCurto: "Claudia Gabriel – Psicóloga em Rondonópolis",
  descricao:
    "Claudia Gabriel, psicóloga em Rondonópolis (MT) especialista em perdas e luto e Terapia Cognitivo-Comportamental. Atende adultos e adolescentes, presencial e online. CRP 18/8181.",
  palavrasChave: [
    "psicóloga em Rondonópolis",
    "psicóloga Rondonópolis MT",
    "psicóloga de Rondonópolis",
    "psicólogo em Rondonópolis",
    "psicóloga perdas e luto",
    "psicóloga para luto",
    "psicóloga especialista em luto",
    "psicóloga especialista em perdas e luto",
    "psicóloga perdas e luto Rondonópolis",
    "terapia do luto Rondonópolis",
    "terapia para luto",
    "acompanhamento psicológico no luto",
    "psicóloga para adolescentes em Rondonópolis",
    "psicóloga adolescentes Rondonópolis",
    "terapia cognitivo-comportamental Rondonópolis",
    "TCC Rondonópolis",
    "psicóloga online luto",
    "psicoterapia Rondonópolis",
    "Claudia Gabriel psicóloga",
  ],
};

export const faq = [
  {
    pergunta: "Você atende em Rondonópolis?",
    resposta:
      "Sim. Meu consultório fica em Rondonópolis, Mato Grosso, com atendimento presencial. Também atendo online, para quem mora em outras cidades ou prefere ser atendido de casa.",
  },
  {
    pergunta: "Como a terapia pode ajudar no luto?",
    resposta:
      "A terapia oferece um espaço seguro para falar sobre a perda, entender as reações do luto, que costumam vir em ondas, e lidar com a culpa, a saudade e as datas difíceis. Com a Terapia Cognitivo-Comportamental, trabalhamos psicoeducação sobre o luto e formas de seguir a vida mantendo vivo o vínculo com quem partiu.",
  },
  {
    pergunta: "Luto é só pela morte de alguém?",
    resposta:
      "Não. O luto pode surgir em qualquer perda significativa: o fim de um relacionamento, uma mudança de cidade, a perda de um emprego, um diagnóstico ou outras rupturas importantes. Toda perda que dói merece ser acolhida.",
  },
  {
    pergunta: "Você atende adolescentes?",
    resposta:
      "Sim. Atendo adolescentes e adultos em Rondonópolis e online. O acompanhamento é adaptado à fase de vida de cada pessoa, com acolhimento e linguagem próximos da realidade de quem chega.",
  },
  {
    pergunta: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
    resposta:
      "É uma abordagem da psicologia baseada em evidências científicas. Ela ajuda a compreender a relação entre pensamentos, emoções e comportamentos, e a desenvolver estratégias práticas para lidar com o sofrimento.",
  },
  {
    pergunta: "Como faço para agendar uma consulta?",
    resposta:
      "É só enviar uma mensagem pelo WhatsApp (66) 99667-2819. Eu explico como funciona o atendimento e vemos juntos o melhor horário para você.",
  },
];

// Dados estruturados (JSON-LD) para o Google: profissional local, pessoa, site e perguntas frequentes.
export function jsonLd() {
  const id = (ancora: string) => `${site.url}/#${ancora}`;
  const imagem = `${site.url}/opengraph-image.jpg`;

  const endereco = {
    "@type": "PostalAddress",
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.uf,
    addressCountry: site.endereco.pais,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: site.url,
        name: seo.tituloCurto,
        inLanguage: "pt-BR",
        publisher: { "@id": id("consultorio") },
      },
      {
        "@type": "WebPage",
        "@id": id("webpage"),
        url: site.url,
        name: seo.titulo,
        description: seo.descricao,
        inLanguage: "pt-BR",
        isPartOf: { "@id": id("website") },
        about: { "@id": id("consultorio") },
        primaryImageOfPage: imagem,
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": id("consultorio"),
        name: "Claudia Gabriel – Psicóloga em Rondonópolis",
        description: seo.descricao,
        url: site.url,
        image: imagem,
        logo: `${site.url}/logo.png`,
        telephone: telefoneInternacional,
        email: site.email,
        address: endereco,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.endereco.latitude,
          longitude: site.endereco.longitude,
        },
        areaServed: [
          { "@type": "City", name: "Rondonópolis" },
          { "@type": "State", name: "Mato Grosso" },
          { "@type": "Country", name: "Brasil" },
        ],
        sameAs: site.redes,
        knowsAbout: [
          "Luto",
          "Perdas e luto",
          "Terapia do luto",
          "Terapia Cognitivo-Comportamental",
          "Psicologia clínica",
          "Psicoterapia para adolescentes",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Atendimento psicológico",
          itemListElement: [
            "Psicoterapia para perdas e luto",
            "Terapia Cognitivo-Comportamental (TCC)",
            "Psicoterapia para adolescentes",
            "Psicoterapia para adultos",
            "Atendimento psicológico online",
            "Atendimento psicológico presencial em Rondonópolis",
          ].map((nome) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: nome, areaServed: "Rondonópolis – MT" },
          })),
        },
        founder: { "@id": id("claudia") },
        employee: { "@id": id("claudia") },
      },
      {
        "@type": "Person",
        "@id": id("claudia"),
        name: "Claudia Gabriel",
        jobTitle: "Psicóloga clínica especialista em perdas e luto",
        description:
          "Psicóloga clínica em Rondonópolis (MT), especialista em Perdas e Luto e em Terapia Cognitivo-Comportamental.",
        image: `${site.url}/opengraph-image.jpg`,
        url: site.url,
        email: site.email,
        telephone: telefoneInternacional,
        address: endereco,
        worksFor: { "@id": id("consultorio") },
        alumniOf: { "@type": "CollegeOrUniversity", name: site.formacao },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Registro profissional",
          name: `CRP ${site.crp}`,
          recognizedBy: { "@type": "Organization", name: "Conselho Regional de Psicologia" },
        },
        knowsAbout: ["Perdas e luto", "Terapia Cognitivo-Comportamental", "Adolescentes"],
        sameAs: site.redes,
      },
      {
        "@type": "FAQPage",
        "@id": id("faq"),
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.pergunta,
          acceptedAnswer: { "@type": "Answer", text: item.resposta },
        })),
      },
    ],
  };
}
