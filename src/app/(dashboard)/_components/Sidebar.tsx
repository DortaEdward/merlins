"use client"

import { useUser } from "@clerk/nextjs"
import Image from "next/image"

export default function Sidebar() {
  const { user } = useUser()
  return (
    <div className="min-h-screen w-60 flex flex-col items-center px-2">
      <div className="w-full flex flex-col items-center justify-center mt-10 gap-y-2 pb-6 border-b-2">
        <Image src={user ? user.imageUrl: "" } alt="User Image" width={48} height={48} className="rounded-full shadow-lg" />
        <p className="text-lg font-medium">{user?.fullName}</p>
      </div>
    </div>
  )
}
