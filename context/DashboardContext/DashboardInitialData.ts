import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { Action, Schedule, Task, Template } from "../Interfaces";

export const InitialData = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email! },
  });
  const actions: Action[] = await prisma.action.findMany({
    where: { user: user! },
  });
  const templates: Template[] = await prisma.template.findMany({
    where: { user: user! },
  });
  const templateIds = templates.map((template) => template.id);
  const tasks: Task[] = await prisma.task.findMany({
    where: { templateId: { in: templateIds } },
  });
  const schedules: Schedule[] = await prisma.schedule.findMany({
    where: { user: user! },
  });

  return {
    actions: actions,
    tasks: tasks,
    templates: templates,
    schedules: schedules
  }
};