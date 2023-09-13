import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { templateServerValidate } from "@/lib/Validation/formValidation";

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

    const existingTemplate = await prisma.template.findFirst({
        where: {
            name: data.name,
            userId: user?.id!,
        },
    });

    if (existingTemplate) {
        // Handle the case where a record with the same title already exists
        return NextResponse.json({ error: 'Template Name already exist' }, { status: 400 })
    } else if (templateServerValidate(data.name, data.description).notValid) {
        // Handle the case where a record is empty, null, undefined or the wrong length
        return NextResponse.json({ error: templateServerValidate(data.name, data.title).message }, { status: 400 })
    } else {

    const newTemplate = await prisma.template.create({
        data: {
            name: data.name,
            description: data.description,
            userId: user?.id!
        },
    })

    return NextResponse.json(newTemplate);
        }
    }