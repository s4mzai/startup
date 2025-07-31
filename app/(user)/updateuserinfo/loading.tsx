import { Skeleton } from "@/components/ui/skeleton"

const UpdateUserInfoSkeleton = () => {
  return (
    <div className='flex flex-col pt-10 px-10 w-full items-center justify-center min-h-screen'>
      {/* HEADING SKELETON */}
      <div className='w-fit p-3 border-black border-dashed text-center '>
        <Skeleton className="h-12 w-[200px] sm:w-[500px]" />
      </div>
      
      {/* FORM SKELETON */}
      <div className="w-full flex items-center justify-between gap-10 pt-5 sm:p-10 lg:p-20 flex-col md:flex-row">
      <div className="flex flex-col space-y-8 w-full">
        {/* NAME SKELETON */}
        <div className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
          <div className="flex flex-col gap-3 w-full sm:w-[80%]">
            <div className="w-full px-5 flex items-center justify-between">
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="w-full h-12 rounded-md" />
          </div>
          <Skeleton className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg" />
        </div>

        {/* USERNAME SKELETON */}
        <div className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
          <div className="flex flex-col gap-3 w-full sm:w-[80%]">
            <div className="w-full px-5 flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="w-full h-12 rounded-md" />
          </div>
          <Skeleton className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg" />
        </div>

        {/* BIO SKELETON */}
        <div className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
          <div className="flex flex-col gap-3 w-full sm:w-[80%]">
            <div className="w-full px-5 flex items-center justify-between">
              <Skeleton className="h-4 w-8" />
            </div>
            <Skeleton className="w-full h-12 rounded-md" />
          </div>
          <Skeleton className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg" />
        </div>

        {/* IMAGE SKELETON */}
        <div className="flex w-full sm:items-baseline-last gap-4 flex-col sm:flex-row">
          <div className="flex flex-col gap-3 w-full sm:w-[80%]">
            <div className="w-full px-5 flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="w-full h-12 rounded-md" />
          </div>
          <Skeleton className="w-full sm:w-[20%] h-12 min-w-[100px] rounded-lg" />
        </div>

        {/* BACK TO HOME BUTTON SKELETON */}
        <Skeleton className="h-12 w-full rounded-2xl" />
      </div>
    </div>
  </div>
  )
}

export default UpdateUserInfoSkeleton