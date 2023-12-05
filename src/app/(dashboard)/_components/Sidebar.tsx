"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { MdAddCircle } from "react-icons/md";
import NotebookDisplay from "./NotebookDisplay";

export default function Sidebar() {


  const notebooks= [{
    name: "Game Development 2D",
    children: [],
    icon: "Icon",
    content:""
  }]

  const { user } = useUser();
  return (
    <div className=" flex min-h-screen w-60 flex-col items-center border-r-2 px-2">
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-y-2 border-b-2 pb-4">
        <UserButton />
        <p className="font-medium">{user?.fullName}</p>
      </div>
      <div className="w-full flex-1 flex-grow flex flex-col items-center overflow-y-auto py-1">
        <div className="flex hover:bg-gray-100 cursor-pointer transition ease-in-out duration-300 items-center justify-center gap-x-2 py-4 w-full">
          <p className="font-bold">Create Notebook</p>
          <MdAddCircle size={24} />
        </div>
        <NotebookDisplay notebooks={notebooks} active={null} />
      </div>
    </div>
  );
}
