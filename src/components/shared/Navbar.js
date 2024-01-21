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
} from "@nextui-org/react";
import { useState } from "react";
import { Badge } from "@nextui-org/react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = ["Home", "Jobs", "About", "Services", "signin", "signup"];
  const menuItems = [
    {
      title: "Home",
      path: '/'
    },
    {
      title: "Find Jobs",
      path: '/Find-Jobs'
    },
    {
      title: "Contact Us",
      path: '/contact'
    },
    {
      title: "Services",
      path: '/'
    },
    {
      title: "Login",
      path: '/auth/signin'
    },
    {
      title: "Resister",
      path: '/auth/signup'
    }
  ];

  const path = usePathname();

  return (
    <div className={`container ${path.includes("auth") && "hidden"}`}>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand className="hidden md:flex">
            <Link href="/">
              <p className="font-bold text-inherit">Dream Finder</p>
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
              href="#"
              className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
            >
              Services
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent>
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
              startContent={<FaSun />}
              endContent={<FaMoon />}
            ></Switch>
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/auth/signin"
              variant="flat"
            >
              Sign in
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.path}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarPage;