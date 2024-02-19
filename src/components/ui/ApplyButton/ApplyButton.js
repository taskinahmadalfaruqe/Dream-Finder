"use client"
import CommonButton from "@/components/shared/CommonButton";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const ApplyButton = ({ id }) => {
const {user} = useContext(AuthContext)
const [isApplied,setIsApplied] = useState(null)

useEffect(()=>{
    fetch(`https://dream-finder-file-upload-server.vercel.app/checkApplied?user=${user?.email}&jobId=${id}`)
    .then(res => res.json())
    .then(data => {
        if(data.isApplied){
            setIsApplied(true)
        }else{
            setIsApplied(false)
        }
    })
    .catch(err => console.log(err))
},[user,id, isApplied])


  return (
    <div className="">
     {!isApplied ? <Link href={`/Find-Jobs/${id}`}>
        <CommonButton buttonName={"Apply Now"}></CommonButton>
      </Link> :  <CommonButton buttonName={"Already Applied"}></CommonButton>}
    </div>
  );
};

export default ApplyButton;
