import { createTheme, responsiveFontSizes, type PaletteMode } from '@mui/material'
import { getModeTokens } from './tokens'

export function createAppTheme(mode: PaletteMode) {
  const tokens = getModeTokens(mode)

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1850,
      },
    },
    palette: {
      mode,
      ...tokens,
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 800,
        letterSpacing: '-0.015em',
      },
      h3: {
        fontWeight: 700,
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
        letterSpacing: '-0.01em',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              mode === 'light'
                ? 'radial-gradient(circle at 6% 8%, rgba(124,139,255,0.18), transparent 36%), radial-gradient(circle at 94% 22%, rgba(42,212,193,0.12), transparent 34%)'
                : 'radial-gradient(circle at 8% 10%, rgba(124,139,255,0.2), transparent 38%), radial-gradient(circle at 92% 22%, rgba(42,212,193,0.14), transparent 36%)',
            backgroundAttachment: 'fixed',
          },
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.01ms !important',
              scrollBehavior: 'auto !important',
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            width: 'min(95vw, 1760px)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            paddingInline: 18,
            paddingBlock: 10,
            '&.MuiButton-containedPrimary': {
              boxShadow:
                mode === 'light' ? '0 14px 28px -14px rgba(79,93,255,0.65)' : '0 14px 30px -14px rgba(124,139,255,0.75)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            boxShadow: mode === 'light' ? '0 18px 40px -26px rgba(24,35,66,0.38)' : '0 18px 45px -24px rgba(5,8,20,0.7)',
          },
        },
      },
    },
  })

  return responsiveFontSizes(theme)
}
