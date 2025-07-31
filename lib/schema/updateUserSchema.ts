import { z } from "zod"

export const userUpdateSchema = z.object({
  name: z.string().min(1,{message: "Enter something"}).max(50,{message:"Name must be under 50 char"}).optional(),
  username: z.string().min(3,{message: "Enter something"}).max(20,{message: "username must be under 20 char"}).optional(),
  bio: z.string().max(300,{message: "bio must be under 300 char"}).optional(),
  image: z.string().url().optional(),
})

export const nameSchema = userUpdateSchema.pick({ name: true })
export const usernameSchema = userUpdateSchema.pick({ username: true })
export const bioSchema = userUpdateSchema.pick({ bio: true })
export const imageSchema = userUpdateSchema.pick({ image: true })

export const passwordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
})
