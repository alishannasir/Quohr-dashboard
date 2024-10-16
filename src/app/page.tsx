import { TimeCard } from "@/components/Time-Card/TimeCard";
import { SmallCards } from "@/components/SmallCards/SmallCards";
import { Chart } from "@/components/Chart/Chart";
import OnLeaveCard from "@/components/OnLeaveCard/OnLeaveCard";
import TeamCard from "@/components/TeamCard/TeamCard"
import { AttendanceTable } from "@/components/AttendenceTable/AttendenceTable"
import { Notification } from "@/components/Notification/Notification"
export default function Home() {
  return (
   <div className="w-full h-full  items-center justify-items-center"> 
       <div className="flex flex-row gap-10 justify-between w-full p-5 px-10"> 
           <span className="text-xl font-light text-blue-600">Dashboard</span>
           <span className="text-xl font-light bg-blue-600 text-white rounded-full"><Notification/></span>
       </div>
    <div className="flex w-full flex-col md:flex-col lg:flex-row  p-10 md:gap-10 lg:gap-20 gap-10">
      <div className="flex flex-col items-center justify-items-center">
        <TimeCard />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-8 ">
          <SmallCards />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-col lg:flex-row justify-items-center pl-10 gap-12"> 
  <div className="justify-items-center hidden sm:block">   
    <Chart />
  </div>
  <div className="flex flex-col md:flex-row lg:flex-row gap-10"> 
      <OnLeaveCard /> 
      <TeamCard/>
  </div>
    </div>
    <div className="flex flex-col items-center justify-items-center m-10">
      <AttendanceTable/>
    </div>
  </div>
  );
}
