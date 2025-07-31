"use client"
// TODO :ADD PITCH FIELD LATER
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { startupSchema } from "@/lib/schema/startupSchema"
import { useTransition } from "react"

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

import React from "react"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { createStartup } from "@/actions/createStartup"

const CreateStartupForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof startupSchema>>({
    resolver: zodResolver(startupSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      imageLink: "/startupImage.jpg",
      pitch: "",
    },
  })

  function onSubmit(values: z.infer<typeof startupSchema>) {
    startTransition(async () => {
      const result = await createStartup(values)
      if (result?.success === false) {
        toast.error(result.error)
      } else if (result?.success === true) {
        toast.success(result.message)
        window.location.href = "/"
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex items-center justify-between gap-10 pt-5  sm:p-10 lg:p-20 flex-col md:flex-row"
      >
        <div className="flex flex-col space-y-8 w-full">
          {/* TITLE FIELD */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <div className="w-full px-5 flex items-center justify-between">
                  <div>
                    <FormLabel>Title</FormLabel>
                  </div>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </div>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Startup"
                    {...field}
                    className="resize-none bg-white h-12 p-5 px-6 py-3 font-semibold  
                    lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                    transition-all duration-300
                    translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                    translate-y-[-4px] lg:translate-y-[0px] 
                    hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                    hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                    active:rounded-2xl active:shadow-none
                    
                    border-none focus:border-none focus:outline-none focus:ring-0 
                    focus-visible:ring-0 ring-0 outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* DESCRIPTION FIELD */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="w-full px-5 flex items-center justify-between">
                  <div>
                    <FormLabel>Description</FormLabel>
                  </div>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    placeholder="Short description of your startup idea"
                    {...field}
                    className="resize-none bg-white h-12 p-5 px-6 py-3 font-semibold     
                    lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                    transition-all duration-300
                    translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                    translate-y-[-4px] lg:translate-y-[0px] 
                    hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                    hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                    active:rounded-2xl active:shadow-none
                    
                    border-none focus:border-none focus:outline-none focus:ring-0 
                    focus-visible:ring-0 ring-0 outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* CATEGORY FIELD */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <div className="w-full px-5 flex items-center justify-between">
                  <div>
                    <FormLabel>Category</FormLabel>
                  </div>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </div>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Choose a category (e.g., Tech, Health, Education, etc.)"
                    {...field}
                    className="resize-none bg-white h-12 p-5 px-6 py-3 font-semibold     
                    lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                    transition-all duration-300
                    translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                    translate-y-[-4px] lg:translate-y-[0px] 
                    hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                    hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                    active:rounded-2xl active:shadow-none
                    
                    border-none focus:border-none focus:outline-none focus:ring-0 
                    focus-visible:ring-0 ring-0 outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* IMAGE LINK FIELD */}
          <FormField
            control={form.control}
            name="imageLink"
            render={({ field }) => (
              <FormItem>
                <div className="w-full px-5 flex items-center justify-between">
                  <div>
                    <FormLabel>Image Link</FormLabel>
                  </div>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </div>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Paste a link to your demo or promotional media"
                    {...field}
                    className="resize-none bg-white h-12 p-5 px-6 py-3 font-semibold     
                    lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                    transition-all duration-300
                    translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                    translate-y-[-4px] lg:translate-y-[0px] 
                    hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                    hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                    active:rounded-2xl active:shadow-none
                    
                    border-none focus:border-none focus:outline-none focus:ring-0 
                    focus-visible:ring-0 ring-0 outline-none "
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex flex-col gap-5">
          {/* PITCH FIELD */}
          <FormField
            control={form.control}
            name="pitch"
            render={({ field }) => (
              <FormItem>
                <div className="w-full px-5 flex items-center justify-between">
                  <div>
                    <FormLabel>Pitch</FormLabel>
                  </div>
                  <div className="min-h-[20px]">
                    <FormMessage />
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    placeholder="Briefly describe your idea and what problem it solves"
                    {...field}
                    className="resize-none bg-white h-60 p-5 px-6 py-3 font-semibold     
                    lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                    transition-all duration-300
                    translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                    translate-y-[-4px] lg:translate-y-[0px] 
                    hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                    hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                    active:rounded-2xl active:shadow-none
                    
                    border-none focus:border-none focus:outline-none focus:ring-0 
                    focus-visible:ring-0 ring-0 outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* SUBMIT BUTTON */}
          <Button
            disabled={isPending}
            type="submit"
            className="h-12 rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            Submit Your Pitch
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default CreateStartupForm
