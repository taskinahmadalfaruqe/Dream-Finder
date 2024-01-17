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

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Jobs", "About", "Services"];

  return (
    <div>
      <Navbar className="w-[1200px]" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="#">
              <p className="font-bold text-inherit">Dream Finder</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="">
            <Link
              href="#"
              className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              className="text-black hover:text-white hover:bg-blue-600 p-2 rounded-md font-medium"
            >
              Jobs
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
        <NavbarContent justify="end">
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
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* <div className="container">
            <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
		<a class="text-3xl font-bold leading-none" href="#">
			Dream Finder
		</a>
		<ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Home</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Find Jobs</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">About us</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Services</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a class="text-sm hover:text-blue-600 font-bold" href="#">Contact</a></li>
		</ul>
		<a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
		<a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
	</nav> 
        </div> */}
    </div>
  );
};

export default NavbarPage;
