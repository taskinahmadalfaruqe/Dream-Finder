"use client";

import { BsDownload } from "react-icons/bs";

const AppliedJobButton = ({ content, fileName }) => {
    
  const handleDownload = (pdfContent, filename) => {
    // const byteCharacters = atob(pdfContent);
    // const byteNumbers = new Array(byteCharacters.length);
    // for (let i = 0; i < byteCharacters.length; i++) {
    //   byteNumbers[i] = byteCharacters.charCodeAt(i);
    // }
    // const byteArray = new Uint8Array(byteNumbers);
    // const blob = new Blob([byteArray], { type: "application/pdf" });

    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // window.URL.revokeObjectURL(url);

    const bytes = new Uint8Array(content.length);
    for (let i = 0; i < content.length; i++) {
        bytes[i] = content.charCodeAt(i);
    }

    // Create a blob from the Uint8Array
    const blob = new Blob([bytes], { type: 'application/pdf' });

    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;

    // Trigger the click event of the link
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };
  return (
    <div>
      <button onClick={handleDownload}>
        <BsDownload style={{fontSize:22}} />
      </button>
    </div>
  );
};

export default AppliedJobButton;
