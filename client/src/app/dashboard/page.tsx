'use client'
import {Container, Typography} from "@mui/material";
import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session } = useSession()
    return (
        <Container>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="body1">{JSON.stringify(session, null, 4)}</Typography>
        </Container>
    );
}
