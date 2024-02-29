"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiDocumentText } from "react-icons/ti";

const AppliedRow = ({ idx, id}) => {
  const [appliedJob, setAppliedJob] = useState([])
  const [date, setDate] = useState("")
  useEffect(()=>{
    fetch(`https://dream-finder-file-upload-server.vercel.app/retrieveResume/${id}`)
    .then(res => res.json())
    .then(data => {
      setAppliedJob(data.result)
      const formattedDate = new Date(data.result.appliedDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      setDate(formattedDate);
    })
  },[id])


  
  return (
    <tr className={`${idx % 2 == 0 ? "bg-lightWhiteColor" : "dark:bg-secondaryColor dark:text-whiteColor"} font-semibold text-lightDarkColor border-b-2`}>
      <td className="py-3 pl-3 whitespace-nowrap">{appliedJob?.company_name}</td>
      <td className="whitespace-nowrap px-5 lg:px-0">{appliedJob?.category}</td>
      <td className="whitespace-nowrap px-5 lg:px-0">pending</td>
      <td className="whitespace-nowrap px-5 lg:px-0">{date}</td>
      <td className="flex justify-center items-center mt-2 whitespace-nowrap px-5 lg:px-0">
        <Link href={`/dashboard/appliedJob/${id}?date=${date}`}>
          <TiDocumentText style={{fontSize:28, color:"#00BE63"}} />
        </Link>
      </td>
    </tr>
  );
};

export default AppliedRow;
