"use client";

import useContextData from "@/hooks/useContextData";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const UserDropDown = ({ onOpen }) => {
  const { user } = useContextData();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="success"
          size="sm"
          src={
            user?.photoURL
              ? user?.photoURL
              : "https://avatars.githubusercontent.com/u/30373425?v=4"
          }
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key={user?.displayName ? user?.displayName : "Not Given"}>
          {user?.displayName ? user?.displayName : "Not Given"}
        </DropdownItem>
        <DropdownItem key={user?.email}>{user?.email}</DropdownItem>
        <DropdownItem key={"profile edit"}>
          <Link href={"/dashboard/editProfile"}>Edit Profile</Link>
        </DropdownItem>
        <DropdownItem
          onClick={onOpen}
          key="sign out"
          className="text-danger"
          color="danger"
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropDown;
