"use client"
//  TODO :ADD PITCH FIELD LATER
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { startupSchema,startupSchemaType } from "@/lib/startupSchema"
import {useTransition} from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import React, { useState } from 'react'
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { createStartup } from "@/actions/createStartup"

const CreateStartupForm = () => {
  const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof startupSchema>>({
        resolver: zodResolver(startupSchema),
        defaultValues:{
            title: "",
            description: "",
            category: "",
            imageLink: "/startupImage.jpg",
            pitch: "",
        }
    })

    function onSubmit(values: z.infer<typeof startupSchema>){
        startTransition(async () => {
            const result = await createStartup(values)
            if (result?.success === false) {
                toast.error(result.error)
            } else if (result?.success === true) {
                toast.success(result.message)
                window.location.href = "/";
            }
        })
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-80 w-[50%] flex flex-col m-10 p-5">
            {/* TITLE FIELD */}
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input disabled={isPending} placeholder="This Tech Startup lets you do stuffs" {...field} className="border-2 border-black rounded-full px-5 py-6 bg-white"/>
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* DESCRIPTION FIELD */}
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea disabled={isPending} placeholder="Short description of your startup idea" {...field} className="resize-none border-2 border-black  rounded-lg px-5 bg-white h-10"/>
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* CATEGORY FIELD */}
            <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                    <Input disabled={isPending} placeholder="Choost a category (eg., Tech, Health, Education, etc.)" {...field} className="border-2 border-black rounded-full px-5 py-6 bg-white"/>
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* IMAGE LINK FIELD */}
            <FormField
            control={form.control}
            name="imageLink"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Image Link</FormLabel>
                <FormControl>
                    <Input disabled={isPending} placeholder="Paste a link to your demo or promotional media" {...field} className="border-2 border-black rounded-full px-5 py-6 bg-white"/>
                </FormControl>
                <FormDescription>
                    {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* PITCH FIELD  */}
             <FormField
            control={form.control}
            name="pitch"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Pitch</FormLabel>
                <FormControl>
                    <Textarea disabled={isPending} placeholder="Briefly describe your idea and what problem it solves" {...field} className="resize-none border-2 border-black  rounded-lg px-5 bg-white h-10"/>
                </FormControl>
                <FormDescription>
                    This is your public display name. 
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            {/* SUBMIT BUTTON */}
            <Button disabled={isPending} type="submit" className="p-6 rounded-full">Submit Your Pitch</Button>
        </form>
      </Form>
  )
}

export default CreateStartupForm