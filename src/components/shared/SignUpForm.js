"use client";

import Link from "next/link";
// import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
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
    <div>
      <main className="px-5">
        <div className="mt-20 xsm:mt-28 lg:mt-40 rounded-md max-w-md mx-auto w-full">
          <h2 className="text-3xl my-10 font-bold">Sign up to Dream Finder</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden">
            {/* <Fade direction="down"> */}
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
                className="border w-full rounded-xl px-5 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-100"
              />
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
                className="border w-full rounded-xl px-5 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-100"
              />
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
                className="border w-full rounded-xl px-5 h-16 hover:shadow-lg   focus:shadow-lg   duration-500 outline-none text-lg scale-95 focus:scale-100"
              />
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
            <button className="scale-95 active:scale-90 duration-200 bg-darkColor text-white text-base opacity-100 hover:bg-light-black hover:opacity-90 rounded-full w-full font-bold h-16 mt-6">
              Sign up
            </button>
            {/* </Fade> */}
          </form>
          <p className="text-center my-5">
            Already have an account?{" "}
            <Link href={"/auth/signin"} className="underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
