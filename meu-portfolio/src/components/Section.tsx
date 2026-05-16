import type { PropsWithChildren, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Box, Container, Typography } from '@mui/material'
import { fadeIn, fadeInUp, staggerContainer } from '../lib/motion'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
}>

export function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      style={{ scrollMarginTop: 96 }}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Box sx={{ borderTop: (theme) => `1px solid ${theme.palette.divider}`, py: { xs: 9, md: 11 } }}>
        <Container
          maxWidth={false}
          component={motion.div}
          sx={{
            display: 'grid',
            gap: { xs: 6, lg: 10 },
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(280px, 0.9fr) minmax(0, 1.7fr)' },
            px: { xs: 2, sm: 4, md: 6 },
          }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Box
            component={motion.div}
            variants={fadeInUp}
            sx={{
              display: 'grid',
              gap: 2,
              position: { lg: 'sticky' },
              top: { lg: 96 },
              height: 'fit-content',
            }}
          >
            {eyebrow ? (
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ fontWeight: 700, letterSpacing: '0.26em', fontSize: '0.7rem' }}
              >
                {eyebrow}
              </Typography>
            ) : null}
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1.1 }}>
              {title}
            </Typography>
            {description ? (
              <Typography color="text.secondary" sx={{ maxWidth: 560, lineHeight: 1.8 }}>
                {description}
              </Typography>
            ) : null}
            {actions}
          </Box>

          <Box component={motion.div} variants={fadeInUp} sx={{ display: 'grid', gap: 3 }}>
            {children}
          </Box>
        </Container>
      </Box>
    </motion.section>
  )
}
