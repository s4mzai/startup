"use client"
import Image from 'next/image'
import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from 'next/navigation';

interface UserProfileCardProps {
  id: string
  image: string | null
  name: string | null
  username: string | null
  email: string
  bio: string | null
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  image,
  name,
  username,
  email,
  bio,
}) => {
  const router = useRouter()
  let shortbio = bio
  if (bio) {
    shortbio = bio.length > 70 ? bio.slice(0, 70) + '...' : bio
  }

  return (
    <div className="md:w-90">
      <div className="relative bg-[#fabb20] border-dashed rounded-lg border-2 border-black  p-5 flex flex-col justify-center gap-5">
        <div onClick={()=>{router.push("/updateuserinfo")}} className='absolute top-3 right-3 rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] p-3 text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none'>
          <FaUserEdit />
        </div>
        {/* Avatar Image - fixed */}
        <div className='w-full flex justify-center'>
          <div className="relative w-30 h-30 sm:w-30 sm:h-30 flex rounded-full overflow-hidden">
            <Image
              src={image || ''}
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className=''>
          <h1 className="font-bold text-2xl">
            {/* <AnimatedText text={`${name}`} /> */}
            {name}
          </h1>
          <div className="">
              {username ? <div>@{username}</div> : <div>{email}</div>}
          </div>
        </div>
        <div className="">
          {bio ? <div>{shortbio}</div> : <div className='text-red-500'>Bio Not Available!</div>}
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
