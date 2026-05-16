import Box from '@mui/material/Box'

export function SkipLink() {
  return (
    <Box
      component="a"
      href="#conteudo-principal"
      sx={{
        position: 'absolute',
        left: -9999,
        top: 12,
        zIndex: 1400,
        borderRadius: 2,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        px: 2,
        py: 1,
        fontSize: 14,
        fontWeight: 700,
        '&:focus-visible': {
          left: 16,
          outline: 'none',
          boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.light}`,
        },
      }}
    >
      Pular para o conteúdo principal
    </Box>
  )
}
