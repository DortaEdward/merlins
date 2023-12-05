"use client"
import { useAuth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {

  const { userId, isLoaded } = useAuth()
  if (userId && isLoaded) return redirect("/dashboard")

  return (
    <>
      <Navbar />
      <div className="flex-grow flex-1 h-full">
        {children}
      </div>
      <Footer />
    </>

  )
}