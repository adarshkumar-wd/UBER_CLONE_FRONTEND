import React from 'react'

function WaitingForDriver() {
  return (

    <div className=''>
        <div className="flex w-full justify-between items-center px-3">
            <div onClick={() => {
                props.setWaitingForDriver(false)
            }} className="text-2xl font-bold"><i className="ri-arrow-down-s-line"></i></div>

         </div>
         
         <div className='w-full gap-1 flex flex-col items-center justify-center py-4'>
            <div className='w-full flex justify-around items-center'>
              <img className='w-14 h-8' src="src/assets/uber_car.png" alt="" />
              <div className='leading-tight text-right'>
                <h2 className='text-lg font-medium'>Adarsh Kumar</h2>
                <h4 className='text-lg font-medium -mt-2'>JH 10B 6647</h4>
                <p className='text-sm text-gray-600 -mt-1'>Maruti Suzuki Alto</p>
              </div>
            </div>

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
         </div>

    </div>

  )
}

export default WaitingForDriver