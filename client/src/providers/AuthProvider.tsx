'use client'
import type { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
