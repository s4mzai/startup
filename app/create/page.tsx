
import CreateStartupForm from '@/components/createStartupForm'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateStartupPage = async() => {
    const session = await auth()
    if(!session){redirect("/signin")}
  return (
    <div className='bg-[#fabb20] lg:bg-[#fafbea] flex flex-col p-10 w-full items-center justify-center min-h-screen'>
        {/* UPPER CONTAINER HERE */}
        <div className='text-3xl font-extrabold uppercase border-b-1 w-fit p-5 border-black border-dashed text-center'>
            Pitch Your Startup
        </div>
        {/* LOWER CONTAINER HERE */}
        <div className='w-full'>
            <CreateStartupForm/>
        </div>
    </div>
  )
}

export default CreateStartupPage