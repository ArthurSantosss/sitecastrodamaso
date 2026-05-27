export const OFFICE = {
  name: "Castro & Damaso",
  fullName: "Castro & Damaso Advocacia e Consultoria Jurídica",
  city: "Ponte Nova",
  state: "MG",
  address: "Av. Dr. José Grossi, nº 194, Sala 1102, Bairro Guarapiranga",
  cep: "35430-213",
  fullAddress:
    "Av. Dr. José Grossi, nº 194, Sala 1102, Bairro Guarapiranga, Ponte Nova/MG, CEP 35430-213",
  hours: "Segunda a Sexta, das 09h às 18h",
  instagram: "https://www.instagram.com/castroedamaso.adv/",
  instagramHandle: "@castroedamaso.adv",
  googleMyBusinessUrl: "https://share.google/0N4D3fWJDCE6EcrAq",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d-42.9069!3d-20.4153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI0JzU1LjEiUyA0MsKwNTQnMjQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1",
} as const;

export const PARTNERS = [
  {
    name: "Amanda Castro",
    photo: "/amanda.jpg",
    oab: "OAB/MG", // TODO: preencher com número real
    whatsapp: "5531971378863",
    whatsappFormatted: "(31) 97137-8863",
    instagram: "https://instagram.com/amandadecastroadv",
    instagramHandle: "@amandadecastroadv",
    bio: "Advogada com atuação focada em direito civil, família e contencioso cível. Acredita que cada cliente merece atenção integral e estratégias jurídicas construídas sob medida para sua realidade.",
  },
  {
    name: "Manuella Damaso",
    photo: "/manuella.jpg",
    oab: "OAB/MG", // TODO: preencher com número real
    whatsapp: "5531998020864",
    whatsappFormatted: "(31) 99802-0864",
    instagram: "https://instagram.com/manuella.advogada",
    instagramHandle: "@manuella.advogada",
    bio: "Advogada com sólida formação em direito civil e consultoria jurídica empresarial. Combina rigor técnico e escuta ativa para conduzir cada caso com clareza e responsabilidade.",
  },
] as const;

export const PRIMARY_WHATSAPP = PARTNERS[0].whatsapp;

export const WHATSAPP_URL = (
  phone: string = PRIMARY_WHATSAPP,
  message: string = "Olá, gostaria de agendar uma consulta."
) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const PRACTICE_AREAS = [
  {
    title: "Direito Civil",
    icon: "Scale" as const,
    description:
      "Assessoria e representação em questões patrimoniais, obrigações e responsabilidade civil.",
  },

  {
    title: "Direito Previdenciário",
    icon: "Shield" as const,
    description:
      "Aposentadorias, benefícios e revisões junto ao INSS com análise técnica detalhada.",
  },
  {
    title: "Direito Bancário",
    icon: "FileText" as const,
    description:
      "Atuação especializada em demandas bancárias, juros abusivos, revisional de contratos e fraudes.",
  },
] as const;

export const METHODOLOGY = [
  {
    number: "01",
    title: "Análise técnica aprofundada",
    description:
      "Cada caso recebe estudo individualizado antes de qualquer estratégia.",
  },
  {
    number: "02",
    title: "Comunicação clara e contínua",
    description:
      "Você acompanha cada etapa sem precisar decifrar juridiquês.",
  },
  {
    number: "03",
    title: "Atendimento humanizado",
    description:
      "Entendemos que por trás de cada processo existe uma história.",
  },
  {
    number: "04",
    title: "Compromisso ético",
    description:
      "Atuação rigorosamente alinhada ao Código de Ética da OAB.",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "Atendimento atencioso do início ao fim. Me senti realmente ouvida.",
    author: "Cliente do escritório",
  },
  {
    text: "Profissionais que explicam tudo com clareza, sem juridiquês.",
    author: "Cliente do escritório",
  },
  {
    text: "Postura ética e técnica em todas as etapas.",
    author: "Cliente do escritório",
  },
  {
    text: "Fui tratada com respeito e atenção desde o primeiro contato.",
    author: "Cliente do escritório",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Toda primeira consulta é agendada previamente e tem como objetivo entender o seu caso para indicar os melhores caminhos jurídicos.",
  },
  {
    question: "O escritório atende apenas em Ponte Nova?",
    answer:
      "Nossa sede é em Ponte Nova/MG, mas atuamos em toda a região da Zona da Mata mineira e em outros estados quando o caso permite.",
  },
  {
    question: "Vocês fazem atendimento online?",
    answer:
      "Sim. Realizamos atendimentos por videochamada quando o cliente prefere ou quando a distância justifica.",
  },
  {
    question: "Como funciona o honorário?",
    answer:
      "Os honorários são definidos após a análise do caso, conforme a Tabela de Honorários da OAB/MG e a complexidade da demanda.",
  },
  {
    question: "Qual o prazo de retorno após o contato inicial?",
    answer:
      "Respondemos todos os contatos em até 1 dia útil.",
  },
  {
    question: "Vocês atuam em quais áreas do Direito?",
    answer:
      'Atuamos de forma multidisciplinar nas áreas listadas em "Áreas de Atuação", sempre com avaliação prévia da viabilidade técnica do caso.',
  },
] as const;
