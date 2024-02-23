import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/requests/auth'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const res = await login({ email, password })
        const user = await res.json()
        if (res.ok && user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      const { id, name, email, accessToken } = token as typeof session.user
      session.user = { id, name, email, accessToken }
      return session
    },
  },
}
