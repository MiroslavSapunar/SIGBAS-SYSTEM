import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/signin'
    }
    // callbacks: {
    //     async signIn({ account, profile }) {
    //       if (account.provider === "google") {
    //         return profile.email_verified && profile.email.endsWith("@fi.uba.ar")
    //       }
    //       return true // Do different verification for other providers that don't have `email_verified`
    //     },
    //   }
})

