"use client"

import Link from "next/link";
import {Button} from "@mui/material";
import React, {useState} from "react";
import { CustomTheme } from "@/theme";

function LoginButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    return (
        <>
            {!isLoggedIn ? (
                <>
                    <Link href="/auth/login" passHref>
                        <Button sx={{color: CustomTheme.palette.primary.contrastText}}>Login</Button>
                    </Link>
                    <Link href="/auth/register" passHref>
                        <Button sx={{color: CustomTheme.palette.primary.contrastText}} variant="outlined">Register</Button>
                    </Link>
                </>
            ) : <Button sx={{color: CustomTheme.palette.primary.contrastText}}>Logout</Button>}
        </>
    )
}

export default LoginButton