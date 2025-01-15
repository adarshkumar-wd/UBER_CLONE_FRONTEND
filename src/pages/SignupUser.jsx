import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';


function SignupUser() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);


  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      if (response.status === 201) {

        const data = response.data.data

        setUser(data.userData)

        navigate("/home")
      }
    } catch (error) {
      console.log(error.message)
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-around'>
      <div className='h-full'>
        <img className='w-20 mb-8' src="src/assets/uber_logo.png" alt="" />

        <form onSubmit={(e) => { submitHandler(e) }}>

          <h3 className='text-base mb-2'>What's your Name</h3>

          <div className='flex gap-4 mb-5'>
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

          <h3 className='text-base mb-2'>What's your Email</h3>

          <input
            className='bg-gray-100 px-6 text-sm py-2 rounded-lg w-full border placeholder:text-sm mb-5'
            required
            type='email'
            placeholder='user@example.com'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <h3 className='text-base mb-2'>Enter Password</h3>

          <input
            className='bg-gray-100 px-6 py-2 text-sm rounded-lg w-full border placeholder:text-sm mb-5'
            required
            type='password'
            placeholder='a1b2c3'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />

          <button className='w-full bg-black text-white rounded-md px-6 py-2 mt-4 font-bold '>Sign Up</button>
          <p className='w-full text-center mt-4'>Already have a Account ? <Link to="/user-login" className='text-blue-500'>Login here</Link></p>
        </form>
      </div>

      <div>
        <p className='text-center text-xs'>Before login or user First you should read our <Link className='text-blue-500'>Private Policy</Link></p>
      </div>
    </div>

  )
}

export default SignupUser