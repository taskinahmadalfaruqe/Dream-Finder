"use client";

import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CommonButton from '@/components/shared/CommonButton';
import Link from 'next/link';
import { FaRightFromBracket } from 'react-icons/fa6';
// import Image from 'next/image';


const Subscribe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

    useEffect(() => {
        Aos.init();
    }, [])

    const  handleButton = (price) =>{
        console.log(price);
        fetch("http://localhost:5000/createPayment", {     //192.168.0.88
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price})
      })
      
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setClientSecret(data.clientSecret)
      });
    }

    // const [clientSecret, setClientSecret] = useState('');

    // const paymentInfo = {name: "khaleda"}

    // useEffect( () =>{
    //   fetch("http://localhost:5000/createPayment", {     //192.168.0.88
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({price: subsInfo.reduce((total, current) => total + current.price, 0)})
    //   })
      
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // setClientSecret(data.clientSecret)
    //   });
    // },[])

    return (
        <div

            className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mx-auto py-20'>
   
            {subsInfo?.map((item) => (
                <div key={item.id} data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"
                    className='border-3 border-primaryColor rounded-tl-2xl rounded-br-2xl p-4 hover:bg-primaryColor hover:bg-opacity-25 shadow-xl hover:shadow-2xl hover:shadow-secondaryColor hover:duration-500 dark:hover:shadow-xl'>
                    <h4 className='bg-lightPrimaryColor p-2 rounded  text-white '>{item.title}</h4>
                    <p className='py-4'>
                        <span className="text-3xl font-bold ">$ {item.price} </span>
                        <span className="text-md">/{item.limit}</span>
                    </p>

                    <div className='text-left h-[150px] items-center space-y-2 text-secondaryColor'>
                        <p className='flex items-center'><FaRightFromBracket className='mr-2' /> {item.disc1}</p>
                        <p className='flex items-center'><FaRightFromBracket className='mr-2' />{item.disc2}</p>
                        <p className='flex items-center'><FaRightFromBracket className='mr-2' />{item.disc3}</p>
                        <p className='flex items-center'><FaRightFromBracket className='mr-2' />{item.disc4}</p>
                    </div>

                    <Link href={`/payment/${item.id}`}>
                        <CommonButton buttonName={"Subscribe Now"}  /></Link>

                </div>
            ))}
        </div>
    );
};

const subsInfo = [
    {
        id: 1,
        title: "Basic",
        limit: "Monthly",
        price: 5.55,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Month",
        disc4: "See Premium Post",

    },
    {
        id: 2,
        title: "Basic",
        limit: "Yearly",
        price: 55.25,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Year",
        disc4: "See Premium Post",

    },
    {
        id: 3,
        title: "Premium",
        limit: "Monthly",
        price: 10.99,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Month",
        disc4: "Get Interview Directly ",

    },
    {
        id: 4,
        title: "Premium",
        limit: "Yearly",
        price: 99.99,
        disc1: "Add Free",
        disc2: "Direct Contact With HR",
        disc3: "Full Support For A Year",
        disc4: "Get Interview Directly",
    },
]

export default Subscribe;
