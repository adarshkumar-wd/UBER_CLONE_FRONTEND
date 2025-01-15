import React from 'react'
import { Link } from 'react-router-dom'

function Start() {

  return (
    <div>
        <div className='bg-cover bg-[url(https://img.freepik.com/premium-photo/traffic-lights-street-illustration-images_796580-333.jpg?w=2000)] h-screen w-full flex justify-between flex-col'>
            <img className='mt-5 w-20 ml-5' src="src/assets/uber_logo.png" alt="" />
            <div className='bg-white px-7 py-4'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to="/user-login" className='flex items-center justify-center w-full bg-black text-white rounded-md py-2 mt-4 font-bold text-2xl'>Continue</Link>
            </div>
        </div>
    </div>
  )

}

export default Start