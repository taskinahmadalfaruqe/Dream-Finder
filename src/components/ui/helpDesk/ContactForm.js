"use client"
import CommonButton from "@/components/shared/CommonButton";
import React from "react";
import { useForm } from 'react-hook-form';

export default function ContactForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data)

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="w-full border-primaryColor border p-2 rounded "
                            placeholder=" Your Name"
                        />
                        {errors.name && <span className="text-redColor">This field is required</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="contactNumber" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Number
                        </label>
                        <input
                            type="tel"
                            {...register("number", { required: true })}
                            className="w-full border-primaryColor border  p-2 rounded"
                            placeholder=" Contact Number"
                        />
                        {errors.number && <span className="text-redColor">This field is required</span>}
                    </div>
                </div>
                <div className='flex gap-4 '>
                    <div className="w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="w-full border-primaryColor border p-2 rounded"
                            placeholder=" Your Email"
                        />
                        {errors.email && <span className="text-redColor">This field is required</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="subject" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Subject
                        </label>
                        <input
                            type="text"
                            {...register("email_subject", { required: true })}
                            className="w-full border-primaryColor border p-2 rounded"
                            placeholder=" Email Subject"
                        />
                        {errors.email_subject && <span className="text-redColor">This field is required</span>}
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="message" className="block mb-2 text-darkColor dark:text-whiteColor">
                        Your Message
                    </label>
                    <textarea
                        {...register("message", { required: true })}
                        className="w-full border-primaryColor border p-2 rounded"
                        rows="5"
                        placeholder=" Your Message"
                    ></textarea>
                    {errors.message && <span className="text-redColor">This field is required</span>}
                </div>
                <div className='text-center w-[100%] flex justify-center items-center'>
                    <CommonButton buttonName={"Submit"}></CommonButton>
                </div>
            </form>
        </>

    );
}