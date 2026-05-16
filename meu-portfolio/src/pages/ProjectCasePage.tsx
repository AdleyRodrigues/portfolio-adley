import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import type { ComponentProps } from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Tag } from '../components/ui/Tag'
import { analyticsEvents, projects, siteUrl } from '../data/siteContent'
import { projectVisuals } from '../data/visualAssets'
import { trackEvent } from '../lib/analytics'
import { glassSurface } from '../theme/glass'
import FitbankCase from '../content/projects/fitbank-onboarding-kpi.mdx'
import DashboardCase from '../content/projects/design-system-dashboard-react.mdx'
import ChatAiCase from '../content/projects/chat-ai-integration.mdx'

const caseBySlug = {
  'fitbank-onboarding-kpi': FitbankCase,
  'design-system-dashboard-react': DashboardCase,
  'chat-ai-integration': ChatAiCase,
}

const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => <Typography variant="h4" sx={{ mt: 4 }} {...props} />,
  h3: (props: ComponentProps<'h3'>) => <Typography variant="h5" sx={{ mt: 3 }} {...props} />,
  p: (props: ComponentProps<'p'>) => <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }} {...props} />,
  ul: (props: ComponentProps<'ul'>) => <Box component="ul" sx={{ mt: 1.5, pl: 3, color: 'text.secondary' }} {...props} />,
}

export function ProjectCasePage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const visual = slug ? projectVisuals[slug] : undefined
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      const progress = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0
      setReadingProgress(progress)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!slug || !project) {
    return <Navigate to="/projetos" replace />
  }

  const CaseBody = caseBySlug[slug as keyof typeof caseBySlug]
  if (!CaseBody) {
    return <Navigate to="/projetos" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study | Adley Rodrigues de Castro</title>
        <meta name="description" content={project.summary} />
        <link rel="canonical" href={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:title" content={`${project.title} | Case Study`} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:url" content={`${siteUrl}/projetos/${project.slug}`} />
        <meta property="og:image" content={`${siteUrl}/og/adley-portfolio.svg`} />
      </Helmet>

      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1300,
          height: 4,
          width: `${readingProgress}%`,
          background: 'linear-gradient(90deg, #4F5DFF, #7C8BFF, #11BFAE)',
        }}
      />
      <SkipLink />
      <SiteHeader />
      <Box component="main" id="conteudo-principal">
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 8, md: 10 }, maxWidth: 1280 }}>
          <Paper
            variant="outlined"
            sx={(theme) => ({
              ...glassSurface(theme, 'strong'),
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 3.5,
              p: { xs: 3, md: 4.5 },
            })}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                insetInline: 0,
                top: -44,
                height: 150,
                backgroundImage: project.coverGradient,
                filter: 'blur(52px)',
              }}
            />
            <Typography variant="overline" color="text.secondary" sx={{ position: 'relative', letterSpacing: '0.16em', fontWeight: 700 }}>
              {project.role}
            </Typography>
            <Typography variant="h2" sx={{ position: 'relative', mt: 1, fontSize: { xs: '2rem', md: '2.8rem' } }}>
              {project.title}
            </Typography>
            <Typography color="text.secondary" sx={{ position: 'relative', mt: 2, fontSize: { xs: '1rem', md: '1.05rem' } }}>
              {project.headline}
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap sx={{ position: 'relative', mt: 2.5, flexWrap: 'wrap' }}>
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ mt: 4, borderRadius: 3.2, p: { xs: 3, md: 4 } }}>
            <MDXProvider components={mdxComponents}>
              <CaseBody />
            </MDXProvider>
          </Paper>

          {visual?.gallery?.length ? (
            <Paper variant="outlined" sx={{ mt: 4, borderRadius: 3, p: { xs: 2.2, md: 3 } }}>
              <Typography variant="h5">Galeria visual do projeto</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Capturas representativas da solução para destacar arquitetura de interface, densidade de informação e
                decisões visuais.
              </Typography>
              <Box
                sx={{
                  mt: 2.2,
                  display: 'grid',
                  gap: 1.4,
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                }}
              >
                {visual.gallery.map((imageSrc, index) => (
                  <Box
                    key={imageSrc}
                    component={motion.img}
                    src={imageSrc}
                    loading="lazy"
                    alt={`Visual ${index + 1} do case ${project.title}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    sx={{
                      width: '100%',
                      borderRadius: 2.3,
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ) : null}

          <Paper variant="outlined" sx={{ mt: 4, borderRadius: 3, p: 3 }}>
            <Typography variant="h5">Links do projeto</Typography>
            <Stack component="ul" spacing={1} sx={{ mt: 2, p: 0, m: 0, listStyle: 'none' }}>
              {project.links.map((link) => (
                <Box component="li" key={link.href}>
                  <Box
                    component="a"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      textDecorationColor: 'divider',
                      textUnderlineOffset: '4px',
                      '&:hover': { textDecorationColor: 'text.primary' },
                    }}
                    onClick={() => trackEvent(analyticsEvents.caseStudyOpen, { slug: project.slug })}
                  >
                    {link.label}
                    {link.href.startsWith('http') ? (
                      <OpenInFullRoundedIcon sx={{ ml: 0.8, fontSize: 16, verticalAlign: 'text-bottom' }} />
                    ) : null}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>

          <Box
            component={Link}
            to="/projetos"
            sx={{
              mt: 3,
              display: 'inline-flex',
              color: 'text.primary',
              fontWeight: 700,
              textUnderlineOffset: '4px',
            }}
          >
            Voltar para todos os projetos
          </Box>
        </Container>
      </Box>
      <SiteFooter />
    </>
  )
}
