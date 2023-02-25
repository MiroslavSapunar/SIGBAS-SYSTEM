import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await prisma.user.findMany
    } catch (error) {
        console.log('Failure')
        console.log(error)
    }

}
