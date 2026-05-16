import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import type { ReactNode } from 'react'

type ButtonVariant = 'solid' | 'ghost'

type Props = Omit<MuiButtonProps<'a'>, 'variant' | 'children'> & {
  as?: 'button' | 'a'
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({ as = 'button', variant = 'solid', children, sx, ...props }: Props) {
  const muiVariant = variant === 'solid' ? 'contained' : 'outlined'

  return (
    <MuiButton
      component={as}
      variant={muiVariant}
      color="primary"
      sx={[
        {
          fontWeight: 700,
          '&:active': { transform: 'scale(0.98)' },
          ...(variant === 'ghost' && {
            bgcolor: (theme) => theme.palette.background.paper,
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </MuiButton>
  )
}
