
import React from "react";

export default function Button() {
  return (
    <button>
      <span className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-whiteColor border  border-primaryColor rounded hover:bg-whiteColor group">
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primaryColor absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-darkColor transition-colors duration-400 ease-in-out group-hover:text-whiteColor">Button</span>
      </span>
    </button>
  );
}