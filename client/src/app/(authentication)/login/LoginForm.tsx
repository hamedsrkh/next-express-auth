'use client'

import { Button, TextField } from '@mui/material'
import React from 'react'
import { signIn } from 'next-auth/react'
import { object, string } from 'yup'
import { useFormik } from 'formik'

const LoginFormValidationSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string().required('Password is required'),
})

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormValidationSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      await signIn('credentials', {
        email,
        password,
      })
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginForm
