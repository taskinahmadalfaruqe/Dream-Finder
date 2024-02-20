import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Image,
  Button,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import { MdMessage } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import UserDropDown from "./UserDropDown";
import ThemeSwitch from "@/app/ThemeSwitch";

const DashNav = () => {
  return (
    <Navbar
      maxWidth="xl"
      className="py-1 md:py-2 shadow-md dark:bg-black dark:text-whiteColor"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <Image
              src="/logo.png"
              className="w-24 md:min-w-32 mx-auto "
              alt="logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Tooltip
          content="notification"
          showArrow
          placement="bottom"
          className="font-medium text-whiteColor capitalize "
          color="success"
        >
          <Button
            isIconOnly
            color="success"
            aria-label="Light"
            variant="light"
            className="bg-primaryColor text-primaryColor  bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400"
          >
            <IoNotificationsSharp className="text-4xl  cursor-pointer rounded-md p-1" />
          </Button>
        </Tooltip>

        <ThemeSwitch />
        <Tooltip
          content="message"
          showArrow
          placement="bottom"
          className="font-medium text-whiteColor capitalize "
          color="success"
        >
          <Button
            isIconOnly
            color="success"
            aria-label="Light"
            variant="light"
            className="bg-primaryColor text-primaryColor  bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400"
          >
            <MdMessage className="text-4xl  cursor-pointer rounded-md p-1" />
          </Button>
        </Tooltip>
        <div className="sm:hidden">
          <UserDropDown />
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default DashNav;
