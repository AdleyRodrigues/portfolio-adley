import { Helmet } from 'react-helmet-async'
import { Box, Container, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Button } from '../components/ui/Button'
import { analyticsEvents, projects, siteUrl } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projetos | Adley Rodrigues de Castro</title>
        <meta
          name="description"
          content="Seleção de projetos com contexto, decisões técnicas, trade-offs e impacto para o negócio."
        />
        <link rel="canonical" href={`${siteUrl}/projetos`} />
      </Helmet>

      <SkipLink />
      <SiteHeader />
      <Box component="main" id="conteudo-principal">
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 8, md: 10 } }}>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.24em' }}>
            Projetos
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
          <Typography variant="h1" sx={{ mt: 1.5, fontSize: 'clamp(2rem,4.2vw,3rem)', letterSpacing: '-0.02em' }}>
            Cases e entregas relevantes
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }}>
          <Typography color="text.secondary" sx={{ mt: 1.6, maxWidth: 780, lineHeight: 1.75 }}>
            Esta página mantém um highlight reel com até 5 projetos para facilitar triagem de recrutadores, tech leads e
            CTOs.
          </Typography>
        </motion.div>

        <motion.div
          style={{ marginTop: 36, display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <ProjectCard project={project} compact />
            </motion.div>
          ))}
        </motion.div>

        <Stack sx={{ mt: 4.5 }}>
          <Button as="a" href="/#contato" onClick={() => trackEvent(analyticsEvents.contactEmailClick)}>
            Vamos conversar sobre uma oportunidade
          </Button>
        </Stack>
        </Container>
      </Box>
      <SiteFooter />
    </>
  )
}
