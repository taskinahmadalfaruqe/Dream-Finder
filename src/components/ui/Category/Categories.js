"use client";

import Image from "next/image";
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const allCategory = [
  {
    id: 1,
    category_name: "Accounting",
    available_job: 200,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYA-uQq-hcrrJZz4k0cQ6CQK7nu-gTuzQ-Q&usqp=CAU",
  },
  {
    id: 2,
    category_name: "Administrative",
    available_job: 150,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CWRDol0AxT5zTVsDOONMeTr6CRoJD-cVsw&usqp=CAU",
  },
  {
    id: 3,
    category_name: "Data Analyst",
    available_job: 100,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbyjqB_zOL-hPRMu3CNIsnQKm6KCkFRCX_w&usqp=CAU",
  },
  {
    id: 4,
    category_name: "Manager",
    available_job: 300,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1fLdTfJMuWl-XQcHwqG4Cu-kouv5BoTx4A&usqp=CAU",
  },
  {
    id: 5,
    category_name: "Marketing Specialist",
    available_job: 250,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUn3fhvxWFpDRJAFwrA6DQVBXoUJGDgQwsQ&usqp=CAU",
  },
  {
    id: 6,
    category_name: "Customer Service",
    available_job: 175,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk0JxdDR6bMm69OMBJHSAxwYduCbX3Ftpyg&usqp=CAU",
  },
  {
    id: 7,
    category_name: "Education",
    available_job: 225,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsyK4fBfBjn0lXkvigtnAG-nZ6sawahhPOw&usqp=CAU",
  },
  {
    id: 8,
    category_name: "Engineering",
    available_job: 275,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HbryXgbnsqym-uBH8udryRVAuGz0MwE9ww&usqp=CAU",
  },
  {
    id: 9,
    category_name: "Finance",
    available_job: 350,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG8mjCtTXjddFd5gbLscBm6qDPocYvRXbcA&usqp=CAU",
  },
  {
    id: 10,
    category_name: "IT",
    available_job: 400,
    icon_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfs5J73y7lyviGR9RO0Xctw4QU4zBbX5adw&usqp=CAU",
  },
];

const Categories = () => {
  return (
    <div className="container py-20">
      <h2 className="text-center font-bold text-4xl underline pb-10">
        See Our All Job Categories
      </h2>
      <div
        className="max-w-screen-xl mx-auto text-center grid grid-cols-2 
            lg:grid-cols-5 md:grid-cols-3 gap-6 justify-between"
      >
        {allCategory?.map((single) => (
          <Link
            key={single.id}
            href={`/Find-Jobs?category=${single.category_name}`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className=" p-2 shadow-xl rounded-lg border border-primaryColor"
            >
              <Image
                className="mx-auto"
                src={single.icon_image}
                width={60}
                height={60}
                alt="Picture of the author"
              />

              <h2 className="font-semibold text-xl text-primaryColor">
                {single.category_name}
              </h2>

              <p>Available Job: {single.available_job}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
