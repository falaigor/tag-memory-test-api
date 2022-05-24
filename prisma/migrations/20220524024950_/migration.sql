-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ranking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "guested" REAL NOT NULL,
    "timer" REAL NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "ranking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
