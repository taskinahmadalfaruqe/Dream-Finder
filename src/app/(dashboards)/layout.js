/* "use client"
import AdminDashboard from "@/components/ui/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";
import useContextData from "@/hooks/useContextData";


const DashboardLayout = ({ children }) => {
  const { user } = useContextData();
  
  if (!user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <div className="container grid grid-cols-12 dark:bg-slate-900">
      <div className="col-span-12 lg:col-span-3">
        {
          user?.email === "taskinahmadalfaruqe@gmail.com" ? <AdminDashboard></AdminDashboard> : <UserDashboard></UserDashboard>
        }

      </div>
      <div className="md:p-10 col-span-12 lg:col-span-9 my-20 min-h-lvh">{children}</div>
    </div>
  );
};

export default DashboardLayout;
 */

"use client";

import { RxDashboard } from "react-icons/rx";
import { MdAddTask } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { PiNoteDuotone } from "react-icons/pi";
import { usePathname } from "next/navigation";
import UserDropDown from "@/components/shared/dashboardCompo/UserDropDown";
import DashNav from "@/components/shared/dashboardCompo/DashNav";
import DashMobileNav from "@/components/shared/dashboardCompo/DashMobileNav";
import DashDeskSidebar from "@/components/shared/dashboardCompo/DashDeskSidebar";
import useContextData from "@/hooks/useContextData";
import useHr from "@/hooks/useHr";
import AdminDashboard from "@/components/ui/AdminDashboard/AdminDashboard";

const DashboardLayout = ({ children }) => {
  const { user } = useContextData();
  const [isHr] = useHr();
  return (
    <>
      {user?.email === "msiamislam12345@gmail.com" ? (
        <div className="container grid grid-cols-12 dark:bg-slate-900">
          <div className="col-span-12 lg:col-span-3">
            {user?.email === "msiamislam12345@gmail.com" && (
              <AdminDashboard></AdminDashboard>
            )}
          </div>
          <div className="md:p-10 col-span-12 lg:col-span-9 my-20 min-h-lvh">
            {children}
          </div>
        </div>
      ) : (
        <div className="min-h-screen max-w-[1920px] mx-auto">
          <div className="sm:flex gap10 min-h-screen">
            {/* sidebar */}
            <div className="max-w-72 max-lg:max-w-[65px] duration-500 w-full h-screen overflow-hidden sticky top-0 max-sm:hidden  shadow-2xl">
              <div className="max-w-64">
                {/* logo */}
                <div className="my-10 px-[15px] lg:flex items-center gap-3">
                  <UserDropDown />
                  {isHr && (
                    <div className="max-lg:hidden text-sm text-secondaryColor font-medium">
                      <p>GREENWAR</p>
                      <p className="text-xs ">green@war.com</p>
                    </div>
                  )}
                  {isHr ||
                    (user && (
                      <div className="max-lg:hidden text-sm text-secondaryColor font-medium">
                        <p>{user.displayName}</p>
                        <p className="text-xs ">{user.email}</p>
                      </div>
                    ))}
                </div>
                {/* desktop and tablet sidebar navigation */}
                <DashDeskSidebar />
              </div>
            </div>
            {/* max-sm navigation bar */}
            <div className="w-full bg-whiteColor dark:bg-darkColor">
              <DashNav />
              {children}
              <DashMobileNav />
              <div className="lg:hidden h-24 sm:h-36 relative"></div>
            </div>
          </div>
        </div>
      )}
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
    icon: GoTasklist,
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
    heading: "Dashboard2",
    path: "/dashboard2",
    icon: RxDashboard,
  },
  {
    heading: "Profile2",
    path: "/dashboard/profile2",
    icon: GoTasklist,
  },
  {
    heading: "Applied Jobs2",
    path: "/dashboard/appliedJob2",
    icon: MdAddTask,
  },

  {
    heading: "Saved Jobs2",
    path: "/dashboard/bookmark2",
    icon: PiNoteDuotone,
  },
  {
    heading: "Dashboard3",
    path: "/dashboard3",
    icon: RxDashboard,
  },
  {
    heading: "Profile3",
    path: "/dashboard/profile3",
    icon: GoTasklist,
  },
  {
    heading: "Applied Jobs3",
    path: "/dashboard/appliedJob3",
    icon: MdAddTask,
  },

  {
    heading: "Saved Jobs3",
    path: "/dashboard/bookmark3",
    icon: PiNoteDuotone,
  },
  {
    heading: "Dashboard4",
    path: "/dashboard4",
    icon: RxDashboard,
  },
  {
    heading: "Profile4",
    path: "/dashboard/profile4",
    icon: GoTasklist,
  },
  {
    heading: "Applied Jobs4",
    path: "/dashboard/appliedJob4",
    icon: MdAddTask,
  },

  {
    heading: "Saved Jobs4",
    path: "/dashboard/bookmark4",
    icon: PiNoteDuotone,
  },
];

const mobileNormalLinkStyle =
  "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-secondaryColor text-secondaryColor font-semibold bg-opacity-5 hover:bg-opacity-15 before:absolute before:content-[''] before:bg-secondaryColor  before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-0 hover:before:w-7 before:h-0 hover:before:h-2 overflow-x-hidden";
const mobileActiveLinkStyle =
  "p-4 px-8 flex items-center justify-center mb-2  rounded-full duration-300 bg-primaryColor text-primaryColor font-semibold bg-opacity-10 before:absolute before:content-[''] before:bg-primaryColor before:h-[8px] before:rounded-t-2xl before:duration-300 before:bottom-0 before:w-14 overflow-x-hidden";

const activeLinkStyle =
  "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl p-5 lg:p-3 px-6 lg:px-7 my-2 bg-primaryColor text-primaryColor font-semibold bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-primaryColor before:h-[50px] duration-300 before:rounded-r-2xl before:duration-300 before:w-2 before:left-0 overflow-x-hidden w-64";
const normalLinkStyle =
  "flex items-center gap-3 max-sm:text-base max-md:text-lg md:text-xl p-5 lg:p-3 my-2 hover:bg-secondaryColor duration-300 text-secondaryColor font-semibold hover:bg-opacity-10 rounded-r-full active_btn relative before:absolute before:content-[''] before:bg-secondaryColor before:h-0 before:w-0 hover:before:h-[20px] hover:before:w-1.5 before:rounded-r-2xl before:duration-300 before:left-0 overflow-x-hidden w-64";

export default DashboardLayout;
