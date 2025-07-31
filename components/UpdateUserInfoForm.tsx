"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userUpdateSchema } from "@/lib/schema/updateUserSchema"

interface UpdateUserInfoFormProps {
  defaultName: string | null
  defaultUsername: string | null
  defaultBio: string | null
  defaultImage: string | null
}

const UpdateUserInfoForm: React.FC<UpdateUserInfoFormProps> = ({
  defaultName,
  defaultUsername,
  defaultBio,
  defaultImage,
}) => {

  const form = useForm<z.infer<typeof userUpdateSchema>>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: defaultName || "",
      username: defaultUsername || "Username not available! Kindly set your username to not have any complications in future",
      bio: defaultBio || "Bio not available!",
      image: defaultImage || "",
    },
  })

  function onSubmit(values: z.infer<typeof userUpdateSchema>) {
    // handle submit
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex items-center justify-between gap-10 pt-5 sm:p-10 lg:p-20 flex-col md:flex-row"
      >
        <div className="flex flex-col space-y-8 w-full">
          {/* NAME */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-3 w-full sm:w-[80%]">
                  <div className="w-full px-5 flex items-center justify-between">
                    <FormLabel>Name</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="jon doe"
                      {...field}
                      className="w-full resize-none bg-white h-12 px-6 py-3 font-semibold  
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
                </div>

                <Button
                  className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  Edit Name
                </Button>
              </FormItem>
            )}
          />

          {/* USERNAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-3 w-full sm:w-[80%]">
                  <div className="w-full px-5 flex items-center justify-between">
                    <FormLabel>UserName</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="hijondoe"
                      {...field}
                      className={`w-full resize-none bg-white h-12 px-6 py-3 font-semibold  
                      lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                      transition-all duration-300
                      translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                      translate-y-[-4px] lg:translate-y-[0px] 
                      hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                      hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                      active:rounded-2xl active:shadow-none
                      border-none focus:border-none focus:outline-none focus:ring-0 
                      focus-visible:ring-0 ring-0 outline-none 
                      ${!defaultUsername && "text-red-500 lg:text-red-500"}`}
                    />
                  </FormControl>
                </div>

                <Button
                  className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  Edit Username
                </Button>
              </FormItem>
            )}
          />

          {/* BIO */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-3 w-full sm:w-[80%]">
                  <div className="w-full px-5 flex items-center justify-between">
                    <FormLabel>Bio</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="Tech startup builder."
                      {...field}
                      className={`w-full resize-none bg-white h-12 px-6 py-3 font-semibold  
                      lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
                      transition-all duration-300
                      translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
                      translate-y-[-4px] lg:translate-y-[0px] 
                      hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
                      hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
                      active:rounded-2xl active:shadow-none
                      border-none focus:border-none focus:outline-none focus:ring-0 
                      focus-visible:ring-0 ring-0 outline-none  ${!defaultBio && "text-red-500 lg:text-red-500"}`}
                    />
                  </FormControl>
                </div>

                <Button
                  className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  Edit Bio
                </Button>
              </FormItem>
            )}
          />

          {/* IMAGE */}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-3 w-full sm:w-[80%]">
                  <div className="w-full px-5 flex items-center justify-between">
                    <FormLabel>Profile Image</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="Paste a link to your image"
                      {...field}
                      className="w-full resize-none bg-white h-12 px-6 py-3 font-semibold  
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
                </div>

                <Button
                  className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                >
                  Edit Image
                </Button>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}

export default UpdateUserInfoForm
