import React, { useContext, useState } from "react";
import blackLogo from "../../../assets/travelssB.png";
import { TravelsContext } from "../../../providers/Providers";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Map from "../Carousal/Map/Maps";
import Maps from "../Carousal/Map/Maps";

const BookedPlace = () => {
  const { user } = useContext(TravelsContext);
  const {
    destination,
    best_time_to_visit,
    average_cost_per_day,
    attractions,
    hotels,
    rating,
    destination_image,
    lat,
    long
  } = useLoaderData();
  // const [center, setCenter] = useState[{ lat: 51.505, lng: -0.09 }];

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h3 className="text-2xl font-bold font-nunito my-12 text-center ">
        Welcome back{" "}
        <span className="font-extrabold  text-orange-500 text-4xl">
          {user.displayName}
        </span>{" "}
        ready for your next destination
      </h3>

      <div>
        <h1 className="text-xl font-bold px-3">Stay in {destination}</h1>
        <h4 className="text-md font-semibold text-gray-600">
          best time to visit : {best_time_to_visit}
        </h4>
        <div className="grid  md:grid-cols-2">
          <div>
            {hotels.map((hotel, id) => (
              <div key={id} className="rounded-lg shadow-md bg-white m-5 p-3">
                <h2 className="text-xl font-bold">{hotel.name}</h2>
                <h3 className="text-md font-semibold text-gray-400">
                  {hotel?.location}
                </h3>
                <div>
                  {hotel.room_options.map((rooms, id) => (
                    <div className="text-gray-500 leading-relaxed" key={id}>
                      <div className="flex items-center space-x-4">
                        <p>{rooms.room_type}</p>
                        <p>guests : {rooms.guests}</p>
                        <p>beds : {rooms.beds}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-5 items-center">
                  <p className="text-lg font-md">
                    {average_cost_per_day} per day
                  </p>

                  <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                </div>
              </div>
            ))}
          </div>

          <div>
            <Maps lat={lat} long={long}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedPlace;
