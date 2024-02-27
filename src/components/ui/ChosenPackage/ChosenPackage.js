import CommonButton from "@/components/shared/CommonButton";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaRightFromBracket } from "react-icons/fa6";

const ChosenPackage = ({ allItem }) => {
  return (
    <>
      <div className=" ">
        <h2 className=" text-2xl font-bold  py-3 pt-10 text-secondaryColor">
        PACKAGE YOU CHOSE
        </h2>
      </div>
      <div className="border-2 p-5 rounded bg-whiteColor  shadow-xl w-[300px] ">
        <p className="flex items-center rounded-sm font-semibold  bg-lightPrimaryColor text-whiteColor px-2 w-max">
          {allItem.title.toLocaleUpperCase()}
        </p>
        <p className="py-4">
          <span className="text-3xl font-bold ">$ {allItem.price} </span>
          <span className="text-md">/{allItem.limit}</span>
        </p>

        <div className="text-left  items-center space-y-2 text-secondaryColor">
          <p className="flex items-center">
            <FaRightFromBracket className="mr-2" /> {allItem.disc1}
          </p>
          <p className="flex items-center">
            <FaRightFromBracket className="mr-2" />
            {allItem.disc2}
          </p>
          <p className="flex items-center">
            <FaRightFromBracket className="mr-2" />
            {allItem.disc3}
          </p>
          <p className="flex items-center">
            <FaRightFromBracket className="mr-2" />
            {allItem.disc4}
          </p>
        </div>

        <Link className="block mt-3" href={`/subscription`}>
          <Button
            color="success"
            className="my-4 rounded-sm text-white font-bold mt-3"
          >
            TRY ANOTHER PACKAGE
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ChosenPackage;
