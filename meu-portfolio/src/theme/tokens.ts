import type { PaletteMode } from '@mui/material'

export const lightTokens = {
  background: {
    default: '#F6F8FC',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#0E1324',
    secondary: '#36415E',
  },
  primary: {
    main: '#4F5DFF',
    dark: '#3E49D6',
    light: '#7E8AFF',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#11BFAE',
    dark: '#0F998D',
    light: '#46D8CB',
    contrastText: '#051412',
  },
  divider: '#DCE2F2',
}

export const darkTokens = {
  background: {
    default: '#0A1020',
    paper: '#121A2E',
  },
  text: {
    primary: '#E9EEFF',
    secondary: '#B8C3E5',
  },
  primary: {
    main: '#7C8BFF',
    dark: '#6270EA',
    light: '#A5B0FF',
    contrastText: '#0A1020',
  },
  secondary: {
    main: '#2AD4C1',
    dark: '#22A999',
    light: '#62E4D4',
    contrastText: '#041715',
  },
  divider: '#2A3552',
}

export function getModeTokens(mode: PaletteMode) {
  return mode === 'light' ? lightTokens : darkTokens
}
