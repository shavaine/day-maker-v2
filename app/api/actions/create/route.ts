import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findFirst({
        where: { email: session?.user?.email! },
    });

    const data = await req.json();

    const newAction = await prisma.action.create({
        data: {
            title: data.title,
            userId: user?.id!
        },
    })

    return NextResponse.json(newAction);
}