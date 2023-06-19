/*
  Warnings:

  - Added the required column `mainCategoryId` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subcategory" ADD COLUMN     "mainCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_mainCategoryId_fkey" FOREIGN KEY ("mainCategoryId") REFERENCES "Maincategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
