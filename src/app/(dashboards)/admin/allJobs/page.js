import React from 'react';
import AllJobs from "@/components/ui/AllJobs/AllJobs";


const allJobsPage = () => {
    return (
        <div className="">
        <h2 className="font-bold text-3xl text-primaryColor text-center">
          All Jobs Table page.
        </h2>
        <div className="my-6">
          <AllJobs />
        </div>
      </div>
    );
};

export default allJobsPage;