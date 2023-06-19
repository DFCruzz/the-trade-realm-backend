import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
  let mainCategory = await prisma.maincategory.findMany()
  if (mainCategory.length === 0) {
    await prisma.maincategory.createMany({
      data: [
        { name: "Weapons", searchRef: 2 },
        { name: "Armors", searchRef: 4 },
        { name: "Containers", searchRef: 1 },
        { name: "Gems", searchRef: 3 },
        { name: "Item Enhacements", searchRef: 8 },
        { name: "Consumables", searchRef: 0 },
        { name: "Glyphs", searchRef: 16 },
        { name: "Trade Goods", searchRef: 7 },
        { name: "Recipes", searchRef: 9 },
        { name: "Profession Equipment", searchRef: 19 },
        { name: "Battle Pets", searchRef: 17 },
        { name: "Quest Items", searchRef: 12 },
        { name: "Miscellanous", searchRef: 15 },
        { name: "WoW Token", searchRef: 18 }
      ]
    })
  }

  let subCategory = await prisma.subcategory.findMany()
  if (subCategory.length === 0) {
    await prisma.subcategory.createMany({
      data: [
        { name: "One-Handed Axes", searchRef: 0, mainCategoryId: 2 },
        { name: "Two-Handed Axes", searchRef: 1, mainCategoryId: 2 },
        { name: "One-Handed Maces", searchRef: 4, mainCategoryId: 2 },
        { name: "Two-Handed Maces", searchRef: 5, mainCategoryId: 2 },
        { name: "One-Handed Swords", searchRef: 7, mainCategoryId: 2 },
        { name: "Two-Handed Swords", searchRef: 8, mainCategoryId: 2 },
        { name: "Warglaives", searchRef: 9, mainCategoryId: 2 },
        { name: "Daggers", searchRef: 15, mainCategoryId: 2 },
        { name: "Fist Weapons", searchRef: 13, mainCategoryId: 2 },
        { name: "Wands", searchRef: 19, mainCategoryId: 2 },
        { name: "Polearms", searchRef: 6, mainCategoryId: 2 },
        { name: "Staves", searchRef: 10, mainCategoryId: 2 },
        { name: "Bows", searchRef: 10, mainCategoryId: 2 },
        { name: "Crossbows", searchRef: 10, mainCategoryId: 2 },
        { name: "Guns", searchRef: 10, mainCategoryId: 2 },
        { name: "Thrown", searchRef: 10, mainCategoryId: 2 }
      ]
    })
  }
}

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });