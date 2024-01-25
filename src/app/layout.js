"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { NextUIProvider } from "@nextui-org/react";
import NextNavbar from "@/components/shared/NextNav";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextUIProvider>
         <NextNavbar></NextNavbar>
          {children}
          <Footer></Footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
