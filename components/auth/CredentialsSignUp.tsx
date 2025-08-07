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
      <div className="w-full flex flex-col gap-2">
        <label className="flex gap-2 items-center">
          Name:
        </label>
        <input
          name="name"
          type="text"
          required
          className="resize-none w-full bg-white h-12 p-5 px-6 py-3 font-semibold  
          lg:bg-white lg:text-black lg:hover:bg-[#fafbea] rounded-xl
          transition-all duration-300
          translate-y-[-4px] lg:translate-y-[0px] hover:translate-y-[-4px]
          hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
          hover:shadow-[6px_6px_0px_black] active:translate-y-[0px]
          active:rounded-2xl active:shadow-none

          border-none focus:border-none focus:outline-none focus:ring-0 
          focus-visible:ring-0 ring-0 outline-none "
          placeholder="John Doe"
        />
      </div>
      
      <div className="w-full flex flex-col gap-2">
        <label className="flex gap-2 items-center">
          Email:
        </label>
        <input
          name="email"
          type="email"
          required
          className="resize-none w-full bg-white h-12 p-5 px-6 py-3 font-semibold  
          lg:bg-white lg:text-black lg:hover:bg-[#fafbea] rounded-xl
          transition-all duration-300
          translate-y-[-4px] lg:translate-y-[0px] hover:translate-y-[-4px]
          hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
          hover:shadow-[6px_6px_0px_black] active:translate-y-[0px]
          active:rounded-2xl active:shadow-none

          border-none focus:border-none focus:outline-none focus:ring-0 
          focus-visible:ring-0 ring-0 outline-none"
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="flex gap-2 items-center">
          Password:
        </label>
        <input
          name="password"
          type="password"
          required
          className="resize-none w-full bg-white h-12 p-5 px-6 py-3 font-semibold  
          lg:bg-white lg:text-black lg:hover:bg-[#fafbea] rounded-xl
          transition-all duration-300
          translate-y-[-4px] lg:translate-y-[0px] hover:translate-y-[-4px]
          hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
          hover:shadow-[6px_6px_0px_black] active:translate-y-[0px]
          active:rounded-2xl active:shadow-none

          border-none focus:border-none focus:outline-none focus:ring-0 
          focus-visible:ring-0 ring-0 outline-none"
          placeholder="*********"
      />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="resize-none w-full bg-white h-12 p-5 px-6 py-3 font-semibold  
          lg:bg-white lg:text-black lg:hover:bg-[#fafbea] rounded-xl
          transition-all duration-300
          translate-y-[-4px] lg:translate-y-[0px] hover:translate-y-[-4px]
          hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
          hover:shadow-[6px_6px_0px_black] active:translate-y-[0px]
          active:rounded-2xl active:shadow-none

          border-none focus:border-none focus:outline-none focus:ring-0 
          focus-visible:ring-0 ring-0 outline-none"

      >
        {isPending ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  )
}

export default CredentialsSignUp