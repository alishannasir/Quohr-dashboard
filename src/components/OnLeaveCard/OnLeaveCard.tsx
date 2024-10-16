import React from 'react'
import {Card} from "@/components/ui/card"
import { People } from '@/lib/AttendDB'

interface people {
  name: string;
  image: React.ReactNode;
}

function OnLeaveCard() {
  return (
   
        <Card className='w-[340px] h-[430px] p-5 '>
            <div className='flex justify-start pt-5'>
               <span className='text-xl font-bold'>On Leave</span>
            </div>
            <hr/>
            <div className='flex flex-col gap-2 pt-5 overflow-y-auto h-[350px]'>
            {People.map((item: people, index: number) => (
              <div className='flex flex-row justify-start gap-2' key={index}>
                <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>{item.image}</div>
                <span className='text-sm font-bold'>{item.name}</span>
              </div>
            ))}
            </div>
        </Card>

  )
}

export default OnLeaveCard