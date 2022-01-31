/*
  Warnings:

  - The primary key for the `Enrolls` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `participant_id` on the `Enrolls` table. All the data in the column will be lost.
  - Added the required column `enrolls_id` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Enrolls` DROP FOREIGN KEY `Enrolls_participant_id_fkey`;

-- AlterTable
ALTER TABLE `Enrolls` DROP PRIMARY KEY,
    DROP COLUMN `participant_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `course_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Participant` ADD COLUMN `enrolls_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_enrolls_id_fkey` FOREIGN KEY (`enrolls_id`) REFERENCES `Enrolls`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
