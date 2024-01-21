"use client";

import { Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import SignUpAnim from "./SignUpAnim";
import Form from "./Form";

export default function SignUpForm() {
  // state
  const [isEmailSignUpPage, setIsEmailSignUpPage] = useState(false);

  return (
    <Fade triggerOnce={true}>
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
      <main
        className={`px-5 lg:flex items-center justify-center ${
          isEmailSignUpPage || "min-h-screen"
        }`}
      >
        <div className="max-lg:hidden  max-lg:w-1/2">
          <SignUpAnim />
        </div>

        <div className="mt-20 sm:mt-28  rounded-md max-w-md mx-auto w-full  lg:w-1/2">
          <h2 className="text-3xl my-10 font-bold">Sign up to Dream Finder</h2>

          {isEmailSignUpPage ? (
            <Form />
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
