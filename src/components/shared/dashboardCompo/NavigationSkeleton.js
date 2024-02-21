import { Skeleton } from "@nextui-org/react";
import React from "react";

const NavigationSkeleton = () => {
  return (
    <div className="max-w-16 w-full flex items-center gap-3 max-sm:pb-2 sm:pb-4 sm:pl-2 lg:pl-6 duration-300">
      <div>
        <Skeleton className="flex rounded-full w-14 h-14 sm:w-12 sm:h-12" />
      </div>
      <div className="w-full flex flex-col gap-2 max-lg:hidden">
        <Skeleton className="h-6 w-40 rounded-lg" />
      </div>
    </div>
  );
};

export default NavigationSkeleton;
