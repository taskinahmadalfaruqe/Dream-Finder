"use client"

import React, { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { Select, SelectItem, Input, Textarea, Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import CommonButton from '@/components/shared/CommonButton';
// import SectionHeading from '@/components/shared/SectionHeading';
import { AuthContext } from '@/providers/AuthProvider';

const FeedBackForm = () => {
 const {user} = useContext(AuthContext);
 console.log(user)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <div className='min-h-screen container'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full flex-wrap px-10 md:flex-nowrap justify-center gap-4">
                        <div className="w-1/2">
                            <Input
                                className="border  border-primaryColor rounded-xl w-full"
                                type="text"
                                {...register("comment", { required: true })}
                                label="FeedBack"
                                placeholder="Type Here" />
                            {errors.comment && <span className="text-redColor">This field is required</span>}
                        </div>
                        <div className="w-1/2">
                            <Input
                                className="border border-primaryColor rounded-xl w-full"
                                type="rating"
                                label="Rating"
                                {...register("rating", { required: true })}
                                placeholder="include (1-5)" />
                            {errors.rating && <span className="text-redColor">This field is required</span>}
                        </div>
                    </div>
                    <div className='text-center w-[100%] flex justify-center items-center py-5'>
                    {/* <Button type="submit">Submit</Button> */}
                        <CommonButton
                            type={"submit"}
                            buttonName={"Add FeedBack"}>
                        </CommonButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedBackForm;
