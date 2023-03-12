/*
  Warnings:

  - You are about to drop the column `tmdb_id` on the `Movie` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Movie_tmdb_id_idx";

-- DropIndex
DROP INDEX "Movie_tmdb_id_key";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "tmdb_id";

-- CreateIndex
CREATE INDEX "Movie_id_idx" ON "Movie"("id");
