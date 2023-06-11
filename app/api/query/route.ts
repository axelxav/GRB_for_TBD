import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request & { json: () => Promise<{ query: string }> }) => {
  try {
    const body = await request.json();
    const { query } = body;

    // Menolak query DROP dan ALTER
    if (query.includes("DROP") || query.includes("ALTER")) {
      return NextResponse.json(
        { message: 'Query DROP dan ALTER tidak diperbolehkan.' },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (prisma) => {
      const transactionResult = await prisma.$queryRawUnsafe(query);
      return transactionResult;
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Terjadi kesalahan dalam menjalankan query.' },
      { status: 500 }
    );
  }
};
