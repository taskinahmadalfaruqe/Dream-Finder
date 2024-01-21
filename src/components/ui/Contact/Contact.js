"use client"

import React from "react";
import HelpDeskCard from "../helpDesk/HelpDeskCard";
import ContactForm from "../helpDesk/ContactForm";

export default function Contact() {

  return (

    <div className="pb-10 container " >
      <h2 className='text-center text-darkColor dark:text-whiteColor font-bold text-4xl my-10'>Contact <span className='text-primaryColor'>Us</span></h2>
      <div className='flex justify-evenly items-center flex-wrap'>
        <HelpDeskCard></HelpDeskCard>

        <ContactForm></ContactForm>

      </div>
    </div>

  );
}