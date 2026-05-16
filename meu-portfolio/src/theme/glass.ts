import type { CSSObject, Theme } from '@mui/material/styles'

export type GlassVariant = 'default' | 'strong' | 'floating'

export function glassSurface(theme: Theme, variant: GlassVariant = 'default'): CSSObject {
  const isLight = theme.palette.mode === 'light'

  const settings = {
    default: {
      backgroundColor: isLight ? 'rgba(255,255,255,0.1)' : 'rgba(17,24,43,0.34)',
      borderColor: isLight ? 'rgba(255,255,255,0.5)' : 'rgba(160,178,230,0.2)',
      boxShadow: isLight ? '0 20px 38px -30px rgba(18,30,62,0.26)' : '0 20px 40px -30px rgba(2,6,17,0.62)',
      blur: 24,
      saturate: 220,
    },
    strong: {
      backgroundColor: isLight ? 'rgba(255,255,255,0.05)' : 'rgba(14,20,38,0.32)',
      borderColor: isLight ? 'rgba(255,255,255,0.42)' : 'rgba(160,178,230,0.24)',
      boxShadow: isLight ? '0 20px 42px -30px rgba(18,30,62,0.3)' : '0 24px 46px -32px rgba(2,6,17,0.68)',
      blur: 28,
      saturate: 235,
    },
    floating: {
      backgroundColor: isLight ? 'rgba(255,255,255,0.12)' : 'rgba(14,20,38,0.4)',
      borderColor: isLight ? 'rgba(255,255,255,0.5)' : 'rgba(160,178,230,0.28)',
      boxShadow: isLight ? '0 20px 32px -22px rgba(26,39,74,0.28)' : '0 20px 34px -20px rgba(2,6,17,0.72)',
      blur: 26,
      saturate: 225,
    },
  }[variant]

  return {
    backgroundColor: settings.backgroundColor,
    border: `1px solid ${settings.borderColor}`,
    boxShadow: settings.boxShadow,
    backdropFilter: `blur(${settings.blur}px) saturate(${settings.saturate}%)`,
    WebkitBackdropFilter: `blur(${settings.blur}px) saturate(${settings.saturate}%)`,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 1,
      borderRadius: 'inherit',
      pointerEvents: 'none',
      background: isLight
        ? 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.001))'
        : 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.006))',
    },
    '& > *': {
      position: 'relative',
      zIndex: 1,
    },
  }
}
