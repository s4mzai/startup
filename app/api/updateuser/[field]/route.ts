import { NextResponse } from "next/server"
import { z } from "zod"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import {
  nameSchema,
  usernameSchema,
  bioSchema,
  imageSchema,
} from "@/lib/schema/updateUserSchema"

// 👇 Define valid fields as a union
const validFields = ["name", "username", "bio", "image"] as const
type ValidField = (typeof validFields)[number]

const schemaMap: Record<ValidField, z.ZodSchema> = {
  name: nameSchema,
  username: usernameSchema,
  bio: bioSchema,
  image: imageSchema,
}

export async function PATCH(
  req: Request,
  { params }: { params: { field: string } }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userId = session.user.id
  const { field } = params

  // 🛑 Validate field name first
  if (!validFields.includes(field as ValidField)) {
    return NextResponse.json({ error: "Invalid field" }, { status: 400 })
  }

  const body = await req.json()
  const fieldValue = body?.[field]

  if (typeof fieldValue !== "string") {
    return NextResponse.json({ error: "Missing or invalid value" }, { status: 400 })
  }

  const schema = schemaMap[field as ValidField]
  const parsed = schema.safeParse({ [field]: fieldValue })

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.format() },
      { status: 400 }
    )
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { [field]: fieldValue },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Failed to update user:", err)
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    )
  }
}
