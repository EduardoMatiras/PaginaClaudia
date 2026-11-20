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
    slug: "natal-e-fim-de-ano-sem-quem-partiu",
    titulo: "Natal e fim de ano sem quem partiu: como atravessar as datas difíceis",
    tituloSeo: "Natal sem quem partiu: como atravessar o fim de ano",
    descricao:
      "O primeiro Natal sem alguém que amamos costuma doer muito. Orientações de uma psicóloga para planejar as festas, lidar com a saudade e honrar quem partiu.",
    resumo:
      "O Natal e a virada de ano costumam intensificar a saudade de quem partiu, especialmente no primeiro ano. Ajuda planejar com antecedência como e com quem passar as datas, permitir-se mudar tradições, incluir a lembrança da pessoa de forma simbólica e respeitar os próprios limites, sem obrigação de parecer feliz.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: [
      "natal sem quem partiu",
      "primeiro natal sem minha mãe",
      "luto no fim de ano",
      "como passar o natal de luto",
      "saudade no natal",
    ],
    secoes: [
      {
        titulo: "Por que as festas doem tanto no luto",
        paragrafos: [
          "Dezembro é um mês de encontros, rituais e lembranças. Tudo isso torna a ausência mais visível: a cadeira vazia na mesa, a receita que só ela fazia, o abraço da meia-noite que não vai acontecer. Ao mesmo tempo, o mundo ao redor pede alegria, e quem está de luto pode se sentir deslocado ou culpado por não acompanhar o clima.",
          "Muitas pessoas relatam que a expectativa antes da data é ainda mais difícil do que o próprio dia. Isso é comum e esperado.",
        ],
      },
      {
        titulo: "Planeje antes, em vez de esperar o dia chegar",
        lista: [
          "Decida com antecedência onde e com quem quer estar. Também é válido escolher ficar mais quieto.",
          "Combine com a família o que será mantido e o que pode mudar neste ano.",
          "Tenha um plano B: poder sair mais cedo ou ter um lugar para se recolher alivia a pressão.",
          "Avise alguém de confiança que este período está difícil e peça companhia, se precisar.",
        ],
      },
      {
        titulo: "Tradições podem mudar",
        paragrafos: [
          "Não existe obrigação de manter tudo como era. Algumas famílias preferem mudar o local da ceia, o horário ou o formato. Outras escolhem manter exatamente igual, como forma de homenagem. As duas escolhas são legítimas, e podem ser diferentes de um ano para outro.",
        ],
      },
      {
        titulo: "Formas de incluir quem partiu",
        lista: [
          "Acender uma vela ou deixar uma foto em um lugar especial.",
          "Preparar o prato preferido da pessoa.",
          "Fazer um brinde ou um momento de silêncio em memória dela.",
          "Contar histórias e lembranças à mesa.",
          "Escrever uma carta para quem partiu.",
          "Fazer uma doação ou uma ação solidária em nome dela.",
        ],
        depois: [
          "Falar de quem partiu costuma aliviar mais do que evitar o assunto. Muitas vezes, todos à mesa estão pensando na mesma pessoa.",
        ],
      },
      {
        titulo: "Respeite seus limites",
        paragrafos: [
          "É possível sentir saudade e, no mesmo dia, rir de uma lembrança ou aproveitar um momento com quem ficou. Sentir alegria não é trair quem partiu. Também é válido não ter vontade de comemorar. Cuide do sono, da alimentação e evite usar o álcool para anestesiar a dor.",
        ],
      },
      {
        titulo: "Quando buscar apoio",
        paragrafos: [
          "Se a aproximação das festas trouxer angústia intensa, isolamento ou a sensação de que não vai dar conta, conversar com uma psicóloga pode ajudar a planejar esse período. Em situação de crise, ligue 188 (CVV, 24 horas) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "É normal não querer comemorar o Natal depois de uma perda?",
        resposta:
          "Sim. É comum não ter vontade de comemorar, principalmente no primeiro ano. Você pode escolher um formato mais simples, ou mesmo não participar, sem culpa.",
      },
      {
        pergunta: "Como falar de quem partiu na ceia sem deixar todos tristes?",
        resposta:
          "Um gesto simples, como um brinde, uma vela ou contar uma lembrança boa, costuma acolher a saudade de todos. Combine antes com a família se preferir.",
      },
    ],
  },
  {
    slug: "luto-na-adolescencia",
    titulo: "Luto na adolescência: sinais e como apoiar",
    tituloSeo: "Luto na adolescência: sinais e como os pais podem ajudar",
    descricao:
      "Como o adolescente vive o luto, sinais de que ele precisa de ajuda e o que pais e familiares podem fazer para apoiar sem pressionar.",
    resumo:
      "Adolescentes vivem o luto de um jeito próprio: podem parecer indiferentes, ficar irritados, se isolar ou buscar apoio mais nos amigos do que na família. Para apoiar, ajuda estar disponível sem forçar conversas, manter alguma rotina, falar com honestidade sobre a perda e buscar acompanhamento psicológico quando os sinais de sofrimento persistem.",
    publicadoEm: "2026-11-20",
    categoria: "Adolescentes",
    palavrasChave: [
      "luto na adolescência",
      "adolescente de luto",
      "como ajudar adolescente no luto",
      "psicóloga para adolescentes",
    ],
    secoes: [
      {
        titulo: "Como o adolescente vive o luto",
        paragrafos: [
          "Na adolescência, a perda acontece em meio a muitas outras mudanças: corpo, identidade, amizades, escola. Por isso, o luto pode aparecer de formas que confundem os adultos. Um adolescente que não chora no velório e volta a sair com os amigos poucos dias depois não está necessariamente bem, nem indiferente.",
          "É comum que ele alterne entre momentos de tristeza intensa e momentos em que parece seguir normalmente. Também é comum que evite falar em casa para não preocupar os pais, especialmente se percebe a família muito abalada.",
        ],
      },
      {
        titulo: "Reações comuns",
        lista: [
          "Irritabilidade, explosões de raiva ou impaciência.",
          "Isolamento no quarto, nas telas ou longe da família.",
          "Dificuldade de concentração e queda no rendimento escolar.",
          "Mudanças no sono e no apetite.",
          "Culpa ou medo de que outras pessoas também morram.",
          "Necessidade de estar mais com os amigos.",
        ],
      },
      {
        titulo: "Como pais e familiares podem ajudar",
        lista: [
          "Estar disponível, sem forçar conversas. Momentos lado a lado, como no carro ou cozinhando, costumam facilitar.",
          "Falar com honestidade sobre o que aconteceu, sem esconder informações importantes.",
          "Mostrar que também sente falta. Ver o adulto expressar a dor autoriza o jovem a sentir.",
          "Manter alguma rotina e os limites de sempre, com flexibilidade.",
          "Avisar a escola, para que professores possam acolher.",
          "Incluir o adolescente nas decisões sobre rituais e homenagens.",
        ],
      },
      {
        titulo: "Sinais de que é hora de buscar ajuda",
        paragrafos: [
          "Vale procurar uma psicóloga se o isolamento, a tristeza ou a irritação persistem por semanas, se há recusa em ir à escola, uso de álcool ou outras drogas, comportamentos de risco ou falas de desesperança.",
          "Se o adolescente falar em morrer ou se machucar, busque ajuda imediata: 188 (CVV) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Meu filho não chorou nem fala da perda. Isso é normal?",
        resposta:
          "Pode ser. Muitos adolescentes expressam o luto de forma indireta ou em outros espaços, como com os amigos. Observe sinais de sofrimento ao longo do tempo e mantenha a porta aberta para conversar.",
      },
      {
        pergunta: "Terapia ajuda adolescentes em luto?",
        resposta:
          "Sim. Ter um espaço próprio e sigiloso, fora de casa, ajuda o adolescente a falar do que sente sem medo de preocupar a família.",
      },
    ],
  },
  {
    slug: "luto-gestacional",
    titulo: "Luto gestacional: a dor de perder um bebê durante a gestação",
    tituloSeo: "Luto gestacional: como lidar com a perda do bebê",
    descricao:
      "A perda gestacional é um luto real, muitas vezes invisível. Como lidar com a dor, com a culpa e com os comentários dos outros, e quando buscar ajuda.",
    resumo:
      "O luto gestacional é a dor pela perda de um bebê durante a gestação ou logo após o nascimento. É um luto real, que envolve o bebê, os planos e o futuro imaginado, mas costuma ser pouco reconhecido pelas pessoas ao redor. Validar essa dor, falar sobre o bebê e buscar apoio, inclusive psicológico, ajuda a atravessar esse momento.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: [
      "luto gestacional",
      "perda gestacional",
      "aborto espontâneo luto",
      "luto perinatal",
      "como superar a perda de um bebê",
    ],
    secoes: [
      {
        titulo: "Um luto que muitas vezes não é visto",
        paragrafos: [
          "Desde o teste positivo, muitas mães e pais começam a construir um vínculo: imaginam o rosto, escolhem nomes, fazem planos. Quando a gestação é interrompida, perde-se o bebê e também todo esse futuro.",
          "Mesmo assim, é comum ouvir frases como “foi melhor assim”, “logo vem outro” ou “pelo menos foi no começo”. Ditas com a intenção de consolar, elas podem fazer a dor parecer exagerada ou ilegítima. Na psicologia, esse tipo de perda é um exemplo de luto não reconhecido.",
        ],
      },
      {
        titulo: "Reações comuns",
        lista: [
          "Tristeza profunda e choro frequente.",
          "Culpa e busca por algo que poderia ter sido feito diferente.",
          "Raiva, inclusive do próprio corpo.",
          "Dificuldade de conviver com gestantes ou bebês.",
          "Medo em relação a uma nova gestação.",
          "Sensação de solidão, quando o assunto é evitado pelas pessoas.",
        ],
        depois: [
          "Na grande maioria das vezes, a perda gestacional não é causada por nada que a mãe fez ou deixou de fazer. A culpa é uma reação comum do luto, mas não corresponde aos fatos.",
        ],
      },
      {
        titulo: "O que pode ajudar",
        lista: [
          "Dar nome ao bebê, se fizer sentido para vocês.",
          "Guardar lembranças, como exames, fotos ou objetos.",
          "Criar um ritual de despedida ou homenagem.",
          "Falar sobre a perda com pessoas que acolhem.",
          "Respeitar o tempo do casal: cada um pode viver o luto de um jeito.",
          "Esperar o momento certo, para vocês, antes de pensar em nova gestação.",
        ],
      },
      {
        titulo: "O luto do pai e da família",
        paragrafos: [
          "Os pais também vivem esse luto, embora muitas vezes sejam vistos apenas como apoio da mãe. Avós e irmãos também podem sentir a perda. Reconhecer a dor de todos ajuda a família a se apoiar mutuamente.",
        ],
      },
      {
        titulo: "Quando procurar ajuda",
        paragrafos: [
          "Se a tristeza, a culpa ou a ansiedade persistem e dificultam a rotina, se surgem crises de pânico ou se o medo impede de pensar no futuro, o acompanhamento psicológico pode ajudar. Em situação de crise, ligue 188 (CVV) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "Perder um bebê no início da gestação também é luto?",
        resposta:
          "Sim. O vínculo não depende do tempo de gestação. A dor é legítima em qualquer momento da perda.",
      },
      {
        pergunta: "O que dizer para alguém que perdeu um bebê?",
        resposta:
          "Algo simples como “sinto muito pela perda do seu bebê, estou aqui” acolhe mais do que tentar explicar ou minimizar. Se souber o nome do bebê, use-o.",
      },
    ],
  },
  {
    slug: "luto-pela-morte-do-pai-ou-da-mae",
    titulo: "Luto pela morte do pai ou da mãe: como lidar com essa perda",
    tituloSeo: "Luto pela morte do pai ou da mãe: como lidar",
    descricao:
      "Perder o pai ou a mãe muda a forma como nos vemos no mundo. Reações comuns, desafios práticos e emocionais e quando buscar ajuda psicológica.",
    resumo:
      "Perder o pai ou a mãe é uma das perdas mais marcantes da vida, em qualquer idade. Além da saudade, ela pode trazer culpa, conflitos entre irmãos, a sensação de perder a própria referência e a responsabilidade por decisões práticas. Permitir-se viver o luto, dividir tarefas e manter o vínculo por meio das lembranças ajuda a atravessar esse processo.",
    publicadoEm: "2026-11-20",
    categoria: "Luto",
    palavrasChave: [
      "luto pela morte da mãe",
      "luto pela morte do pai",
      "como superar a morte da mãe",
      "perdi meu pai",
      "saudade da mãe que faleceu",
    ],
    secoes: [
      {
        titulo: "Uma perda que muda o lugar da gente no mundo",
        paragrafos: [
          "Pai e mãe costumam ser as primeiras referências de cuidado e de história. Quando partem, muitas pessoas descrevem a sensação de ficar sem chão ou de se tornar, de repente, a geração mais velha da família. Isso acontece mesmo quando a perda era esperada, após uma longa doença, e mesmo quando a relação era difícil.",
        ],
      },
      {
        titulo: "Reações comuns",
        lista: [
          "Saudade intensa, especialmente em momentos em que você ligaria para ele ou para ela.",
          "Culpa por coisas ditas, não ditas ou por decisões sobre o tratamento.",
          "Alívio, quando houve muito sofrimento antes da morte, seguido de culpa por sentir alívio.",
          "Sentimentos ambivalentes, quando a relação tinha conflitos.",
          "Cansaço físico e emocional, principalmente para quem foi cuidador.",
        ],
        depois: [
          "Sentimentos contraditórios são comuns no luto e não diminuem o amor ou a importância da relação.",
        ],
      },
      {
        titulo: "Os desafios práticos",
        paragrafos: [
          "Inventário, documentos, a casa, os objetos pessoais, o cuidado com o pai ou a mãe que ficou: as tarefas práticas chegam junto com a dor e podem gerar tensões entre irmãos. Algumas orientações:",
        ],
        lista: [
          "Não é preciso decidir tudo de uma vez. O que não é urgente pode esperar.",
          "Divida as tarefas e combine as decisões em conversas com todos.",
          "Respeite que cada irmão vive o luto de um jeito e em um ritmo.",
          "Separar os objetos pessoais pode ser feito aos poucos, quando houver condições.",
        ],
      },
      {
        titulo: "Formas de manter o vínculo",
        paragrafos: [
          "Cozinhar uma receita da família, contar histórias para os filhos, guardar uma carta, visitar um lugar especial ou carregar adiante valores que ele ou ela ensinou: são formas de manter viva a relação. A psicologia do luto reconhece esse vínculo contínuo como parte saudável do processo.",
        ],
      },
      {
        titulo: "Quando buscar ajuda",
        paragrafos: [
          "Procure apoio psicológico se a dor dificulta a rotina por muito tempo, se a culpa é intensa, se há conflitos familiares difíceis de manejar ou se você foi cuidador e se sente esgotado. Em situação de crise, ligue 188 (CVV) ou 192 (SAMU).",
        ],
      },
    ],
    faq: [
      {
        pergunta: "É normal sentir alívio quando o pai ou a mãe morre após longa doença?",
        resposta:
          "Sim. O alívio geralmente é pelo fim do sofrimento, de quem partiu e de quem cuidava. Ele convive com a saudade e não significa falta de amor.",
      },
      {
        pergunta: "E se a relação com meu pai ou minha mãe era difícil?",
        resposta:
          "O luto também acontece em relações conflituosas e costuma ser mais confuso, com raiva, culpa e tristeza misturadas. A terapia é um bom espaço para elaborar essas emoções.",
      },
    ],
  },
  {
    slug: "como-explicar-a-morte-para-uma-crianca",
    titulo: "Como explicar a morte para uma criança",
    tituloSeo: "Como explicar a morte para uma criança: guia para pais",
    descricao:
      "Como contar para uma criança que alguém morreu: palavras claras, o que evitar, como ela entende a morte em cada idade e como acolher as reações.",
    resumo:
      "Para explicar a morte a uma criança, use palavras simples e verdadeiras, como “morreu” e “o corpo parou de funcionar”, em vez de “dormiu” ou “viajou”. Conte o quanto antes, com alguém de confiança por perto, responda às perguntas com honestidade, deixe a criança expressar o que sente e mantenha a rotina o máximo possível.",
    publicadoEm: "2026-11-20",
    categoria: "Família",
    palavrasChave: [
      "como explicar a morte para uma criança",
      "como contar para criança que alguém morreu",
      "criança e luto",
      "luto infantil",
    ],
    secoes: [
      {
        titulo: "Fale com clareza",
        paragrafos: [
          "A vontade de proteger a criança leva muitos adultos a usar expressões como “a vovó dormiu”, “virou estrelinha” ou “foi viajar”. Essas frases podem gerar medo de dormir, a espera de que a pessoa volte ou confusão sobre o que aconteceu.",
          "É mais acolhedor usar palavras simples e verdadeiras: “O vovô morreu. Quando alguém morre, o corpo para de funcionar: não respira mais, não sente dor, não come. Ele não vai voltar, e é por isso que estamos tristes.” Crenças religiosas da família podem ser compartilhadas junto com essa explicação.",
        ],
      },
      {
        titulo: "Como a criança entende a morte",
        paragrafos: [
          "A compreensão de que a morte é permanente, que acontece com todos os seres vivos e que o corpo deixa de funcionar se desenvolve aos poucos ao longo da infância. Por isso:",
        ],
        lista: [
          "Crianças pequenas podem perguntar várias vezes quando a pessoa vai voltar. Responda com paciência, sempre com a mesma verdade.",
          "É comum que brinquem de morte ou de funeral. É uma forma de elaborar o que aconteceu.",
          "Crianças maiores podem fazer perguntas concretas sobre o corpo, o enterro ou a causa. Responda de forma simples e honesta.",
          "Algumas acham que a morte aconteceu por algo que pensaram ou fizeram. Diga claramente que não foi culpa delas.",
        ],
      },
      {
        titulo: "Como contar",
        lista: [
          "Conte o quanto antes, para que a criança não saiba por outras pessoas.",
          "Escolha um lugar tranquilo, com um adulto de confiança por perto.",
          "Use frases curtas e verifique o que ela entendeu.",
          "Mostre que também está triste. Chorar junto não faz mal à criança.",
          "Pergunte se ela quer participar do velório ou de uma despedida, explicando antes como será.",
        ],
      },
      {
        titulo: "Depois da notícia",
        paragrafos: [
          "Mantenha a rotina de escola, sono e alimentação o máximo possível: ela dá segurança. Avise a escola. Deixe a criança desenhar, escrever ou guardar um objeto de quem partiu. E esteja disponível para as perguntas, que podem voltar semanas ou meses depois.",
        ],
      },
      {
        titulo: "Quando procurar ajuda",
        paragrafos: [
          "Vale buscar orientação profissional se, depois de algumas semanas, a criança apresenta medo intenso de se separar dos pais, regressões importantes (como voltar a fazer xixi na cama), isolamento, agressividade ou queda acentuada na escola. Os próprios pais, também enlutados, podem se beneficiar de apoio psicológico para conseguir cuidar de si e dos filhos.",
        ],
      },
    ],
    faq: [
      {
        pergunta: "A criança deve ir ao velório?",
        resposta:
          "Depende da criança e da família. Se ela quiser ir, explique antes o que vai ver e garanta que um adulto de confiança fique com ela e possa sair se for preciso.",
      },
      {
        pergunta: "Posso chorar na frente do meu filho?",
        resposta:
          "Sim. Ver o adulto triste e explicar o motivo ensina que sentir é permitido. O importante é a criança saber que continua sendo cuidada.",
      },
    ],
  },
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
