"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { Avatar, Card } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const { data: userInfo } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!user) {
        return;
      }
      const res = await axios.get(`http://localhost:5000/user/${user?.email}`);
      const userData = await res.data;
      return userData;
    },
  });

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo, user]);

  return (
    <div className="dark:bg-[#000000]  bg-lightWhiteColor">
      <div className="container md:p-10">
      
        <Card className="p-6 px-10 border mt-4 max-w-2xl mx-auto shadow-2xl rounded-lg">
          <div className="">
            <div className="pb-2 flex justify-center">
              <Avatar
              isBordered 
            
                src={
                  user?.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"
                }
                className="w-24 h-24 text-large"
                
              />
            </div>

            <div className="flex justify-center">
              <Link
                href="/dashboard/editProfile"
                className="flex gap-2   font-bold hover:text-primaryColor text-center rounded p-2 "
              >
                <FaRegEdit className="text-2xl " /> Edit Profile
              </Link>
            </div>
          </div>
          <div className="py-3 mt-5 space-y-3">
            <h2 className="md:text-xl">
              <span className="font-bold ">USER NAME : </span>{" "}
              <span className="font-semibold text-secondaryColor">
                {userInfo?.name}
              </span>
            </h2>
            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold ">USER EMAIL :</span>{" "}
              <span className="font-semibold text-secondaryColor">
                {" "}
                {userInfo?.email}
              </span>
            </h2>
            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold">EDUCATION :</span>
              <span className="">
                {userInfo?.education || (
                  <Link
                    href="/dashboard/editProfile"
                    className="text-lightPrimaryColor font-semibold"
                  >
                    {" "}
                    + Add Education
                  </Link>
                )}
              </span>
            </h2>

            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold">PORTFOLIO : </span>
              {userInfo?.portfolio || (
                <Link
                  href="/dashboard/editProfile"
                  className="text-lightPrimaryColor font-semibold"
                >
                  {" "}
                  + Add Portfolio
                </Link>
              )}
            </h2>

            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold">LINKEDIN : </span>
              {userInfo?.linkedin || (
                <Link
                  href="/dashboard/editProfile"
                  className="text-lightPrimaryColor font-semibold"
                >
                  {" "}
                  + Add Linkedin Profile
                </Link>
              )}
            </h2>

            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold text-xl">LOCATION : </span>{" "}
              <span className="">
                {userInfo?.education || (
                  <Link
                    href="/dashboard/editProfile"
                    className="text-lightPrimaryColor font-semibold"
                  >
                    {" "}
                    + Add Location
                  </Link>
                )}
              </span>
            </h2>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
