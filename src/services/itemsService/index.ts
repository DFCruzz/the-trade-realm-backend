import { notFoundError } from "@/errors/not-found-error";
import itemsRepository from "@/repositories/itemsRepository";


async function listMainCategories() {
    const mainCategories = await itemsRepository.findAllMainCategory()

    if(!mainCategories) {
        throw notFoundError();
    }

    return mainCategories
}

async function listMainSubCategories(mainCategoryId: number) {
    const subCategories = await itemsRepository.findSubByMainId(mainCategoryId)
    
    if(!subCategories) {
        throw notFoundError();
    }

    return subCategories
}

const itemsService = {
    listMainCategories,
    listMainSubCategories
}

export default itemsService