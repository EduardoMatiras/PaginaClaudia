// Artigos do blog. Para publicar um novo, adicione um objeto em `posts` (o mais recente primeiro).
// Cada artigo começa com uma resposta direta (`resumo`), formato que o Google e as IAs costumam citar.

export type Secao = {
  titulo: string;
  paragrafos?: string[];
  lista?: string[];
  // Parágrafos exibidos depois da lista.
  depois?: string[];
};

export type Post = {
  slug: string;
  titulo: string;
  // Título para a aba/Google (até ~60 caracteres). Se omitido, usa `titulo`.
  tituloSeo?: string;
  descricao: string;
  resumo: string;
  publicadoEm: string; // AAAA-MM-DD
  atualizadoEm?: string;
  categoria: string;
  palavrasChave: string[];
  secoes: Secao[];
  faq?: { pergunta: string; resposta: string }[];
};

export const posts: Post[] = [
  {
    slug: "psicologa-para-luto-em-rondonopolis",
    titulo: "Psicóloga para luto em Rondonópolis: como funciona o acompanhamento",
    tituloSeo: "Psicóloga para luto em Rondonópolis – MT: como funciona",
    descricao:
      "Como é o acompanhamento psicológico no luto em Rondonópolis (MT): quando procurar, como são as sessões, atendimento presencial e online e como agendar.",
    resumo:
      "O acompanhamento psicológico no luto é um espaço individual e sigiloso para falar sobre a perda, entender as reações do luto e reorganizar a vida aos poucos. Em Rondonópolis, a psicóloga Claudia Gabriel (CRP 18/8181), especialista em perdas e luto, atende presencialmente no consultório e online para todo o Mato Grosso.",
    publicadoEm: "2026-11-20",
    categoria: "Atendimento",
    palavrasChave: [
      "psicóloga para luto Rondonópolis",
      "terapia do luto Rondonópolis",
      "psicóloga em Rondonópolis",
      "psicóloga luto Mato Grosso",
    ],
    secoes: [
      {
        titulo: "Para quem é o acompanhamento no luto",
        paragrafos: [
          "Para adultos e adolescentes que perderam alguém importante e sentem que a dor ainda ocupa muito espaço na rotina. Também para quem vive outras perdas significativas, como o fim de um casamento, a perda de um emprego, uma mudança de cidade ou um diagnóstico difícil.",
          "Não é preciso estar em crise para buscar ajuda. Muitas pessoas chegam porque querem um lugar onde possam falar da perda sem medo de cansar ou preocupar quem está por perto.",
        ],
      },
      {
        titulo: "Como funcionam as sessões",
        paragrafos: [
          "O primeiro contato é pelo WhatsApp, para conhecer o atendimento e combinar um horário. Na primeira sessão, conversamos sobre a sua história, a perda e o que fez você buscar apoio. A partir daí, o acompanhamento segue em sessões individuais, no seu ritmo e com sigilo profissional.",
          "O trabalho se apoia na Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas, e na especialização em Perdas e Luto. Na prática, isso inclui:",
        ],
        lista: [
          "Psicoeducação sobre o luto: entender por que as reações vêm em ondas e o que é esperado.",
          "Espaço para falar sobre quem partiu e sobre a relação que existiu.",
          "Trabalho com a culpa e com pensamentos que aumentam o sofrimento.",
          "Preparação para datas difíceis, como aniversários e festas de fim de ano.",
          "Retomada gradual da rotina, sem apagar o vínculo com quem se foi.",
        ],
      },
      {
        titulo: "Atendimento presencial em Rondonópolis e online",
        paragrafos: [
          "O consultório fica em Rondonópolis (MT). Pessoas de cidades da região, como Pedra Preta, Juscimeira, Jaciara, Itiquira, Guiratinga, Poxoréu e Primavera do Leste, podem vir ao consultório ou ser atendidas online.",
          "Para Cuiabá, Várzea Grande, Sinop e demais cidades de Mato Grosso e do Brasil, o atendimento acontece por videochamada. A terapia online é regulamentada pelo Conselho Federal de Psicologia e segue os mesmos cuidados éticos e de sigilo do atendimento presencial.",
        ],
      },
      {
        titulo: "Quando é hora de procurar uma psicóloga",
        paragrafos: ["Alguns sinais de que o apoio profissional pode ajudar:"],
        lista: [
          "A dor dificulta trabalhar, estudar, dormir ou cuidar de si por muito tempo.",
          "Há culpa intensa ou pensamentos repetitivos sobre o que poderia ter sido diferente.",
          "Você se afastou das pessoas ou evita tudo o que lembra a perda.",
          "Sente que não tem com quem falar sobre o que aconteceu.",
        ],
        depois: [
          "Se você tiver pensamentos de morte ou de se machucar, procure ajuda imediata: ligue 188 (CVV, gratuito, 24 horas) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Quanto tempo dura a terapia para o luto?",
        resposta:
          "Depende de cada pessoa e de cada perda. Não existe um número fixo de sessões: o acompanhamento é ajustado ao seu momento e revisto ao longo do processo.",
      },
      {
        pergunta: "Como agendar com a psicóloga Claudia Gabriel em Rondonópolis?",
        resposta:
          "Pelo WhatsApp (66) 99667-2819. Você conhece o atendimento, tira dúvidas e combina o melhor horário, presencial em Rondonópolis ou online.",
      },
    ],
  },
  {
    slug: "como-lidar-com-o-luto",
    titulo: "Como lidar com o luto: orientações de uma psicóloga",
    tituloSeo: "Como lidar com o luto: 7 orientações de uma psicóloga",
    descricao:
      "Orientações práticas e acolhedoras para atravessar o luto: o que é esperado, como cuidar de si, lidar com a culpa, com as datas difíceis e quando buscar ajuda.",
    resumo:
      "Lidar com o luto não significa esquecer quem partiu nem “superar” a perda em um prazo. Significa permitir-se sentir, cuidar do básico, falar sobre a perda, encontrar novas formas de manter o vínculo e buscar ajuda quando a dor paralisa a vida.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: ["como lidar com o luto", "como superar o luto", "luto o que fazer", "dor da perda"],
    secoes: [
      {
        titulo: "O luto é uma resposta natural a uma perda importante",
        paragrafos: [
          "O luto não é uma doença nem um sinal de fraqueza. É a forma como a mente, o corpo e as relações reagem à perda de alguém ou de algo que tinha valor. Tristeza, saudade, raiva, culpa, cansaço, falta de concentração e alterações no sono e no apetite são reações comuns.",
          "Também é comum que o luto venha em ondas: dias mais leves e, de repente, uma lembrança, um cheiro ou uma música trazem a dor de volta com força. Isso não é retrocesso. Faz parte do processo.",
        ],
      },
      {
        titulo: "7 orientações para atravessar o luto",
        lista: [
          "Permita-se sentir. Tentar engolir a dor costuma prolongá-la. Chorar, falar e até sentir raiva são formas de elaborar a perda.",
          "Cuide do básico. Dormir, comer e se movimentar um pouco ajudam o corpo a sustentar o que a emoção está vivendo.",
          "Fale sobre quem partiu. Contar histórias e dizer o nome da pessoa mantém viva a lembrança e alivia o peso do silêncio.",
          "Alterne entre sentir e seguir. A psicologia descreve o luto como um movimento entre olhar para a perda e retomar a vida aos poucos. As duas coisas são necessárias.",
          "Olhe para a culpa com cuidado. Pensamentos como “eu deveria ter feito algo” são frequentes. Muitas vezes, eles nascem do amor e de uma visão que só existe depois do que aconteceu.",
          "Prepare-se para as datas difíceis. Aniversários, Natal e o dia da perda costumam pesar. Planejar como passar esses dias, e com quem, ajuda.",
          "Peça e aceite ajuda. Diga a quem está por perto do que você precisa: companhia, ajuda prática ou apenas alguém que escute.",
        ],
      },
      {
        titulo: "Manter o vínculo também faz parte",
        paragrafos: [
          "Durante muito tempo se falou em “desapegar” de quem partiu. Hoje, a psicologia do luto reconhece que é saudável manter um vínculo contínuo com a pessoa: lembrar, honrar, carregar valores e histórias. Seguir a vida não exige apagar o amor.",
        ],
      },
      {
        titulo: "Quando buscar ajuda profissional",
        paragrafos: [
          "Vale procurar uma psicóloga quando a dor impede a rotina por muito tempo, quando a culpa é intensa, quando há isolamento ou quando você sente que não tem espaço para falar da perda. A terapia oferece um lugar seguro e técnicas para atravessar esse momento.",
          "Em situação de crise ou com pensamentos de morte, ligue 188 (CVV) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "É normal sentir raiva no luto?",
        resposta:
          "Sim. Raiva, culpa, alívio e tristeza podem aparecer juntos ou se alternar. Sentir emoções contraditórias é comum e não diminui o amor por quem partiu.",
      },
      {
        pergunta: "As fases do luto acontecem sempre na mesma ordem?",
        resposta:
          "Não. As conhecidas fases (negação, raiva, barganha, tristeza e aceitação) não são uma sequência obrigatória. Cada pessoa vive o luto de um jeito, e as emoções vão e voltam.",
      },
    ],
  },
  {
    slug: "quanto-tempo-dura-o-luto",
    titulo: "Quanto tempo dura o luto? O que é esperado e quando procurar ajuda",
    tituloSeo: "Quanto tempo dura o luto? Quando procurar ajuda",
    descricao:
      "Não existe prazo certo para o luto. Entenda o que influencia a duração, o que é esperado com o tempo e quais sinais indicam luto prolongado.",
    resumo:
      "Não existe um prazo certo para o luto. Para muitas pessoas, a dor mais intensa vai se transformando ao longo dos meses, mas a saudade pode durar a vida toda. Quando, depois de um longo período, a dor continua intensa e impede a rotina, pode se tratar de luto prolongado, que merece acompanhamento profissional.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: ["quanto tempo dura o luto", "luto prolongado", "luto complicado", "luto normal"],
    secoes: [
      {
        titulo: "Por que não existe um prazo",
        paragrafos: [
          "A duração do luto depende de muitos fatores: o tipo de vínculo com quem partiu, as circunstâncias da perda (repentina, violenta ou após longa doença), outras perdas acumuladas, a rede de apoio e a história de cada pessoa.",
          "Frases como “já faz tempo, você precisa seguir em frente” costumam machucar. O luto não segue o calendário dos outros.",
        ],
      },
      {
        titulo: "O que costuma acontecer com o tempo",
        paragrafos: [
          "Com o passar dos meses, a tendência é que a dor mude de forma: os momentos de sofrimento intenso ficam mais espaçados, a rotina volta a ter espaço e as lembranças passam a trazer também carinho, e não apenas dor.",
          "Isso não significa esquecer. Datas especiais podem reacender a saudade mesmo anos depois, e isso é esperado.",
        ],
      },
      {
        titulo: "Sinais de luto prolongado",
        paragrafos: [
          "Os manuais de saúde mental descrevem o transtorno de luto prolongado quando, muito tempo depois da perda, a pessoa continua com saudade e preocupação intensas com quem partiu na maior parte dos dias, com prejuízo importante na vida. O DSM-5-TR considera pelo menos 12 meses após a perda em adultos (6 meses em crianças e adolescentes), e a CID-11 considera pelo menos 6 meses. Alguns sinais:",
        ],
        lista: [
          "Sensação de que parte de si morreu junto.",
          "Dificuldade intensa de aceitar a perda.",
          "Evitar tudo o que lembra a pessoa.",
          "Sensação de que a vida perdeu completamente o sentido.",
          "Dificuldade de retomar trabalho, relações ou planos.",
        ],
        depois: [
          "Só uma avaliação profissional pode dizer se é o caso. E não é preciso esperar um ano para buscar ajuda: o acompanhamento psicológico pode começar a qualquer momento do luto.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "É normal ainda sentir muita saudade depois de anos?",
        resposta:
          "Sim. A saudade pode acompanhar a vida toda. O que costuma mudar é a intensidade e a forma como ela convive com a rotina.",
      },
      {
        pergunta: "Luto prolongado tem tratamento?",
        resposta:
          "Sim. A psicoterapia, em especial abordagens baseadas em evidências como a Terapia Cognitivo-Comportamental, ajuda a elaborar a perda e a retomar a vida.",
      },
    ],
  },
  {
    slug: "luto-sem-morte-outras-perdas",
    titulo: "Luto não é só pela morte: as perdas que também doem",
    tituloSeo: "Luto sem morte: separação, emprego e outras perdas",
    descricao:
      "Separação, perda de emprego, mudança de cidade, diagnóstico, aborto espontâneo: o luto também acontece em perdas que nem sempre são reconhecidas.",
    resumo:
      "O luto acontece em qualquer perda significativa, não só na morte de alguém. O fim de um relacionamento, a perda de um emprego, uma mudança de cidade, um diagnóstico ou uma perda gestacional também provocam luto, e ele merece ser acolhido mesmo quando os outros não o reconhecem.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: ["luto sem morte", "luto pelo fim do relacionamento", "luto não reconhecido", "tipos de luto"],
    secoes: [
      {
        titulo: "Perdas que também provocam luto",
        lista: [
          "Fim de um casamento ou namoro.",
          "Perda de um emprego ou de uma carreira.",
          "Mudança de cidade ou de país.",
          "Diagnóstico de uma doença, sua ou de alguém próximo.",
          "Perda gestacional ou dificuldade para engravidar.",
          "Morte de um animal de estimação.",
          "Aposentadoria e outras mudanças de papel na vida.",
        ],
      },
      {
        titulo: "O luto não reconhecido",
        paragrafos: [
          "Algumas perdas não recebem o mesmo acolhimento social que a morte de um familiar. Quem perde um animal de estimação, vive uma perda gestacional ou termina um relacionamento muitas vezes ouve que “não é para tanto”. Na psicologia, isso é chamado de luto não reconhecido.",
          "Quando a dor não é validada, a pessoa tende a escondê-la, o que aumenta a solidão e dificulta a elaboração da perda.",
        ],
      },
      {
        titulo: "Como cuidar de si nessas perdas",
        paragrafos: [
          "Reconheça que é uma perda. Dar nome ao que você está vivendo ajuda a se permitir sentir. Procure pessoas que possam escutar sem julgar e respeite o seu tempo. Se a dor estiver pesada demais, a terapia é um espaço onde toda perda que dói é levada a sério.",
        ],
      },
    ],
  },
  {
    slug: "como-ajudar-alguem-de-luto",
    titulo: "Como ajudar alguém que está de luto: o que dizer e o que evitar",
    tituloSeo: "Como ajudar alguém de luto: o que dizer e o que evitar",
    descricao:
      "O que dizer (e o que não dizer) a quem perdeu alguém, como oferecer ajuda prática e como acompanhar uma pessoa enlutada ao longo do tempo.",
    resumo:
      "Para ajudar alguém de luto, mais importante do que encontrar as palavras certas é estar presente: escutar sem pressa, falar o nome de quem partiu, oferecer ajuda prática e concreta e continuar por perto depois das primeiras semanas.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: ["como ajudar alguém de luto", "o que dizer para quem perdeu alguém", "frases para quem está de luto"],
    secoes: [
      {
        titulo: "O que costuma ajudar",
        lista: [
          "Dizer algo simples e verdadeiro: “Sinto muito. Estou aqui.”",
          "Escutar mais do que falar, sem tentar consertar a dor.",
          "Falar o nome de quem partiu e compartilhar lembranças.",
          "Oferecer ajuda concreta: levar uma refeição, buscar as crianças, resolver uma burocracia.",
          "Lembrar das datas difíceis e mandar uma mensagem nesses dias.",
          "Continuar presente depois que o movimento das primeiras semanas passa.",
        ],
      },
      {
        titulo: "O que é melhor evitar",
        lista: [
          "“Foi melhor assim” ou “agora ele descansou”.",
          "“Eu sei exatamente o que você está sentindo.”",
          "“Você precisa ser forte” ou “não chore”.",
          "Comparar perdas ou contar a sua própria história logo de início.",
          "Cobrar prazos: “já está na hora de seguir em frente”.",
        ],
        depois: [
          "Essas frases geralmente nascem da vontade de ajudar, mas podem fazer a pessoa sentir que a dor dela não cabe ali.",
        ],
      },
      {
        titulo: "Quando sugerir ajuda profissional",
        paragrafos: [
          "Se a pessoa não consegue retomar a rotina depois de muito tempo, se isolou, fala em não ver sentido na vida ou demonstra culpa intensa, vale sugerir com carinho o acompanhamento psicológico. Se houver falas sobre morrer ou se machucar, incentive o contato imediato com o CVV (188) ou o SAMU (192).",
        ],
      },
    ],
  },
];

export const postsOrdenados = [...posts].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));

export function buscarPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Tempo de leitura aproximado (200 palavras por minuto).
export function tempoLeitura(post: Post) {
  const texto = [
    post.resumo,
    ...post.secoes.flatMap((s) => [s.titulo, ...(s.paragrafos ?? []), ...(s.lista ?? []), ...(s.depois ?? [])]),
    ...(post.faq ?? []).flatMap((f) => [f.pergunta, f.resposta]),
  ].join(" ");
  return Math.max(1, Math.round(texto.split(/\s+/).length / 200));
}
