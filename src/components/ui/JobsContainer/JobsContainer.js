"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import JobSearchSection from "../JobSearchSection/JobSearchSection";
import CommonButton from "@/components/shared/CommonButton";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState([]);
  const [salary, setSalary] = useState(0);
  const [preference, setPreference] = useState(false);
  const [submit, setSubmit] = useState(false)
  
  
  useEffect(() => {
    fetch(
      `https://11-service-squade-server.vercel.app/api/v1/jobs?category=${category}&location=${location}&type=${type}&salary=${salary}&preference=${preference}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [submit,page]);
  

  return (
    <div>
      <div className="grid grid-cols-12 md:gap-10 relative">
        <div className="col-span-12 lg:col-span-4">
          <JobSearchSection
            state={{ setCategory, setType, setLocation, setSalary, type, preference, setPreference,submit, setSubmit }}
          />
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-10">
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <div className="flex gap-5">
          <div
            onClick={() => {
              if(page > 1){
                setPage(page - 1);
              }
            }}
          >
            <CommonButton buttonName={"Previous"} />
          </div>
          <div
            onClick={() => {
              setPage(page + 1);
             
            }}
          >
            <CommonButton buttonName={"Next"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContainer;
