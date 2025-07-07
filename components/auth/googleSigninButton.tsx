import React from 'react'
import { signIn } from '@/lib/auth'

const GoogleSigninButton = () => {
  return (
    <>
        <form
        action={async () => {
            "use server"
            await signIn("google")
        }}
        >
        <button type="submit" className='border-2 border-black p-2 rounded-full'>Signin with Google</button>
        </form>
    </>
  )
}

export default GoogleSigninButton