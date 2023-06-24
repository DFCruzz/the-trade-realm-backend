import { prisma } from "../../config//database"
import { Prisma } from "@prisma/client"

async function findAllMainCategory() {
    return await prisma.maincategory.findMany()
}

async function findSubByMainId(mainCategoryRef: number) {
    return await prisma.subcategory.findMany({
        where: {
            mainCategoryRef
        }
    })
}

const itemsRepository = {
    findAllMainCategory,
    findSubByMainId
}

export default itemsRepository