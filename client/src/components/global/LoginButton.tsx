'use client'

import Link from 'next/link'
import { Button } from '@mui/material'
import React from 'react'
import { CustomTheme } from '@/theme'
import { useSession, signOut } from 'next-auth/react'

function LoginButton() {
  const { data: session, status } = useSession()
  return (
    <>
      {status !== 'authenticated' ? (
          <>
            <Link href="/login" passHref>
              <Button sx={{ color: CustomTheme.palette.primary.contrastText }}>Login</Button>
            </Link>
            <Link href="/register" passHref>
              <Button sx={{ color: CustomTheme.palette.primary.contrastText }} variant="outlined">Register</Button>
            </Link>
          </>

        ) :
        (<>
          <Link href="/dashboard" passHref>
            <Button sx={{ color: CustomTheme.palette.primary.contrastText }} variant="outlined">Dashboard</Button>
          </Link>
          <Button sx={{ color: CustomTheme.palette.primary.contrastText }} onClick={() => signOut()}>Logout</Button>
        </>)
      }
    </>
  )
}

export default LoginButton