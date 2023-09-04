import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

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

    await prisma.task.create({
        data: {
            notes: data.notes,
            startTime: data.startTime,
            endTime: data.endTime,
            actionId: data.actionId,
            templateId: data.templateId
        },
    })

    return NextResponse.json({message: "Tasks created successfully"});
}