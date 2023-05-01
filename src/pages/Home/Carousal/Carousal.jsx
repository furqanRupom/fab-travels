import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ travelsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + travelsData.length) % travelsData.length
    );

  };



  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % travelsData.length);
  };

  const getImageStyles = (index) => {
    const position = index - currentIndex;
    const translateX = position * 200;
    let opacity = 1;
    let pointerEvents = "auto";
    if (position < 0) {
      opacity = 0;
      pointerEvents = "none";
    } else if (position === 1) {
      opacity = 0.8;
    } else if (position === 2) {
      opacity = 0.6;
    }
    const scale = position === 0 ? 1.2 : 0.8;
    const transform = `translateX(${translateX}px) scale(${scale})`;
    const margin = position !== 0 ? "0 20px" : "0";
    return {
      transform,
      opacity,
      pointerEvents,
      margin,
    };
  };

  return (
    <div className="grid grid-cols-2   z-20 mt-16 font-nunito">

<div className=" pl-32 mx-auto text-white">

        <h2 className="text-7xl font-bold">{travelsData[currentIndex].destination}</h2>
        <p className="leading-relaxed">{travelsData[currentIndex].description}</p>

    <Link to={`/booking/${travelsData[currentIndex].id}`}>
        <button  className="bg-orange-500 px-7 py-3 shadow mt-3 font-bold">
          Booking Now
        </button>
    </Link>
      </div>

      <div className="w-full mx-auto">
      <div className="relative w-full h-96 flex rounded-md justify-center items-center overflow-hidden shadow-lg">
        {travelsData.map((travel, index) => (
          <div
            key={index}
            className="absolute w-56 h-72 left-8 overflow-hidden rounded-lg p-3 cursor-pointer transition-all duration-300 "
            onClick={() => setCurrentIndex(index)}
            style={getImageStyles(index)}
          >
            <img
              className="w-full h-full object-cover rounded-lg  object-bottom ring-2 ring-white"
              src={travel.destination_image}
              alt=""
            />
          </div>
        ))}

      </div>
      <div className="mt-6 -ml-24">
        <button
          onClick={prevImage}
          className="z-10 px-4 py-4 text-orange-500 font-bold transition duration-300 ease-in-out bg-white rounded-lg hover:bg-gray-800 focus:outline-none text-lg"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="z-10 right-0  px-4 py-4 ml-2 text-orange-500 transition duration-300 ease-in-out rounded-lg focus:outline-none hover:bg-gray-800 bg-white font-bold text-lg"
        >
          &gt;
        </button>
      </div>


      </div>

    </div>
  );
};



export default Carousel;

