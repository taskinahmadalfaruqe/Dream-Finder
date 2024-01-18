import React from 'react';

const CommonButton = ({ buttonName }) => {
  return (
    <div className='cursor-pointer'>

      <div className="relative inline-flex items-center justify-start px-6 py-3  font-medium transition-all bg-whiteColor border  border-primaryColor rounded hover:bg-whiteColor group w-[100%] overflow-hidden">

        <div className="w-48 h-48 rounded rotate-[-40deg] bg-primaryColor absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></div>

        <div className="relative w-full text-center text-darkColor transition-colors duration-400 ease-in-out group-hover:text-whiteColor">{buttonName}</div>

      </div>
    </div>
  );
};

export default CommonButton;
