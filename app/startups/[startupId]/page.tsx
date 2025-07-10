import { prisma } from "@/lib/prisma"
import Image from "next/image"

export default async function Page({
  params,
}: {
  params: Promise<{ startupId: string }>
}) {
  const startupId = (await params).startupId
  const startup = await prisma.startup.findUnique({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          image: true,
        },
      },
    },
    where: {
      id: startupId,
    },
  })

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full p-10 text-center gap-3 bg-[#fabb20] flex items-center justify-center flex-col">
        <div>
          {startup?.createdAt.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <h1 className="text-6xl londrina">{startup?.title}</h1>
        <div className="text-white">{startup?.description}</div>
      </div>

      {/* Main Section */}
      <div className="px-10 lg:px-30 py-20 flex items-center justify-center flex-col gap-5 w-full">
        
        {/* Banner Image */}
        <div className="relative w-full sm:h-130 h-72 overflow-hidden rounded-lg">
          <Image
            src={startup?.image || ""}
            alt="Startup Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:px-30 flex gap-10 flex-col">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-10">
            
            {/* User Info */}
            <div className="flex gap-3 items-center">
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  src={startup?.user.image || ""}
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">{startup?.user.name}</h1>
                {startup?.user.username ? (
                  <div>@{startup.user.username}</div>
                ) : (
                  <div>{startup?.user.email}</div>
                )}
              </div>
            </div>

            {/* Category */}
            <div className="py-1 px-5 w-fit bg-amber-200 rounded-full">
              {startup?.category}
            </div>
          </div>

          {/* Pitch Details */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">Pitch Details</h1>
            <div className="mt-5">{startup?.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
