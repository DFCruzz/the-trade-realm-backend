import { prisma } from "../config/database"
import axios from "axios"

async function generateToken() {
    try {
        const response = await axios.post(
            "https/us.battle.net/oauth/token", null,
            {
                params: {
                    grant_type: "client_credentials",
                    client_id: `${process.env.BLIZZARD_CLIENT_ID}`,
                    client_secret: `${process.env.BLIZZARD_CLIENT_SECRET}`
                }
            }
        )
        return response.data.access_token
    } catch (error) {
        console.log(error.message)
    }
}

async function checkSession(token: string) {
    return prisma.session.findFirst({
        where: {
            token
        }
    })
}

async function useOrCreateSession() {
    const token = await generateToken()
    const session = await checkSession(token)
    const tokenExpiration = new Date(session.createdAt.getTime() + 86400000)
    const currentTime = new Date()

    if(!session || tokenExpiration < currentTime) {
        const newToken = await generateToken()
        await prisma.session.create({
            data: {
                token: newToken
            }
        })
        return newToken 
    }
    return token
}
