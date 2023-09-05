import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../auth/[...nextauth]/route";

interface Props {
  params: { scheduleId: string };
}
export async function DELETE(req: Request, {params}: Props) {
    const session = await getServerSession(authOptions);

    // Returns JSON message if API is accessed without authentication 
    if (!session) {
        return NextResponse.json({message: "Must be logged in to use API"});
    }

    const user = await prisma.user.findFirst({
        where: { email: session?.user?.email! },
    });

    await prisma.schedule.delete({
        where: {
            id: params.scheduleId,
            userId: user?.id
        },
    })

    return NextResponse.json({message: "Successfully Deleted Schedule"});
}