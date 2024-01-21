"use client"

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
export default function HelpDeskCard() {

    return (
        <div>
            <div className="block max-w-sm p-6  border border-primaryColor rounded-lg shadow   dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GET IN TOUCH
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti, expedita sint eligendi quaerat quo dolorum perspiciatis tenetur quas impedit dolorem numquam reprehenderit sunt tempora nostrum nulla minima culpa aperiam.
                </p>
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

    );
}