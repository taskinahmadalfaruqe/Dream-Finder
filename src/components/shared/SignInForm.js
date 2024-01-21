"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import { Fade } from "react-awesome-reveal";

const SignInForm = () => {
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
      <main className="px-5">
        <div className="mt-20 xsm:mt-28 lg:mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign in to Dream Finder</h2>
          <button className="scale-95 active:scale-[.93] duration-200 bg-lightWhiteColor text-darkColor text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2">
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>

          <Divider content={"or sign in with email"} />

          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="w-full mb-4">
              <label className="label">
                <span className="text-lg font-bold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                autoFocus={true}
                {...register("email", {
                  required: "Email address is required *",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="border w-full rounded-xl px-5 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-100"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="w-full mb-4">
              <label className="font-normal flex justify-between">
                <span className="text-lg font-bold">Your Password</span>
                <span className="underline cursor-pointer pr-2 max-sm:text-xs text-sm">
                  Forgot Password?
                </span>
              </label>
              <input
                type="password"
                placeholder="6+ characters"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 32,
                  pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className="border w-full rounded-xl px-5 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-100"
              />
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
                  password at least 6 char long & at most 32 char long. spacial
                  char, digit, uppercase, lowercase required *
                </p>
              )}
            </div>
            <button className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2">
              Sign in
            </button>
          </form>
          <p className="text-center my-5">
            Don't have an account?{" "}
            <Link href={"/auth/signup"} className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </Fade>
  );
};

export default SignInForm;
