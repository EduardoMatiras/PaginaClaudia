import type { Secao } from "./blog";

// Páginas de serviço: uma página por busca importante (SEO local e por tema).
export type Servico = {
  slug: string;
  // Nome curto usado em menus, rodapé e migalhas.
  nome: string;
  titulo: string; // H1
  tituloSeo: string; // <title> (até ~60 caracteres)
  descricao: string;
  resumo: string;
  servicoSchema: string; // nome do serviço no schema.org
  palavrasChave: string[];
  secoes: Secao[];
  faq: { pergunta: string; resposta: string }[];
  // Artigos do blog relacionados (slugs).
  artigos: string[];
  mensagemWhatsapp: string;
};

export const servicos: Servico[] = [
  {
    slug: "psicologa-rondonopolis",
    nome: "Psicóloga em Rondonópolis",
    titulo: "Psicóloga em Rondonópolis – MT",
    tituloSeo: "Psicóloga em Rondonópolis – MT | Consultório e online",
    descricao:
      "Psicóloga clínica em Rondonópolis (MT), CRP 18/8181. Atendimento presencial no consultório e online para adultos e adolescentes, com foco em perdas e luto e TCC.",
    resumo:
      "Claudia Gabriel é psicóloga clínica em Rondonópolis, Mato Grosso (CRP 18/8181). Atende adultos e adolescentes no consultório em Rondonópolis e online, com Terapia Cognitivo-Comportamental e especialização em perdas e luto. O agendamento é feito pelo WhatsApp (66) 99667-2819.",
    servicoSchema: "Psicoterapia presencial em Rondonópolis",
    palavrasChave: [
      "psicóloga em Rondonópolis",
      "psicólogo Rondonópolis",
      "psicóloga Rondonópolis MT",
      "consultório de psicologia Rondonópolis",
      "terapia em Rondonópolis",
    ],
    secoes: [
      {
        titulo: "Atendimento psicológico no consultório em Rondonópolis",
        paragrafos: [
          "O consultório fica em Rondonópolis e recebe adultos e adolescentes para psicoterapia individual. As sessões são semanais ou combinadas conforme a necessidade de cada pessoa, sempre com sigilo profissional garantido pelo Código de Ética do psicólogo.",
          "Quem mora em cidades próximas, como Pedra Preta, Juscimeira, Jaciara, São Pedro da Cipa, Itiquira, Guiratinga e Poxoréu, também pode vir ao consultório. Para quem prefere ou precisa, o mesmo acompanhamento acontece online.",
        ],
      },
      {
        titulo: "Com o que a terapia pode ajudar",
        paragrafos: [
          "A especialidade do consultório é o acompanhamento de perdas e luto, mas a psicoterapia também acolhe outras demandas que costumam aparecer junto da dor:",
        ],
        lista: [
          "Luto pela morte de alguém próximo.",
          "Perdas como separação, desemprego, mudança de cidade ou diagnóstico.",
          "Tristeza persistente, desânimo e dificuldade de retomar a rotina.",
          "Ansiedade, preocupação excessiva e dificuldade para dormir.",
          "Culpa, pensamentos repetitivos e autocobrança.",
          "Questões da adolescência, como conflitos, isolamento e mudanças.",
        ],
      },
      {
        titulo: "A abordagem: Terapia Cognitivo-Comportamental",
        paragrafos: [
          "A Terapia Cognitivo-Comportamental (TCC) é uma das abordagens da psicologia com mais pesquisas científicas que comprovam sua eficácia. Ela ajuda a entender como pensamentos, emoções e comportamentos se influenciam, e a construir, junto com a psicóloga, estratégias práticas para lidar com o sofrimento.",
          "No luto, a TCC é combinada com psicoeducação sobre o processo de perda e com espaço para falar de quem partiu, respeitando o tempo de cada pessoa.",
        ],
      },
      {
        titulo: "Como agendar",
        paragrafos: [
          "Basta enviar uma mensagem pelo WhatsApp (66) 99667-2819. Você conhece como funciona o atendimento, tira dúvidas e combina o melhor horário, presencial em Rondonópolis ou online.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Onde fica o consultório?",
        resposta:
          "Em Rondonópolis, Mato Grosso. O endereço completo é informado no agendamento pelo WhatsApp (66) 99667-2819.",
      },
      {
        pergunta: "Atende adolescentes em Rondonópolis?",
        resposta:
          "Sim. Atendo adolescentes e adultos, presencialmente em Rondonópolis e online, com acompanhamento adaptado à fase de vida de cada pessoa.",
      },
      {
        pergunta: "Atende por plano de saúde?",
        resposta:
          "Para saber sobre formas de pagamento e reembolso, envie uma mensagem pelo WhatsApp. Explico as opções disponíveis.",
      },
    ],
    artigos: ["psicologa-para-luto-em-rondonopolis", "como-lidar-com-o-luto"],
    mensagemWhatsapp: "Olá Claudia, vim do site e quero agendar uma consulta em Rondonópolis.",
  },
  {
    slug: "terapia-para-luto",
    nome: "Terapia para luto",
    titulo: "Terapia para luto e perdas",
    tituloSeo: "Terapia para luto e perdas | Psicóloga especialista",
    descricao:
      "Terapia para luto com psicóloga especialista em perdas e luto, em Rondonópolis (MT) e online. Como funciona, quando procurar e como a TCC ajuda.",
    resumo:
      "A terapia para luto é um acompanhamento psicológico voltado a quem está vivendo uma perda significativa. Ela ajuda a entender as reações do luto, lidar com a culpa e a saudade, atravessar datas difíceis e reorganizar a vida mantendo o vínculo com quem partiu. A psicóloga Claudia Gabriel é especialista em Perdas e Luto e atende em Rondonópolis (MT) e online.",
    servicoSchema: "Psicoterapia para perdas e luto",
    palavrasChave: [
      "terapia para luto",
      "terapia do luto",
      "psicóloga especialista em luto",
      "acompanhamento psicológico no luto",
      "psicóloga para luto online",
    ],
    secoes: [
      {
        titulo: "O que é a terapia para luto",
        paragrafos: [
          "É uma psicoterapia individual focada na experiência da perda. Ela não tem o objetivo de fazer esquecer nem de apressar o processo, e sim de oferecer um espaço seguro para que a dor possa ser dita, compreendida e elaborada.",
          "O luto não é uma doença. Mas, quando a dor fica pesada demais, isola ou paralisa, o acompanhamento de uma profissional especializada faz diferença.",
        ],
      },
      {
        titulo: "Para quais perdas",
        lista: [
          "Morte de familiar, cônjuge, filho, amigo ou animal de estimação.",
          "Perdas gestacionais.",
          "Mortes repentinas, por acidente, violência ou suicídio.",
          "Luto antecipatório, durante a doença de alguém querido.",
          "Separações, desemprego, mudança de cidade e outras perdas significativas.",
        ],
      },
      {
        titulo: "Como funciona o acompanhamento",
        paragrafos: [
          "Nas primeiras sessões, conversamos sobre a sua história, a perda e o que mais tem pesado. A partir daí, o trabalho combina escuta, psicoeducação sobre o luto e técnicas da Terapia Cognitivo-Comportamental, como:",
        ],
        lista: [
          "Compreender por que o luto vem em ondas e o que é esperado.",
          "Identificar e trabalhar a culpa e os pensamentos que aumentam o sofrimento.",
          "Planejar como atravessar aniversários, festas e a data da perda.",
          "Retomar a rotina aos poucos, no seu ritmo.",
          "Construir formas de lembrar e honrar quem partiu.",
        ],
      },
      {
        titulo: "Quando procurar",
        paragrafos: [
          "Não é preciso esperar ficar pior. Procure apoio quando a dor dificultar a rotina por muito tempo, quando houver culpa intensa, isolamento, dificuldade para dormir ou trabalhar, ou quando você sentir que não tem com quem falar da perda.",
          "Se houver pensamentos de morte ou de se machucar, procure ajuda imediata: 188 (CVV, 24 horas) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Quantas sessões dura a terapia para luto?",
        resposta:
          "Não há um número fixo. O acompanhamento é ajustado a cada pessoa e revisto ao longo do processo.",
      },
      {
        pergunta: "A terapia para luto pode ser online?",
        resposta:
          "Sim. O atendimento online é regulamentado pelo Conselho Federal de Psicologia e segue os mesmos cuidados éticos e de sigilo do presencial.",
      },
      {
        pergunta: "Faz sentido fazer terapia se a perda foi há muitos anos?",
        resposta:
          "Sim. Perdas antigas podem continuar doendo ou ser reativadas por novas situações. Nunca é tarde para cuidar dessa dor.",
      },
    ],
    artigos: ["quanto-tempo-dura-o-luto", "como-lidar-com-o-luto", "luto-sem-morte-outras-perdas"],
    mensagemWhatsapp: "Olá Claudia, vim do site e quero saber sobre a terapia para luto.",
  },
  {
    slug: "psicologa-para-adolescentes",
    nome: "Psicóloga para adolescentes",
    titulo: "Psicóloga para adolescentes em Rondonópolis",
    tituloSeo: "Psicóloga para adolescentes em Rondonópolis – MT",
    descricao:
      "Psicoterapia para adolescentes em Rondonópolis (MT) e online: luto, ansiedade, isolamento e mudanças da adolescência. Como funciona e como os pais participam.",
    resumo:
      "A psicoterapia para adolescentes oferece um espaço sigiloso e acolhedor para o jovem falar do que sente, com linguagem próxima da realidade dele. A psicóloga Claudia Gabriel atende adolescentes em Rondonópolis (MT) e online, com Terapia Cognitivo-Comportamental e especialização em perdas e luto.",
    servicoSchema: "Psicoterapia para adolescentes",
    palavrasChave: [
      "psicóloga para adolescentes Rondonópolis",
      "psicólogo adolescente Rondonópolis",
      "terapia para adolescentes",
      "luto na adolescência",
    ],
    secoes: [
      {
        titulo: "Quando procurar uma psicóloga para o adolescente",
        paragrafos: ["Alguns sinais que merecem atenção:"],
        lista: [
          "Isolamento, mais tempo trancado no quarto ou longe dos amigos.",
          "Irritabilidade, explosões ou tristeza que não passam.",
          "Queda no rendimento escolar ou recusa em ir à escola.",
          "Mudanças no sono e na alimentação.",
          "Uma perda recente: morte na família, separação dos pais, mudança de cidade.",
          "Falas de desesperança, de não ver sentido nas coisas ou de se machucar.",
        ],
        depois: [
          "Se houver falas sobre morrer ou se machucar, procure ajuda imediata: 188 (CVV) ou 192 (SAMU).",
        ],
      },
      {
        titulo: "Como é a terapia com adolescentes",
        paragrafos: [
          "As sessões são individuais e o que o adolescente conta é protegido pelo sigilo profissional, o que é essencial para que ele se sinta seguro para falar. O sigilo só é quebrado em situações de risco, como prevê o Código de Ética.",
          "Com a Terapia Cognitivo-Comportamental, o jovem aprende a reconhecer o que sente, entender os pensamentos que aumentam o sofrimento e desenvolver formas práticas de lidar com as situações do dia a dia.",
        ],
      },
      {
        titulo: "E os pais?",
        paragrafos: [
          "Os responsáveis participam do início do processo e, quando necessário, de encontros de orientação. Nesses momentos, conversamos sobre como apoiar o adolescente em casa, sem expor o conteúdo das sessões.",
        ],
      },
      {
        titulo: "Luto na adolescência",
        paragrafos: [
          "Adolescentes vivem o luto de um jeito próprio: às vezes parecem indiferentes, às vezes reagem com raiva ou se fecham. Muitos evitam falar para não preocupar a família. Ter um espaço só deles, fora de casa, ajuda a elaborar a perda.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "A partir de que idade você atende?",
        resposta:
          "Atendo adolescentes e adultos. Para confirmar se o atendimento é indicado para a idade do seu filho, envie uma mensagem pelo WhatsApp.",
      },
      {
        pergunta: "Os pais ficam sabendo o que o adolescente fala na terapia?",
        resposta:
          "Não. O conteúdo das sessões é sigiloso. Os pais recebem orientações gerais e são informados apenas em situações de risco, como prevê o Código de Ética do psicólogo.",
      },
      {
        pergunta: "A terapia para adolescentes pode ser online?",
        resposta:
          "Sim, desde que o adolescente tenha um lugar reservado em casa para falar com privacidade.",
      },
    ],
    artigos: ["luto-na-adolescencia", "como-explicar-a-morte-para-uma-crianca"],
    mensagemWhatsapp: "Olá Claudia, vim do site e quero saber sobre terapia para adolescentes.",
  },
  {
    slug: "terapia-online-mato-grosso",
    nome: "Terapia online",
    titulo: "Terapia online em Mato Grosso e em todo o Brasil",
    tituloSeo: "Psicóloga online em Mato Grosso | Terapia online",
    descricao:
      "Terapia online com psicóloga especialista em luto, para Cuiabá, Várzea Grande, Sinop e todo o Mato Grosso e o Brasil. Como funciona, segurança e sigilo.",
    resumo:
      "A terapia online é a psicoterapia feita por videochamada, com o mesmo cuidado, ética e sigilo do atendimento presencial. A psicóloga Claudia Gabriel (CRP 18/8181), especialista em perdas e luto, atende online pessoas de todo o Mato Grosso, como Cuiabá, Várzea Grande, Sinop e Tangará da Serra, e de outros estados do Brasil.",
    servicoSchema: "Atendimento psicológico online",
    palavrasChave: [
      "psicóloga online Mato Grosso",
      "terapia online",
      "psicóloga online Cuiabá",
      "psicóloga online luto",
      "psicólogo online MT",
    ],
    secoes: [
      {
        titulo: "Como funciona a terapia online",
        lista: [
          "O primeiro contato é pelo WhatsApp, para conhecer o atendimento e combinar o horário.",
          "As sessões acontecem por videochamada, em uma plataforma segura.",
          "Você só precisa de um celular ou computador com internet e de um lugar reservado.",
          "A duração e a frequência são as mesmas do atendimento presencial.",
        ],
      },
      {
        titulo: "É seguro e regulamentado?",
        paragrafos: [
          "Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia e exige que a psicóloga siga as mesmas normas éticas e de sigilo do consultório. Você pode conferir o registro profissional da psicóloga (CRP 18/8181) no site do Conselho.",
        ],
      },
      {
        titulo: "Para quem a terapia online é indicada",
        lista: [
          "Quem mora longe de Rondonópolis, em outras cidades de Mato Grosso ou do Brasil.",
          "Quem tem rotina corrida e não consegue se deslocar.",
          "Quem se sente mais à vontade falando de casa.",
          "Brasileiros que moram fora e preferem fazer terapia em português.",
        ],
        depois: [
          "Em situações de crise grave, o atendimento presencial e os serviços de emergência são mais indicados: 188 (CVV) ou 192 (SAMU).",
        ],
      },
      {
        titulo: "Cidades atendidas",
        paragrafos: [
          "Atendo online pessoas de Cuiabá, Várzea Grande, Sinop, Tangará da Serra, Sorriso, Lucas do Rio Verde, Barra do Garças, Cáceres, Primavera do Leste e de todas as outras cidades de Mato Grosso e do Brasil.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "A terapia online funciona tão bem quanto a presencial?",
        resposta:
          "Para a maioria das pessoas e demandas, sim. Estudos mostram resultados comparáveis entre a psicoterapia online e a presencial, desde que haja privacidade e uma boa conexão.",
      },
      {
        pergunta: "Preciso instalar algum programa?",
        resposta:
          "Não necessariamente. O link da videochamada é enviado antes da sessão e pode ser aberto no celular ou no computador.",
      },
      {
        pergunta: "Atende pessoas que moram fora do Brasil?",
        resposta:
          "Sim, em português. Envie uma mensagem pelo WhatsApp para combinarmos um horário considerando o fuso.",
      },
    ],
    artigos: ["como-lidar-com-o-luto", "natal-e-fim-de-ano-sem-quem-partiu"],
    mensagemWhatsapp: "Olá Claudia, vim do site e quero saber sobre a terapia online.",
  },
];

export function buscarServico(slug: string) {
  const s = servicos.find((x) => x.slug === slug);
  if (!s) throw new Error(`Serviço não encontrado: ${slug}`);
  return s;
}
