'use client'

import { Container,Typography, Box } from '@mui/material';
import LoginForm from "@/app/auth/login/LoginForm";

const Login = () => {
    return (
        <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'calc(100vh - 64px)', justifyContent: 'center' }}>
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
                    Login
                </Typography>
                <LoginForm/>
            </Box>
        </Container>
    );
};

export default Login;
