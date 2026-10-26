import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { ThemeModeContext, type PaletteMode } from './ThemeModeContext'

const STORAGE_KEY = 'portfolio-theme-mode'

export function ThemeModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<PaletteMode>('light')

  useEffect(() => {
    const storedMode = window.localStorage.getItem(STORAGE_KEY) as PaletteMode | null
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode)
      return
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setMode(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

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

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  )
}
