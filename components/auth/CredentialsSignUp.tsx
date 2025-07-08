"use client"
import { signUpWithCredentials } from "@/actions/signUpAction"
import { toast } from "sonner"
import {useTransition} from "react"

const CredentialsSignUp = () => {
  const [isPending, startTransition] = useTransition()
  
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await signUpWithCredentials(formData)
      
      if (result?.success === false) {
        toast.error(result.error)
      } else if (result?.success === true) {
        toast.success(result.message)
        window.location.href = "/";
      }
    })
  }

  return (
    <form 
      action={handleSubmit}
      className="p-3 w-full rounded-xl flex flex-col text-center items-center gap-3 text-black"
    >
      <div className="w-full">
        <label className="flex gap-2 items-center">
          Name:
        </label>
        <input
          name="name"
          type="text"
          required
          className="outline-none w-full bg-white text-black rounded-lg border-2 border-black p-3 px-6 "
          placeholder="John Doe"
        />
      </div>
      
      <div className="w-full">
        <label className="flex gap-2 items-center">
          Email:
        </label>
        <input
          name="email"
          type="email"
          required
          className="outline-none w-full bg-white text-black rounded-lg border-2 border-black p-3 px-6 "
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="w-full">
        <label className="flex gap-2 items-center">
          Password:
        </label>
        <input
          name="password"
          type="password"
          required
          className="outline-none w-full bg-white text-black rounded-lg border-2 border-black p-3 px-6 "
          placeholder="*********"
      />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-4 rounded-lg border-2 border-black p-3 px-6 cursor-pointer w-full bg-white text-black hover:bg-gray-200 disabled:opacity-50"

      >
        {isPending ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  )
}

export default CredentialsSignUp