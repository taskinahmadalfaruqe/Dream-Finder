"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useContextData from "@/hooks/useContextData";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { TiDocumentText } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContextData();

  const [postedJob, setPostedJob] = useState([]);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dream-finder-server.vercel.app/company-applied-job/${user?.displayName}`)
      .then((res) => {
        console.log(res?.data);
        setPostedJob(res?.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user?.email, reload]);

  const renderCell = useCallback(
    (job, columnKey) => {
      console.log(columnKey);
      let cellValue = job[columnKey];
      
      console.log(cellValue);
      if(columnKey === "appliedDate"){
        cellValue = new Date(job[columnKey]).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
      }
      if (columnKey.includes(",")) {
        const x = columnKey.split(",");
        cellValue = `$${job[x[0]]}-$${job[x[1]]}`;
      }

      switch (columnKey) {
        case "category":
          return (
            <Chip className="capitalize text-nowrap" size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case "jobTitle":
          return (
            <Chip className="capitalize text-nowrap" size="sm" variant="flat">
              {cellValue.length >= 30
                ? cellValue.slice(0, 30) + "..."
                : cellValue}
            </Chip>
          );
        case "applicant":
          return (
            <Chip className="capitalize text-nowrap" size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case "appliedDate":
          return (
            <Chip className="capitalize text-nowrap" size="sm" variant="flat">
              
              {cellValue}
            </Chip>
          );
        case "status":
          return (
            <Chip className="capitalize text-nowrap flex" size="" variant="flat">
             <p className="flex items-center gap-2"> {cellValue}  <FaRegEdit  style={{  color: "#00BE63" }} /></p>
            </Chip>
          );
       
    
        case "action":
          return (
            <div className="relative flex items-center  justify-center">
              <Link href={`/Find-Jobs/${job?._id}`}>
                <Tooltip content="Details">
                    <TiDocumentText
                      style={{ fontSize: 28, color: "#00BE63" }}
                    />
                </Tooltip>
              </Link>
            
            </div>
          );
        default:
          return cellValue;
      }
    },
    [axiosSecure, reload]
  );

  return (
    <div className=" max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto ">
      {postedJob.length !== 0 && (
        <Table
          color="success"
          selectionMode="single"
          aria-label="Example table with custom cells"
        >
          {postedJob.length !== 0 && (
            <TableHeader columns={columns} className="text-center">
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align="center"
                  className="text-center"
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
          )}
          {postedJob.length !== 0 && (
            <TableBody items={postedJob}>
              {(job) => (
                <TableRow key={job?._id}>
                  {(columnKey) => (
                    <TableCell className="text-center">
                      {renderCell(job, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      )}
    </div>
  );
};

const columns = [
  { name: "CATEGORY", uid: "category" },
  { name: "JOB TITLE", uid: "jobTitle" },
  { name: "APPLICANT", uid: "applicant" },
  { name: "APPLIED DATE", uid: "appliedDate" },
  { name: "STATUS", uid: "status" },
  { name: "SUBMISSIONS", uid: "action" },
];







export default Page;
