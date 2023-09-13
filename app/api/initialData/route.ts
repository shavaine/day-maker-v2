import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { Action, Schedule, Task, Template, ToastInterface } from "@/context/Interfaces";


export async function GET() {
    const session = await getServerSession(authOptions);
    
    // Returns JSON message if API is accessed without authentication 
    if (!session) {
        return NextResponse.json({message: "Must be logged in to use API"});
    }

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

    const toast: ToastInterface = {
    message: "",
    type: "notice"
    }

  const InitialData =  {
    actions: actions,
    tasks: tasks,
    templates: templates,
    schedules: schedules,
    toast: toast
  }

    return NextResponse.json(InitialData);
}