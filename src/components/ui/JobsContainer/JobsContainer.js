"use client";

import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import JobSearchSection from "../JobSearchSection/JobSearchSection";
import { Button } from "@nextui-org/react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import SearchSectionSmallDevice from "../SearchSectionSmallDevice/SearchSectionSmallDevice";

const JobsContainer = ({ category: queryCategory }) => {
  const [jobs, setJobs] = useState([]);
  const [jobsCount, setJobsCount] = useState(0);
  const [page, setPage] = useState(1);

  const [category, setCategory] = useState(queryCategory);
  const [location, setLocation] = useState("");
  const [type, setType] = useState([]);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(10000000);
  const [preference, setPreference] = useState(false);
  const [postedDate, setPostedDate] = useState("");
  const [submit, setSubmit] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(
      `https://dream-finder-server.vercel.app/api/v1/jobs?category=${category}&location=${location}&type=${type}&minSalary=${minSalary}&maxSalary=${maxSalary}&preference=${preference}&page=${page}&postedDate=${postedDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.result);
        setJobsCount(data.jobCount);
      });
  }, [submit, page]);

  const lastPage = Math.floor(jobsCount / 9);

  return (
    <>
      <div>
        {jobsCount > 0 && (
          <h3 className="my-5 text-secondaryColor font-semibold text-end text-lg hidden lg:block">
            {jobsCount} Jobs Available
          </h3>
        )}
        <div className="grid grid-cols-12 md:gap-10 relative">
          <div className="col-span-12 lg:col-span-4">
            <JobSearchSection
              state={{
                setCategory,
                setType,
                setLocation,
                setMinSalary,
                setMaxSalary,
                type,
                preference,
                setPreference,
                submit,
                setSubmit,
                setPostedDate,
                setPage,
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-8 ">
            {jobsCount > 0 && (
              <h3 className="my-5 text-secondaryColor font-semibold text-end text-lg lg:hidden">
                {jobsCount} Jobs Available
              </h3>
            )}
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
              <Button
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                variant={page <= 1 ? "faded" : "solid"}
                color="success"
                className={`${
                  page <= 1 ? "text-primaryColor" : "text-whiteColor"
                } rounded-sm font-bold`}
              >
                <GrLinkPrevious /> Prev{" "}
              </Button>
            </div>
            <div>
              <Button
                className={`${
                  lastPage >= page ? "text-whiteColor" : "text-primaryColor"
                } rounded-sm font-bold`}
                variant={lastPage >= page ? "solid" : "faded"}
                onClick={() => {
                  if (page <= lastPage) {
                    setPage(page + 1);
                  }
                }}
                color="success"
              >
                Next <GrLinkNext style={{ fontWeight: "bolder" }} />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 lg:hidden" onClick={toggleDrawer}>
        <LiaSearchSolid style={{fontSize:48, cursor:"pointer", color:"#00BE63", fontWeight:"bold"}}/>
      </div>

      <SearchSectionSmallDevice state={{
                setCategory,
                setType,
                setLocation,
                setMinSalary,
                setMaxSalary,
                type,
                preference,
                setPreference,
                submit,
                setSubmit,
                setPostedDate,
                setPage,
              }} isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default JobsContainer;
