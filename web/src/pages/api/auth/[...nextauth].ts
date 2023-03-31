import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

if (!process.env.NEXTAUTH_SECRET) {
    throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials) {

                const { email, password } = credentials as {
                    email: string
                    password: string
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                if (!user) {
                    throw new Error('Credenciales incorrectas. Intente nuevamente.')
                }

                return user
            }
        })
    ],
    pages: {
        signIn: '/signin',
        error: '/error'
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            /* Step 1: update the token based on the user object */
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            /* Step 2: update the session.user based on the token object */
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },
}

export default NextAuth(authOptions)


