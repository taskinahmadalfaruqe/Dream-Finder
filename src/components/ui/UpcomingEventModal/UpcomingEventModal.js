"use client"
import React, { useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image from 'next/image';
import jobImage from "@/assets/upcoming/upcoming2.jpg"
import Link from 'next/link';
import CommonButton from '@/components/shared/CommonButton';

const UpcomingEventModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); 

  }, [onOpen]); 

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 "><span className='text-primaryColor'>Upcoming event</span></ModalHeader>
              <ModalBody>
               <div className='h-[300px] '>
               <Image className='h-full w-full object-cover rounded' src={jobImage}   alt="job photo" />
               </div>
                <div className='space-y-3'>
                  <h1 className='text-xl font-bold text-primaryColor'>Tech Career Expo 2024</h1>
                  <p>March 15, 2023</p> 
                  <p>10:00 AM - 4:00 PM</p>
                  <p>City Convention Center</p>
                </div>
              </ModalBody>
              <ModalFooter>
                
               <Link href="upcoming-event">
                 {/* <Button color="primary" onPress={onClose}>
                 Let's Explore 
                </Button> */}
                <CommonButton onPress={onClose} buttonName="Let's Explore" />
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpcomingEventModal;
