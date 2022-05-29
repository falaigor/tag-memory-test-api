-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "email" TEXT,
    "user_id" INTEGER NOT NULL
);
INSERT INTO "new_users" ("avatar_url", "email", "id", "name", "user_id") SELECT "avatar_url", "email", "id", "name", "user_id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
