import SectionHeading from "@/components/shared/SectionHeading";
import JobApplyCard from "./JobApplyCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import CommonButton from "@/components/shared/CommonButton";
import Link from "next/link";

const JobSection = async () => {
  const axiosPublic = useAxiosPublic();
  const res = await axiosPublic.get("/api/v1/most-viewed15-jobs");
  const recentJobsOriginal = await res.data;

  return (
    <section className="container">
      <div className="">
        {/* section heading */}
        <SectionHeading
          heading="Top 15 Jobs"
          subHeading="Top 15 highest viewed and popular jobs"
        />
        {/* job cards grid container */}
        <div className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* job card */}
          {recentJobsOriginal?.map(job => (
            <JobApplyCard key={job._id} job={job} />
          ))}
        </div>
        <div className="max-w-80 mx-auto my-20">
          <Link href={"/Find-Jobs"}>
            <CommonButton buttonName={"Show All Jobs"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
