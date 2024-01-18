import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@nextui-org/react";
import React from "react";
import JobApplyCard from "./JobApplyCard";

const JobSection = async () => {
  const res = await fetch("http://localhost:3000/recent-jobs", {
    /* next: {
      revalidate: 5,
    }, */
    cache: "no-store",
  });
  const recentJobs = await res.json();

  return (
    <section className="min-h-screen bg-lightWhiteColor py-40">
      <div className=" container mx-auto">
        {/* section heading */}
        <SectionHeading
          heading="Recent Job Circulars"
          subHeading="here we publish recent posted job circulars for you"
        />
        {/* job cards grid container */}
        <div className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* job card */}
          {recentJobs.map(job => (
            <JobApplyCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSection;
