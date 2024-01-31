import JobDetails from '@/components/ui/jobDetails/JobDetails';
import React from 'react';

const page = ({params}) => {
  
    return (
        <div className="container">
            <JobDetails id={params.id} />
        </div>
    );
};

export default page;