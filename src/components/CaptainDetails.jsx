import React, { useRef , useState } from "react";
import RidePop from "./RidePop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "./ConfirmRidePopUp";

function CaptainDetails() {

  const ridePopUpRef = useRef(null)
  const [ridePopUpOpen, setRidePopUpOpen] = useState(true)
  const [confirmRidePopUpOpen, setConfirmRidePopUpOpen] = useState(false)
  const confirmRideRef = useRef(null)

  useGSAP(() => {
    if (ridePopUpOpen) {
      gsap.to(ridePopUpRef.current, {
        height: "70vh",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        height: "0",
      });
    }
  }, [ridePopUpOpen]);

  useGSAP(() => {
    if (confirmRidePopUpOpen) {
      gsap.to(confirmRideRef.current, {
        height: "100vh",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        height: "0",
      });
    }
  }, [confirmRidePopUpOpen]);


  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex w-[52%] items-center justify-between">
          <div className="w-14 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="src/assets/Driver_logo.jpeg"
              alt=""
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg tracking-tighter">
              Adarsh Kumar
            </h2>
            <p className="text-sm text-gray-400 font-medium -mt-1">
              Basic Level
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">₹ 174.00</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between bg-yellow-300 rounded-lg py-4 px-5 mt-6">
        <div className="flex items-center flex-col justify-center">
          <i className="text-2xl font-medium text-yellow-700 ri-time-line"></i>
          <h3 className="font-bold">10.2</h3>
          <p className="text-xs text-yellow-700 font-semibold">Hours Online</p>
        </div>

        <div className="flex items-center flex-col justify-center">
          <i class="text-2xl font-medium text-yellow-700 ri-speed-up-fill"></i>
          <h3 className="font-bold">30 km</h3>
          <p className="text-xs text-yellow-700 font-semibold">
            Total Distance
          </p>
        </div>

        <div className="flex items-center flex-col justify-center">
          <i class="text-2xl font-medium text-yellow-700 ri-booklet-line"></i>
          <h3 className="font-bold">Note</h3>
          <p className="text-xs text-yellow-700 font-semibold">Notes</p>
        </div>
      </div>

      <div ref={ridePopUpRef} className="fixed z-10 bottom-0 left-0 w-full bg-white">
        <RidePop setRidePopUpOpen={setRidePopUpOpen} setConfirmRidePopUpOpen={setConfirmRidePopUpOpen}/>
      </div>

      <div ref={confirmRideRef} className="fixed z-20 h-screen bottom-0 left-0 w-full bg-white">
        <ConfirmRidePopUp setRidePopUpOpen={setRidePopUpOpen} setConfirmRidePopUpOpen={setConfirmRidePopUpOpen} />
      </div>

    </div>
  );
}

export default CaptainDetails;
