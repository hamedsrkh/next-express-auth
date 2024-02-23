'use client'

import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {signIn} from "next-auth/react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signIn('credentials', {
            email,
            password,
        })
    };
    return <form onSubmit={handleSubmit} noValidate>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{mt: 3, mb: 2}}
        >
            Login
        </Button>
    </form>

}

export default LoginForm