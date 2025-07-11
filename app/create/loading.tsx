import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CreateLoading = () => {
  return (
    <div className="bg-[#fabb20] lg:bg-[#fafbea] flex flex-col p-10 w-full items-center justify-center min-h-screen gap-12">
      {/* HEADER SKELETON */}
      <div className="text-3xl font-extrabold uppercase w-fit p-5 text-center">
        <Skeleton className="h-10 w-64 bg-gray-200" />
      </div>

      {/* FORM SKELETON (2 columns) */}
      <div className="w-full flex items-center justify-between gap-10 pt-5 sm:p-10 lg:p-20 flex-col md:flex-row">
        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-8 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2 w-full">
              <Skeleton className="h-4 w-24 bg-gray-200 ml-5" />
              <Skeleton className="h-12 w-full bg-gray-200 rounded-md" />
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full flex flex-col gap-5">
          {/* PITCH FIELD */}
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-4 w-24 bg-gray-200 ml-5" />
            <Skeleton className="h-60 w-full bg-gray-200 rounded-md" />
          </div>

          {/* SUBMIT BUTTON */}
          <Skeleton className="h-12 w-1/2 self-center bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CreateLoading;
