import React from 'react';
import AppliedJobTable from "@/components/ui/ApplyedJobTable/ApplyedJobTable";

const AppliedJobPage = () => {
    return (
        <div className='w-2/3 mx-auto '>
            <h2 className="font-bold text-3xl text-primaryColor text-center">All applied job page.</h2>
            <div className='my-6'>
            <AppliedJobTable></AppliedJobTable>
            </div>
        </div>
    );
};

export default AppliedJobPage;