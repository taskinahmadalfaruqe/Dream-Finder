import React from "react";

const Divider = ({ content }) => {
  return (
    <div>
      <div className="relative flex py-5 items-center mx-5">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-400">{content}</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default Divider;
