import type { Post } from "./blog";
import { site, telefoneInternacional, whatsappLink } from "./site";

export const seo = {
  // Até ~60 caracteres para não ser cortado no Google.
  titulo: "Psicóloga em Rondonópolis – MT | Luto e Perdas | Claudia Gabriel",
  tituloCurto: "Claudia Gabriel – Psicóloga em Rondonópolis",
  // Até ~155 caracteres.
  descricao:
    "Psicóloga em Rondonópolis – MT especialista em perdas e luto e TCC. Adultos e adolescentes, presencial e online para todo o Mato Grosso. CRP 18/8181.",
  // Resumo factual e autocontido: é o trecho que buscadores de IA (AEO/GEO) tendem a citar.
  resumo:
    "Claudia Gabriel é psicóloga clínica (CRP 18/8181) em Rondonópolis, Mato Grosso, especialista em Perdas e Luto e em Terapia Cognitivo-Comportamental (TCC) pelo ITCC-MS. Atende adultos e adolescentes, presencialmente em Rondonópolis (região Sul de Mato Grosso) e online para todo o Mato Grosso e o Brasil. O agendamento é feito pelo WhatsApp (66) 99667-2819.",
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
    "terapia para perda de ente querido",
    "como lidar com o luto",
    "psicóloga para adolescentes em Rondonópolis",
    "psicóloga adolescentes Rondonópolis",
    "terapia cognitivo-comportamental Rondonópolis",
    "TCC Rondonópolis",
    "psicóloga online luto",
    "psicóloga online",
    "psicólogo luto Mato Grosso",
    "psicóloga Mato Grosso",
    "psicóloga MT",
    "psicóloga online Mato Grosso",
    "psicóloga em Cuiabá online",
    "psicóloga perto de mim Rondonópolis",
    "melhor psicóloga Rondonópolis",
    "consultório de psicologia Rondonópolis",
    "psicóloga Pedra Preta",
    "psicóloga Jaciara",
    "psicóloga Primavera do Leste",
    "psicoterapia Rondonópolis",
    "Claudia Gabriel psicóloga",
  ],
};

// Perguntas escritas como as pessoas buscam (Google, assistentes de voz e IAs),
// com respostas diretas na primeira frase.
export const faq = [
  {
    pergunta: "Você atende em Rondonópolis?",
    resposta:
      "Sim. Meu consultório fica em Rondonópolis, Mato Grosso, com atendimento presencial. Também atendo online, para quem mora em outras cidades ou prefere ser atendido de casa.",
  },
  {
    pergunta: "Atende pacientes de outras cidades de Mato Grosso?",
    resposta:
      "Sim. Pessoas de cidades próximas, como Pedra Preta, Juscimeira, Jaciara, Itiquira, Guiratinga, Poxoréu e Primavera do Leste, podem ser atendidas no consultório em Rondonópolis ou online. Para Cuiabá, Várzea Grande, Sinop e demais cidades de Mato Grosso e do Brasil, o atendimento é online, por videochamada.",
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
    pergunta: "Quanto tempo dura o luto?",
    resposta:
      "Não existe um prazo certo. O luto é um processo individual, que depende do vínculo com quem ou com o que se perdeu, das circunstâncias da perda e da rede de apoio de cada pessoa. A dor tende a mudar de forma com o tempo, mas não precisa ser enfrentada sozinha.",
  },
  {
    pergunta: "Quando devo procurar uma psicóloga por causa do luto?",
    resposta:
      "Vale buscar ajuda quando a dor dificulta a rotina por muito tempo, quando há culpa intensa, isolamento, dificuldade para dormir ou trabalhar, ou quando você sente que não tem com quem falar sobre a perda. Não é preciso esperar ficar pior. Em situação de crise, ligue 188 (CVV) ou 192 (SAMU).",
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
    pergunta: "A terapia online funciona?",
    resposta:
      "Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia e segue os mesmos cuidados éticos e de sigilo do presencial. As sessões são feitas por videochamada, para quem mora fora de Rondonópolis ou prefere ser atendido de casa.",
  },
  {
    pergunta: "Como faço para agendar uma consulta?",
    resposta:
      "É só enviar uma mensagem pelo WhatsApp (66) 99667-2819. Eu explico como funciona o atendimento e vemos juntos o melhor horário para você.",
  },
];

// Dados estruturados (JSON-LD): site, página médica revisada, consultório local,
// profissional (E-E-A-T), tema do luto e perguntas frequentes.
export function jsonLd() {
  const id = (ancora: string) => `${site.url}/#${ancora}`;
  const imagem = `${site.url}/opengraph-image.jpg`;
  const hoje = new Date().toISOString().slice(0, 10);

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
        alternateName: "Psicóloga Claudia Gabriel",
        inLanguage: "pt-BR",
        publisher: { "@id": id("consultorio") },
      },
      {
        // MedicalWebPage revisada pela profissional: sinal de confiabilidade (E-E-A-T) em saúde.
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": id("webpage"),
        url: site.url,
        name: seo.titulo,
        description: seo.descricao,
        abstract: seo.resumo,
        inLanguage: "pt-BR",
        isPartOf: { "@id": id("website") },
        about: [{ "@id": id("consultorio") }, { "@id": id("luto") }],
        mainEntity: { "@id": id("consultorio") },
        author: { "@id": id("claudia") },
        reviewedBy: { "@id": id("claudia") },
        lastReviewed: hoje,
        dateModified: hoje,
        audience: {
          "@type": "PeopleAudience",
          audienceType: "Adultos e adolescentes em processo de luto",
        },
        primaryImageOfPage: { "@type": "ImageObject", url: imagem },
        // Trechos indicados para assistentes de voz e respostas geradas por IA.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero-eyebrow", ".resumo", ".pergunta"],
        },
      },
      {
        "@type": "MedicalCondition",
        "@id": id("luto"),
        name: "Luto",
        alternateName: ["Processo de luto", "Perdas e luto"],
        possibleTreatment: {
          "@type": "MedicalTherapy",
          name: "Terapia Cognitivo-Comportamental (TCC) para o luto",
        },
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": id("consultorio"),
        name: "Claudia Gabriel – Psicóloga em Rondonópolis",
        alternateName: ["Psicóloga Claudia Gabriel", "Psic. Claudia Gabriel"],
        description: seo.resumo,
        url: site.url,
        image: imagem,
        logo: `${site.url}/logo.png`,
        telephone: telefoneInternacional,
        email: site.email,
        address: endereco,
        hasMap: `https://www.google.com/maps?q=${site.endereco.latitude},${site.endereco.longitude}`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.endereco.latitude,
          longitude: site.endereco.longitude,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Agendamento",
          telephone: telefoneInternacional,
          email: site.email,
          url: whatsappLink(),
          availableLanguage: "Portuguese",
          areaServed: "BR",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Rondonópolis",
            containedInPlace: { "@type": "State", name: "Mato Grosso" },
          },
          ...[...site.cidadesProximas, ...site.cidadesOnline].map((name) => ({
            "@type": "City",
            name,
            containedInPlace: { "@type": "State", name: "Mato Grosso" },
          })),
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: site.endereco.latitude,
              longitude: site.endereco.longitude,
            },
            geoRadius: 150000,
          },
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
            itemOffered: {
              "@type": "Service",
              name: nome,
              serviceType: "Psicoterapia",
              provider: { "@id": id("claudia") },
              areaServed: "Rondonópolis – MT",
            },
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
        image: imagem,
        url: site.url,
        email: site.email,
        telephone: telefoneInternacional,
        address: endereco,
        knowsLanguage: "pt-BR",
        worksFor: { "@id": id("consultorio") },
        hasOccupation: {
          "@type": "Occupation",
          name: "Psicóloga clínica",
          occupationLocation: [
            { "@type": "City", name: "Rondonópolis" },
            { "@type": "State", name: "Mato Grosso" },
          ],
        },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: site.formacao },
          { "@type": "EducationalOrganization", name: "ITCC-MS" },
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Registro profissional",
            name: `CRP ${site.crp}`,
            recognizedBy: {
              "@type": "Organization",
              name: "Conselho Regional de Psicologia da 18ª Região (CRP-18 MT)",
            },
          },
          ...site.especializacoes.map((nome) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Especialização",
            name: `Especialização em ${nome}`,
          })),
        ],
        knowsAbout: [
          "Perdas e luto",
          "Terapia Cognitivo-Comportamental",
          "Psicoterapia para adolescentes",
          "Psicoeducação no luto",
          "Saúde mental",
        ],
        sameAs: site.redes,
      },
      {
        "@type": "FAQPage",
        "@id": id("faq"),
        isPartOf: { "@id": id("webpage") },
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.pergunta,
          acceptedAnswer: { "@type": "Answer", text: item.resposta },
        })),
      },
    ],
  };
}

// ---------- Blog ----------

const ref = (ancora: string) => ({ "@id": `${site.url}/#${ancora}` });

function migalhas(itens: { nome: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: itens.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nome,
      item: item.url,
    })),
  };
}

export function blogJsonLd(lista: Post[]) {
  const url = `${site.url}/blog`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        url,
        name: "Blog da Psicóloga Claudia Gabriel",
        description:
          "Artigos sobre luto, perdas e saúde emocional escritos pela psicóloga Claudia Gabriel, de Rondonópolis – MT.",
        inLanguage: "pt-BR",
        author: ref("claudia"),
        publisher: ref("consultorio"),
        isPartOf: ref("website"),
        blogPost: lista.map((p) => ({
          "@type": "BlogPosting",
          headline: p.titulo,
          url: `${url}/${p.slug}`,
          datePublished: p.publicadoEm,
        })),
      },
      migalhas([
        { nome: "Início", url: site.url },
        { nome: "Blog", url },
      ]),
    ],
  };
}

export function postJsonLd(post: Post) {
  const url = `${site.url}/blog/${post.slug}`;
  const grafo: object[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#artigo`,
      mainEntityOfPage: url,
      url,
      headline: post.titulo,
      description: post.descricao,
      abstract: post.resumo,
      image: `${site.url}/opengraph-image.jpg`,
      datePublished: post.publicadoEm,
      dateModified: post.atualizadoEm ?? post.publicadoEm,
      inLanguage: "pt-BR",
      articleSection: post.categoria,
      keywords: post.palavrasChave.join(", "),
      author: ref("claudia"),
      reviewedBy: ref("claudia"),
      publisher: ref("consultorio"),
      isPartOf: { "@id": `${site.url}/blog#blog` },
      about: ref("luto"),
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".artigo-resumo"] },
    },
    migalhas([
      { nome: "Início", url: site.url },
      { nome: "Blog", url: `${site.url}/blog` },
      { nome: post.titulo, url },
    ]),
  ];
  if (post.faq?.length) {
    grafo.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.pergunta,
        acceptedAnswer: { "@type": "Answer", text: f.resposta },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": grafo };
}

export function jsonLdScript(dados: object) {
  return { __html: JSON.stringify(dados).replace(/</g, "\u003c") };
}
