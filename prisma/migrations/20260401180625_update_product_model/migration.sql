/*
  Warnings:

  - You are about to drop the column `benefits` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "benefits",
ADD COLUMN     "features" JSONB,
ADD COLUMN     "image3" TEXT,
ADD COLUMN     "shortDesc" TEXT,
ADD COLUMN     "specifications" JSONB,
ADD COLUMN     "tagline" TEXT;
