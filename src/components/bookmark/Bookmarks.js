"use client";
import { AuthContext } from "@/providers/AuthProvider";
import { Card, CardBody, Image } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import useBookmarkDelete from "@/hooks/useBookmarkDelete";

const Bookmarks = () => {
  const { user, Loading } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);
  const { handleBookmarkDelete, deleteState } = useBookmarkDelete();

  useEffect(() => {
    if (!Loading) {
      fetch(
        `https://dream-finder-server.vercel.app/bookmark/${user?.email}`
      )
        .then(res => res.json())
        .then(data => setBookmarks(data));
    }
  }, [Loading, deleteState]);

  return (
    <div className=" space-y-10  max-sm:px-2 md:px-10 group my-10 w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto ">
      {bookmarks.length ? (
        bookmarks?.map(bookmark => (
          <Card key={bookmark?._id} className="border p-2 rounded-none">
            <CardBody>
              <div className="lg:flex gap-5 space-y-5 lg:space-y-0">
                <div>
                  <Image
                    src={bookmark?.company_logo}
                    className="rounded-none hidden lg:flex lg:h-28 lg:w-56"
                    alt="company logo"
                  />
                </div>
                <div className=" flex flex-1 justify-between relative">
                  <div>
                    <h1 className="text-2xl  font-semibold">
                      {bookmark?.category}
                    </h1>
                    <h3 className="text-lg  font-semibold">
                      {bookmark?.company_name}
                    </h3>

                    <p className="font-semibold text-secondaryColor text-sm">
                      {bookmark?.location} ({bookmark?.type})
                    </p>
                    <p className="font-semibold text-secondaryColor text-sm">
                      Posted{" "}
                      {bookmark &&
                        bookmark.posted_date &&
                        Math.floor(
                          (new Date() - new Date(bookmark.posted_date)) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                      Days Ago
                    </p>
                  </div>
                  <div>
                    <Dropdown className="rounded-none absolute -right-10">
                      <DropdownTrigger>
                        <Button className="bg-transparent ">
                          <BiDotsHorizontalRounded
                            style={{
                              color: "#5b6e7f",
                              fontSize: 32,
                              cursor: "pointer",
                            }}
                          />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                          {" "}
                          <div className="flex items-center gap-3">
                            <CgDetailsMore />
                            <Link href={`/Find-Jobs/${bookmark?.jobId}`}>
                              Details
                            </Link>
                          </div>
                        </DropdownItem>
                        <DropdownItem
                          key="delete"
                          className="text-red-500 hover:text-red-500 "
                        >
                          <div
                            onClick={() => handleBookmarkDelete(bookmark?._id)}
                            className="flex items-center gap-3"
                          >
                            <MdDeleteOutline />
                            Remove
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))
      ) : (
        <div className="h-lvh flex justify-center items-center">
          <h1 className="font-bold text-secondaryColor">No Saved Post</h1>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
