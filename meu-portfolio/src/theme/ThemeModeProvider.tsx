import {
  CssBaseline,
  ThemeProvider,
  type PaletteMode,
} from '@mui/material'
import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { createAppTheme } from './theme'
import { ThemeModeContext } from './ThemeModeContext'
const STORAGE_KEY = 'portfolio-theme-mode'

export function ThemeModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<PaletteMode>('light')

  useEffect(() => {
    const storedMode = window.localStorage.getItem(STORAGE_KEY) as PaletteMode | null
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode)
      return
    }
    setMode('light')
  }, [])

  const toggleMode = () => {
    setMode((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode],
  )

  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
