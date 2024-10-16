"use client"

import * as React from "react";
import { useState, useEffect } from "react";
import { LuSun } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Buttons } from "../Button/Buttons";

export function TimeCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className="sm:w-[400px] sm:h-[340px] lg:w-[330px] lg:h-[340px] md:w-full">
      <CardHeader className="flex flex-row justify-center items-center gap-10 w-full">
        <div className="flex flex-col justify-center items-center">
          <LuSun className="sm:w-12 sm:h-12 w-10 h-10 text-gray-200" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="sm:text-lg text-l font-bold text-gray-500">
              {formattedTime}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="sm:text-lg text-md font-bold text-gray-500">
              Realtime Insight
            </h1>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-items-start pl-10">
          <span className="text-black font-bold sm:text-3xl text-xl">Today:</span>
          <span className="text-black sm:text-lg text-md">{formattedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center pt-6">
        <Buttons
          className="w-[250px] h-[40px] text-md font-bold justify-center items-center bg-blue-600 text-white rounded-full hover:bg-gray-200 hover:text-gray-500"
          title="View Attendance"
        />
      </CardFooter>
    </Card>
  );
}
