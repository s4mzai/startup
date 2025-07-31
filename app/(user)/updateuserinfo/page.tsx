import UpdateUserInfoForm from '@/components/UpdateUserInfoForm'
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma'

const UpdateUserInfo = async() => {
  const session = await auth();
  const user = await prisma.user.findUnique({where:{id:session?.user?.id}})
  return (
    <div className='bg-[#fabb20] lg:bg-[#fafbea] flex flex-col p-10 w-full items-center justify-center min-h-screen'>
        {/* UPPER CONTAINER HERE */}
        <div className='text-3xl font-extrabold uppercase border-b-1 w-fit p-5 border-black border-dashed text-center'>
            Help Us To Know You Better!
        </div>
        {/* LOWER CONTAINER HERE */}
        <div className='w-full'>
            <UpdateUserInfoForm
              defaultName={user?.name || null} 
              defaultUsername={user?.username || null}
              defaultBio={user?.bio || null}
              defaultImage={user?.image || null} 
            />
        </div>
    </div>
  )
}

export default UpdateUserInfo



