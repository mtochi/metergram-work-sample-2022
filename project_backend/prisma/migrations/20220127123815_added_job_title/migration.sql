/*
  Warnings:

  - You are about to drop the column `email` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `company_email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_phone` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participant_email` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participant_name` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participant_phone` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Company` DROP COLUMN `email`,
    DROP COLUMN `phone`,
    ADD COLUMN `company_email` VARCHAR(255) NOT NULL,
    ADD COLUMN `company_phone` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Participant` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    ADD COLUMN `participant_email` VARCHAR(255) NOT NULL,
    ADD COLUMN `participant_name` VARCHAR(255) NOT NULL,
    ADD COLUMN `participant_phone` VARCHAR(255) NOT NULL;
