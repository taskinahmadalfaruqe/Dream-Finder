"use client";
import CommonButton from "@/components/shared/CommonButton";
// import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const Dashboard = () => {

  const {user} = useContext(AuthContext);


  return (
    <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
      <h2 className="font-bold text-3xl text-primaryColor text-center">
        This is User Dashboard Page.
      </h2>
      <div className="md:flex gap-10 p-5 mt-5">
        <div className="mb-10 h-full flex-1  border rounded space-y-4 p-4 shadow-xl hover:shadow-2xl duration-400">
          <h2 className="font-semibold text-xl text-primaryColor">User Info</h2>
          <Image
            className=""
            src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"} 
            height={50}
            width={50}
            alt="Profile image"
          />
          <div>
            <h2 className="pb-2">
              <span className="font-bold text-primaryColor">User Name:</span>{" "}
              {user?.displayName}
            </h2>
            <h2 className="pb-2">
              <span className="font-bold text-primaryColor">User Email:</span>{" "}
              {user?.email}
            </h2>
          </div>
          <div className="w-1/2 my-4">
            <Link href="/dashboard/profile">
              <CommonButton buttonName={"See More.."} />
            </Link>
          </div>
        </div>

        <div className="mb-10 h-full w-full flex-1  border rounded p-4 shadow-xl hover:shadow-2xl duration-400">
          <h2 className="font-semibold text-xl text-primaryColor text-center mb-5">
            Applied Job
          </h2>
          <div>
            <Fade direction="down" cascade>
              <Link href="/dashboard/appliedJob">
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2 className="font-bold text-2xl ">Total Applied Jobs : 12</h2>
                  
                </div>
              </Link>
            </Fade>
            
            <Fade direction="down" cascade>
              <Link href="/dashboard/bookmark">
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2 className="font-bold text-2xl ">Saved Jobs in Bookmark : 5</h2>
                </div>
              </Link>
            </Fade>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
