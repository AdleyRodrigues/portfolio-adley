import { createContext } from 'react'

export type PaletteMode = 'light' | 'dark'

export type ThemeModeContextType = {
  mode: PaletteMode
  toggleMode: () => void
}

export const ThemeModeContext = createContext<ThemeModeContextType | null>(null)
