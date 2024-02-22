/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { Image, Skeleton } from "@nextui-org/react";
import CommonButton from "@/components/shared/CommonButton";
import Link from "next/link";

const JobApplyCard = ({ job }) => {
  return (
    <div
      key={job?._id}
      className="max-w-96  flex justify-between flex-col bg-whiteColor dark:bg-lightDarkColor w-full duration-300 rounded-md p-6 hover:shadow-xl border border-lightPrimaryColor max-md:max-w-md max-md:w-full md:min-h-72 lg:max-w-md lg:p-10"
    >
      {/* company details div */}
      <div className="flex gap-5">
        <div className="mt-1">
          <Image
            src={job.company_logo}
            style={{ height: "40px", width: "60px" }}
            alt="company logo"
            className="rounded-md"
          />
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold dark:text-lightPrimaryColor lg:text-xl">
            {job?.company_name}
          </p>
          <p className="text-sm text-secondaryColor dark:text-lightWhiteColor">
            {job?.location}
          </p>
        </div>
      </div>
      {/* job details div */}
      <div className="space-y-2 my-5 grow">
        <h2 className="text-xl font-bold">{job?.category}</h2>
        <p className="text-primaryColor font-bold text-sm">{job?.type}</p>
        <p className="text-sm text-secondaryColor dark:text-lightWhiteColor">
          Description: {job?.description?.slice(0, 30)}...
        </p>
      </div>
      {/* CTA div */}
      <div className="flex items-center justify-between gap-5 ">
        <p>
          <span className="text-[16px] font-medium">${job?.minSalary}+</span>
          <span className="text-sm text-secondaryColor">/monthly</span>
        </p>
        <Link href={`/Find-Jobs/${job?._id}`} className="w-min">
          <CommonButton buttonName={"Apply"}></CommonButton>
        </Link>
      </div>
    </div>
  );
};

JobApplyCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobApplyCard;
