'use client'

import Link from 'next/link'
import { Button } from '@mui/material'
import React from 'react'
import { CustomTheme } from '@/theme'
import { useSession, signOut } from 'next-auth/react'

const buttonStyle = { color: CustomTheme.palette.primary.contrastText }

function LoginButton() {
  const { status } = useSession()
  return (
    <>
      {status !== 'authenticated' ? (
        <>
          <Link href="/login" passHref>
            <Button sx={buttonStyle}>Login</Button>
          </Link>
          <Link href="/register" passHref>
            <Button sx={buttonStyle} variant="outlined">
              Register
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/dashboard" passHref>
            <Button sx={buttonStyle} variant="outlined">
              Dashboard
            </Button>
          </Link>
          <Button sx={buttonStyle} onClick={() => signOut()}>
            Logout
          </Button>
        </>
      )}
    </>
  )
}

export default LoginButton
