-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_actionId_fkey";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;
