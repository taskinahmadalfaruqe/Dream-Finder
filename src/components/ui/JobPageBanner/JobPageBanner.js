"use client";
import React, { useState } from "react";
import "./jobPageBanner.css";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const JobPageBanner = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition={{duration: .5}}
          className="container jobPageBanner h-64 md:h-80 mt-10 flex items-end justify-center relative"
        >
          <div className="bg-[#00BE6350] flex items-center py-5 md:py-10 px-5 rounded-t-2xl  border-primaryColor  border-t-2 border-x-2">
            <h1 className="text-xl md:text-4xl text-whiteColor md:w-10/12 text-center  mx-auto">
              Subscribe For Ad-Free and Distraction-Free Experience
            </h1>
          </div>
          <div className="absolute top-0 right-0 cursor-pointer font-bold border-l border-b">
            <RxCross1 style={{fontWeight: 800, fontSize: "28px"}} onClick={() => setIsShow(false)} className="text-whiteColor font-bold " />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobPageBanner;
