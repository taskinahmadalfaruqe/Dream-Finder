"use client";

import SectionHeading from "@/components/shared/SectionHeading";
import UpdateJobForm from "@/components/ui/UpdateJob/UpdateJobForm";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [oldJobDetails, setOldJobDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://dream-finder-server.vercel.app/jobDetails/${params?.id}`
      );
      const newJobDetails = await res.json();
      setOldJobDetails(newJobDetails);
    };

    fetchData();
  }, [params?.id]);

  return (
    <div className="min-h-screen ">
      <div className="mt-10">
        <SectionHeading
          heading="Update Job"
          subHeading="update your posted job details"
        />
      </div>
      {oldJobDetails ? (
        <UpdateJobForm oldJobDetails={oldJobDetails} />
      ) : (
        <div className="min-h-[50vh] flex items-center justify-center">
          <Spinner
            label="Loading..."
            color="success"
            labelColor="success"
            size="lg"
          />
        </div>
      )}
    </div>
  );
};

export default Page;
