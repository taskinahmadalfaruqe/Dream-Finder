"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import { RiFingerprintLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export default function SignUpForm() {
  // state
  const [isEmailSignUpPage, setIsEmailSignUpPage] = useState(false);
  const [isPasswordType, setIsPasswordType] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Fade>
      {isEmailSignUpPage && (
        <div className="fixed z-[90] top-5 md:top-16 left-5 md:left-10  overflow-hidden">
          <Bounce delay={600}>
            <Button
              onClick={() => setIsEmailSignUpPage(!isEmailSignUpPage)}
              className="text-2xl bg-white  hover:bg-gray-100  border"
              isIconOnly
            >
              <FaAngleLeft className="font-[200]" />
            </Button>
          </Bounce>
        </div>
      )}
      <main className="px-5">
        <div className="mt-20 xsm:mt-28 lg:mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign up to Dream Finder</h2>

          {isEmailSignUpPage ? (
            <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden">
              <Fade direction="down">
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    autoFocus
                    {...register("name", {
                      required: "Name is required *",
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className="border w-full rounded-xl px-5 pr-12 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-[.98] text-secondaryColor font-medium"
                  />
                  <FaRegUser className="text-lg md:text-xl absolute top-12 right-6 text-secondaryColor" />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Photo url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="your photo url"
                    {...register("photoUrl", {
                      required: "photo url is required *",
                    })}
                    aria-invalid={errors.photoUrl ? "true" : "false"}
                    className="border w-full rounded-xl px-5 pr-12 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-[.98] text-secondaryColor font-medium"
                  />
                  <IoIosLink className="text-xl md:text-2xl absolute top-12 right-6 text-secondaryColor" />
                  {errors.photoUrl && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.photoUrl?.message}
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your email"
                    {...register("email", {
                      required: "Email address is required *",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    className="border w-full rounded-xl px-5 pr-12 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-[.98] text-secondaryColor font-medium"
                  />
                  <MdAlternateEmail className="text-xl md:text-2xl absolute top-12 right-6 text-secondaryColor" />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="w-full mb-4">
                  <label className="label">
                    <span className="text-lg font-bold">Your Password</span>
                  </label>
                  <input
                    type={isPasswordType ? "password" : "text"}
                    placeholder="6+ characters"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 32,
                      pattern:
                        /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    className="border w-full rounded-xl px-5 pr-12 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-[.98] text-secondaryColor font-medium"
                  />
                  {isPasswordType ? (
                    <RiFingerprintLine
                      onClick={() => setIsPasswordType(!isPasswordType)}
                      className="cursor-pointer text-2xl absolute top-12 right-6 text-secondaryColor"
                    ></RiFingerprintLine>
                  ) : (
                    <RiFingerprintLine
                      onClick={() => setIsPasswordType(!isPasswordType)}
                      className="cursor-pointer text-2xl absolute top-12 right-6 text-primaryColor"
                    ></RiFingerprintLine>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.password && (
                        <span className="text-sm text-red-600 mt-1">
                          Password is required *
                        </span>
                      )}
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-sm text-red-600 mt-1">
                      Password must be 6 characters *
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-sm text-red-600 mt-1">
                      Password must be 20 characters *
                    </p>
                  )}
                  {errors?.password?.type === "pattern" && (
                    <p className="text-sm text-red-600 mt-1">
                      password at least 6 char long & at most 32 char long.
                      spacial char, digit, uppercase, lowercase required *
                    </p>
                  )}
                </div>
                <button className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
                  Sign up
                </button>
              </Fade>
            </form>
          ) : (
            <div>
              <button className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2">
                <FcGoogle className="text-2xl" />
                Sign up with Google
              </button>
              <Divider content={"or"} />
              <button
                onClick={() => setIsEmailSignUpPage(!isEmailSignUpPage)}
                className="scale-95 active:scale-90 duration-200 bg-lightWhiteColor text-darkColor text-base  rounded-full border w-full font-bold h-16 "
              >
                Continue with email
              </button>
            </div>
          )}

          <p className="text-center my-5">
            Already have an account?{" "}
            <Link href={"/auth/signin"} className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </Fade>
  );
}
