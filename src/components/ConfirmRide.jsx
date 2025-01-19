import React from 'react'

function ConfirmRide(props) {
  return (
    <div className=''>
        <div className="flex w-full justify-between mt-3 items-center px-3">
            <h2 className="font-bold text-2xl tracking-tight">
              Confirm your Ride.
            </h2>
            <div onClick={() => {
                props.setConfirmRidePanel(false);
                props.setVechilePanel(true);
            }} className="text-2xl font-bold"><i className="ri-arrow-down-s-line"></i></div>

         </div>
         
         <div className='w-full gap-1 mt-3 flex flex-col items-center justify-center py-4'>
            <img className='w-[45%]' src="src/assets/uber_car.png" alt="" />

            <div className='w-full flex flex-col gap-1 mt-1'>
                <div className='flex items-center border-b-2 border-b-gray-400 py-3 w-full gap-4'>
                    <i className="text-lg font-semibold ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1'>Kankaria talab , Ahemdabad</p>
                    </div>
                </div>

                <div className='flex items-center w-full gap-4 border-b-2 border-b-gray-400 py-3'>
                    <i className="text-lg font-semibold ri-map-pin-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600 -mt-1'>Kankaria talab , Ahemdabad</p>
                    </div>
                </div>

                <div className='flex items-center w-full gap-4 border-b-2 border-b-gray-400 py-3'>
                    <i className="text-lg font-semibold ri-wallet-3-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ 199.00</h3>
                        <p className='text-sm text-gray-600 -mt-1'>Cash Cash</p>
                    </div>
                </div>

            </div>

            <div className='w-full mt-7'>
                <button onClick={() => {
                    props.setVechileFound(true)
                    props.setConfirmRidePanel(false)
                }} className='w-full bg-green-400 text-white font-semibold p-1 rounded-lg'>Confirm</button>
            </div>
         </div>

    </div>
  )
}

export default ConfirmRide