"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
import CommonButton from "./CommonButton";

const Footer = () => {
  const path = usePathname();
  const year = new Date().getFullYear()
  return (
    <div className={`mt-20 ${path.includes("auth") && "hidden"}`}>
      <div className="bg-darkColor flex items-center py-5 ">
        <footer className="container">
          <div className="flex justify-between items-center text-whiteColor flex-col md:flex-row text-center gap-5 relative lg:pt-16">

            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">Dream Finder</h1>
              <p>
                We find awesome job offers to help <br /> creatives and
                technical find their new way
              </p>

              <div className="flex  gap-4 items-center justify-center ">
                <div>
                  <FaFacebook />
                </div>
                <div>
                  <FaLinkedin />
                </div>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaTwitter />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>Our Clients</div>
              <div>For Employers</div>
              <div>Blog</div>
            </div>

            <div className=" bg-lightPrimaryColor  w-[80%] mx-auto rounded-md p-12 absolute left-[50%] translate-x-[-50%] translate-y-[-70%] top-[0%] hidden lg:flex">
              <div className="flex justify-between items-center gap-5 w-[100%]">

                <div className="text-2xl font-bold text-lightWhiteColor">
                  Does your company need a great employees?
                </div>

                <div>
                  <CommonButton buttonName={'Post Job'}></CommonButton>
                </div>
              </div>
            </div>

          </div>


          <div className="text-whiteColor text-center pt-4 mt-5">
            &copy; {year} All Rights Reserves by 
            <span >
              <Link href={'/'} className="text-primaryColor font-semibold cursor-pointer"> Dream Finder</Link>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
