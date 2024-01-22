"use client";

import React from "react";

import { NextUIProvider } from "@nextui-org/react";

const SharedNextUiProvider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default SharedNextUiProvider;
