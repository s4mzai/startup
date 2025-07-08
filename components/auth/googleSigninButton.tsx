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
        <button type="submit" className='border-2 border-black bg-white p-2 rounded-lg'>Signin with Google</button>
        </form>
    </>
  )
}

export default GoogleSigninButton