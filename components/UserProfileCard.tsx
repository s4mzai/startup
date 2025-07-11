import Image from 'next/image'
import React from 'react'
import AnimatedText from './animations/fillText'

interface UserProfileCardProps {
  id: string
  image: string | null
  name: string | null
  username: string | null
  email: string
  bio: string | null
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  id,
  image,
  name,
  username,
  email,
  bio,
}) => {
  let shortbio = bio
  if (bio) {
    shortbio = bio.length > 70 ? bio.slice(0, 70) + '...' : bio
  }

  return (
    <div className=" w-full p-10">
      <div className="bg-[#fabb20] rounded-lg border-2 border-black p-5 flex flex-col items-center justify-center gap-5">
        <h1 className="londrina text-5xl">
          <AnimatedText text={`${name}`} />
        </h1>

        {/* Avatar Image - fixed */}
        <div className="relative w-30 h-30 sm:w-52 sm:h-52 rounded-full overflow-hidden">
          <Image
            src={image || ''}
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center">
          <div className="text-xl font-bold text-white">
            {username ? <div>@{username}</div> : <div>{email}</div>}
          </div>
          <div className="text-white">
            {bio ? <div>{shortbio}</div> : <div>Bio Not Available!</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
