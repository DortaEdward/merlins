"use client"
import type { ReactNode } from "react";
import { useAuth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default function DashboardLayout({ children }: {children: ReactNode}) {
  const { userId, isLoaded } = useAuth()
  if (!userId && isLoaded) return redirect("/")

  return (
      <div className="min-w-screen min-h-screen">
        { children }
      </div>
  )
}
