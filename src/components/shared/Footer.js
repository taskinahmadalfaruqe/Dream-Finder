"use client"

import { FaFacebook,FaLinkedin,FaTwitter, FaInstagram,FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
       <div className="mt-12">
        <div className=" bg-lightSkyBlue w-[70%] mx-auto rounded-md p-12 absolute top-20 left-[15%]">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-lightWhiteColor">Does your company need a great employees?</h1>
                </div>
                <div>
                    <button className="px-3 py-1 bg-lightWhiteColor rounded-md font-medium text-gray-600">Post a job</button>
                </div>
            </div>
        </div>
         <div className="h-[300px] bg-darkColor flex items-center">
            <footer className="container">
                <div className="flex justify-between items-center text-white">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-semibold">Dream Finder</h1>
                        <p>
                            We find awesome job offers to help <br /> creatives and technical find their new way
                        </p>

                        <div className="flex  gap-4 items-center">
                            <h1><FaFacebook /></h1>
                            <h1><FaLinkedin /></h1>
                            <h1><FaInstagram /></h1>
                            <h1><FaTwitter /></h1>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h1>Our Clients</h1>
                        <h1>For Employers</h1>
                        <h1>Blog</h1>
                        <p>&copy;2024 All Rights Reserves</p>
                    </div>
                </div>
            </footer>
        </div>
       </div>
    );
};

export default Footer;