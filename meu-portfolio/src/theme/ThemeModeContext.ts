import { createContext } from 'react'
import type { PaletteMode } from '@mui/material'

export type ThemeModeContextType = {
  mode: PaletteMode
  toggleMode: () => void
}

export const ThemeModeContext = createContext<ThemeModeContextType | null>(null)
