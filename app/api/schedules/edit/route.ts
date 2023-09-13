import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Template } from "@/context/Interfaces";
import { editScheduleValidate } from "@/lib/Validation/formValidation";

export async function PUT(req: Request) {
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

    if (editScheduleValidate(data.templateId, existingTemplates).notValid) {
        return NextResponse.json({ error: editScheduleValidate(data.templateId, existingTemplates).message }, { status: 400 })
    } else {
        const editSchedule = await prisma.schedule.update({
            where: {
                userId: user?.id!,
                id: data.id
            },
            data: {
                templateId: data.templateId,
                userId: user?.id!,
            },
        })

        return NextResponse.json(editSchedule);
    }
}