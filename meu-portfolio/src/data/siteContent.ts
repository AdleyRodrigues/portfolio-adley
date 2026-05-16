import type { EducationItem, Project, TimelineItem } from '../types/site'

export const siteUrl = 'https://portfolio-adley.vercel.app'

export const navigation = [
  { label: 'Guidetech', href: '/#guidetech' },
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
    slug: 'fitbank-onboarding-kpi',
    title: 'Onboarding PF/PJ White-label no FitBank',
    headline: 'Migração de fluxo crítico para React com arquitetura assíncrona.',
    summary:
      'Modernização da abertura de conta PF/PJ com foco em experiência, confiabilidade e escala para dezenas de bancos digitais.',
    context:
      'A plataforma white-label do FitBank atendia múltiplas unidades de negócio e precisava substituir um fluxo legado em CSHTML.',
    challenge:
      'Reduzir fricção de onboarding sem perder compliance e evitando perda de dados ao longo do formulário multi-etapas.',
    solution:
      'Reestruturei o fluxo em React + TypeScript + Material UI, com persistência incremental, upload de documentos e monitoramento assíncrono de aprovações.',
    impact:
      'Melhora percebida de UX/UI pelos usuários finais e base pronta para evolução contínua em cerca de 50 operações white-label.',
    stack: ['React', 'TypeScript', 'Material UI', 'REST API', 'SQL Server'],
    role: 'Arquiteto de Software',
    metric: '~50 operações white-label',
    coverGradient: 'linear-gradient(120deg, rgba(79,93,255,0.35), rgba(17,191,174,0.26))',
    featured: true,
    links: [
      {
        label: 'Contexto profissional',
        href: '/projetos/fitbank-onboarding-kpi',
      },
    ],
  },
  {
    slug: 'design-system-dashboard-react',
    title: 'Padrões de Front-End e Dashboards de RH',
    headline: 'Padronização de UI e dados para decisões operacionais.',
    summary:
      'Construção de dashboards e padrões de componentização em React para o app gerencial da Febracis.',
    context:
      'A plataforma precisava consolidar informação de recrutamento, onboarding e desempenho em interfaces claras para gestão.',
    challenge:
      'Evoluir velocidade de entrega sem degradar consistência visual, acessibilidade e manutenção do código.',
    solution:
      'Liderei padrões de componentização em TypeScript, revisão de código e integração de dashboards com APIs REST.',
    impact:
      'Maior previsibilidade de entrega no front-end e melhor leitura de indicadores de RH para áreas de negócio.',
    stack: ['React', 'TypeScript', 'REST API', 'Dashboards', 'Code Review'],
    role: 'Desenvolvedor Front-End Sênior',
    metric: 'Frente de Front-End liderada',
    coverGradient: 'linear-gradient(120deg, rgba(124,139,255,0.32), rgba(171,94,255,0.24))',
    featured: true,
    links: [
      {
        label: 'Ver estudo de caso',
        href: '/projetos/design-system-dashboard-react',
      },
    ],
  },
  {
    slug: 'chat-ai-integration',
    title: 'Chat Assíncrono e Integração com IA',
    headline: 'Automação de suporte com IA em fluxo operacional real.',
    summary:
      'Implantação de chat interno assíncrono com integração de IA para reduzir carga operacional do suporte.',
    context:
      'No app gerencial da Febracis, havia demanda por comunicação interna e respostas mais rápidas em rotinas de suporte.',
    challenge:
      'Criar experiência de conversação útil sem comprometer o fluxo de trabalho do time e a confiabilidade do sistema.',
    solution:
      'Implementei chat assíncrono em React e integrei API da Anthropic para automação de conversas em cenários recorrentes.',
    impact:
      'Menor esforço manual no suporte e ganho de velocidade para triagem e encaminhamento de solicitações internas.',
    stack: ['React', 'TypeScript', 'APIs', 'IA', 'Gestão de Estado'],
    role: 'Desenvolvedor Front-End Sênior',
    metric: 'Automação de atendimento interno',
    coverGradient: 'linear-gradient(120deg, rgba(42,212,193,0.34), rgba(92,179,255,0.24))',
    featured: true,
    links: [
      {
        label: 'Ver estudo de caso',
        href: '/projetos/chat-ai-integration',
      },
    ],
  },
  {
    slug: 'pipeline-cypress-ci',
    title: 'Pipeline E2E com Cypress',
    headline: 'Qualidade contínua com menos regressão em produção.',
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
    stack: ['Cypress', 'Azure DevOps', 'CI/CD'],
    role: 'Tech Lead',
    metric: 'Menos regressão em produção',
    coverGradient: 'linear-gradient(120deg, rgba(255,122,122,0.3), rgba(255,189,102,0.22))',
    featured: false,
    links: [{ label: 'Detalhes em breve', href: '/projetos' }],
  },
  {
    slug: 'sql-read-write-separation',
    title: 'Separação de leitura/escrita no SQL Server',
    headline: 'Escalabilidade operacional para dashboards white-label.',
    summary:
      'Redesenho do consumo de dados para aliviar carga do banco principal.',
    context:
      'Consultas analíticas no dashboard afetavam estabilidade operacional.',
    challenge:
      'Preservar confiabilidade sem bloquear evolução de funcionalidades.',
    solution:
      'Liderança da migração de leitura para banco secundário com estratégia de isolamento de carga.',
    impact:
      'Eliminação de travamentos operacionais e redução de custo de infraestrutura.',
    stack: ['SQL Server', 'Arquitetura de Dados', 'Performance'],
    role: 'Tech Lead',
    metric: 'Operação estabilizada',
    coverGradient: 'linear-gradient(120deg, rgba(102,142,255,0.28), rgba(124,139,255,0.24))',
    featured: false,
    links: [{ label: 'Detalhes em breve', href: '/projetos' }],
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
  'Engenheiro de Software Sênior e Tech Lead com 5+ anos em produtos de alta exigência, especialmente nos setores financeiro e educacional. Minha trajetória combina liderança técnica, arquitetura pragmática e execução hands-on com React, TypeScript, C#/.NET, APIs e SQL Server para transformar requisitos de negócio em soluções escaláveis.'

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
  instagramClick: 'instagram_click',
  companyInstagramClick: 'company_instagram_click',
  companyClick: 'company_click',
} as const
