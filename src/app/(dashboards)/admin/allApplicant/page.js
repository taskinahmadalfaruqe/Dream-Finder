import React from "react";
import AllApplicantTable from "@/components/ui/AllApplicantTable/AllApplicantTable";

const allApplicantPage = () => {
  return (
    <div className="">
      <h2 className="font-bold text-3xl text-primaryColor text-center">
        All Applicant Table page.
      </h2>
      <div className="my-6">
        <AllApplicantTable />
      </div>
    </div>
  );
};

export default allApplicantPage;
