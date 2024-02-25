'use client'
import React, { useState } from 'react'
import { object, string } from 'yup'
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import { register } from '@/requests/auth'
import { useFormik } from 'formik'

const RegisterFormValidationSchema = object({
  name: string().required('Name is required'),
  email: string().email('Enter a valid email').required('Email is required'),
  password: string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

function RegisterForm() {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: RegisterFormValidationSchema,
    onSubmit: async ({ email, name, password }, { resetForm }) => {
      const res = await register({ email, password, name })
      if (res.ok) {
        resetForm()
        setShowSnackbar(true)
      }
    },
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
          Register
        </Button>
      </form>
      <Snackbar open={showSnackbar} autoHideDuration={5000}>
        <Alert severity="success" variant="filled">
          User Registered Successfully
        </Alert>
      </Snackbar>
    </>
  )
}

export default RegisterForm
