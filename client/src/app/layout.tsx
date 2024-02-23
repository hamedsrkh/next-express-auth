import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import MuiProvider from '@/providers/MuiProvider'
import Header from '@/components/global/Header'
import AuthProvider from '@/providers/AuthProvider'
import ThemeProvider from '@/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Next Mui Chat app',
  description: ''
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
    <AuthProvider>
      <MuiProvider>
        <ThemeProvider>
          <body>
          <Header />
          <main>
            {children}
          </main>
          </body>
        </ThemeProvider>
      </MuiProvider>
    </AuthProvider>
    </html>
  )
}
