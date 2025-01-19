import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VechilePanel from "../components/VechilePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const panelRef = useRef(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [vechilePanel, setVechilePanel] = useState(false);
  const vechilePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vechileFound, setVechileFound] = useState(false)
  const vechileFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70vh",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0vh",
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vechilePanel) {
      gsap.to(vechilePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vechilePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vechilePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vechileFound) {
      gsap.to(vechileFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vechileFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vechileFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);



  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className="absolute top-5 left-5">
        <img className="w-20 mb-8" src="src/assets/uber_logo.png" alt="" />
      </div>

      <div className="h-full w-full">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/map_local.gif"
          alt=""
        />
      </div>

      {/* LOCATION BOX  */}

      <div className="absolute left-0 bottom-0">
        <div className="w-full h-[30vh] bg-white px-5 py-5 relative">
          <h2
            className={`absolute font-bold top-4 right-6 text-2xl ${
              panelOpen ? "" : "hidden"
            }`}
            onClick={() => setPanelOpen(!panelOpen)}
          >
            <i className="ri-arrow-down-s-line"></i>
          </h2>

          <h2 className="mb-3 font-semibold text-2xl tracking-tight">
            Find your Trip
          </h2>

          <form onSubmit={submitHandler}>
            <div className="h-16 w-[2px] bg-gray-500 absolute top-[40%] left-7 rounded-full"></div>

            <input
              className="bg-gray-100 px-6 py-2 rounded-lg w-full border placeholder:text-sm mb-3"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />

            <input
              className="bg-gray-100 px-6 py-2 rounded-lg w-full border placeholder:text-sm mb-3"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>

        {/* LOCATION PANEL   */}

        <div ref={panelRef} className="w-full bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVechilePanel={setVechilePanel}
          />
        </div>
      </div>

      {/* VECHILE PANEL */}

      <div
        ref={vechilePanelRef}
        className="fixed z-10 bottom-0 h-[70vh] w-full p-5 bg-white translate-y-full"
      >
        <VechilePanel setConfirmRidePanel={setConfirmRidePanel} setVechilePanel={setVechilePanel} />
      </div>

      {/* CONFIRM RIDE PANEL  */}

      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 h-[70vh] w-full p-5 bg-white translate-y-full"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVechileFound={setVechileFound} setVechilePanel={setVechilePanel} />
      </div>

      {/* LOOKING FOR DRIVER PANEL  */}

      <div
        ref={vechileFoundRef}
        className="fixed z-10 bottom-0 h-[70vh] w-full p-5 bg-white translate-y-full"
      >
        <LookingForDriver setVechileFound={setVechileFound}/>
      </div>

      {/* WAITING FOR DRIVERS  */}

      <div
      ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 h-[60vh] w-full p-5 bg-white "
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>



    </div>
  );
}

export default Home;
