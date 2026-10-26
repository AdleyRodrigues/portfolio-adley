import { motion, type Variants } from 'framer-motion'
import { useMemo } from 'react'

export type TextSegment = {
  text: string
  className?: string
}

export type BlurTextProps = {
  text?: string
  segments?: TextSegment[]
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export function BlurText({
  text,
  segments,
  className = '',
  delay = 0,
  stagger = 0.04,
  duration = 0.5,
  as: Component = 'h1',
}: BlurTextProps) {
  // Normalize input into segments
  const normalizedSegments = useMemo<TextSegment[]>(() => {
    if (segments && segments.length > 0) {
      return segments
    }
    if (text) {
      return [{ text }]
    }
    return []
  }, [segments, text])

  // Full raw text for accessible aria-label
  const fullText = useMemo(() => {
    return normalizedSegments.map((s) => s.text).join(' ')
  }, [normalizedSegments])

  // Split each segment into words and calculate global character indexing
  const wordsWithIndices = useMemo(() => {
    let globalCharIndex = 0

    return normalizedSegments.flatMap((segment) => {
      const words = segment.text.trim().split(/\s+/)

      return words.map((word) => {
        const startCharIndex = globalCharIndex
        const chars = Array.from(word).map((char) => {
          const charIndex = globalCharIndex++
          return { char, charIndex }
        })

        return {
          word,
          chars,
          startCharIndex,
          segmentClassName: segment.className,
          isGradient: Boolean(segment.className?.includes('bg-clip-text')),
        }
      })
    })
  }, [normalizedSegments])

  const standardLetterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: (customIndex: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration,
        delay: delay + customIndex * stagger,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const gradientLetterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
    },
    visible: (customIndex: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay: delay + customIndex * stagger,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const gradientWordVariants: Variants = {
    hidden: {
      y: 12,
    },
    visible: (startIndex: number) => ({
      y: 0,
      transition: {
        duration: duration * 1.1,
        delay: delay + startIndex * stagger,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <Component className={className} aria-label={fullText}>
      <span aria-hidden="true" className="inline">
        {wordsWithIndices.map((item, wordIdx) => {
          if (item.isGradient) {
            return (
              <span key={wordIdx} className="inline">
                <motion.span
                  custom={item.startCharIndex}
                  variants={gradientWordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block whitespace-nowrap ${item.segmentClassName || ''}`}
                >
                  {item.chars.map(({ char, charIndex }) => (
                    <motion.span
                      key={charIndex}
                      custom={charIndex}
                      variants={gradientLetterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                {/* Natural spacing between words */}
                {wordIdx < wordsWithIndices.length - 1 && ' '}
              </span>
            )
          }

          return (
            <span key={wordIdx} className="inline">
              <span className={`inline-block whitespace-nowrap ${item.segmentClassName || ''}`}>
                {item.chars.map(({ char, charIndex }) => (
                  <motion.span
                    key={charIndex}
                    custom={charIndex}
                    variants={standardLetterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {/* Natural spacing between words */}
              {wordIdx < wordsWithIndices.length - 1 && ' '}
            </span>
          )
        })}
      </span>
    </Component>
  )
}
