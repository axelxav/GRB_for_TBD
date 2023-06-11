import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { book } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: book = await request.json();
    const book = await prisma.book.update({
        where: {
            id: Number(params.id)
        },
        data: {
            id:body.id,
            name:body.name,
            tahun: body.tahun,
            pages: body.pages,
            publisher_id: body.publisher_id,
            store_id: body.store_id
        }
    })
    return NextResponse.json(book, {status: 200});
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    const book = await prisma.book.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(book, {status: 200});
}