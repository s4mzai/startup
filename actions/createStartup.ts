"use server"

import { auth } from "@/lib/auth"
import {prisma} from "@/lib/prisma"
import { startupSchema, startupSchemaType } from "@/lib/startupSchema"

export async function createStartup(values: startupSchemaType) {
    const session = await auth()
    const userId = session?.user?.id

    if (!userId) {
        throw new Error("Unauthorized")
    }
    
    try {

        const { title, description, category, imageLink } = startupSchema.parse(values) as startupSchemaType

        await prisma.startup.create({
            data:{
                title,
                description,
                category,
                image: imageLink,
                views: 0,
                user: {
                    connect: { id: userId }
                },
            },
        })  

        console.log("Startup Created Success")

        return { 
            success: true, 
            message: "Idea Created" 
        }
     
  }catch (error) {
    // console.error("Internal Error. Try again!:", err)
    return { 
      success: false, 
      error: "An unexpected error occurred. Please try again." 
    }

  }
}
