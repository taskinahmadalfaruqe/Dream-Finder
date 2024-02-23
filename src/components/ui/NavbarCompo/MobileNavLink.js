"use client";

import useAdmin from "@/hooks/useAdmin";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavLink = ({ link }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const currentPath = usePathname();
  return (
    <div className="w-full">
      <Link
        className={
          currentPath === link?.path ? activeLinkStyle : normalLinkStyle
        }
        href={
          link?.path === "/dashboard"
            ? isAdminLoading
              ? "/"
              : isAdmin
              ? "/admin"
              : "/dashboard"
            : link.path
        }
      >
        {link.title}
      </Link>
    </div>
  );
};

const normalLinkStyle =
  "relative dark:text-lightWhiteColor text-xl sm:text-2xl md:text-3xl max-sm:dark:font-medium font-semibold my-2 md:my-3 w-max mx-auto block text-center dark:opacity-70 dark:hover:[text-shadow:0_0_10px_#00be63,_0_0_15px_#00be63,_0_0_20px_#00be63,_0_0_30px_#00be63,_0_0_40px_#00be63,_0_0_50px_#00be63] hover:text-glowing dark:hover:opacity-100 hover:text-primaryColor text-secondaryColor duration-500 after:content-[''] after:bg-primaryColor after:absolute after:w-full after:h-1 md:after:h-[5px] after:-bottom-[6px] md:after:-bottom-2 after:left-0 after:rounded-2xl after:scale-0 hover:after:scale-100 after:duration-400";

const activeLinkStyle =
  "relative dark:text-lightWhiteColor text-xl sm:text-2xl md:text-3xl max-sm:dark:font-medium font-semibold my-2 md:my-3 w-max mx-auto block text-center dark:[text-shadow:0_0_10px_#00be63,_0_0_15px_#00be63,_0_0_20px_#00be63,_0_0_30px_#00be63,_0_0_40px_#00be63,_0_0_50px_#00be63,_0_0_60px_#00be63] hover:text-glowing hover:text-primaryColor text-primaryColor  duration-500 after:content-[''] after:bg-primaryColor after:absolute after:w-full after:h-1 md:after:h-[5px] after:-bottom-[6px] md:after:-bottom-2 after:left-0 after:rounded-2xl  after:duration-400";

export default MobileNavLink;
