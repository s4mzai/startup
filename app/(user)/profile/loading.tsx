import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UserPrivateProfileLoading = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-10 gap-10">
      {/* LEFT: Profile card + signout */}
      <div className="flex flex-col gap-5 w-full md:max-w-sm">
        {/* Profile Card Skeleton with border */}
        <div className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">
          {/* Avatar */}
          <div className="w-full flex justify-center">
            <Skeleton className="w-24 h-24 rounded-full bg-gray-200" />
          </div>

          {/* Name */}
          <Skeleton className="h-5 w-1/3 bg-gray-200 rounded" />
          {/* Username/Email */}
          <Skeleton className="h-4 w-1/2 bg-gray-200 rounded" />
          {/* Bio */}
          <Skeleton className="h-20 w-full bg-gray-200 rounded" />
        </div>

        {/* Sign Out Button Skeleton */}
        <Skeleton className="h-12 w-full bg-gray-200 rounded-xl shadow" />
      </div>

      {/* RIGHT: Startup Section */}
      <div className="flex flex-col items-center justify-center w-full gap-10">
        {/* Heading Skeleton */}
        <Skeleton className="h-12 w-72 rounded bg-gray-200" />

        {/* Startup Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="w-[300px] h-[400px] border border-gray-200 rounded-xl p-4 flex flex-col gap-4"
            >

              {/* Image */}
              <Skeleton className="h-[150px] w-full rounded bg-gray-200" />

              {/* Title */}
              <Skeleton className="h-6 w-40 rounded bg-gray-200" />

              {/* Description */}
              <Skeleton className="h-4 w-full rounded bg-gray-200" />
              <Skeleton className="h-4 w-5/6 rounded bg-gray-200" />

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto pt-4">
                <Skeleton className="h-5 w-24 rounded-full bg-gray-200" />
                <Skeleton className="h-4 w-12 rounded bg-gray-200" />
              </div>

              {/* Category */}
              <Skeleton className="h-4 w-20 mx-auto bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPrivateProfileLoading;
