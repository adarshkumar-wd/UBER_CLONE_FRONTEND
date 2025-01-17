import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function CaptainProtectedWrapper({children}) {

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/validate-token` , {withCredentials:true});
    
                if (!response.status === 200) {
                    navigate("/captain-login");
                }

            } catch (error) {
                console.log(error.message || "unAuthorised Captain not allowed to this page");
                navigate("/captain-login");
            }
        };

        checkAuth();
    } , [navigate])

  return (
    <div>{children}</div>
  )
}

export default CaptainProtectedWrapper