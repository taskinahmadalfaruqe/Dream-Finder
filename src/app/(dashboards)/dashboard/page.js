"use client"
import CommonButton from "@/components/shared/CommonButton";
// import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <h2 className="font-bold text-3xl text-primaryColor text-center">This is User Dashboard Page.</h2>
      <div className="md:flex gap-10 p-5 mt-5">
        <div className="mb-10 h-full flex-1  border rounded space-y-4 p-4 shadow-xl hover:shadow-2xl duration-400">
          <h2 className="font-semibold text-xl text-primaryColor">User Info</h2>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={50} width={50} alt="Profile image" />
          <div>
            <h2 className="pb-2"><span className="font-bold text-primaryColor">User Name:</span> Mamun Hasan</h2>
            <h2 className="pb-2"><span className="font-bold text-primaryColor">User Email:</span> mamun@gmail.com</h2>

          </div>
          <div className="w-1/2 my-4">
          <Link href='/dashboard/profile' >
          <CommonButton buttonName={"See More.."} />
          </Link>
          </div>
        </div>
        
        <div className="mb-10 h-full w-full flex-1  border rounded p-4 shadow-xl hover:shadow-2xl duration-400">
          <h2 className="font-semibold text-xl text-primaryColor text-center">Applied Job</h2>
          <div>
            <Fade direction="down" cascade>
              <Link href='/find-jobs'>
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2>Role: Web Designer</h2>
                  <h3>Company: Orackle Ltd.</h3>
                  <h3>Status: Pending</h3>
                </div>
              </Link>
            </Fade>
            <Fade direction="down" cascade>
              <Link href='/find-jobs'>
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2>Role: Web Developer</h2>
                  <h3>Company: Orackle Ltd.</h3>
                  <h3>Status: Pending</h3>
                </div>
              </Link>
            </Fade>
            <Fade direction="down" cascade>
              <Link href='/find-jobs'>
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2>Role: Junior Developer</h2>
                  <h3>Company: Orackle Ltd.</h3>
                  <h3>Status: Running</h3>
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