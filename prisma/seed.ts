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
        { name: "Thrown", searchRef: 10, mainCategoryId: 2 },
        { name: "Plate Armors", searchRef: 4, mainCategoryId: 4 },
        { name: "Mail Armors", searchRef: 3, mainCategoryId: 4 },
        { name: "Leather Armors", searchRef: 2, mainCategoryId: 4 },
        { name: "Cloth Armors", searchRef: 1, mainCategoryId: 4 },
        { name: "Cloaks, Jewelries and Off-Hands", searchRef: 0, mainCategoryId: 4 },
        { name: "Bag", searchRef: 0, mainCategoryId: 1 },
        { name: "Herb Bag", searchRef: 2, mainCategoryId: 1 },
        { name: "Enchanting Bag", searchRef: 3, mainCategoryId: 1 },
        { name: "Engineering Bag", searchRef: 4, mainCategoryId: 1 },
        { name: "Gem Bag", searchRef: 5, mainCategoryId: 1 },
        { name: "Mining Bag", searchRef: 6, mainCategoryId: 1 },
        { name: "Leatherworking Bag", searchRef: 7, mainCategoryId: 1 },
        { name: "Inscription Bag", searchRef: 8, mainCategoryId: 1 },
        { name: "Fishing Bag", searchRef: 9, mainCategoryId: 1 },
        { name: "Cooking Bag", searchRef: 10, mainCategoryId: 1 },
        { name: "Reagent Bag", searchRef: 11, mainCategoryId: 1 },
        { name: "Reagent Bag", searchRef: 11, mainCategoryId: 1 },
        { name: "Artifact Relic", searchRef: 11, mainCategoryId: 3 },
        { name: "Intellect", searchRef: 0, mainCategoryId: 3 },
        { name: "Agility", searchRef: 1, mainCategoryId: 3 },
        { name: "Strength", searchRef: 2, mainCategoryId: 3 },
        { name: "Stamina", searchRef: 3, mainCategoryId: 3 },
        { name: "Spirit", searchRef: 4, mainCategoryId: 3 },
        { name: "Critical Strike", searchRef: 5, mainCategoryId: 3 },
        { name: "Mastery", searchRef: 6, mainCategoryId: 3 },
        { name: "Haste", searchRef: 7, mainCategoryId: 3 },
        { name: "Versatility", searchRef: 8, mainCategoryId: 3 },
        { name: "Other", searchRef: 9, mainCategoryId: 3 },
        { name: "Multiple Stats", searchRef: 10, mainCategoryId: 3 },
        { name: "Head", searchRef: 0, mainCategoryId: 8 },
        { name: "Neck", searchRef: 1, mainCategoryId: 8 },
        { name: "Shoulder", searchRef: 2, mainCategoryId: 8 },
        { name: "Cloak", searchRef: 3, mainCategoryId: 8 },
        { name: "Chest", searchRef: 4, mainCategoryId: 8 },
        { name: "Wrist", searchRef: 5, mainCategoryId: 8 },
        { name: "Hands", searchRef: 6, mainCategoryId: 8 },
        { name: "Waist", searchRef: 7, mainCategoryId: 8 },
        { name: "Legs", searchRef: 8, mainCategoryId: 8 },
        { name: "Feet", searchRef: 9, mainCategoryId: 8 },
        { name: "Finger", searchRef: 10, mainCategoryId: 8 },
        { name: "Weapon", searchRef: 11, mainCategoryId: 8 },
        { name: "Two-Handed Weapon", searchRef: 12, mainCategoryId: 8 },
        { name: "Shield/Off-hand", searchRef: 13, mainCategoryId: 8 },
        { name: "Misc", searchRef: 14, mainCategoryId: 8 },
        { name: "Explosives and Devices", searchRef: 0, mainCategoryId: 0 },
        { name: "Potions", searchRef: 1, mainCategoryId: 0 },
        { name: "Elixirs", searchRef: 2, mainCategoryId: 0 },
        { name: "Flasks & Phials", searchRef: 3, mainCategoryId: 0 },
        { name: "Food & Drink", searchRef: 5, mainCategoryId: 0 },
        { name: "Bandages", searchRef: 7, mainCategoryId: 0 },
        { name: "Other", searchRef: 8, mainCategoryId: 0 },
        { name: "Vantus Runes", searchRef: 9, mainCategoryId: 0 },
        { name: "Warrior", searchRef: 1, mainCategoryId: 16 },
        { name: "Paladin", searchRef: 2, mainCategoryId: 16 },
        { name: "Hunter", searchRef: 3, mainCategoryId: 16 },
        { name: "Rogue", searchRef: 4, mainCategoryId: 16 },
        { name: "Priest", searchRef: 5, mainCategoryId: 16 },
        { name: "Shaman", searchRef: 7, mainCategoryId: 16 },
        { name: "Mage", searchRef: 8, mainCategoryId: 16 },
        { name: "Warlock", searchRef: 9, mainCategoryId: 16 },
        { name: "Druid", searchRef: 11, mainCategoryId: 16 },
        { name: "Death Knight", searchRef: 6, mainCategoryId: 16 },
        { name: "Monk", searchRef: 10, mainCategoryId: 16 },
        { name: "Demon Hunter", searchRef: 12, mainCategoryId: 16 },
        { name: "Parts", searchRef: 1, mainCategoryId: 7 },
        { name: "Jewelcrafting", searchRef: 4, mainCategoryId: 7 },
        { name: "Cloth", searchRef: 5, mainCategoryId: 7 },
        { name: "Leather", searchRef: 6, mainCategoryId: 7 },
        { name: "Metal & Stone", searchRef: 7, mainCategoryId: 7 },
        { name: "Cooking", searchRef: 8, mainCategoryId: 7 },
        { name: "Herb", searchRef: 9, mainCategoryId: 7 },
        { name: "Elemental", searchRef: 10, mainCategoryId: 7 },
        { name: "Other", searchRef: 11, mainCategoryId: 7 },
        { name: "Enchanting", searchRef: 12, mainCategoryId: 7 },
        { name: "Inscription", searchRef: 16, mainCategoryId: 7 },
        { name: "Optional Reagents", searchRef: 18, mainCategoryId: 7 },
        { name: "Finishing Reagents", searchRef: 19, mainCategoryId: 7 },
        { name: "Leatherworking", searchRef: 1, mainCategoryId: 9 },
        { name: "Tailoring", searchRef: 2, mainCategoryId: 9 },
        { name: "Engineering", searchRef: 3, mainCategoryId: 9 },
        { name: "Blacksmithing", searchRef: 4, mainCategoryId: 9 },
        { name: "Cooking", searchRef: 5, mainCategoryId: 9 },
        { name: "Alchemy", searchRef: 6, mainCategoryId: 9 },
        { name: "First Aid", searchRef: 7, mainCategoryId: 9 },
        { name: "Enchanting", searchRef: 8, mainCategoryId: 9 },
        { name: "Fishing", searchRef: 9, mainCategoryId: 9 },
        { name: "Jewelcrafting", searchRef: 10, mainCategoryId: 9 },
        { name: "Inscription", searchRef: 11, mainCategoryId: 9 },
        { name: "Book", searchRef: 0, mainCategoryId: 9 },
        { name: "Blacksmithing", searchRef: 0, mainCategoryId: 19 },
        { name: "Leatherworking", searchRef: 1, mainCategoryId: 19 },
        { name: "Alchemy", searchRef: 2, mainCategoryId: 19 },
        { name: "Herbalism", searchRef: 3, mainCategoryId: 19 },
        { name: "Cooking", searchRef: 4, mainCategoryId: 19 },
        { name: "Mining", searchRef: 5, mainCategoryId: 19 },
        { name: "Tailoring", searchRef: 6, mainCategoryId: 19 },
        { name: "Engineering", searchRef: 7, mainCategoryId: 19 },
        { name: "Enchanting", searchRef: 8, mainCategoryId: 19 },
        { name: "Fishing", searchRef: 9, mainCategoryId: 19 },
        { name: "Skinning", searchRef: 10, mainCategoryId: 19 },
        { name: "Jewelcrafting", searchRef: 11, mainCategoryId: 19 },
        { name: "Inscription", searchRef: 12, mainCategoryId: 19 },
        { name: "Archaeology", searchRef: 13, mainCategoryId: 19 },
        { name: "Junk", searchRef: 0, mainCategoryId: 15 },
        { name: "Reagent", searchRef: 1, mainCategoryId: 15 },
        { name: "Companion Pets", searchRef: 2, mainCategoryId: 15 },
        { name: "Holiday", searchRef: 3, mainCategoryId: 15 },
        { name: "Other", searchRef: 4, mainCategoryId: 15 },
        { name: "Mount", searchRef: 5, mainCategoryId: 15 },
        { name: "Mount Equipment", searchRef: 6, mainCategoryId: 15 }
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