import AnimatedText from '@/components/animations/fillText'
import CreateStartupForm from '@/components/createStartupForm'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateStartupPage = async() => {
    const session = await auth()
    if(!session){redirect("/signin")}
  return (
    <div className='bg-[#fabb20] flex flex-col p-10 items-center justify-center'>
        {/* UPPER CONTAINER HERE */}
        <div className='w-full flex items-center justify-center text-center'>
            <AnimatedText text='Ready To Pitch Your Startup' className='text-4xl sm:text-7xl' uppercase/>
        </div>
        {/* LOWER CONTAINER HERE */}
        <div className='w-full flex items-center justify-center'>
            <CreateStartupForm/>
        </div>
    </div>
  )
}

export default CreateStartupPage