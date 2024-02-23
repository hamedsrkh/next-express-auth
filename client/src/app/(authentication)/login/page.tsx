import { Typography } from '@mui/material'
import LoginForm from '@/app/(authentication)/login/LoginForm'
const Login = () => {
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
