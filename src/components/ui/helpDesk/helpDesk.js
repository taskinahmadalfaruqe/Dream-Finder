"use client"
import Button from "@/components/shared/Button";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { useForm } from 'react-hook-form';

export default function HelpDesk() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data)
  return (

    <div className="pb-10 container" >
      <h2 className='text-center text-darkColor dark:text-whiteColor font-bold text-4xl my-10'>Help <span className='text-primaryColor'>Desk</span></h2>
      <div className='flex justify-evenly items-center flex-wrap'>
        <div>
          <div className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow   dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GET IN TOUCH
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti, expedita sint eligendi quaerat quo dolorum perspiciatis tenetur quas impedit dolorem numquam reprehenderit sunt tempora nostrum nulla minima culpa aperiam.</p>
            <div className='flex gap-2 items-center pb-2'>
              <p ><MdMarkEmailRead className='text-primaryColor h-12 w-12' /></p>
              <div className='flex-col'>
                <p className='font-semibold pb-1 text-darkColor dark:text-whiteColor'>Mail me</p>
                <p>developer@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <p><FaWhatsapp className='text-primaryColor h-12 w-12' /></p>
              <div className='flex-col'>
                <p className='font-semibold pb-1 text-darkColor dark:text-whiteColor'> WhatsApp || Phone</p>
                <p>+8801799900078</p>
              </div>
            </div>
          </div>
        </div>

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
              {errors.name && <span className="text-red-500">This field is required</span>}
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
              {errors.number && <span className="text-red-500">This field is required</span>}
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
              {errors.email && <span className="text-red-500">This field is required</span>}
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
              {errors.email_subject && <span className="text-red-500">This field is required</span>}
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
             {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <div className='text-center w-[100%] flex'>
            <Button type="submit" className="w-[100%]" >submit</Button>
          </div>
        </form>

      </div>
    </div>

  );
}