"use client";
import CommonButton from "@/components/shared/CommonButton";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoHomeOutline, IoReorderThreeSharp } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Fade } from "react-awesome-reveal";
import "./userDashboard.css";
import ProtectedRoute from "@/components/shared/ProtectedRoute/ProtectedRoute";

const UserDashboard = () => {
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <div>
        <Disclosure as="nav">
          <Disclosure.Button
            className="absolute top-4 right-4 lg:hidden inline-flex items-center peer justify-center rounded-md p-2
            text-gray-900 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white gorup hover:bg-gray-900 "
          >
            <IoReorderThreeSharp
              className="block lg:hidden h-6 w-6"
              aria-hidden="true"
            />
          </Disclosure.Button>
          <div
            className="p-6 w-1/2 h-screen border border-r-primaryColor bg-slate-100 dark:bg-slate-800 dark:text-blue-500 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer peer-focus:left-0 
            peer:transition ease-out delay-150 duration-200 px-0"
          >
            <Fade direction="up" cascade>
              <div className="flex items-center ">
                <Image
                  alt="dashboardLogo"
                  width={50}
                  height={50}
                  src="/icon.png"
                />
                <h1 className={` font-bold text-lg lg:text-xl `}>
                  Dream Finder
                </h1>
              </div>
            </Fade>
            <div className="my-4 border"></div>

            <Link href="/">
              <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                <IoHomeOutline className="text-2xl" />
                <h1 className={` font-bold text-lg `}>Go Home</h1>
              </div>
            </Link>

            <div className={`${pathname == "/dashboard" && "active "}`}>
              <Link href="/dashboard">
                <div
                  className={`
                flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg`}
                >
                  <RxDashboard className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Dashboard</h1>
                </div>
              </Link>
            </div>

            <div className={`${pathname == "/dashboard/profile" && "active"}`}>
              <Link href="/dashboard/profile">
                <div
                  className={` 
                flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg`}
                >
                  <RiProfileLine className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Profile</h1>
                </div>
              </Link>
            </div>

            <div
              className={`${pathname == "/dashboard/appliedJob" && "active"}`}
            >
              <Link href="/dashboard/appliedJob">
                <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                  <FaRegFileAlt className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Applied Job</h1>
                </div>
              </Link>
            </div>
            <div className={`${pathname == "/dashboard/bookmark" && "active"}`}>
              <Link href="/dashboard/bookmark">
                <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                  <FaBookmark className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Save Posts</h1>
                </div>
              </Link>
            </div>
            <div className={`${pathname == "/dashboard/post-job" && "active"}`}>
              <Link href="/dashboard/post-job">
                <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                  <RiProfileLine className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Post Job</h1>
                </div>
              </Link>
            </div>
            <div
              className={`${pathname == "/dashboard/manage-jobs" && "active"}`}
            >
              <Link href="/dashboard/manage-jobs">
                <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                  <RiProfileLine className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Manage Jobs</h1>
                </div>
              </Link>
            </div>

            <div>
              <Link href="/logout">
                <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                  <IoMdLogOut className="text-2xl" />
                  <h1 className={` font-bold text-lg `}>Logout</h1>
                </div>
              </Link>
            </div>
          </div>
        </Disclosure>
      </div>
    </ProtectedRoute>
  );
};

export default UserDashboard;
