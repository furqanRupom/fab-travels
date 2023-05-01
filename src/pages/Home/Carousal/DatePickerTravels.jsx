import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const DatePickerTravels = () => {
  const [selectedDate,setSelectedDate] = useState(new Date())
  const [selectedEndDate,setSelectedEndDate] = useState(new Date())
  return (
    <div className="flex items-center justify-between  mx-auto my-4">
      <div className="w-[40%]">
        <h4 className="text-gray-600 py-2">
          from
        </h4>
      <div className="flex justify-between  items-center space-x-5 bg-gray-100 font-bold px-5 py-2 rounded-lg">
      <DatePicker
        selected={selectedDate}
        dateFormat="MM/dd"
        onChange={(date) =>setSelectedDate(date)}
        customInput={<div className="border-b-2 border-gray-300 ">{`${selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}</div>}
      />
      <FaRegCalendarAlt className="ml-2 text-xl -mt-1" />

      </div>

      </div>
      <div className="w-[40%]">
      <h4 className="text-gray-600 py-2">
          to
        </h4>
        <div className="flex justify-between items-center space-x-5 bg-gray-100 font-bold px-5 py-2 rounded-lg">

      <DatePicker
        selected={selectedEndDate}
        dateFormat="MM/dd"
        onChange={(date) =>setSelectedEndDate(date)}
        customInput={<div className="border-b-2 border-gray-300 w-fit">{`${selectedEndDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}</div>}
      />
      <FaRegCalendarAlt className="ml-2 text-xl -mt-1" />
    </div>

        </div>
      </div>
  );
};

export default DatePickerTravels;
