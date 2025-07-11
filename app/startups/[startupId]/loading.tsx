import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const StartupDetailLoading = () => {
  return (
    <div className="w-full">
      {/* Header Skeleton */}
      <div className="w-full p-10 text-center gap-3 flex items-center justify-center flex-col">
        <Skeleton className="h-4 w-24 bg-neutral-300" /> {/* Date */}
        <Skeleton className="h-12 w-1/2 bg-neutral-300 rounded-lg" /> {/* Title */}
        <Skeleton className="h-4 w-2/3 bg-neutral-300" /> {/* Description */}
      </div>

      {/* Main Section */}
      <div className="px-10 lg:px-30 py-20 flex items-center justify-center flex-col gap-5 w-full">

        {/* Banner Image Skeleton */}
        <Skeleton className="w-full h-72 sm:h-[520px] rounded-lg bg-neutral-300" />

        {/* Details Section */}
        <div className="w-full lg:px-30 flex gap-10 flex-col">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-10">
            
            {/* User Info Skeleton */}
            <div className="flex gap-3 items-center">
              <Skeleton className="w-12 h-12 rounded-full bg-neutral-300" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-32 bg-neutral-300" />
                <Skeleton className="h-3 w-24 bg-neutral-300" />
              </div>
            </div>

            {/* Category Skeleton */}
            <Skeleton className="py-2 px-6 w-32 rounded-full bg-neutral-300" />
          </div>

          {/* Pitch Details Skeleton */}
          <div className="text-center flex flex-col gap-4">
            <Skeleton className="h-6 w-40 mx-auto bg-neutral-300" />
            <Skeleton className="h-4 w-3/4 mx-auto bg-neutral-300" />
            <Skeleton className="h-4 w-2/3 mx-auto bg-neutral-300" />
            <Skeleton className="h-4 w-1/2 mx-auto bg-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetailLoading;
