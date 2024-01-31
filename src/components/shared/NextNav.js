"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import useContextData from "@/hooks/useContextData";
import SignOutModal from "./LogoutModal";


const NextNavbar = () => {
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
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden"
            />
            <NavbarBrand className="hidden md:flex">
              <Link href="/">
                <Image src="/logo.png" className="hidden lg:flex" width={100}  alt="logo" />
                {/* <p className="font-bold text-inherit">Dream Finder</p> */}
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden lg:flex gap-4">
            <NavbarItem>
              <Link
                href="/"
                className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/Find-Jobs"
                className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
              >
                All Jobs
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/contact"
                className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
              >
                Contact US
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/subscription"
                className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
              >
                Subscription
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/upcoming-event"
                className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
              >
                Upcomming Event
              </Link>
            </NavbarItem>

            {/* navbar content */}
            <NavbarItem>
              <Badge content="99+" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                >
                  <FaBell size={24} />
                </Button>
              </Badge>
            </NavbarItem>

            <NavbarItem>
              <Switch
                defaultSelected
                size="lg"
                color="success"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <FaSun className={className} />
                  ) : (
                    <FaMoon className={className} />
                  )
                }
              ></Switch>
            </NavbarItem>

            <NavbarItem>
              {user ? (
                <>
                  <Button
                    onClick={onOpen}
                    color="success"
                    variant="flat"
                    className="font-bold"
                  >
                    Sign out
                  </Button>
                  {user && (
                    <Avatar src={user?.photoURL} className="ml-3" size="md" />
                  )}
                </>
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

          <NavbarContent className="lg:hidden max-w-60">
            <NavbarItem>
              <Badge content="99+" shape="circle" color="danger">
                <Button
                  radius="full"
                  isIconOnly
                  aria-label="more than 99 notifications"
                  variant="light"
                >
                  <FaBell size={24} />
                </Button>
              </Badge>
            </NavbarItem>

            <NavbarItem>
              <Switch
                defaultSelected
                size="lg"
                color="success"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <FaSun className={className} />
                  ) : (
                    <FaMoon className={className} />
                  )
                }
              ></Switch>
            </NavbarItem>

            <NavbarItem>
              {user ? (
                <>
                  <Button
                    onClick={onOpen}
                    color="success"
                    variant="flat"
                    className="font-bold"
                  >
                    Sign out
                  </Button>
                  {user && (
                    <Avatar src={user?.photoURL} className="ml-3" size="md" />
                  )}
                </>
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
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link href={item.path}>{item.title}</Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>

          {/* logout modal */}
          <SignOutModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </Navbar>
      )}
    </>
  );
};

const menuItems = [
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
    title: "Services",
    path: "/",
  },
  {
    title: "Login",
    path: "/auth/signin",
  },
  {
    title: "Resister",
    path: "/auth/signup",
  },
];

export default NextNavbar;
