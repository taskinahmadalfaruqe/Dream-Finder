"use client";
import { appliedJobFunc } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import AppliedJobButton from "../AppliedJobButton/AppliedJobButton";
import { FaFilePdf } from "react-icons/fa";

const AppliedJobDetails = ({ id, date }) => {
  const [appliedJobDetails, setAppliedJobDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://dream-finder-file-upload-server.vercel.app/retrieveResume/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobDetails(data.result);
      });
  }, [appliedJobDetails, id]);

  return (
    <div className="rounded ">
      <div className="p-5 bg-primaryColor border border-primaryColor">
        <h1 className="text-whiteColor text-2xl font-semibold">
          Your Submission
        </h1>
      </div>
      <div className="border rounded bg-lightWhiteColor">
        <div className="px-5 flex justify-between mt-3">
          <h3 className="text-darkColor font-semibold text-xl ">
            Your Cover Letter
          </h3>
          <p className="text-secondaryColor"> Applied On {date} </p>
        </div>
        <div
          style={{ whiteSpace: "pre-line" }}
          className=" p-5  font-semibold text-secondaryColor"
        >
          {appliedJobDetails?.coverLetter}
        </div>
        <div className="flex items-center p-5 gap-5 md:gap-10">
          <div className="flex">
            <FaFilePdf style={{ fontSize: "50px", color: "#FC2D2D" }} />
            <p className="ml-2 dark:text-secondaryColor">
              {appliedJobDetails?.fileName?.slice(0, 20)}... <br />{" "}
              {appliedJobDetails?.size /1000} KB
            </p>
          </div>
          <AppliedJobButton
            content={appliedJobDetails?.resume}
            fileName={appliedJobDetails?.fileName}
          />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
