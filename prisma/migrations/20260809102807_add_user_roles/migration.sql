-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'API');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
