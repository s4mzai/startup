import CredentialsSignUp from '@/components/auth/CredentialsSignUp'
import GithubSigninButton from '@/components/auth/githubSigninButton'
import GoogleSigninButton from '@/components/auth/googleSigninButton'
import Link from 'next/link'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-5">
      <div className="w-full">
          <div className="flex md:w-1/2 lg:w-1/3 m-auto border-black border-2 rounded-xl flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold p-5">Sign Up</h1>
            <div className="w-full flex flex-col items-center space-y-2">
              <CredentialsSignUp/>
              <h1 className="text-2xl font-bold">or</h1>
              <div className="flex gap-2">
                <GoogleSigninButton/>
                <GithubSigninButton/>
              </div>
              <div className="mb-3">
                <span className="flex gap-1">
                    <Link className="text-green-600 hover:underline" href={"signin"}>SignIn</Link>
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