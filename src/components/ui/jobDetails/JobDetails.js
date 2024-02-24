"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, useDisclosure } from "@nextui-org/react";
import "./jobDetails.css";
import { FaCheckSquare } from "react-icons/fa";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import CommonButton from "@/components/shared/CommonButton";
import ApplicationSubmissionForm from "../ApplicationSubmissionForm/ApplicationSubmissionForm";
import SuccessToast from "@/components/shared/SuccessToast";
import SubmissionButton from "../SubmissionButton/SubmissionButton";

export default function JobDetails({ id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`https://dream-finder-server.vercel.app/jobDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  return (
    <div className="container my-10 mb-40 p-5">
   
      <Card className="py-4">
        <CardHeader className="pb-0 md:py-10 md:px-10 lg:px-20 flex-col items-start ">
          <h3 className="text-xl md:text-2xl text-secondaryColor dark:text-primaryColor font-bold mb-5 text-center  mx-auto">
           {job?.company_name}
          </h3>
          <div className=" flex items-center rounded-xl w-full jobDetailsBanner">
            <div className="uppercase py-20 grid justify-center font-bold w-full text-center rounded-xl">
              <h2 className="uppercase  text-2xl md:text-4xl text-whiteColor ">
                Join Us
              </h2>
              <h1 className="uppercase mt-1  text-2xl md:text-6xl  text-whiteColor">
                We<span> Are</span>{" "}
                <span className="text-primaryColor">Hiring!</span>
              </h1>
              <p className="text-whiteColor mt-3 text-xl md:text-2xl">
                {job?.category}
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 cursor-pointer font-bold border-l border-b"></div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 md:px-10 lg:px-20 ">
          <div>
            <h3 className="text-xl md:text-2xl text-darkColor dark:text-primaryColor font-bold mt-3">
              About This Job
            </h3>
            <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
            {/* We are looking for enthusiastic and energetic individuals with an
              interest in a wide range of web software technologies and
              architectures. Applicants must have the mindset to get their hands
              dirty in writing code in front-end web technology stacks based on
              JavaScript as well as back-end integration. Work will range from
              solo projects to product features in sprints with remotely located
              team members. */}
              {job.description}
            </p>
          </div>
          <div className="lg:flex lg:justify-between mt-5 lg:space-x-10">
            <div className="lg:flex-1">
              <div>
                <h3 className="text-2xl text-darkColor dark:text-primaryColor font-bold mt-3">
                  Requirements
                </h3>
                <div className="text-justify">
                 { job?.requirements && job?.requirements?.map(requirement => <p key={requirement} className="mt-5 space-x-2">
                    <FaCheckSquare
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                      }}
                    />
                   {requirement}
                  </p>)}
                 
                </div>
              </div>
            </div>

            <div className="lg:flex-1 mt-10 lg:mt-0">
              <div className="lg:ml-10">
                <h3 className="text-xl text-darkColor dark:text-primaryColor font-bold mt-3">
                  Employment Status
                </h3>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  {job?.employment_status}
                </p>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                 {job?.workingHour}
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl  text-darkColor dark:text-primaryColor font-bold mt-3">
                  Salary
                </h3>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Minimum {job?.minSalary} BDT per month
                </p>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  Up to {job?.maxSalary} BDT per month
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl  text-darkColor dark:text-primaryColor font-bold mt-3">
                  Educational Requirements
                </h3>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  {job?.educationalRequirements}
                </p>
              </div>

              <div className="lg:ml-10 mt-5">
                <h3 className="text-xl text-darkColor dark:text-primaryColor font-bold mt-3">
                  Job Location
                </h3>
                <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                  <VscDebugBreakpointDataUnverified
                    style={{
                      display: "inline-block",
                      marginRight: 5,
                      color: "#00BE63",
                      fontSize: 28,
                    }}
                  />{" "}
                  {job?.type}
                </p>
              </div>

              <div className="lg:ml-10 mt-5 flex gap-5">
                <div className="">
                  <h3 className="text-xl text-darkColor dark:text-primaryColor font-bold mt-3">
                    Vacancy
                  </h3>
                  <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                    <VscDebugBreakpointDataUnverified
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                        fontSize: 28,
                      }}
                    />{" "}
                    {job?.vacancy}
                  </p>
                </div>
                <div className="">
                  <h3 className="text-xl text-darkColor dark:text-primaryColor font-bold mt-3">
                    Number Of Application
                  </h3>
                  <p className="text-secondaryColor dark:text-whiteColor mt-1 text-justify">
                    <VscDebugBreakpointDataUnverified
                      style={{
                        display: "inline-block",
                        marginRight: 5,
                        color: "#00BE63",
                        fontSize: 28,
                      }}
                    />{" "}
                    {job?.appliedCount}+ Applicants
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SubmissionButton onOpen={onOpen} id={job._id}/>
          </div>
        </CardBody>
      </Card>
      <ApplicationSubmissionForm
        actions={{ isOpen, onOpen, onOpenChange }}
        jobInfo={{
          id: job._id,
          company_name: job.company_name,
          category: job.category,
        }}
      />
    </div>
  );
}
