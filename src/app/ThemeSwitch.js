"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsToggle2On, BsToggle2Off  } from "react-icons/bs";

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
    <div>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <BsToggle2Off className="text-4xl text-primaryColor" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <BsToggle2On className="text-4xl text-primaryColor" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
