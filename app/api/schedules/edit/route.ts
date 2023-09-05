import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

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

    const editSchedule = await prisma.schedule.update({
        where: {
            userId: user?.id!,
            id: data.id
        },
        data: {
            date: data.date,
            templateId: data.templateId,
            userId: user?.id!,
        },
    })

    return NextResponse.json(editSchedule);
}