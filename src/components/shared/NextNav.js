"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  useDisclosure,
  Avatar,
  Image,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@nextui-org/react";
import { FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

import { usePathname } from "next/navigation";
import useContextData from "@/hooks/useContextData";
import SignOutModal from "./LogoutModal";
import ThemeSwitch from "@/app/ThemeSwitch";
import "./navbar.css";
import useAdmin from "@/hooks/useAdmin";
import MobileNavLink from "../ui/NavbarCompo/MobileNavLink";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import UserDropDown from "./dashboardCompo/UserDropDown";

const NextNavbar = () => {
  const pathName = usePathname();
  const [isAdmin, isAdminLoading] = useAdmin();
  // const isAdmin = true;
  // const isAdminLoading = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const path = usePathname();
  const [navbarSize, setNavbarSize] = useState("xl");
  const { user } = useContextData();

  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width >= 1280) {
      setNavbarSize("xl");
    } else if (width >= 1024) {
      setNavbarSize("lg");
    } else if (width >= 768) {
      setNavbarSize("md");
    } else if (width >= 640) {
      setNavbarSize("sm");
    }
  }, []);

  // side effect
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {path.includes("auth") || (
        <Navbar
          maxWidth={navbarSize}
          shouldHideOnScroll={true}
          onMenuOpenChange={setIsMenuOpen}
          className="navbarCustomDesign"
        >
          <NavbarContent>
            <NavbarMenuToggle
              icon={
                isMenuOpen ? (
                  <IoCloseOutline className="text-4xl md:text-5xl duration-300  dark:text-whiteColor dark:opa7" />
                ) : (
                  <LuMenu className="text-3xl md:text-4xl duration-300  dark:text-whiteColor dark:opa7" />
                )
              }
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden w-max duration-300"
            />
            <NavbarBrand className="hidden md:flex">
              <Link href="/">
                <Image
                  src="/logo.png"
                  className="hidden lg:flex"
                  width={100}
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-4">
            <NavbarItem className="">
              <Link
                href="/"
                style={{
                  background:
                    pathName === "/" &&
                    "linear-gradient(0deg,  transparent, #00BE6370)",
                  borderTop: pathName === "/" && "1px solid #00BE63",
                  borderBottom: pathName === "/" && 0,
                  borderRadius: pathName === "/" && "5px",
                }}
                className={`text-black navLinkHover  dark:text-white border border-transparent  py-1 px-3  font-medium`}
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/Find-Jobs"
                className={`${
                  pathName === "/Find-Jobs" ? "activeNavlink" : ""
                } navLinkHover text-black dark:text-white border border-transparent  py-1 px-3 rounded-md font-medium`}
              >
                All Jobs
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/contact"
                className={`${
                  pathName === "/contact" ? "activeNavlink" : ""
                } text-black dark:text-white navLinkHover py-1 px-3 border border-transparent font-medium`}
              >
                Contact Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/subscription"
                className={` ${
                  pathName === "/subscription" && "activeNavlink"
                } text-black dark:text-white navLinkHover py-1 px-3  border border-transparent font-medium`}
              >
                Subscription
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/upcoming-event"
                className={`${
                  pathName === "/upcoming-event" && "activeNavlink"
                } text-black dark:text-white navLinkHover  border border-transparent py-1 px-3 rounded-md font-medium`}
              >
                Upcoming Event
              </Link>
            </NavbarItem>
            {user && (
              <NavbarItem>
                <Link
                  href={
                    isAdminLoading ? "/" : isAdmin ? "/admin" : "/dashboard"
                  }
                  className={`${
                    pathName === "/dashboard" && "activeNavlink"
                  } text-black dark:text-white navLinkHover  border border-transparent py-1 px-3 rounded-md font-medium`}
                >
                  Dashboard
                </Link>
              </NavbarItem>
            )}

            {/* navbar content */}
            <NavbarItem>
              <Badge content="99+" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                >
                  <FaBell className="text-primaryColor" size={24} />
                </Button>
              </Badge>
            </NavbarItem>

            <NavbarItem>
              <ThemeSwitch></ThemeSwitch>
            </NavbarItem>

            <NavbarItem>
              {user ? (
                <div>
                  <UserDropDown onOpen={onOpen} />
                </div>
              ) : (
                <Button
                  as={Link}
                  href="/auth/signin"
                  color="success"
                  variant="flat"
                  style={{ borderRadius: "5px" }}
                  className="font-bold rounded border border-primaryColor"
                >
                  Sign in
                </Button>
              )}
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            className="lg:hidden max-w-60 gap-0 items-center justify-end"
            justify="end"
          >
            <NavbarItem className="text-center justify-end w-min max-w-12 mx-1 md:mx-2">
              <Badge content="99+" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                >
                  <FaBell className="text-primaryColor" size={24} />
                </Button>
              </Badge>
            </NavbarItem>

            <NavbarItem className="text-center justify-end w-min max-w-12 mx-1 md:mx-2">
              <ThemeSwitch></ThemeSwitch>
            </NavbarItem>

            <NavbarItem
              className={`text-center justify-end w-min ${
                user && "max-w-12"
              } mx-1 md:mx-2`}
            >
              {user ? (
                <div>
                  <UserDropDown onOpen={onOpen} />
                </div>
              ) : (
                <Button
                  as={Link}
                  href="/auth/signin"
                  color="success"
                  variant="flat"
                  className="font-bold"
                >
                  Sign in
                </Button>
              )}
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {/* {mobileLinks.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link href={item.path}>{item.title}</Link>
              </NavbarMenuItem>
            ))} */}

            <div className="min-h-[70vh] my-10 p-10">
              {mobileLinks.map((link, index) => (
                <NavbarMenuItem key={`${link}-${index}`} className="w-full">
                  <MobileNavLink link={link} />
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>

          {/* logout modal */}
          <SignOutModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </Navbar>
      )}
    </>
  );
};

const mobileLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Find Jobs",
    path: "/Find-Jobs",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Sign In",
    path: "/auth/signin",
  },
  {
    title: "Sign Up",
    path: "/auth/signup",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

export default NextNavbar;
