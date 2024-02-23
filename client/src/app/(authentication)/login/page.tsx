import { Typography } from '@mui/material'
import LoginForm from '@/app/(authentication)/login/LoginForm'
import { serverAuth } from '@/services/nextAuth'
import { redirect } from 'next/navigation'
async function Login() {
  const session = await serverAuth()
  if(session?.user){
    redirect('/dashboard')
  }
  return (
    <>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <LoginForm />
    </>
  )
}

export default Login
