import React from 'react'
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
        <button type="submit" className='border-2 border-black bg-white p-2 rounded-lg'>Signin with GitHub</button>
        </form>
    </>
  )
}

export default GithubSigninButton