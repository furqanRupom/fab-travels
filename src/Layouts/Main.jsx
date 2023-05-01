import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
const Main = () => {
  const bgImage =
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover h-screen bg-center w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "100%",
        }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-70">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
