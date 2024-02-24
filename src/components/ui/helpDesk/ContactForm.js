"use client"
import CommonButton from "@/components/shared/CommonButton";
import React from "react";
import { useForm } from 'react-hook-form';
import { Select, SelectItem, Input, Textarea, Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import axios from "axios";
import Swal from 'sweetalert2'

export default function ContactForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const Url = `http://localhost:5000/contacts`; 

            const res = await axios.post(Url, data);
            if(res.data.insertedId){
                // show success popup
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `seccesfully submited contact form`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            reset();
        } catch (error) {
            // Handle errors if any
            console.error('Error submitting data:', error);
        }
    };

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Name
                        </label>
                        <Input
                            type="text"
                            {...register("name", { required: true })}
                            className="border border-primaryColor rounded-xl w-full "
                            placeholder=" Your Name"
                        />
                        {errors.name && <span className="text-redColor"> required*</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="contactNumber" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Number
                        </label>
                        <Input
                            type="tel"
                            {...register("number", { required: true })}
                            className="border border-primaryColor rounded-xl w-full"
                            placeholder=" Contact Number"
                        />
                        {errors.number && <span className="text-redColor"> required*</span>}
                    </div>
                </div>
                <div className='flex gap-4 '>
                    <div className="w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            {...register("email", { required: true })}
                            className="border border-primaryColor rounded-xl w-full"
                            placeholder=" Your Email"
                        />
                        {errors.email && <span className="text-redColor"> required*</span>}
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="subject" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Subject
                        </label>
                        <Input
                            type="text"
                            {...register("email_subject", { required: true })}
                            className="border border-primaryColor rounded-xl w-full"
                            placeholder=" Email Subject"
                        />
                        {errors.email_subject && <span className="text-redColor">required*</span>}
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="message" className="block mb-2 text-darkColor dark:text-whiteColor">
                        Your Message
                    </label>
                    <Textarea
                        {...register("message", { required: true })}
                        className="border border-primaryColor rounded-xl w-full"
                        rows="5"
                        placeholder=" Your Message"
                    ></Textarea>
                    {errors.message && <span className="text-redColor"> required*</span>}
                </div>
                <div className='text-center w-[100%] flex justify-center items-center'>
                    <CommonButton buttonName={"Submit"}></CommonButton>
                </div>
            </form>
        </>

    );
}