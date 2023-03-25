import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

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
    }
}

export default NextAuth(authOptions)


