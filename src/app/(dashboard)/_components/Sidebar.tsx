"use client"

import { useUser, UserButton } from "@clerk/nextjs"

export default function Sidebar() {
  const { user } = useUser()
  return (
    <div className="min-h-screen w-60 flex flex-col items-center px-2">
      <div className="w-full flex flex-col items-center justify-center mt-10 gap-y-2 pb-4 border-b-2">
        <UserButton />
        <p className="font-medium">{user?.fullName}</p>
      </div>
    </div>
  )
}
