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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
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
      .get(
        `https://dream-finder-server.vercel.app/company-applied-job/${user?.displayName}`
      )
      .then(res => {
        console.log(res?.data);
        setPostedJob(res?.data);
      })
      .catch(err => console.log(err));
  }, [axiosSecure, user?.displayName, reload]);

  const renderCell = useCallback(
    (job, columnKey) => {
      console.log(columnKey);
      let cellValue = job[columnKey];

      console.log(cellValue);
      if (columnKey === "appliedDate") {
        cellValue = new Date(job[columnKey]).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }
      if (columnKey.includes(",")) {
        const x = columnKey.split(",");
        cellValue = `$${job[x[0]]}-$${job[x[1]]}`;
      }

      const handleChangeStatus = async (id, status) => {
        console.log(id, status);
        const toastId = toast.loading("processing...");

        //
        const res = await axiosSecure.put(`/api/v1/change-job-status/${id}`, {
          status,
        });

        console.log(res.data);
        if (res?.data?.matchedCount) {
          setReload(!reload);
          toast.success("application status changed successfully.", {
            id: toastId,
          });
        } else {
          toast.error("field to change application status.", { id: toastId });
        }
      };

      const handleStatusChangeWarning = async (id, status) => {
        toast(t => (
          <div>
            <span>
              Are you sure! you want to <b>change status</b> for this
              application?
            </span>
            <div className="flex items-center justify-end gap-5 mt-3">
              <Button
                size="sm"
                color="success"
                variant="light"
                onClick={() => {
                  toast.dismiss(t.id);
                }}
                className="px-2 rounded-md font-semibold"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                color="success"
                variant="shadow"
                onClick={() => {
                  toast.dismiss(t.id);
                  handleChangeStatus(id, status);
                }}
                className="bg-primaryColor px-2 rounded-md text-white  font-semibold"
              >
                Proceed
              </Button>
            </div>
          </div>
        ));
      };

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
              {cellValue?.length >= 30
                ? cellValue?.slice(0, 30) + "..."
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
            <>
              {cellValue === "hired" || cellValue === "rejected" ? (
                <Chip
                  className="capitalize cursor-not-allowed"
                  color={statusColorMap[cellValue]}
                  size="sm"
                  variant="flat"
                >
                  {cellValue}
                </Chip>
              ) : (
                <div className="capitalize text-nowrap flex items-center justify-center">
                  <Dropdown>
                    <DropdownTrigger>
                      <Chip
                        color={statusColorMap[cellValue]}
                        size="sm"
                        variant="flat"
                        className="hover:opacity-70 cursor-pointer"
                      >
                        {cellValue}
                      </Chip>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Static Actions"
                      disallowEmptySelection
                      selectionMode="single"
                      defaultSelectedKeys={[cellValue]}
                    >
                      <DropdownItem
                        onClick={() =>
                          handleStatusChangeWarning(job["_id"], "pending")
                        }
                        key="pending"
                      >
                        Pending
                      </DropdownItem>
                      <DropdownItem
                        onClick={() =>
                          handleStatusChangeWarning(job["_id"], "in-touch")
                        }
                        key="in-touch"
                      >
                        In touch
                      </DropdownItem>
                      <DropdownItem
                        onClick={() =>
                          handleStatusChangeWarning(job["_id"], "hired")
                        }
                        key="hired"
                      >
                        Hired
                      </DropdownItem>
                      <DropdownItem
                        onClick={() =>
                          handleStatusChangeWarning(job["_id"], "rejected")
                        }
                        key="rejected"
                        className="text-danger"
                        color="danger"
                      >
                        Rejected
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )}
            </>
          );

        case "action":
          return (
            <div className="relative flex items-center  justify-center">
              <Link href={`/dashboard/appliedJob/${job?._id}`}>
                <Tooltip content="Details">
                  <TiDocumentText style={{ fontSize: 28, color: "#00BE63" }} />
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
              {column => (
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
              {job => (
                <TableRow key={job?._id}>
                  {columnKey => (
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

const statusColorMap = {
  pending: "warning",
  "in-touch": "primary",
  hired: "success",
  rejected: "danger",
};

export default Page;
