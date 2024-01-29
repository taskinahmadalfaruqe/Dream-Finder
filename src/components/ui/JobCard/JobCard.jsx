"use client";
import React, { useState } from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { FaClock } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import CommonButton from "@/components/shared/CommonButton";

const JobCard = ({ job }) => {
  const {
    company_name,
    job_title,
    type,
    description,
    salary,
    _id,
    company_logo,
    posted_date,
  } = job;

  const [isShow, setIsShow] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className=" relative shadow-2xl"
      radius="sm"
    >
      <CardHeader className="flex gap-3 p-5">
        <Button
          className="border-primaryColor px-5 py-1"
          radius="sm"
          variant="bordered"
        >
          <BiBarChartAlt className="text-primaryColor text-lg font-bold" />{" "}
          Actively Hiring
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="px-5 py-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{job_title}</h1>
            <p className=" md:text-lg font-semibold mt-1 text-secondaryColor">
              {company_name}
            </p>
          </div>
          <div>
            <Image
              src={company_logo}
              width={100}
              height={50}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
          {/* <IoLocationOutline /> */}
          <p className="lg:w-2/3 text-secondaryColor mt-2 text-sm md:text-lg">
            {description}
          </p>
          <div className="lg:w-2/3 mt-3">
            <p className=" flex items-center">
              <FaClock className="font-bold mr-2" />
              <span>Posted Date</span>
            </p>
            <span className="text-secondaryColor ">{posted_date}</span>
          </div>
        </div>
      </CardBody>
      <Divider />
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isShow ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <div className="absolute h-full w-full top-0 left-0 bg-lightSkyBlue z-20  opacity-80  flex justify-center items-center">
          <div className=" space-x-5">
            <Link href={`/Find-Jobs/${_id}`}>
              <CommonButton buttonName={"Apply Now"}></CommonButton>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
