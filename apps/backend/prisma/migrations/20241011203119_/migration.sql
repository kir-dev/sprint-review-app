/*
  Warnings:

  - You are about to drop the column `projektId` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `projectId` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_projektId_fkey";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "projektId",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
