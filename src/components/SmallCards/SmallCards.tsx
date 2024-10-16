import * as React from "react"
import { AttendDB } from "@/lib/AttendDB"

import {
  Card, 
} from "@/components/ui/card"
interface Attendance {
    title: string;
    Count: string;
    news: string;
    icon: React.ReactNode;
    icon2: React.ReactNode;
}

export function SmallCards() {
  return (
    <>
     {AttendDB.map((item: Attendance, index: number) => (
  <Card 
    key={index} 
    className="w-[300px] h-[150px] md:w-[345px] p-7">
    <div className="flex flex-row justify-between ">
     <div className="flex items-center text-gray-500 text-2xl font-bold ">
     {item.Count}
     </div>
     <div className="flex text-gray-500 text-xl font-bold">
        <div className="rounded-full bg-gray-100 text-blue-600 p-2">
        {item.icon}
        </div>
      </div>
    </div>
    <div>
      <div className="flex flex-col pt-3">
      <h1 className="text-gray-500 text-sm sm:text-lg text-x font-light">{item.title}</h1>
        {/* <h1 className="text-blue-800 text-sm sm:text-2xl text-x font-light">{item.Duration}</h1> */}
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm sm:text-2xl text-x font-light">{item.icon2}</span>
        <h1 className="text-sm sm:text-lg font-extralight text-gray-400">
          {item.news}</h1>
      </div>  
    </div>
    
  </Card>
))}
  </>
  )
}
