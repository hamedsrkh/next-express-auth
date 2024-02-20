import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {login} from "@/services/auth";

const handler = NextAuth({
    pages: {
        signIn: "/auth/login",
        newUser: "auth/register",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                let {email, password} = credentials as {email: string, password: string}
                const res = await login({email: email, password: password})
                const user = await res.json()
                console.log(user)
                if (res.ok && user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token
            return session
        },

    }
})

export { handler as GET, handler as POST }