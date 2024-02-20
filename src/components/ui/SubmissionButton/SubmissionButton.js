import CommonButton from "@/components/shared/CommonButton";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const SubmissionButton = ({ onOpen, id }) => {
  const { user } = useContext(AuthContext);
  const [isApplied, setIsApplied] = useState(null);
  const router = useRouter()

  useEffect(() => {
    fetch(
      `https://dream-finder-file-upload-server.vercel.app/checkApplied?user=${user?.email}&jobId=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.isApplied) {
          setIsApplied(true);
        } else {
          setIsApplied(false);
        }
      })
      .catch((err) => console.log(err));
  }, [user, id, isApplied]);
  return (
    <div>
      {!isApplied ? (
        <div onClick={()=>{
          if(user){
            onOpen()
          }else{
            router.push("/auth/signin")
          }
        }} className="w-48 mx-auto mt-10">
          <CommonButton buttonName="Apply Now" />
        </div>
      ) : (
        <div className="w-48 mx-auto mt-10">
          <CommonButton buttonName="Already Applied" />
        </div>
      )}
    </div>
  );
};

export default SubmissionButton;
