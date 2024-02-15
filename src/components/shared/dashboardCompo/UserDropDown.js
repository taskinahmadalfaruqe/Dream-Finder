"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

const UserDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform ml-1"
          color="success"
          size="sm"
          src="https://avatars.githubusercontent.com/u/30373425?v=4"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key={"user?.displayName"}>
          {"user?.displayName"}
        </DropdownItem>
        <DropdownItem key={"user?.email"}>{"user?.email"}</DropdownItem>
        <DropdownItem key={"option 3"}>{"option 3"}</DropdownItem>
        <DropdownItem key={"option 4"}>{"option 4"}</DropdownItem>
        <DropdownItem key={"option 5"}>{"option 5"}</DropdownItem>
        <DropdownItem key={"---------"}>{"---------"}</DropdownItem>
        <DropdownItem key={"---------2"}>{"---------"}</DropdownItem>
        <DropdownItem key="sign out" className="text-danger" color="danger">
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropDown;
