"use client";

import { Button, Link, Spinner, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FcGoogle } from "react-icons/fc";
// import Divider from "./Divider";
// import BackToPrevState from "./BackToPrevState";
import useContextData from "@/hooks/useContextData";
import { useRouter } from "next/navigation";
import Form from "./Form";
import SignUpAnim from "./SignUpAnim";
import CompanyRegisterForm from "./CompanyRegisterForm";
import BackToPrevState from "@/components/shared/BackToPrevState";
import Divider from "@/components/shared/Divider";

export default function SignUpForm() {
  // state
  const [isEmailSignUpPage, setIsEmailSignUpPage] = useState(false);
  const [questionPage, setQuestionPage] = useState(true);
  const [recruiterPage, setRecruiterPage] = useState(false);
  const [isGoogleAuthBtnActive, setIsGoogleAuthBtnActive] = useState(false);

  const { googleLogin } = useContextData();
  const router = useRouter();

  // handler

  const handleGoogleLogin = () => {
    setIsGoogleAuthBtnActive(true);
    googleLogin()
      .then(async res => {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
          profileImage:res?.user?.photoURL,
          isPremium:false,
          isAdmin:false,
          role:"user"
        };

        // if user not exist in db, then create user in db by there information.
        await axiosPublic.post("/create/user", userData);
        router.push("/Find-Jobs");
        setIsGoogleAuthBtnActive(false);
      })
      .catch(error => {
        console.log(error);
        setIsGoogleAuthBtnActive(false);
      });
  };

  return (
    <Fade triggerOnce={true}>
      <main
        className={`px-5 lg:flex items-center justify-center ${
          isEmailSignUpPage || "min-h-screen"
        }`}
      >
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
                  <button
                    onClick={handleGoogleLogin}
                    className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6 flex items-center justify-center gap-2"
                  >
                    {isGoogleAuthBtnActive ? (
                      <Spinner color="default" />
                    ) : (
                      <>
                        <FcGoogle className="text-2xl" />
                        <span>Sign up with Google</span>
                      </>
                    )}
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
