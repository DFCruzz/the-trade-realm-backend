-- CreateTable
CREATE TABLE "Maincategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "searchRef" INTEGER NOT NULL,

    CONSTRAINT "Maincategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "searchRef" INTEGER NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Maincategory_searchRef_key" ON "Maincategory"("searchRef");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_searchRef_key" ON "Subcategory"("searchRef");
