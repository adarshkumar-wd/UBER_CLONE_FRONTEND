import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { CaptainDataContext } from '../context/captainContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


function SignupCaptain() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vechileColor, setVechileColor] = useState("");
  const [vechileNumber, setVechileNumber] = useState("");
  const [vechileCapacity, setVechileCapacity] = useState(1);
  const [vechileType, setVechileType] = useState("Car");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const newCaptain = {
        fullName: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
        vechile: {
          color: vechileColor,
          vechileNumber: vechileNumber,
          capacity: vechileCapacity,
          vechileType: vechileType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/captain-register`, newCaptain, { withCredentials: true });

      if (response.status === 201) {
        const data = response.data.data;
        setCaptain(data)
        navigate("/captain-home");
      }

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setVechileColor("");
      setVechileNumber("");
      setVechileCapacity("");
      setVechileType("");

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-around'>
      <div className='h-full'>
        <img className='w-10 mb-8' src="src/assets/captain_logo.png" alt="" />

        <form onSubmit={(e) => { submitHandler(e) }}>

          <h3 className='text-base mb-1'>What's your Name</h3>

          <div className='flex gap-4 mb-3'>
            <input
              className='bg-gray-100 text-sm px-6 py-2 rounded-lg w-1/2 border placeholder:text-sm'
              required
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
            />

            <input
              className='bg-gray-100 text-sm px-6 py-2 rounded-lg w-1/2 border placeholder:text-sm'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
            />
          </div>

          <h3 className='text-base mb-1'>What's your Email</h3>

          <input
            className='bg-gray-100 px-6 text-sm py-2 rounded-lg w-full border placeholder:text-sm mb-3'
            required
            type='email'
            placeholder='user@example.com'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <h3 className='text-base mb-1'>Enter Password</h3>

          <input
            className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-full border placeholder:text-sm mb-3'
            required
            type='password'
            placeholder='a1b2c3'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <div className='flex flex-col'>
            <h3 className='text-base mb-1'>What's your Vechicle Details</h3>

            <div className='flex gap-4 mb-3'>

              <input
                className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-1/2 border placeholder:text-sm'
                required
                type='text'
                placeholder='Color'
                value={vechileColor}
                onChange={(e) => setVechileColor(e.target.value)}
              />

              <input
                className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-1/2 border placeholder:text-sm'
                required
                type='text'
                placeholder='Vechile Number'
                value={vechileNumber}
                onChange={(e) => setVechileNumber(e.target.value)}
              />

            </div>

            <div className='flex gap-4 mb-3'>

              <input
                className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-1/2 border placeholder:text-sm'
                required
                type='number'
                placeholder='Capacity'
                value={vechileCapacity}
                onChange={(e) => setVechileCapacity(e.target.value)}
              />

              <select
                required
                className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-1/2 border placeholder:text-sm'
                value={vechileType}
                onChange={(e) => setVechileType(e.target.value)}
              >

                <option value="" disabled>Select your Vechcile</option>
                <option value="Car">Car</option>
                <option value="Auto">Auto</option>
                <option value="Moto">Moto</option>
                <option value="Bike">Bike</option>
                <option value="Scooty">Scooty</option>

              </select>

            </div>

          </div>

          <button className='w-full bg-black text-white rounded-md px-6 py-2 mt-4 font-bold '>Sign Up</button>
          <p className='w-full text-center mt-4'>Already have a Account ? <Link to="/captain-login" className='text-blue-500'>Login here</Link></p>
        </form>
      </div>

      <div>
        <p className='text-center text-xs'>Before login or user First you should read our <Link className='text-blue-500'>Private Policy</Link></p>
      </div>
    </div>
  )
}

export default SignupCaptain