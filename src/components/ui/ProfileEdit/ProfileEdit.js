"use client";
import React from 'react';

import { useForm } from "react-hook-form";

import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const ProfileEditPage = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Profile is Updated Successfully.",
            showConfirmButton: false,
            timer: 2000
          });
          router.push('/dashboard/profile');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-primaryColor p-6 rounded shadow-xl'>
                <Input {...register("userName", { required: true })}
                    type="text" label="Name" placeholder="Enter your name" variant='underlined'
                    className='mt-6' />
                {errors?.userName && <span className='text-red-500'>Name is required</span>}

                <Input {...register("userEmail", { required: true })}
                    type="email" label="Email" placeholder="Enter your email" variant='underlined'
                    className='mt-6' />
                {errors?.userEmail && <span className='text-red-500'>Email is required</span>}

                <Input {...register("resume", { required: true })}
                    type="url" label="Resume" placeholder="Resume Drive Link" variant='underlined'
                    className='mt-6' />
                {errors?.resume && <span className='text-red-500'>This is required</span>}

                <Input {...register("portfolio", { required: true })}
                    type="url" label="Portfolio" placeholder="Portfolio Link" variant='underlined'
                    className='mt-6' />
                {errors?.portfolio && <span className='text-red-500'>Portfolio is required</span>}


                <Input {...register("coverletter", { required: true })}
                    type="url" label="Coverletter" placeholder="Coverletter Drive Link" variant='underlined'
                    className='mt-6' />
                {errors?.coverletter && <span className='text-red-500'>This link is required</span>}

                <Input {...register("website")}
                    type="url" label="Website" placeholder="Your Personal Website Live Link" variant='underlined'
                    className='mt-6' />

                <Input {...register("address", { required: true })}
                    type="text" label="Address" placeholder="Enter your address" variant='underlined'
                    className='mt-6' />
                {errors?.address && <span className='text-red-500'>Address is required</span>}


                <Input {...register("education", { required: true })}
                    type="text" label="Education" placeholder="Enter your last education" variant='underlined'
                    className='mt-6' />
                {errors?.education && <span className='text-red-500'>Education field is required</span>}



                <Button color="success" variant="ghost" fullWidth className='mt-6'>
                    <input type="submit"  />
                </Button>


            </form>
        </div>
    );
};

export default ProfileEditPage;