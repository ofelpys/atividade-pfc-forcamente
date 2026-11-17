export const sources = {
  ministerio: {
    label:
      "Guia de Atividade Física para a População Brasileira — Ministério da Saúde",
    url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf",
  },
  oms: {
    label: "Recomendações de atividade física — Organização Mundial da Saúde",
    url: "https://www.who.int/europe/news-room/fact-sheets/item/everyday-actions-for-better-health-who-recommendations",
  },
  cdc: {
    label: "Getting Started with Physical Activity — CDC",
    url: "https://www.cdc.gov/healthy-weight-growth/physical-activity/getting-started.html",
  },
  acsm: {
    label: "Resistance Training Guidelines Update — ACSM",
    url: "https://acsm.org/resistance-training-guidelines-update-2026/",
  },
};

export const articles = [
  {
    slug: "primeiros-passos",
    category: "Primeiros passos",
    number: "01",
    title: "Primeiros passos na musculação: comece com clareza",
    summary:
      "Uma rotina possível, orientação adequada e tempo para aprender fazem diferença no começo.",
    time: "3 min de leitura",
    lead: "O primeiro treino não precisa ser perfeito. Entender o movimento e criar uma rotina que caiba na sua semana é um começo mais sustentável.",
    sections: [
      {
        title: "Faça do começo uma etapa de aprendizado",
        text: "Conheça os aparelhos, peça orientação sobre ajustes e reserve tempo para praticar a execução. Escolher uma carga que permita controlar o movimento ajuda a aprender antes de avançar.",
      },
      {
        title: "Construa constância",
        text: "O Guia de Atividade Física para a População Brasileira recomenda atividades de fortalecimento muscular em pelo menos dois dias da semana. Isso é uma referência geral; a organização do treino deve considerar sua realidade e orientação profissional.",
      },
      {
        title: "Aumente aos poucos",
        text: "O CDC orienta começar devagar e progredir gradualmente. Registre o que fez e ajuste a rotina com apoio profissional, especialmente se houver alguma condição de saúde.",
      },
    ],
    takeaway: "Comece com uma rotina simples que você consiga repetir.",
    references: [sources.ministerio, sources.cdc],
  },
  {
    slug: "treino-de-forca",
    category: "Treino",
    number: "02",
    title: "O que é treino de força?",
    summary:
      "Entenda a ideia por trás dos movimentos, equipamentos e diferentes formas de resistência.",
    time: "3 min de leitura",
    lead: "Treinar força é realizar movimentos contra uma resistência. Essa resistência pode vir de pesos, máquinas, elásticos ou do próprio corpo.",
    sections: [
      {
        title: "Mais de um caminho",
        text: "A atualização de diretrizes do ACSM destaca que o treino pode ser adaptado aos objetivos e preferências da pessoa. Máquinas, pesos livres e exercícios com o peso do corpo podem fazer parte de uma rotina bem planejada.",
      },
      {
        title: "Movimentos antes de números",
        text: "Para iniciantes, vale reconhecer padrões como agachar, empurrar e puxar. Na biblioteca desta atividade, cada exercício aparece com seu grupo e uma orientação introdutória.",
      },
      {
        title: "O papel da orientação",
        text: "Um profissional de Educação Física pode adequar exercícios, carga e frequência ao seu caso. Conteúdo educativo ajuda a fazer perguntas melhores, mas não substitui acompanhamento individual.",
      },
    ],
    takeaway:
      "O melhor ponto de partida é o que você consegue praticar com segurança e regularidade.",
    references: [sources.acsm, sources.ministerio],
  },
  {
    slug: "progressao-gradual",
    category: "Treino",
    number: "03",
    title: "Progressão: evoluir sem pular etapas",
    summary:
      "O progresso pode aparecer na técnica, na regularidade e na organização do treino.",
    time: "4 min de leitura",
    lead: "Aumentar a carga é apenas uma forma de perceber evolução. Aprender a executar um movimento e manter a rotina também contam.",
    sections: [
      {
        title: "Observe o processo",
        text: "Anotar exercícios, séries, repetições e carga ajuda a lembrar o que foi feito. Esses números têm contexto: o volume calculado sozinho não mostra a qualidade do treino.",
      },
      {
        title: "Mude uma coisa por vez",
        text: "O CDC recomenda progressão gradual ao começar uma atividade física. Mudanças pequenas facilitam observar como o corpo responde e conversar com um profissional quando surgirem dúvidas.",
      },
      {
        title: "Respeite sua condição",
        text: "Dor persistente, limitações ou condições de saúde pedem avaliação individual. Adapte a prática com apoio profissional em vez de seguir uma fórmula pronta.",
      },
    ],
    takeaway:
      "Evolução consistente começa com atenção ao movimento e à recuperação.",
    references: [sources.cdc, sources.acsm],
  },
  {
    slug: "forca-e-aerobico",
    category: "Saúde",
    number: "04",
    title: "Musculação e atividade aeróbica: papéis diferentes",
    summary:
      "As recomendações gerais incluem fortalecimento e também movimento aeróbico ao longo da semana.",
    time: "3 min de leitura",
    lead: "Caminhar, pedalar e fazer musculação podem conviver na mesma rotina. Cada atividade contribui de um modo.",
    sections: [
      {
        title: "Duas recomendações complementares",
        text: "Para adultos, a OMS recomenda 150 a 300 minutos semanais de atividade aeróbica moderada ou 75 a 150 minutos de atividade vigorosa. Também recomenda fortalecimento muscular em pelo menos dois dias da semana.",
      },
      {
        title: "Não confunda as medidas",
        text: "Os minutos de atividade aeróbica não representam minutos obrigatórios de musculação. As recomendações são gerais e podem ser adaptadas às necessidades individuais.",
      },
      {
        title: "Encontre espaço na semana",
        text: "Começar com uma quantidade possível de movimento e aumentar aos poucos ajuda a transformar a atividade física em hábito.",
      },
    ],
    takeaway:
      "Fortalecimento e atividade aeróbica são partes complementares de uma vida ativa.",
    references: [sources.oms, sources.ministerio],
  },
];

export const exercises = [
  {
    name: "Agachamento livre",
    group: "Pernas",
    pattern: "Agachar",
    image: "/images/agachamento.jpg",
    alt: "Pessoa demonstrando agachamento livre",
    equipment: "Peso corporal ou barra",
    intro: "Movimento de agachar com participação de quadris e joelhos.",
    attention:
      "Aprenda a amplitude e o alinhamento com orientação antes de aumentar a carga.",
  },
  {
    name: "Leg press",
    group: "Pernas",
    pattern: "Empurrar",
    image: "/images/leg-press.jpg",
    alt: "Equipamento de leg press",
    equipment: "Máquina",
    intro: "Exercício de empurrar a plataforma com as pernas.",
    attention:
      "Ajuste banco e amplitude com um profissional; evite perder o controle do movimento.",
  },
  {
    name: "Supino com barra",
    group: "Peito",
    pattern: "Empurrar",
    image: "/images/supino.jpg",
    alt: "Barra e banco usados no supino",
    equipment: "Barra e banco",
    intro: "Movimento de empurrar com foco no tronco e nos braços.",
    attention:
      "Peça ajuda para posicionar o banco e, quando necessário, para acompanhar a barra.",
  },
  {
    name: "Remada com halter",
    group: "Costas",
    pattern: "Puxar",
    image: "/images/remada.jpg",
    alt: "Pessoa demonstrando remada com halter",
    equipment: "Halter",
    intro: "Movimento de puxar que trabalha a região das costas.",
    attention:
      "Priorize o controle do tronco e peça orientação sobre a trajetória do halter.",
  },
  {
    name: "Puxada frontal",
    group: "Costas",
    pattern: "Puxar",
    image: "/images/puxada.jpg",
    alt: "Máquina usada para puxada frontal",
    equipment: "Máquina",
    intro: "Puxada em aparelho com ênfase nos músculos das costas.",
    attention:
      "Ajuste o banco e use uma carga que permita conduzir a barra sem impulso excessivo.",
  },
  {
    name: "Desenvolvimento com halteres",
    group: "Ombros",
    pattern: "Empurrar",
    image: "/images/desenvolvimento.jpg",
    alt: "Halteres usados em exercício para ombros",
    equipment: "Halteres",
    intro: "Movimento de empurrar os halteres acima da linha dos ombros.",
    attention:
      "Converse com um profissional sobre a posição mais confortável para seus ombros.",
  },
];

export const quizQuestions = [
  {
    question:
      "Segundo as recomendações gerais, em quantos dias da semana adultos devem incluir fortalecimento muscular?",
    options: [
      "Todos os dias",
      "Pelo menos dois dias",
      "Uma vez por mês",
      "Só nos fins de semana",
    ],
    answer: 1,
    explanation:
      "O Guia do Ministério da Saúde e a OMS indicam fortalecimento muscular em pelo menos dois dias da semana para adultos.",
  },
  {
    question: "Qual é uma boa forma de começar uma rotina de atividade física?",
    options: [
      "Aumentar tudo de uma vez",
      "Ignorar o descanso",
      "Começar aos poucos e progredir",
      "Copiar o treino de outra pessoa",
    ],
    answer: 2,
    explanation:
      "O CDC recomenda começar devagar e aumentar o tempo ou a intensidade gradualmente.",
  },
  {
    question:
      "Qual destas opções pode oferecer resistência em um treino de força?",
    options: [
      "Somente máquinas",
      "Somente barras",
      "Peso corporal, elásticos ou pesos",
      "Somente corrida",
    ],
    answer: 2,
    explanation:
      "O ACSM descreve diferentes formas de resistência, incluindo peso corporal, faixas e equipamentos.",
  },
  {
    question:
      "A recomendação de 150 a 300 minutos semanais se refere principalmente a qual atividade?",
    options: [
      "Musculação obrigatória",
      "Atividade aeróbica moderada",
      "Alongamento",
      "Treino de abdômen",
    ],
    answer: 1,
    explanation:
      "A OMS usa essa faixa para atividade aeróbica moderada. Fortalecimento muscular é uma recomendação complementar.",
  },
  {
    question:
      "Se você tem uma condição de saúde que afeta a prática de exercícios, qual é o caminho mais adequado?",
    options: [
      "Seguir qualquer treino da internet",
      "Treinar com dor",
      "Pedir orientação para adaptar a prática",
      "Parar toda atividade sem avaliação",
    ],
    answer: 2,
    explanation:
      "A orientação profissional ajuda a adaptar o treino às necessidades e condições individuais.",
  },
];
