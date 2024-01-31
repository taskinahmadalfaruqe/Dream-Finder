import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import CommonButton from "@/components/shared/CommonButton";
import Image from "next/image";
import jobImage from "@/assets/upcoming/upcoming2.jpg";
import jobTitle from "@/assets/upcoming/job.jpg"

export const metadata= {
  title: 'Dream Finder | Upcoming Event',
};

const upcomingEvent = () => {
  return (
    <div className="container">
      <Card
        isFooterBlurred
        className="w-full h-[600px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
           width={1000}
           height={400}
          src={jobTitle}
        />
        <CardFooter className="absolute bg-lightPrimaryColor bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
           
            <div className="flex flex-col">
              <p className="font-bold text-lightWhiteColor">
                Are you searching job?
              </p>
              <p className="font-bold text-lightWhiteColor">
                Apply here effortlessly
              </p>
            </div>
          </div>
          {/* <Button radius="full" size="sm">Get App</Button> */}
          <Link href="/Find-Jobs">
            <CommonButton buttonName="Apply Here" />
          </Link>
        </CardFooter>
      </Card>

      

      {/* <div className="flex  items-center space-x-4 text-small py-10">
        <div className="h-[300px] w-full">
          <Image
            className="h-full w-[100%] object-cover rounded"
            src={jobImage}
            alt="job photo"
          />
        </div>
        <Divider orientation="vertical" />
        <div>
          Docs
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas
            in praesentium quibusdam aspernatur velit recusandae! Quas, ipsam ex
            repellendus reiciendis a in error eos animi harum eligendi similique
            quia, magnam, beatae eaque. Quia sint tempore excepturi aperiam
            quaerat nesciunt quibusdam magni earum, qui deserunt recusandae quae
            minus enim adipisci aspernatur accusamus odio at animi atque, minima
            vitae molestias! Amet, fuga assumenda. Aliquid, perferendis suscipit
            assumenda molestias deserunt, nemo obcaecati omnis nobis ducimus
            repudiandae, unde excepturi dolore dolorum eius molestiae aliquam
            ipsa quo iure fuga. Veniam cumque, necessitatibus odit quos ullam
            eos provident placeat eligendi numquam reprehenderit unde nobis.
            Quam?
          </p>
        </div>
      </div> */}

     <div className="py-20">
     <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 py-3"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-10 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              shadow="md"
              src={jobImage}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0 ">
                <h3 className="font-semibold text-foreground/90">Event Name:&nbsp;&nbsp;<span className="text-primaryColor">Tech Career Expo 2024</span></h3>
                <p className="text-small text-foreground/80">Date: March 15, 2024</p>
                <h1 className="text-large font-medium mt-2">Time: <span className="text-primaryColor">10:00 AM - 4:00 PM</span></h1>
                <h1><span className="text-large font-medium mt-2">Location:</span> City Convention Center</h1>
                <p> <span className="text-large font-medium mt-2"> Description:</span> Join the Tech Career Expo 2024 for a day of networking and career opportunities. Connect with industry leaders, attend insightful workshops, and explore job openings from cutting-edge tech companies. Do not miss your chance to advance your career in the tech industry</p>
                <p><span className="text-large font-medium mt-2">Deadline:</span> March 10, 2024</p>
                <p><span className="text-large font-medium mt-2">Registration Details:</span> For registration <Link href="https://docs.google.com/forms/d/1Oid8zCU47ofc9mbPBy4SdeV_dnhobyFcT4l9tpV4Lzg/edit" className="text-primaryColor">Click here</Link> </p>
              
              
              </div>
              
            </div>

            

            
          </div>
        </div>
      </CardBody>
    </Card>
     </div>


    </div>
  );
};

export default upcomingEvent;
