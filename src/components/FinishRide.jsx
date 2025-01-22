import React from 'react'
import { Link } from 'react-router-dom';

function FinishRide(props) {
  return (
    <div className="pt-4 mt-4 mb-4">
      <div className="flex w-full justify-between px-3">
        <h2 className="font-bold text-2xl tracking-tight">
          Finish this Ride to Start.
        </h2>
        <div
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
          className="text-2xl font-bold"
        >
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>

      <div className="w-full gap-1 mt-3 flex flex-col items-center px-4 justify-center py-4">
        <div className="w-full p-2 rounded-lg mb-2 bg-yellow-300 px-2 flex items-center justify-between">
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

        <div className="w-full mt-4 flex flex-col">
          <form className="w-full flex flex-col gap-3">
            <Link
              to={"/captain-riding"}
              onClick={() => {}}
              className="w-full py-2 bg-green-400 text-white font-semibold p-1 flex justify-center items-center rounded-lg"
            >
              Finish Ride
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FinishRide