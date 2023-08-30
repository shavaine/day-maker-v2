/*
  Warnings:

  - You are about to alter the column `endTime` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `startTime` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "notes" TEXT,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "actionId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "Task_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("actionId", "endTime", "id", "notes", "startTime", "templateId") SELECT "actionId", "endTime", "id", "notes", "startTime", "templateId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
