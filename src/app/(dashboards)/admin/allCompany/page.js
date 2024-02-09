import React from 'react';
import AllCompanyTable from "@/components/ui/AllCompanyTable/AllCompanyTable";


const bookmarkPage = () => {
    return (
        <div className="">
      <h2 className="font-bold text-3xl text-primaryColor text-center">
        All Company Table page.
      </h2>
      <div className="my-6">
        <AllCompanyTable />
      </div>
    </div>
    );
};

export default bookmarkPage;