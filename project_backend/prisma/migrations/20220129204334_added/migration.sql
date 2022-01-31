/*
  Warnings:

  - Added the required column `course_id` to the `Enrolls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Enrolls` ADD COLUMN `course_id` INTEGER NOT NULL;
