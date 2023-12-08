"use client"
import Sidebar from "../_components/Sidebar";
import Editor from "../_components/Editor";


export default function Dashboard(){ 
  return(
    <div className="min-w-screen min-h-screen flex">
      <Sidebar />
      <div className="flex-grow flex-1 bg-red-400 flex flex-col min-h-screen">
        <div className="h-16 bg-blue-600">Image header</div>
        <Editor />
      </div>
    </div>
  )
}