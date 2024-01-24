"use client"

import React from 'react';
import { Button } from "@nextui-org/react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Subscribe = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div
         
        className='text-center grid grid-cols-2 md:grid-cols-4 gap-6 w-4/5 mx-auto py-20'>

            <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-pink-600 rounded-tl-2xl rounded-br-2xl p-4 hover:bg-black hover:bg-opacity-40'>
                <h4 className='bg-black p-2 rounded  text-white '>Basic</h4>
                <p className='py-4'>
                    <span className="text-5xl font-semiBold text-white">$ 5.60 </span>
                    <span className="text-md">/monthly</span>
                </p>
                <Button color="danger" size="sm" radius="full" className="text-lg">
                Subscribe Now
                </Button>

            </div>

            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-pink-600 rounded-tl-lg rounded-br-lg p-4 hover:bg-black hover:bg-opacity-40'>
                <h4 className='bg-black p-2 rounded  text-white '>Basic</h4>
                <p className='py-4'>
                    <span className="text-5xl font-semiBold text-white">$ 55.00 </span>
                    <span className="text-md">/yearly</span>
                </p>

                <Button color="danger" size="sm" radius="full" className="text-lg">
                Subscribe Now
                </Button>

            </div>
            <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-pink-600 rounded-tl-lg rounded-br-lg p-4 hover:bg-black hover:bg-opacity-40'>
                <h4 className='bg-black p-2 rounded  text-white '>Premium</h4>
                <p className='py-4'>
                    <span className="text-5xl font-semiBold text-white">$ 10.99 </span>
                    <span className="text-md">/monthly</span>
                </p>
                <Button color="danger" size="sm" radius="full" className="text-lg">
                Subscribe Now
                </Button>
            </div>
            <div data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            className='border-3 border-pink-600 rounded-tl-lg rounded-br-lg p-4 hover:bg-black hover:bg-opacity-40'>
                <h4 className='bg-black p-2 rounded text-white '>Premium</h4>
                <p className='py-4'>
                    <span className="text-5xl font-semiBold text-white">$ 99.99 </span>
                    <span className="text-md">/yearly</span>
                </p>
                
                <Button color="danger" size="sm" radius="full" className="text-lg">
                Subscribe Now
                </Button>
            </div>

        </div>
    );
};

export default Subscribe;