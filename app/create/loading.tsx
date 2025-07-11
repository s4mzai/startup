import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CreateStartupPageLoading = () => {
  return (
    <div className="flex flex-col p-10 items-center justify-center min-h-screen gap-10">
      {/* UPPER HEADING SKELETON */}
      <div className="w-full flex items-center justify-center text-center">
        <Skeleton className="h-16 w-[70%] sm:w-[50%] bg-neutral-300 rounded-xl" />
      </div>

      {/* FORM SKELETON */}
      <div className="w-full flex items-center justify-center">
        <div className="min-w-80 w-[50%] flex flex-col gap-6 p-5">
          {/* Repeating skeleton blocks for each form field */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-4 w-24 bg-neutral-300" /> {/* Label */}
              <Skeleton className="h-14 w-full bg-neutral-300 rounded-full" /> {/* Input */}
            </div>
          ))}

          {/* Submit Button */}
          <Skeleton className="h-14 w-1/2 self-center bg-neutral-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CreateStartupPageLoading;
