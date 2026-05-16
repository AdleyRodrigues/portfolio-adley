import type { Transition, Variants } from 'framer-motion'

export const smoothTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...smoothTransition, duration: 0.35 },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}
