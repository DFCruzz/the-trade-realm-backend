import { prisma } from "../../config//database"
import { Prisma } from "@prisma/client"

async function findByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email,
        }
    })
}

async function createNewuser(data: Prisma.UserUncheckedCreateInput) {
    return prisma.user.create({
        data
    })
}

const userRepository = {
    findByEmail,
    createNewuser
}

export default userRepository