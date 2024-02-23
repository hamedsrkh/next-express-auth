import { ReactNode } from 'react'
import { Container, Box } from '@mui/material'

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          borderRadius: '10px',
        }}
      >
        {children}
      </Box>
    </Container>
  )
}

export default AuthLayout
