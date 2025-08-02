import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  nameSchema,
  usernameSchema,
  bioSchema,
  imageSchema,
} from "@/lib/schema/updateUserSchema";

const validFields = ["name", "username", "bio", "image"] as const;
type ValidField = (typeof validFields)[number];

const schemaMap: Record<ValidField, z.ZodSchema> = {
  name: nameSchema,
  username: usernameSchema,
  bio: bioSchema,
  image: imageSchema,
};

// 👇 Updated: params is now a Promise
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ field: ValidField }> } // <- Promise wrapper
): Promise<NextResponse> {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 👇 Updated: await the params
  const { field } = await context.params;

  if (!validFields.includes(field)) {
    return NextResponse.json({ error: "Invalid field" }, { status: 400 });
  }

  const body = await req.json();
  const fieldValue = body?.[field];

  if (typeof fieldValue !== "string") {
    return NextResponse.json({ error: "Missing or invalid value" }, { status: 400 });
  }

  const schema = schemaMap[field];
  const parsed = schema.safeParse({ [field]: fieldValue });

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { [field]: fieldValue },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to update user:", err);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}