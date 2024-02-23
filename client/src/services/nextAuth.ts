import { getServerSession } from 'next-auth'
import { authOptions } from '@/config/authOptions'

export async function serverAuth() {
  return await getServerSession(authOptions)
}
