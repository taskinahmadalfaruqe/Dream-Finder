"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/providers/AuthProvider";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextUIProvider>
          <AuthProvider>
            <Providers>
              {children}
            </Providers>
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
