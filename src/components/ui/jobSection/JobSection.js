import SectionHeading from "@/components/shared/SectionHeading";
import React from "react";

const JobSection = async () => {
  const res = await fetch("http://localhost:5000/recent-jobs");
  const recentJobs = await res.json();

  return (
    <section className="min-h-screen bg-lightWhiteColor my-40">
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
            <div
              key={job._id}
              className="max-w-96  min-h-64  bg-whiteColor w-full duration-700 rounded-md p-6 max-md:max-w-md max-md:w-full md:min-h-72 lg:max-w-md lg:p-10 "
            >
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSection;
