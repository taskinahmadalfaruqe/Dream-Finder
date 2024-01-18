"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";
import JobSearchSection from "../JobSearchSection/JobSearchSection";
import Button from "@/components/shared/Button";

const JobsContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      
      <div className="grid grid-cols-12 md:gap-10 relative">
        <div className="col-span-12 lg:col-span-4">
          <JobSearchSection />
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-10">
          {jobs.slice(startIndex, endIndex).map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <div className="flex gap-5">
          <div
            onClick={() => {
              setPage(page - 1);
              setStartIndex(startIndex && page * 5);
              setEndIndex(page * 5 - 5);
            }}
          >
            <Button />
          </div>
          <div
            onClick={() => {
              setPage(page + 1);
              setStartIndex(startIndex && page * 5);
              setEndIndex(page * 5 + 5);
            }}
          >
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsContainer;
