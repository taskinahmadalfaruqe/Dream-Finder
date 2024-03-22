"use client";

import { Button, ScrollShadow, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

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
import { VscFeedback } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import Divider from "../Divider";
import useHr from "@/hooks/useHr";
import useAdmin from "@/hooks/useAdmin";
import NavigationSkeleton from "./NavigationSkeleton";
import useContextData from "@/hooks/useContextData";

const DashDeskSidebar = () => {
  const currentPathname = usePathname();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isHr, isHrLoading] = useHr();
  const { user } = useContextData();

  return (
    <>
      <ScrollShadow className="h-[55vh] 2xl:h-[60vh]">
        {/* dashboard navigation skeleton  */}
        {(isAdminLoading || isHrLoading) &&
          Array.from({ length: 8 }).map((_, index) => (
            <Fade delay={index * 50} key={index * 444}>
              <NavigationSkeleton />
            </Fade>
          ))}
        {/* hr route */}
        {!isAdminLoading && !isHrLoading && isHr && (
          <>
            {dashboardHrLinks.map((link, index) => (
              <Fade delay={index * 50} key={link.heading}>
                <Link href={`${link.path}`}>
                  <div className="overflow-hidden">
                    <div
                      className={
                        currentPathname === link.path
                          ? activeLinkStyle
                          : normalLinkStyle
                      }
                    >
                      {
                        <link.icon className=" max-sm:text-lg sm:text-3xl max-lg:hidden ml-4 mr-0" />
                      }
                      <Tooltip
                        className="font-medium text-whiteColor capitalize lg:hidden"
                        showArrow
                        color="success"
                        placement="right"
                        content={link.heading}
                      >
                        <div>
                          {
                            <link.icon className="text-2xl sm:text-3xl lg:hidden mr-4" />
                          }
                        </div>
                      </Tooltip>
                      {link.heading}
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </>
        )}
        {/* user route */}
        {!isAdminLoading && !isHrLoading && !isHr && !isAdmin && (
          <>
            {dashboardLinks.map((link, index) => (
              <Fade delay={index * 50} key={link.heading}>
                <Link href={`${link.path}`}>
                  <div className="overflow-hidden">
                    <div
                      className={
                        currentPathname === link.path
                          ? activeLinkStyle
                          : normalLinkStyle
                      }
                    >
                      {
                        <link.icon className=" max-sm:text-lg sm:text-3xl max-lg:hidden ml-4 mr-0" />
                      }
                      <Tooltip
                        className="font-medium text-whiteColor capitalize lg:hidden"
                        showArrow
                        color="success"
                        placement="right"
                        content={link.heading}
                      >
                        <div>
                          {
                            <link.icon className="text-2xl sm:text-3xl lg:hidden mr-4" />
                          }
                        </div>
                      </Tooltip>
                      {link.heading}
                    </div>
                  </div>
                </Link>
              </Fade>
            ))}
          </>
        )}
      </ScrollShadow>

      <div className="max-lg:hidden mt-10">
        <Divider content={"or"} />
      </div>

      <div className="max-lg:my-16 flex items-center max-lg:justify-center">
        <div className="">
          <hr className="lg:hidden max-lg:mb-2" />
          <Tooltip
            content="Go Home"
            className="font-medium text-whiteColor capitalize lg:hidden"
            showArrow
            color="success"
            placement="right"
          >
            <Link href={"/"}>
              <Button
                isIconOnly
                color="success"
                aria-label="Light"
                variant="light"
                className="bg-primaryColor text-secondaryColor hover:text-primaryColor   bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400 lg:hidden"
              >
                <GoHome className="max-sm:text-4xl sm:text-7xl dark:text-white dark:opacity-70 cursor-pointer rounded-md p-1" />
              </Button>
            </Link>
          </Tooltip>
          <Link
            href={"/"}
            className="text-secondaryColor dark:text-white dark:opacity-70 font-medium  active:scale-95 duration-400 max-lg:hidden flex items-center justify-center gap-4 text-3xl pl-7"
          >
            <GoHome className="" /> <span className="text-xl">Go Home</span>
          </Link>
        </div>
      </div>
    </>
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
  {
    heading: "FeedBack",
    path: "/dashboard/FeedBack",
    icon: VscFeedback,
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
    heading: "Applyed Job",
    path: "/dashboard/applyed-job",
    icon: FaListOl,
  },
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

const activeLinkStyle =
  "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl p-5 lg:p-3 px-6 lg:px-7 my-2 bg-primaryColor text-primaryColor font-semibold bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-primaryColor before:h-[50px] lg:before:h-[40px] duration-300 before:rounded-r-2xl before:duration-300 before:w-2 before:left-0 overflow-x-hidden w-64";
const normalLinkStyle =
  "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl py-5 px-[18px] lg:p-3 my-2 hover:bg-secondaryColor dark:opacity-70 duration-300 text-secondaryColor dark:text-white dark:opacity-70 font-semibold hover:bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-secondaryColor dark:opacity-70 before:h-0 before:w-0 hover:before:h-[20px] hover:before:w-1.5 before:rounded-r-2xl before:duration-300 before:left-0 overflow-x-hidden w-64";

export default DashDeskSidebar;
