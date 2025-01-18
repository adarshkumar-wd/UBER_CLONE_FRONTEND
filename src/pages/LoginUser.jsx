import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function LoginUser() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        try {
            e.preventDefault();

            const userData = {
                email: email,
                password: password
            }

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData, { withCredentials: true });

            if (response.status === 200) {

                const data = response.data.data;
                setUser(data.userData)

                navigate("/home")
            }

            setEmail("")
            setPassword("")
        } catch (error) {
            const message = error?.response?.data?.message
            toast.error(message)

        }
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-around'>
            <Toaster />
            <div className='h-full'>
                <img className='w-20 mb-8' src="src/assets/uber_logo.png" alt="" />

                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-xl mb-2'>What's your Email</h3>

                    <input
                        className='bg-gray-100 px-6 py-2 rounded-lg w-full border placeholder:text-sm mb-7'
                        required
                        type="email"
                        placeholder='email@expamle.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h3 className='text-xl mb-2'>Enter Password</h3>

                    <input
                        className='bg-gray-100 px-6 py-2 rounded-lg w-full border placeholder:text-sm mb-7'
                        type="password"
                        placeholder='a1b2c3'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className='w-full bg-black text-white rounded-md px-6 py-2 mt-4 font-bold '>Sign In</button>
                    <p className='w-full text-center mt-4'>New here ? <Link to="/user-signup" className='text-blue-500'>Create Account</Link></p>
                </form>
            </div>

            <div>
                <Link to="/captain-login" className="flex justify-center items-center w-full bg-[#1a6f14] text-white rounded-md px-6 py-2 mt-4 font-bold" >Login as Captain</Link>
            </div>
        </div>

    )
}

export default LoginUser