import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen'>

        <Link to={"/home"} className='fixed px-4 py-3 bg-white rounded-full flex items-center top-2 right-2'>
            <i className="font-semibold text-lg ri-home-3-line"></i>
        </Link>

        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="src/assets/map2.png" alt="" />
        </div>

        <div className='h-1/2 w-full px-5 pt-5'>

        <div className='w-full flex justify-around items-center'>
              <img className='w-14 h-8' src="src/assets/uber_car.png" alt="" />
              <div className='leading-tight text-right'>
                <h2 className='text-lg font-medium'>Adarsh Kumar</h2>
                <h4 className='text-lg font-medium -mt-2'>JH 10B 6647</h4>
                <p className='text-sm text-gray-600 -mt-1'>Maruti Suzuki Alto</p>
              </div>
            </div>

        <div className='w-full flex flex-col gap-1 mt-1'>

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

            <button className="w-full bg-green-400 mt-10 text-white font-semibold p-1 rounded-lg">Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding