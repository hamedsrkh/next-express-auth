import { Typography } from '@mui/material'
import RegisterForm from '@/app/(authentication)/register/RegisterForm'

const Register = () => {

  return (
    <>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <RegisterForm />
    </>
  )
}

export default Register
