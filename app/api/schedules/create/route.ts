import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Schedule, Template } from "@prisma/client";
import { scheduleValidate } from "@/lib/Validation/formValidation";

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

    const existingTemplates: Template[] = await prisma.template.findMany({
        where: {
            userId: user?.id!,
        },
    });

    const existingSchedules: Schedule[] = await prisma.schedule.findMany({
        where: {
            userId: user?.id!,
        },
    });

    if (scheduleValidate(new Date(data.date), data.templateId,existingSchedules,existingTemplates).notValid) {
        return NextResponse.json({ error: scheduleValidate(new Date(data.date), data.templateId,existingSchedules,existingTemplates).message }, { status: 400 })
    } else {

        const newSchedule = await prisma.schedule.create({
            data: {
                date: data.date,
                templateId: data.templateId,
                userId: user?.id!
            },
        })
        console.log(newSchedule)

        return NextResponse.json(newSchedule);
    }
}