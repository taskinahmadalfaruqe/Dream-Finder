"use client"
import React, { useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Image from 'next/image';
import jobImage from "@/assets/upcoming/upcoming2.jpg"
import Link from 'next/link';
import CommonButton from '@/components/shared/CommonButton';

const SubscriptionAlertModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 15000); // 15 seconds

    return () => clearTimeout(timer); 

  }, [onOpen]); 

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 "><span className='text-primaryColor'>Subscription Alert !</span></ModalHeader>
              <ModalBody>
               <div className='h-[300px] '>
               <Image className='h-full w-full object-cover rounded border border-primaryColor' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwysYEElMHqLDq9Dvhg4AnUiLVjXUz9CqCQ&usqp=CAU' width={300} height={300}   alt="job photo" />
               </div>
                <div className='space-y-3'>
                  <h1 className='text-xl font-bold text-primaryColor'>To Get More Feature..?</h1>
                  <p><span className='text-xl font-bold'>#</span> Add Free Post</p> 
                  <p><span className='text-xl font-bold'>#</span> Direct HR Communication</p>
                  <p><span className='text-xl font-bold'>#</span> Video Conference</p>
                </div>
              </ModalBody>
              <ModalFooter>
                
               <Link href="/subscription">
                 {/* <Button color="primary" onPress={onClose}>
                 Let's Explore 
                </Button> */}
                <CommonButton onPress={onClose} buttonName="Let's Subscribe" />
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubscriptionAlertModal;
