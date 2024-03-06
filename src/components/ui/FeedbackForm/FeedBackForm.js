"use client"

import React, { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Select, SelectItem, Input, Textarea, Autocomplete, AutocompleteItem, Button, Card } from "@nextui-org/react";
import CommonButton from '@/components/shared/CommonButton';
// import SectionHeading from '@/components/shared/SectionHeading';
import { AuthContext } from '@/providers/AuthProvider';
import useAxiosSecure from "@/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import axios from "axios";

const FeedBackForm = () => {
 const {user} = useContext(AuthContext);
const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        const toastId = toast.loading("loading...")
        const feedback = {
            name:user?.displayName,
            photo:user?.photoURL,
            comment:data?.comment,
            rating: data?.rating,
            status:"approved",
            posted_date:new Date()
        }
        axiosSecure.post("/feedback",feedback)
        .then(res => {
            if(res.data?.insertedId){
                toast.remove(toastId)
                toast.success("successfully added")
            }
        })
        .catch(error=>{
            toast.remove(toastId)
            toast.error(error?.message)
        })
        reset();
    };

    return (
        <div className="">
            <div className="">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className=" max-w-md p-10 w-full flex-wrap  justify-center space-y-5 mx-auto">
                        <div className="">
                            <Input
                                className="border  border-primaryColor rounded-xl w-full"
                                type="text"
                                {...register("comment", { required: true })}
                                label="FeedBack"
                                placeholder="Type Here" />
                            {errors.comment && <span className="text-redColor">This field is required</span>}
                        </div>
                        <div className="">
                            <Input
                                className="border border-primaryColor rounded-xl w-full"
                                type="number"
                                max="5"
                                min="1"
                                maxLength="1"
                                label="Rating"
                                {...register("rating", { required: true })}
                                placeholder="include (1-5)" />
                            {errors.rating && <span className="text-redColor">This field is required</span>}
                        </div>
                        <div className='text-center w-full   py-5'>
                 
                        <CommonButton
                            type={"submit"}
                            buttonName={"Add FeedBack"}>
                        </CommonButton>
                    </div>
                    </Card>
                  
                </form>
            </div>
        </div>
    );
};

export default FeedBackForm;
