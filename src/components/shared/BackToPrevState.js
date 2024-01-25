"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce } from "react-awesome-reveal";
import { FaAngleLeft } from "react-icons/fa";

const BackToPrevState = ({ state, setState }) => {
  const router = useRouter();
  return (
    <Tooltip
      showArrow={true}
      placement="right"
      color="success"
      className="text-white font-semibold bg-primaryColor"
      content={setState ? "Back to previous state." : "Back to home."}
    >
      <div className="fixed z-[90] top-5 md:top-16 left-5 md:left-10  overflow-hidden">
        <Bounce delay={600}>
          {setState ? (
            <Button
              onClick={() => setState(!state)}
              className="text-2xl bg-primaryColor text-white  border"
              isIconOnly
            >
              <FaAngleLeft className="font-[200]" />
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/")}
              className="text-2xl bg-primaryColor text-white  border"
              isIconOnly
            >
              <FaAngleLeft className="font-[200]" />
            </Button>
          )}
        </Bounce>
      </div>
    </Tooltip>
  );
};

export default BackToPrevState;
