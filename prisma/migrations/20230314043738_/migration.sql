/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `imoID` was added to the `Movie` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_pkey",
ADD COLUMN     "imoID" TEXT NOT NULL,
ADD COLUMN     "userEmail" TEXT,
ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("imoID");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
