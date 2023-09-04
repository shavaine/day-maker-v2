import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";



interface Props {
  params: { templateId: string };
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

    await prisma.template.delete({
        where: {
            id: params.templateId,
            userId: user?.id
        },
    })

    return NextResponse.json({message: "Successfully Deleted Template"});
}