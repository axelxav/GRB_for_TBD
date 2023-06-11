import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { book } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: book = await request.json();
    
    const book = await prisma.book.create({
        data:{
            id:body.id,
            name:body.name,
            tahun: body.tahun,
            pages: body.pages,
            publisher_id: body.publisher_id,
            store_id: body.store_id
        }
    })
    return NextResponse.json(book, {status: 201});
}