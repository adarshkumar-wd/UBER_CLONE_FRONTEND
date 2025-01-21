import React from 'react'

function CaptainDetails() {
  return (
    <div className="w-full">

          <div className="w-full flex items-center justify-between">

            <div className="flex w-[52%] items-center justify-between">
              <div className="w-14 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="src/assets/Driver_logo.jpeg" alt="" />
              </div>
              <div>
                <h2 className="font-semibold text-lg tracking-tighter">Adarsh Kumar</h2>
                <p className="text-sm text-gray-400 font-medium -mt-1">Basic Level</p>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold">₹ 174.00</p>
            </div>

          </div>

          <div className="flex w-full items-center justify-between bg-yellow-300 rounded-lg py-4 px-5 mt-6">

            <div className="flex items-center flex-col justify-center">
              <i class="text-2xl font-medium text-yellow-700 ri-time-line"></i>
              <h3 className="font-bold">10.2</h3>
              <p className="text-xs text-yellow-700 font-semibold">Hours Online</p>
            </div>

            <div className="flex items-center flex-col justify-center">
              <i class="text-2xl font-medium text-yellow-700 ri-speed-up-fill"></i>
              <h3 className="font-bold">30 km</h3>
              <p className="text-xs text-yellow-700 font-semibold">Total Distance</p>
            </div>

            <div className="flex items-center flex-col justify-center">
              <i class="text-2xl font-medium text-yellow-700 ri-booklet-line"></i>
              <h3 className="font-bold">Note</h3>
              <p className="text-xs text-yellow-700 font-semibold">Notes</p>
            </div>
          </div>

        </div>
  )
}

export default CaptainDetails