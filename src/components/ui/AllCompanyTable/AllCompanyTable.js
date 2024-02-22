"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { MdBlock } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

export default function App() {
  const [allCompany, setAllCompany] = useState([]);

  useEffect(() => {
    axios
      .get("https://dream-finder-server.vercel.app/get/companies")
      .then((res) => {
        setAllCompany(res.data);
      });
  }, []);

  // const handleBlock =(id) =>{
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, block it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //       .delete(`https://dream-finder-server.vercel.app/delete/company/${id}`)
  //       .then((res) => {
  //         if (res.data.deletedCount > 0) {

  //           Swal.fire({
  //             title: "Blocked!",
  //             text: "Company has been blocked.",
  //             icon: "success",
  //           });
  //         }

  //       });
  //   }
  // });
  // };

  const handleBlock = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Block This Company",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Block Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://dream-finder-server.vercel.app/company/block/${user._id}`
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              axios
                .post("https://dream-finder-server.vercel.app/block/email", {
                  email: user?.companyEmail,
                })
                .then((res) => {
                  if (res.modifiedCount > 0) {
                    console.log("blocked email", user?.email);
                  }
                });
              axios
                .get("https://dream-finder-server.vercel.app/get/companies")
                .then((res) => {
                  setAllCompany(res.data);
                });
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user?.companyName} is block now`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
            console.log(res.data);
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
          .delete(`https://dream-finder-server.vercel.app/delete/company/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = allCompany.filter((item) => item._id !== id);
              setAllCompany(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Company has been deleted.",
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
        <TableColumn>LOGO</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>LOCATION</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {allCompany?.map((item, index) => (
          <TableRow key={index + 1}>
            <TableCell>
              <Image
                className=""
                src={item?.companyLogo}
                height={70}
                width={70}
                alt="Profile image"
              />
            </TableCell>
            <TableCell>{item?.companyName}</TableCell>
            <TableCell>{item?.companyEmail}</TableCell>
            <TableCell>Dhaka</TableCell>
            <TableCell>
              <div className="flex item-center gap-3">
                {item?.role === "block" ? (
                  <MdBlock className="text-3xl text-redColor" />
                ) : (
                  <button onClick={() => handleBlock(item)} title="Block">
                    <MdBlock className="text-3xl" />
                  </button>
                )}
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
