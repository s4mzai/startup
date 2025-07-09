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
    where:{
        id: startupId,
    },
  })
  return (
    <div className="w-full">
        <div className="w-full h-[15rem] gap-3 bg-[#fabb20] flex items-center justify-center flex-col">
            <div>
                {startup?.createdAt.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
                })}
            </div>
            <h1 className="text-6xl londrina">{startup?.title}</h1>
            <div className="text-white">
                {startup?.description}
            </div>
        </div>
        <div className="px-30 py-20 flex items-center justify-center flex-col gap-5 w-full">
            <div className="w-full h-130 overflow-hidden rounded-lg">
                <Image src={startup?.image || ""} alt="Startup Image" width={48} height={48} className="w-full h-full object-cover"/>
            </div>
            <div className="w-full px-30 flex gap-10 flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center ">
                        <div className="w-12 h-12 overflow-hidden rounded-full">
                            <Image src={startup?.user.image || ""} alt="avatar" width={48} height={48} className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">{startup?.user.name}</h1>
                            {startup?.user.username?<div>@{startup.user.username}</div>:<div>{startup?.user.email}</div>}
                        </div>

                    </div>
                    <div className="py-1 px-5 w-fit bg-amber-200 rounded-full">
                        {startup?.category}
                    </div>
                </div>
                {/* TODO: Show the pitch details here after adding  */}
                <div>
                    <h1 className="text-2xl font-bold">Pitch Details</h1>
                    <div className="mt-5">{startup?.description}</div>
                </div>
            </div>
        </div>
    </div>
  )
}