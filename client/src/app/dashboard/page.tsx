import { Container, Typography } from '@mui/material'
import { redirect } from 'next/navigation'
import { serverAuth } from '@/services/nextAuth'

export default async function Dashboard() {
  const session = await serverAuth()
  if (!session?.user) {
    redirect('/login')
  }
  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">
        {JSON.stringify(session, null, 4)}
      </Typography>
    </Container>
  )
}
