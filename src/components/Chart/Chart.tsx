"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    
  } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", onsite: 220, remote: 80 },
  { month: "February", onsite: 200, remote: 100 },
  { month: "March", onsite: 265, remote: 35 },
  { month: "April", onsite: 245, remote: 55 },
  { month: "May", onsite: 209, remote: 91 },
  { month: "June", onsite: 214, remote: 86 },
]

const chartConfig = {
  onsite: {
    label: "On-site",
    color: "#2563eb",
  },
  remote: {
    label: "Remote",
    color: "#60a5fa",
    },
  } satisfies ChartConfig

export function Chart() {
  return (
    <>
   <Card className="justify-center items-center w-[730px]  p-5">
    <ChartContainer config={chartConfig} className=" w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ fontSize: 10 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="onsite" fill="var(--color-onsite)" radius={4}/>
        <Bar dataKey="remote" fill="var(--color-remote)" radius={4}/>
      </BarChart>
    </ChartContainer>
   </Card>
    
    </>
  )
}
