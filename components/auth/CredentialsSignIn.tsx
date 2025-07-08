"use client"

import {  useTransition } from "react"
import { signInWithCredentials } from "@/actions/signInAction"
import { toast } from "sonner" 


export default function CredentialsSignIn() {
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await signInWithCredentials(formData)
      
      if (result?.success === false) {
        toast.error(result.error)
      } else if (result?.success === true) {
        toast.success(result.message)
        window.location.href = "/";
      }
    })
  }

  return (
    <form action={handleSubmit} 
      className="px-3 w-full rounded-xl flex flex-col text-center items-center gap-3 text-black"
    >
      <div className="w-full">
        <label htmlFor="email" className="flex gap-2 items-center">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="outline-none w-full bg-white text-black rounded-lg border-2 border-black p-3 px-6"
          placeholder="john.doe@example.com"
        />
      </div>
      
      <div className="w-full">
        <label htmlFor="password" className="flex gap-2 items-center">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="outline-none w-full bg-white text-black rounded-lg border-2 border-black p-3 px-6"
          placeholder="********"
        />
      </div>
      
      <button
        type="submit"
        disabled={isPending}
          className="mt-4 rounded-lg border-2 border-black p-3 px-6 cursor-pointer w-full bg-white text-black hover:bg-gray-200 disabled:opacity-50"
      >
        {isPending ? "Signing in..." : "Sign In"}
      </button>
    </form>
  )
}