"use client"
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";

const ProfilePage = () => {

  const {user} = useContext(AuthContext);

  return (
    <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
      <h2 className="font-bold text-3xl text-primaryColor text-center">
        User Information
      </h2>
      <div className="p-6 border mt-4 border-primaryColor shadow-xl rounded-lg">
        <div className="pb-2">
          <Image
            className=""
            src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"}
            height={70}
            width={70}
            alt="Profile image"
          />
          <Link
            href="/dashboard/editProfile"
            className="flex gap-2 my-2 font-bold hover:text-blue-600 rounded p-2 items-center"
          >
            <FaRegEdit className="text-xl " /> Edit Profile
          </Link>
        </div>
        <hr />
        <div className="py-4 space-y-3">
          <h2 className="">
            <span className="font-bold text-xl">User Name : </span> {user?.displayName}
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">User Email :</span>{" "}
            {user?.email}
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Education :</span> Bsc In
            Computer Science. BUET.
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Resume Drive Link :</span> 
            https://drive.google.com/file/d/1XN12blDUvZ4QwPf7pMPImD11M5Q7XKnd/view
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Cover Later Drive Link : </span>{" "}
            https://drive.google.com/file/d/1hOkkHx9gMwL2WGpxPkAvBDbgtV-Nqi_P/view
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">PortFolio : </span> 
            https://my-portfolio-e3e7b.web.app/
          </h2>
          
          <hr />
          <h2>
            <span className="font-bold text-xl">Location : </span> Noakhali, Bangladesh.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
