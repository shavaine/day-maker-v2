import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { actionServerValidate } from "@/lib/Validation/formValidation";

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
            title: data.title,
            userId: user?.id!,
        },
    });

    if (existingAction) {
        // Handle the case where a record with the same title already exists
        return NextResponse.json({ error: 'Action Title Already exist' }, { status: 400 })
    } else if (actionServerValidate(data.title).notValid) {
        // Handle the case where a record is empty, null, undefined or the wrong length
        return NextResponse.json({ error: actionServerValidate(data.title).message }, { status: 400 })
    } else {
        // Create a new record since there are no records with the same title
        const newAction = await prisma.action.create({
            data: {
            title: data.title,
            userId: user?.id!,
            },
        });
        return NextResponse.json(newAction);
    }
}