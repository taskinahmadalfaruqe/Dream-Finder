"use client";
import { Button, Switch, Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
("react-icons/bs");
import { MdSunny } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // set mounted

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=" flex items-center justify-center">
      {/* {theme === "light" ? (
        <Button
          onClick={() => setTheme("dark")}
          isIconOnly
          color="success"
          aria-label="Light"
        >
          <MdSunny className="text-5xl  cursor-pointer bg-secondaryColor bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400 rounded-md p-2 sm:p-2 " />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("light")}
          isIconOnly
          color="warning"
          variant="faded"
          aria-label="Dark"
        >
          <TbMoonFilled className="text-5xl  cursor-pointer bg-secondaryColor bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400 rounded-md p-2 sm:p-2 " />
        </Button>
      )} */}
      {theme === "light" ? (
        <Tooltip
          content="dark theme"
          showArrow
          placement="bottom"
          className="font-medium text-whiteColor capitalize "
          color="success"
        >
          <Button
            radius="sm"
            onClick={() => setTheme("dark")}
            isIconOnly
            color="success"
            aria-label="Light"
            variant="light"
            className=" bg-primaryColor text-primaryColor  bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400"
          >
            <TbMoonFilled className="text-4xl  cursor-pointer rounded-md p-1 " />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip
          content="light theme"
          showArrow
          placement="bottom"
          className="font-medium text-whiteColor capitalize "
          color="success"
        >
          <Button
            radius="sm"
            onClick={() => setTheme("light")}
            isIconOnly
            color="success"
            aria-label="Dark"
            variant="light"
            className=" bg-primaryColor text-primaryColor  bg-opacity-0 hover:bg-opacity-25 active:scale-95 duration-400"
          >
            <MdSunny className="text-4xl  cursor-pointer rounded-md p-1 " />
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeSwitch;
