/*
  Warnings:

  - You are about to alter the column `user_id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `guested` on the `ranking` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - You are about to alter the column `timer` on the `ranking` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL
);
INSERT INTO "new_users" ("avatar_url", "id", "name", "user_id") SELECT "avatar_url", "id", "name", "user_id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE TABLE "new_ranking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "guested" INTEGER NOT NULL,
    "timer" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "ranking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ranking" ("guested", "id", "timer", "user_id") SELECT "guested", "id", "timer", "user_id" FROM "ranking";
DROP TABLE "ranking";
ALTER TABLE "new_ranking" RENAME TO "ranking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
