import React , {useState} from "react";
import { Link } from "react-router-dom";

function ConfirmRidePopUp(props) {
  const [OTP, setOTP] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="pt-4 mt-4 mb-4">
      <div className="flex w-full justify-between px-3">
        <h2 className="font-bold text-2xl tracking-tight">
          Confirm this Ride to Start.
        </h2>
        <div
          onClick={() => {
            props.setRidePopUpOpen(false);
            props.setConfirmRidePopUpOpen(false);
          }}
          className="text-2xl font-bold"
        >
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>

      <div className="w-full gap-1 mt-3 flex flex-col items-center px-4 justify-center py-4">
        <div className="w-full p-2 rounded-lg mt-4 mb-5 bg-yellow-300 px-2 flex items-center justify-between">
          <div className="w-[60%] flex items-center justify-around">
            <div className="w-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="src/assets/userImage_uber.jpg"
                alt=""
              />
            </div>
            <h3 className="text-xl font-medium tracking-tight">Adarsh Kumar</h3>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">2.33 KM</h3>
        </div>

        <div className="w-full flex flex-col gap-1 mt-1">
          <div className="flex items-center border-b-2 border-b-gray-400 py-3 w-full gap-4">
            <i className="text-lg font-semibold ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankaria talab , Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center w-full gap-4 border-b-2 border-b-gray-400 py-3">
            <i className="text-lg font-semibold ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankaria talab , Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center w-full gap-4 border-b-2 border-b-gray-400 py-3">
            <i className="text-lg font-semibold ri-wallet-3-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹ 199.00</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-16 flex flex-col">
          <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
            <input
              className="bg-gray-200 w-full mb-2 text-sm px-6 py-2 rounded-lg border placeholder:text-sm"
              type="number"
              placeholder="Enter OTP"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
            <Link
              to={"/captain-riding"}
              onClick={() => {}}
              className="w-full bg-green-400 text-white font-semibold p-1 flex justify-center items-center rounded-lg"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopUpOpen(false);
                props.setRidePopUpOpen(false);
              }}
              className="w-full bg-red-500 text-white font-semibold p-1 rounded-lg"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
