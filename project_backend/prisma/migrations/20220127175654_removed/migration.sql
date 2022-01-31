/*
  Warnings:

  - You are about to drop the column `company_id` on the `Enrolls` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Enrolls` DROP FOREIGN KEY `Enrolls_company_id_fkey`;

-- AlterTable
ALTER TABLE `Enrolls` DROP COLUMN `company_id`;
