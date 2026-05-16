import { useEffect, useState } from 'react'
import { IconButton, useTheme } from '@mui/material'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { glassSurface } from '../theme/glass'
import { analyticsEvents } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'

const VISIBILITY_THRESHOLD = 480

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const theme = useTheme()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > VISIBILITY_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    trackEvent(analyticsEvents.backToTopClick)
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed',
            right: 24,
            bottom: 24,
            zIndex: 1300,
          }}
        >
          <IconButton
            aria-label="Voltar ao topo"
            onClick={handleClick}
            sx={{
              ...glassSurface(theme, 'floating'),
              borderRadius: 999,
              width: 46,
              height: 46,
              color: 'text.primary',
              '&:focus-visible': {
                outline: (focusTheme) => `2px solid ${focusTheme.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
          >
            <KeyboardArrowUpRoundedIcon />
          </IconButton>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
