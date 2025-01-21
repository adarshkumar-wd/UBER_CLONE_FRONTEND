import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePop from "../components/RidePop";

function CaptainHome() {
  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 flex items-center justify-between px-3 w-full mt-3">
        <img className="w-12" src="src/assets/captain_logo.png" alt="" />
        <Link
          to={"/home"}
          className="px-3 py-2 bg-gray-500 text-white rounded-full flex items-center justify-center"
        >
          <i className="font-bold text-lg ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-[65%]">
        <img
          className="h-full w-full object-cover"
          src="src/assets/map_local.gif"
          alt=""
        />
      </div>

      <div className="h-[35%] w-full px-5 pt-5">

        <CaptainDetails />

      </div>

      {/* <div className="fixed z-10 bottom-0 w-full p-5 bg-white translate-y-ful">
        <RidePop />
      </div> */}

    </div>
  );
}

export default CaptainHome;
