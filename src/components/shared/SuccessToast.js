import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
const SuccessToast = ({isOpenSuccess, onOpenSuccess, onOpenChangeSuccess}) => {
    
    return (
        <>
        <Button onPress={onOpenSuccess}>Open Modal</Button>
        <Modal className="  p-2  rounded-sm " isOpen={isOpenSuccess} onOpenChange={onOpenChangeSuccess}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-2xl">Successfully Submitted</ModalHeader>
                <ModalBody>
                  <p> 
                  Wishing you success in the selection process,<br /> aiming for your ultimate hire.
                   
                  </p>
                
                </ModalBody>
                <ModalFooter>
                  <Button color="success" className="rounded-sm text-whiteColor font-bold border-2 border-primaryColor" onPress={onClose}>
                    OK
                  </Button>
                  
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
};

export default SuccessToast;