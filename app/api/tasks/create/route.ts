import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { taskServerValidate } from "@/lib/Validation/formValidation";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    
    // Returns JSON message if API is accessed without authentication 
    if (!session) {
        return NextResponse.json({message: "Must be logged in to use API"});
    }

    const user = await prisma.user.findFirst({
        where: { email: session?.user?.email! },
    });

    const data = await req.json();

    const existingAction = await prisma.action.findFirst({
        where: {
            title: data.actionId,
            userId: user?.id!,
        },
    });

    if (!existingAction) {
        // Handle the case ActionId on task is invalid
        return NextResponse.json({ error: 'Action does not exist' }, { status: 400 })
    } else if (taskServerValidate(data.startTime, data.endTime).notValid) {
        // Handle the case where a record start-time is greater then end-time
        return NextResponse.json({ error: taskServerValidate(data.startTime, data.endTime).message }, { status: 400 })
    } else {

        const newTask = await prisma.task.create({
            data: {
                notes: data.notes,
                startTime: data.startTime,
                endTime: data.endTime,
                actionId: data.actionId,
                templateId: data.templateId
            },
        })

        return NextResponse.json(newTask);
    }
}