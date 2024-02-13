import CommonButton from "@/components/shared/CommonButton";
import SectionHeading from "@/components/shared/SectionHeading";
import { Input } from "@nextui-org/react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen border---4">
      <div>
        <div>
          <div>
            <SectionHeading
              heading="Post Job"
              subHeading="post your available job here"
            />
            <div className="flex items-center justify-center max-sm:px-2 group my-10">
              <form className="w-full max-sm:max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
                <div className="flex flex-wrap space-y-4 mb-6">
                  <div className="w-full px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-full px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-full px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                    />
                  </div>
                  <div className="w-1/2 px-3">
                    <Input
                      isRequired
                      type="url"
                      name="propertyImg"
                      variant="flat"
                      label="Email"
                      size="lg"
                      className="text-4xl"
                    />
                  </div>
                </div>

                <div className="text-center max-w-80 mx-auto">
                  <CommonButton buttonName={"Post job"}></CommonButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
