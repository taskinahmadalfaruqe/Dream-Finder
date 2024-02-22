import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
const SuccessToast = ({
  isOpenSuccess,
  onOpenSuccess,
  onOpenChangeSuccess,
}) => {
  const router = useRouter()

  return (

    <>
      <Button onPress={onOpenSuccess}>Open Modal</Button>
      <Modal
        className="p-2  rounded-sm "
        isOpen={isOpenSuccess}
        onOpenChange={onOpenChangeSuccess}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Successfully Submitted
              </ModalHeader>
              <ModalBody>
                <p>
                  Wishing you success in the selection process,
                  <br /> aiming for your ultimate hire.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  className="rounded-sm text-whiteColor font-bold border-2 border-primaryColor"
                  onClick={()=>{
                    onClose()
                    router.push("/Find-Jobs")
                  }}
                >
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
