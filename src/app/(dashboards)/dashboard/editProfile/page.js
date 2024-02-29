import ProfileEditPage from "@/components/ui/ProfileEdit/ProfileEdit";
import React from "react";

const EditProfilePage = () => {
  return (
    <div className="dark:bg-[#000000]  bg-lightWhiteColor ">
      <div className="container">
        <h2 className="text-3xl pt-10 font-bold text-center text-primaryColor mb-8">
          Update Your Profile
        </h2>
        <ProfileEditPage></ProfileEditPage>
      </div>
    </div>
  );
};

export default EditProfilePage;
