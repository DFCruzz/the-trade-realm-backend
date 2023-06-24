/*
  Warnings:

  - You are about to drop the column `mainCategoryId` on the `Subcategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[searchRef]` on the table `Maincategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mainCategoryRef` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_mainCategoryId_fkey";

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "mainCategoryId",
ADD COLUMN     "mainCategoryRef" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Maincategory_searchRef_key" ON "Maincategory"("searchRef");

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_mainCategoryRef_fkey" FOREIGN KEY ("mainCategoryRef") REFERENCES "Maincategory"("searchRef") ON DELETE RESTRICT ON UPDATE CASCADE;
