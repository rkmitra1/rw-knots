-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "body" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Article.title_unique" ON "Article"("title");
