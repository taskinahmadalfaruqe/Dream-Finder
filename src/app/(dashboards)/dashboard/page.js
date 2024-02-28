"use client";
import CommonButton from "@/components/shared/CommonButton";
// import UserDashboard from "@/components/ui/UserDashboard/UserDashboard";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Avatar, Button, Card } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [userStats, setUserStats] = useState({})

  const { data: userProfileInfo, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!user) {
        return;
      } else {
        const res = await axios.get(
          `https://dream-finder-server.vercel.app/user/${user?.email}`
        );
        const userData = await res.data;
        return userData;
      }
    },
  });

  useEffect(()=>{
    fetch(`https://dream-finder-server.vercel.app/user-stat/${user?.email}`)
    .then(res => res.json())
    .then(data => setUserStats(data))


  },[user, userStats])

  return (
    <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
 
      <div className="md:flex gap-10 p-5 mt-5">
        <Card className="w-[300px] md:w-[400px] p-5">
          <Avatar
            isBordered
            src={
              user?.photoURL ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"
            }
            className="w-20 h-20 text-large mx-auto"
          />
          <div>
            <h2 className="py-1 mt-2 md:text-2xl font-semibold text-secondaryColor text-center">
              {userProfileInfo?.name}
            </h2>
            <h2 className=" md:text-xl font-semibold text-secondaryColor text-center">
              {userProfileInfo?.email}
            </h2>
          </div>
          <div className="flex justify-center mt-2">
            <Link href="/dashboard/profile">
              <Button color="success" className="text-whiteColor font-semibold rounded-md">VIEW MORE</Button>
            </Link>
          </div>
        </Card>

        <div className="mb-10 h-full w-full flex-1  border rounded p-4 shadow-xl hover:shadow-2xl duration-400">
          <h2 className="font-semibold text-xl text-primaryColor text-center mb-5">
            Applied Job
          </h2>
          <div>
            <Fade direction="down" cascade>
              <Link href="/dashboard/appliedJob">
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2 className="font-bold text-2xl ">
                    Total Applied Jobs : {userStats?.applicationCount}
                  </h2>
                </div>
              </Link>
            </Fade>

            <Fade direction="down" cascade>
              <Link href="/dashboard/bookmark">
                <div className="border border-primaryColor rounded-md p-2  text-center mb-2 hover:shadow-xl">
                  <h2 className="font-bold text-2xl ">
                    Saved Jobs in Bookmark : {userStats?.bookmarkCount}
                  </h2>
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
