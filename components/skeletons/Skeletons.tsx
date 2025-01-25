import React from "react";
import { Skeleton } from "../ui/skeleton";

export const CandidateSummarySkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Skeleton className="h-7 w-28 md:w-40 lg:w-48" />
      <div className="flex flex-col gap-2 py-2">
        <Skeleton className="h-5 w-full md:w-full lg:w-full" />
        <Skeleton className="h-5 w-5/7 lg:w-11/12" />
        <Skeleton className="h-5 w-11/12 lg:hidden block" />
        <Skeleton className="h-5 w-4/5 md:w-10/12 lg:hidden block" />
        <Skeleton className="h-5 w-1/3 lg:hidden block" />
      </div>
    </div>
  );
};

export const KeywordsBadgeSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 w-full py-2">
      <Skeleton className="h-7 w-64" />
      <div className="w-full inline-flex gap-2 py-2 flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-6 lg:w-28 w-20 rounded-md bg-[#D7700B]/20"
          />
        ))}
      </div>
    </div>
  );
};

export const CandidateFeedbacksSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-5 max-w-screen-xl ">
      <Skeleton className="h-8 w-64" />
      <ul className="list-image-none space-y-4 w-full">
        <li className="flex items-center gap-3 border-l-4 border-[#D7700B] pl-3 py-0">
          <Skeleton className="h-6 w-full " />
        </li>
        <li className="flex items-center gap-3 border-l-4 border-[#D7700B] pl-3 py-0">
          <Skeleton className="h-6 w-10/12 " />
        </li>
        <li className="flex items-center gap-3 border-l-4 border-[#D7700B] pl-3 py-0">
          <Skeleton className="h-6 w-11/12 " />
        </li>
      </ul>
    </div>
  );
};
