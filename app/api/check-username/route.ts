import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req:Request){
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  const isAvailable = !existingUser;

  return NextResponse.json({ available: isAvailable });
}