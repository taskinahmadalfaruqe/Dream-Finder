"use client";
import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import { Card, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";

const ProfileEditPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const { data: userDefaultInfo, isPending, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (!user) {
        return;
      } else {
        const res = await axios.get(
          `https://dream-finder-server.vercel.app/user/${user?.email}`
          //   `http://localhost:5000/user/${user?.email}`
        );
        const userData = await res.data;
        return userData;
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put(
        `https://dream-finder-server.vercel.app/update/user/${user?.email}`,
        data
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Profile is Updated Successfully.",
            showConfirmButton: false,
            timer: 2000,
            cancelButtonColor: "#00BE63",
            confirmButtonColor: "#00BE63",
            denyButtonColor: "#00BE63",
          });
        }
        router.push("/dashboard/profile");
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
          cancelButtonColor: "#00BE63",
          confirmButtonColor: "#00BE63",
          denyButtonColor: "#00BE63",
        });
      });
  };

  useEffect(()=>{
    refetch()
  },[userDefaultInfo, user])

  if (isPending) {
    return;
  } 
  
  return (
    <Card className="max-w-2xl mx-auto border shadow-2xl p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: true })}
          type="text"
          label="Name"
          defaultValue={userDefaultInfo?.name}
          variant="bordered"
        />
        {errors?.userName && (
          <span className="text-red-500">Name is required</span>
        )}

        <Input
          defaultValue={userDefaultInfo?.email}
          readOnly
          {...register("email", { required: true })}
          type="email"
          label="Email"
          variant="bordered"
          className="mt-6"
        />
        {errors?.userEmail && (
          <span className="text-red-500">Email is required</span>
        )}

        <Input
          defaultValue={userDefaultInfo?.portfolio}
          {...register("portfolio")}
          type="url"
          label="Website"
          placeholder="Add Personal Website Link"
          variant="bordered"
          className="mt-6"
        />

        <Input
          defaultValue={userDefaultInfo?.linkedin}
          {...register("linkedin")}
          type="url"
          label="LinkedIn"
          placeholder="Add Your LinkedIn Profile"
          variant="bordered"
          className="mt-6"
        />

        <Input
          defaultValue={userDefaultInfo?.location}
          {...register("location", { required: true })}
          type="text"
          label="Address"
          placeholder="Add your address"
          variant="bordered"
          className="mt-6"
        />
        {errors?.address && (
          <span className="text-red-500">Address is required</span>
        )}

        <Input
          defaultValue={userDefaultInfo?.education}
          {...register("education", { required: true })}
          type="text"
          label="Education"
          placeholder="Add your last education"
          variant="bordered"
          className="mt-6"
        />
        {errors?.education && (
          <span className="text-red-500">Education field is required</span>
        )}

        <Button
          type="submit"
          color="success"
          fullWidth
          className="text-whiteColor font-semibold mt-6"
        >
          <input type="submit" value="UPDATE" />
        </Button>
      </form>
    </Card>
  );
};

export default ProfileEditPage;
