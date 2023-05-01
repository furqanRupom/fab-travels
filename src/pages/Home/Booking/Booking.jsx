import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import DatePickerTravels from "../Carousal/DatePickerTravels";

const Booking = () => {

  const { destination, description,origin,id } = useLoaderData();


  return (
    <div className="font-nunito flex w-full  items-center space-x-9 justify-center h-[400px]">
      <div className="text-white ">
        <h2 className="text-7xl font-bold">{destination}</h2>
        <p className="leading-relaxed max-w-2xl">{description}</p>
      </div>
      <div className="max-w-lg bg-white px-4 py-3 flex-[2] rounded-lg shadow-md">
        <label htmlFor="origin">
          <p className="text-gray-600 pb-2">origin</p>
          <input
            type="text"
            className="px-3 py-2 w-full rounded bg-gray-200 text-slate-900" readOnly value={origin}
          />
        </label>
        <label htmlFor="destination">
          <p className="text-gray-600 pb-2">destination</p>
          <input
            type="text"
            value={destination}
            readOnly
            className="px-3 py-2 w-full rounded bg-gray-200 text-slate-900"
          />
        </label>


        <DatePickerTravels />


            <div className="text-center max-w-sm mx-auto pt-6 pb-3">

                <Link to={`/booking/booked/${id}`}>
        <button className="px-7 py-3 bg-orange-500 w-full text-white font-bold">
            Start Booking
        </button>
                </Link>

            </div>

      </div>

    </div>
  );
};

export default Booking;
