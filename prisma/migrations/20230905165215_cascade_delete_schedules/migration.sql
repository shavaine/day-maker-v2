-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "Schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Schedule_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Schedule" ("date", "id", "templateId", "userId") SELECT "date", "id", "templateId", "userId" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
