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
import axios from "axios";

export default function ApplicationSubmissionForm({ actions, jobInfo }) {
  const { isOpen, onOpenChange } = actions;
  const { id, company_name, category } = jobInfo;
 
  const textareaRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
   
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    if (!selectedFile) {
      console.log("No file selected.");
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
        size:selectedFile?.size
      };
      fetch("https://dream-finder-file-upload-server.vercel.app/uploadResume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    };

    fileReader.readAsBinaryString(selectedFile);

    //  fetch("https://dream-finder-file-upload-server.vercel.app/uploadResume", {
    //     method: "POST",
    //     body: formData,

    //   })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.error("Error uploading file:", error);
    //     });
    //  form.reset()
    //  setFile(null)
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
              <form onSubmit={handleSubmit}>
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
                  <p>&nbsp; {selectedFile?.name}</p>
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
      </Modal>
    </>
  );
}
