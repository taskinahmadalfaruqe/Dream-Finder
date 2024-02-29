"use client";

import CommonButton from "@/components/shared/CommonButton";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useContext, useRef, useState } from "react";
import "./applicationSubmissionForm.css";
import { FiUpload } from "react-icons/fi";
import { AuthContext } from "@/providers/AuthProvider";
import {useDisclosure} from "@nextui-org/react";
import SuccessToast from "@/components/shared/SuccessToast";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function ApplicationSubmissionForm({ actions, jobInfo }) {
  const {isOpen:isOpenSuccess, onOpen:onOpenSuccess, onOpenChange:onOpenChangeSuccess} = useDisclosure();
  const { isOpen, onOpenChange } = actions;

  const { id, company_name, category,  } = jobInfo;
  const textareaRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("")

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const newFileName = event.target.files[0].name
    setFileName(<p>&nbsp;{newFileName}</p>)
  };


  const handleSubmit = (event, onClose) => {
 const toastId = toast.loading("loading...")
    event.preventDefault();
    if (!selectedFile) {
      setFileName(<p className="text-redColor">&nbsp; This Field Is Required</p>)
      return;
    }
    const form = event.target;
    const coverLetterContent = textareaRef.current.value;

    const fileReader = new FileReader();
    fileReader.onload = async (event) => {
      const binaryString = event.target.result;
      const data = {
        resume: binaryString,
        coverLetter: coverLetterContent,
        user: user?.email,
        appliedDate: new Date(),
        jobId: id,
        category,
        company_name,
        status:"pending",
        fileName:selectedFile?.name,
        size:selectedFile?.size,
        applicant: user?.displayName,
        jobTitle: jobInfo?.jobTitle
      };
      fetch("https://dream-finder-file-upload-server.vercel.app/uploadResume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) =>{
          // onClose()
          fetch(`https://dream-finder-server.vercel.app/incrementAppliedCount/${jobInfo?.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then(res => res.json())
          .then(data => {
            onOpenSuccess()
            toast.remove(toastId)
          })
          .catch(error=> Swal.fire({
            title:error.message,
            icon:"error",
            denyButtonColor:"#00BE63",
            cancelButtonColor:"#00BE63",
            confirmButtonColor:"#00BE63"
          }))
        })
        .catch((error) =>{
          toast.remove(toastId)
          Swal.fire({
            title:error.message,
            icon:"error",
            denyButtonColor:"#00BE63",
            cancelButtonColor:"#00BE63",
            confirmButtonColor:"#00BE63"
          })
        });
    };

    fileReader.readAsBinaryString(selectedFile);
     form.reset()
     setFileName(null)
  };

  return (
    <>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 bg-lightPrimaryColor ">
                <h2 className="text-2xl text-whiteColor">
                  Applying For {category}
                </h2>
                <h3 className="text-xl text-whiteColor"> {company_name}</h3>
              </ModalHeader>
              <form onSubmit={(e)=> handleSubmit(e, onClose)}>
                <ModalBody>
                  <label htmlFor="coverLetter">Cover Letter</label>

                  <textarea
                    id="coverLetter"
                    ref={textareaRef}
                    required
                    className=" p-3 border-2 border-secondaryColor focus:outline-primaryColor w-full h-72 rounded-md"
                  ></textarea>
                  <br />
                  <div>
                    <label
                      className="border-2 border-secondaryColor h-16 inline-block w-72 rounded-md"
                      htmlFor="inputTag"
                      onChange={handleFileChange}
                    >
                      <div className="flex justify-center items-center h-full gap-3">
                        <FiUpload />
                        <p> Upload Resume</p>
                      </div>
                      <input
                        id="inputTag"
                        type="file"
                        className="border"
                        accept="application/pdf"
                      />
                    </label>
                  </div>
                 <>{fileName}</>
                </ModalBody>
                <ModalFooter>
                  <div onClick={onClose}>
                    <CommonButton buttonName="Cancel" />
                  </div>
                  <Button
                    className="rounded-md w-32 h-[49px] text-whiteColor font-bold "
                    color="success"
                    type="submit"
                    
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
        <SuccessToast isOpenSuccess={isOpenSuccess} onOpenSuccess={onOpenSuccess} onOpenChangeSuccess={onOpenChangeSuccess}/>
      </Modal>
    </>
  );
}
