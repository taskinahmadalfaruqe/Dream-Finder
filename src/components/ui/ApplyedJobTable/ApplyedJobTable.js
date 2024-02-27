"use client";

import React, { useContext, useEffect, useState } from "react";
import AppliedRow from "../AppliedJobRow/AppliedRow";
import { AuthContext } from "@/providers/AuthProvider";
import { Pagination } from "@nextui-org/react";

export default function App() {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (user) {
      fetch(
        `https://dream-finder-server.vercel.app/retrieveResume?user=${user?.email}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAppliedJobs(data.ids);
          setCount(data.count);
        });
    }
  }, [user, page]);

  return (
    <>
      {appliedJobs?.length ? (
        <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
          <h2 className="font-bold text-3xl text-primaryColor md:text-center mt-16 md:mt-10 ">
            MY SUBMISSION
          </h2>
          <div className=" mt-7 shadow-2xl overflow-x-scroll md:overflow-x-hidden">
            <table className="w-full table-auto">
              <thead className="bg-lightPrimaryColor dark:bg-primaryColor  border border-b-2 border-primaryColor">
                <tr className="text-start ">
                  <th className="text-start py-3 pl-3 whitespace-nowrap">
                    COMPANY NAME
                  </th>
                  <th className="text-start whitespace-nowrap px-5 lg:px-0">
                    ROLE
                  </th>
                  <th className="text-start whitespace-nowrap px-5 lg:px-0">
                    STATUS
                  </th>
                  <th className="text-start whitespace-nowrap px-5 lg:px-0">
                    APPLY DATE
                  </th>
                  <th className="text-center whitespace-nowrap px-5 lg:px-0">
                    <p>Review</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                {appliedJobs.length &&
                  appliedJobs?.map((id, idx) => (
                    <AppliedRow key={id} id={id} idx={idx} />
                  ))}
              </tbody>
            </table>
          </div>
          <div className="py-10">
            <Pagination
              onChange={(e) => setPage(e)}
              color="success"
              radius="full"
              variant="flat"
              className="gap-5"
              showShadow
              isCompact
              showControls
              total={Math.ceil(count / 8)}
              initialPage={1}
              
            />
          </div>
        </div>
      ) : (
        <div className="h-60 text-secondaryColor font-semibold flex justify-center items-center">
          <h1>You Did not Apply for any job yet</h1>
        </div>
      )}
    </>
  );
}
