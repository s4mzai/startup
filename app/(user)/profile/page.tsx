
import SignOutButton from '@/components/auth/signOutButton'
import StartupSection from '@/components/landingpage/startupSection'
import UserProfileCard from '@/components/UserProfileCard'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { dimensionValueTypes } from 'framer-motion'
import { redirect } from 'next/navigation'
import React from 'react'

const UserPrivateProfile = async () => {
  const session = await auth();
  if (!session) redirect('/');

  const user = await prisma.user.findUnique({
    where:{
        id: session.user?.id
    },
    select:{
        id: true,
        image: true,
        name: true,
        username: true,
        email: true,
        bio: true,
    }
  })
    if(!user) {return null}
  return (
    <div className='bg-[#fafbea] flex flex-col md:flex-row min-h-screen '>
        <div className=' flex flex-col px-10 pt-10 gap-3'>
            <UserProfileCard {...user}/>
            {session &&(
              <div className=''>
                <SignOutButton/>
              </div>
            )}
        </div>
        <div className='md:w-full'>
            <StartupSection userId={session.user?.id} /> {/* changed from email to userId */}
        </div>
    </div>
  );
};

export default UserPrivateProfile