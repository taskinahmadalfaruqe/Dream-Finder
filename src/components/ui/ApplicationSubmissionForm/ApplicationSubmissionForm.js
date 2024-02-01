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

export default function ApplicationSubmissionForm({ actions, jobInfo }) {
  const { isOpen, onOpenChange } = actions;
  const { id, company_name, category } = jobInfo;
  const textareaRef = useRef(null);
  const [file, setFile] = useState(null);
  const [letter, setLetter] = useState("");
  const {user} = useContext(AuthContext)

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const coverLetterContent = textareaRef.current.value;
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("coverLetter", coverLetterContent);
    formData.append("user", user?.email);
    formData.append("jobId", id)
    formData.append("appliedDate", new Date())
    setLetter(coverLetterContent);

 

    fetch("https://dream-finder-file-upload-server.vercel.app/uploadResume", {
      method: "POST",
      body: formData,
      headers: {
       
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
   form.reset()
   setFile(null)
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
                <h2 className="text-2xl text-whiteColor">Applying For {category}</h2>
                <h3 className="text-xl text-whiteColor"> {company_name}</h3>
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <label htmlFor="coverLetter">Cover Letter</label>

                  <textarea
                    id="coverLetter"
                    ref={textareaRef}
                    className=" p-3 border-2 border-secondaryColor focus:outline-primaryColor w-full h-72 rounded-md"
                  ></textarea>
                  <br />
                  <div>
                    <label
                      className="border-2 border-secondaryColor h-16 inline-block w-72 rounded-md"
                      for="inputTag"
                      onChange={handleFileChange}
                    >
                      <div className="flex justify-center items-center h-full gap-3">
                        <FiUpload />
                        <p> Upload Resume</p>
                      </div>
                      <input id="inputTag" type="file" className="border" accept="application/pdf" />
                    </label>
                  </div>
                  <p>&nbsp; {file?.name}</p>
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
