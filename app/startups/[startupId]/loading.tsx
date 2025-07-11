import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function StartupDetailLoading() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-4 lg:py-8 h-screen lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-full">
          {/* Left Column - Startup Details */}
          <div className="flex flex-col space-y-4 lg:space-y-6 h-full">
            <Skeleton className="w-full h-48 sm:h-64 lg:h-1/2 rounded-xl" />

            <div className="flex-1 flex flex-col gap-3 bg-white rounded-2xl p-4 lg:p-6">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24 bg-gray-200" />
                <Skeleton className="h-6 w-20 bg-gray-200 rounded-full" />
              </div>
              <Skeleton className="h-6 w-48 bg-gray-200" />
              <Skeleton className="h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-5/6 bg-gray-200" />
              <Skeleton className="h-4 w-3/4 bg-gray-200" />
            </div>
          </div>

          {/* Right Column - Author & Pitch */}
          <div className="flex flex-col space-y-4 lg:space-y-6 h-full">
            {/* Author Info */}
            <div className="rounded-2xl p-4 lg:p-6 bg-white flex-shrink-0 flex flex-col gap-4">
              <Skeleton className="h-6 w-32 bg-gray-200" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <Skeleton className="h-5 w-32 bg-gray-200" />
                  <Skeleton className="h-4 w-24 bg-gray-200 mt-1" />
                </div>
              </div>
            </div>

            {/* Pitch Details */}
            <div className="flex-1 flex flex-col gap-3 bg-white rounded-2xl p-4 lg:p-6">
              <Skeleton className="h-6 w-32 bg-gray-200" />
              <Skeleton className="h-4 w-full bg-gray-200" />
              <Skeleton className="h-4 w-5/6 bg-gray-200" />
              <Skeleton className="h-4 w-2/3 bg-gray-200" />
              <Skeleton className="h-4 w-1/2 bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
