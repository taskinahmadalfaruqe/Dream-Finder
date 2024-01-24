"use client";

import { Button, Link, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Divider from "./Divider";
import SignUpAnim from "./SignUpAnim";
import Form from "./Form";
import CompanyRegisterForm from "./CompanyRegisterForm";
import BackToPrevState from "./BackToPrevState";

export default function SignUpForm() {
  // state
  const [isEmailSignUpPage, setIsEmailSignUpPage] = useState(false);
  const [questionPage, setQuestionPage] = useState(true);
  const [recruiterPage, setRecruiterPage] = useState(false);

  return (
    <Fade triggerOnce={true}>
      {isEmailSignUpPage && (
        <BackToPrevState
          setState={setIsEmailSignUpPage}
          state={isEmailSignUpPage}
        />
      )}
      {questionPage || isEmailSignUpPage || (
        <BackToPrevState setState={setQuestionPage} state={questionPage} />
      )}
      {recruiterPage && (
        <BackToPrevState state={recruiterPage} setState={setRecruiterPage} />
      )}
      {isEmailSignUpPage ||
        recruiterPage ||
        (questionPage && <BackToPrevState />)}
      <main
        className={`px-5 lg:flex items-center justify-center ${
          isEmailSignUpPage || "min-h-screen"
        }`}
      >
        <div className="max-lg:hidden  max-lg:w-1/2">
          <SignUpAnim />
        </div>

        <div className="mt-20 sm:mt-28  rounded-md max-w-md mx-auto w-full  lg:w-1/2">
          {questionPage ? (
            <div hidden={recruiterPage}>
              <h2 className="text-3xl my-10 font-bold">
                What do you want to sign up as on Dream Finder?
              </h2>
              <div>
                <button
                  onClick={() => setRecruiterPage(!recruiterPage)}
                  className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2"
                >
                  As a company recruiter
                </button>
                <Divider content={"or"} />
                <button
                  onClick={() => setQuestionPage(!questionPage)}
                  className="scale-95 active:scale-90 duration-200 bg-lightWhiteColor text-darkColor text-base  rounded-full border w-full font-bold h-16 "
                >
                  As a job hunter
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl my-10 font-bold">
                Sign up to Dream Finder as a job hunter
              </h2>

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
            </>
          )}

          {recruiterPage && (
            <>
              <h2 className="text-3xl my-10 font-bold">
                Sign up to Dream Finder as a recruiter
              </h2>
              <CompanyRegisterForm />
            </>
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
