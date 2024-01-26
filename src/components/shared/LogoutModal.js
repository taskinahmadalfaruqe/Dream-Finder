import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useContextData from "@/hooks/useContextData";

const SignOutModal = ({ isOpen, onOpenChange }) => {
  const { logOut } = useContextData();
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign out!!!
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure? you want to Sign out your id form this device.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  No
                </Button>
                <Button
                  className="text-white font-medium"
                  color="success"
                  onPress={onClose}
                  onClick={async () => await logOut()}
                >
                  Sign out
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignOutModal;
