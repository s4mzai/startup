import AnimatedText from '@/components/animations/fillText'
import CredentialsSignUp from '@/components/auth/CredentialsSignUp'
import GithubSigninButton from '@/components/auth/githubSigninButton'
import GoogleSigninButton from '@/components/auth/googleSigninButton'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const SignUpPage = async() => {
  const session = await auth()
  if(session){redirect("/")}
  return (
    <div className="h-screen bg-[#fafbea] flex flex-col items-center justify-center text-center p-5">
      <div className="w-full">
          <div className="bg-[#fabb20] flex md:w-1/2 lg:w-1/3 m-auto border-black border-2 rounded-xl flex-col items-center space-y-2 p-5">
            <h1><AnimatedText className='text-5xl sm:text-6xl font-bold londrina w-40 sm:w-50' text='Sign Up' uppercase/></h1>
            <div className="w-full flex flex-col items-center space-y-2">
              <CredentialsSignUp/>
              <h1 className="text-2xl font-bold">or</h1>
              <div className="flex gap-2">
                <GoogleSigninButton/>
                <GithubSigninButton/>
              </div>
              <div className="mb-3">
                <span className="flex gap-1">
                    <Link className="relative after:absolute after:bottom-[-1] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
                       after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100" href={"/signin"}>Sign In</Link>
                    Instead
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignUpPage