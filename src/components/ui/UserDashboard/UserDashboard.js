"use client";
import CommonButton from "@/components/shared/CommonButton";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegFileAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoHomeOutline, IoReorderThreeSharp } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Fade } from "react-awesome-reveal";
import "./userDashboard.css";

const UserDashboard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState();
  
 useEffect(()=>{
  if(pathname.includes("/dashboard")){
    setIsActive(0)
  }
  if(pathname.includes("/dashboard/profile")){
    setIsActive(1)
  }
  if(pathname.includes("/dashboard/profile")){
    setIsActive(1)
  }
  if(pathname.includes("/dashboard/appliedJob")){
    setIsActive(2)
  }
  if(pathname.includes("/dashboard/bookmark")){
    setIsActive(3)
  }
 },[isActive, pathname])

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button
          className="absolute top-4 right-4 lg:hidden inline-flex items-center peer justify-center rounded-md p-2
            text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white gorup hover:bg-gray-900 "
        >
          <IoReorderThreeSharp
            className="block lg:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div
          className="p-6 w-1/2 h-screen border border-r-primaryColor bg-slate-100 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer peer-focus:left-0 
            peer:transition ease-out delay-150 duration-200 px-0"
        >
          <Fade direction="up" cascade>
            <div className="flex  items-center ">
              {/* <RxDashboard className='text-xl' /> */}
              <Image alt="dashboardLogo" width={50} height={50} src="/icon.png" />
              <h1 className={` font-bold text-lg lg:text-xl `}>Dream Finder</h1>
          
            </div>
          </Fade>
          <div className="my-4 border"></div>

          <Link href="/">
            <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
              <IoHomeOutline className="text-2xl" />
              <h1 className={` font-bold text-2xl `}>Go Home</h1>
            </div>
          </Link>

          <div
            className={`${isActive == 0 && "active "}`}
          >
            <Link href="/dashboard">
              <div
                className={`
                flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg`}
              >
                <RxDashboard className="text-2xl" />
                <h1 className={` font-bold text-2xl `}>Dashboard</h1>
              </div>
            </Link>
          </div>

          <div
            className={`${isActive == 1 && "active"}`}
          >
            <Link href="/dashboard/profile">
              <div
                className={` 
                flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg`}
              >
                <RiProfileLine className="text-2xl" />
                <h1 className={` font-bold text-2xl `}>Profile</h1>
              </div>
            </Link>
          </div>

          <div
            className={`${isActive == 2 && "active"}`}
          >
            <Link href="/dashboard/appliedJob">
              <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                <FaRegFileAlt className="text-2xl" />
                <h1 className={` font-bold text-2xl `}>Applied Job</h1>
              </div>
            </Link>
          </div>
          <div
            className={`${isActive == 3 && "active"}`}
          >
            <Link href="/dashboard/bookmark">
              <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
                <FaBookmark className="text-2xl" />
                <h1 className={` font-bold text-2xl `}>Save Posts</h1>
              </div>
            </Link>
          </div>

          <div>
          <Link href="/logout">
            <div className="flex gap-x-2 items-center px-2 py-4 mb-2 hover:bg-lightPrimaryColor hover:rounded-lg">
              <IoMdLogOut className="text-2xl" />
              <h1 className={` font-bold text-2xl `}>Logout</h1>
            </div>
          </Link>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default UserDashboard;
