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
import { FaTrashAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

export default function App() {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://dream-finder-server.vercel.app/get/users")
      .then((res) => {
        setAllUser(res.data);
      });
  }, []);

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Make Admin Him/Her",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://dream-finder-server.vercel.app/users/admin/${user._id}`
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              axios
                .get("https://dream-finder-server.vercel.app/get/users")
                .then((res) => {
                  setAllUser(res.data);
                });
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is admin now`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
            console.log(res.data);
          });
      }
    });
  };

  const handleBlock = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Block Him/Her",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Block Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://dream-finder-server.vercel.app/users/block/${user._id}`
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              axios
                .post("https://dream-finder-server.vercel.app/block/email", {
                  email: user?.email,
                })
                .then((res) => {
                  if (res.modifiedCount > 0) {
                    console.log("blocked email", user?.email);
                  }
                });
              axios
                .get("https://dream-finder-server.vercel.app/get/users")
                .then((res) => {
                  setAllUser(res.data);
                });
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is block now`,
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
          .delete(`https://dream-finder-server.vercel.app/delete/user/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = allUser.filter((item) => item._id !== id);
              setAllUser(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
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
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {allUser?.map((item, index) => (
          <TableRow key={index + 1}>
            <TableCell>{item?.name} </TableCell>
            <TableCell>{item?.email}</TableCell>
            <TableCell>Premium</TableCell>
            <TableCell>
              <div className="flex item-center gap-4">
                {item?.role === "admin" ? (
                  <RiAdminFill className="text-3xl text-primaryColor" />
                ) : (
                  <button
                    disabled={item?.role == "block"}
                    onClick={() => handleMakeAdmin(item)}
                    title="Make Admin"
                  >
                    <RiAdminFill className="text-3xl" />
                  </button>
                )}

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
