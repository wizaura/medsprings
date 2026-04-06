/*
  Warnings:

  - You are about to drop the column `country` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `product` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Inquiry` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `helpType` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organisation` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Inquiry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Inquiry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inquiry" DROP COLUMN "country",
DROP COLUMN "name",
DROP COLUMN "product",
DROP COLUMN "quantity",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "helpType" TEXT NOT NULL,
ADD COLUMN     "organisation" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
