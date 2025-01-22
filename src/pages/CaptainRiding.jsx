import React , {useState , useRef} from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CaptainRiding() {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        height: "70vh",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        height: "0",
      });
    }
  }, [finishRidePanel]);

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

      <div className="h-[85%]">
        <img
          className="h-full w-full object-cover"
          src="src/assets/map_local.gif"
          alt=""
        />
      </div>

      <div onClick={() => setFinishRidePanel(true)} className="h-[35%] w-full bg-yellow-300 px-5">
        <div
          onClick={() => {}}
          className="text-2xl w-full flex justify-center pt-2 font-bold"
        >
          <i className="ri-arrow-down-s-line"></i>
        </div>

        <div className="flex w-full justify-between items-center ">
          <h3 className="text-lg font-semibold">4 KM away</h3>
          <div className="">
            <button
              onClick={() => {}}
              className=" px-4 flex items-center justify-between bg-green-400 py-1 text-white font-semibold rounded-lg"
            >
              Complete Ride
            </button>
          </div>
        </div>
      </div>

      <div ref={finishRidePanelRef} className="fixed z-20 h-screen bottom-0 left-0 w-full bg-white">
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  );
}

export default CaptainRiding;
