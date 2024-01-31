"use client";

import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import JobSearchSection from "../JobSearchSection/JobSearchSection";
import CommonButton from "@/components/shared/CommonButton";
import { Button } from "@nextui-org/react";
import { GrLinkNext, GrLinkPrevious  } from "react-icons/gr";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsCount, setJobsCount] = useState(0);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState([]);
  const [salary, setSalary] = useState(0);
  const [preference, setPreference] = useState(false);
  const [submit, setSubmit] = useState(false);
  // `https://11-service-squade-server.vercel.app/api/v1/jobs?category=${category}&location=${location}&type=${type}&salary=${salary}&preference=${preference}&page=${page}`

  useEffect(() => {
    fetch(
      `https://dream-finder-file-upload-server.vercel.app/api/v1/jobs?category=${category}&location=${location}&type=${type}&salary=${salary}&preference=${preference}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.result);
        setJobsCount(data.jobCount);
      });
  }, [submit, page]);

  const lastPage = Math.floor(jobsCount / 5)
  console.log(lastPage);

  return (
    <div>
      {jobsCount>0 && 
      <h3 className="my-5 text-secondaryColor font-semibold text-end text-lg hidden lg:block">
        {jobsCount} Jobs Available
      </h3>
      }
      <div className="grid grid-cols-12 md:gap-10 relative">
        <div className="col-span-12 lg:col-span-4">
          <JobSearchSection
            state={{
              setCategory,
              setType,
              setLocation,
              setSalary,
              type,
              preference,
              setPreference,
              submit,
              setSubmit,
            }}
          />
        </div>
        <div className="col-span-12 lg:col-span-8 ">
         {jobsCount>0 && <h3 className="my-5 text-secondaryColor font-semibold text-end text-lg lg:hidden">
            {jobsCount} Jobs Available
          </h3>
          }
          <div className="space-y-10">
            {jobsCount ? (
              jobs.map((job, i) => <JobCard key={i} job={job} />)
            ) : (
              <div className=" h-[500px] flex justify-center items-center">
                <h1>No Jobs Found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`flex justify-end mt-5 ${!jobsCount && "hidden"}`}>
        <div className="flex gap-5">
          <div>
            <Button  onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }} variant={page <= 1 ? "faded":"solid"}  color="success"><GrLinkPrevious /> Prev </Button>
          </div>
          <div>
            <Button variant={lastPage >= page ? "solid" :"faded"}  onClick={() => {
              if(page <= lastPage){
                setPage(page + 1);
              }
            }} color="success">Next <GrLinkNext /> </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContainer;
