"use client";

import { Card } from "@nextui-org/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
export default function HelpDeskCard() {
  return (
    <Card className="shadow-xl rounded-lg py-1">
      <div className="max-w-lg p-6   rounded-lg ">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          GET IN TOUCH
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
          Whether you are facing technical hiccups, seeking guidance, or simply
          have inquiries, our help desk awaits your message. Our dedicated team
          stands ready to address your concerns promptly and efficiently,
          ensuring your experience remains smooth and uninterrupted. Whether it
          is troubleshooting, clarifications on our services, or general
          assistance, we are here to lend a helping hand. Feel free to reach out
          via email, phone, or through our user-friendly contact form.
        </p>
        <div className="flex gap-2 mt-4 items-center pb-2">
          <p>
            <MdMarkEmailRead className="text-primaryColor h-12 w-12" />
          </p>
          <div className="flex-col">
            <p className="font-semibold pb-1 text-darkColor dark:text-whiteColor">
              Mail Us
            </p>
            <p>developer@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <p>
            <FaWhatsapp className="text-primaryColor h-12 w-12" />
          </p>
          <div className="flex-col">
            <p className="font-semibold pb-1 text-darkColor dark:text-whiteColor">
              {" "}
              WhatsApp || Phone
            </p>
            <p>+8801799900078</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
