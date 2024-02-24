"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { FcApproval } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

export default function App() {
  const [allJob, setAllJob] = useState([]);

  useEffect(() => {
    axios.get("https://dream-finder-server.vercel.app/get/jobs").then((res) => {
      setAllJob(res.data);
    });
  }, []);

  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Approved!",
          text: "Job has been approved.",
          icon: "success",
        });
      }
    });
  };

  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://dream-finder-server.vercel.app/get/jobs/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = allJob.filter((item) => item._id !== id);
              setAllJob(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Job has been deleted.",
                icon: "success",
              });
            }
            console.log(res.data);
          });
      }
    });
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>POSITION</TableColumn>
        <TableColumn>COMPANY NAME</TableColumn>
        <TableColumn>VACANCY</TableColumn>
        <TableColumn>POSTED DATE</TableColumn>
        <TableColumn>LOCATION</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {allJob?.map((item, index) => (
          <TableRow key={index + 1}>
            <TableCell>{item?.category} </TableCell>
            <TableCell>{item?.company_name}</TableCell>
            <TableCell>{item?.vacancy}</TableCell>
            <TableCell>{item?.posted_date}</TableCell>
            <TableCell>{item?.location}</TableCell>
            <TableCell>
              <div className="flex item-center gap-3">
                <button
                  onClick={() => handleApprove(item?._id)}
                  title="Approval"
                >
                  <FcApproval className="text-3xl" />
                </button>
                <button onClick={() => handleDeleted(item?._id)} title="Delete">
                  <FaTrashAlt className="text-xl text-red-400" />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
