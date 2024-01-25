"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextUIProvider>
          <Navbar />
          {children}
          <Footer></Footer>
        </NextUIProvider>
      </body>
    </html>
  );
}