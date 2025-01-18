import React from 'react'

function VechilePanel(props) {
  return (
    <div>
        <div className="flex w-full justify-between items-center px-3">
            <h2 className="font-bold text-2xl mb-4 tracking-tight">
              Choose your Vehicle.
            </h2>
            <div onClick={() => props.setVechilePanel(false)} className="text-2xl font-bold"><i class="ri-arrow-down-s-line"></i></div>
          </div>

          <div className="w-full flex items-center justify-between px-2 py-4 border-2 active:border-black rounded-xl mb-3">
            <img className="w-16" src="src/assets/uber_car.png" alt="" />
            <div className="flex flex-col leading-tight w-[44%] ">
              <h4 className="font-medium">
                UBER GO{" "}
                <span className="">
                  <i class="ri-user-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm">2 mins away</h5>
              <p className="font-normal text-xs">Affordable compact rides</p>
            </div>
            <h2 className="text-xl font-semibold">₹199.00</h2>
          </div>

          <div className="w-full flex items-center justify-between px-2 py-4 border-2 active:border-black rounded-xl mb-3">
            <img className="w-16" src="src/assets/uber_bike.webp" alt="" />
            <div className="flex flex-col leading-tight w-[44%] ">
              <h4 className="font-medium">
                UberAuto{" "}
                <span className="">
                  <i class="ri-user-fill"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm">5 mins away</h5>
              <p className="font-normal text-xs leading-tight">
                Affordable moter cycle rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹153.00</h2>
          </div>

          <div className="w-full flex items-center justify-between px-2 py-4 border-2 active:border-black rounded-xl mb-3">
            <img className="w-16" src="src/assets/uber_auto.png" alt="" />
            <div className="flex flex-col leading-tight w-[44%] ">
              <h4 className="font-medium">
                UberAuto{" "}
                <span className="">
                  <i class="ri-user-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm">8 mins away</h5>
              <p className="font-normal text-xs leading-tight">
                Affordable auto rides
              </p>
            </div>
            <h2 className="text-xl font-semibold">₹90.00</h2>
          </div>
    </div>
  )
}

export default VechilePanel