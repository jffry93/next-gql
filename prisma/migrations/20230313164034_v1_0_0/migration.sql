-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "watchlist" BOOLEAN NOT NULL DEFAULT false,
    "recommend" BOOLEAN NOT NULL DEFAULT false,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "comment" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Movie_id_idx" ON "Movie"("id");
