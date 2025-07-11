import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UserPrivateProfileLoading = () => {
  return (
    <div className="bg-[#fafbea] flex flex-col md:flex-row p-10 gap-6 min-h-screen">
      {/* Left Side: Profile Card Skeleton */}
      <div className="md:w-[40%] flex flex-col items-center gap-4">
        <Skeleton className="h-10 w-2/3 bg-neutral-300" /> {/* Name */}
        <Skeleton className="rounded-full w-40 h-40 bg-neutral-300" /> {/* Profile image */}
        <Skeleton className="h-4 w-1/2 bg-neutral-300" /> {/* Username */}
        <Skeleton className="h-4 w-3/4 bg-neutral-300" /> {/* Bio */}
      </div>

      {/* Right Side: Startup Cards Skeleton */}
      <div className="md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-40 w-full rounded-xl bg-neutral-300" />
            <Skeleton className="h-4 w-3/4 bg-neutral-300" />
            <Skeleton className="h-4 w-1/2 bg-neutral-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPrivateProfileLoading;
