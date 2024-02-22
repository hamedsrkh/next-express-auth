'use client'
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';
import RegisterForm from "@/app/auth/register/RegisterForm";

const Register = () => {

    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: (theme) => theme.spacing(3),
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                borderRadius: '10px',
            }}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <RegisterForm/>
            </Box>
        </Container>
    );
};

export default Register;
