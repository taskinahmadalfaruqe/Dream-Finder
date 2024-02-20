import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
      <h2 className="font-bold text-3xl text-primaryColor text-center">
        User Information
      </h2>
      <div className="p-6 border mt-4 border-primaryColor shadow-xl rounded-lg">
        <div className="pb-2">
          <Image
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU"
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
            <span className="font-bold text-xl">User Name : </span> Md. Abid
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">User Email :</span>{" "}
            abid@gmail.com
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Education :</span> Bsc In
            Computer Science. BUET.
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Resume Drive Link :</span> .
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Cover Later Drive Link :</span>{" "}
            .
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">PortFolio :</span> .
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Website :</span> .
          </h2>
          <hr />
          <h2>
            <span className="font-bold text-xl">Location :</span> .
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
