"use client";

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { RiFingerprintLine } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useContextData from "@/hooks/useContextData";
import { Spinner } from "@nextui-org/react";
import useAxiosPublic from "@/hooks/useAxiosPublic";
const Form = () => {
  const [isPasswordType, setIsPasswordType] = useState(true);
  const [isEmailSingInBtnActive, setIsEmailSingInBtnActive] = useState(false);

  const [err, setErr] = useState("");
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  // context data
  const { createUser, updateUserData, logOut } = useContextData();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    setIsEmailSingInBtnActive(true);
    const { email, password, name, photoUrl } = data;

    // sign up / create user using firebase
    createUser(email, password)
      .then(res => {
        console.log(res.user);
        updateUserData(name, photoUrl)
          .then(async res => {
            router.push("/auth/signin");
            console.log(res);
            const userInfo = {
              name,
              email,
              role:"user",
              profileImage:photoUrl,
              isPremium:false,
              isAdmin:false
            };
       
            // if user not exist in db, then create user in db by there information.
            await axiosPublic.post("/create/user", userInfo);
            await logOut();
            setIsEmailSingInBtnActive(false);
            reset();
          })
          .catch(err => {
            console.log(err);
            setIsEmailSingInBtnActive(false);
          });
      })
      .catch(err => {
        setIsEmailSingInBtnActive(false);
        console.log(err);
        setErr("something is wrong! please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden">
        <Fade direction="down">
          <div className="w-full mb-4">
            {err && <p className="tex-sm mb-2 text-red-600 mt-1">{err}</p>}
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
                pattern: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
              })}
              aria-invalid={errors.password ? "true" : "false"}
              className="border w-full rounded-xl px-5 pr-12 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-[.98] text-secondaryColor font-medium"
            />
            {isPasswordType ? (
              <RiFingerprintLine
                onClick={() => setIsPasswordType(x => !x)}
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
                password at least 6 char long & at most 32 char long. spacial
                char, digit, uppercase, lowercase required *
              </p>
            )}
          </div>
          <button className="scale-95 active:scale-[.93] duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
            {isEmailSingInBtnActive ? (
              <Spinner color="success" />
            ) : (
              <span>Sign up</span>
            )}
          </button>
        </Fade>
      </form>
    </div>
  );
};

export default Form;
