"use client";
import { useRouter } from "next/navigation";
import "./banner.css";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";


const HomePageBanner = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const searchValue = data.search;
    router.push(`/Find-Jobs?category=${searchValue}`);
  };

  
  // const staticTextColor = "text-blue-500";
  // const textArray = [
  //   "We Make Dreams a Reality by",
  //   "Getting You Hired!",
  // ];
  // const textArrayColor = "orange";
  // const cursor = "_";

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="homePageBanner h-lvh w-full relative flex justify-center items-center"
    >
      <div className="absolute h-full w-full bg-darkColor opacity-70 left-0 top-0"></div>
      <div className="relative z-10">
        <div className="container">
          <h1 className="text-4xl md:text-6xl text-lightWhiteColor heading font-bold  ">
            We Make Dreams a Reality by <br />{" "}
            <span className="text-primaryColor block mt-4">
              Getting You Hired!
            </span>
          </h1>
         

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative max-w-[90%] ">
              <Input
                radius="full"
                type="text"
                placeholder="&nbsp; &nbsp; Find Your Dream Job"
                className="mt-10"
                {...register("search")}
              />
              <Button
                type="submit"
                className="z-20 bg-primaryColor text-white  font-bold absolute top-1 h-12 md:px-14 right-1"
                radius="full"
              >
                SEARCH
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePageBanner;
