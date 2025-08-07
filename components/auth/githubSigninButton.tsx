import React from 'react'
import { FaGithub } from "react-icons/fa";
import { signIn } from '@/lib/auth'

const GithubSigninButton = () => {
  return (
    <>
        <form
        action={async () => {
            "use server"
            await signIn("github")
        }}
        >
        <button type="submit" className='resize-none w-fit bg-white h-12 p-5 px-6 py-3 font-semibold  
        lg:bg-white lg:text-black lg:hover:bg-[#fafbea] rounded-xl
        transition-all duration-300
        translate-y-[-4px] lg:translate-y-[0px] hover:translate-y-[-4px]
        hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
        hover:shadow-[6px_6px_0px_black] active:translate-y-[0px]
        active:rounded-2xl active:shadow-none

        border-none focus:border-none focus:outline-none focus:ring-0 
        focus-visible:ring-0 ring-0 outline-none
        '><FaGithub /></button>
        </form>
    </>
  )
}

export default GithubSigninButton