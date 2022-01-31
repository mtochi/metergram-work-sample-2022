-- AlterTable
ALTER TABLE `Enrolls` MODIFY `date` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Participant` MODIFY `participant_email` VARCHAR(255) NULL,
    MODIFY `participant_phone` VARCHAR(255) NULL;
