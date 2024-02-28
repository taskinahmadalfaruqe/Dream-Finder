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

const UserStats = () => {
  const { user } = useContext(AuthContext);
  const [userStats, setUserStats] = useState({});

  const {
    data: userProfileInfo,
    isPending,
    refetch,
  } = useQuery({
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

  useEffect(() => {
    fetch(`https://dream-finder-server.vercel.app/user-stat/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserStats(data));
    refetch();
  }, [user, userStats, userProfileInfo]);

  return (
    <div className="py-10">
      <div className="lg:flex gap-10 ">
        <Card className=" md:w-[400px] p-5 mb-5 lg:mb-0">
          <Avatar
            isBordered
            src={
              user?.photoURL ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"
            }
            className="w-16 h-16 md:w-20 md:h-20 text-large mx-auto"
          />
          <div>
            <h2 className="py-1 mt-2 md:text-2xl font-semibold text-secondaryColor text-center">
              {userProfileInfo?.name}
            </h2>
            <h2 className=" md:text-xl font-semibold text-secondaryColor text-center">
              {userProfileInfo?.email}
            </h2>
          </div>
          <div className="flex justify-center mt-3">
            <Link href="/dashboard/profile">
              <Button
                color="success"
                className="text-whiteColor font-semibold rounded-md"
              >
                VIEW MORE
              </Button>
            </Link>
          </div>
        </Card>

        <Card className="lg:flex-1 p-2 md:p-5 lg:p-10">
       
          <div className="md:flex justify-center gap-10 items-center h-full">
            <Fade direction="right" cascade>
                <div className=" rounded-lg p-10  text-center mb-2 shadow-2xl">
                  <h1 className="text-7xl text-primaryColor">{userStats?.applicationCount || 0}</h1>
                  <h2 className="font-bold text-xl mt-2 text-secondaryColor">
                    Application
                  </h2>
                </div>
           
            </Fade>

            <Fade direction="right" cascade delay={500}>
              <Link href="/dashboard/bookmark">
                <div className="  rounded-lg p-10   text-center mb-2 shadow-2xl">
                  <h1 className="text-7xl text-primaryColor">{userStats?.bookmarkCount || 0}</h1>
                  <h2 className="font-bold text-2xl text-secondaryColor mt-2">
                    Saved Jobs
                  </h2>
                </div>
              </Link>
            </Fade>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserStats;
