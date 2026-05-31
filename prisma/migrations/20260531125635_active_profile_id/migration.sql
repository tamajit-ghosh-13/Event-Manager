-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "activeProfileId" UUID;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activeProfileId" UUID;
