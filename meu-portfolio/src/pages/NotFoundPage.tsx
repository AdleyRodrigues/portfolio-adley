import { motion } from 'framer-motion'
import { Box, Container, Stack, Typography } from '@mui/material'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { SkipLink } from '../components/SkipLink'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <Box component="main" id="conteudo-principal">
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 10, md: 14 }, textAlign: 'center', maxWidth: 980 }}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.2em' }}>
            404
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <Typography variant="h1" sx={{ mt: 2, fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.02em' }}>
            Página não encontrada
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Typography color="text.secondary" sx={{ mt: 1.6, lineHeight: 1.7 }}>
            O caminho solicitado não existe. Você pode voltar para a home ou acessar os projetos.
          </Typography>
        </motion.div>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Button as="a" href="/">
            Ir para home
          </Button>
          <Button as="a" href="/projetos" variant="ghost">
            Ver projetos
          </Button>
        </Stack>
        </Container>
      </Box>
      <SiteFooter />
    </>
  )
}
