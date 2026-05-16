import { Box, Container, Stack, Typography } from '@mui/material'
import { socialLinks } from '../data/siteContent'
import { motion } from 'framer-motion'
import { glassSurface } from '../theme/glass'

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        ...glassSurface(theme, 'default'),
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 6,
      })}
    >
      <Container
        maxWidth={false}
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'center' },
          justifyContent: 'space-between',
          gap: 1.4,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Adley Rodrigues de Castro. Todos os direitos reservados.
        </Typography>
        <Stack direction="row" spacing={2.2} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Box
            component={motion.a}
            href={socialLinks.email}
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            adleyrc.job@gmail.com
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            WhatsApp
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            LinkedIn
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            Instagram
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.companyInstagram}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            Instagram Guidetech
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.company}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            Guidetech
          </Box>
          <Box
            component={motion.a}
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            sx={{ color: 'text.secondary', textDecoration: 'none', fontWeight: 600 }}
            whileHover={{ y: -1 }}
          >
            GitHub
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
