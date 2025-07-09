
import StartupSection from '@/components/landingpage/startupSection'
import UserProfileCard from '@/components/UserProfileCard'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
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
    <div className='bg-[#fafbea] flex '>
        <div className='h-screen w-[40%]'>
            <UserProfileCard {...user}/>
        </div>
        <div className='w-full h-full'>
            <StartupSection userId={session.user?.id} /> {/* changed from email to userId */}
        </div>
    </div>
  );
};

export default UserPrivateProfile