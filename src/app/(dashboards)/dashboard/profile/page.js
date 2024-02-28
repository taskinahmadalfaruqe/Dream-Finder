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

  const { data: userInfo, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!user) {
        return;
      } else {
        const res = await axios.get(
           `https://dream-finder-server.vercel.app/user/${user?.email}`
          // `http://localhost:5000/user/${user?.email}`
         
        );
        const userData = await res.data;
        return userData;
      }
    },
  });

  if (isPending) {
    return;
  }

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
              <span className="font-bold ">USER NAME : &nbsp;</span>{" "}
              <span className="font-semibold text-secondaryColor">
                {userInfo?.name}
              </span>
            </h2>
            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold ">USER EMAIL : &nbsp;</span>{" "}
              <span className="font-semibold text-secondaryColor">
                {" "}
                {userInfo?.email}
              </span>
            </h2>
            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold">EDUCATION : &nbsp;</span>
              <span className="text-secondaryColor font-semibold text-xl">
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
              <span className="font-bold">PORTFOLIO : &nbsp;</span>
              <span className="text-secondaryColor font-semibold text-xl">
                {userInfo?.portfolio || (
                  <Link
                    href="/dashboard/editProfile"
                    className="text-lightPrimaryColor font-semibold"
                  >
                    {" "}
                    + Add Portfolio
                  </Link>
                )}
              </span>
            </h2>

            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold">LINKEDIN : &nbsp;</span>
              <span className="text-secondaryColor font-semibold text-xl">
                {" "}
                {userInfo?.linkedin || (
                  <Link
                    href="/dashboard/editProfile"
                    className="text-lightPrimaryColor font-semibold"
                  >
                    {" "}
                    + Add Linkedin Profile
                  </Link>
                )}
              </span>
            </h2>

            <hr />
            <h2 className="md:text-xl">
              <span className="font-bold text-xl">LOCATION : &nbsp;</span>{" "}
              <span className="text-secondaryColor font-semibold">
                {userInfo?.location || (
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
