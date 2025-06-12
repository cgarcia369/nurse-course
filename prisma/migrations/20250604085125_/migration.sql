-- AlterTable
ALTER TABLE "users" ADD COLUMN     "current_section" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "last_section" SET DEFAULT 0;
