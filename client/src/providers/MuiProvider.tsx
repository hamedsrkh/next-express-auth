import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { ReactNode } from 'react'

function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      {children}
    </AppRouterCacheProvider>
  )
}

export default MuiProvider
