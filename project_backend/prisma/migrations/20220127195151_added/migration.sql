/*
  Warnings:

  - Added the required column `company_id` to the `Enrolls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Enrolls` ADD COLUMN `company_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Enrolls` ADD CONSTRAINT `Enrolls_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
