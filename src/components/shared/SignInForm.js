"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import { Fade } from "react-awesome-reveal";
import { RiFingerprintLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import SignInAnim from "./SignInAnim";
import { Link, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import BackToPrevState from "./BackToPrevState";
import useContextData from "@/hooks/useContextData";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const SignInForm = () => {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const [isGoogleAuthBtnActive, setIsGoogleAuthBtnActive] = useState(false);
  const [isEmailSingInBtnActive, setIsEmailSingInBtnActive] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();
  const axioxPublic= useAxiosPublic();

  // context data
  const { logIn, googleLogin } = useContextData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    setIsEmailSingInBtnActive(true);
    const { email, password } = data;
 

    // sign in using firebase
    logIn(email, password)
      .then(res => {
        console.log(res.user);
        reset();
        router.push("/Find-Jobs");
        setIsEmailSingInBtnActive(false);
      })
      .catch(err => {
        console.log(err);
        // Mrk45@
        setErr("Invalid email or password, please try again.");
        setIsEmailSingInBtnActive(false);
      });
  };

  const handleGoogleLogin = () => {
    setIsGoogleAuthBtnActive(true);
    googleLogin()
      .then(async res => {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };
        ////////////////////////////
        // if user not exist in db, then create user in db by there information.
        await axioxPublic.post("/create/user", userData);
        ////////////////////////////
        console.log("google authentication successfully.");
        router.push("/Find-Jobs");
        setIsGoogleAuthBtnActive(false);
      })
      .catch(error => {
        setIsGoogleAuthBtnActive(false);
        console.log(error);
      });
  };

  return (
    <>
      <BackToPrevState />
      <Fade>
        <main className="px-5 lg:flex items-center justify-center">
          <div className="max-lg:hidden  w-1/2">
            <SignInAnim />
          </div>
          <div className="mt-20 sm:mt-28  rounded-md max-w-md mx-auto w-full  lg:w-1/2">
            <h2 className="text-3xl my-10 font-bold">
              Sign in to Dream Finder
            </h2>
            <button
              onClick={handleGoogleLogin}
              className="scale-95 active:scale-[.93] duration-200 bg-lightWhiteColor text-darkColor text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2"
            >
              {isGoogleAuthBtnActive ? (
                <Spinner color="default" />
              ) : (
                <>
                  <FcGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </>
              )}
            </button>

            <Divider content={"or sign in with email"} />

            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="w-full mb-4 relative">
                {err && <p className="tex-sm mb-2 text-red-600 mt-1">{err}</p>}
                <label className="label">
                  <span className="text-lg font-bold">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="your email"
                  autoFocus={true}
                  {...register("email", {
                    required: "Email address is required *",
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                {errors?.email?.type === "pattern" && (
                  <p className="text-sm text-red-600 mt-1">
                    invalid email address *
                  </p>
                )}
              </div>
              <div className="w-full mb-4 relative">
                <label className="font-normal flex justify-between">
                  <span className="text-lg font-bold">Your Password</span>
                  <span className="underline cursor-pointer pr-2 max-sm:text-xs text-sm">
                    Forgot Password?
                  </span>
                </label>
                <input
                  type={isPasswordType ? "password" : "text"}
                  placeholder="6+ characters"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 32,
                    pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
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
              <button className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2">
                {isEmailSingInBtnActive ? (
                  <Spinner color="success" />
                ) : (
                  <span>Sign in</span>
                )}
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
    </>
  );
};

export default SignInForm;
