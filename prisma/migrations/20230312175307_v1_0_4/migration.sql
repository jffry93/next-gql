/*
  Warnings:

  - You are about to drop the column `title` on the `Movie` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Movie_title_idx";

-- DropIndex
DROP INDEX "Movie_title_key";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "title";

-- CreateIndex
CREATE INDEX "Movie_tmdb_id_idx" ON "Movie"("tmdb_id");
