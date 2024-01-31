import JobDetails from '@/components/ui/jobDetails/JobDetails';
import React from 'react';
export const metadata= {
    title: 'Dream Finder |  Details',
  };
const page = ({params}) => {
  
    return (
        <div className="container">
            <JobDetails id={params.id} />
        </div>
    );
};

export default page;