"use client"

import React from 'react';
import { Button } from "@nextui-org/react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CommonButton from '@/components/shared/CommonButton';


const Subscribe = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div
         
        className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mx-auto py-20'>

            <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-primaryColor rounded-tl-2xl rounded-br-2xl p-4 hover:bg-primaryColor hover:bg-opacity-25'>
                <h4 className='bg-lightPrimaryColor p-2 rounded  text-white '>Basic</h4>
                <p className='py-4'>
                    <span className="text-3xl font-semiBold text-secondaryColor">$ 05.60 </span>
                    <span className="text-md">/monthly</span>
                </p>
                <CommonButton buttonName={"Subscribe Now"}/>

            </div>

            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-primaryColor rounded-tl-lg rounded-br-lg p-4 hover:bg-primaryColor hover:bg-opacity-25'>
                <h4 className='bg-lightPrimaryColor p-2 rounded  text-white '>Basic</h4>
                <p className='py-4'>
                    <span className="text-3xl font-semiBold text-secondaryColor">$ 55.00 </span>
                    <span className="text-md">/yearly</span>
                </p>

                <CommonButton buttonName={"Subscribe Now"}/>

            </div>
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-primaryColor rounded-tl-lg rounded-br-lg p-4 hover:bg-primaryColor hover:bg-opacity-25'>
                <h4 className='bg-lightPrimaryColor p-2 rounded  text-white '>Premium</h4>
                <p className='py-4'>
                    <span className="text-3xl font-semiBold text-secondaryColor">$ 10.99 </span>
                    <span className="text-md">/monthly</span>
                </p>
                <CommonButton buttonName={"Subscribe Now"}/>
            </div>
            <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-primaryColor rounded-tl-lg rounded-br-lg p-4 hover:bg-primaryColor hover:bg-opacity-25'>
                <h4 className='bg-lightPrimaryColor p-2 rounded text-white '>Premium</h4>
                <p className='py-4'>
                    <span className="text-3xl font-semiBold text-secondaryColor">$ 99.99 </span>
                    <span className="text-md">/yearly</span>
                </p>
                
                <CommonButton buttonName={"Subscribe Now"}/>
            </div>

        </div>
    );
};

export default Subscribe;