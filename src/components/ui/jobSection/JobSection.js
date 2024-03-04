"use client";
import SectionHeading from "@/components/shared/SectionHeading";
import JobApplyCard from "./JobApplyCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobSection = () => {
  const axiosPublic = useAxiosPublic();
  const [isAllShow, setIsAllShow] = useState(false);

  const { data: recentJobsOriginal } = useQuery({
    queryKey: ["mostApplied15"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/most-viewed15-jobs");
      const result = await res.data;
      return result;
    },
  });

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
          {recentJobsOriginal?.slice(0, 6).map((job) => (
            <JobApplyCard key={job._id} job={job} />
          ))}
        </div>
       { isAllShow && <motion.div initial={{ opacity: 0, y:-200 }}
          animate={{ opacity: 1,y:0 }}
          exit={{ opacity: 0}}
          transition={{duration: 1}}>
          <div
            className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10"
          >
            {recentJobsOriginal
              ?.slice(6, recentJobsOriginal?.length + 1)
              .map((job) => (
                <JobApplyCard key={job._id} job={job} />
              ))}
          </div>
        </motion.div>}
        <div className=" my-16 flex justify-center">
          <Button
            radius="none"
            color="success"
            onClick={() => setIsAllShow(true)}
            className={`text-white rounded-sm font-semibold ${
              isAllShow ? "hidden" : "block"
            }`}
          >
            SEE MORE
          </Button>
          <Link className={isAllShow ? "block" : "hidden"} href={"/Find-Jobs"}>
            <Button
              radius="none"
              color="success"
              className={`text-white rounded-sm font-semibold `}
            >
              SEE ALL JOBS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
