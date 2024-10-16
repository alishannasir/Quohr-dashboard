import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Card } from "@/components/ui/card"
  import { AttendanceTableData } from "@/lib/AttendDB"
  // import {DatePicker} from "@/components/DataPicker/DataPicker"
  import {Buttons} from "@/components/Button/Buttons"
  // import {InputDemo} from "@/components/Search/Search"
  

  
  export function AttendanceTable() {
    return (
   <Card className="w-full h-full p-5 overflow-y-auto sm:overflow-x-auto scrollbar-hide rounded-xl shadow-md m-10 hover:shadow-xl" >
        <div className="flex flex-row justify-between items-center p-5">
            <h1 className="text-2xl font-bold">Attendance Overview</h1>
             <div className="flex justify-between items-center">
              <Buttons
                className="hidden sm:flex w-[250px] h-[40px] text-md font-bold justify-center items-center bg-blue-600 text-white rounded-xl hover:bg-gray-200 hover:text-gray-500"
                title="View Attendance"
              />
            </div>
          </div>                                                   
        <hr className="w-full h-[2px] bg-gray-200 " />
        <Table>
        <TableHeader className="rounded-xl p-10">
          <TableRow className="text-xl font-bold ">
            <TableHead className="p-3">Data</TableHead>
            <TableHead className="p-3">Schedule</TableHead>
            <TableHead className="p-3">Status</TableHead>
            <TableHead className="p-3">Check In</TableHead>
            <TableHead className="p-3">Break</TableHead>
            <TableHead className="p-3">Check Out</TableHead>
            <TableHead className="p-3">Work</TableHead>
          </TableRow> 
        </TableHeader>
        <TableBody className="text-md font-light text-gray-500">
          {AttendanceTableData.map((invoice) => (
            <TableRow key={invoice.Date} className="text-sm sm:text-md font-extralight hover:bg-gray-100">
              <TableCell className="text-sm sm:text-md font-extralight text-gray-900">{invoice.Date}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-600">{invoice.Schedule}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-500">{invoice.Status}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-500">{invoice.CheckIn}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-500">{invoice.Break}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-500">{invoice.CheckOut}</TableCell>
              <TableCell className="text-sm sm:text-md font-extralight text-gray-500">{invoice.Work}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   </Card>
    )
  }
  