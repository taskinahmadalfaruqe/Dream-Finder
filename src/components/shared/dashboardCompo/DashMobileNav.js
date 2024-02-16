"use client";

import { RxDashboard } from "react-icons/rx";
import {
  MdAddTask,
  MdAddToQueue,
  MdOutlinePlaylistAddCheck,
  MdOutlineAddIcCall,
} from "react-icons/md";
import { GoHome } from "react-icons/go";
import { PiNoteDuotone } from "react-icons/pi";
import { LuUser2, LuPencilLine } from "react-icons/lu";
import { FaListOl } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { ScrollShadow, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import useHr from "@/hooks/useHr";

const DashMobileNav = () => {
  const currentPathname = usePathname();
  const [isHr] = useHr();

  return (
    <div className="sm:hidden fixed z-[9999] bottom-0">
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        size={0}
        className="flex items-center justify-start gap-6 p-2 w-screen backdrop-blur-[80px] bg-white dark:bg-black rounded-t-3xl shadow-2xl relative border-t-8  dark:border-none border-opacity-10"
      >
        {isHr ? (
          <>
            {" "}
            {dashboardHrLinks.map(link => (
              <Link
                className={`${
                  currentPathname === link.path
                    ? mobileActiveLinkStyle
                    : mobileNormalLinkStyle
                }`}
                href={`${link.path}`}
                key={link.heading}
              >
                <Tooltip
                  showArrow
                  placement="top"
                  color="success"
                  content={link.heading}
                  className="capitalize text-white font-semibold"
                >
                  <div className="">
                    {
                      <link.icon
                        className={`text-3xl dark:text-2xl duration-200 ${
                          currentPathname === link.path
                            ? "dark:contrast-[100] dark:saturate-200 "
                            : "dark:text-primaryColor dark:opacity-50"
                        }`}
                      />
                    }
                  </div>
                </Tooltip>
              </Link>
            ))}
          </>
        ) : (
          <>
            {dashboardLinks.map(link => (
              <Link
                className={`${
                  currentPathname === link.path
                    ? mobileActiveLinkStyle
                    : mobileNormalLinkStyle
                }`}
                href={`${link.path}`}
                key={link.heading}
              >
                <Tooltip
                  showArrow
                  placement="top"
                  color="success"
                  content={link.heading}
                  className="capitalize text-white font-semibold"
                >
                  <div className="">
                    {
                      <link.icon
                        className={`text-3xl dark:text-2xl duration-200 ${
                          currentPathname === link.path
                            ? "dark:contrast-[100] dark:saturate-200 "
                            : "dark:text-primaryColor dark:opacity-50"
                        }`}
                      />
                    }
                  </div>
                </Tooltip>
              </Link>
            ))}
          </>
        )}
        {/* {dashboardLinks.map(link => (
          <Link
            className={`${
              currentPathname === link.path
                ? mobileActiveLinkStyle
                : mobileNormalLinkStyle
            }`}
            href={`${link.path}`}
            key={link.heading}
          >
            <Tooltip
              showArrow
              placement="top"
              color="success"
              content={link.heading}
              className="capitalize text-white font-semibold"
            >
              <div className="">
                {
                  <link.icon
                    className={`text-3xl dark:text-2xl duration-200 ${
                      currentPathname === link.path
                        ? "dark:contrast-[100] dark:saturate-200 "
                        : "dark:text-primaryColor dark:opacity-50"
                    }`}
                  />
                }
              </div>
            </Tooltip>
          </Link>
        ))} */}
      </ScrollShadow>
    </div>
  );
};

const dashboardLinks = [
  {
    heading: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    heading: "Profile",
    path: "/dashboard/profile",
    icon: LuUser2,
  },
  {
    heading: "Applied Jobs",
    path: "/dashboard/appliedJob",
    icon: MdAddTask,
  },

  {
    heading: "Saved Jobs",
    path: "/dashboard/bookmark",
    icon: PiNoteDuotone,
  },
];

const dashboardHrLinks = [
  {
    heading: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    heading: "Profile",
    path: "/dashboard/profile",
    icon: LuUser2,
  },
  {
    heading: "Post Job",
    path: "/dashboard/post-job",
    icon: MdAddToQueue,
  },
  {
    heading: "Manage Jobs",
    path: "/dashboard/manage-jobs",
    icon: LuPencilLine,
  },
  // ////////
  {
    heading: "Sort List",
    path: "/dashboard/sort-list",
    icon: FaListOl,
  },
  {
    heading: "Task",
    path: "/dashboard/task",
    icon: MdOutlinePlaylistAddCheck,
  },
  {
    heading: "Interview call",
    path: "/dashboard/interview-call",
    icon: MdOutlineAddIcCall,
  },
  {
    heading: "Hired",
    path: "/dashboard/hired",
    icon: IoCheckmarkDoneCircleOutline,
  },
];
const mobileNormalLinkStyle =
  "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-secondaryColor text-secondaryColor font-semibold bg-opacity-5 hover:bg-opacity-15 before:absolute before:content-[''] before:bg-secondaryColor  before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-0 hover:before:w-7 before:h-0 hover:before:h-2 overflow-x-hidden FOR_DARK_MODE--> dark:after:bg-gradient-to-t from-whiteColor nrm_lnk_light dark:after:pointer-events-none dark:after:content-[''] dark:after:absolute dark:after:w-[20px] dark:after:h-0 dark:after:bottom-2 dark:after:opacity-[.15]";
const mobileActiveLinkStyle =
  "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-primaryColor dark:bg-black text-primaryColor font-semibold bg-opacity-10 before:absolute before:content-[''] before:bg-primaryColor before:h-[8px] before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-14 overflow-x-hidden FOR_DARK_MODE--> dark:after:bg-gradient-to-t from-whiteColor dark:after:duration-300 act_lnk_light dark:after:pointer-events-none dark:after:content-[''] dark:after:absolute dark:after:w-[65px] dark:after:h-[75px] dark:after:bottom-2 dark:after:opacity-[.35]";

export default DashMobileNav;
