import NextAuth, { Awaitable, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/services/auth'
import jwt from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'


export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
    newUser: 'auth/register'
  },
  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token as JWT, secret)
    },
    async decode({ secret, token }) {
      return jwt.verify(token as string, secret) as Awaitable<JWT | null>
    }
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        let { email, password } = credentials as { email: string, password: string }
        const res = await login({ email, password })
        const user = await res.json()
        if (res.ok && user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      const { id, name, email, accessToken } = token as typeof session.user
      session.user = { id, name, email, accessToken }
      return session
    }

  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }