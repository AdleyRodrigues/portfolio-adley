import type { EducationItem, Project, TimelineItem } from '../types/site'

export const siteUrl = 'https://portfolio-adley.vercel.app'

export const navigation = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'GitHub', href: '/#github' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Timeline', href: '/#timeline' },
  { label: 'Formação', href: '/#formacao' },
  { label: 'Contato', href: '/#contato' },
] as const

export const proofStrip = [
  '5+ anos em software',
  'Full-Stack com foco em Front-End',
  'React, TypeScript, C# e .NET',
  'Arquitetura + liderança técnica',
]

export const recruiterTags = [
  'Senior Front-End Developer',
  'React',
  'TypeScript',
  'C#',
  '.NET',
  'Arquitetura Front-End',
  'Acessibilidade',
  'Web Performance',
  'SQL Server',
  'API Integration',
  'Design Systems',
  'CI/CD',
  'Fintech',
]

export const projects: Project[] = [
  {
    slug: 'onboarding-baas',
    title: 'Onboarding White-Label para Core Bancário (BaaS)',
    headline: 'Migração de fluxo crítico para React com arquitetura assíncrona e resiliência de dados.',
    summary:
      'Modernização da abertura de contas com foco em experiência, confiabilidade de preenchimento e escala para mais de 50 instituições financeiras.',
    context:
      'A plataforma white-label de core bancário atendia dezenas de instituições financeiras e precisava substituir um fluxo legado em CSHTML.',
    challenge:
      'Reduzir abandono de onboarding sem comprometer requisitos regulatórios (KYC/AML) e garantindo persistência em formulário multi-etapas.',
    solution:
      'Reestruturei o fluxo em React + TypeScript com gerenciamento de estado resiliente, persistência incremental e monitoramento assíncrono de aprovações.',
    impact:
      'Melhora expressiva na taxa de conversão, zero perda de dados de preenchimento e homologação em mais de 50 operações white-label.',
    stack: ['React', 'TypeScript', 'State Machine', 'REST API', 'SQL Server'],
    role: 'Arquiteto de Software',
    metric: '50+ Operações White-Label',
    duration: '2 anos',
    keyMetrics: [
      { value: '50+', label: 'Operações em Produção' },
      { value: '99.4%', label: 'Conclusão sem Perda' },
      { value: 'Zero', label: 'Perda de Dados em Etapas' },
    ],
    coverGradient: 'linear-gradient(120deg, rgba(79,93,255,0.35), rgba(17,191,174,0.26))',
    featured: true,
    links: [],
  },
  {
    slug: 'design-system-dashboard-react',
    title: 'Design System & Dashboards de Gestão Corporativa',
    headline: 'Padronização de UI e inteligência de dados para decisões operacionais.',
    summary:
      'Construção de dashboards analíticos e biblioteca de componentes em React para plataforma corporativa de gestão de pessoas (Enterprise CorpTech).',
    context:
      'A plataforma corporativa precisava consolidar informação de recrutamento, onboarding e desempenho em interfaces claras para gestão executiva.',
    challenge:
      'Evoluir velocidade de entrega sem degradar consistência visual, acessibilidade e manutenção do código.',
    solution:
      'Liderei padrões de componentização em TypeScript, revisão de código e integração de dashboards analíticos com APIs REST.',
    impact:
      'Maior previsibilidade de entrega no front-end e melhor leitura de indicadores estratégicos para áreas de negócio.',
    stack: ['React', 'TypeScript', 'Design Systems', 'REST API', 'Data Visualization'],
    role: 'Senior Front-End',
    metric: 'Design System Unificado',
    duration: '1 ano',
    keyMetrics: [
      { value: '1.200+', label: 'Usuários Corporativos' },
      { value: '-35%', label: 'Tempo de Carregamento' },
      { value: '100%', label: 'Aderência ao Design System' },
    ],
    coverGradient: 'linear-gradient(120deg, rgba(124,139,255,0.32), rgba(171,94,255,0.24))',
    featured: true,
    links: [],
  },
  {
    slug: 'chat-ai-integration',
    title: 'Copilot de Atendimento com Integração de IA',
    headline: 'Automação inteligente de suporte operacional com IA e mensageria assíncrona.',
    summary:
      'Implantação de chat interno assíncrono com integração de IA para reduzir sobrecarga operacional de suporte.',
    context:
      'Em uma plataforma corporativa com centenas de colaboradores (Enterprise CorpTech), havia demanda por comunicação interna e respostas mais rápidas em rotinas de suporte.',
    challenge:
      'Criar experiência conversacional fluida com histórico confiável e fallback transparente sem degradar performance.',
    solution:
      'Implementei chat assíncrono em React + TypeScript com gerenciamento de estado resiliente e integração de IA generativa para triagem de cenários recorrentes.',
    impact:
      'Redução substancial do tempo de triagem interna e desoneração da equipe em dúvidas repetitivas.',
    stack: ['React', 'TypeScript', 'GenAI Integration', 'WebSockets / Async', 'Tailwind CSS'],
    role: 'Senior Front-End',
    metric: 'Automação de Suporte com IA',
    duration: '6 meses',
    keyMetrics: [
      { value: '60%', label: 'Resoluções Automatizadas' },
      { value: '< 2s', label: 'Latência de Primeira Resposta' },
      { value: '24/7', label: 'Disponibilidade de Triagem' },
    ],
    coverGradient: 'linear-gradient(120deg, rgba(42,212,193,0.34), rgba(92,179,255,0.24))',
    featured: true,
    links: [],
  },
  {
    slug: 'pipeline-cypress-ci',
    title: 'Pipeline de Testes E2E Automatizados com Cypress',
    headline: 'Garantia de qualidade contínua com redução de regressões em release.',
    summary:
      'Estruturação de pipeline automatizado de testes E2E com Cypress em Azure DevOps.',
    context:
      'Demandas de produto cresciam e o time precisava reduzir risco de regressão em mudanças frequentes.',
    challenge:
      'Introduzir disciplina de testes em ambiente de alta pressão de entrega.',
    solution:
      'Defini cenário-base de testes E2E, critérios de execução e integração no pipeline de CI.',
    impact:
      'Aumento de cobertura automatizada e redução de incidentes pós-release.',
    stack: ['Cypress', 'Azure DevOps', 'CI/CD', 'TypeScript'],
    role: 'Tech Lead',
    metric: 'Menos regressão em produção',
    duration: '6 meses',
    keyMetrics: [
      { value: '48+', label: 'Cenários Críticos E2E' },
      { value: '0', label: 'Regressões em Produção' },
      { value: '< 2m', label: 'Execução no Pipeline CI' },
    ],
    coverGradient: 'linear-gradient(120deg, rgba(255,122,122,0.3), rgba(255,189,102,0.22))',
    featured: false,
    links: [],
  },
  {
    slug: 'sql-read-write-separation',
    title: 'Isolamento de Carga & Réplicas de Leitura em Banco de Dados',
    headline: 'Arquitetura de dados resiliente e escalabilidade para painéis analíticos.',
    summary:
      'Redesenho do consumo de dados para aliviar carga do banco principal e isolar consultas analíticas.',
    context:
      'Consultas analíticas no dashboard afetavam estabilidade operacional da camada transacional.',
    challenge:
      'Preservar confiabilidade sem bloquear evolução de funcionalidades analíticas.',
    solution:
      'Liderança da migração de leitura para réplicas secundárias com estratégia de isolamento de carga.',
    impact:
      'Eliminação de travamentos operacionais e redução de custo de infraestrutura.',
    stack: ['SQL Server', 'Arquitetura de Dados', 'Performance', 'Alta Disponibilidade'],
    role: 'Tech Lead',
    metric: 'Operação estabilizada',
    duration: '8 meses',
    keyMetrics: [
      { value: '100%', label: 'Offload de Consultas Analíticas' },
      { value: '0', label: 'Deadlocks Operacionais' },
      { value: '4.8k', label: 'Requisições/s Suportadas' },
    ],
    coverGradient: 'linear-gradient(120deg, rgba(102,142,255,0.28), rgba(124,139,255,0.24))',
    featured: false,
    links: [],
  },
]

export const timeline: TimelineItem[] = [
  {
    period: 'Out/2025 - Atual',
    role: 'Desenvolvedor Front-End Sênior',
    company: 'Febracis - Escola de Negócios',
    highlights: [
      'Liderança de entregas em React + TypeScript para RH, recrutamento e onboarding.',
      'Integração de IA e automação de fluxos internos para reduzir esforço manual.',
      'Padronização de componentes, code review e melhoria de qualidade contínua.',
    ],
  },
  {
    period: 'Ago/2023 - Set/2025',
    role: 'Arquiteto de Software',
    company: 'FitBank 450',
    highlights: [
      'Arquitetura de três projetos simultâneos para três squads.',
      'Migração de onboarding PF/PJ do legado para React/TypeScript.',
      'Integração com validação de identidade para compliance em onboarding digital.',
    ],
  },
  {
    period: 'Ago/2022 - Set/2023',
    role: 'Tech Lead',
    company: 'FitBank 450',
    highlights: [
      'Liderança de squad com cerimônias, decomposição de demandas e mentoring.',
      'Separação de base de leitura/escrita em SQL Server para dashboards.',
      'Pipeline E2E com Cypress no Azure DevOps.',
    ],
  },
  {
    period: 'Jun/2021 - Ago/2022',
    role: 'Desenvolvedor de Software Júnior',
    company: 'FitBank 450',
    highlights: [
      'Atuação full-stack com foco na camada front-end em produtos financeiros.',
      'Implementação de features críticas com integração entre APIs e interface.',
      'Apoio na evolução de padrões de código e estabilidade de entregas.',
    ],
  },
  {
    period: 'Jun/2020 - Jul/2021',
    role: 'Proprietário',
    company: 'Tech Store',
    highlights: [
      'Gestão de operação, atendimento e relacionamento com clientes.',
      'Desenvolvimento de visão de negócio aplicada a produto e serviço.',
    ],
  },
  {
    period: 'Jul/2018 - Dez/2018',
    role: 'Assistente de Manutenção (Estágio)',
    company: 'Inforpeças Joel',
    highlights: [
      'Suporte técnico e manutenção de hardware.',
      'Base prática em diagnóstico, resolução de problemas e atendimento.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    period: 'Jul/2023 - Jun/2025',
    institution: 'UNINTER Centro Universitário Internacional',
    course: 'Análise e Desenvolvimento de Sistemas',
    highlights: [
      'Projetos colaborativos com foco em desenvolvimento de software e banco de dados.',
      'Evolução prática em DevOps, design de sistemas e inteligência artificial.',
    ],
  },
  {
    period: '2019 - 2023',
    institution: 'Universidade Federal do Ceará (UFC)',
    course: 'Bacharelado em Ciências da Computação',
    highlights: [
      'Base forte em algoritmos, estruturas de dados e engenharia de software.',
      'Participação em projetos práticos, grupos de estudo e iniciativas acadêmicas.',
    ],
  },
  {
    period: 'Fev/2016 - Dez/2018',
    institution: 'EEEP Manuel Abdias Evangelista',
    course: 'Técnico em Informática',
    highlights: [
      'Fundamentos de programação web e desenvolvimento de software.',
      'Prática com HTML, CSS, JavaScript, PHP e manutenção de computadores.',
    ],
  },
]

export const about =
  'Engenheiro de Software Sênior e Líder Técnico com mais de 5 anos de experiência projetando e escalando produtos digitais de alta exigência, com foco em Fintech e sistemas corporativos. Minha atuação combina liderança de times, rigor arquitetural e execução prática de ponta a ponta com React, TypeScript e ecossistema .NET, transformando desafios complexos de negócio em plataformas robustas, performáticas e de alta disponibilidade.'

export const socialLinks = {
  github: 'https://github.com/AdleyRodrigues',
  linkedin: 'https://www.linkedin.com/in/adley-castro/',
  instagram: 'https://www.instagram.com/adley.rc/',
  companyInstagram: 'https://www.instagram.com/guidetech_/',
  whatsapp: 'https://wa.me/5588992445274',
  company: 'https://guidetech.vercel.app/',
  email: 'mailto:adleyrc.job@gmail.com?subject=Contato%20profissional%20via%20portf%C3%B3lio',
}

export const githubUsername = 'AdleyRodrigues'

export const analyticsEvents = {
  heroPrimaryCtaClick: 'hero_primary_cta_click',
  resumeDownload: 'resume_download',
  projectCardClick: 'project_card_click',
  caseStudyOpen: 'case_study_open',
  contactEmailClick: 'contact_email_click',
  linkedinClick: 'linkedin_click',
  githubClick: 'github_click',
  whatsappClick: 'whatsapp_click',
  backToTopClick: 'back_to_top_click',
  instagramClick: 'instagram_click',
  companyInstagramClick: 'company_instagram_click',
  companyClick: 'company_click',
} as const
