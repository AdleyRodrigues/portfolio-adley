import { IconButton, Tooltip } from '@mui/material'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import { useThemeMode } from './useThemeMode'

export function ThemeToggleButton() {
  const { mode, toggleMode } = useThemeMode()
  const isDark = mode === 'dark'

  return (
    <Tooltip title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
      <IconButton
        size="small"
        onClick={toggleMode}
        sx={{
          border: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: (theme) => theme.palette.background.paper,
        }}
      >
        {isDark ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  )
}
