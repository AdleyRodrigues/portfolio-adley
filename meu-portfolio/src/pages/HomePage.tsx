import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { GitHubAnalytics } from '../components/GitHubAnalytics'
import { Button } from '../components/ui/Button'
import { Tag } from '../components/ui/Tag'
import {
  about,
  analyticsEvents,
  education,
  githubUsername,
  proofStrip,
  projects,
  recruiterTags,
  siteUrl,
  socialLinks,
  timeline,
} from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { fadeInUp, staggerContainer } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
const impactStats = [
  { value: '3+', label: 'Cases críticos destacados' },
  { value: '4+', label: 'Anos de experiência em software' },
  { value: 'Projetos sob medida', label: 'Sites, apps e sistemas para negócio' },
  { value: '5', label: 'Especialistas na operação Guidetech' },
]
const guidetechPillars = [
  {
    icon: <IntegrationInstructionsRoundedIcon sx={{ fontSize: 20 }} />,
    title: 'Soluções sob medida',
    description: 'Desenvolvimento de sites, apps e sistemas alinhados ao fluxo real do negócio.',
  },
  {
    icon: <PaidRoundedIcon sx={{ fontSize: 20 }} />,
    title: 'Orçamento transparente',
    description: 'Escopo, prazo e investimento claros desde o início, sem surpresa no processo.',
  },
  {
    icon: <HandshakeRoundedIcon sx={{ fontSize: 20 }} />,
    title: 'Consultoria estratégica',
    description: 'Posicionamento técnico e apoio de ponta a ponta para vender mais no digital.',
  },
]
const sameAsLinks = [socialLinks.linkedin, socialLinks.instagram, socialLinks.company, socialLinks.github].filter(
  (link) => !link.includes('SEU-USUARIO'),
)

const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Adley Rodrigues de Castro',
    jobTitle: 'Senior Front-End Developer',
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      'Acessibilidade',
      'Web Performance',
      'Front-End Architecture',
    ],
    sameAs: sameAsLinks,
  },
}

export function HomePage() {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      if (shouldReduceMotion || !heroRef.current) {
        return
      }

      gsap.fromTo(
        '.hero-copy > *',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        '.hero-proof',
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: 'power3.out',
        },
      )

      gsap.to('.hero-shape', {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      })
    },
    { scope: heroRef, dependencies: [shouldReduceMotion] },
  )

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Adley Rodrigues de Castro | Senior Front-End Developer | React e TypeScript</title>
        <meta
          name="description"
          content="Desenvolvedor Front-End Sênior com base full-stack e experiência em React, TypeScript, arquitetura front-end, acessibilidade e performance."
        />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Adley Rodrigues de Castro | Senior Front-End Developer" />
        <meta
          property="og:description"
          content="React, TypeScript, arquitetura front-end, acessibilidade, performance e produtos complexos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og/adley-portfolio.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(profileJsonLd)}</script>
      </Helmet>

      <SkipLink />
      <SiteHeader />

      <main id="conteudo-principal">
        <Box
          ref={heroRef}
          component="section"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            py: { xs: 8, md: 11 },
          }}
        >
          <Box
            aria-hidden
            className="hero-shape"
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              left: -90,
              top: -100,
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(124,139,255,0.30), rgba(42,212,193,0.16))',
              filter: 'blur(42px)',
            }}
          />
          <Box
            aria-hidden
            className="hero-shape"
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              right: -70,
              top: 72,
              width: 290,
              height: 290,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(124,139,255,0.24), rgba(42,212,193,0.14))',
              filter: 'blur(42px)',
            }}
          />

          <Container
            maxWidth={false}
            sx={{
              position: 'relative',
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 5, lg: 7 },
                gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.25fr) minmax(330px, 0.75fr)' },
                alignItems: 'stretch',
              }}
            >
              <Box className="hero-copy">
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.28em', fontWeight: 700 }}>
                    Senior Front-End
                  </Typography>
                  <Typography variant="h1" sx={{ mt: 1.3, fontSize: { xs: '2.3rem', sm: '3.25rem', lg: '4.1rem' }, maxWidth: 920 }}>
                    Transformo complexidade de produto em interfaces claras, rápidas e confiáveis.
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 780, fontSize: { xs: '1.02rem', md: '1.14rem' }, lineHeight: 1.75 }}>
                    Sou Adley Rodrigues de Castro, Engenheiro de Software Sênior com atuação full-stack e foco em front-end.
                    Trabalho com React, TypeScript, C#/.NET e arquitetura de soluções para conectar qualidade técnica,
                    experiência do usuário e resultado de negócio.
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 3, flexWrap: 'wrap' }}>
                    {['React', 'TypeScript', 'C#/.NET', 'Arquitetura Front-End', 'Performance'].map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </Stack>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4, alignItems: { sm: 'center' } }}>
                    <Button as="a" href="#projetos" onClick={() => trackEvent(analyticsEvents.heroPrimaryCtaClick)}>
                      Ver projetos
                    </Button>
                    <Button
                      as="a"
                      href="/Adley-Rodrigues-de-Castro-Senior-Frontend-Developer.pdf"
                      target="_blank"
                      rel="noreferrer"
                      variant="ghost"
                      onClick={() => trackEvent(analyticsEvents.resumeDownload)}
                    >
                      Baixar currículo
                    </Button>
                  </Stack>
                </Box>

                <Paper
                  className="hero-proof"
                  variant="outlined"
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3.2,
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'light' ? 'rgba(255,255,255,0.86)' : 'rgba(18,26,46,0.86)',
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      pointerEvents: 'none',
                      position: 'absolute',
                      insetInline: 42,
                      top: -24,
                      height: 92,
                      borderRadius: 999,
                      background: 'linear-gradient(90deg, rgba(124,139,255,0.20), rgba(42,212,193,0.24))',
                      filter: 'blur(26px)',
                    }}
                  />
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.18em', fontWeight: 700 }}>
                    Proof strip
                  </Typography>
                  <Stack spacing={1.3} sx={{ mt: 1.6, position: 'relative' }}>
                    {proofStrip.map((item) => (
                      <Paper
                        key={item}
                        variant="outlined"
                        sx={{
                          px: 1.6,
                          py: 1,
                          borderRadius: 2,
                          bgcolor: (theme) =>
                            theme.palette.mode === 'light' ? 'rgba(255,255,255,0.7)' : 'rgba(18,26,46,0.74)',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item}
                        </Typography>
                      </Paper>
                    ))}
                  </Stack>
                </Paper>
            </Box>
          </Container>
        </Box>

        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 3, md: 4 } }}>
          <Paper
            component={motion.section}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            variant="outlined"
            sx={{
              p: { xs: 2.2, md: 3 },
              borderRadius: 3,
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? 'rgba(255,255,255,0.9)' : 'rgba(18,26,46,0.8)',
            }}
          >
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.2em', fontWeight: 700 }}>
              Impacto direto
            </Typography>
            <Typography variant="h4" sx={{ mt: 0.7, fontSize: { xs: '1.45rem', md: '1.85rem' }, maxWidth: 980 }}>
              Menos decoração, mais prova de valor: clareza técnica, entrega e resultado.
            </Typography>

            <Box
              component="ul"
              sx={{
                mt: 2.2,
                mb: 0,
                p: 0,
                listStyle: 'none',
                display: 'grid',
                gap: 1.2,
                gridTemplateColumns: { xs: '1fr', md: 'repeat(4, minmax(0, 1fr))' },
              }}
            >
              {impactStats.map((item) => (
                <Paper key={item.label} component="li" variant="outlined" sx={{ p: 1.4, borderRadius: 2.2 }}>
                  <Typography variant="h6">{item.value}</Typography>
                  <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                    {item.label}
                  </Typography>
                </Paper>
              ))}
            </Box>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.2} useFlexGap sx={{ mt: 2.2, flexWrap: 'wrap' }}>
              <Button as="a" href="#projetos" onClick={() => trackEvent(analyticsEvents.heroPrimaryCtaClick)}>
                Ver estudos de caso
              </Button>
              <Button
                as="a"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<WhatsAppIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.whatsappClick)}
              >
                Conversar no WhatsApp
              </Button>
              <Button
                as="a"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<LinkedInIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.linkedinClick)}
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href={socialLinks.company}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<BusinessRoundedIcon fontSize="small" />}
                endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.companyClick)}
              >
                Guidetech
              </Button>
              <Button
                as="a"
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<InstagramIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.instagramClick)}
              >
                Instagram
              </Button>
            </Stack>
          </Paper>
        </Container>

        <Box
          id="github"
          component="section"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            py: { xs: 7, md: 9 },
          }}
        >
          <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
            <Stack spacing={2.3}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.24em', fontWeight: 700 }}>
                GitHub Analytics
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 980 }}>
                Sua presença técnica em destaque, com dados ao vivo e prova social.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 960, lineHeight: 1.8 }}>
                Integração com API pública do GitHub para mostrar evolução, atividade e stack real de forma mais impactante
                para recrutadores e clientes.
              </Typography>
            </Stack>

            <Box sx={{ mt: 3.2 }}>
              <GitHubAnalytics username={githubUsername} />
            </Box>

            <Paper variant="outlined" sx={{ mt: 2.2, p: 2.3, borderRadius: 2.8 }}>
              <Typography variant="h6">Widgets do seu GitHub README</Typography>
              <Stack spacing={1.2} sx={{ mt: 1.5 }}>
                <Box
                  component="img"
                  src={`https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=58A6FF&center=true&vCenter=true&width=900&lines=Senior+Software+Engineer;Tech+Lead+%7C+Software+Architect;React+%7C+.NET+%7C+Clean+Architecture`}
                  alt="Typing SVG com headline profissional"
                  loading="lazy"
                  sx={{ width: '100%', borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}` }}
                />
                <Box
                  component="img"
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true`}
                  alt="GitHub Streak"
                  loading="lazy"
                  sx={{ width: '100%', borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}` }}
                />
                <Box
                  component="img"
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=tokyo-night&hide_border=true&area=true`}
                  alt="GitHub Contribution Graph"
                  loading="lazy"
                  sx={{ width: '100%', borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}` }}
                />
                <Box
                  component="img"
                  src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=nord&no-frame=true&column=7&margin-w=12`}
                  alt="GitHub Trophies"
                  loading="lazy"
                  sx={{ width: '100%', borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}` }}
                />
              </Stack>
            </Paper>
          </Container>
        </Box>

        <Section
          id="guidetech"
          eyebrow="Guidetech"
          title="Software house focada em crescimento digital"
          description="A Guidetech é minha frente de serviços para projetos sob medida, com foco em execução prática, comunicação clara e entrega orientada a resultado."
        >
          <Box
            component="ul"
            sx={{
              p: 0,
              m: 0,
              listStyle: 'none',
              display: 'grid',
              gap: 1.2,
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            }}
          >
            {guidetechPillars.map((pillar) => (
              <Paper key={pillar.title} component="li" variant="outlined" sx={{ p: 2, borderRadius: 2.4 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.8 }}>
                  <Box sx={{ color: 'primary.main', display: 'inline-flex' }}>{pillar.icon}</Box>
                  <Typography variant="h6" sx={{ fontSize: '1.02rem' }}>
                    {pillar.title}
                  </Typography>
                </Stack>
                <Typography color="text.secondary" sx={{ fontSize: 14, lineHeight: 1.7 }}>
                  {pillar.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Button
              as="a"
              href={socialLinks.company}
              target="_blank"
              rel="noreferrer"
              startIcon={<BusinessRoundedIcon fontSize="small" />}
              endIcon={<OpenInNewRoundedIcon fontSize="small" />}
              onClick={() => trackEvent(analyticsEvents.companyClick)}
            >
              Visitar site da Guidetech
            </Button>
            <Button
              as="a"
              href={socialLinks.companyInstagram}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              startIcon={<InstagramIcon fontSize="small" />}
              onClick={() => trackEvent(analyticsEvents.companyInstagramClick)}
            >
              Instagram Guidetech
            </Button>
            <Button
              as="a"
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              startIcon={<WhatsAppIcon fontSize="small" />}
              onClick={() => trackEvent(analyticsEvents.whatsappClick)}
            >
              Falar sobre projeto
            </Button>
          </Stack>
        </Section>

        <Section
          id="projetos"
          eyebrow="Projetos em destaque"
          title="Cases onde entreguei clareza técnica com resultado de negócio."
          description="Uma seleção objetiva dos projetos que melhor representam minha atuação em front-end sênior."
        >
          <motion.div
            style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.slug} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          <Box
            component={Link}
            to="/projetos"
            sx={{
              display: 'inline-flex',
              fontWeight: 700,
              color: 'text.primary',
              textUnderlineOffset: '4px',
            }}
          >
            Ver todos os projetos
          </Box>
        </Section>

        <Section
          id="sobre"
          eyebrow="Sobre"
          title="Arquitetura, execução e liderança em ambientes exigentes."
          description={about}
        >
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h5">Skills e tags para recrutadores</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
              {recruiterTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Stack>
          </Paper>
        </Section>

        <Section
          id="timeline"
          eyebrow="Timeline"
          title="Progressão de carreira com foco em impacto técnico."
          description="Da base em suporte e operação à liderança técnica em ambientes complexos de produto."
        >
          <Stack component="ol" spacing={2.2} sx={{ p: 0, m: 0, listStyle: 'none' }}>
            {timeline.map((item) => (
              <Paper key={item.period} component="li" variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em', fontWeight: 700 }}>
                  {item.period}
                </Typography>
                <Typography variant="h5" sx={{ mt: 0.8 }}>
                  {item.role}
                </Typography>
                <Typography color="text.secondary">{item.company}</Typography>
                <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.6 }}>
                  {item.highlights.map((highlight) => (
                    <Typography component="li" key={highlight} color="text.secondary" sx={{ mb: 0.8 }}>
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Section>

        <Section
          id="formacao"
          eyebrow="Formação acadêmica"
          title="Base técnica estruturada e aplicada ao mundo real."
          description="Formação em computação e sistemas, combinando fundamentos sólidos com experiência prática em projetos."
        >
          <Stack component="ol" spacing={2.2} sx={{ p: 0, m: 0, listStyle: 'none' }}>
            {education.map((item) => (
              <Paper key={`${item.institution}-${item.period}`} component="li" variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em', fontWeight: 700 }}>
                  {item.period}
                </Typography>
                <Typography variant="h5" sx={{ mt: 0.8 }}>
                  {item.institution}
                </Typography>
                <Typography color="text.secondary">{item.course}</Typography>
                <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.6 }}>
                  {item.highlights.map((highlight) => (
                    <Typography component="li" key={highlight} color="text.secondary" sx={{ mb: 0.8 }}>
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Section>

        <Section
          id="writing"
          eyebrow="Writing"
          title="Insights técnicos em formato curto."
          description="A seção de artigos está em preparação para a v1. Os cases já trazem decisões e trade-offs reais."
        >
          <Paper variant="outlined" sx={{ p: 3, borderStyle: 'dashed', borderRadius: 3 }}>
            <Typography color="text.secondary">
              Em breve: notas sobre arquitetura front-end, acessibilidade, performance e decisões de produto.
            </Typography>
          </Paper>
        </Section>

        <Section
          id="contato"
          eyebrow="Contato"
          title="Se você precisa elevar a camada front-end sem perder pragmatismo, vamos conversar."
        >
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography color="text.secondary">
              Respondo com agilidade para oportunidades sérias em Front-End Sênior, React, TypeScript e liderança
              técnica.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.2 }}>
              Também desenvolvo projetos freelancer pela Guidetech, minha software house em fase inicial.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2.5 }}>
              <Button
                as="a"
                href={socialLinks.email}
                startIcon={<EmailRoundedIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.contactEmailClick)}
              >
                Falar comigo por e-mail
              </Button>
              <Button
                as="a"
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<WhatsAppIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.whatsappClick)}
              >
                WhatsApp
              </Button>
              <Button
                as="a"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<LinkedInIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.linkedinClick)}
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<InstagramIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.instagramClick)}
              >
                Instagram
              </Button>
              <Button
                as="a"
                href={socialLinks.companyInstagram}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<InstagramIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.companyInstagramClick)}
              >
                Instagram Guidetech
              </Button>
              <Button
                as="a"
                href={socialLinks.company}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                startIcon={<BusinessRoundedIcon fontSize="small" />}
                endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                onClick={() => trackEvent(analyticsEvents.companyClick)}
              >
                Guidetech
              </Button>
            </Stack>
          </Paper>
        </Section>
      </main>

      <SiteFooter />
    </>
  )
}
