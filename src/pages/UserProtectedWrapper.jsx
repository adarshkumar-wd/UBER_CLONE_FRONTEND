import React, { useContext , useEffect } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function UserProtectedWrapper({ children }) {

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/validate-token`, {
                    withCredentials: true,
                });

                console.log("response : " , response.status);
                

                if (!response.status === 200) {
                    navigate('/user-login'); 
                }
            } catch (error) {
                console.log(error.message)
                navigate('/user-login');
            }
        };

        checkAuth();
    }, [navigate]);
    

    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtectedWrapper