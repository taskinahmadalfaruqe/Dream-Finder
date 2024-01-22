import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { getServerSession } from "next-auth";
import SharedNextUiProvider from "@/utils/SharedNextUiProvider";
import SessionProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <SharedNextUiProvider>
          <SessionProvider session={session}>
            <Navbar />
            {children}
            <Footer></Footer>
          </SessionProvider>
        </SharedNextUiProvider>
      </body>
    </html>
  );
}
