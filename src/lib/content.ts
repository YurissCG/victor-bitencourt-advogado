// ---------------------------------------------------------------------------
// Conteúdo central do site da Bitencourt Advocacia.
//
// Campos marcados com "FICTÍCIO" são dados ilustrativos inventados para
// preencher o layout, pois não foram fornecidos. Devem ser substituídos por
// informações reais e validadas (inclusive junto à OAB) antes da publicação
// oficial do site.
// ---------------------------------------------------------------------------

export const firm = {
  name: "Bitencourt Advocacia",
  lawyerName: "Victor Bitencourt",
  lawyerTitle: "Advogado",
  oab: "OAB/MG 000.000", // FICTÍCIO: número da OAB inventado, substituir pelo real
  tagline: "Advocacia consultiva e contenciosa",
  phoneDisplay: "(31) 99222-2092",
  phoneWhatsApp: "5531992222092",
  email: "contato@bitencourtadvocacia.com.br", // FICTÍCIO: e-mail institucional inventado
  address: {
    street: "Rua Cricaré, 75",
    city: "Belo Horizonte",
    state: "MG",
    zip: "31680-030",
    full: "Rua Cricaré, 75, Belo Horizonte, MG, 31680-030",
  },
  hours: [
    { day: "Segunda a sexta", time: "9h às 18h" }, // FICTÍCIO: horário inventado
    { day: "Sábado", time: "Mediante agendamento" }, // FICTÍCIO
  ],
  founded: 2016, // FICTÍCIO: ano de fundação inventado
  yearsOfExperience: 9, // FICTÍCIO
  casesHandled: "500+", // FICTÍCIO
  satisfactionRate: "98%", // FICTÍCIO
  social: {
    instagram: "https://instagram.com/victorbitencourt", // FICTÍCIO: perfil inventado
  },
};

export function waLink(message: string) {
  return `https://wa.me/${firm.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  default: "Olá! Vim pelo site da Bitencourt Advocacia e gostaria de falar sobre o meu caso.",
  consulta: "Olá! Gostaria de agendar uma consulta com o Dr. Victor Bitencourt.",
  area: (area: string) => `Olá! Gostaria de saber mais sobre atuação em ${area}.`,
};

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "familia",
    title: "Direito de Família",
    short: "Está passando por uma separação, disputa de guarda ou pensão e não sabe por onde começar?",
    description:
      "Condução humanizada de divórcios, partilha de bens, guarda e regulamentação de convivência, pensão alimentícia, união estável e inventários, sempre buscando a solução menos desgastante para a família.",
    bullets: ["Divórcio consensual e litigioso", "Guarda e convivência familiar", "Pensão alimentícia", "Inventário e partilha de bens"],
  },
  {
    slug: "trabalhista",
    title: "Direito Trabalhista",
    short: "Foi demitido, não recebeu o que tinha direito ou vive uma situação de pressão no trabalho?",
    description:
      "Atuação para empregados e empresas em verbas rescisórias, horas extras, assédio moral, acordos e reclamações trabalhistas, com foco em prevenção de passivos e defesa estratégica em juízo.",
    bullets: ["Reclamações trabalhistas", "Verbas rescisórias e horas extras", "Assédio moral e acidente de trabalho", "Consultoria preventiva para empresas"],
  },
  {
    slug: "empresarial",
    title: "Direito Empresarial",
    short: "Contratos mal redigidos ou riscos societários que podem custar caro ao seu negócio?",
    description:
      "Suporte jurídico completo para empresas de todos os portes: contratos, societário, recuperação de crédito, compliance e prevenção de litígios que possam colocar o negócio em risco.",
    bullets: ["Elaboração e revisão de contratos", "Constituição e alteração societária", "Recuperação de crédito", "Compliance e prevenção de litígios"],
  },
  {
    slug: "civel",
    title: "Direito Cível",
    short: "Prejuízo, cobrança indevida ou contrato descumprido pedindo reparação?",
    description:
      "Defesa de direitos em ações de indenização, cobrança, contratos, questões consumeristas e imobiliárias, com atuação estratégica tanto na esfera consultiva quanto contenciosa.",
    bullets: ["Ações de indenização e reparação de danos", "Direito do consumidor", "Contratos e cobranças", "Questões imobiliárias"],
  },
  {
    slug: "criminal",
    title: "Direito Criminal",
    short: "Investigação, inquérito ou processo criminal exigindo uma defesa imediata?",
    description:
      "Defesa criminal em todas as fases: investigação, inquérito policial, processo e execução penal, com atendimento ágil e discreto em casos que exigem urgência.",
    bullets: ["Defesa em inquéritos e processos", "Acompanhamento em audiências", "Habeas corpus e medidas urgentes", "Execução penal"],
  },
  {
    slug: "previdenciario",
    title: "Direito Previdenciário",
    short: "Benefício negado pelo INSS ou aposentadoria que não sai do papel?",
    description:
      "Planejamento e revisão de aposentadorias, auxílios por incapacidade, pensões e demais benefícios previdenciários, com análise detalhada do histórico contributivo.",
    bullets: ["Aposentadorias e planejamento previdenciário", "Auxílio-doença e benefícios por incapacidade", "Revisão de benefícios", "Recursos administrativos e judiciais"],
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    title: "Diagnóstico inicial",
    description: "Você conta o que está acontecendo e recebe uma primeira orientação clara sobre seus direitos e os caminhos possíveis.",
  },
  {
    title: "Estratégia sob medida",
    description: "Definimos juntos o melhor caminho, seja acordo, negociação ou ação judicial, com prazos e custos explicados antes de começar.",
  },
  {
    title: "Acompanhamento próximo",
    description: "Você acompanha cada etapa em linguagem simples, com retorno rápido sempre que surgir uma dúvida.",
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Consultoria preventiva",
    description: "Orientação jurídica antes que o problema aconteça, reduzindo riscos para você, sua família ou sua empresa.",
  },
  {
    title: "Atuação contenciosa",
    description: "Representação estratégica em processos judiciais, do primeiro grau aos tribunais superiores, quando o litígio é inevitável.",
  },
  {
    title: "Elaboração e revisão de contratos",
    description: "Contratos claros e seguros, redigidos para proteger seus interesses e evitar disputas futuras.",
  },
  {
    title: "Mediação e acordos",
    description: "Busca por soluções rápidas e equilibradas fora do tribunal sempre que isso for do interesse do cliente.",
  },
];

export const differentials = [
  { title: "Atendimento personalizado", description: "Cada caso é ouvido com atenção antes de qualquer estratégia ser definida." },
  { title: "Experiência profissional", description: "Anos de atuação consultiva e contenciosa em diferentes áreas do Direito." },
  { title: "Comunicação clara", description: "Explicações em linguagem acessível, sem juridiquês desnecessário." },
  { title: "Estratégia jurídica individualizada", description: "Nenhum caso é tratado como padrão. Cada plano é desenhado sob medida." },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  area: string;
  image: string;
};

// Fotos de banco de imagens gratuito (Unsplash), usadas apenas como ilustração de apoio.
export const articles: Article[] = [
  {
    slug: "como-funciona-o-divorcio-consensual",
    title: "Como funciona o divórcio consensual no Brasil",
    excerpt: "Entenda os requisitos, o passo a passo e em quanto tempo um divórcio de comum acordo pode ser concluído.",
    area: "Direito de Família",
    image: "https://images.unsplash.com/photo-1713942590288-1468a2d88ee4",
  },
  {
    slug: "direitos-na-rescisao-trabalhista",
    title: "Quais são seus direitos em uma rescisão de contrato de trabalho",
    excerpt: "Um guia rápido sobre verbas rescisórias, aviso prévio e o que verificar antes de assinar o termo de rescisão.",
    area: "Direito Trabalhista",
    image: "https://images.unsplash.com/photo-1632152053640-da3a8b3ee812",
  },
  {
    slug: "quando-vale-a-pena-revisar-um-contrato",
    title: "Quando vale a pena revisar um contrato empresarial",
    excerpt: "Cláusulas que merecem atenção redobrada antes de fechar negócio e como evitar prejuízos futuros.",
    area: "Direito Empresarial",
    image: "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Você entra em contato pelo WhatsApp ou telefone, conta brevemente o seu caso e agendamos um horário, presencial ou online, para uma análise inicial mais detalhada.",
  },
  {
    question: "O escritório atende apenas em Belo Horizonte?",
    answer:
      "O atendimento presencial acontece em Belo Horizonte, mas diversas etapas podem ser conduzidas de forma remota para clientes de outras cidades e estados.",
  },
  {
    question: "Quanto custa uma consulta ou um processo?",
    answer:
      "Os valores variam conforme a complexidade do caso. Após entender a sua situação, apresentamos um orçamento claro antes de iniciar qualquer trabalho.",
  },
  {
    question: "Quanto tempo demora um processo judicial?",
    answer:
      "O prazo depende da área e da complexidade do caso, da região e do volume de processos na vara responsável. Damos uma estimativa realista logo na análise inicial.",
  },
  {
    question: "É possível resolver meu caso sem entrar na justiça?",
    answer:
      "Sempre que possível, buscamos acordos e soluções extrajudiciais, que costumam ser mais rápidas e menos desgastantes do que um processo judicial.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// FICTÍCIO: depoimentos ilustrativos. Substituir por relatos reais,
// obtidos com autorização expressa do cliente, observadas as normas de
// publicidade da OAB (Provimento 205/2021) antes de publicar.
export const testimonials: Testimonial[] = [
  {
    name: "M. A. S.",
    role: "Cliente na área de Família",
    quote: "Me senti acolhida em um momento muito difícil. O processo foi conduzido com clareza e muito respeito pelo meu tempo.",
  },
  {
    name: "R. T.",
    role: "Cliente na área Empresarial",
    quote: "Suporte jurídico ágil para a minha empresa, com explicações simples sobre decisões que pareciam complicadas.",
  },
  {
    name: "J. P. O.",
    role: "Cliente na área Trabalhista",
    quote: "Acompanhamento próximo do início ao fim do processo, sempre me mantendo informado sobre cada etapa.",
  },
];

export const stats = [
  { value: firm.casesHandled, label: "Casos atendidos" }, // FICTÍCIO
  { value: `${firm.yearsOfExperience}+`, label: "Anos de experiência" }, // FICTÍCIO
  { value: firm.satisfactionRate, label: "Satisfação dos clientes" }, // FICTÍCIO
  { value: "6", label: "Áreas de atuação" },
];

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#areas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
