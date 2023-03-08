import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, pass } = req.body

    try {
        await prisma.user.create({
            data: {
                username: username,
                pass: pass
            }
        })
        res.status(200).json({ message: 'User Created' })
    } catch (error) {
        console.log(req.body)
        console.log('Failure')
        console.log(error)
    }

}
