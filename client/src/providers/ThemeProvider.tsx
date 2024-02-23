import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import { CustomTheme } from '@/theme'

function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MaterialThemeProvider theme={CustomTheme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  )
}

export default ThemeProvider
