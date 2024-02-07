import React from "react";
import AppliedJobTable from "@/components/ui/ApplyedJobTable/ApplyedJobTable";

const AppliedJobPage = () => {
  return (
    <div className="my-6 overflow-x-scroll md:overflow-x-hidden ">
      <AppliedJobTable></AppliedJobTable>
    </div>
  );
};

export default AppliedJobPage;
