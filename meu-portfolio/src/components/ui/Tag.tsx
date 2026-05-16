import Chip from '@mui/material/Chip'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'

type TagProps = {
  children: ReactNode
  sx?: SxProps<Theme>
}

export function Tag({ children, sx }: TagProps) {
  return (
    <Chip
      size="small"
      label={children}
      variant="outlined"
      sx={[
        {
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'rgba(255,255,255,0.72)' : 'rgba(18,26,46,0.75)'),
          borderColor: 'divider',
          color: 'text.secondary',
          fontWeight: 600,
          '& .MuiChip-label': {
            px: 1.1,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  )
}
