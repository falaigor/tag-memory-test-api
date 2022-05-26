-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ranking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "guessedTags" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ranking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
