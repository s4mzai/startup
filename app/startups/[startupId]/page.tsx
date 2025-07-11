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
    <div className="min-h-screen bg-[#fafbea]">
      <div className="container mx-auto px-4 py-4 lg:py-8 h-screen lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
          {/* Left Column - Startup Details */}
          <div className="flex flex-col space-y-4 lg:space-y-6 h-full">
            {/* Startup Image */}
            <div className="relative w-full h-48 sm:h-64 lg:h-1/2 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
              <Image
                src={startup?.image || ""}
                alt="Startup Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Startup Info */}
            <div className="resize-none bg-white rounded-2xl p-4 lg:p-6 font-semibold flex-1 flex flex-col
             lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
             transition-all duration-300
             translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
             translate-y-[-4px] lg:translate-y-[0px] 
             hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
             hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
             active:rounded-2xl active:shadow-none
             
             border-none focus:border-none focus:outline-none focus:ring-0 
             focus-visible:ring-0 ring-0 outline-none">
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <span className="text-xs lg:text-sm text-gray-500 font-medium">
                  {startup?.createdAt.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <div className="py-1 px-2 lg:px-3 bg-amber-100 text-amber-800 rounded-full text-xs lg:text-sm font-medium">
                  {startup?.category}
                </div>
              </div>
              
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
                {startup?.title}
              </h1>
              
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-1 overflow-y-auto">
                {startup?.description}
              </p>
            </div>
          </div>

          {/* Right Column - Author & Pitch */}
          <div className="flex flex-col space-y-4 lg:space-y-6 h-full">
            {/* Author Info */}
            <div className="resize-none bg-white rounded-2xl p-4 lg:p-6 font-semibold flex-shrink-0
             lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
             transition-all duration-300
             translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
             translate-y-[-4px] lg:translate-y-[0px] 
             hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
             hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
             active:rounded-2xl active:shadow-none
             
             border-none focus:border-none focus:outline-none focus:ring-0 
             focus-visible:ring-0 ring-0 outline-none">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">Created by</h2>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="relative w-12 h-12 lg:w-16 lg:h-16 overflow-hidden rounded-full ring-2 ring-gray-100 flex-shrink-0">
                  <Image
                    src={startup?.user.image || ""}
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-base lg:text-lg text-gray-900 truncate">
                    {startup?.user.name}
                  </h3>
                  {startup?.user.username ? (
                    <p className="text-gray-600 text-sm lg:text-base truncate">@{startup.user.username}</p>
                  ) : (
                    <p className="text-gray-600 text-sm lg:text-base truncate">{startup?.user.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Pitch Details */}
            <div className="resize-none bg-white rounded-2xl p-4 lg:p-6 font-semibold flex-1 flex flex-col
             lg:bg-[#fabb20] lg:text-black lg:hover:bg-white
             transition-all duration-300
             translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] 
             translate-y-[-4px] lg:translate-y-[0px] 
             hover:rounded-md shadow-[4px_4px_0px_black] lg:shadow-[0px_0px_0px_black] 
             hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] 
             active:rounded-2xl active:shadow-none
             
             border-none focus:border-none focus:outline-none focus:ring-0 
             focus-visible:ring-0 ring-0 outline-none">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Pitch Details
              </h2>
              <div className="prose prose-gray max-w-none flex-1 overflow-y-auto">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm lg:text-base">
                  {startup?.pitch}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}