import * as z from "zod"
 
export const startupSchema = z.object({
    title: z.string().min(1, {
        message: "Title is must.",
    }),
    description: z.string().min(1, {
        message: "description is must",
    }),
    category: z.string().min(1, {
        message: "category is must.",
    }),
    imageLink: z.string().min(1, {
        message: "imageLink is must.",
    }),
    pitch: z.string().min(1, {
    message: "pitch is must.",
    }),
})

export type startupSchemaType = z.infer<typeof startupSchema>