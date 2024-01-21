import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@nextui-org/react";
import CommonButton from "@/components/shared/CommonButton";

const JobApplyCard = ({ job }) => {
  return (
    <div
      key={job._id}
      className="max-w-96  flex justify-between flex-col bg-whiteColor w-full duration-300 rounded-md p-6 hover:shadow-xl border max-md:max-w-md max-md:w-full md:min-h-72 lg:max-w-md lg:p-10"
    >
      {/* company details div */}
      <div className="flex items-center gap-5">
        <Skeleton className="w-14 h-14 border-2 rounded-md lg:h-16 lg:w-16"></Skeleton>
        <div className="space-y-1">
          <p className="text-lg font-semibold lg:text-xl">{job.companyName}</p>
          <p className="text-sm text-secondaryColor">{job.location}</p>
        </div>
      </div>
      {/* job details div */}
      <div className="space-y-2 2xl:space-y-5 my-5 grow">
        <h2 className="text-xl font-bold">{job.position}</h2>
        <p className="text-primaryColor font-bold text-sm">{job.jobType}</p>
        <p className="text-sm text-secondaryColor">
          {job.skill.map((skill, idx, allSkill) => (
            <span key={skill + idx}>
              {allSkill.length !== idx + 1 ? skill + ", " : skill + "."}
            </span>
          ))}
        </p>
      </div>
      {/* CTA div */}
      <div className="flex items-center justify-between mt-auto gap-5 ">
        <p>
          <span className="text-[16px] font-medium">{job.salary}</span>
          <span className="text-sm text-secondaryColor">/monthly</span>
        </p>
        <CommonButton buttonName={"Apply"}></CommonButton>
      </div>
    </div>
  );
};

JobApplyCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobApplyCard;
