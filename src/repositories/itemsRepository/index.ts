import { prisma } from "../../config//database"
import { Prisma } from "@prisma/client"

async function findAllMainCategory() {
    return await prisma.maincategory.findMany()
}

async function findSubByMainId(mainCategoryId: number) {
    return await prisma.subcategory.findMany({
        where: {
            mainCategoryId
        }
    })
}

const itemsRepository = {
    findAllMainCategory,
    findSubByMainId
}

export default itemsRepository