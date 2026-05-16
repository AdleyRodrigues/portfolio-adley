import { AppBar, Box, Container, Stack, Link as MuiLink } from '@mui/material'
import { analyticsEvents, navigation, socialLinks } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { Button } from './ui/Button'
import { motion } from 'framer-motion'
import { ThemeToggleButton } from '../theme/ThemeToggleButton'
import { glassSurface } from '../theme/glass'

export function SiteHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={(theme) => ({
        ...glassSurface(theme, 'strong'),
        position: 'sticky',
        top: 0,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Container
        maxWidth={false}
        sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <MuiLink href="/" underline="none" color="text.primary" sx={{ fontWeight: 800, fontSize: 14, letterSpacing: '-0.02em' }}>
          Adley Rodrigues de Castro
        </MuiLink>

        <Stack direction="row" spacing={3.2} component="nav" aria-label="Navegação principal" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navigation.map((item) => (
            <Box
              component={motion.a}
              key={item.label}
              href={item.href}
              sx={{ color: 'text.secondary', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
              whileHover={{ y: -1.5 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </Box>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <ThemeToggleButton />
          <Button
            as="a"
            href="/Adley-Rodrigues-de-Castro-Senior-Frontend-Developer.pdf"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="small"
            onClick={() => trackEvent(analyticsEvents.resumeDownload)}
          >
            Baixar CV
          </Button>
        </Stack>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4 },
          pb: 1.2,
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          gap: 2,
          overflowX: 'auto',
        }}
      >
        {navigation.map((item) => (
          <Box
            component={motion.a}
            key={item.label}
            href={item.href}
            sx={{
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: 12,
            }}
            whileHover={{ y: -1 }}
          >
            {item.label}
          </Box>
        ))}
        <Box
          component={motion.a}
          href={socialLinks.company}
          target="_blank"
          rel="noreferrer"
          sx={{
            ml: 'auto',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
            color: 'text.secondary',
            fontWeight: 600,
            fontSize: 12,
          }}
          onClick={() => trackEvent(analyticsEvents.companyClick)}
          whileHover={{ y: -1 }}
        >
          Guidetech
        </Box>
      </Container>
    </AppBar>
  )
}
