"use client"
import CommonButton from "@/components/shared/CommonButton";
import React from "react";
import { useForm } from 'react-hook-form';
import { Select, SelectItem, Input, Textarea, Autocomplete, AutocompleteItem, Button, Card } from "@nextui-org/react";
import axios from "axios";
import Swal from 'sweetalert2'

export default function ContactForm() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const Url = `https://dream-finder-server.vercel.app/contacts`; 

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

        <Card className="w-full md:max-w-lg p-6 shadow-xl rounded-lg mt-5 lg:mt-0">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="md:flex gap-4 mb-4">
                    <div className="md:w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Name
                        </label>
                        <Input
                            type="text"
                            {...register("name", { required: true })}
                            className="border-2  rounded-xl w-full "
                            placeholder=" Your Name"
                  
                        />
                        {errors.name && <span className="text-redColor"> required*</span>}
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="contactNumber" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Number
                        </label>
                        <Input
                            type="tel"
                            {...register("number", { required: true })}
                            className="border-2  rounded-xl w-full"
                            placeholder=" Contact Number"
                        />
                        {errors.number && <span className="text-redColor"> required*</span>}
                    </div>
                </div>
                <div className='md:flex gap-4 '>
                    <div className="md:w-1/2">
                        <label className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            {...register("email", { required: true })}
                            className="border-2  rounded-xl w-full"
                            placeholder=" Your Email"
                        />
                        {errors.email && <span className="text-redColor"> required*</span>}
                    </div>
                    <div className="md:w-1/2">
                        <label htmlFor="subject" className="block mb-2 text-darkColor dark:text-whiteColor">
                            Email Subject
                        </label>
                        <Input
                            type="text"
                            {...register("email_subject", { required: true })}
                            className="border-2  rounded-xl w-full"
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
                        className="border-2  rounded-xl w-full"
                        rows="5"
                        placeholder=" Your Message"
                    ></Textarea>
                    {errors.message && <span className="text-redColor"> required*</span>}
                </div>
                <div className="w-full">
                    <CommonButton buttonName={"Submit"}></CommonButton>
                </div>
            </form>
        </Card>

    );
}