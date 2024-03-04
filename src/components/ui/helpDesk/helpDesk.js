"use client";

import React from "react";
import HelpDeskCard from "./HelpDeskCard";
import ContactForm from "./ContactForm";

export default function HelpDesk() {
  return (
    <div className="pb-10 container my-10">
      <h2 className="text-center text-darkColor dark:text-whiteColor font-bold text-4xl my-10">
        Help <span className="text-primaryColor">Desk</span>
      </h2>
      <div className="flex justify-evenly items-center flex-wrap">
        <HelpDeskCard></HelpDeskCard>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
