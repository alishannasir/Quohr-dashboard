import React from 'react'
import {Card} from "@/components/ui/card"
function TeamCard() {
  return (
    <div>
        <Card className='w-[340px] h-[430px] p-5'>
            <div className='flex justify-start pt-5'>
               <span className='text-xl font-bold'> My Team</span>
            </div>
            <hr/>
            <div className='flex flex-col gap-2 pt-5 h-[250px] justify-center items-center'>
                  <h1>Coming Soon</h1>
            </div>
        </Card>
    </div>
  )
}

export default TeamCard