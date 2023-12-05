import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { ClerkLoaded, ClerkProvider } from "@clerk/nextjs";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Merlins",
  description: "Next generation note taking application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} relative h-full font-sans antialiased`}>
        <ClerkProvider>
          <ClerkLoaded>
            <TRPCReactProvider cookies={cookies().toString()}>
              <main className="relative flex flex-col min-h-screen h-full">
                { children }
              </main>
            </TRPCReactProvider>
          </ClerkLoaded>
        </ClerkProvider>
      </body>
    </html>
  );
}
