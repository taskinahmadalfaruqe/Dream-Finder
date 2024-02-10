"use client";
import React, { useContext, useEffect, useState } from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { FaClock } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import CommonButton from "@/components/shared/CommonButton";
import { FaBookmark, FaRegBookmark, FaLocationDot } from "react-icons/fa6";
import { TbCashBanknote } from "react-icons/tb";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import useBookmarkDelete from "@/hooks/useBookmarkDelete";
import ApplyButton from "../ApplyButton/ApplyButton";

const JobCard = ({ job }) => {
  const { user, Loading } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const {
    company_name,
    category,
    viewCount,
    description,
    minSalary,
    maxSalary,
    location,
    _id,
    type,
    company_logo,
    posted_date,
    appliedCount,
  } = job;

  const handleSaveToBookmark = () => {
    const bookmark = {
      category,
      viewCount,
      description,
      minSalary,
      maxSalary,
      location,
      type,
      company_logo,
      posted_date,
      appliedCount,
      user: user?.email,
      jobId: _id,
    };
    axios
      .post(
        `https://dream-finder-file-upload-server.vercel.app/bookmark`,
        bookmark
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleBookmarkDelete = () => {
    axios
      .delete(
        `https://dream-finder-file-upload-server.vercel.app/bookmarkDelete?id=${_id}&user=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (user) {
      fetch(
        `https://dream-finder-file-upload-server.vercel.app/bookmark/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setBookmarks(data));
      const bookmarked = bookmarks?.find((bookmark) => bookmark.jobId === _id);

      if (bookmarked) {
        setIsBookmarked(true);
      }else{
        setIsBookmarked(false);
      }
    }
  }, [user, isBookmarked, bookmarks, _id]);

  

  return (
    <Card
      onMouseLeave={() => setIsShow(false)}
      className=" relative shadow-2xl"
      radius="sm"
    >
      <CardHeader className="flex gap-3 p-5 justify-between">
        <Button
          className="border-primaryColor border-[1px] px-5 py-1"
          radius="sm"
          variant="bordered"
        >
          <BiBarChartAlt className="text-primaryColor text-lg font-bold" />{" "}
          Actively Hiring
        </Button>
        {user && (
          <div
          title="Remove from Bookmark"
          onClick={() => {
            if (isBookmarked) {
              handleBookmarkDelete();
              setIsBookmarked(false);
            } else {
              handleSaveToBookmark();
              setIsBookmarked(true);
            }
          }}
        >
          {isBookmarked ? (
            <FaBookmark
              style={{
                color: "#00BE63",
                fontSize: 22,
                cursor: "pointer",
              }}
            />
          ) : (
            <FaRegBookmark
              style={{
                color: "#00BE63",
                fontSize: 22,
                cursor: "pointer",
              }}
            />
          )}
        </div>
        )}
      </CardHeader>
      <Divider />
      <CardBody onMouseOver={() => setIsShow(true)} className="px-5 py-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{category}</h1>
            <p className=" md:text-lg font-semibold mt-1 text-secondaryColor">
              {company_name}
            </p>
          </div>

          <div>
            <Image
              src={company_logo}
              width={100}
              height={50}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
          <p className="lg:w-2/3 text-secondaryColor mt-2 text-sm md:text-lg">
            {description.slice(0, 100)} ...
          </p>
          <div className="mt-3 flex gap-8">
            <div>
              <p className=" flex items-center">
                <FaLocationDot className="font-bold mr-1" />
                <span>Location</span>
              </p>
              <span className="text-secondaryColor ml-1">{location}</span>
            </div>
            <div>
              <p className=" flex items-center">
                <TbCashBanknote className="font-bold mr-1" />
                <span>Salary (Per Month)</span>
              </p>
              <span className="text-secondaryColor ml-1">
                $ {minSalary} - {maxSalary}
              </span>
            </div>
          </div>
          <div>
            <p className=" mt-3 text-sm md:text-lg mb-0">
              {appliedCount} People Applied For this Job
            </p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <div className="px-5 py-3 flex justify-end">
        <div>
          <p className=" flex items-center">
            <FaClock className="font-bold mr-1" />
            <span>Posted</span>
          </p>
          <span className="text-secondaryColor ml-1">
            {Math.floor(
              (new Date() - new Date(posted_date)) / (1000 * 60 * 60 * 24)
            )}{" "}
            Days Ago
          </span>
        </div>
      </div>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isShow ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <div className="absolute h-full w-full top-0 left-0 bg-lightSkyBlue z-20  opacity-80  flex justify-center items-center">
          <ApplyButton id={_id} />
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
