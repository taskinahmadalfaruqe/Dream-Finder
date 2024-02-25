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
} from "@nextui-org/react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useContextData from "@/hooks/useContextData";

const Page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContextData();

  const [postedJob, setPostedJob] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/api/v1/posted-jobs/${user?.email}`)
      .then(res => {
        console.log(res?.data);
        setPostedJob(res?.data);
      })
      .catch(err => console.log(err));
  }, [axiosSecure, user?.email]);

  const renderCell = useCallback((job, columnKey) => {
    let cellValue = job[columnKey];
    if (columnKey.includes(",")) {
      const x = columnKey.split(",");
      cellValue = `$${job[x[0]]}-$${job[x[1]]}`;
    }
    console.log(columnKey);

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
            {cellValue}
          </Chip>
        );
      case "location":
        return (
          <Chip className="capitalize text-nowrap" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "posted_date":
        return (
          <Chip className="capitalize text-nowrap" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "type":
        return (
          <Chip className="capitalize text-nowrap" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "minSalary,maxSalary":
        return (
          <Chip className="capitalize text-nowrap" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "viewCount":
        return (
          <Chip className="capitalize text-nowrap" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "action":
        return (
          <div className="relative flex items-center gap-2 justify-between">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit job">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete job">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

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

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "CATEGORY", uid: "category" },
  { name: "JOB TITLE", uid: "jobTitle" },
  { name: "LOCATION", uid: "location" },
  { name: "POSTED DATE", uid: "posted_date" },
  { name: "TYPE", uid: "type" },
  { name: "SALARY", uid: ["minSalary", "maxSalary"] },
  { name: "VIEW COUNT", uid: "viewCount" },
  { name: "ACTION", uid: "action" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const EditIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d="M2.5 18.3333H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

const DeleteIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

const EyeIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export default Page;
