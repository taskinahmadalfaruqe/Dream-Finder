"use client";

import React, { useContext, useEffect, useState } from "react";
import AppliedRow from "../AppliedJobRow/AppliedRow";
import { AuthContext } from "@/providers/AuthProvider";

export default function App() {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);
   
  useEffect(() => {
    if(user){
      fetch(`https://dream-finder-file-upload-server.vercel.app/retrieveResume?user=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAppliedJobs(data));
    }
  }, [user]);


  return (
    <>
      {appliedJobs?.length ? (
        <>
          <h2 className="font-bold text-3xl text-primaryColor text-center">
            My submissions
          </h2>
          <div className="shadow-2xl mt-10">
            <table className="w-full table-auto overflow-scroll lg:overflow-hidden">
              <thead className="bg-lightPrimaryColor  border-b-2 border-primaryColor">
                <tr className="text-start ">
                  <th className="text-start py-3 pl-3 flex"><p>COMPANY NAME</p></th>
                  <th className="text-start">ROLE</th>
                  <th className="text-start">STATUS</th>
                  <th className="text-start">APPLY DATE</th>
                  <th className="text-center"><p>Review</p></th>
                </tr>
              </thead>

              <tbody>
                {appliedJobs.length && appliedJobs?.map((id, idx) => (
                  <AppliedRow
                    key={id}
                    id={id}
                    idx={idx}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="h-60 text-secondaryColor font-semibold flex justify-center items-center">
          <h1>You Did not Apply for any job yet</h1>
        </div>
      )}
    </>
  );
}
