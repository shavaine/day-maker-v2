import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cronKey = searchParams.get('key');
  if (!cronKey) {
    return NextResponse.json({message: "Failed to get key"}, { status: 200 });
  }

  if (cronKey !== process.env.CRON_KEY) {
    return NextResponse.json({message: "Incorrect CRON Key"}, { status: 500 });
  } else {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        await prisma.schedule.deleteMany({
            where: {
                date: {
                    lt:oneMonthAgo
                }
            }
        })

        return new Response('Successfully deleted old schedules');
  }


}